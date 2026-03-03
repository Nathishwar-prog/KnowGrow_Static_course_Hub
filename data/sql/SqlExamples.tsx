import React, { useState } from 'react';
import {
  Database, Search, Edit, Trash2, Server,
  Lightbulb, Target, Brain, Table2, AlertTriangle,
  Check, Copy, Globe, Award, GraduationCap
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

const SqlExamples: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 rounded-3xl mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <Database className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is SQL?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          <code className="bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded font-bold text-blue-700 dark:text-blue-300">SQL</code> (Structured Query Language) is a standard language used to:
        </p>

        <div className="flex flex-wrap justify-center gap-3 relative z-10 mb-8">
          {[
            { text: "Store data", icon: Database },
            { text: "Retrieve data", icon: Search },
            { text: "Update data", icon: Edit },
            { text: "Delete data", icon: Trash2 },
            { text: "Manage databases", icon: Server },
          ].map((item, i) => (
            <div key={i} className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm font-medium text-gray-700 dark:text-gray-300 transition-transform hover:scale-105">
              <item.icon className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
              {item.text}
            </div>
          ))}
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 p-4 rounded-xl inline-block shadow-sm">
          <p className="font-bold text-blue-800 dark:text-blue-300 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2 text-blue-500 shrink-0" /> Think of SQL as the language used to talk to databases.
          </p>
        </div>
      </header>

      {/* 2️⃣ Types of SQL Commands */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-purple-500">2️⃣</span> Types of SQL Commands
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg inline-block font-medium shadow-sm border border-gray-200 dark:border-gray-700">
          SQL is divided into 5 major categories:
        </p>

        <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-medium min-w-[500px]">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b dark:border-gray-700">Type</th>
                  <th className="px-6 py-4 border-b dark:border-gray-700">Full Form</th>
                  <th className="px-6 py-4 border-b dark:border-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400">DDL</td>
                  <td className="px-6 py-4">Data Definition Language</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">Structure (CREATE, ALTER, DROP)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400">DML</td>
                  <td className="px-6 py-4">Data Manipulation Language</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">Data (INSERT, UPDATE, DELETE)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-amber-600 dark:text-amber-400">DQL</td>
                  <td className="px-6 py-4">Data Query Language</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">SELECT</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-purple-600 dark:text-purple-400">DCL</td>
                  <td className="px-6 py-4">Data Control Language</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">GRANT, REVOKE</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-rose-600 dark:text-rose-400">TCL</td>
                  <td className="px-6 py-4">Transaction Control Language</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600 dark:text-gray-400">COMMIT, ROLLBACK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🏗 Step-by-Step Practical SQL Examples */}
      <section className="max-w-4xl mx-auto mb-16 space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <span className="mr-3 text-4xl">🏗</span> Step-by-Step Practical SQL Examples
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          We’ll build everything from scratch.
        </p>

        {/* 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">🧱</span> Example 1: CREATE TABLE (DDL)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm text-pink-600 dark:text-pink-400 font-bold border border-gray-200 dark:border-gray-600">CREATE TABLE</code> is used to create a new table in a database.</span>
          </p>
          <CodeSnippetBlock
            title="CREATE TABLE Syntax"
            codeSnippet={`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Department VARCHAR(50),
    Marks INT
);`} />
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 mt-4">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center"><Brain className="w-5 h-5 mr-2" /> What This Does:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-indigo-900 dark:text-indigo-200 font-medium">
              <li>Creates a table named <code className="font-bold bg-white/50 dark:bg-black/30 px-1 rounded">Students</code></li>
              <li>Defines columns and data types</li>
              <li>Sets <code className="font-bold bg-white/50 dark:bg-black/30 px-1 rounded">StudentID</code> as Primary Key</li>
            </ul>
          </div>
        </div>

        {/* 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">📝</span> Example 2: INSERT Data (DML)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm text-pink-600 dark:text-pink-400 font-bold border border-gray-200 dark:border-gray-600">INSERT INTO</code> adds new records into a table.</span>
          </p>
          <CodeSnippetBlock
            title="INSERT Statements"
            codeSnippet={`INSERT INTO Students VALUES (1, 'Karthick', 21, 'Computer Science', 85);
INSERT INTO Students VALUES (2, 'Anjali', 20, 'Electronics', 90);
INSERT INTO Students VALUES (3, 'Rahul', 22, 'Mechanical', 75);`} />

          <div className="mt-6">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-emerald-500" /> Table Visualization After INSERT</h4>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="w-full text-left text-sm whitespace-nowrap min-w-[500px]">
                <thead className="bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 font-bold">
                  <tr>
                    <th className="px-4 py-3 border-b dark:border-gray-700">StudentID</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Name</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Age</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Department</th>
                    <th className="px-4 py-3 border-b dark:border-gray-700">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-600 dark:text-gray-400 font-mono">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"><td className="px-4 py-2">1</td><td className="px-4 py-2 text-gray-900 dark:text-gray-200 font-bold">Karthick</td><td className="px-4 py-2">21</td><td className="px-4 py-2">Computer Science</td><td className="px-4 py-2">85</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"><td className="px-4 py-2">2</td><td className="px-4 py-2 text-gray-900 dark:text-gray-200 font-bold">Anjali</td><td className="px-4 py-2">20</td><td className="px-4 py-2">Electronics</td><td className="px-4 py-2">90</td></tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"><td className="px-4 py-2">3</td><td className="px-4 py-2 text-gray-900 dark:text-gray-200 font-bold">Rahul</td><td className="px-4 py-2">22</td><td className="px-4 py-2">Mechanical</td><td className="px-4 py-2">75</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">🔍</span> Example 3: SELECT (DQL)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm text-pink-600 dark:text-pink-400 font-bold border border-gray-200 dark:border-gray-600">SELECT</code> retrieves data from a table.</span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
                <span className="text-blue-500 mr-2">🔹</span> Select All Data
              </h4>
              <CodeSnippetBlock codeSnippet={`SELECT * FROM Students;`} />
              <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner">
                <p className="font-bold mb-2 text-gray-400 dark:text-gray-500 uppercase tracking-widest">// Output</p>
                <div className="whitespace-pre">
                  {`StudentID Name     Age Department       Marks
1         Karthick 21  Computer Science 85
2         Anjali   20  Electronics      90
3         Rahul    22  Mechanical       75`}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
                <span className="text-blue-500 mr-2">🔹</span> Select Specific Columns
              </h4>
              <CodeSnippetBlock codeSnippet={`SELECT Name, Marks FROM Students;`} />
              <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner">
                <p className="font-bold mb-2 text-gray-400 dark:text-gray-500 uppercase tracking-widest">// Output</p>
                <div className="whitespace-pre">
                  {`Name      Marks
Karthick  85
Anjali    90
Rahul     75`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">🎯</span> Example 4: WHERE Clause (Filtering)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> Used to filter records based on specific conditions.</span>
          </p>
          <CodeSnippetBlock codeSnippet={`SELECT * FROM Students
WHERE Marks > 80;`} />
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-2">
            <p className="font-bold mb-2 text-indigo-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Output:</p>
            <div className="whitespace-pre">
              {`StudentID Name     Age Department       Marks
1         Karthick 21  Computer Science 85
2         Anjali   20  Electronics      90`}
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">✏️</span> Example 5: UPDATE
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> Modify existing data in a table. <strong className="text-rose-500 ml-1">Always use WHERE!</strong></span>
          </p>
          <CodeSnippetBlock codeSnippet={`UPDATE Students
SET Marks = 88
WHERE StudentID = 1;`} />
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-2">
            <p className="font-bold mb-2 text-emerald-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Updated Table:</p>
            <div className="whitespace-pre">
              {`StudentID Name     Age Department       Marks
1         Karthick 21  Computer Science `}<span className="text-white bg-emerald-500 px-1 py-0.5 rounded font-bold">88</span>{`
2         Anjali   20  Electronics      90
3         Rahul    22  Mechanical       75`}
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-3 text-2xl">❌</span> Example 6: DELETE
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Definition:</strong> Remove records from a table.</span>
          </p>
          <CodeSnippetBlock codeSnippet={`DELETE FROM Students
WHERE StudentID = 3;`} />
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-2">
            <p className="font-bold mb-2 text-rose-500 flex items-center uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-1" /> Table After DELETE:</p>
            <div className="whitespace-pre">
              {`StudentID Name     Age Department       Marks
1         Karthick 21  Computer Science 88
2         Anjali   20  Electronics      90`}
            </div>
            <p className="text-gray-500 italic mt-2">// Notice how StudentID 3 (Rahul) is now missing from the results.</p>
          </div>
        </div>

        {/* 7 & 8 */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="mr-2 text-2xl">📊</span> Example 7: ORDER BY
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-start flex-grow">
              <Target className="w-4 h-4 mr-2 text-indigo-500 shrink-0 mt-0.5" />
              <span><strong className="text-gray-800 dark:text-gray-200">Definition:</strong> Sort results (ASC or DESC).</span>
            </p>
            <CodeSnippetBlock codeSnippet={`SELECT * FROM Students
ORDER BY Marks DESC;`} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-3">
              <span className="mr-2 text-2xl">📈</span> Example 8: GROUP BY
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT Department, AVG(Marks) AS AverageMarks
FROM Students
GROUP BY Department;`} />
            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-inner mt-4 flex-grow">
              <p className="font-bold mb-2 text-blue-500 uppercase tracking-widest text-[10px]">// Output</p>
              <div className="whitespace-pre">
                {`Department       AverageMarks
Computer Science 88
Electronics      90`}
              </div>
            </div>
          </div>
        </div>

        {/* 9 */}
        <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 blur-xl opacity-50 dark:opacity-20 pointer-events-none">
            <div className="w-32 h-32 bg-indigo-400 rounded-full"></div>
          </div>

          <div className="relative z-10 flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800/50 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 flex items-center">
              <span className="mr-3 text-3xl">🔥</span> Example 9: JOIN
            </h3>
            <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm hidden sm:inline-block">Important for Real Projects</span>
          </div>

          <div className="relative z-10 space-y-6">
            <div>
              <p className="mb-3 text-gray-700 dark:text-gray-300 font-medium flex items-center">
                <span className="bg-indigo-500 text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs font-bold mr-2">1</span>
                Let’s create another table:
              </p>
              <CodeSnippetBlock
                title="Setup Departments Table"
                codeSnippet={`CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);
INSERT INTO Departments VALUES (1, 'Computer Science');
INSERT INTO Departments VALUES (2, 'Electronics');`} />
            </div>

            <div className="pt-2">
              <p className="mb-3 text-gray-700 dark:text-gray-300 font-medium flex items-center">
                <span className="bg-indigo-500 text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xs font-bold mr-2">2</span>
                Let's join the Students and Departments table:
              </p>
              <CodeSnippetBlock
                title="INNER JOIN Query"
                codeSnippet={`SELECT Students.Name, Students.Marks, Departments.DepartmentName
FROM Students
INNER JOIN Departments
ON Students.Department = Departments.DepartmentName;`} />
            </div>
          </div>
        </div>

      </section>

      {/* Real-World Understanding & Recommendations */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Real World Understanding */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.03] dark:opacity-5">
              <Globe className="w-56 h-56 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex flex-col relative z-10 border-b border-gray-100 dark:border-gray-700 pb-5">
              <span className="text-3xl mb-2">🎯</span> Real-World<br />Understanding
            </h2>
            <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs mb-5 relative z-10">Think like this:</p>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Tables</span>
                <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1 rounded-md font-bold text-sm">Excel Sheets</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Rows</span>
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 px-3 py-1 rounded-md font-bold text-sm">Records</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">Columns</span>
                <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 px-3 py-1 rounded-md font-bold text-sm">Fields</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <span className="font-medium text-gray-700 dark:text-gray-300">SQL</span>
                <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 px-3 py-1 rounded-md font-bold text-sm">Questions</span>
              </div>
            </div>
          </div>

          {/* Personal Recommendations */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Award className="w-56 h-56 text-amber-500" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 border-b border-gray-800 pb-6 shrink-0">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-white">
                <span className="mr-3 text-amber-400">💡</span> My Personal Recommendations
              </h2>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-4 sm:mt-0 w-fit shrink-0">15+ Years Experience</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 text-gray-300 flex-grow">

              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 border-l-4 border-l-red-500 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-2 flex items-center"><span className="text-xl mr-2 text-red-400">1️⃣</span> Always Use WHERE</h4>
                  <p className="text-sm text-gray-400 mb-2 font-medium">Never run this with UPDATE or DELETE:</p>
                  <code className="text-xs bg-black/60 text-red-400 p-2.5 rounded-lg border border-red-900/50 block mb-2 font-mono">UPDATE Students SET Marks = 100;</code>
                  <p className="text-sm font-bold text-red-300">It updates ALL rows! 😅</p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 flex items-center"><span className="text-xl mr-2 text-indigo-400">3️⃣</span> Use Aliases for Clean Code</h4>
                  <div className="bg-black/40 rounded-lg p-3 border border-gray-800">
                    <code className="text-xs font-mono text-emerald-300 whitespace-pre leading-relaxed block">SELECT s.Name, s.Marks<br />FROM <span className="text-white font-bold">Students s</span>;</code>
                  </div>
                  <p className="text-sm text-emerald-400 font-bold mt-3 pl-2 border-l-2 border-emerald-500">Cleaner and professional.</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* 2 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 flex items-center"><span className="text-xl mr-2 text-blue-400">2️⃣</span> Learn SELECT Deeply</h4>
                  <p className="text-sm text-gray-400 mb-3 font-medium">90% of real-world SQL work is:</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <span className="bg-blue-900/40 text-blue-300 px-2 py-1.5 rounded text-xs font-bold font-mono text-center border border-blue-800">SELECT</span>
                    <span className="bg-indigo-900/40 text-indigo-300 px-2 py-1.5 rounded text-xs font-bold font-mono text-center border border-indigo-800">JOIN</span>
                    <span className="bg-purple-900/40 text-purple-300 px-2 py-1.5 rounded text-xs font-bold font-mono text-center border border-purple-800">GROUP BY</span>
                    <span className="bg-pink-900/40 text-pink-300 px-2 py-1.5 rounded text-xs font-bold font-mono text-center border border-pink-800">Subqueries</span>
                  </div>
                  <p className="text-sm font-bold text-emerald-400">Master these first.</p>
                </div>

                {/* 4 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 flex items-center"><span className="text-xl mr-2 text-amber-400">4️⃣</span> Query Optimization</h4>
                  <ul className="text-sm font-medium space-y-3 text-gray-300">
                    <li className="flex items-center bg-gray-800/80 p-2 rounded-lg border border-gray-700/50"><AlertTriangle className="w-4 h-4 mr-2 text-amber-500 shrink-0" /> Avoid <code className="mx-1 text-amber-300 bg-amber-900/20 px-1 rounded">SELECT *</code></li>
                    <li className="flex items-center bg-gray-800/80 p-2 rounded-lg border border-gray-700/50"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Use indexes properly</li>
                    <li className="flex items-center bg-gray-800/80 p-2 rounded-lg border border-gray-700/50"><Check className="w-4 h-4 mr-2 text-emerald-500 shrink-0" /> Filter early (WHERE first)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-indigo-900/20 p-6 rounded-2xl border border-indigo-500/30 relative z-10 shrink-0">
              <h4 className="font-bold text-white mb-4 flex items-center"><span className="text-xl mr-2 text-indigo-400">5️⃣</span> Build Mini Projects (For this course)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 text-center flex flex-col items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-3xl mb-2">🎓</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Student<br />Management</span>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 text-center flex flex-col items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-3xl mb-2">🛒</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">E-commerce<br />Order DB</span>
                </div>
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 text-center flex flex-col items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-3xl mb-2">🏥</span>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Hospital<br />Management</span>
                </div>
                <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/50 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <span className="text-3xl mb-2">🩸</span>
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wide">Blood Bank<br />System (Best)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tips & Tricks for Students */}
      <section className="max-w-4xl mx-auto pb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center justify-center">
          <GraduationCap className="w-10 h-10 mr-4 text-emerald-500" />
          Tips & Tricks for Students
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Practice daily",
            "Use sample databases",
            "Try writing queries before seeing answers",
            "Understand logic — don't memorize"
          ].map((tip, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 px-6 py-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center transform transition hover:-translate-y-1">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-1.5 rounded-full mr-3 shrink-0">
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-bold text-gray-700 dark:text-gray-300">{tip}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SqlExamples;