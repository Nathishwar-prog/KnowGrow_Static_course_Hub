import React, { useState } from 'react';
import {
  Database, Dumbbell, Play, Check, Copy, Table2,
  Target, Zap, Brain, TrendingUp, BarChart3, Star, Lightbulb
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

const SqlExercises: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
          <Dumbbell className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Exercises
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Master SQL by practicing with realistic database queries spanning different difficulty levels. Let's build your SQL muscle memory!
        </p>
      </header>

      {/* Step 1: Setup - Sample Database */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🛠️</span> Step 1: Setup – Sample Database
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm mb-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-bl-full -z-0 pointer-events-none"></div>

          <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 relative z-10 flex items-center">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mr-3">Dataset</span>
            We’ll use a realistic Company Database.
          </p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2 text-xl">🧱</span> Create Table: Employees
              </h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    Department VARCHAR(50),
    Salary INT,
    Experience INT
);`} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="mr-2 text-xl">📝</span> Insert Sample Data
              </h3>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES (1, 'Karthick', 'IT', 60000, 3);
INSERT INTO Employees VALUES (2, 'Anjali', 'HR', 45000, 2);
INSERT INTO Employees VALUES (3, 'Rahul', 'IT', 75000, 5);
INSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 50000, 4);
INSERT INTO Employees VALUES (5, 'Arjun', 'IT', 80000, 6);`} />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-emerald-500" /> Table Visualization</h4>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap min-w-[500px]">
                <thead className="bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-4 py-3 border-b dark:border-gray-700">EmpID</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Name</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Department</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Salary</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Experience</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-600 dark:text-gray-400 font-mono">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50"><td className="px-4 py-2">1</td><td className="px-4 py-2 font-bold text-gray-900 dark:text-gray-200">Karthick</td><td className="px-4 py-2">IT</td><td className="px-4 py-2">60000</td><td className="px-4 py-2">3</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50"><td className="px-4 py-2">2</td><td className="px-4 py-2 font-bold text-gray-900 dark:text-gray-200">Anjali</td><td className="px-4 py-2">HR</td><td className="px-4 py-2">45000</td><td className="px-4 py-2">2</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50"><td className="px-4 py-2">3</td><td className="px-4 py-2 font-bold text-gray-900 dark:text-gray-200">Rahul</td><td className="px-4 py-2">IT</td><td className="px-4 py-2">75000</td><td className="px-4 py-2">5</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50"><td className="px-4 py-2">4</td><td className="px-4 py-2 font-bold text-gray-900 dark:text-gray-200">Sneha</td><td className="px-4 py-2">Finance</td><td className="px-4 py-2">50000</td><td className="px-4 py-2">4</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50"><td className="px-4 py-2">5</td><td className="px-4 py-2 font-bold text-gray-900 dark:text-gray-200">Arjun</td><td className="px-4 py-2">IT</td><td className="px-4 py-2">80000</td><td className="px-4 py-2">6</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner Level Exercises */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl text-emerald-500">🟢</span> BEGINNER LEVEL EXERCISES
        </h2>

        <div className="space-y-6">
          {/* Ex 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-emerald-500 mr-2">🔹</span> Exercise 1: Select All Employees
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-3 flex items-start">
              <span className="text-xl mr-2">📝</span> <span className="mt-0.5"><strong className="text-gray-900 dark:text-gray-100">Question:</strong> Retrieve all employee details.</span>
            </p>
            <CodeSnippetBlock codeSnippet={`SELECT * FROM Employees;`} />
          </div>

          {/* Ex 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-emerald-500 mr-2">🔹</span> Exercise 2: Employees with Salary &gt; 60000
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT * 
FROM Employees
WHERE Salary > 60000;`} />
            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-4">
              <p className="font-bold mb-2 text-blue-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Output:</p>
              <div className="whitespace-pre">
                {`EmpID Name   Department Salary Experience
3     Rahul  IT         75000  5
5     Arjun  IT         80000  6`}
              </div>
            </div>
          </div>

          {/* Ex 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-emerald-500 mr-2">🔹</span> Exercise 3: IT Department Employees
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Salary
FROM Employees
WHERE Department = 'IT';`} />
          </div>
        </div>
      </section>

      {/* Intermediate Level Exercises */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl text-amber-500">🟡</span> INTERMEDIATE LEVEL EXERCISES
        </h2>

        <div className="space-y-6">
          {/* Ex 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-amber-500 mr-2">🔹</span> Exercise 4: Highest Salary
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <CodeSnippetBlock codeSnippet={`SELECT MAX(Salary) AS HighestSalary
FROM Employees;`} />
              <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner">
                <p className="font-bold mb-2 text-amber-500 uppercase tracking-widest">// Output</p>
                <div className="whitespace-pre">
                  {`HighestSalary
80000`}
                </div>
              </div>
            </div>
          </div>

          {/* Ex 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-amber-500 mr-2">🔹</span> Exercise 5: Average Salary by Department
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <CodeSnippetBlock codeSnippet={`SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department;`} />
              <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner">
                <p className="font-bold mb-2 text-amber-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Output</p>
                <div className="whitespace-pre">
                  {`Department AvgSalary
IT         71666
HR         45000
Finance    50000`}
                </div>
              </div>
            </div>
          </div>

          {/* Ex 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-amber-500 mr-2">🔹</span> Exercise 6: Count Employees per Department
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT Department, COUNT(*) AS TotalEmployees
FROM Employees
GROUP BY Department;`} />
          </div>
        </div>
      </section>

      {/* Advanced Level Exercises */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl text-rose-500">🔴</span> ADVANCED LEVEL EXERCISES
        </h2>

        <div className="space-y-6">
          {/* Ex 7 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-rose-500 mr-2">🔹</span> Exercise 7: Second Highest Salary
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT MAX(Salary) 
FROM Employees
WHERE Salary < (SELECT MAX(Salary) FROM Employees);`} />
            <p className="text-sm font-bold text-rose-500 mt-2 bg-rose-50 dark:bg-rose-900/20 px-3 py-1.5 rounded-lg inline-block border border-rose-100 dark:border-rose-800">Note: Uses Subqueries</p>
          </div>

          {/* Ex 8 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center leading-tight">
              <span className="text-rose-500 mr-2 shrink-0">🔹</span>
              <span>Exercise 8: Employees with Experience &gt; Average Experience</span>
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT *
FROM Employees
WHERE Experience > (SELECT AVG(Experience) FROM Employees);`} />
          </div>

          {/* Ex 9 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-rose-500 mr-2">🔹</span> Exercise 9: Rank Employees by Salary
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Salary,
RANK() OVER (ORDER BY Salary DESC) AS SalaryRank
FROM Employees;`} />
            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-4 inline-block w-full">
              <p className="font-bold mb-2 text-indigo-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Output</p>
              <div className="whitespace-pre">
                {`Name      Salary SalaryRank
Arjun     80000  1
Rahul     75000  2
Karthick  60000  3
Sneha     50000  4
Anjali    45000  5`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logical Thinking Exercises & Personal Advice */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Logical Thinking Exercises */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-800 shadow-sm flex flex-col justify-center relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.05] dark:opacity-10 pointer-events-none">
              <Brain className="w-48 h-48 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center relative z-10 border-b border-indigo-200 dark:border-indigo-800 pb-4">
              <span className="mr-3 text-3xl">🧠</span> Logical Thinking
            </h2>
            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-6 bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800 w-fit">
              (For Interview Prep)
            </p>
            <p className="text-indigo-800 dark:text-indigo-200 font-medium mb-4 italic">Try solving before checking solution:</p>

            <ul className="space-y-4 relative z-10">
              {[
                "Find employees earning between 50000 and 80000",
                "Find departments having more than 2 employees",
                "Find employees whose name starts with 'A'",
                "Delete employees with salary < 50000",
                "Increase salary by 10% for IT department"
              ].map((q, idx) => (
                <li key={idx} className="bg-white/70 dark:bg-gray-900/60 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex items-start shadow-sm mix-blend-luminosity dark:mix-blend-normal">
                  <Play className="w-4 h-4 mr-3 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-indigo-900 dark:text-indigo-100 font-medium text-sm leading-snug">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Advice */}
          <div className="lg:col-span-7 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
              <Star className="w-64 h-64 text-amber-500" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 border-b border-gray-800 pb-5">
              <h2 className="text-2xl font-bold flex items-center text-white">
                <Lightbulb className="w-7 h-7 text-amber-400 mr-3" />
                My Personal Advice
              </h2>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-3 sm:mt-0 w-fit">15+ Years Experience</span>
            </div>

            <div className="space-y-6 relative z-10 grid sm:grid-cols-2 gap-x-6">

              {/* 1 */}
              <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm">
                <h4 className="font-bold text-white mb-3 text-lg border-b border-gray-700 pb-2"><span className="text-red-400 pr-1">1️⃣</span> Never Memorize</h4>
                <p className="text-gray-400 text-sm font-medium mb-3 italic">Understand:</p>
                <ul className="text-sm font-bold text-gray-300 space-y-1.5 ml-2 border-l-2 border-gray-600 pl-3">
                  <li>What is required?</li>
                  <li>From which table?</li>
                  <li>What condition?</li>
                  <li>Any grouping? / Sorting?</li>
                </ul>
              </div>

              {/* 2 */}
              <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm flex flex-col justify-center text-center">
                <h4 className="font-bold text-white mb-3 text-lg"><span className="text-emerald-400 pr-1">2️⃣</span> Practice Daily<br /><span className="text-xs text-gray-400 bg-gray-900 px-2 py-0.5 rounded-full">(Even 20 mins)</span></h4>
                <p className="text-sm text-gray-300 font-medium leading-relaxed bg-black/40 p-3 rounded-xl border border-gray-800">
                  SQL is like math.<br />
                  <span className="text-emerald-400">The more you solve, the stronger your logic becomes.</span>
                </p>
              </div>

              {/* 3 */}
              <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm sm:col-span-2">
                <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">3️⃣</span> Use Realistic Data</h4>
                <p className="text-sm text-gray-400 font-medium mb-3">Instead of random tables, build:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                  <span className="bg-blue-900/30 px-2 py-1.5 rounded text-xs font-bold text-blue-300 text-center border border-blue-800/50 whitespace-nowrap overflow-hidden text-ellipsis">E-commerce</span>
                  <span className="bg-blue-900/30 px-2 py-1.5 rounded text-xs font-bold text-blue-300 text-center border border-blue-800/50 whitespace-nowrap overflow-hidden text-ellipsis">Hospital</span>
                  <span className="bg-blue-900/30 px-2 py-1.5 rounded text-xs font-bold text-blue-300 text-center border border-blue-800/50 whitespace-nowrap overflow-hidden text-ellipsis">Student Portal</span>
                  <span className="bg-blue-900/30 px-2 py-1.5 rounded text-xs font-bold text-blue-300 text-center border border-blue-800/50 whitespace-nowrap overflow-hidden text-ellipsis">Banking</span>
                </div>
                <p className="text-sm text-emerald-400 font-bold bg-emerald-900/20 px-3 py-1.5 rounded border border-emerald-900/50 w-full text-center tracking-wide">
                  That builds project-level confidence.
                </p>
              </div>

              {/* 4 */}
              <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/30 shadow-sm sm:col-span-2 mt-2 relative z-10 shrink-0">
                <h4 className="font-bold text-white mb-3 text-lg"><span className="text-indigo-400 pr-1">4️⃣</span> For Your Course Website</h4>
                <p className="text-sm text-indigo-200 mb-4 font-medium italic">I suggest you structure exercises as:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20">Concept Explanation</span>
                  <span className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20 flex items-center">Practice <Target className="w-3 h-3 ml-1 text-emerald-400" /></span>
                  <span className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20 flex items-center">Challenge <Zap className="w-3 h-3 ml-1 text-amber-400" /></span>
                  <span className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20">Interview</span>
                  <span className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/20">Real-world Scenario</span>
                </div>
                <p className="text-center font-bold text-lg text-indigo-300 mt-5 uppercase tracking-widest pt-3 border-t border-indigo-500/30">
                  That makes your platform stand out 🚀
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlExercises;