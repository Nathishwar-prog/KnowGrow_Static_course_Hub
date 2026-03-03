import React, { useState } from 'react';
import {
  Database, Lightbulb, CheckCircle2, Target, AlertTriangle,
  Layers, Check, Copy, Flame, XCircle, Search, ShieldCheck,
  TrendingDown, TrendingUp, Zap
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
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm w-full">
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
      <div className="relative group bg-gray-900 flex-grow h-full">
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

const SqlIn: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* Introduction */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-600 dark:bg-indigo-500 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800">
          <Database className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6 tracking-tight">
          What is SQL IN?
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <p className="text-lg font-medium mb-6 leading-relaxed flex items-start">
            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mr-3 mt-1 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <span>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Definition:</strong> The <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-rose-500">IN</code> operator allows you to specify multiple values in a <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-blue-500">WHERE</code> clause.
            </span>
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mb-6">
            <span className="text-xl mr-3">👉</span>
            <span className="text-lg font-bold text-indigo-900 dark:text-indigo-200">Instead of writing multiple <code className="text-rose-500">OR</code> conditions, you use <code className="text-rose-500">IN</code>.</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-200 dark:border-rose-800/30">
              <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-3 flex items-center">
                <XCircle className="w-5 h-5 mr-2" /> Without IN
              </h4>
              <CodeSnippetBlock codeSnippet={`WHERE Department = 'IT'
OR Department = 'HR'
OR Department = 'Finance';`} />
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" /> With IN
              </h4>
              <CodeSnippetBlock codeSnippet={`WHERE Department IN ('IT', 'HR', 'Finance');`} />
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500 flex items-center justify-center bg-white/50 dark:bg-black/20 py-2 rounded-lg mt-2">
                ✨ Much cleaner and professional.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ How IN Works */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Lightbulb className="w-6 h-6" />
          </span>
          2️⃣ How IN Works
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm text-center">
          <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-8 border-b border-gray-100 dark:border-gray-700 pb-6"><code className="text-rose-500 font-bold bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">IN</code> checks whether a value matches any value in a list or subquery.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 flex-1 w-full max-w-sm">
              <span className="text-4xl mb-4 block">✅</span>
              <p className="font-bold text-lg text-emerald-800 dark:text-emerald-300">If match found → <span className="bg-emerald-200 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-100 px-2 py-1 rounded">TRUE</span></p>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-200 dark:border-rose-800/50 flex-1 w-full max-w-sm">
              <span className="text-4xl mb-4 block">❌</span>
              <p className="font-bold text-lg text-rose-800 dark:text-rose-300">If not → <span className="bg-rose-200 text-rose-900 dark:bg-rose-800 dark:text-rose-100 px-2 py-1 rounded">FALSE</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗 3️⃣ Practical Example – Step by Step */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">🏗</span>
          3️⃣ Practical Example – Step by Step
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-blue-400 dark:hover:border-blue-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center border-2 border-blue-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🧱</div>
            <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 1: Create Employees Table</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary INT
);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-emerald-400 dark:hover:border-emerald-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center border-2 border-emerald-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">📝</div>
            <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 2: Insert Data</h3>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES (1, 'Karthick', 'IT', 60000);
INSERT INTO Employees VALUES (2, 'Anjali', 'HR', 45000);
INSERT INTO Employees VALUES (3, 'Rahul', 'IT', 75000);
INSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 50000);
INSERT INTO Employees VALUES (5, 'Arjun', 'Marketing', 55000);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-purple-400 dark:hover:border-purple-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center border-2 border-purple-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">📊</div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Current Data</h3>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-inner">
              <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800/80 p-4">
                <table className="w-full text-left font-sans text-sm rounded bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700">
                  <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <tr><th className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">EmpID</th><th className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">Name</th><th className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">Department</th><th className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">Salary</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">60000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">2</td><td className="px-4 py-2 font-medium">Anjali</td><td className="px-4 py-2"><span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-2 py-1 rounded text-xs font-bold">HR</span></td><td className="px-4 py-2 font-mono">45000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">3</td><td className="px-4 py-2 font-medium">Rahul</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">75000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">4</td><td className="px-4 py-2 font-medium">Sneha</td><td className="px-4 py-2"><span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded text-xs font-bold">Finance</span></td><td className="px-4 py-2 font-mono">50000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">5</td><td className="px-4 py-2 font-medium">Arjun</td><td className="px-4 py-2"><span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded text-xs font-bold">Marketing</span></td><td className="px-4 py-2 font-mono">55000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SQL Code Examples (4, 5, 6) */}
      <section className="max-w-4xl mx-auto mb-20 space-y-12">
        {/* 🔥 4️⃣ Basic IN Example */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3 drop-shadow-md">🔥</span> 4️⃣ Basic IN Example
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 pb-2 rounded-t-2xl border border-gray-200 dark:border-gray-700 border-b-0 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 dark:bg-orange-900/20 rounded-bl-full pointer-events-none"></div>
            <div className="inline-flex items-center text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-xs mb-4 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg border border-orange-100 dark:border-orange-800/30">
              <Target className="w-4 h-4 mr-2" /> Find Employees from IT or HR
            </div>
            <CodeSnippetBlock codeSnippet={`SELECT * 
FROM Employees
WHERE Department IN ('IT', 'HR');`} />
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-b-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 className="font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs mb-4 flex items-center">
              <Layers className="w-4 h-4 mr-2" /> Output
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm rounded bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <tr><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">EmpID</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Name</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Department</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Salary</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">60000</td></tr>
                  <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">2</td><td className="px-4 py-2 font-medium">Anjali</td><td className="px-4 py-2"><span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-2 py-1 rounded text-xs font-bold">HR</span></td><td className="px-4 py-2 font-mono">45000</td></tr>
                  <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">3</td><td className="px-4 py-2 font-medium">Rahul</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">75000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 🔎 5️⃣ IN with Numbers */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 dark:bg-indigo-900/20 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform"></div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3 drop-shadow-md">🔎</span> 5️⃣ IN with Numbers
          </h2>
          <div className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
            <Target className="w-4 h-4 mr-2" /> Get Employees with Specific IDs
          </div>
          <CodeSnippetBlock codeSnippet={`SELECT *
FROM Employees
WHERE EmpID IN (1, 3, 5);`} />
        </div>

        {/* 🔴 6️⃣ NOT IN Example */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-3xl mr-3 drop-shadow-md">🔴</span> 6️⃣ NOT IN Example
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 pb-2 rounded-t-2xl border border-gray-200 dark:border-gray-700 border-b-0 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 dark:bg-rose-900/20 rounded-bl-full pointer-events-none"></div>
            <div className="inline-flex items-center text-rose-600 dark:text-rose-400 font-bold uppercase tracking-widest text-xs mb-4 bg-rose-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-800/30">
              <Target className="w-4 h-4 mr-2" /> Find Employees NOT in IT or HR
            </div>
            <CodeSnippetBlock codeSnippet={`SELECT *
FROM Employees
WHERE Department NOT IN ('IT', 'HR');`} />
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-b-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 className="font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs mb-4 flex items-center">
              <Layers className="w-4 h-4 mr-2" /> Output
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm rounded bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <tr><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">EmpID</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Name</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Department</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Salary</th></tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">4</td><td className="px-4 py-2 font-medium">Sneha</td><td className="px-4 py-2"><span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded text-xs font-bold">Finance</span></td><td className="px-4 py-2 font-mono">50000</td></tr>
                  <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">5</td><td className="px-4 py-2 font-medium">Arjun</td><td className="px-4 py-2"><span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded text-xs font-bold">Marketing</span></td><td className="px-4 py-2 font-mono">55000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 7️⃣ IN with Subquery (Very Important) */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Brain className="w-6 h-6" />
          </span>
          7️⃣ IN with Subquery
        </h2>

        <div className="bg-purple-600 text-white font-bold p-4 rounded-xl shadow-lg mb-8 inline-flex items-center">
          <Flame className="w-5 h-5 mr-3" /> Now we move to professional-level usage. (Very Important)
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-3xl"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pl-4">🧱 Create Another Table</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Bonuses (
    EmpID INT,
    BonusAmount INT
);
INSERT INTO Bonuses VALUES (1, 5000);
INSERT INTO Bonuses VALUES (3, 7000);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 rounded-l-3xl"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pl-4">🎯 Find Employees Who Received Bonus</h3>
            <CodeSnippetBlock codeSnippet={`SELECT *
FROM Employees
WHERE EmpID IN (
    SELECT EmpID FROM Bonuses
);`} />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs mb-4 flex items-center">
            <Layers className="w-4 h-4 mr-2" /> Output
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm rounded bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
              <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <tr><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">EmpID</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Name</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Department</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Salary</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">60000</td></tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800"><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">3</td><td className="px-4 py-2 font-medium">Rahul</td><td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">IT</span></td><td className="px-4 py-2 font-mono">75000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ⚠ 8️⃣ Important: IN vs EXISTS */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-amber-200 dark:border-amber-800/50">
            <AlertTriangle className="w-6 h-6" />
          </span>
          8️⃣ Important: IN vs EXISTS
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden">
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left font-sans text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg border-b border-gray-200 dark:border-gray-700"><span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded text-lg">IN</span></th>
                  <th className="px-4 py-3 rounded-tr-lg border-b border-gray-200 dark:border-gray-700"><span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded text-lg">EXISTS</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-medium">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Compares values</td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Checks row existence</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                  <td className="px-4 py-4 text-rose-500 font-bold flex items-center"><TrendingDown className="w-4 h-4 mr-2" />Slower for large subqueries</td>
                  <td className="px-4 py-4 text-emerald-600 dark:text-emerald-400 font-bold" style={{ display: 'flex', alignItems: 'center' }}><TrendingUp className="w-4 h-4 mr-2" />Faster for large datasets</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                  <td className="px-4 py-4 text-indigo-600 dark:text-indigo-400 font-bold">Good for small lists</td>
                  <td className="px-4 py-4 text-emerald-600 dark:text-emerald-400 font-bold">Better for correlated queries</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800/50 flex items-center justify-center text-center shadow-sm">
            <span className="text-2xl mr-3">👉</span>
            <p className="font-bold text-amber-900 dark:text-amber-200 text-lg">In large production systems, <code className="bg-amber-200 dark:bg-amber-800 px-2 py-0.5 rounded text-amber-900 dark:text-amber-100 mx-1">EXISTS</code> often performs better.</p>
          </div>
        </div>
      </section>

      {/* 🔎 9️⃣ NULL Issue with NOT IN (Very Important Interview Topic) */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex flex-col sm:flex-row sm:items-center">
          <span className="text-3xl mr-3 xl:mr-3 mb-2 sm:mb-0 drop-shadow-md bg-rose-100 dark:bg-rose-900/30 p-2 rounded-xl">🔎</span>
          <span>9️⃣ NULL Issue with NOT IN</span>
        </h2>

        <div className="mb-6 flex">
          <span className="bg-red-600 animate-pulse text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg shadow-red-500/50">Very Important Interview Topic</span>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <AlertTriangle className="w-48 h-48 text-rose-500" />
          </div>

          <p className="text-xl font-bold text-rose-400 mb-8 border-l-4 border-rose-500 pl-4 py-2 bg-rose-900/20">
            If subquery returns NULL, <code className="text-white bg-black/50 px-2 py-1 rounded">NOT IN</code> may return no results.
          </p>

          <div className="space-y-6 relative z-10">
            <div>
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-3">Example problem:</p>
              <div className="bg-black/50 p-4 rounded-xl border border-rose-500/30 font-mono text-sm text-rose-300">
                WHERE EmpID NOT IN (<span className="text-gray-400">SELECT EmpID FROM Bonuses</span>);
              </div>
              <p className="text-red-400 font-bold mt-2 ml-2 flex items-center text-sm"><AlertTriangle className="w-4 h-4 mr-2" /> If Bonuses table contains NULL → unexpected behavior.</p>
            </div>

            <div className="bg-emerald-900/30 p-6 rounded-2xl border border-emerald-500/30 mt-8">
              <p className="font-bold text-emerald-400 mb-4 flex items-center text-lg"><CheckCircle2 className="w-6 h-6 mr-2" /> Safer approach:</p>
              <CodeSnippetBlock codeSnippet={`WHERE NOT EXISTS (
    SELECT 1 FROM Bonuses b
    WHERE b.EmpID = Employees.EmpID
);`} />
            </div>
          </div>
        </div>
      </section>

      {/* 📊 10️⃣ Visual Concept */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex justify-center items-center">
          <span className="text-4xl mr-4 drop-shadow-md">📊</span> 10️⃣ Visual Concept
        </h2>

        <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden inline-block w-full">
          <p className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-10 bg-white/60 dark:bg-black/20 p-4 rounded-2xl inline-block shadow-sm">IN checks membership inside a list or result set.</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative">
              <div className="w-24 h-24 bg-rose-100 dark:bg-rose-900/50 rounded-full border-4 border-rose-400 flex items-center justify-center text-rose-600 dark:text-rose-400 font-black text-2xl shadow-lg z-10 relative">
                'HR'
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-indigo-500 font-black text-xl mb-2 flex flex-col items-center"><Search className="animate-bounce mb-2" /> IN ( ? )</div>
              <div className="h-0.5 w-32 bg-gray-300 dark:bg-gray-600 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-300 dark:border-l-gray-600"></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-700 p-6 rounded-3xl shadow-xl relative text-left">
              <div className="absolute -top-3 -right-3 bg-indigo-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg">The List</div>
              <ul className="space-y-4 font-mono font-bold text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-gray-400" /> 'IT'</li>
                <li className="flex items-center text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800/50 -ml-4 whitespace-nowrap"><CheckCircle2 className="w-6 h-6 mr-3" /> 'HR' <span className="ml-4 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full animate-pulse">MATCH!</span></li>
                <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-gray-400" /> 'Finance'</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 11️⃣ Real-World Use Cases */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-rose-200 dark:border-rose-800/50">
            <Target className="w-6 h-6" />
          </span>
          11️⃣ Real-World Use Cases
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <p className="font-bold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest text-sm">IN is used in:</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { text: "Filtering multiple categories", icon: "📑" },
              { text: "API filters", icon: "🔌" },
              { text: "Dashboard filters", icon: "📊" },
              { text: "Permission-based queries", icon: "🔐" },
              { text: "Product category filtering", icon: "🛒" },
              { text: "Order status filtering", icon: "📦" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mr-3 bg-white dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">{item.icon}</span>
                <span className="font-bold text-gray-800 dark:text-gray-200 text-sm leading-tight">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 text-sm uppercase tracking-widest">Example:</h4>
            <CodeSnippetBlock codeSnippet={`WHERE status IN ('Pending', 'Approved', 'Shipped');`} />
          </div>
        </div>
      </section>

      {/* 💡 12️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">💡</span> 12️⃣ My 15+ Years Professional Advice
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">1</span>
              Use IN for Small Value Lists
            </h3>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30 font-medium text-sm text-indigo-900 dark:text-indigo-200 space-y-3">
              <p className="font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-widest text-xs">Good for:</p>
              <div className="flex flex-col space-y-2">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Dropdown filters</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Static value lists</span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">2</span>
              Use EXISTS for Large Datasets
            </h3>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 flex items-center h-[calc(100%-4rem)]">
              <p className="text-emerald-800 dark:text-emerald-300 font-bold text-center w-full text-sm sm:text-base">Better performance with correlated subqueries.</p>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden border-l-4 border-l-rose-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">3</span>
              Avoid NOT IN with NULL Risk
            </h3>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30 font-bold text-rose-800 dark:text-rose-300 flex items-center h-[calc(100%-4rem)] justify-center text-center">
              <AlertTriangle className="w-5 h-5 mr-3 shrink-0" /> Always check for NULL or use NOT EXISTS.
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">4</span>
              Index Columns Used in IN
            </h3>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30 flex items-center h-[calc(100%-4rem)] justify-center">
              <span className="bg-amber-500 text-white p-2 rounded-lg mr-3 shadow-md"><TrendingUp className="w-5 h-5" /></span>
              <p className="text-amber-900 dark:text-amber-300 font-bold text-sm sm:text-base">Improves performance significantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🧪 13️⃣ Practice Exercises */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 border border-indigo-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="text-4xl mr-4 drop-shadow-md">🧪</span> 13️⃣ Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {[
              "Find employees in IT, HR, Marketing",
              "Find employees not in Finance",
              "Find employees whose ID appears in another table",
              "Replace multiple OR conditions using IN",
              "Convert IN subquery into EXISTS"
            ].map((task, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex items-center shadow-sm hover:bg-white/20 transition-colors cursor-default">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 shrink-0">{idx + 1}</div>
                <span className="font-medium text-sm sm:text-base">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// SVG component missing from lucide-react in previous versions
const Brain = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);

export default SqlIn;