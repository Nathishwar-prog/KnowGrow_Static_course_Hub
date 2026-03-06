import React, { useState } from 'react';
import {
  Terminal, Copy, Check, Database, Zap, ArrowRight, Table2,
  AlertTriangle, Lightbulb, CheckCircle2, XCircle, BrainCircuit,
  GraduationCap, Target, Layers, Calculator, ToggleLeft, Activity, PenTool, Server
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

const SqlOperators: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Layers className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">OPERATORS</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The engine of database logic. Learn how to calculate, compare, and filter data using the fundamental symbols of SQL.
        </p>
      </header>

      {/* Intro Definition */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full -z-10"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Target className="w-7 h-7 mr-3 text-teal-500" /> What are SQL Operators?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4 text-lg">
            SQL Operators are symbols or keywords used to perform operations on data stored in a database.
          </p>
          <div className="bg-teal-50 dark:bg-emerald-900/20 p-5 rounded-2xl border border-teal-200 dark:border-emerald-800/30 font-medium text-teal-900 dark:text-emerald-400 text-center">
            In simple terms: Operators allow SQL queries to perform logic and calculations.
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-teal-950 p-8 rounded-3xl shadow-lg border border-teal-800 flex flex-col justify-center text-white relative">
          <h2 className="text-2xl font-bold flex items-center text-white mb-6">
            <Zap className="w-7 h-7 mr-3 text-emerald-400" /> What do they help us do?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center text-center">
              <ToggleLeft className="w-6 h-6 mb-2 text-blue-400" />
              <span className="text-sm font-bold tracking-wider">COMPARE<br /><span className="font-normal text-xs text-blue-200">VALUES</span></span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center text-center">
              <Calculator className="w-6 h-6 mb-2 text-rose-400" />
              <span className="text-sm font-bold tracking-wider">PERFORM<br /><span className="font-normal text-xs text-rose-200">CALCULATIONS</span></span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center text-center">
              <BrainCircuit className="w-6 h-6 mb-2 text-purple-400" />
              <span className="text-sm font-bold tracking-wider">COMBINE<br /><span className="font-normal text-xs text-purple-200">CONDITIONS</span></span>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center text-center">
              <Activity className="w-6 h-6 mb-2 text-amber-400" />
              <span className="text-sm font-bold tracking-wider">FILTER<br /><span className="font-normal text-xs text-amber-200">RECORDS</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Overview */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Layers className="w-6 h-6 mr-3 text-emerald-500" /> 2️⃣ Types of SQL Operators
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">SQL operators are generally divided into 5 main categories.</p>
          <DataTable
            headers={['Operator Type', 'Purpose']}
            rows={[
              [<span className="text-blue-600 dark:text-blue-400 font-bold">Arithmetic Operators</span>, 'Perform mathematical calculations'],
              [<span className="text-rose-600 dark:text-rose-400 font-bold">Comparison Operators</span>, 'Compare values'],
              [<span className="text-purple-600 dark:text-purple-400 font-bold">Logical Operators</span>, 'Combine multiple conditions'],
              [<span className="text-amber-600 dark:text-amber-400 font-bold">Special Operators</span>, 'Used for special conditions like IN, BETWEEN'],
              [<span className="text-slate-600 dark:text-slate-400 font-bold">Bitwise Operators</span>, 'Perform bit-level operations'],
            ]}
          />
        </div>
      </section>

      {/* Demo Setup */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center border-b border-gray-200 dark:border-gray-800 pb-4">
          <Database className="w-8 h-8 mr-3 text-emerald-500" /> Base Table context setup
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <CodeSnippetBlock
            title="Products Table Schema"
            codeSnippet={`CREATE TABLE Products (\n    ProductID INT,\n    ProductName VARCHAR(50),\n    Price INT,\n    Quantity INT\n);`}
          />
          <CodeSnippetBlock
            title="Insert Sample Data"
            codeSnippet={`INSERT INTO Products VALUES\n(1,'Laptop',50000,2),\n(2,'Phone',20000,3),\n(3,'Tablet',15000,4);`}
          />
        </div>
      </section>

      {/* 3️⃣ Arithmetic Operators */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl overflow-hidden shadow-sm border border-blue-200 dark:border-blue-800/30">
          <div className="p-8 border-b border-blue-200 dark:border-blue-800/30 flex items-center justify-between">
            <h2 className="text-2xl font-black flex items-center text-blue-900 dark:text-blue-400">
              <Calculator className="w-8 h-8 mr-3 bg-blue-500 text-white p-1.5 rounded-lg shadow-md" />
              3️⃣ Arithmetic Operators
            </h2>
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest">Calculations</span>
          </div>
          <div className="p-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <DataTable
                headers={['Operator', 'Meaning']}
                rows={[
                  [<span className="font-mono text-lg text-blue-600 dark:text-blue-400">+</span>, 'Addition'],
                  [<span className="font-mono text-lg text-blue-600 dark:text-blue-400">-</span>, 'Subtraction'],
                  [<span className="font-mono text-lg text-blue-600 dark:text-blue-400">*</span>, 'Multiplication'],
                  [<span className="font-mono text-lg text-blue-600 dark:text-blue-400">/</span>, 'Division'],
                  [<span className="font-mono text-lg text-blue-600 dark:text-blue-400">%</span>, 'Modulus (remainder)'],
                ]}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <CodeSnippetBlock
                title="Example Query"
                codeSnippet={`SELECT ProductName, Price * Quantity AS TotalPrice\nFROM Products;`}
              />
              <DataTable
                headers={['ProductName', 'TotalPrice']}
                rows={[
                  ['Laptop', <span className="text-emerald-600 font-bold dark:text-emerald-400">100000</span>],
                  ['Phone', <span className="text-emerald-600 font-bold dark:text-emerald-400">60000</span>],
                  ['Tablet', <span className="text-emerald-600 font-bold dark:text-emerald-400">60000</span>],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Comparison Operators */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 rounded-3xl overflow-hidden shadow-sm border border-rose-200 dark:border-rose-800/30">
          <div className="p-8 border-b border-rose-200 dark:border-rose-800/30 flex items-center justify-between">
            <h2 className="text-2xl font-black flex items-center text-rose-900 dark:text-rose-400">
              <ToggleLeft className="w-8 h-8 mr-3 bg-rose-500 text-white p-1.5 rounded-lg shadow-md" />
              4️⃣ Comparison Operators
            </h2>
            <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest">Compare</span>
          </div>
          <div className="p-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <DataTable
                headers={['Operator', 'Meaning']}
                rows={[
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">=</span>, 'Equal to'],
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">&gt;</span>, 'Greater than'],
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">&lt;</span>, 'Less than'],
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">&gt;=</span>, 'Greater than/equal'],
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">&lt;=</span>, 'Less than/equal'],
                  [<span className="font-mono font-bold text-rose-600 dark:text-rose-400">&lt;&gt; or !=</span>, 'Not equal'],
                ]}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <p className="text-sm font-bold text-rose-800 dark:text-rose-300">Find products with price greater than 20000.</p>
              <CodeSnippetBlock
                title="Example Query"
                codeSnippet={`SELECT *\nFROM Products\nWHERE Price > 20000;`}
              />
              <DataTable
                headers={['ProductID', 'ProductName', 'Price', 'Quantity']}
                rows={[
                  ['1', 'Laptop', '50000', '2'],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Logical Operators */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 rounded-3xl overflow-hidden shadow-sm border border-purple-200 dark:border-purple-800/30">
          <div className="p-8 border-b border-purple-200 dark:border-purple-800/30 flex items-center justify-between">
            <h2 className="text-2xl font-black flex items-center text-purple-900 dark:text-purple-400">
              <BrainCircuit className="w-8 h-8 mr-3 bg-purple-500 text-white p-1.5 rounded-lg shadow-md" />
              5️⃣ Logical Operators
            </h2>
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest">Logic Flow</span>
          </div>
          <div className="p-8">
            <p className="text-purple-800 dark:text-purple-300 font-medium mb-6">Logical operators combine multiple conditions.</p>
            <div className="mb-8 max-w-2xl">
              <DataTable
                headers={['Operator', 'Meaning']}
                rows={[
                  [<span className="font-mono font-bold text-purple-600 dark:text-purple-400">AND</span>, 'Both conditions must be TRUE'],
                  [<span className="font-mono font-bold text-purple-600 dark:text-purple-400">OR</span>, 'At least one condition must be TRUE'],
                  [<span className="font-mono font-bold text-purple-600 dark:text-purple-400">NOT</span>, 'Reverse condition'],
                ]}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-2xl border border-purple-100 dark:border-purple-800/50">
                <CodeSnippetBlock
                  title="Example (AND)"
                  codeSnippet={`SELECT *\nFROM Products\nWHERE Price > 10000 AND Quantity > 2;`}
                />
                <DataTable
                  headers={['ProductID', 'ProductName', 'Price', 'Quantity']}
                  rows={[
                    ['2', 'Phone', '20000', '3'],
                    ['3', 'Tablet', '15000', '4'],
                  ]}
                />
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-2xl border border-purple-100 dark:border-purple-800/50">
                <CodeSnippetBlock
                  title="Example (OR)"
                  codeSnippet={`SELECT *\nFROM Products\nWHERE Price > 40000 OR Quantity > 3;`}
                />
                <DataTable
                  headers={['ProductID', 'ProductName', 'Price', 'Quantity']}
                  rows={[
                    ['1', 'Laptop', '50000', '2'],
                    ['3', 'Tablet', '15000', '4'],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Special Operators Grid */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
          <Target className="w-7 h-7 mr-3 text-amber-500" /> 6️⃣ Special SQL Operators
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">These operators help with advanced filtering.</p>
            <DataTable
              headers={['Operator', 'Purpose']}
              rows={[
                [<span className="font-mono font-bold text-amber-600 dark:text-amber-400">BETWEEN</span>, 'Select range of values'],
                [<span className="font-mono font-bold text-amber-600 dark:text-amber-400">IN</span>, 'Match multiple values'],
                [<span className="font-mono font-bold text-amber-600 dark:text-amber-400">LIKE</span>, 'Pattern matching'],
                [<span className="font-mono font-bold text-amber-600 dark:text-amber-400">IS NULL</span>, 'Check NULL values'],
                [<span className="font-mono font-bold text-amber-600 dark:text-amber-400">EXISTS</span>, 'Check subquery result'],
              ]}
            />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/30 flex flex-col">
              <h3 className="font-bold text-amber-900 dark:text-amber-400 text-sm tracking-wider uppercase mb-3">Example: BETWEEN</h3>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Products\nWHERE Price BETWEEN 15000 AND 30000;`} />
              <div className="mt-auto">
                <DataTable headers={['ProductName', 'Price']} rows={[['Phone', '20000'], ['Tablet', '15000']]} />
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/30 flex flex-col">
              <h3 className="font-bold text-amber-900 dark:text-amber-400 text-sm tracking-wider uppercase mb-3">Example: IN</h3>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Products\nWHERE ProductName IN ('Laptop','Tablet');`} />
              <div className="mt-auto">
                <DataTable headers={['ProductName', 'Price']} rows={[['Laptop', '50000'], ['Tablet', '15000']]} />
              </div>
            </div>

            <div className="sm:col-span-2 bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/30">
              <h3 className="font-bold text-amber-900 dark:text-amber-400 text-sm tracking-wider uppercase mb-3">Example: LIKE</h3>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Products\nWHERE ProductName LIKE 'P%';`} />
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">This returns products starting with P (ex. 'Phone').</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bitwise & How SQL Processes Orders */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* Bitwise */}
        <div className="bg-gray-100 dark:bg-gray-800/80 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Server className="w-7 h-7 mr-3 text-slate-500" /> 7️⃣ Bitwise Operators
            <span className="ml-3 text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300 px-2 py-1 rounded-full uppercase tracking-widest">Advanced</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 relative z-10">Used mainly in low-level database logic. Rarely used in beginner SQL.</p>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div>
              <DataTable
                headers={['Op', 'Meaning']}
                rows={[
                  [<span className="font-mono font-bold text-slate-600 dark:text-slate-400">&amp;</span>, 'Bitwise AND'],
                  [<span className="font-mono font-bold text-slate-600 dark:text-slate-400">|</span>, 'Bitwise OR'],
                  [<span className="font-mono font-bold text-slate-600 dark:text-slate-400">^</span>, 'Bitwise XOR'],
                ]}
              />
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 h-fit">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Binary Example</p>
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold block mb-2">SELECT 5 & 3;</code>
            </div>
          </div>
        </div>

        {/* Processing Order */}
        <div className="bg-gradient-to-br from-indigo-900 to-emerald-900 p-8 rounded-3xl shadow-xl border border-indigo-700 text-white relative flex flex-col justify-center">
          <h2 className="text-2xl font-black flex items-center text-white mb-6">
            <BrainCircuit className="w-7 h-7 mr-3 text-emerald-400" /> 🧠 How SQL Processes Operators
          </h2>
          <p className="text-indigo-200 font-medium text-sm mb-6">SQL processes conditions in this strict order of operations:</p>

          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center font-black text-blue-300 mb-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">1</div>
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">Arithmetic</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-500" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center font-black text-rose-300 mb-2 shadow-[0_0_15px_rgba(244,63,94,0.5)]">2</div>
              <span className="text-xs font-bold text-rose-200 uppercase tracking-widest">Comparison</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-500" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center font-black text-purple-300 mb-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]">3</div>
              <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Logical</span>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <code className="text-xs sm:text-sm font-mono text-gray-300 block mb-2">
              WHERE <span className="text-blue-400 font-bold">Price + 1000</span> <span className="text-rose-400 font-bold">&gt;</span> 20000 <span className="text-purple-400 font-bold">AND</span> Quantity <span className="text-rose-400 font-bold">&gt;</span> 2;
            </code>
            <p className="text-xs text-gray-400 border-t border-white/10 pt-2 font-medium">SQL calculates <span className="text-blue-400">math</span> first, then <span className="text-rose-400">compares bounds</span>, then handles <span className="text-purple-400">logic routing</span>.</p>
          </div>
        </div>
      </section>

      {/* Real World Scenario */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 flex flex-col md:flex-row items-center gap-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/30 relative">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold flex items-center text-rose-600 dark:text-rose-500">
              <HeartPulseIcon className="w-8 h-8 mr-3" /> 🧩 Real-World Example
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              In your <strong className="text-rose-600 dark:text-rose-400 font-black tracking-tight">LifeLink AI</strong> blood bank system:
            </p>
            <p className="bg-rose-50 dark:bg-rose-900/10 text-rose-800 dark:text-rose-300 p-3 rounded-lg border border-rose-100 dark:border-rose-900/30 text-sm font-bold shadow-sm">
              Find donors with blood group O+ in Chennai.
            </p>
          </div>

          <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Donors\nWHERE BloodGroup = 'O+' AND City = 'Chennai';`} />
            <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              <span className="flex items-center bg-white dark:bg-gray-800 px-3 py-1.5 rounded shadow-sm border border-gray-200 dark:border-gray-700"><span className="text-rose-500 font-black text-sm mr-2">=</span> Comparison</span>
              <span className="flex items-center bg-white dark:bg-gray-800 px-3 py-1.5 rounded shadow-sm border border-gray-200 dark:border-gray-700"><span className="text-purple-500 font-black text-sm mr-2">AND</span> Logical</span>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Wisdom & Warnings Grid */}
      <section className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Developer Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <GraduationCap className="w-8 h-8 mr-3 text-emerald-500" />
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 mt-1">15+ Years Experience</span>
              Professional Tips
            </div>
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-emerald-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Use comparison operators carefully</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-7"><code className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-300">WHERE Salary &gt;= 50000</code> is better than complex logic mapping all bounds.</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" /> Use IN instead of multiple OR</h4>
              <code className="block text-xs font-mono bg-rose-100/50 dark:bg-rose-900/20 text-rose-600/70 dark:text-rose-400/70 p-2 rounded line-through mb-2">WHERE City='Chennai' OR City='Madurai' OR City='Salem'</code>
              <code className="block text-xs font-mono bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 p-2 rounded border border-emerald-200 dark:border-emerald-800/50 shadow-sm font-bold">WHERE City IN ('Chennai','Madurai','Salem')</code>
              <p className="text-[10px] uppercase font-bold text-blue-600 mt-2 tracking-widest text-right">Cleaner and Faster</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-amber-500" /> Use BETWEEN for ranges</h4>
              <code className="block text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded mb-1 text-gray-500">Instead of: <span className="text-amber-600 dark:text-amber-400 text-[10px] block mt-1">WHERE Price &gt;=10000 AND Price &lt;=20000</span></code>
              <code className="block text-xs font-mono bg-amber-100 dark:bg-amber-900/30 p-2 rounded border border-amber-200 dark:border-amber-800/50 shadow-sm font-bold text-amber-700 dark:text-amber-500">Use: WHERE Price BETWEEN 10000 AND 20000</code>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Common Mistakes */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors flex-1">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
              <AlertTriangle className="w-7 h-7 mr-3 text-rose-500" /> ⚠️ Common Mistakes
            </h2>
            <ul className="space-y-4 mb-6 text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Writing multiple OR conditions</li>
              <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Forgetting parentheses in complex conditions</li>
              <li className="flex items-center"><XCircle className="w-5 h-5 mr-3 text-rose-500" /> Using = with NULL</li>
            </ul>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm flex items-center justifies-center relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
              <span className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">Correct: WHERE Bonus IS NULL</span>
            </div>
          </div>

          {/* Teaching recommendation */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-1 relative overflow-hidden shadow-xl shrink-0">
            <div className="bg-gray-900 rounded-[22px] p-6 text-center">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center justify-center">
                <Target className="w-4 h-4 mr-2 text-teal-400" /> Teaching Recommendation
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded">1. Arithmetic</span>
                <span className="text-gray-500 font-black text-[10px] pt-1 border-t border-dashed mt-1.5 w-4"></span>
                <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded">2. Comparison</span>
                <span className="text-gray-500 font-black text-[10px] pt-1 border-t border-dashed mt-1.5 w-4"></span>
                <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded">3. Logical</span>
                <span className="text-gray-500 font-black text-[10px] pt-1 border-t border-dashed mt-1.5 w-4"></span>
                <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded">4. Special</span>
              </div>
              <p className="text-xs text-teal-300 font-medium italic mt-4">Creates a strong foundation.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Practice Exercises Footer */}
      <section className="max-w-5xl mx-auto mb-8">
        <div className="bg-indigo-900 dark:bg-indigo-950 p-8 rounded-3xl shadow-xl relative overflow-hidden border border-indigo-800">
          <div className="absolute font-black text-indigo-800/20 text-9xl -right-4 -bottom-8 pointer-events-none select-none">
            {'{ }'}
          </div>
          <h2 className="text-2xl font-black text-white mb-6 flex items-center">
            <PenTool className="w-7 h-7 mr-3 text-indigo-400" /> 📝 Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start group hover:bg-white/15 transition-colors">
              <span className="bg-indigo-500 text-white text-xs font-black min-w-6 h-6 rounded flex items-center justify-center mr-3 mt-0.5 shadow-md">1</span>
              <p className="text-indigo-100 font-medium text-sm">Find products with price less than 30000.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start group hover:bg-white/15 transition-colors">
              <span className="bg-indigo-500 text-white text-xs font-black min-w-6 h-6 rounded flex items-center justify-center mr-3 mt-0.5 shadow-md">2</span>
              <p className="text-indigo-100 font-medium text-sm">Select products where quantity is greater than 2 AND price greater than 15000.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start group hover:bg-white/15 transition-colors">
              <span className="bg-indigo-500 text-white text-xs font-black min-w-6 h-6 rounded flex items-center justify-center mr-3 mt-0.5 shadow-md">3</span>
              <p className="text-indigo-100 font-medium text-sm">Find products whose name starts with "L".</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-start group hover:bg-white/15 transition-colors">
              <span className="bg-indigo-500 text-white text-xs font-black min-w-6 h-6 rounded flex items-center justify-center mr-3 mt-0.5 shadow-md">4</span>
              <p className="text-indigo-100 font-medium text-sm">Select products where price is between 10000 and 30000.</p>
            </div>
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

export default SqlOperators;