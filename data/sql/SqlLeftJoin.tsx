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

const SqlLeftJoin: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <AlignLeft className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL LEFT JOIN
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The structural command used to return all records from the left table, and the matched records from the right table.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Link2 className="w-6 h-6 mr-3 text-fuchsia-500" /> What is LEFT JOIN?
          </h2>
          <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-900/10 border border-fuchsia-100 dark:border-fuchsia-900/30 rounded-xl mb-6">
            <span className="font-bold text-fuchsia-800 dark:text-fuchsia-400 text-lg">LEFT JOIN = Show everything from the left table, even if no match exists.</span>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Returns all rows absolutely from the primary left table.</div>
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" /> Returns matching rows mapping to the right table.</div>
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-rose-500 shrink-0 mt-0.5" /> <span className="font-bold text-gray-800 dark:text-gray-200">If no match</span> &rarr; DB Engine fills the gaps with NULL values.</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/20"><Network className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <GitBranch className="w-6 h-6 mr-3 text-fuchsia-400" /> Visual Diagram Architecture
          </h2>
          <p className="text-indigo-200 mb-6 font-medium text-sm relative z-10">Imagine two circles mapped across a Venn Diagram grid constraint.</p>
          <div className="relative z-10 space-y-4 text-sm font-bold text-indigo-50">
            <div className="flex items-center p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm">
              <span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm"></span> Left-only absolute rows (Included)
            </div>
            <div className="flex items-center p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm">
              <span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm"></span> Intersecting matching rows (Included)
            </div>
            <div className="flex items-center p-3 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm shadow-sm text-gray-400">
              <span className="w-3 h-3 rounded-full bg-gray-600 mr-4"></span> Right-only isolated rows (Excluded entirely)
            </div>
          </div>
        </div>
      </section>

      {/* Setup DB Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"><Database className="text-sky-500 w-8 h-8 mr-3" /> Architecture Setup (Step-by-Step)</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-fuchsia-500" /> 1. Customers (Left Table)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Customers (\n    CustomerID INT PRIMARY KEY,\n    CustomerName VARCHAR(50),\n    City VARCHAR(50)\n);\n\nINSERT INTO Customers VALUES (1, 'Karthick', 'Chennai');\nINSERT INTO Customers VALUES (2, 'Anjali', 'Madurai');\nINSERT INTO Customers VALUES (3, 'Rahul', 'Bangalore');\nINSERT INTO Customers VALUES (4, 'Sneha', 'Chennai');`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-emerald-500" /> 2. Orders (Right Table)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (\n    OrderID INT PRIMARY KEY,\n    CustomerID INT,\n    Amount INT\n);\n\nINSERT INTO Orders VALUES (101, 1, 5000);\nINSERT INTO Orders VALUES (102, 3, 7000);\nINSERT INTO Orders VALUES (103, 1, 2000);`} />
            </div>
          </div>

          {/* Matrix Result Blocks */}
          <div className="grid lg:grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-inner">
              <p className="text-xs uppercase font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Left Table Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-2 px-2">CustomerID</th><th>CustomerName</th><th>City</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-fuchsia-500">1</td><td>Karthick</td><td>Chennai</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-fuchsia-500">2</td><td>Anjali</td><td>Madurai</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-fuchsia-500">3</td><td>Rahul</td><td>Bangalore</td></tr>
                  <tr><td className="py-2 px-2 font-bold text-fuchsia-500">4</td><td>Sneha</td><td>Chennai</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-inner">
              <p className="text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Right Table Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-2 px-2">OrderID</th><th>CustomerID</th><th>Amount</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2">101</td><td className="text-emerald-500 font-bold">1</td><td className="text-blue-500">5000</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2">102</td><td className="text-emerald-500 font-bold">3</td><td className="text-blue-500">7000</td></tr>
                  <tr><td className="py-2 px-2">103</td><td className="text-emerald-500 font-bold">1</td><td className="text-blue-500">2000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Left Join Output */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-indigo-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center"><Zap className="w-8 h-8 mr-3 text-amber-400" /> LEFT JOIN Query In Action</h2>
              <p className="text-indigo-200 mb-6 font-medium text-lg border-b border-indigo-800/50 pb-6">Target goal: Show <strong className="text-white">All Customers</strong> explicitly alongside any mapped orders securely.</p>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-2xl rounded-full"></div>
                <div className="relative z-10 shadow-2xl drop-shadow-2xl">
                  <CodeSnippetBlock
                    codeSnippet={`SELECT c.CustomerName, o.OrderID, o.Amount\nFROM Customers c\nLEFT JOIN Orders o\nON c.CustomerID = o.CustomerID;`}
                  />
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-2xl border border-indigo-500/30 overflow-hidden shadow-xl">
              <div className="bg-indigo-950/50 p-4 border-b border-indigo-500/30">
                <p className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center"><Terminal className="w-4 h-4 mr-2" /> Rendered Output Stream</p>
              </div>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-800 bg-gray-900/50">
                  <tr><th className="py-3 px-4">CustomerName</th><th className="px-4">OrderID</th><th className="px-4">Amount</th></tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Karthick</td><td className="px-4 text-emerald-400">101</td><td className="px-4 text-emerald-400">5000</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Karthick</td><td className="px-4 text-emerald-400">103</td><td className="px-4 text-emerald-400">2000</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 bg-rose-500/5 hover:bg-rose-500/10 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Anjali</td><td className="px-4 font-black text-rose-500">NULL</td><td className="px-4 font-black text-rose-500">NULL</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Rahul</td><td className="px-4 text-emerald-400">102</td><td className="px-4 text-emerald-400">7000</td>
                  </tr>
                  <tr className="bg-rose-500/5 hover:bg-rose-500/10 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Sneha</td><td className="px-4 font-black text-rose-500">NULL</td><td className="px-4 font-black text-rose-500">NULL</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 bg-indigo-950/30 border-t border-indigo-500/20">
                <span className="text-xs font-bold text-indigo-300">Engine Note: Anjali & Sneha are maintained firmly in result structure, buffered gracefully by NULL hooks as requested by LEFT JOIN logic constraints.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE Trap Logic section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">

        {/* Important Map Left */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-900/10 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30 flex-1">
            <h3 className="text-2xl font-black flex items-center text-red-900 dark:text-red-400 mb-6">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> The WHERE Trap
            </h3>
            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 bg-white/50 dark:bg-black/50 p-3 rounded-lg border border-red-100 dark:border-red-800/30">
              If you accidentally append conditions in the outer WHERE block incorrectly, <strong className="text-red-600 dark:text-red-400">your LEFT JOIN explicitly breaks and morphs destructively into a standard INNER JOIN.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Do not accidentally strip out and drop NULL engine rows when structurally trying to write filter operations across secondary table attributes mapping to the right.</p>
          </div>
        </div>

        {/* Trap Code Blocks Right */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col gap-6">

          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3"><span className="text-xs font-black uppercase text-red-500 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">❌ Wrong Way</span></div>
            <p className="font-bold text-gray-900 dark:text-gray-200 mb-4 text-sm w-3/4">Adding secondary requirements into WHERE blindly kills the entire outer map intent.</p>
            <code className="block bg-white dark:bg-black p-4 text-sm font-mono border border-gray-200 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-400">
              SELECT c.CustomerName, o.Amount<br />
              FROM Customers c<br />
              LEFT JOIN Orders o<br />
              ON c.CustomerID = o.CustomerID<br />
              <span className="text-red-600 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 px-1 rounded block mt-1">WHERE o.Amount &gt; 4000;</span>
            </code>
            <p className="text-xs font-bold text-red-500 mt-3 flex items-center"><Target className="w-3 h-3 mr-1" /> This physically deletes all target NULL matrix rows completely.</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3"><span className="text-xs font-black uppercase text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">✅ Correct Way</span></div>
            <p className="font-bold text-gray-900 dark:text-gray-200 mb-4 text-sm w-3/4">Merge the filtering limit natively directly alongside the ON condition array bounds instead.</p>
            <code className="block bg-white dark:bg-black p-4 text-sm font-mono border border-gray-200 dark:border-gray-800 rounded-xl text-gray-600 dark:text-gray-400">
              SELECT c.CustomerName, o.Amount<br />
              FROM Customers c<br />
              LEFT JOIN Orders o<br />
              ON c.CustomerID = o.CustomerID<br />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1 rounded block mt-1">AND o.Amount &gt; 4000;</span>
            </code>
          </div>

        </div>
      </section>

      {/* Production Architect Advice */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col gap-6">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-sky-500 transition-colors">
            <h2 className="text-xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Building2 className="w-6 h-6 mr-3 text-sky-500" /> Common Reporting Analytics
            </h2>
            <div className="space-y-4 font-medium text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-sky-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Customers:</strong> Show all alongside orders</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-sky-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Employees:</strong> Detail all within departments</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-sky-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Students:</strong> Show roster with or without marks</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-sky-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Products:</strong> Show all inventory tracking sales</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-sky-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Users:</strong> List all registered tracking activity nulls</div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-md border border-gray-800">
            <h2 className="text-xl font-black flex items-center mb-6 border-b border-gray-700 pb-4">
              <Zap className="w-6 h-6 mr-3 text-amber-400" /> Query Speed Tuning
            </h2>
            <div className="space-y-3 font-medium text-gray-300 text-sm mb-6">
              <div className="flex items-center"><Target className="w-3 h-3 mr-3 text-emerald-400" /> Explicitly index target joined columns.</div>
              <div className="flex items-center"><Target className="w-3 h-3 mr-3 text-emerald-400" /> Avoid generating massive `SELECT *` loops.</div>
              <div className="flex items-center"><Target className="w-3 h-3 mr-3 text-emerald-400" /> Push map filters strictly earlier onto ON arrays.</div>
              <div className="flex items-center"><Target className="w-3 h-3 mr-3 text-emerald-400" /> Structure reliable mapping via Foreign Keys.</div>
            </div>
            <CodeSnippetBlock codeSnippet={`CREATE INDEX idx_customerid\nON Orders(CustomerID);`} />
          </div>

        </div>

        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-5 text-emerald-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-500" /> 15+ Years Mastery Insight
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Real-World Execution Patterns</p>

          <div className="space-y-8 relative z-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 text-xl border border-emerald-200 dark:border-emerald-800 shrink-0 shadow-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Identify Primary Structural Need First</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Architecturally ask yourself: <strong className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-1 rounded">"Do I fundamentally need ALL left absolute recorded items here?"</strong> If the explicit answer functionally remains YES &rarr; ALWAYS default trigger standard LEFT JOIN string commands.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center font-black text-orange-600 dark:text-orange-400 text-xl border border-orange-200 dark:border-orange-800 shrink-0 shadow-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Utilizing IS NULL to Find Ghosts</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">This architecture strategy is a legendary DB Admin engineering filter test commonly asked exactly during global Senior Developer coding interviews to find mapping structural holes.</p>

                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-4 bg-gray-50 dark:bg-gray-900/50 relative">
                  <span className="text-xs uppercase font-black text-gray-500 block mb-2 tracking-widest border-b border-gray-200 dark:border-gray-800 pb-2">Finding Customers Explicitly Holding ZERO Orders:</span>
                  <code className="text-xs font-mono font-bold text-gray-800 dark:text-gray-300 block leading-relaxed">
                    SELECT c.CustomerName<br />
                    FROM Customers c<br />
                    LEFT JOIN Orders o ON c.CustomerID = o.CustomerID<br />
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 rounded block mt-1">WHERE o.CustomerID IS NULL;</span>
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lab Challenges */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-fuchsia-600 to-indigo-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 w-full lg:w-3/4">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-fuchsia-300" /> Infrastructure Training Protocol
            </h2>
            <ul className="space-y-4 font-semibold text-lg text-fuchsia-50">
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm border border-fuchsia-200"></span> Find targeted customers explicitly holding identical zero orders.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm border border-fuchsia-200"></span> Show exact employee limits mapped specifically with or without structural departments.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm border border-fuchsia-200"></span> Combine native LEFT JOINs alongside advanced GROUP BY structural boundaries.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm border border-fuchsia-200"></span> Filter exact specific unmatched limit records exclusively.</li>
              <li className="flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-400 mr-4 shadow-sm border border-fuchsia-200"></span> Convert identical LEFT JOINs physically back to INNER JOIN strings and evaluate identical compare results.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlLeftJoin;