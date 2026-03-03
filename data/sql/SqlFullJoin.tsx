import React, { useState } from 'react';
import {
  Database, Search, Zap, Check, Copy, Table2,
  Target, AlertTriangle, Lightbulb, Hexagon, Layers,
  CheckCircle2, XCircle, ArrowRight, GitMerge, Brain
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
      <div className="relative group bg-gray-900 flex-grow">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed min-h-full">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlFullJoin: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <GitMerge className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          <span className="mr-3 text-4xl sm:text-5xl">🎯</span> What is FULL JOIN?
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-emerald-500 text-2xl mr-2">✅</span> Definition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            A <code className="bg-indigo-100 dark:bg-indigo-900/40 px-2 py-0.5 rounded font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">FULL JOIN</code> (or FULL OUTER JOIN) returns:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
              <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 shrink-0" />
              <span className="font-bold text-indigo-900 dark:text-indigo-200"><span className="underline decoration-indigo-300 dark:decoration-indigo-700 decoration-2 underline-offset-2">All matching records</span> from both tables</span>
            </li>
            <li className="flex items-start bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl border border-rose-100 dark:border-rose-800/50">
              <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3 mt-0.5 shrink-0" />
              <span className="font-bold text-rose-900 dark:text-rose-200">All non-matching records from the <span className="bg-rose-200 text-rose-800 dark:bg-rose-800 dark:text-rose-100 px-1.5 rounded">left table</span></span>
            </li>
            <li className="flex items-start bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
              <span className="font-bold text-emerald-900 dark:text-emerald-200">All non-matching records from the <span className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 px-1.5 rounded">right table</span></span>
            </li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center sm:text-left">
            <span className="text-gray-500 mr-4 font-bold uppercase tracking-wider mb-2 sm:mb-0">👉 IN SIMPLE WORDS:</span>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 px-2 py-1 rounded">FULL JOIN</span> <span className="mx-2 text-gray-400">=</span> <span className="bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200 px-2 py-1 rounded">LEFT JOIN</span> <span className="mx-2 text-gray-400">+</span> <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 px-2 py-1 rounded">RIGHT JOIN</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2️⃣ Visual Understanding */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 2️⃣ Visual Understanding
        </h2>

        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-gray-900 to-gray-900 blur-2xl pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="text-center">
              <p className="text-white font-medium mb-6 text-lg">Imagine two circles (Venn Diagram).</p>

              {/* Venn Diagram Visual */}
              <div className="relative w-64 h-48 mx-auto flex justify-center items-center">
                <div className="absolute w-40 h-40 rounded-full border-4 border-rose-500 bg-rose-500/40 mix-blend-screen left-0 flex items-center justify-start pl-6">
                  <span className="text-white font-bold opacity-80">LEFT</span>
                </div>
                <div className="absolute w-40 h-40 rounded-full border-4 border-emerald-500 bg-emerald-500/40 mix-blend-screen right-0 flex items-center justify-end pr-6">
                  <span className="text-white font-bold opacity-80">RIGHT</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white font-extrabold text-xl tracking-widest uppercase bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-gray-500/50">FULL JOIN</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg">
              <h3 className="font-bold text-indigo-300 mb-4 uppercase tracking-wider text-sm flex items-center"><Target className="w-4 h-4 mr-2" /> The highlighted area includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-white font-medium"><div className="w-8 h-8 rounded bg-rose-500/40 border-2 border-rose-500 mr-3 flex items-center justify-center text-xs">L</div> Left-only records</li>
                <li className="flex items-center text-white font-medium"><div className="w-8 h-8 rounded bg-emerald-500/40 border-2 border-emerald-500 mr-3 flex items-center justify-center text-xs">R</div> Right-only records</li>
                <li className="flex items-center text-white font-medium"><div className="w-8 h-8 rounded bg-indigo-500/60 border-2 border-indigo-400 mr-3 flex items-center justify-center text-xs text-[10px]">L⋂R</div> Matching records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Practical Example – Step by Step */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🏗️</span> 3️⃣ Practical Example – <span className="text-indigo-600 dark:text-indigo-400 ml-2">Step by Step</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg inline-block border border-blue-100 dark:border-blue-800/50">
          We’ll use two tables: <strong className="text-rose-600 dark:text-rose-400">Employees (Left)</strong> and <strong className="text-emerald-600 dark:text-emerald-400">Departments (Right)</strong>.
        </p>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-4 flex items-center text-lg bg-rose-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-800/50">
                <span className="mr-2 text-2xl">🧱</span> Step 1: Employees Table
              </h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees(
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50),
  DeptID INT
); `} />
            </div>

            <div>
              <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center text-lg bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                <span className="mr-2 text-2xl">🧱</span> Step 2: Departments Table
              </h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Departments(
  DeptID INT PRIMARY KEY,
  DeptName VARCHAR(50)
); `} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center text-xl">
              <span className="mr-2 text-2xl">📝</span> Step 3: Insert Data
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-rose-200 dark:border-rose-800/50 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                <div className="bg-rose-100 dark:bg-rose-900/40 px-4 py-2 border-b border-rose-200 dark:border-rose-800/50 font-bold text-rose-800 dark:text-rose-300 text-sm uppercase tracking-wider flex items-center justify-between">
                  <span>Employees (Left Table)</span>
                  <div className="flex space-x-1.5"><div className="w-3 h-3 rounded-full bg-rose-400"></div></div>
                </div>
                <div className="p-4">
                  <div className="font-mono text-sm bg-gray-900 p-3 rounded-lg text-emerald-300 border border-gray-800 overflow-x-auto whitespace-pre">
                    {`INSERT INTO Employees VALUES(1, 'Karthick', 101);
INSERT INTO Employees VALUES(2, 'Anjali', 102);
INSERT INTO Employees VALUES(3, 'Rahul', 105);
INSERT INTO Employees VALUES(4, 'Sneha', NULL); `}
                  </div>
                </div>
              </div>

              <div className="border border-emerald-200 dark:border-emerald-800/50 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 px-4 py-2 border-b border-emerald-200 dark:border-emerald-800/50 font-bold text-emerald-800 dark:text-emerald-300 text-sm uppercase tracking-wider flex items-center justify-between">
                  <span>Departments (Right Table)</span>
                  <div className="flex space-x-1.5"><div className="w-3 h-3 rounded-full bg-emerald-400"></div></div>
                </div>
                <div className="p-4">
                  <div className="font-mono text-sm bg-gray-900 p-3 rounded-lg text-emerald-300 border border-gray-800 overflow-x-auto whitespace-pre">
                    {`INSERT INTO Departments VALUES(101, 'IT');
INSERT INTO Departments VALUES(102, 'HR');
INSERT INTO Departments VALUES(103, 'Finance'); `}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm mt-8">
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center text-lg border-b border-gray-100 dark:border-gray-700 pb-3"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> 📊 Current Data Visualization</h4>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-2 uppercase tracking-wide text-sm bg-rose-50 dark:bg-rose-900/30 px-3 py-1 rounded inline-block">Employees</h5>
              <div className="overflow-x-auto rounded-xl border border-rose-200 dark:border-rose-800/50 shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-rose-50 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 font-bold uppercase text-xs">
                    <tr><th className="px-3 py-2 border-b border-rose-200 dark:border-rose-800">EmpID</th><th className="px-3 py-2 border-b border-rose-200 dark:border-rose-800">Name</th><th className="px-3 py-2 border-b border-rose-200 dark:border-rose-800">DeptID</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300 font-mono">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5 font-bold">Karthick</td><td className="px-3 py-1.5 font-bold text-indigo-500">101</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5 font-bold">Anjali</td><td className="px-3 py-1.5 font-bold text-indigo-500">102</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 bg-rose-50/50 dark:bg-rose-900/10"><td className="px-3 py-1.5 border-l-2 border-l-rose-400">3</td><td className="px-3 py-1.5 font-bold">Rahul</td><td className="px-3 py-1.5 font-bold text-rose-500">105</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 bg-rose-50/50 dark:bg-rose-900/10"><td className="px-3 py-1.5 border-l-2 border-l-rose-400">4</td><td className="px-3 py-1.5 font-bold">Sneha</td><td className="px-3 py-1.5 font-bold text-gray-400 italic">NULL</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-rose-500 mt-2 font-bold italic">Emp 3 & 4 have DeptIDs that don't match the Departments table.</p>
            </div>

            <div>
              <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide text-sm bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded inline-block">Departments</h5>
              <div className="overflow-x-auto rounded-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold uppercase text-xs">
                    <tr><th className="px-3 py-2 border-b border-emerald-200 dark:border-emerald-800">DeptID</th><th className="px-3 py-2 border-b border-emerald-200 dark:border-emerald-800">DeptName</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300 font-mono">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5 font-bold text-indigo-500">101</td><td className="px-3 py-1.5">IT</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5 font-bold text-indigo-500">102</td><td className="px-3 py-1.5">HR</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 bg-emerald-50/50 dark:bg-emerald-900/10"><td className="px-3 py-1.5 font-bold text-emerald-500 border-l-2 border-l-emerald-400">103</td><td className="px-3 py-1.5">Finance</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-emerald-500 mt-2 font-bold italic">Dept 103 has no matching employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 4️⃣ FULL JOIN Query */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 4️⃣ FULL JOIN Query
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <CodeSnippetBlock codeSnippet={`SELECT e.EmpID, e.Name, d.DeptName
FROM Employees e
FULL JOIN Departments d
ON e.DeptID = d.DeptID; `} />

          <div className="mt-8 border border-indigo-200 dark:border-indigo-800/50 rounded-xl overflow-hidden bg-indigo-50/20 dark:bg-indigo-900/10">
            <div className="bg-indigo-100 dark:bg-indigo-900/40 px-6 py-3 border-b border-indigo-200 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center mb-2 sm:mb-0 uppercase tracking-widest text-sm"><Table2 className="w-5 h-5 mr-2" /> 📊 Output</h4>
              <span className="text-xs bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded font-bold w-fit flex items-center"><Target className="w-3 h-3 mr-1" /> Result of FULL JOIN</span>
            </div>

            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left font-mono min-w-[500px]">
                <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 font-bold uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">EmpID</th>
                    <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Name</th>
                    <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 border-l border-gray-200 dark:border-gray-700">DeptName</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-800 dark:text-gray-200 text-sm">
                  {/* Matching Rows */}
                  <tr className="bg-indigo-50/50 dark:bg-indigo-900/20">
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3 font-bold">Karthick</td>
                    <td className="px-6 py-3 font-bold text-indigo-600 dark:text-indigo-400 border-l border-gray-100 dark:border-gray-800">IT</td>
                  </tr>
                  <tr className="bg-indigo-50/50 dark:bg-indigo-900/20">
                    <td className="px-6 py-3">2</td>
                    <td className="px-6 py-3 font-bold">Anjali</td>
                    <td className="px-6 py-3 font-bold text-indigo-600 dark:text-indigo-400 border-l border-gray-100 dark:border-gray-800">HR</td>
                  </tr>
                  {/* Left Only */}
                  <tr className="bg-rose-50/50 dark:bg-rose-900/10">
                    <td className="px-6 py-3">3</td>
                    <td className="px-6 py-3 font-bold">Rahul</td>
                    <td className="px-6 py-3 italic text-gray-400 bg-gray-50 dark:bg-gray-900/40 border-l border-gray-100 dark:border-gray-800">NULL</td>
                  </tr>
                  <tr className="bg-rose-50/50 dark:bg-rose-900/10">
                    <td className="px-6 py-3">4</td>
                    <td className="px-6 py-3 font-bold">Sneha</td>
                    <td className="px-6 py-3 italic text-gray-400 bg-gray-50 dark:bg-gray-900/40 border-l border-gray-100 dark:border-gray-800">NULL</td>
                  </tr>
                  {/* Right Only */}
                  <tr className="bg-emerald-50/50 dark:bg-emerald-900/10">
                    <td className="px-6 py-3 italic text-gray-400 bg-gray-50 dark:bg-gray-900/40">NULL</td>
                    <td className="px-6 py-3 italic text-gray-400 bg-gray-50 dark:bg-gray-900/40">NULL</td>
                    <td className="px-6 py-3 font-bold text-emerald-600 dark:text-emerald-400 border-l border-gray-100 dark:border-gray-800">Finance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white flex items-center mb-4"><Brain className="w-5 h-5 mr-2 text-indigo-500" /> 🧠 Why This Output?</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0" />
                  <span>EmpID 1, 2 → <strong className="text-indigo-600 dark:text-indigo-400">Matching departments</strong> (IT, HR)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" />
                  <span>EmpID 3 (Rahul) → DeptID 105 does not exist → <strong className="text-gray-500 bg-gray-100 dark:bg-gray-800 font-mono px-1 rounded">DeptName NULL</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2 shrink-0" />
                  <span>EmpID 4 (Sneha) → DeptID NULL → <strong className="text-gray-500 bg-gray-100 dark:bg-gray-800 font-mono px-1 rounded">DeptName NULL</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                  <span>DeptID 103 (Finance) → No employee matches → <strong className="text-gray-500 bg-gray-100 dark:bg-gray-800 font-mono px-1 rounded">Employee columns NULL</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🆚 5️⃣ FULL JOIN vs LEFT JOIN vs RIGHT JOIN */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🆚</span> 5️⃣ JOIN Comparisons
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-medium min-w-[500px]">
              <thead className="bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Join Type</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Returns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4"><span className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-700 px-2 py-1 rounded font-bold uppercase text-xs">INNER JOIN</span></td>
                  <td className="px-6 py-4">Only matching rows</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4"><span className="bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 px-2 py-1 rounded font-bold uppercase text-xs">LEFT JOIN</span></td>
                  <td className="px-6 py-4">All left + matching right</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded font-bold uppercase text-xs">RIGHT JOIN</span></td>
                  <td className="px-6 py-4">All right + matching left</td>
                </tr>
                <tr className="bg-indigo-50/50 dark:bg-indigo-900/20">
                  <td className="px-6 py-4"><span className="bg-indigo-600 text-white border border-indigo-700 px-2 py-1 rounded font-bold uppercase text-xs">FULL JOIN</span></td>
                  <td className="px-6 py-4 font-bold text-indigo-700 dark:text-indigo-400">All rows from BOTH tables</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔎 6️⃣ Filtering with FULL JOIN */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔎</span> 6️⃣ Filtering with FULL JOIN
        </h2>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-8 shadow-sm">
          <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center text-lg bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 w-fit">
            <span className="text-blue-500 mr-2 text-2xl">🔹</span> Show Only Unmatched Records
          </h3>

          <CodeSnippetBlock codeSnippet={`SELECT e.EmpID, e.Name, d.DeptName
FROM Employees e
FULL JOIN Departments d
ON e.DeptID = d.DeptID
WHERE e.DeptID IS NULL OR d.DeptID IS NULL; `} />

          <p className="mt-4 text-indigo-900 dark:text-indigo-300 font-bold bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800 flex items-center inline-block w-fit">
            👉 This shows records <strong className="underline decoration-indigo-400 decoration-2 underline-offset-2 ml-1">without matches.</strong>
          </p>
        </div>
      </section>

      {/* ⚠ 7️⃣ Important Note (Database Support) */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl text-amber-500">⚠</span> 7️⃣ Important Note
        </h2>

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/50 p-6 sm:p-8 shadow-sm border-l-4 border-l-amber-500">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-4 uppercase tracking-wider text-sm flex items-center">
            <Database className="w-5 h-5 mr-2" /> Database Support (e.g. MySQL)
          </h3>
          <p className="text-gray-800 dark:text-gray-300 font-medium mb-6 bg-white/60 dark:bg-gray-900/40 p-4 rounded-lg border border-amber-100 dark:border-amber-800/30">
            Some databases like <strong className="text-orange-600 dark:text-orange-400">MySQL</strong> do <strong className="underline decoration-rose-500 decoration-2 underline-offset-2">NOT</strong> support FULL JOIN directly. In MySQL, we simulate it using <strong className="bg-black/80 text-white px-2 py-0.5 rounded font-mono">UNION</strong>:
          </p>

          <CodeSnippetBlock codeSnippet={`SELECT e.EmpID, e.Name, d.DeptName
FROM Employees e
LEFT JOIN Departments d
ON e.DeptID = d.DeptID

UNION

SELECT e.EmpID, e.Name, d.DeptName
FROM Employees e
RIGHT JOIN Departments d
ON e.DeptID = d.DeptID; `} />
        </div>
      </section>

      {/* 🎯 8️⃣ Real-World Use Cases */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🎯</span> 8️⃣ Real-World Use Cases
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-bold mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
            <Hexagon className="w-6 h-6 mr-2" /> FULL JOIN is highly useful when:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Comparing two datasets",
              "Finding missing records",
              "Data reconciliation",
              "Audit reports",
              "Data migration checks",
            ].map((useCase, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{useCase}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-gray-300">
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center text-amber-500"><Target className="w-4 h-4 mr-2" /> Examples</h4>
            <ul className="space-y-3 font-mono text-sm leading-relaxed">
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-indigo-400 mt-0.5 shrink-0" /> Compare old database vs new database</li>
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-indigo-400 mt-0.5 shrink-0" /> Find unmatched customers</li>
              <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 text-indigo-400 mt-0.5 shrink-0" /> Find products without sales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 💡 9️⃣ My 15+ Years Professional Advice & Exercises */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Advice */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row sm:items-center text-white mb-8 border-b border-gray-800 pb-5">
              <span className="flex items-center"><Lightbulb className="w-8 h-8 text-amber-400 mr-3" /> Professional Advice</span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-3 sm:mt-0 sm:ml-4 w-fit">15+ Years Experience</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 flex-grow">
              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-emerald-400 pr-1">1️⃣</span> Use FULL JOIN Mostly for Reporting</h4>
                  <p className="text-sm font-medium text-gray-300 leading-relaxed">
                    In real production apps, FULL JOIN is <strong className="text-rose-400">less common</strong> than INNER or LEFT JOIN. It is mainly used for reconciliations and reporting tasks.
                  </p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">3️⃣</span> Always Use Table Aliases</h4>
                  <p className="text-sm text-gray-400 font-medium mb-3">Professional style:</p>
                  <code className="text-xs text-indigo-300 bg-black/50 p-3 rounded block font-mono border border-gray-800 mb-3 whitespace-pre">{`FROM Employees e
FULL JOIN Departments d`}</code>
                  <p className="text-sm font-bold text-emerald-400 font-sans flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Cleaner and faster to read.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* 2 */}
                <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/30 shadow-sm h-full border-l-4 border-l-amber-500 flex flex-col">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-amber-400 pr-1">2️⃣</span> Use Carefully on Large Tables</h4>
                  <div className="bg-rose-900/20 p-3 rounded-lg border border-rose-800/30 mb-4 flex items-start">
                    <AlertTriangle className="w-5 h-5 text-rose-400 mr-2 shrink-0 mt-0.5" />
                    <p className="text-sm text-rose-200 font-medium leading-relaxed font-sans">
                      FULL JOIN can be <strong className="text-white bg-rose-500/50 px-1 rounded">expensive</strong> because it scans both tables fully.
                    </p>
                  </div>

                  <p className="text-sm text-indigo-200 font-medium mb-2 uppercase tracking-wider">Always Do This:</p>
                  <ul className="text-sm font-bold text-white bg-black/30 p-3 rounded-lg border border-indigo-900/50 space-y-3 font-mono">
                    <li className="flex items-center"><Database className="w-4 h-4 mr-2 text-blue-400" /> Index join columns</li>
                    <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-emerald-400" /> Filter early using WHERE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex flex-col relative overflow-hidden h-full">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center relative z-10 border-b border-emerald-200 dark:border-emerald-800 pb-4">
              <span className="mr-3 text-3xl">🧪</span> Practice Exercises <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/60 dark:text-emerald-400 px-2 py-1 rounded-full uppercase ml-2">For Students</span>
            </h2>

            <ul className="space-y-4 relative z-10 font-medium">
              {[
                "Find departments without employees",
                "Find employees without departments",
                "Compare two customer tables and find mismatches",
                "Write FULL JOIN using UNION in MySQL",
                "Combine FULL JOIN with GROUP BY"
              ].map((q, idx) => (
                <li key={idx} className="bg-white/80 dark:bg-gray-900/70 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex flex-col shadow-sm text-sm text-emerald-900 dark:text-emerald-100">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1 uppercase tracking-wide">Task {idx + 1}</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlFullJoin;