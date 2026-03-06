import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  AlertTriangle, Lightbulb, CheckCircle2, XCircle, BrainCircuit,
  GraduationCap, Target, Layers, FileCode2, BookOpen, Clock, Play, ListOrdered, AlignLeft, Map
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

const SqlQuickRef: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-gray-900 dark:to-slate-900/50 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">QUICK REFERENCE</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate cheat sheet. Everything you need to know about SQL queries, operators, joins, and constraints in one place.
        </p>
      </header>

      {/* Structure & Execution Order Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Core Structure */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full -z-10 group-hover:bg-indigo-500/10 transition-colors"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layers className="w-7 h-7 mr-3 text-indigo-500" /> Basic SQL Query Structure
          </h2>
          <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table_name\nWHERE condition\nGROUP BY column\nHAVING condition\nORDER BY column ASC | DESC;`} />
        </div>

        {/* Execution Order */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-3xl shadow-lg border border-indigo-800 flex flex-col justify-center text-white relative">
          <div className="absolute top-4 right-4 bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border border-purple-500/50">
            Important Concept
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Clock className="w-7 h-7 mr-3 text-purple-400" /> Execution Order
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm font-mono">
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">1</span> FROM</div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">2</span> WHERE</div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">3</span> GROUP BY</div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">4</span> HAVING</div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">5</span> SELECT</div>
            <div className="flex items-center bg-white/10 p-3 rounded-lg border border-white/5"><span className="bg-purple-500 w-6 h-6 rounded flex items-center justify-center font-bold mr-3 text-white">6</span> ORDER BY</div>
          </div>
        </div>

      </section>

      {/* Masonry Layout for commands */}
      <div className="max-w-5xl mx-auto mb-16 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

        {/* 2 SELECT */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-blue-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">2</span>
            SELECT Statement
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Used to retrieve data from a table.</p>
          <CodeSnippetBlock codeSnippet={`SELECT * FROM Students;`} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Retrieve specific columns:</p>
          <CodeSnippetBlock codeSnippet={`SELECT Name, Marks FROM Students;`} />
        </div>

        {/* 3 WHERE */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-blue-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">3</span>
            WHERE Clause
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Filters records based on conditions.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks > 50;`} />
        </div>

        {/* 6 ORDER BY */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-blue-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">6</span>
            ORDER BY
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Sorts results.</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nORDER BY Marks DESC;`} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Ascending order (default):</p>
          <CodeSnippetBlock codeSnippet={`ORDER BY Marks ASC;`} />
        </div>

        {/* 7 GROUP BY */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-indigo-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">7</span>
            GROUP BY
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Groups rows with the same values.</p>
          <CodeSnippetBlock codeSnippet={`SELECT City, COUNT(*)\nFROM Students\nGROUP BY City;`} />
        </div>

        {/* 8 HAVING */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-indigo-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">8</span>
            HAVING
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Filters grouped data.</p>
          <CodeSnippetBlock codeSnippet={`SELECT City, COUNT(*)\nFROM Students\nGROUP BY City\nHAVING COUNT(*) > 2;`} />
        </div>

        {/* 9 INSERT INTO */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-emerald-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">9</span>
            INSERT INTO
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Adds records into a table.</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Students\nVALUES (1,'Arun',85,'Chennai');`} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Insert specific columns:</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Students (Name,Marks)\nVALUES ('Divya',92);`} />
        </div>

        {/* 10 UPDATE */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-amber-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">10</span>
            UPDATE Statement
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Modifies existing records.</p>
          <CodeSnippetBlock codeSnippet={`UPDATE Students\nSET Marks = 95\nWHERE StudentID = 2;`} />
        </div>

        {/* 11 DELETE */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-rose-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">11</span>
            DELETE Statement
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Removes records from a table.</p>
          <CodeSnippetBlock codeSnippet={`DELETE FROM Students\nWHERE StudentID = 3;`} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Delete all rows:</p>
          <CodeSnippetBlock codeSnippet={`DELETE FROM Students;`} />
        </div>

        {/* 12 NULL Handling */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-slate-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">12</span>
            SQL NULL Handling
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Check NULL values:</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks IS NULL;`} />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Check NOT NULL:</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks IS NOT NULL;`} />
        </div>

        {/* 16 Pattern Matching */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-teal-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">16</span>
            Pattern Matching
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Using LIKE query.</p>

          <div className="flex flex-col gap-2 mb-4 text-xs font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700/50">
            <div className="flex justify-between items-center"><span className="font-bold text-teal-600 dark:text-teal-400">%</span> <span>Multiple characters</span></div>
            <div className="flex justify-between items-center"><span className="font-bold text-teal-600 dark:text-teal-400">_</span> <span>Single character</span></div>
          </div>

          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Name LIKE 'A%';`} />
          <p className="text-xs text-center text-gray-500 italic mt-[-10px]">Names starting with A.</p>
        </div>

        {/* 17/18 IN & BETWEEN */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-teal-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">17</span>
            IN / BETWEEN
          </h3>
          <p className="text-sm text-teal-600 dark:text-teal-400 mb-1 font-bold">IN Operator (Multiple values)</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE City IN ('Chennai','Madurai');`} />

          <p className="text-sm text-teal-600 dark:text-teal-400 mb-1 mt-4 font-bold">BETWEEN Operator (Range)</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks BETWEEN 50 AND 90;`} />
        </div>

        {/* 19 LIMIT TOP */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-cyan-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">19</span>
            LIMIT / TOP
          </h3>
          <p className="text-sm text-cyan-700 dark:text-cyan-400 mb-2 font-bold">MySQL (LIMIT):</p>
          <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nLIMIT 5;`} />

          <p className="text-sm text-cyan-700 dark:text-cyan-400 mb-2 mt-4 font-bold">SQL Server (TOP):</p>
          <CodeSnippetBlock codeSnippet={`SELECT TOP 5 *\nFROM Students;`} />
        </div>

        {/* 20 Table Mgmt */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 break-inside-avoid">
          <h3 className="text-lg font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <span className="bg-rose-500 text-white w-6 h-6 rounded text-sm flex items-center justify-center mr-2 font-bold shadow-md">20</span>
            SQL Table Management
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">Create table:</p>
          <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\nStudentID INT PRIMARY KEY,\nName VARCHAR(50),\nMarks INT\n);`} />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-xs text-rose-500 font-bold mb-1">Delete Table:</p>
              <code className="text-[10px] font-mono bg-rose-50 dark:bg-rose-900/10 text-rose-700 dark:text-rose-400 p-2 block rounded border border-rose-100 dark:border-rose-900/30">DROP TABLE Students;</code>
            </div>
            <div>
              <p className="text-xs text-amber-500 font-bold mb-1">Clear Data:</p>
              <code className="text-[10px] font-mono bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 p-2 block rounded border border-amber-100 dark:border-amber-900/30">TRUNCATE TABLE Students;</code>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Complex Elements Array */}
      <section className="max-w-5xl mx-auto mb-16 space-y-8">

        {/* Operators */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-50 dark:bg-blue-900/20 p-8 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-center">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">4/5</span>
              SQL Operators
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Logical routing and value comparisons.</p>
          </div>

          <div className="md:w-2/3 p-8 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider text-sm">Comparison Operators</h4>
              <div className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">=</span> <span>Equal</span></div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">&gt;</span> <span>Greater than</span></div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">&lt;</span> <span>Less than</span></div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">&gt;=</span> <span>Greater or equal</span></div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">&lt;=</span> <span>Less or equal</span></div>
                <div className="flex justify-between border-b border-gray-100 dark:border-gray-700/50 pb-1"><span className="font-bold text-blue-500">&lt;&gt; / !=</span> <span>Not equal</span></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wider text-sm">Logical Operators</h4>
              <div className="space-y-3">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                  <p className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">AND</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Both conditions true</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                  <p className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">OR</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Any condition true</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                  <p className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">NOT</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Reverse condition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 13 Constraints & 14 Joins */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Constraints */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-bl-full -z-10"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                <span className="bg-rose-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">13</span>
                SQL Constraints
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Constraints control data integrity.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">PRIMARY KEY</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Unique identifier</span></div>
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">FOREIGN KEY</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Links two tables</span></div>
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">UNIQUE</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Prevent duplicates</span></div>
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">NOT NULL</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Prevent empty values</span></div>
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">CHECK</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Restrict values</span></div>
                <div className="flex items-center text-sm font-medium"><span className="w-28 font-mono font-bold text-rose-600 dark:text-rose-400">DEFAULT</span> <ArrowRight className="w-3 h-3 mx-2 text-gray-300" /> <span className="text-gray-600 dark:text-gray-300">Default value</span></div>
              </div>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\nStudentID INT PRIMARY KEY,\nName VARCHAR(50) NOT NULL,\nMarks INT CHECK (Marks >= 0)\n);`} />
            </div>
          </div>

          {/* Joins */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -z-10"></div>
            <div className="p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">14</span>
                SQL Joins
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Joins combine data from multiple tables.</p>
              <DataTable
                headers={['Join Type', 'Description']}
                rows={[
                  [<span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">INNER JOIN</span>, 'Matching records only'],
                  [<span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">LEFT JOIN</span>, 'All records from left table'],
                  [<span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">RIGHT JOIN</span>, 'All records from right table'],
                  [<span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">FULL JOIN</span>, 'Both tables (all records)'],
                ]}
              />
              <div className="mt-auto">
                <p className="text-sm text-gray-500 font-bold mb-2">Example (Inner Join):</p>
                <CodeSnippetBlock codeSnippet={`SELECT Students.Name, Courses.CourseName\nFROM Students\nINNER JOIN Courses\nON Students.StudentID = Courses.StudentID;`} />
              </div>
            </div>
          </div>
        </div>

        {/* 15 Aggregate */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-900/10 rounded-3xl overflow-hidden shadow-sm border border-amber-200 dark:border-amber-900/30 p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold flex items-center text-amber-900 dark:text-amber-400 mb-6">
              <span className="bg-amber-500 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 font-bold shadow-md text-base">15</span>
              SQL Aggregate Functions
            </h2>
            <p className="text-amber-800 dark:text-amber-300 font-medium mb-6">Used for performing calculations across datasets.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center"><span className="block font-mono font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">COUNT()</span> <span className="text-xs font-bold text-gray-500">Count rows</span></div>
              <div className="bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center"><span className="block font-mono font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">SUM()</span> <span className="text-xs font-bold text-gray-500">Total values</span></div>
              <div className="bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center"><span className="block font-mono font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">AVG()</span> <span className="text-xs font-bold text-gray-500">Average value</span></div>
              <div className="bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center"><span className="block font-mono font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">MIN()</span> <span className="text-xs font-bold text-gray-500">Minimum value</span></div>
              <div className="bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center"><span className="block font-mono font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">MAX()</span> <span className="text-xs font-bold text-gray-500">Maximum value</span></div>
            </div>
          </div>

          <div className="md:w-[400px] w-full bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm shrink-0">
            <p className="text-sm text-gray-500 font-bold mb-2">Example Use:</p>
            <CodeSnippetBlock codeSnippet={`SELECT AVG(Marks)\nFROM Students;`} />
          </div>
        </div>

      </section>

      {/* Developer Wisdom & Roadmap Grid (Dark Mode Themed) */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-700 hover:border-emerald-500 transition-colors">
          <h2 className="text-2xl font-black flex items-center text-white mb-8">
            <GraduationCap className="w-8 h-8 mr-3 text-emerald-400" />
            <div>
              <span className="block text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Developer Tips
            </div>
          </h2>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /> Always use WHERE before UPDATE or DELETE
            </div>
            <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /> Use PRIMARY KEY in every table
            </div>
            <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /> Avoid SELECT * in production queries
            </div>
            <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /> Use indexes for large tables
            </div>
            <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 shadow-sm">
              <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /> Write properly structured and formatted SQL
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <CodeSnippetBlock title="Readable SQL Example" codeSnippet={`SELECT Name, Marks\nFROM Students\nWHERE Marks > 80\nORDER BY Marks DESC;`} />
          </div>
        </div>

        {/* Learning Roadmap */}
        <div className="bg-gradient-to-b from-indigo-900 to-purple-900 p-8 rounded-3xl shadow-xl border border-indigo-700 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 rotate-12 -mt-10 pointer-events-none">
            <Map className="w-64 h-64 text-white" />
          </div>
          <h2 className="text-2xl font-black flex items-center text-white mb-2 relative z-10">
            <Map className="w-7 h-7 mr-3 text-indigo-400" /> 🧠 SQL Learning Roadmap
          </h2>
          <p className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-8 relative z-10">Optimal Teaching Sequence</p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 relative z-10">
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">1.</span> SQL Basics
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">2.</span> SELECT & WHERE
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">3.</span> Operators
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">4.</span> ORDER BY
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">5.</span> GROUP BY & HAVING
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">6.</span> Constraints
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">7.</span> Joins
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">8.</span> Subqueries
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-5 font-bold mr-2">9.</span> Indexing
            </div>
            <div className="flex items-center bg-black/30 p-2.5 rounded border border-white/10 text-white font-medium text-sm">
              <span className="text-indigo-400 w-7 font-bold mr-1">10.</span> Stored Procedures
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default SqlQuickRef;