import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  AlertTriangle, Lightbulb, CheckCircle2, XCircle, BrainCircuit,
  GraduationCap, Target, Layers, Calculator, ToggleLeft, Activity, Info, FileQuestion, Split, Search, Code
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

const SqlOr: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Split className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">OR</span> OPERATOR
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate operator of flexibility. Learn how to combine multiple conditions where <strong className="text-purple-600 dark:text-purple-400">at least one</strong> rule must pass.
        </p>
      </header>

      {/* Intro Definition */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-7 h-7 mr-3 text-indigo-500" /> What is SQL OR?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-lg">
            The SQL <code className="bg-indigo-50 dark:bg-indigo-900/50 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400">OR</code> operator is a logical operator used to combine multiple conditions in a WHERE clause.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
            <p className="text-lg text-indigo-900 dark:text-indigo-300 font-black flex items-center mb-2">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> It returns TRUE if at least one condition is TRUE.
            </p>
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-400 mt-2 italic flex items-start">
              <span className="font-bold mr-2 not-italic">In simple terms:</span> "Either condition A or condition B must be true."
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-3xl shadow-lg border border-indigo-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Code className="w-7 h-7 mr-3 text-purple-400" /> 2️⃣ Basic Syntax
          </h2>
          <CodeSnippetBlock
            codeSnippet={`SELECT column1, column2\nFROM table_name\nWHERE condition1 OR condition2;`}
          />
          <div className="space-y-3 font-medium text-sm text-indigo-200 bg-white/5 p-4 rounded-xl border border-white/10 mt-2">
            <p className="flex items-center"><Target className="w-4 h-4 mr-2 text-emerald-400" /> <code className="text-white mr-2">condition1</code> → first condition</p>
            <p className="flex items-center"><Target className="w-4 h-4 mr-2 text-purple-400" /> <code className="text-white mr-2">condition2</code> → second condition</p>
            <div className="mt-4 pt-3 border-t border-indigo-800/50 font-bold text-emerald-300 text-center uppercase tracking-widest text-xs">
              If any ONE condition is satisfied, the row will appear in the result.
            </div>
          </div>
        </div>
      </section>

      {/* Demo Setup */}
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
              codeSnippet={`INSERT INTO Students VALUES\n(1,'Arun',85,'Chennai'),\n(2,'Divya',92,'Madurai'),\n(3,'Kiran',40,'Chennai'),\n(4,'Meena',70,'Coimbatore'),\n(5,'Rahul',35,'Madurai');`}
            />
          </div>
        </div>

        <div className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            📊 Table Visualization
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

      {/* Examples Grid */}
      <section className="max-w-5xl mx-auto mb-16 space-y-8">

        {/* Example 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-indigo-500 transition-colors">
          <div className="bg-indigo-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-indigo-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">3</span>
              Example 1 – Basic OR Condition
            </h3>
            <p className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Find students from Chennai OR Madurai
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City='Chennai' OR City='Madurai';`} />
            <div className="flex flex-col">
              <DataTable
                headers={['StudentID', 'Name', 'Marks', 'City']}
                rows={[
                  ['1', 'Arun', '85', <span className="text-indigo-600 font-bold dark:text-indigo-400 ring-2 ring-indigo-500/20 px-1 rounded">Chennai</span>],
                  ['2', 'Divya', '92', <span className="text-purple-600 font-bold dark:text-purple-400 ring-2 ring-purple-500/20 px-1 rounded">Madurai</span>],
                  ['3', 'Kiran', '40', <span className="text-indigo-600 font-bold dark:text-indigo-400 ring-2 ring-indigo-500/20 px-1 rounded">Chennai</span>],
                  ['5', 'Rahul', '35', <span className="text-purple-600 font-bold dark:text-purple-400 ring-2 ring-purple-500/20 px-1 rounded">Madurai</span>],
                ]}
              />
              <p className="text-xs text-center font-bold text-gray-500 tracking-wide uppercase mt-[-10px]">Rows selected because AT LEAST ONE condition is true.</p>
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-purple-500 transition-colors">
          <div className="bg-purple-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-purple-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">4</span>
              Example 2 – OR with Numeric Conditions
            </h3>
            <p className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Find students who scored above 90 OR below 40
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks > 90 OR Marks < 40;`} />
            <DataTable
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                ['2', 'Divya', <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded">92</span>, 'Madurai'],
                ['5', 'Rahul', <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded">35</span>, 'Madurai'],
              ]}
            />
          </div>
        </div>

        {/* Example 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group hover:border-emerald-500 transition-colors">
          <div className="bg-emerald-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md">5</span>
              Example 3 – OR with Different Columns
            </h3>
            <p className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center w-fit">
              ❓ Find students from Chennai OR scoring above 90
            </p>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City='Chennai' OR Marks > 90;`} />
            <DataTable
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                ['1', 'Arun', '85', <span className="text-emerald-600 dark:text-emerald-400 font-bold ring-2 ring-emerald-500/20 px-1 rounded">Chennai</span>],
                ['2', 'Divya', <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded">92</span>, 'Madurai'],
                ['3', 'Kiran', '40', <span className="text-emerald-600 dark:text-emerald-400 font-bold ring-2 ring-emerald-500/20 px-1 rounded">Chennai</span>],
              ]}
            />
          </div>
        </div>

      </section>

      {/* Combining OR and AND (Important) & Truth Table */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">

        {/* Combining Operations */}
        <div className="lg:col-span-7 bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-3xl shadow-xl border border-indigo-700 text-white relative flex flex-col text-sm">
          <div className="absolute top-4 right-4 bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-purple-500/50">
            Important Concept
          </div>
          <h2 className="text-2xl font-black flex items-center text-white mb-6">
            <BrainCircuit className="w-7 h-7 mr-3 text-purple-400" /> 6️⃣ OR with AND
          </h2>
          <p className="text-indigo-200 font-medium mb-6">SQL allows combining OR and AND logic. However, you must tell the database exactly how to group them using parentheses.</p>

          <div className="grid sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-black/30 border border-white/10 p-4 rounded-xl flex flex-col">
              <p className="font-bold text-amber-400 mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" /> Unsafe Query</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City='Chennai'\nOR Marks > 90;`} />
            </div>
            <div className="bg-purple-900/50 border border-purple-500/50 p-4 rounded-xl flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <p className="font-bold text-emerald-400 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Using Parentheses (Best Practice)</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE (City='Chennai' OR City='Madurai')\nAND Marks > 50;`} />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="font-bold text-purple-300 text-center">Output of Best Practice Query:</p>
            <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs font-mono bg-black/40 p-3 rounded-lg border border-white/5">
              <div className="font-bold text-gray-400 border-b border-white/10 pb-1">Name</div>
              <div className="font-bold text-gray-400 border-b border-white/10 pb-1">Marks</div>
              <div className="font-bold text-gray-400 border-b border-white/10 pb-1">City</div>

              <div className="text-white pt-1">Arun</div><div className="text-emerald-400 pt-1">85</div><div className="text-purple-300 pt-1">Chennai</div>
              <div className="text-white">Divya</div><div className="text-emerald-400">92</div><div className="text-purple-300">Madurai</div>
            </div>
            <p className="text-xs text-center italic mt-3 text-indigo-300">Parentheses make SQL evaluate conditions exactly how you want.</p>
          </div>
        </div>

        {/* Truth Table */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Activity className="w-7 h-7 mr-3 text-emerald-500" /> 7️⃣ OR Truth Table
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4 text-sm">Visual Logic of the OR Operator:</p>

          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6 w-full">
            <table className="w-full text-sm text-center">
              <thead className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-400 font-bold border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3">Condition A</th>
                  <th className="px-4 py-3 border-x border-gray-200 dark:border-gray-700">Condition B</th>
                  <th className="px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-400">A OR B Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900/50 font-mono font-bold">
                <tr>
                  <td className="px-4 py-3 text-emerald-500">TRUE</td>
                  <td className="px-4 py-3 border-x border-gray-200 dark:border-gray-700 text-emerald-500">TRUE</td>
                  <td className="px-4 py-3 text-emerald-500 bg-indigo-50/50 dark:bg-indigo-900/10">TRUE</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-emerald-500">TRUE</td>
                  <td className="px-4 py-3 border-x border-gray-200 dark:border-gray-700 text-rose-500">FALSE</td>
                  <td className="px-4 py-3 text-emerald-500 bg-indigo-50/50 dark:bg-indigo-900/10">TRUE</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-rose-500">FALSE</td>
                  <td className="px-4 py-3 border-x border-gray-200 dark:border-gray-700 text-emerald-500">TRUE</td>
                  <td className="px-4 py-3 text-emerald-500 bg-indigo-50/50 dark:bg-indigo-900/10">TRUE</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-rose-500">FALSE</td>
                  <td className="px-4 py-3 border-x border-gray-200 dark:border-gray-700 text-rose-500">FALSE</td>
                  <td className="px-4 py-3 text-rose-500 bg-rose-50 dark:bg-rose-900/20 shadow-inner ring-1 ring-rose-500/50">FALSE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm font-bold text-center text-gray-500 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
            Meaning: Only when <span className="text-rose-500 font-black">BOTH are FALSE</span> will OR return FALSE.
          </p>
        </div>
      </section>

      {/* Comparisons (OR vs AND / OR vs IN) */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* OR vs AND */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <ToggleLeft className="w-7 h-7 mr-3 text-blue-500" /> 8️⃣ OR vs AND Comparison
          </h2>
          <DataTable
            headers={['Operator', 'Meaning']}
            rows={[
              [<span className="font-mono font-bold text-purple-600 dark:text-purple-400">AND</span>, 'All conditions must be true'],
              [<span className="font-mono font-bold text-blue-600 dark:text-blue-400">OR</span>, 'Any condition can be true'],
            ]}
          />
          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
            <p className="font-bold text-blue-900 dark:text-blue-400 text-sm tracking-wider uppercase mb-3">Example of Restrictiveness</p>
            <code className="block bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-mono text-sm shadow-sm mb-3">
              WHERE City='Chennai' <strong className="text-purple-500 mx-1">AND</strong> Marks &gt; 80
            </code>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Only students satisfying <strong>both</strong> conditions appear.</p>
          </div>
        </div>

        {/* OR vs IN */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layers className="w-7 h-7 mr-3 text-emerald-500" /> 9️⃣ OR vs IN (Better Alternative)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Instead of writing multiple OR conditions for the exact same column, there's a better operator:</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-200 dark:border-rose-800/30">
              <p className="font-bold text-rose-900 dark:text-rose-400 mb-2 flex items-center text-sm"><XCircle className="w-4 h-4 mr-1 text-rose-500" /> Poor query</p>
              <CodeSnippetBlock codeSnippet={`WHERE City='Chennai'\nOR City='Madurai'\nOR City='Salem';`} />
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-300 dark:border-emerald-700/50 ring-2 ring-emerald-500/20 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <p className="font-bold text-emerald-900 dark:text-emerald-400 mb-2 flex items-center text-sm"><CheckCircle2 className="w-4 h-4 mr-1 text-emerald-500" /> Better query</p>
              <CodeSnippetBlock codeSnippet={`WHERE City IN ('Chennai',\n 'Madurai',\n 'Salem');`} />
            </div>
          </div>
          <p className="mt-4 text-center font-bold text-emerald-600 dark:text-emerald-400 text-sm tracking-widest uppercase">Cleaner and easier to read.</p>
        </div>

      </section>

      {/* Real World Scenario */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-900/10 p-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold flex items-center text-rose-900 dark:text-rose-400 mb-6">
              <HeartPulseIcon className="w-8 h-8 mr-3 text-rose-500" /> 🧩 Real-World Example
            </h2>
            <p className="text-rose-800 dark:text-rose-300 font-medium mb-4 text-lg">
              In your <strong>LifeLink AI</strong> blood bank project:
            </p>
            <p className="text-rose-900 dark:text-rose-200 bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 font-medium shadow-sm">
              Suppose you want donors who have blood group A+ <strong className="text-rose-500 mx-1">OR</strong> O+.
            </p>
          </div>

          <div className="flex-1 w-full space-y-4 pt-4 md:pt-0">
            <CodeSnippetBlock title="Using OR" codeSnippet={`SELECT *\nFROM Donors\nWHERE BloodGroup='A+' OR BloodGroup='O+';`} />
            <CodeSnippetBlock title="Or better (Using IN)" codeSnippet={`SELECT *\nFROM Donors\nWHERE BloodGroup IN ('A+', 'O+');`} />
          </div>
        </div>
      </section>

      {/* Developer Wisdom & Warnings Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-indigo-500" />
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Developer Tips
            </div>
          </h2>
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-2xl border border-purple-100 dark:border-purple-900/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-400 mb-4 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Use parentheses with OR + AND</h4>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex bg-white dark:bg-gray-800 p-2 rounded shadow-sm items-center"><XCircle className="w-4 h-4 mr-2 text-rose-500 shrink-0" /> <span className="text-gray-500">WHERE City='Chennai' OR City='Madurai' AND Marks&gt;80</span></div>
                <div className="flex bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded shadow-sm border border-emerald-200 dark:border-emerald-800/50 items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> <span className="font-bold text-emerald-700 dark:text-emerald-400">WHERE (City='Chennai' OR City='Madurai')<br />AND Marks&gt;80</span></div>
              </div>
            </div>

            <div className="flex items-start bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
              <Layers className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-1">Replace multiple OR with IN</h4>
                <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Improves readability and performance tracking for the optimizer.</p>
              </div>
            </div>

            <div className="flex items-start bg-amber-50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <Activity className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-1">Avoid too many OR conditions</h4>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">Many OR conditions can slow down queries. Sometimes UNION queries are faster for immense logic branches.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <AlertTriangle className="w-7 h-7 mr-3 text-rose-500" /> ⚠️ Common Beginner Mistakes
          </h2>
          <ul className="space-y-4 mb-6 text-gray-700 dark:text-gray-300 font-medium">
            <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Forgetting parentheses in complex clauses</li>
            <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Using too many OR conditions</li>
            <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Mixing OR with NULL incorrectly</li>
          </ul>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm relative overflow-hidden mt-auto">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
            <h3 className="font-bold text-emerald-900 dark:text-emerald-400 mb-3 tracking-wider uppercase text-xs flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Correct Example (Handling NULLs)</h3>
            <CodeSnippetBlock codeSnippet={`WHERE City='Chennai'\nOR City IS NULL;`} />
          </div>
        </div>

      </section>

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

export default SqlOr;