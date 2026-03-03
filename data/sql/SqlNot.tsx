import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ShieldAlert, ArrowRightLeft, XCircle, AlertTriangle, Lightbulb, CheckCircle, HelpCircle, Layers, Split, ArrowDownToLine, Users, Activity, Package, Briefcase, Zap, GitCommit, GitPullRequest, Code, Target } from 'lucide-react';

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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlNot: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-rose-400 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default relative">
          <ArrowRightLeft className="w-8 h-8 text-white relative z-10" />
          <XCircle className="w-4 h-4 text-white absolute -bottom-1 -right-1 z-20" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL NOT
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The logical operator used to reverse a condition's result and powerfully deploy exclusion logic in real-world applications.
        </p>
      </header>

      {/* Intro Definition Section & Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <ArrowRightLeft className="w-6 h-6 mr-3 text-rose-500" /> What is SQL NOT?
          </h2>
          <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 mb-6 font-medium text-gray-700 dark:text-gray-300">
            The SQL NOT operator is a logical operator used to <strong className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-1 rounded mx-1">reverse</strong> the result of a given condition.
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-xl relative overflow-hidden flex flex-col items-center justify-center">
              <span className="font-black text-emerald-600 dark:text-emerald-400 text-2xl mb-2">TRUE</span>
              <ArrowDownToLine className="w-5 h-5 text-gray-400 my-2" />
              <span className="font-black text-rose-500 dark:text-rose-400 text-xl">FALSE</span>
            </div>
            <div className="p-6 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 rounded-xl relative overflow-hidden flex flex-col items-center justify-center">
              <span className="font-black text-rose-600 dark:text-rose-400 text-2xl mb-2">FALSE</span>
              <ArrowDownToLine className="w-5 h-5 text-gray-400 my-2" />
              <span className="font-black text-emerald-500 dark:text-emerald-400 text-xl">TRUE</span>
            </div>
          </div>
          <div className="p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/50 rounded-xl text-center">
            <p className="text-lg font-bold text-sky-800 dark:text-sky-300">NOT means "opposite of the given condition"</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-rose-900/50">
            <div className="absolute top-0 right-0 -m-6 text-rose-500/10"><Terminal className="w-48 h-48" /></div>
            <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
              <Code className="w-6 h-6 mr-3 text-rose-400" /> Basic Syntax
            </h2>
            <div className="space-y-4 relative z-10 w-full">
              <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table_name\nWHERE NOT condition;`} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-3">
              <HelpCircle className="w-5 h-5 mr-3 text-orange-500" /> Why Do We Need NOT?
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Instead of writing complex inclusion logic, NOT simplifies exclusion logic in real-world scenarios:</p>
            <div className="space-y-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
              <div className="flex items-center"><Users className="w-4 h-4 mr-3 text-rose-500 shrink-0" /> Target Customers who are <strong className="text-rose-600 dark:text-rose-400 ml-1">NOT</strong> active</div>
              <div className="flex items-center"><Briefcase className="w-4 h-4 mr-3 text-rose-500 shrink-0" /> Target Employees who are <strong className="text-rose-600 dark:text-rose-400 ml-1">NOT</strong> managers</div>
              <div className="flex items-center"><Package className="w-4 h-4 mr-3 text-rose-500 shrink-0" /> Target Orders that are <strong className="text-rose-600 dark:text-rose-400 ml-1">NOT</strong> completed</div>
              <div className="flex items-center"><Activity className="w-4 h-4 mr-3 text-rose-500 shrink-0" /> Target Products that are <strong className="text-rose-600 dark:text-rose-400 ml-1">NOT</strong> in stock</div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Practical Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"><Database className="text-sky-500 w-8 h-8 mr-3" /> Demo Setup (Course Website)</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-sky-500" /> 1. Create Students Table</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n    StudentID INT,\n    Name VARCHAR(50),\n    Marks INT,\n    City VARCHAR(50)\n);`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Layers className="w-5 h-5 mr-2 text-emerald-500" /> 2. Insert Sample Data</h3>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Students VALUES\n(1, 'Arun', 85, 'Chennai'),\n(2, 'Divya', 92, 'Madurai'),\n(3, 'Kiran', 40, 'Chennai'),\n(4, 'Meena', 70, 'Coimbatore'),\n(5, 'Rahul', 35, 'Madurai');`} />
            </div>
          </div>

          {/* Current Data Output */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner mt-8 max-w-4xl mx-auto">
            <p className="text-xs uppercase font-bold text-sky-600 dark:text-sky-400 mb-4 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Students Database</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono text-left whitespace-nowrap">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-3 px-4 rounded-tl-lg">StudentID</th><th className="px-4">Name</th><th className="px-4">Marks</th><th className="px-4 rounded-tr-lg">City</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">1</td><td className="px-4">Arun</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-medium font-bold">85</td><td className="px-4 text-sky-600 dark:text-sky-400 font-medium">Chennai</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">2</td><td className="px-4">Divya</td><td className="px-4 text-emerald-600 dark:text-emerald-400 font-medium font-bold">92</td><td className="px-4 text-orange-600 dark:text-orange-400 font-medium">Madurai</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">3</td><td className="px-4">Kiran</td><td className="px-4 text-rose-600 dark:text-rose-400 font-medium font-bold">40</td><td className="px-4 text-sky-600 dark:text-sky-400 font-medium">Chennai</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">4</td><td className="px-4">Meena</td><td className="px-4 text-amber-600 dark:text-amber-400 font-medium font-bold">70</td><td className="px-4 text-fuchsia-600 dark:text-fuchsia-400 font-medium">Coimbatore</td></tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"><td className="py-2 px-4 font-bold text-indigo-500">5</td><td className="px-4">Rahul</td><td className="px-4 text-rose-600 dark:text-rose-400 font-medium font-bold">35</td><td className="px-4 text-orange-600 dark:text-orange-400 font-medium">Madurai</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Target Logic Execution Examples Block */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 px-4"><Zap className="w-8 h-8 mr-3 text-amber-500" /> Teaching Order: Executing NOT</h2>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Using Basic NOT Condition */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 group flex flex-col">
            <h3 className="text-xl font-bold flex flex-wrap items-center text-gray-900 dark:text-white mb-4">
              <span className="text-sky-500 bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded-lg mr-3 text-sm flex items-center shrink-0">1. Basic NOT</span>
              <span className="w-full mt-2 lg:w-auto lg:mt-0 font-medium text-base">Students who did <strong className="text-rose-500 underline mx-1">NOT</strong> score above 80</span>
            </h3>

            <div className="flex-grow">
              <CodeSnippetBlock codeSnippet={`SELECT * \nFROM Students\nWHERE NOT Marks > 80;`} />
            </div>

            <div className="bg-sky-50 dark:bg-sky-900/20 p-3 rounded-lg border border-sky-100 dark:border-sky-800 mb-4 text-sm font-medium">
              <p className="flex items-center text-gray-700 dark:text-gray-300 mb-1"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Marks &gt; 80 <ArrowRightLeft className="w-3 h-3 mx-2 text-gray-400" /> Arun, Divya</p>
              <p className="flex items-center text-rose-700 dark:text-rose-400"><XCircle className="w-4 h-4 text-rose-500 mr-2" /> <strong className="mr-2">NOT</strong> Marks &gt; 80 <ArrowRightLeft className="w-3 h-3 mx-2 text-rose-400" /> <span className="font-bold underline">Everyone Else</span></p>
            </div>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
              <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">✅ Matches:</p>
              <div className="flex gap-2 flex-wrap font-mono text-sm">
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">3 - Kiran (40)</span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">4 - Meena (70)</span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">5 - Rahul (35)</span>
              </div>
            </div>
          </div>

          {/* Using NOT with Equal */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 group flex flex-col">
            <h3 className="text-xl font-bold flex flex-wrap items-center text-gray-900 dark:text-white mb-4">
              <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg mr-3 text-sm flex items-center leading-none shrink-0">2. NOT Equal</span>
              <span className="w-full mt-2 lg:w-auto lg:mt-0 font-medium text-base">Students <strong className="text-rose-500 underline mx-1">NOT</strong> from Chennai</span>
            </h3>

            <div className="flex-grow">
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE NOT City = 'Chennai';`} />
            </div>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">✅ Matches:</p>
              <div className="flex gap-2 flex-wrap font-mono text-sm">
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">2 - Divya (Madurai)</span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">4 - Meena (Coimbatore)</span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">5 - Rahul (Madurai)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Example 3: NOT IN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">3. NOT IN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium"><strong className="text-purple-600 dark:text-purple-400 mx-1">NOT</strong> from Chennai or Madurai</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City NOT IN ('Chennai', 'Madurai');`} />
            <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">Output:</p>
              <p className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 p-2 rounded">4 - Meena (Coimbatore)</p>
            </div>
          </div>

          {/* Example 4: NOT BETWEEN */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">4. NOT BETWEEN</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium"><strong className="text-amber-600 dark:text-amber-400 mx-1">NOT</strong> scoring between 50 and 90</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks NOT BETWEEN 50 AND 90;`} />
            <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
              <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Output:</p>
              <p className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 p-2 rounded">2 (Divya: 92), 3 (Kiran: 40), 5 (Rahul: 35)</p>
            </div>
          </div>

          {/* Example 5: NOT LIKE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">5. NOT LIKE</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Name does <strong className="text-fuchsia-600 dark:text-fuchsia-400 mx-1">NOT</strong> start with 'A'</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Name NOT LIKE 'A%';`} />
            <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
              <p className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-wider mb-2">Output:</p>
              <p className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 p-2 rounded">Divya, Kiran, Meena, Rahul</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal SQL Logic Engine & NOT vs <> Comparison */}
      <section className="max-w-6xl mx-auto mb-16 grid xl:grid-cols-2 gap-8">

        {/* Memory Box */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30">
          <h2 className="text-2xl font-black flex items-center text-indigo-900 dark:text-indigo-400 mb-6 border-b border-indigo-200 dark:border-indigo-800/30 pb-4">
            <GitPullRequest className="w-6 h-6 mr-3 text-indigo-500" /> How SQL Internally Thinks
          </h2>

          <p className="text-indigo-800 dark:text-indigo-200 font-bold mb-4">When the SQL compiler visually sees:</p>
          <code className="block bg-white dark:bg-black p-3 rounded-lg font-mono text-sm border border-indigo-200 dark:border-indigo-800 text-gray-700 dark:text-gray-300 mb-6 drop-shadow-sm">
            WHERE <strong className="text-rose-500">NOT</strong> Marks &gt; 80
          </code>

          <p className="text-indigo-800 dark:text-indigo-200 font-bold mb-4 flex items-center"><ArrowDownToLine className="w-4 h-4 mr-2" /> It converts it logically behind the scenes to:</p>
          <code className="block bg-white dark:bg-black p-3 rounded-lg font-mono text-sm border border-indigo-200 dark:border-indigo-800 text-gray-700 dark:text-gray-300 mb-6 shadow-md border-l-4 border-l-emerald-500">
            WHERE Marks <strong className="text-emerald-500">&lt;=</strong> 80
          </code>

          <div className="bg-white/60 dark:bg-black/40 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
            <p className="text-sm font-black text-indigo-900 dark:text-indigo-300 mb-2 flex items-center"><Zap className="w-4 h-4 mr-2 text-amber-500" /> Performance Tip (Very Important for Course):</p>
            <p className="text-sm text-indigo-800 dark:text-indigo-200 font-medium mb-4">Sometimes using the explicit direct opposite condition natively is significantly more readable and compiles faster.</p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-xs space-y-2 font-bold text-indigo-700 dark:text-indigo-300">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500" /> More readable</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500" /> Optimizer-friendly</li>
              </ul>
              <ul className="text-xs space-y-2 font-bold text-indigo-700 dark:text-indigo-300">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500" /> Better index usage</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 mr-2 text-emerald-500" /> Cleaner execution plan</li>
              </ul>
            </div>
            <p className="mt-4 text-center font-black text-indigo-900 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg">👉 Teach students that clarity &gt; cleverness</p>
          </div>
        </div>

        {/* Not VS Not Equal Box */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
            <Split className="w-6 h-6 mr-3 text-sky-500" /> NOT vs &lt;&gt; Comparison
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase tracking-widest bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr><th className="py-3 px-4 rounded-tl-lg">Operator</th><th className="px-4 rounded-tr-lg">Purpose</th></tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300 font-medium font-mono">
                <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-3 px-4 bg-rose-50/50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400 font-bold">NOT condition</td><td className="px-4">Reverses full condition</td></tr>
                <tr><td className="py-3 px-4 bg-sky-50/50 dark:bg-sky-900/10 text-sky-600 dark:text-sky-400 font-bold">&lt;&gt; or !=</td><td className="px-4">Not equal operator</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 relative">
            <div className="absolute top-0 right-0 p-3"><span className="text-[10px] font-black uppercase text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">Real-World Blood Bank AI</span></div>
            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3 mt-2 flex items-center"><Target className="w-4 h-4 mr-2 text-rose-500" /> "Find donors who are NOT Blood Group O-"</p>

            <div className="flex gap-4 items-center">
              <code className="flex-1 bg-white dark:bg-black p-3 rounded-xl text-xs font-mono border border-gray-200 dark:border-gray-800 text-gray-500 relative line-through decoration-rose-500 opacity-60">
                WHERE <strong className="text-rose-500 mx-1">NOT</strong> BloodGroup = 'O-'
              </code>
              <ArrowRightLeft className="w-4 h-4 text-gray-400 shrink-0" />
              <code className="flex-1 bg-white dark:bg-black p-3 rounded-xl text-xs font-mono border-2 border-emerald-400 dark:border-emerald-600 text-gray-800 dark:text-gray-200 shadow-sm relative">
                <span className="absolute -top-3 -right-2 bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">CLEANER</span>
                WHERE BloodGroup <strong className="text-emerald-500 mx-1">&lt;&gt;</strong> 'O-'
              </code>
            </div>
            <p className="text-xs font-bold text-gray-500 mt-4 text-center">More professional structural write path mapping.</p>
          </div>
        </div>

      </section>

      {/* Extreme Trap Warning Code section (Mistakes + Advice) */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">

        {/* Important Warning Left */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
          <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30 flex-1">
            <h3 className="text-2xl font-black flex items-center text-red-900 dark:text-red-400 mb-6 border-b border-red-200 dark:border-red-900/30 pb-4">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> Common Mistakes
            </h3>

            {/* Mistake 1 */}
            <div className="mb-6">
              <div className="flex items-center text-red-700 dark:text-red-400 font-bold mb-2">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-xs mr-2 border border-red-200 dark:border-red-800 shadow-sm">❌ Mistake 1</span>
                <span className="text-sm">Using NOT without understanding NULL</span>
              </div>
              <code className="block bg-white/50 dark:bg-black/50 p-3 rounded-lg text-sm font-mono border border-red-100 dark:border-red-900/30 text-gray-700 dark:text-gray-300 mb-2 mt-2">
                WHERE <strong className="text-red-500">NOT</strong> Marks = 80
              </code>
              <p className="text-xs font-bold text-red-800 dark:text-red-300">If Marks contains NULL, it will NOT behave as expected. Better use: <code className="bg-emerald-100 text-emerald-700 px-1 rounded ml-1">WHERE Marks &lt;&gt; 80</code></p>
            </div>

            <div className="w-full h-px bg-red-200 dark:bg-red-900/50 mb-6"></div>

            {/* Mistake 2 */}
            <div>
              <div className="flex items-center text-red-700 dark:text-red-400 font-bold mb-2">
                <span className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-xs mr-2 border border-red-200 dark:border-red-800 shadow-sm">❌ Mistake 2</span>
                <span className="text-sm">Confusing NOT IN with NULL values</span>
              </div>
              <p className="text-sm font-bold text-red-800 dark:text-red-300 my-2">If a subquery returns NULL explicitly:</p>
              <code className="block bg-white/50 dark:bg-black/50 p-3 rounded-lg text-sm font-mono border border-red-100 dark:border-red-900/30 text-gray-700 dark:text-gray-300 mb-2">
                WHERE ID <strong className="text-red-500">NOT IN</strong> (SELECT ID FROM table2)
              </code>
              <p className="text-xs font-bold text-red-800 dark:text-red-300 mb-2">It may completely fail and return zero rows completely!</p>
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800">👉 Professional Tip: Use <strong className="font-mono bg-emerald-200 dark:bg-emerald-900/60 px-1 rounded mx-1">NOT EXISTS</strong> instead.</p>
            </div>

          </div>
        </div>

        {/* 15 Yrs Professional Right */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 text-amber-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
              <ShieldAlert className="w-8 h-8 mr-3 text-amber-500" /> 15+ Years Mastery Insight
            </h2>
            <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Production Standard Realities</p>

            <div className="space-y-4 relative z-10 mb-8 font-medium text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> Avoid overusing NOT logic arbitrarily.</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> Prefer explicit positive logic implementations whenever physically possible.</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> ALWAYS map and consider completely invisible NULL behavior.</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> Force swap `NOT IN` logic strings specifically out for `NOT EXISTS` across massive subquery arrays.</div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> Aggressively execute mapping test coverage mapped directly resolving edge case bugs.</div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl relative z-10 shadow-xl border border-slate-700">
            <div className="absolute top-0 right-0 p-3"><span className="text-[10px] font-black uppercase text-rose-400 bg-rose-900/30 px-2 py-1 rounded">Enterprise Advanced Array</span></div>
            <p className="text-sm font-bold text-rose-400 mb-2 flex items-center tracking-widest uppercase"><GitCommit className="w-4 h-4 mr-2" /> Advanced Concept</p>
            <h4 className="text-lg font-black mb-3 text-white">Using NOT EXISTS</h4>
            <code className="block bg-black/50 p-4 rounded-xl text-xs font-mono text-gray-300 leading-relaxed border border-slate-800">
              SELECT Name<br />
              FROM Students s<br />
              WHERE <strong className="text-fuchsia-400 mx-1 bg-fuchsia-900/40 px-1 rounded">NOT EXISTS</strong> (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;SELECT 1<br />
              &nbsp;&nbsp;&nbsp;&nbsp;FROM Exams e<br />
              &nbsp;&nbsp;&nbsp;&nbsp;WHERE s.StudentID = e.StudentID<br />
              );
            </code>
            <p className="text-[10px] font-bold text-gray-400 mt-3 flex items-center justify-center uppercase tracking-widest"><Layers className="w-3 h-3 mr-1" /> Used aggressively in global enterprise mapping structures.</p>
          </div>

        </div>
      </section>

      {/* Lab Challenges Exercises */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-rose-600 to-indigo-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-rose-300" /> Student Practice Exercises
            </h2>
            <ul className="space-y-4 font-semibold text-lg text-rose-50">
              <li className="flex items-center"><span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mr-4 shadow-sm border border-white/20 font-black text-rose-200 shrink-0">1</span> Write an exact string explicitly querying mapping isolating students NOT strictly bound originating from Madurai.</li>
              <li className="flex items-center"><span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mr-4 shadow-sm border border-white/20 font-black text-rose-200 shrink-0">2</span> Select explicit arrays dropping definitively records representing student log limits structurally scoring heavily strictly below 50.</li>
              <li className="flex items-center"><span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mr-4 shadow-sm border border-white/20 font-black text-rose-200 shrink-0">3</span> Isolate physical data rows returning exclusively target user maps explicitly whose direct target names inherently never definitively end mapped targeting 'a'.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlNot;