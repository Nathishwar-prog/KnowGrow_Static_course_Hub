import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  AlertTriangle, Lightbulb, CheckCircle2, XCircle, BrainCircuit,
  GraduationCap, Target, Layers, ArrowDownAZ, ArrowUpZA, SortAsc,
  Clock, HeartPulse, Activity, Search, Code
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

const SqlOrderBy: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <SortAsc className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ORDER BY</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Bring structure to chaos. Learn to sort your query results perfectly—from alphabetizing lists to finding top scorers instantly.
        </p>
      </header>

      {/* Intro Definition Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layers className="w-7 h-7 mr-3 text-blue-500" /> What is SQL ORDER BY?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            The SQL <code className="bg-blue-50 dark:bg-blue-900/50 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400">ORDER BY</code> clause is used to sort the result of a query based on one or more columns.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <span className="font-bold text-blue-900 dark:text-blue-300 flex items-center">
                <ArrowUpZA className="w-5 h-5 mr-2 text-blue-500" /> Ascending (ASC)
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg">Smallest → Largest</span>
            </div>
            <div className="flex items-center justify-between bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
              <span className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center">
                <ArrowDownAZ className="w-5 h-5 mr-2 text-indigo-500" /> Descending (DESC)
              </span>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg">Largest → Smallest</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-gray-900 p-4 rounded-xl border border-slate-200 dark:border-gray-700 text-center font-bold text-slate-700 dark:text-slate-300">
            In simple terms: ORDER BY arranges query results in a specific order.
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-3xl shadow-lg border border-indigo-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Code className="w-7 h-7 mr-3 text-indigo-400" /> 2️⃣ Basic Syntax
          </h2>
          <CodeSnippetBlock
            codeSnippet={`SELECT column1, column2\nFROM table_name\nORDER BY column_name;`}
          />
          <div className="bg-indigo-900/50 p-4 rounded-xl border border-indigo-500/50 flex items-start mt-4">
            <Lightbulb className="w-5 h-5 mr-3 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-indigo-200 leading-relaxed">
              By default, if you don't specify ASC or DESC, SQL automatically sorts data in <strong className="text-white">ascending order (ASC)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Setup */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
          <Database className="w-8 h-8 mr-3 text-blue-500" /> 🧪 Practical Example
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 px-2 py-1 rounded text-sm mr-3">Step 1</span>
              Create Table
            </h3>
            <CodeSnippetBlock
              title="Students Schema"
              codeSnippet={`CREATE TABLE Students (\n    StudentID INT,\n    Name VARCHAR(50),\n    Marks INT,\n    City VARCHAR(50)\n);`}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 px-2 py-1 rounded text-sm mr-3">Step 2</span>
              Insert Sample Data
            </h3>
            <CodeSnippetBlock
              title="Mock Data Insert"
              codeSnippet={`INSERT INTO Students VALUES\n(1,'Arun',85,'Chennai'),\n(2,'Divya',92,'Madurai'),\n(3,'Kiran',40,'Chennai'),\n(4,'Meena',70,'Coimbatore'),\n(5,'Rahul',35,'Madurai');`}
            />
          </div>
        </div>

        <div className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400 to-indigo-500"></div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            📊 Table Visualization (Unsorted)
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

      {/* Core Sorting Mechanics Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* ASC */}
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 flex flex-col h-full hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold flex items-center text-emerald-900 dark:text-emerald-400 mb-6">
            <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">3</span>
            ORDER BY (Ascending)
          </h2>
          <p className="text-emerald-800 dark:text-emerald-300 font-medium mb-4">Sort students by Marks in ascending order.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY Marks ASC;`} />

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Lowest</span>
              <ArrowDownAZ className="w-4 h-4 text-emerald-400" />
            </div>
            <DataTable
              headers={['Name', 'Marks']}
              rows={[
                ['Rahul', <span className="font-bold text-emerald-600 dark:text-emerald-400">35</span>],
                ['Kiran', <span className="font-bold text-emerald-600 dark:text-emerald-400">40</span>],
                ['Meena', <span className="font-bold text-emerald-600 dark:text-emerald-400">70</span>],
                ['Arun', <span className="font-bold text-emerald-600 dark:text-emerald-400">85</span>],
                ['Divya', <span className="font-bold text-emerald-600 dark:text-emerald-400">92</span>],
              ]}
            />
            <div className="text-center font-bold text-emerald-700 dark:text-emerald-400 text-sm bg-white dark:bg-emerald-900/40 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
              ASC means lowest to highest.
            </div>
          </div>
        </div>

        {/* DESC */}
        <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-800/30 flex flex-col h-full hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-6">
            <span className="bg-rose-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">4</span>
            ORDER BY (Descending)
          </h2>
          <p className="text-rose-800 dark:text-rose-300 font-medium mb-4">Sort students by Marks in descending order.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY Marks DESC;`} />

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Highest</span>
              <ArrowUpZA className="w-4 h-4 text-rose-400" />
            </div>
            <DataTable
              headers={['Name', 'Marks']}
              rows={[
                ['Divya', <span className="font-bold text-rose-600 dark:text-rose-400">92</span>],
                ['Arun', <span className="font-bold text-rose-600 dark:text-rose-400">85</span>],
                ['Meena', <span className="font-bold text-rose-600 dark:text-rose-400">70</span>],
                ['Kiran', <span className="font-bold text-rose-600 dark:text-rose-400">40</span>],
                ['Rahul', <span className="font-bold text-rose-600 dark:text-rose-400">35</span>],
              ]}
            />
            <div className="text-center font-bold text-rose-700 dark:text-rose-400 text-sm bg-white dark:bg-rose-900/40 py-2 rounded-lg border border-rose-100 dark:border-rose-800/50">
              DESC means highest to lowest.
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Column Sorting */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex flex-col md:flex-row justify-between md:items-center gap-6">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">5</span>
              ORDER BY Multiple Columns
            </h2>
            <p className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 font-bold px-4 py-2 rounded-xl text-sm border border-indigo-200 dark:border-indigo-800/50">
              You can sort using more than one column.
            </p>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-4 flex items-center"><Target className="w-5 h-5 mr-2 text-indigo-500" /> <strong>Example:</strong> Sort by City first, then Marks.</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY City ASC, Marks DESC;`} />

              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30 space-y-3 mt-6">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-400 text-sm uppercase tracking-wider mb-2">Explanation:</h4>
                <p className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"><span className="bg-indigo-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-3 shadow-sm">1</span> First sorted by City (A-Z)</p>
                <p className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"><span className="bg-indigo-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-3 shadow-sm">2</span> Then sorted by Marks (High-Low) <em>within</em> each city</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <DataTable
                headers={['Name', 'City (1st Sort)', 'Marks (2nd Sort)']}
                rows={[
                  ['Arun', <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold">Chennai</span>, '85'],
                  ['Kiran', <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold">Chennai</span>, '40'],
                  ['Meena', <span className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-bold">Coimbatore</span>, '70'],
                  ['Divya', <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 font-bold">Madurai</span>, '92'],
                  ['Rahul', <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 font-bold">Madurai</span>, '35'],
                ]}
              />
              <p className="text-xs text-center font-bold text-gray-500 dark:text-gray-400">Notice how in Madurai, Divya (92) is sorted above Rahul (35).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Varied Data Types Sorting */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-3 gap-8">

        {/* Column Numbers */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden group hover:border-amber-500 transition-colors">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-bl-full -z-10 group-hover:bg-amber-500/20 transition-colors"></div>
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-slate-500 text-white w-6 h-6 text-sm rounded flex items-center justify-center mr-2 font-bold shadow-md">6</span>
            Sort by Column #
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">SQL allows using column position numbers instead of names.</p>
          <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nFROM Students\nORDER BY 2 DESC;`} />
          <p className="text-xs font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-500 mb-4 text-center">2 refers to Marks column</p>
          <div className="mt-auto bg-amber-50 dark:bg-amber-900/10 p-3 rounded-xl border border-amber-200 dark:border-amber-800/30 flex items-start">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 shrink-0" />
            <p className="text-xs font-bold text-amber-800 dark:text-amber-400">Not recommended in production code.</p>
          </div>
        </div>

        {/* Text Data */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-slate-500 text-white w-6 h-6 text-sm rounded flex items-center justify-center mr-2 font-bold shadow-md">7</span>
            Sort Text Data
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">SQL sorts text alphabetically entirely automatically.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY Name;`} />
          <div className="mt-auto">
            <div className="bg-slate-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50">
              <ul className="text-sm font-mono text-center space-y-1 text-blue-600 dark:text-blue-400 font-bold mb-3">
                <li><span className="text-gray-400 font-normal">1.</span> Arun</li>
                <li><span className="text-gray-400 font-normal">2.</span> Divya</li>
                <li><span className="text-gray-400 font-normal">3.</span> Kiran</li>
                <li><span className="text-gray-400 font-normal">4.</span> Meena</li>
                <li><span className="text-gray-400 font-normal">5.</span> Rahul</li>
              </ul>
              <p className="text-xs text-center font-bold text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-2">(A → Z)</p>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col hover:border-blue-500 transition-colors">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-slate-500 text-white w-6 h-6 text-sm rounded flex items-center justify-center mr-2 font-bold shadow-md">8</span>
            Sort Dates
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">Perfect for showing the newest items first.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Orders\nORDER BY OrderDate DESC;`} />
          <div className="mt-auto">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 flex items-center justify-center flex-col text-center">
              <Clock className="w-8 h-8 text-blue-500 mb-2" />
              <p className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-1">Shows Latest First</p>
              <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">Commonly used in reports and dashboards.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Execution Order - Visual Flow */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl shadow-xl border border-indigo-700 text-white relative">
          <h2 className="text-2xl font-black flex items-center text-white mb-8">
            <BrainCircuit className="w-7 h-7 mr-3 text-emerald-400" /> 🧠 Execution Order in SQL
          </h2>
          <p className="text-indigo-200 font-medium mb-8">SQL processes queries in a specific order behind the scenes. <strong className="text-emerald-400">ORDER BY is almost always executed last.</strong></p>

          {/* Flow Diagram */}
          <div className="flex flex-wrap justify-between items-center gap-y-6 relative mb-12 py-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-800/50 -z-10 -translate-y-1/2 hidden md:block"></div>

            <div className="flex flex-col items-center bg-slate-900 p-2 rounded-xl z-10 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-slate-400 mb-2 shadow-sm">1</div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded">FROM</span>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-500 hidden md:block" />

            <div className="flex flex-col items-center bg-slate-900 p-2 rounded-xl z-10 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-slate-400 mb-2 shadow-sm">2</div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded">WHERE</span>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-500 hidden md:block" />

            <div className="flex flex-col items-center bg-slate-900 p-2 rounded-xl z-10 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-slate-400 mb-2 shadow-sm">3 & 4</div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">GROUP BY<br />& HAVING</span>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-500 hidden md:block" />

            <div className="flex flex-col items-center bg-slate-900 p-2 rounded-xl z-10 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-slate-400 mb-2 shadow-sm">5</div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded">SELECT</span>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-500 hidden md:block" />

            <div className="flex flex-col items-center bg-slate-900 p-2 rounded-xl z-10 w-full md:w-auto transform md:scale-110">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center font-black text-emerald-400 mb-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">6</div>
              <span className="text-xs font-black text-emerald-300 uppercase tracking-widest bg-emerald-900/80 px-4 py-1.5 rounded border border-emerald-500/30">ORDER BY</span>
            </div>
          </div>

          <div className="bg-black/30 border border-white/10 p-5 rounded-xl">
            <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nFROM Students\nWHERE Marks > 40\nORDER BY Marks DESC;`} />
          </div>
        </div>
      </section>

      {/* Real World Scenario */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 overflow-hidden relative">
          <div className="absolute top-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-2">
              <HeartPulse className="w-8 h-8 mr-3 text-rose-500" /> 🧩 Real-World Example
            </h2>
            <p className="text-rose-800 dark:text-rose-300 font-medium text-lg">
              In your <strong>LifeLink AI</strong> blood bank project:
            </p>
            <p className="text-rose-900 dark:text-rose-200 bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 font-medium shadow-sm">
              You want to see donors sorted by their recent donation date, so you can call the most immediately available donors first.
            </p>
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30 px-3 py-1 rounded">
              <Clock className="w-4 h-4 mr-2" /> Shows most recent donors first
            </div>
          </div>

          <div className="flex-1 w-full bg-slate-900/5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/50">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Donors\nORDER BY LastDonationDate DESC;`} />
          </div>
        </div>
      </section>

      {/* Developer Wisdom & Warnings Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Tips
            </div>
          </h2>
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-sm"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" /> Always use ORDER BY for reports</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-7 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50">Without ORDER BY, SQL engine guarantees <strong>zero</strong> consistency in row return order.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center text-sm"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" /> Use DESC for ranking/leaderboards</h4>
              <code className="block text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded shadow-sm">ORDER BY Marks DESC;</code>
              <p className="text-xs font-medium text-blue-800 dark:text-blue-300 mt-2 ml-1">Top scorers immediately appear first.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-sm"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" /> Use multiple columns carefully</h4>
              <code className="block text-xs font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded ml-7 mb-2 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-800">ORDER BY Department, Salary DESC</code>
              <p className="text-xs text-gray-600 dark:text-gray-400 ml-7">Sorts employees by their department grouping first, and ranks salary high-to-low within it.</p>
            </div>

            <div className="flex items-start bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <AlertTriangle className="w-5 h-5 mr-3 text-amber-500 shrink-0" />
              <p className="text-xs font-bold text-amber-800 dark:text-amber-400 italic">Avoid sorting in large subqueries—it kills performance heavily.</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors flex flex-col">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <AlertTriangle className="w-7 h-7 mr-3 text-rose-500" /> ⚠️ Common Mistakes
          </h2>
          <ul className="space-y-4 mb-8 text-gray-700 dark:text-gray-300 font-medium bg-rose-50/50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-900/20">
            <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Forgetting ASC vs DESC meanings</li>
            <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Placing ORDER BY before WHERE</li>
            <li className="flex items-start"><XCircle className="w-5 h-5 mr-3 text-rose-500 shrink-0 mt-0.5" /> <span>Expecting sorted results just because rows were INITIALLY inserted in order</span></li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-4 mt-auto">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-200 dark:border-rose-800/30 flex flex-col">
              <h4 className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center uppercase tracking-wider mb-2"><XCircle className="w-4 h-4 mr-1" /> Wrong</h4>
              <CodeSnippetBlock codeSnippet={`SELECT * FROM Students;`} />
              <p className="text-xs text-rose-600 dark:text-rose-300 font-bold mt-auto pb-1 text-center">Order is absolutely NOT guaranteed.</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/30 flex flex-col">
              <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center uppercase tracking-wider mb-2"><CheckCircle2 className="w-4 h-4 mr-1" /> Correct</h4>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY Name;`} />
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default SqlOrderBy;