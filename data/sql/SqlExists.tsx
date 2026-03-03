import React, { useState } from 'react';
import {
  Database, Search, Zap, Check, Copy, Table2,
  Target, AlertTriangle, Lightbulb, Brain, Layers, Filter, CheckCircle2, XCircle
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

const SqlExists: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/40 rounded-3xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800/50">
          <Filter className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is EXISTS in SQL?
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-32 h-32 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-emerald-500 text-2xl mr-2">✅</span> Definition
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            <code className="bg-indigo-100 dark:bg-indigo-900/40 px-2 py-0.5 rounded font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">EXISTS</code> is a logical operator used with a subquery to test whether the subquery returns any rows.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-800/50 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
              <span className="text-sm font-bold text-emerald-800 dark:text-emerald-200">If subquery returns at least 1 row → <span className="bg-emerald-200 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-100 px-1.5 rounded">TRUE</span></span>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl border border-rose-100 dark:border-rose-800/50 flex items-center">
              <XCircle className="w-5 h-5 text-rose-500 mr-2 shrink-0" />
              <span className="text-sm font-bold text-rose-800 dark:text-rose-200">If subquery returns no rows → <span className="bg-rose-200 text-rose-900 dark:bg-rose-800 dark:text-rose-100 px-1.5 rounded">FALSE</span></span>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-l-amber-500 p-3 rounded-r-xl">
            <p className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center">
              <span className="text-amber-500 mr-2 text-lg">⚡</span> <span className="underline decoration-amber-500/50 decoration-2 underline-offset-2">Important:</span> EXISTS does not care about the data, only whether rows exist.
            </p>
          </div>
        </div>
      </header>

      {/* 2️⃣ How EXISTS Works Internally */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 2️⃣ How EXISTS Works Internally
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-lg relative overflow-hidden h-full">
            <div className="absolute top-4 right-4 text-gray-700">
              <Zap className="w-16 h-16 opacity-20" />
            </div>
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Think of it like this:</h3>
            <div className="font-mono text-sm leading-8">
              <div className="text-blue-400">IF <span className="text-gray-300">(subquery returns at least 1 row)</span></div>
              <div className="pl-6 text-emerald-400 font-bold border-l-2 border-gray-700 ml-2">return TRUE</div>
              <div className="text-blue-400 mt-2">ELSE</div>
              <div className="pl-6 text-rose-400 font-bold border-l-2 border-gray-700 ml-2">return FALSE</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm flex flex-col justify-center relative h-full">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 mb-4 flex-grow flex items-center">
              <p className="text-indigo-900 dark:text-indigo-200 font-medium text-lg">
                It stops execution <strong className="text-indigo-600 dark:text-indigo-300 font-bold bg-indigo-100 dark:bg-indigo-900/60 px-1 rounded">as soon as it finds the first matching row.</strong>
              </p>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">👉</div>
              <p className="text-gray-700 dark:text-gray-300 font-bold mt-1">
                That’s why it is usually <span className="text-emerald-500 underline decoration-emerald-200 dark:decoration-emerald-900/50 decoration-4 underline-offset-4">faster than IN</span> in large datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Practical Example Setup */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🏗️</span> 3️⃣ Practical Example Setup
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg inline-block border border-blue-100 dark:border-blue-800/50">
          Let’s create two related tables.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center text-lg">
              <span className="mr-2 text-2xl">🧱</span> Table 1: Customers
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    City VARCHAR(50)
);
INSERT INTO Customers VALUES (1, 'Karthick', 'Chennai');
INSERT INTO Customers VALUES (2, 'Anjali', 'Madurai');
INSERT INTO Customers VALUES (3, 'Rahul', 'Bangalore');
INSERT INTO Customers VALUES (4, 'Sneha', 'Chennai');`} />
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center text-lg">
              <span className="mr-2 text-2xl">🧱</span> Table 2: Orders
            </h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    Amount INT
);
INSERT INTO Orders VALUES (101, 1, 5000);
INSERT INTO Orders VALUES (102, 3, 7000);
INSERT INTO Orders VALUES (103, 1, 2000);`} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center text-lg border-b border-gray-100 dark:border-gray-700 pb-3"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> 📊 Data Visualization</h4>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wide text-sm bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded inline-block">Customers</h5>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 font-bold uppercase text-xs">
                    <tr><th className="px-3 py-2 border-b dark:border-gray-700">CustomerID</th><th className="px-3 py-2 border-b dark:border-gray-700">CustomerName</th><th className="px-3 py-2 border-b dark:border-gray-700">City</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300 font-mono">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5 font-bold text-blue-500">1</td><td className="px-3 py-1.5 font-bold">Karthick</td><td className="px-3 py-1.5">Chennai</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5 font-bold">Anjali</td><td className="px-3 py-1.5">Madurai</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5 font-bold text-purple-500">3</td><td className="px-3 py-1.5 font-bold">Rahul</td><td className="px-3 py-1.5">Bangalore</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">4</td><td className="px-3 py-1.5 font-bold">Sneha</td><td className="px-3 py-1.5">Chennai</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide text-sm bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded inline-block">Orders</h5>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 font-bold uppercase text-xs">
                    <tr><th className="px-3 py-2 border-b dark:border-gray-700">OrderID</th><th className="px-3 py-2 border-b dark:border-gray-700">CustomerID</th><th className="px-3 py-2 border-b dark:border-gray-700">Amount</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300 font-mono">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">101</td><td className="px-3 py-1.5 font-bold text-blue-500">1</td><td className="px-3 py-1.5">5000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">102</td><td className="px-3 py-1.5 font-bold text-purple-500">3</td><td className="px-3 py-1.5">7000</td></tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30"><td className="px-3 py-1.5">103</td><td className="px-3 py-1.5 font-bold text-blue-500">1</td><td className="px-3 py-1.5">2000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Basic EXISTS Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-blue-500 text-4xl">🔹</span> 4️⃣ Basic EXISTS Example
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-indigo-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Problem:</strong> Find customers who have placed <strong className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 px-1 rounded">at least one order.</strong></span>
          </p>

          <CodeSnippetBlock codeSnippet={`SELECT CustomerName
FROM Customers c
WHERE EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.CustomerID = c.CustomerID
);`} />

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-inner">
              <p className="font-bold mb-3 text-blue-500 flex items-center uppercase tracking-widest"><Table2 className="w-4 h-4 mr-2" /> 📊 Output:</p>
              <div className="whitespace-pre bg-white/50 dark:bg-black/30 p-3 rounded border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 font-bold">
                {`CustomerName
Karthick
Rahul`}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/50">
              <p className="font-bold mb-3 text-blue-800 dark:text-blue-300 flex items-center font-sans"><Brain className="w-4 h-4 mr-2" /> 🧠 Why?</p>
              <ul className="space-y-2.5 text-sm font-medium font-sans text-gray-800 dark:text-gray-200">
                <li className="flex justify-between items-center bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 rounded border border-white dark:border-gray-700">
                  <span>Customer 1 (Karthick)<br /><span className="text-xs text-gray-500 font-normal">→ Has orders</span></span>
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">✅</span>
                </li>
                <li className="flex justify-between items-center bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 rounded border border-white dark:border-gray-700">
                  <span>Customer 3 (Rahul)<br /><span className="text-xs text-gray-500 font-normal">→ Has orders</span></span>
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">✅</span>
                </li>
                <li className="flex justify-between items-center bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 rounded border border-white dark:border-gray-700 opacity-60">
                  <span>Customer 2 (Anjali)<br /><span className="text-xs text-gray-500 font-normal">→ No orders</span></span>
                  <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400 px-2 py-0.5 rounded font-bold text-xs">❌</span>
                </li>
                <li className="flex justify-between items-center bg-white/60 dark:bg-gray-800/60 px-3 py-1.5 rounded border border-white dark:border-gray-700 opacity-60">
                  <span>Customer 4 (Sneha)<br /><span className="text-xs text-gray-500 font-normal">→ No orders</span></span>
                  <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400 px-2 py-0.5 rounded font-bold text-xs">❌</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 5️⃣ NOT EXISTS Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-rose-500 text-4xl">🔴</span> 5️⃣ NOT EXISTS Example
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm border-l-4 border-l-rose-500">
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-start">
            <Target className="w-5 h-5 mr-2 text-rose-500 shrink-0 mt-0.5" />
            <span><strong className="text-gray-900 dark:text-white">Problem:</strong> Find customers who have <strong className="text-rose-600 dark:text-rose-400 underline decoration-rose-300 decoration-2 underline-offset-2">NOT</strong> placed any order.</span>
          </p>

          <CodeSnippetBlock codeSnippet={`SELECT CustomerName
FROM Customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.CustomerID = c.CustomerID
);`} />

          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4 text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-inner inline-block min-w-[250px]">
            <p className="font-bold mb-3 text-rose-500 flex items-center uppercase tracking-widest"><Table2 className="w-4 h-4 mr-2" /> 📊 Output:</p>
            <div className="whitespace-pre bg-white/50 dark:bg-black/30 p-3 rounded border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 font-bold">
              {`CustomerName
Anjali
Sneha`}
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 6️⃣ EXISTS vs IN */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🧠</span> 6️⃣ EXISTS vs IN <span className="text-xs sm:text-sm bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800 px-3 py-1 rounded-full uppercase tracking-widest font-bold ml-4 shadow-sm relative -top-1 hidden sm:inline-block">Important Interview Question</span>
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center"><Layers className="w-5 h-5 mr-2 text-indigo-500" /> Using IN:</h3>
            <CodeSnippetBlock codeSnippet={`SELECT CustomerName
FROM Customers
WHERE CustomerID IN (
    SELECT CustomerID FROM Orders
);`} />
          </div>

          <div className="p-6">
            <h3 className="font-bold text-rose-600 dark:text-rose-400 mb-4 flex items-center text-lg uppercase tracking-wide"><AlertTriangle className="w-5 h-5 mr-2" /> 🚨 Difference:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-medium min-w-[500px] border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 border border-gray-200 dark:border-gray-700 w-1/2"><span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 px-2 py-1 rounded">EXISTS</span></th>
                    <th className="px-6 py-4 border border-gray-200 dark:border-gray-700 w-1/2"><span className="bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300 px-2 py-1 rounded">IN</span></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">
                  <tr>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 shadow-inner">Stops after first match</td>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">Checks entire list</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-emerald-600 dark:text-emerald-400 font-bold shadow-inner flex items-center"><Check className="w-4 h-4 mr-1" /> Faster for large datasets</td>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-rose-600 dark:text-rose-400 font-bold bg-gray-50/50 dark:bg-gray-800/30">Slower if subquery returns many rows</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 shadow-inner">Works better with correlated subqueries</td>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">Can cause performance issues</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 7️⃣ Advanced Example */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🔥</span> 7️⃣ Advanced Example – <span className="text-indigo-600 dark:text-indigo-400 ml-2">Correlated Subquery</span>
        </h2>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-8 shadow-sm">
          <p className="text-indigo-900 dark:text-indigo-200 font-medium mb-6 flex items-start bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
            <Target className="w-6 h-6 mr-3 text-indigo-500 shrink-0 mt-0.5" />
            <span className="text-lg"><strong className="text-indigo-900 dark:text-white">Problem:</strong> Find customers who placed an order <strong className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">&gt; greater than 6000.</strong></span>
          </p>

          <CodeSnippetBlock codeSnippet={`SELECT CustomerName
FROM Customers c
WHERE EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.CustomerID = c.CustomerID
    AND o.Amount > 6000
);`} />
          <div className="bg-gray-100 dark:bg-gray-900/80 rounded-lg p-4 text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 shadow-inner mt-4 inline-block min-w-[200px]">
            <p className="font-bold mb-3 text-indigo-500 flex items-center uppercase tracking-widest"><Table2 className="w-4 h-4 mr-2" /> 📊 Output:</p>
            <div className="whitespace-pre bg-white/50 dark:bg-black/40 p-3 rounded border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 font-bold">
              {`CustomerName
Rahul`}
            </div>
            <p className="text-xs text-gray-500 mt-2 italic font-sans">// Only Rahul has an order amount &gt; 6000 (OrderID 102, Amount 7000)</p>
          </div>
        </div>
      </section>

      {/* 🎓 8️⃣ Real-World Use Cases */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-4xl">🎓</span> 8️⃣ Real-World Use Cases
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6">
            In real projects, I use <code className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded font-bold">EXISTS</code> for:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Checking if related records exist",
              "Preventing duplicate inserts",
              "Conditional updates",
              "Data validation",
              "Permission checks"
            ].map((useCase, idx) => (
              <div key={idx} className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="font-bold text-gray-800 dark:text-gray-200">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 9️⃣ My 15+ Years Personal Advice & Exercises */}
      <section className="max-w-6xl mx-auto space-y-8 mb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Advice */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row sm:items-center text-white mb-8 border-b border-gray-800 pb-5">
              <span className="flex items-center"><Lightbulb className="w-8 h-8 text-amber-400 mr-3" /> My Personal Advice</span>
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-3 sm:mt-0 sm:ml-4 w-fit">15+ Years Experience</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 flex-grow">
              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-emerald-400 pr-1">1️⃣</span> Always Use EXISTS for Existence Checks</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-black/30 p-2 rounded border border-gray-800/50 flex flex-col">
                      <span className="text-rose-400 text-xs uppercase tracking-wider mb-1 font-bold font-sans">Wrong way:</span>
                      <span className="text-gray-300">SELECT COUNT(*)</span>
                    </div>
                    <div className="bg-indigo-900/20 p-2 rounded border border-indigo-900/50 flex flex-col border-l-2 border-l-emerald-500">
                      <span className="text-emerald-400 text-xs uppercase tracking-wider mb-1 font-bold font-sans">Better way:</span>
                      <span className="text-emerald-300">SELECT 1 WHERE EXISTS (...)</span>
                    </div>
                  </div>
                  <p className="text-xs text-rose-300 mt-2 font-bold italic font-sans flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" /> Because COUNT scans full dataset.</p>
                </div>

                {/* 3 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-blue-400 pr-1">3️⃣</span> Use Proper Indexing</h4>
                  <p className="text-sm text-gray-400 font-medium mb-3">For best performance:</p>
                  <ul className="text-sm font-bold text-gray-300 space-y-2 mb-3">
                    <li className="flex items-center bg-gray-900/50 px-3 py-1.5 rounded"><Database className="w-4 h-4 mr-2 text-blue-400" /> Index foreign key columns</li>
                    <li className="flex items-center bg-gray-900/50 px-3 py-1.5 rounded"><Filter className="w-4 h-4 mr-2 text-emerald-400" /> Index filtering columns</li>
                  </ul>
                  <code className="text-xs text-blue-300 bg-black/50 p-2 rounded block font-mono border border-gray-800">CREATE INDEX idx_customerid ON Orders(CustomerID);</code>
                </div>
              </div>

              <div className="space-y-6">
                {/* 2 */}
                <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 shadow-sm h-[calc(50%-12px)]">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-indigo-400 pr-1">2️⃣</span> Always Use SELECT 1 in EXISTS</h4>
                  <div className="grid grid-cols-2 gap-3 mb-3 text-center font-mono text-sm h-12">
                    <span className="bg-emerald-900/20 text-emerald-400 border border-emerald-800/50 rounded flex items-center justify-center font-bold">SELECT 1</span>
                    <span className="bg-rose-900/20 text-rose-400 border border-rose-800/50 rounded flex items-center justify-center line-through opacity-70">SELECT *</span>
                  </div>
                  <p className="text-sm font-bold text-emerald-400 font-sans mt-auto border-t border-gray-700 pt-3">Cleaner and more professional.</p>
                </div>

                {/* 4 */}
                <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/30 shadow-sm h-[calc(50%-12px)] border-l-4 border-l-amber-500">
                  <h4 className="font-bold text-white mb-3 text-lg"><span className="text-amber-400 pr-1">4️⃣</span> When Data is Huge → EXISTS Wins</h4>
                  <p className="text-sm text-indigo-100 font-medium leading-relaxed font-sans bg-black/20 p-3 rounded-lg border border-indigo-900">
                    In production databases (millions of rows), <code className="bg-indigo-900/80 text-white font-bold px-1 rounded mx-1">EXISTS</code> performs significantly better than <code className="bg-amber-900/80 text-white font-bold px-1 rounded mx-1">IN</code> in correlated queries.
                  </p>
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
                "Find customers who placed more than 2 orders",
                "Find employees who never logged in",
                "Find products that were never sold",
                "Find students who attended at least one exam",
                "Use EXISTS to prevent duplicate insert"
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

export default SqlExists;