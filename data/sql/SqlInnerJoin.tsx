import React, { useState } from 'react';
import {
  GitMerge, CheckCircle2, Activity, Database, Table,
  Search, TrendingUp, Layers, Target, Check, Copy, Flame, Lightbulb, Hexagon, DivideCircle as CircleDivide
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

const DataTable = ({ headers, rows }: { headers: string[], rows: (string | number)[][] }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
    <table className="w-full text-sm text-left font-sans">
      <thead className="bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider text-xs">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2.5 text-gray-800 dark:text-gray-200 border-r border-gray-100 dark:border-gray-800 last:border-r-0 font-medium">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SqlInnerJoin: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* Introduction */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-600 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800">
          <GitMerge className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6 tracking-tight">
          What is INNER JOIN?
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] pointer-events-none"></div>

          <p className="text-lg font-medium mb-6 leading-relaxed flex items-start">
            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-lg mr-3 mt-1 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <span>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-sm mr-2 border-b-2 border-indigo-200 dark:border-indigo-800/50">Definition:</strong>
              An INNER JOIN returns <strong className="text-gray-900 dark:text-white">only the rows</strong> where there is a match in <strong className="text-gray-900 dark:text-white">both tables</strong> based on a related column.
            </span>
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mb-6 relative">
            <p className="font-bold text-indigo-900 dark:text-indigo-200 text-sm uppercase tracking-widest mb-3 flex items-center">
              <span className="text-2xl mr-3">👉</span> In simple words:
            </p>
            <p className="text-xl font-black text-indigo-800 dark:text-indigo-300 ml-9 mb-3">INNER JOIN = Show only matching data from both tables.</p>

            <div className="ml-9 inline-flex items-center bg-white/60 dark:bg-black/20 px-3 py-1.5 rounded-lg border border-indigo-200/50 dark:border-indigo-700/30 text-sm font-bold text-rose-600 dark:text-rose-400">
              If no match <span className="mx-2 text-lg">→</span> row is excluded.
            </div>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ Visual Understanding (Venn Diagram) */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Activity className="w-6 h-6" />
          </span>
          2️⃣ Visual Understanding (Venn Diagram)
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col items-center">
          {/* Visual Venn Diagram Creation */}
          <div className="relative w-64 h-48 mb-10 flex items-center justify-center">
            {/* Left Circle */}
            <div className="absolute left-0 w-40 h-40 rounded-full border-4 border-rose-400/50 bg-rose-100/30 dark:bg-rose-900/20 flex items-center justify-start pl-8 text-rose-700 dark:text-rose-300 font-black tracking-widest z-0">
              A
            </div>
            {/* Right Circle */}
            <div className="absolute right-0 w-40 h-40 rounded-full border-4 border-blue-400/50 bg-blue-100/30 dark:bg-blue-900/20 flex items-center justify-end pr-8 text-blue-700 dark:text-blue-300 font-black tracking-widest z-0">
              B
            </div>
            {/* Intersection / Inner Join Area */}
            <div className="absolute w-20 h-32 rounded-[100%] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-10 flex items-center justify-center text-white font-black text-sm drop-shadow-md border border-indigo-400 animate-pulse">
              Join
            </div>
          </div>

          <p className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 bg-indigo-50 dark:bg-indigo-900/20 px-6 py-3 rounded-xl border border-indigo-100 dark:border-indigo-800/30 shadow-sm inline-block">
            INNER JOIN returns only the <strong className="text-indigo-600 dark:text-indigo-400 mx-1">intersection</strong> between two tables.
          </p>

          {/* Visual Placeholder for "4" from user's content */}
          <div className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-black text-gray-400 opacity-50">
            4
          </div>
        </div>
      </section>

      {/* 🏗 3️⃣ Practical Example & Data */}
      <section className="max-w-5xl mx-auto mb-20 space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center border-b border-gray-200 dark:border-gray-800 pb-4">
          <span className="text-4xl mr-4 drop-shadow-md">🏗</span> 3️⃣ Practical Example – Step by Step
        </h2>

        <p className="text-lg font-bold text-gray-600 dark:text-gray-400">We’ll create two related tables: <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded mx-1">Customers</span> and <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded mx-1">Orders</span>.</p>

        {/* Steps 1 & 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🧱</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 1: Create Customers</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    City VARCHAR(50)
);`} language="sql" />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center border-2 border-blue-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🧱</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Step 2: Create Orders</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    Amount INT
);`} language="sql" />
          </div>
        </div>

        {/* Step 3: Insert Data */}
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl relative mt-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-[100px] pointer-events-none"></div>

          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <span className="bg-emerald-500/20 text-emerald-400 w-10 h-10 rounded-xl flex items-center justify-center text-xl mr-3 border border-emerald-500/30">📝</span>
            Step 3: Insert Data
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-indigo-400 text-sm uppercase tracking-widest mb-2 flex items-center"><Table className="w-4 h-4 mr-2" /> Customers Table</p>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Customers VALUES (1, 'Karthick', 'Chennai');
INSERT INTO Customers VALUES (2, 'Anjali', 'Madurai');
INSERT INTO Customers VALUES (3, 'Rahul', 'Bangalore');
INSERT INTO Customers VALUES (4, 'Sneha', 'Chennai');`} />
            </div>
            <div>
              <p className="font-bold text-blue-400 text-sm uppercase tracking-widest mb-2 flex items-center"><Table className="w-4 h-4 mr-2" /> Orders Table</p>
              <CodeSnippetBlock codeSnippet={`INSERT INTO Orders VALUES (101, 1, 5000);
INSERT INTO Orders VALUES (102, 3, 7000);
INSERT INTO Orders VALUES (103, 1, 2000);`} />
            </div>
          </div>
        </div>

        {/* Current Data Representation */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative pt-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white font-black px-6 py-2 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center">
            <span className="text-2xl mr-2">📊</span> Current Data State
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div>
              <p className="font-bold text-indigo-600 dark:text-indigo-400 text-sm uppercase tracking-widest mb-3 text-center">Customers</p>
              <DataTable
                headers={["CustomerID", "CustomerName", "City"]}
                rows={[
                  [1, "Karthick", "Chennai"],
                  [2, "Anjali", "Madurai"],
                  [3, "Rahul", "Bangalore"],
                  [4, "Sneha", "Chennai"]
                ]}
              />
            </div>
            <div>
              <p className="font-bold text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest mb-3 text-center">Orders</p>
              <DataTable
                headers={["OrderID", "CustomerID", "Amount"]}
                rows={[
                  [101, 1, 5000],
                  [102, 3, 7000],
                  [103, 1, 2000]
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 4️⃣ INNER JOIN Query & Output */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-1 sm:p-2 rounded-[2.5rem] shadow-xl">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-[2rem] border border-indigo-100 dark:border-indigo-800/50">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex flex-col sm:flex-row sm:items-center border-b border-gray-100 dark:border-gray-800 pb-5">
              <div className="flex items-center">
                <span className="text-4xl mr-4 drop-shadow-md">🔥</span> 4️⃣ INNER JOIN Query
              </div>
              <span className="mt-3 sm:mt-0 sm:ml-auto bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-bold text-sm px-4 py-2 rounded-xl flex items-center border border-indigo-200 dark:border-indigo-800/50 w-fit">
                <Target className="w-4 h-4 mr-2" /> Show Customers with Orders
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col">
                <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.OrderID, o.Amount
FROM Customers c
INNER JOIN Orders o
ON c.CustomerID = o.CustomerID;`} title="The Magic Query" />

                <div className="mt-auto bg-amber-50 dark:bg-amber-900/20 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/50">
                  <p className="font-black text-amber-800 dark:text-amber-400 flex items-center text-lg mb-3">
                    <span className="text-2xl mr-2">🧠</span> Why This Output?
                  </p>
                  <ul className="space-y-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Customer 1 → Has orders → <span className="text-emerald-600 dark:text-emerald-400 ml-1">Included</span></li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Customer 3 → Has orders → <span className="text-emerald-600 dark:text-emerald-400 ml-1">Included</span></li>
                    <li className="flex items-center"><Hexagon className="w-4 h-4 mr-2 text-rose-500 rotate-90" /> Customer 2 → No orders → <span className="text-rose-600 dark:text-rose-400 ml-1">Excluded</span></li>
                    <li className="flex items-center"><Hexagon className="w-4 h-4 mr-2 text-rose-500 rotate-90" /> Customer 4 → No orders → <span className="text-rose-600 dark:text-rose-400 ml-1">Excluded</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 sm:p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 flex-grow shadow-sm">
                  <p className="font-bold text-emerald-800 dark:text-emerald-400 text-sm uppercase tracking-widest mb-4 flex items-center text-center justify-center">
                    <span className="text-xl mr-2">📊</span> Output
                  </p>
                  <DataTable
                    headers={["CustomerName", "OrderID", "Amount"]}
                    rows={[
                      ["Karthick", 101, 5000],
                      ["Karthick", 103, 2000],
                      ["Rahul", 102, 7000]
                    ]}
                  />
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/50 text-center text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                    INNER JOIN shows only matching records.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5, 6, 7 Concepts */}
      <section className="max-w-4xl mx-auto mb-20 space-y-8">

        {/* 5 & 6 Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* 5: With WHERE */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm border border-blue-200 dark:border-blue-800/50 text-xl font-sans">5️⃣</span>
              <span className="flex items-center"><Search className="w-5 h-5 mr-2 text-blue-500" /> INNER JOIN with WHERE</span>
            </h2>
            <p className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 font-bold text-sm px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-800/50 mb-4 inline-flex items-center shadow-sm w-fit">
              <Target className="w-4 h-4 mr-2" /> Show Orders Above 4000
            </p>
            <div className="flex-grow flex items-end">
              <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.Amount
FROM Customers c
INNER JOIN Orders o
ON c.CustomerID = o.CustomerID
WHERE o.Amount > 4000;`} />
            </div>
          </div>

          {/* 6: With GROUP BY */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm border border-indigo-200 dark:border-indigo-800/50 text-xl font-sans">6️⃣</span>
              <span className="flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> INNER JOIN with GROUP BY</span>
            </h2>
            <p className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 font-bold text-sm px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 mb-4 inline-flex items-center shadow-sm w-fit">
              <Target className="w-4 h-4 mr-2" /> Total Amount per Customer
            </p>
            <div className="flex-grow flex items-end">
              <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, SUM(o.Amount) AS TotalSpent
FROM Customers c
INNER JOIN Orders o
ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName;`} />
            </div>
          </div>
        </div>

        {/* 7: INNER vs LEFT */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 border border-gray-800 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-2xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="text-3xl mr-4 drop-shadow-md">🆚</span> 7️⃣ INNER JOIN vs LEFT JOIN
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-0 relative z-10 mb-6">
            <div className="bg-indigo-500/10 border border-indigo-500/30 p-6 sm:rounded-l-2xl sm:border-r-0 shadow-inner group">
              <p className="font-black text-indigo-300 text-xl mb-4 uppercase tracking-widest text-center group-hover:scale-105 transition-transform">INNER JOIN</p>
              <ul className="space-y-3 font-bold text-indigo-100 text-sm">
                <li className="flex items-center justify-center bg-black/30 py-2 px-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Only matching rows</li>
                <li className="flex items-center justify-center bg-black/30 py-2 px-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Excludes unmatched</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 p-6 sm:rounded-r-2xl shadow-inner group">
              <p className="font-black text-purple-300 text-xl mb-4 uppercase tracking-widest text-center group-hover:scale-105 transition-transform">LEFT JOIN</p>
              <ul className="space-y-3 font-bold text-purple-100 text-sm">
                <li className="flex items-center justify-center bg-black/30 py-2 px-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> All left rows + matching right</li>
                <li className="flex items-center justify-center bg-black/30 py-2 px-3 rounded-lg"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Includes unmatched</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center font-bold text-white relative z-10 inline-flex sm:flex shadow-lg mx-auto w-max sm:w-auto items-center justify-center">
            <Flame className="w-5 h-5 mr-3 text-amber-500" /> <span className="uppercase tracking-wider">INNER JOIN is stricter.</span>
          </div>
        </div>
      </section>

      {/* 🏢 8 & 🚀 9 Real World & Performance */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* 8: Real World */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full"></div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🏢</span> 8️⃣ Real-World Use Cases
            </h2>
            <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs mb-4">INNER JOIN is used in:</p>

            <ul className="space-y-3 font-bold text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow">
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"><div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-blue-600 dark:text-blue-400 mr-3"><CheckCircle2 className="w-4 h-4" /></div> E-commerce (Customers + Orders)</li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"><div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-blue-600 dark:text-blue-400 mr-3"><CheckCircle2 className="w-4 h-4" /></div> Banking (Accounts + Transactions)</li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"><div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-blue-600 dark:text-blue-400 mr-3"><CheckCircle2 className="w-4 h-4" /></div> Hospital (Patients + Appointments)</li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"><div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-blue-600 dark:text-blue-400 mr-3"><CheckCircle2 className="w-4 h-4" /></div> College (Students + Marks)</li>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"><div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-blue-600 dark:text-blue-400 mr-3"><CheckCircle2 className="w-4 h-4" /></div> HR systems (Employees + Departments)</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800/50 font-black text-blue-900 dark:text-blue-300 text-center text-sm shadow-sm mt-auto">
              In backend APIs, 80% of data fetching involves JOIN operations.
            </div>
          </div>

          {/* 9: Performance */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
            <h2 className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
              <span className="text-3xl mr-3">🚀</span> 9️⃣ Performance Tip
            </h2>

            <p className="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest text-xs mb-4">Always:</p>
            <div className="bg-white/60 dark:bg-black/20 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-800/50 shadow-sm mb-6">
              <ul className="space-y-3 font-bold text-emerald-900 dark:text-emerald-200 text-sm">
                <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-emerald-500" /> Index join columns</li>
                <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-emerald-500" /> Use proper foreign keys</li>
                <li className="flex items-center"><Target className="w-4 h-4 mr-2 text-rose-500" /> Avoid SELECT * in large joins</li>
              </ul>
            </div>

            <div className="mt-auto">
              <p className="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest text-xs mb-2">Example:</p>
              <CodeSnippetBlock codeSnippet={`CREATE INDEX idx_customerid
ON Orders(CustomerID);`} language="sql" />
              <p className="font-bold text-center text-emerald-800 dark:text-emerald-400 text-sm bg-emerald-100 dark:bg-emerald-900/40 py-2 px-4 rounded-lg shadow-sm border border-emerald-200/50 dark:border-emerald-700/50">
                This improves JOIN performance significantly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 💡 10️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">💡</span> 10️⃣ My 15+ Years Professional Advice
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden border-l-4 border-l-rose-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">1</span>
              Understand Relationships First
            </h3>
            <p className="font-bold text-rose-600 dark:text-rose-400 text-xs uppercase tracking-widest mb-3 flex items-center"><Search className="w-4 h-4 mr-1" /> Before writing JOIN:</p>
            <ul className="space-y-2 mt-auto text-sm font-bold text-gray-700 dark:text-gray-300">
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-4 h-4 mr-3 text-rose-500" /> What is primary key?</li>
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-4 h-4 mr-3 text-rose-500" /> What is foreign key?</li>
              <li className="flex items-center bg-gray-50 dark:bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-100 dark:border-gray-700"><CheckCircle2 className="w-4 h-4 mr-3 text-rose-500" /> What is relationship type?</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col border-l-4 border-l-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">2</span>
              Use Aliases for Clean Code
            </h3>
            <div className="flex-grow flex items-center">
              <CodeSnippetBlock codeSnippet={`FROM Customers c
INNER JOIN Orders o`} language="sql" />
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30 font-black text-indigo-800 dark:text-indigo-400 mt-2 text-center shadow-sm">
              Cleaner and professional.
            </div>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col border-l-4 border-l-amber-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">3</span>
              Practice Multi-Table JOIN
            </h3>
            <p className="font-bold text-gray-700 dark:text-gray-300 text-sm mb-4">Real systems often join 3–5 tables at once.</p>
            <p className="font-bold text-amber-600 dark:text-amber-400 text-xs uppercase tracking-widest mb-2">Example Strategy:</p>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 font-mono text-xs sm:text-sm text-amber-400 mt-auto shadow-inner overflow-x-auto flex items-center whitespace-nowrap">
              Customers <ArrowRight className="w-4 h-4 mx-2 text-gray-600 hidden sm:block" /> <span className="sm:hidden mx-1">→</span> Orders <ArrowRight className="w-4 h-4 mx-2 text-gray-600 hidden sm:block" /> <span className="sm:hidden mx-1">→</span> OrderItems <ArrowRight className="w-4 h-4 mx-2 text-gray-600 hidden sm:block" /> <span className="sm:hidden mx-1">→</span> Products
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col border-l-4 border-l-emerald-500">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">4</span>
              Learn Execution Plan
            </h3>
            <p className="font-bold text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mb-2 flex items-center"><Search className="w-4 h-4 mr-1" /> Use:</p>
            <div className="bg-gray-900 border border-emerald-500/30 p-4 rounded-xl font-mono text-emerald-400 shadow-inner mb-4 inline-block text-center mx-auto text-sm font-bold">
              EXPLAIN SELECT ...
            </div>
            <p className="font-bold text-emerald-800 dark:text-emerald-400 text-sm bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-sm">
              To understand how database executes JOIN.
            </p>
          </div>

        </div>
      </section>

      {/* 🧪 11️⃣ Practice Exercises */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[2.5rem] p-8 sm:p-12 border border-blue-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10 border-b border-white/10 pb-6">
            <span className="text-5xl mr-4 drop-shadow-lg">🧪</span> 11️⃣ Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {[
              "Join Employees and Departments tables",
              "Find customers with more than 1 order",
              "Join 3 tables together",
              "Use INNER JOIN with GROUP BY",
              "Convert INNER JOIN into subquery"
            ].map((task, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-2xl flex items-center shadow-sm hover:bg-white/20 transition-all hover:-translate-y-1 cursor-default group">
                <div className="bg-blue-400/30 text-blue-100 w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mr-4 shrink-0 group-hover:bg-blue-400/50 transition-colors shadow-inner">{idx + 1}</div>
                <span className="font-bold text-sm sm:text-base leading-tight tracking-wide">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// SVG components missing from lucide-react in previous versions to avoid import errors
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default SqlInnerJoin;