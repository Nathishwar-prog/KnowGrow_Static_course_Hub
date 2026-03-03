import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, PlusCircle, Rows, Key, Shield, UserPlus, Layers, Settings, Type, ArrowDownToLine, RefreshCw, FileSymlink, Network, Laptop, LineChart, Cpu as BrainCircuit, Building, Building2, Map, MapPin, DatabaseBackup, List, GitBranch, ArrowUpRight, ArrowRightLeft, AlignLeft, AlignRight, Maximize, ShoppingCart, HeartPulse as ShieldPlus, BookOpen, Users } from 'lucide-react';


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

const SqlJoins: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <Network className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL JOINS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The core mechanism used to combine rows from two or more tables based on a related column bridging between them.
        </p>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Link2 className="w-6 h-6 mr-3 text-fuchsia-500" /> What is a JOIN?
          </h2>
          <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-100 dark:border-fuchsia-900/30 rounded-xl mb-6">
            <span className="font-bold text-fuchsia-700 dark:text-fuchsia-400 text-lg">JOIN = Connect tables using a common column.</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">In real databases, data is split into specialized tables to maintain absolute structural integrity and avoid redundant data duplication.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-6 text-fuchsia-100 dark:text-gray-700/30"><GitBranch className="w-40 h-40" /></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <HelpCircle className="w-6 h-6 mr-3 text-blue-500" /> Why Do We Need JOIN?
          </h2>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
              <Target className="w-5 h-5 text-blue-500 mr-3 shrink-0" /> <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">Customers table &rarr; stores customer info</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
              <Target className="w-5 h-5 text-emerald-500 mr-3 shrink-0" /> <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">Orders table &rarr; stores order details</span>
            </div>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wide">JOIN helps us safely bridge and bring these specialized sets back together into a single unified report dynamically.</p>
          </div>
        </div>
      </section>

      {/* Setup DB Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-800 relative">
          <h2 className="text-3xl font-black flex items-center mb-8 border-b border-gray-800 pb-4"><Database className="text-sky-400 w-8 h-8 mr-3" /> Setup Example Architecture (Step-by-Step)</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-sky-400 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2" /> 1. Customers Table (Primary)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Customers (\n    CustomerID INT PRIMARY KEY,\n    CustomerName VARCHAR(50),\n    City VARCHAR(50)\n);\n\nINSERT INTO Customers VALUES (1, 'Karthick', 'Chennai');\nINSERT INTO Customers VALUES (2, 'Anjali', 'Madurai');\nINSERT INTO Customers VALUES (3, 'Rahul', 'Bangalore');\nINSERT INTO Customers VALUES (4, 'Sneha', 'Chennai');`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2" /> 2. Orders Table (Secondary)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (\n    OrderID INT PRIMARY KEY,\n    CustomerID INT,\n    Amount INT\n);\n\nINSERT INTO Orders VALUES (101, 1, 5000);\nINSERT INTO Orders VALUES (102, 3, 7000);\nINSERT INTO Orders VALUES (103, 1, 2000);`} />
            </div>
          </div>

          {/* Matrix Result Blocks */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
              <p className="text-xs uppercase font-bold text-sky-500 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1" /> Current Customers Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-400 border-b border-gray-800 bg-gray-800/50">
                  <tr><th className="py-2 px-2">CustomerID</th><th>CustomerName</th><th>City</th></tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800"><td className="py-2 px-2 text-sky-400">1</td><td>Karthick</td><td>Chennai</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-2 px-2 text-sky-400">2</td><td>Anjali</td><td>Madurai</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-2 px-2 text-sky-400">3</td><td>Rahul</td><td>Bangalore</td></tr>
                  <tr><td className="py-2 px-2 text-sky-400">4</td><td>Sneha</td><td>Chennai</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-gray-700">
              <p className="text-xs uppercase font-bold text-emerald-500 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1" /> Current Orders Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-400 border-b border-gray-800 bg-gray-800/50">
                  <tr><th className="py-2 px-2">OrderID</th><th>CustomerID</th><th>Amount</th></tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800"><td className="py-2 px-2">101</td><td className="text-sky-400 font-bold">1</td><td className="text-emerald-400">5000</td></tr>
                  <tr className="border-b border-gray-800"><td className="py-2 px-2">102</td><td className="text-sky-400 font-bold">3</td><td className="text-emerald-400">7000</td></tr>
                  <tr><td className="py-2 px-2">103</td><td className="text-sky-400 font-bold">1</td><td className="text-emerald-400">2000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Join Types Map */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Layers className="w-8 h-8 mr-3 text-rose-500" /> The 4 Core Types of SQL JOINS
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* INNER */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-blue-500 shadow-sm transition-all hover:shadow-md hover:border-blue-400">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-xl text-blue-600 dark:text-blue-400 flex items-center"><ArrowRightLeft className="w-5 h-5 mr-2" /> 1. INNER JOIN</h3>
              <span className="text-xs font-bold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded">Default Type</span>
            </div>
            <p className="font-medium text-gray-600 dark:text-gray-400 text-sm mb-4 h-10">Returns <strong className="text-gray-900 dark:text-white">only explicitly matching rows</strong> intersected precisely between both tables.</p>
            <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.OrderID, o.Amount\nFROM Customers c\nINNER JOIN Orders o\nON c.CustomerID = o.CustomerID;`} />
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10 p-2 rounded">✔ Output: Only returns customers who actively have orders.</p>
          </div>

          {/* LEFT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-fuchsia-500 shadow-sm transition-all hover:shadow-md hover:border-fuchsia-400">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-xl text-fuchsia-600 dark:text-fuchsia-400 flex items-center"><AlignLeft className="w-5 h-5 mr-2" /> 2. LEFT JOIN</h3>
              <span className="text-xs font-bold bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 px-2 py-1 rounded">Outer Type</span>
            </div>
            <p className="font-medium text-gray-600 dark:text-gray-400 text-sm mb-4 h-10">Returns <strong className="text-gray-900 dark:text-white">all absolute rows from the left table</strong> + any matching intersected rows from the right table.</p>
            <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.OrderID\nFROM Customers c\nLEFT JOIN Orders o\nON c.CustomerID = o.CustomerID;`} />
            <p className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-50 dark:bg-fuchsia-900/10 p-2 rounded">✔ Output: Shows ALL customers listed, even if they have zero orders mapped.</p>
          </div>

          {/* RIGHT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-emerald-500 shadow-sm transition-all hover:shadow-md hover:border-emerald-400">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-xl text-emerald-600 dark:text-emerald-400 flex items-center"><AlignRight className="w-5 h-5 mr-2" /> 3. RIGHT JOIN</h3>
              <span className="text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded">Outer Type</span>
            </div>
            <p className="font-medium text-gray-600 dark:text-gray-400 text-sm mb-4 h-10">Returns <strong className="text-gray-900 dark:text-white">all absolute rows from the right table</strong> + any matching intersected logic from the left.</p>
            <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.OrderID\nFROM Customers c\nRIGHT JOIN Orders o\nON c.CustomerID = o.CustomerID;`} />
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 p-2 rounded">✔ Output: Shows ALL orders guaranteed, even if the attached customer ID is suddenly missing.</p>
          </div>

          {/* FULL */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-orange-500 shadow-sm transition-all hover:shadow-md hover:border-orange-400 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-xl text-orange-600 dark:text-orange-400 flex items-center"><Maximize className="w-5 h-5 mr-2" /> 4. FULL JOIN</h3>
              <span className="text-xs font-bold bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded">Outer Type</span>
            </div>
            <p className="font-medium text-gray-600 dark:text-gray-400 text-sm mb-4 h-10">Absolute massive dump returning <strong className="text-gray-900 dark:text-white">all rows natively from both tables</strong> mapping where possible.</p>
            <CodeSnippetBlock codeSnippet={`SELECT c.CustomerName, o.OrderID\nFROM Customers c\nFULL JOIN Orders o\nON c.CustomerID = o.CustomerID;`} />
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-2 bg-gray-50 dark:bg-gray-900 p-2 rounded italic">📌 Note: Not supported directly in standard MySQL out-of-the-box — utilize the UNION structural method instead.</p>
          </div>

        </div>
      </section>

      {/* Engine Flow Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between border border-indigo-800 gap-8">
          <div className="lg:w-1/3 text-white">
            <h2 className="text-2xl font-black flex items-center mb-4"><Zap className="w-6 h-6 mr-3 text-yellow-400" /> Database Execution Flow</h2>
            <p className="text-indigo-300 font-medium text-sm">This is the precise order of operations that standard DB compilers calculate under the hood when mathematically executing a JOIN.</p>
          </div>
          <div className="lg:w-2/3 w-full flex flex-col sm:flex-row shadow-lg rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <div className="p-3 text-center border-b sm:border-b-0 sm:border-r border-white/10 flex-1 hover:bg-white/10 transition-colors">
              <span className="block font-black text-indigo-400 text-xl mb-1 mt-1">1</span><span className="text-[10px] uppercase font-bold text-white tracking-widest">FROM 1st table</span>
            </div>
            <div className="p-3 text-center border-b sm:border-b-0 sm:border-r border-white/10 flex-1 hover:bg-white/10 transition-colors">
              <span className="block font-black text-indigo-400 text-xl mb-1 mt-1">2</span><span className="text-[10px] uppercase font-bold text-white tracking-widest">JOIN 2nd table</span>
            </div>
            <div className="p-3 text-center border-b sm:border-b-0 sm:border-r border-white/10 flex-1 hover:bg-emerald-500/20 transition-colors">
              <span className="block font-black text-emerald-400 text-xl mb-1 mt-1">3</span><span className="text-[10px] uppercase font-bold text-white tracking-widest">Match via ON rules</span>
            </div>
            <div className="p-3 text-center border-b sm:border-b-0 sm:border-r border-white/10 flex-1 hover:bg-white/10 transition-colors">
              <span className="block font-black text-indigo-400 text-xl mb-1 mt-1">4</span><span className="text-[10px] uppercase font-bold text-white tracking-widest">Apply WHERE limits</span>
            </div>
            <div className="p-3 text-center flex-1 hover:bg-white/10 transition-colors">
              <span className="block font-black text-yellow-400 text-xl mb-1 mt-1">5</span><span className="text-[10px] uppercase font-bold text-white tracking-widest">Return Result Array</span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Usage & Performance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Building2 className="w-6 h-6 mr-3 text-sky-500" /> Enterprise Scale Reality
          </h2>
          <div className="space-y-4 font-medium text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center"><ShoppingCart className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">E-commerce:</strong> (Customers + Orders + Products)</div>
            <div className="flex items-center"><Banknote className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Banking:</strong> (Accounts + Transactions)</div>
            <div className="flex items-center"><ShieldPlus className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Hospitality:</strong> (Patients + Appointments)</div>
            <div className="flex items-center"><BookOpen className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Education:</strong> (Students + Marks)</div>
            <div className="flex items-center"><Users className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">HR Arrays:</strong> (Employees + Departments)</div>
          </div>
          <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-xl">
            <p className="font-bold text-sky-800 dark:text-sky-300 text-sm text-center">Real enterprise production environments routinely execute complex architectures combining 3–5 native table JOINs simultaneously.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-900/10 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30">
          <h2 className="text-2xl font-bold flex items-center text-red-900 dark:text-red-400 mb-6">
            <Zap className="w-6 h-6 mr-3 text-red-500" /> Performance Constraints
          </h2>
          <ul className="space-y-3 font-medium text-red-800 dark:text-red-300 text-sm mb-6 ml-2">
            <li className="flex items-start"><span className="mr-2">&bull;</span> Always explicitly index joined columns.</li>
            <li className="flex items-start"><span className="mr-2">&bull;</span> Enforce strict explicit proper foreign keys.</li>
            <li className="flex items-start"><span className="mr-2">&bull;</span> Never blindly execute <code className="bg-red-200 dark:bg-red-800/50 px-1 rounded text-red-900 dark:text-red-200 mx-1 border border-red-300 dark:border-red-700">SELECT *</code> across massive joins.</li>
            <li className="flex items-start"><span className="mr-2">&bull;</span> Filter data loops massively early using WHERE hooks.</li>
          </ul>
          <CodeSnippetBlock codeSnippet={`CREATE INDEX idx_customerid\nON Orders(CustomerID);`} />
        </div>
      </section>

      {/* Architecture Insight Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> 15+ Years Architecture Mentality
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-10 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Real-World Execution Patterns</p>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* 1 */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mr-3 shadow-sm">1</div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Understand Schema Relationships First</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">Before writing a single JOIN string, firmly establish:</p>
              <ul className="text-sm font-mono font-bold text-emerald-700 dark:text-emerald-400 space-y-1 ml-4 list-disc">
                <li>What explicitly defines the primary key?</li>
                <li>Where exactly is the mapped foreign key limit?</li>
                <li>Is this strictly One-to-Many logic or Many-to-Many?</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mr-3 shadow-sm">2</div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Demand Table Aliases Instantly</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">It keeps matrices radically cleaner and distinctly professional.</p>
              <code className="block bg-white dark:bg-black p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-mono font-bold text-gray-800 dark:text-gray-300">
                FROM Customers <span className="text-emerald-500">c</span><br />
                JOIN Orders <span className="text-emerald-500">o</span>
              </code>
            </div>

            {/* 3 */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mr-3 shadow-sm">3</div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Practice Deep Multi-Table JOINs</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">Train your visual thinking on nested real-world complex architectures:</p>
              <div className="font-mono text-xs font-bold bg-white dark:bg-black p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sky-600 dark:text-sky-400 leading-relaxed">
                Customers<br />
                <span className="text-gray-400 dark:text-gray-600 pl-2">&rarr;</span> Orders<br />
                <span className="text-gray-400 dark:text-gray-600 pl-4">&rarr;</span> OrderItems<br />
                <span className="text-gray-400 dark:text-gray-600 pl-6">&rarr;</span> Products
              </div>
            </div>

            {/* 4 */}
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 opacity-10"><Terminal className="w-32 h-32 text-gray-900" /></div>
              <div className="flex items-center mb-4 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mr-3 shadow-sm">4</div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Learn Execution Plans Manually</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3 relative z-10">Stop guessing. Explicitly understand exactly how your DB Compiler processes your JOIN structurally.</p>
              <code className="inline-block bg-white dark:bg-black p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-mono font-bold text-purple-600 dark:text-purple-400 relative z-10">
                EXPLAIN SELECT ...
              </code>
            </div>

          </div>
        </div>
      </section>

      {/* Bootcamp Protocol */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-fuchsia-600 to-purple-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-fuchsia-300" /> Infrastructure Training Protocol
            </h2>
            <div className="grid md:grid-cols-2 gap-4 gap-y-6">
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold mr-3 shadow border border-fuchsia-400">1</span> <span className="text-fuchsia-50 font-medium text-lg">Directly Join Employees and Departments limit tables.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold mr-3 shadow border border-fuchsia-400">2</span> <span className="text-fuchsia-50 font-medium text-lg">Report exclusively customers holding &gt; 1 explicit order limit.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold mr-3 shadow border border-fuchsia-400">3</span> <span className="text-fuchsia-50 font-medium text-lg">Deep join 3 distinct specific structural tables together.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold mr-3 shadow border border-fuchsia-400">4</span> <span className="text-fuchsia-50 font-medium text-lg">Enforce a deep JOIN logically alongside a GROUP BY limit array.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold mr-3 shadow border border-fuchsia-400">5</span> <span className="text-fuchsia-50 font-medium text-lg">Find isolated unmatched rows intentionally using LEFT JOIN syntax.</span></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlJoins;