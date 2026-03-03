import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Calculator, BarChart3, Filter, Users, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Target, Zap, LayoutList, Layers, Briefcase, ShoppingCart, Banknote, Hospital, ArrowRight, Table2 } from 'lucide-react';

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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-emerald-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlCount: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'where' | 'distinct' | 'group' | 'having'>('all');

  // Interactive Counting Lab Configurations
  const getLabContent = () => {
    switch (activeTab) {
      case 'all':
        return {
          title: "COUNT(*) vs COUNT(column)",
          icon: <Calculator className="w-5 h-5 mr-2 text-emerald-500" />,
          desc: "COUNT(*) counts every row in the table. COUNT(column_name) counts only the non-NULL rows for that specific column.",
          query: "SELECT \n  COUNT(*) AS TotalEmployees,\n  COUNT(salary) AS SalaryCount\nFROM Employees;",
          results: (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-900/20 border border-emerald-900/30 p-4 rounded-xl text-center">
                <p className="text-emerald-500 font-bold mb-1 text-xs uppercase tracking-widest">TotalEmployees</p>
                <p className="text-3xl font-black text-white">5</p>
                <p className="text-emerald-400/60 text-xs mt-2">Counts every row (including Ravi)</p>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-900/30 p-4 rounded-xl text-center">
                <p className="text-emerald-500 font-bold mb-1 text-xs uppercase tracking-widest">SalaryCount</p>
                <p className="text-3xl font-black text-white">4</p>
                <p className="text-amber-400/80 text-xs mt-2 font-bold">Ravi's NULL salary is ignored!</p>
              </div>
            </div>
          )
        };
      case 'where':
        return {
          title: "COUNT with WHERE",
          icon: <Filter className="w-5 h-5 mr-2 text-blue-500" />,
          desc: "Counts the number of rows after filtering the dataset.",
          query: "SELECT COUNT(*) AS IT_Count\nFROM Employees\nWHERE department = 'IT';",
          results: (
            <div className="bg-blue-900/20 border border-blue-900/30 p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-blue-500 font-bold mb-1 text-xs uppercase tracking-widest">IT_Count</p>
                <p className="text-blue-200 text-xs">Arjun, Ravi, Karthik</p>
              </div>
              <p className="text-4xl font-black text-white px-6">3</p>
            </div>
          )
        };
      case 'distinct':
        return {
          title: "COUNT with DISTINCT",
          icon: <Target className="w-5 h-5 mr-2 text-purple-500" />,
          desc: "Counts only the unique, non-duplicated values within a column.",
          query: "SELECT COUNT(DISTINCT department) AS UniqueDepartments\nFROM Employees;",
          results: (
            <div className="bg-purple-900/20 border border-purple-900/30 p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-purple-500 font-bold mb-1 text-xs uppercase tracking-widest">UniqueDepartments</p>
                <p className="text-purple-200 text-xs">IT and HR</p>
              </div>
              <p className="text-4xl font-black text-white px-6">2</p>
            </div>
          )
        };
      case 'group':
        return {
          title: "COUNT with GROUP BY",
          icon: <Layers className="w-5 h-5 mr-2 text-amber-500" />,
          desc: "Creates segmented reports, counting the rows belonging to each grouping bucket.",
          query: "SELECT department, COUNT(*) AS TotalEmployees\nFROM Employees\nGROUP BY department;",
          results: (
            <div className="bg-black/40 border border-gray-800 rounded-xl overflow-hidden font-mono text-sm text-gray-300">
              <div className="grid grid-cols-2 bg-gray-900 text-gray-500 font-bold px-4 py-2 border-b border-gray-800">
                <div>department</div>
                <div className="text-right">TotalEmployees</div>
              </div>
              <div className="grid grid-cols-2 px-4 py-3 border-b border-gray-800 hover:bg-gray-800/50">
                <div className="text-emerald-400">IT</div>
                <div className="text-right font-bold text-white">3</div>
              </div>
              <div className="grid grid-cols-2 px-4 py-3 hover:bg-gray-800/50">
                <div className="text-blue-400">HR</div>
                <div className="text-right font-bold text-white">2</div>
              </div>
            </div>
          )
        };
      case 'having':
        return {
          title: "COUNT with HAVING",
          icon: <BarChart3 className="w-5 h-5 mr-2 text-rose-500" />,
          desc: "Filters groups after they are grouped and counted (WHEREAS ‘WHERE’ filters rows before counting).",
          query: "SELECT department, COUNT(*) AS TotalEmployees\nFROM Employees\nGROUP BY department\nHAVING COUNT(*) %gt; 2;",
          results: (
            <div className="bg-black/40 border border-gray-800 rounded-xl overflow-hidden font-mono text-sm text-gray-300">
              <div className="grid grid-cols-2 bg-gray-900 text-gray-500 font-bold px-4 py-2 border-b border-gray-800">
                <div>department</div>
                <div className="text-right">TotalEmployees</div>
              </div>
              <div className="grid grid-cols-2 px-4 py-3 bg-emerald-900/10 border-b border-emerald-900/30">
                <div className="text-emerald-400">IT</div>
                <div className="text-right font-bold text-white">3</div>
              </div>
              <div className="bg-rose-900/10 px-4 py-2 text-center text-rose-500 text-xs font-bold border-t border-rose-900/30 line-through opacity-70">
                HR (Total: 2) dropped by HAVING clause.
              </div>
            </div>
          )
        };
    }
  };

  const lab = getLabContent();
  const rawQueryCode = lab.query.replace(/%gt;/g, '>');

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL COUNT()
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The most utilized aggregate function in SQL. It returns the exact numerical count of records inside a table or column bucket.
        </p>
      </header>

      {/* Foundational Knowledge block */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800 text-white relative overflow-hidden flex-grow">
            <div className="absolute -right-4 -bottom-4 opacity-5"><Target className="w-32 h-32" /></div>
            <h3 className="font-bold text-xl mb-4 relative z-10 flex items-center"><Terminal className="w-5 h-5 mr-3 text-emerald-400" /> Basic Syntaxes</h3>

            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-2">Count All Rows</p>
            <code className="block bg-black p-3 rounded-lg border border-gray-800 font-mono text-sm text-gray-300 mb-4">
              SELECT <span className="text-emerald-400">COUNT(*)</span><br />FROM table_name;
            </code>

            <p className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-2">Count Column Only</p>
            <code className="block bg-black p-3 rounded-lg border border-gray-800 font-mono text-sm text-gray-300 mb-2">
              SELECT <span className="text-emerald-400">COUNT(col_name)</span><br />FROM table_name;
            </code>
            <div className="bg-amber-900/20 text-amber-500 text-xs p-2 rounded border border-amber-900/40 text-center font-bold">
              Skips NULL values silently!
            </div>
          </div>
        </div>

        {/* The Dummy Table Reference */}
        <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Table2 className="w-6 h-6 mr-3 text-emerald-500" /> The Employees Table
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-emerald-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-emerald-800 dark:text-emerald-400 font-bold">
                <tr>
                  <th className="px-6 py-4">emp_id</th>
                  <th className="px-6 py-4">name</th>
                  <th className="px-6 py-4">department</th>
                  <th className="px-6 py-4">salary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-black font-mono text-gray-600 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-3">1</td><td className="px-6 py-3 font-sans font-bold">Arjun</td><td className="px-6 py-3 text-blue-500 font-bold">IT</td><td className="px-6 py-3 text-emerald-500">50000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-3">2</td><td className="px-6 py-3 font-sans font-bold">Meena</td><td className="px-6 py-3 text-purple-500 font-bold">HR</td><td className="px-6 py-3 text-emerald-500">40000</td>
                </tr>
                <tr className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-l-amber-500">
                  <td className="px-6 py-3">3</td><td className="px-6 py-3 font-sans font-bold">Ravi</td><td className="px-6 py-3 text-blue-500 font-bold">IT</td><td className="px-6 py-3 text-rose-500 italic font-bold tracking-widest bg-rose-100 dark:bg-rose-900/40 inline-flex my-2 px-2 rounded">NULL</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-3">4</td><td className="px-6 py-3 font-sans font-bold">Priya</td><td className="px-6 py-3 text-purple-500 font-bold">HR</td><td className="px-6 py-3 text-emerald-500">45000</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 block sm:table-row">
                  <td className="px-6 py-3">5</td><td className="px-6 py-3 font-sans font-bold">Karthik</td><td className="px-6 py-3 text-blue-500 font-bold">IT</td><td className="px-6 py-3 text-emerald-500">70000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4 font-bold tracking-wide uppercase text-center"><AlertTriangle className="w-4 h-4 inline text-amber-500 mr-1 pb-0.5" /> Note: Ravi is newly hired and does not have a registered salary yet.</p>
        </div>
      </section>

      {/* Aggregate Engine Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          🧪 Interactive Aggregation Lab
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'all', label: 'NULL Behaviors', icon: <Target className="w-4 h-4 mr-2" /> },
              { id: 'where', label: 'With WHERE', icon: <Filter className="w-4 h-4 mr-2" /> },
              { id: 'distinct', label: 'With DISTINCT', icon: <CheckCircle className="w-4 h-4 mr-2" /> },
              { id: 'group', label: 'With GROUP BY', icon: <Layers className="w-4 h-4 mr-2" /> },
              { id: 'having', label: 'With HAVING', icon: <BarChart3 className="w-4 h-4 mr-2" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-shrink-0 px-6 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activeTab === tab.id ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content Lab */}
          <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-10">
            {/* Left Controls & Code */}
            <div className="flex flex-col animate-fade-in relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                  {lab.icon} {lab.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {lab.desc}
                </p>
              </div>
              <div className="flex-grow mt-auto shadow-sm">
                <CodeSnippetBlock codeSnippet={rawQueryCode} title="SQL Query" />
              </div>
            </div>

            {/* Right Live Simulation Console */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl flex flex-col animate-fade-in relative">
              <div className="bg-black/50 p-4 border-b border-gray-800 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold flex items-center">
                  <Terminal className="w-4 h-4 mr-2" /> Computed Result List
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center">
                {lab.results}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extreme Production Tips & Interview Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl text-emerald-500"></div>

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-emerald-400" />
              Performance Realities
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">(15+ Years Distributed DB Insight)</p>

            <div className="space-y-6 relative z-10">

              {/* Rule 1 */}
              <div className="flex">
                <div className="w-2 h-2 mt-2 mr-3 bg-emerald-500 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">COUNT(*) Is Actually Faster</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed bg-black/30 p-3 rounded-lg border border-gray-800/50">
                    A huge misconception among juniors is that <code>COUNT(column_name)</code> is faster than <code>COUNT(*)</code> because it targets one column. This is FALSE. Most modern DB optimizers treat <code>COUNT(*)</code> natively and count the internal table indexes. Calling a specific column forces the engine to individually check every single row's cell to see if it equals NULL before incrementing the counter.
                  </p>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="flex">
                <div className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Index Your Filters for WHERE </h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    If you are repeatedly running <code>SELECT COUNT(*) FROM Log WHERE status = 'ERROR';</code> across 50 Million rows, the count will be slow. If you run <code>CREATE INDEX idx_status ON Log(status)</code>, the count drops from 4 seconds to 15 milliseconds.
                  </p>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="flex mt-6 bg-rose-900/10 border border-rose-900/30 p-4 rounded-xl items-start">
                <AlertTriangle className="w-6 h-6 mr-3 text-rose-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-rose-500 text-sm uppercase tracking-widest mb-1">Massive Table Table-scans</h4>
                  <p className="text-rose-400/80 text-xs font-medium">On Terabyte-scale systems, <code>COUNT(*)</code> can trigger a full table scan and ruin the CPU. Senior architects use summary tables, materialized views, or approximate-count probabilistic techniques in real analytics.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-sm font-medium">
            <h3 className="text-gray-900 dark:text-white font-extrabold text-xl mb-2 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-gray-500" />
              Interview Check
            </h3>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Can COUNT() return NULL?</p>
              <div className="text-emerald-700 dark:text-emerald-400 flex items-start">
                <AlertOctagon className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-rose-500" />
                <span>No. If the table is completely empty, <code>COUNT()</code> returns the raw integer <strong>0</strong>. It never returns NULL.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2 break-words">What is the difference between COUNT(*) and COUNT(1)?</p>
              <p className="text-gray-600 dark:text-gray-400">Practically identical across modern DBs. They compile down to the exact identical execution plan inside the Engine.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-3">Does COUNT count NULLs?</p>
              <code className="text-xs bg-gray-50 dark:bg-gray-900 p-3 border border-gray-100 dark:border-gray-700 flex flex-col space-y-2 font-bold text-gray-600 dark:text-gray-400">
                <div className="flex justify-between"><span>COUNT(*)</span> <span className="text-emerald-500">YES</span></div>
                <div className="border-t border-gray-200 dark:border-gray-800 w-full"></div>
                <div className="flex justify-between"><span>COUNT(col)</span> <span className="text-rose-500">NO</span></div>
              </code>
            </div>

          </div>

        </div>
      </section>

      {/* JOIN & Real-World Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-2"><LayoutList className="w-6 h-6 mr-3 text-indigo-500" /> Standard Production Query</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">Grouping customer names and counting out how many physical orders they have placed by joining across their foreign keys.</p>
            <div className="shadow-lg">
              <CodeSnippetBlock
                title="Enterprise JOIN with Aggregate"
                codeSnippet="SELECT c.name, COUNT(o.order_id) AS TotalOrders&#10;FROM Customers c&#10;LEFT JOIN Orders o&#10;ON c.customer_id = o.customer_id&#10;GROUP BY c.name;"
              />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-700 pb-3">
              <Briefcase className="w-5 h-5 mr-3 text-gray-500" /> Sector Applications
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <ShoppingCart className="w-8 h-8 p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 mr-4 rounded-lg shrink-0" />
                <div>E-Commerce <span className="block text-xs text-gray-500 font-medium">Tracking total sold vs total distinct customers</span></div>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Banknote className="w-8 h-8 p-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 mr-4 rounded-lg shrink-0" />
                <div>Banking <span className="block text-xs text-gray-500 font-medium">Monitoring exactly how many active sessions trigger</span></div>
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Hospital className="w-8 h-8 p-1.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 mr-4 rounded-lg shrink-0" />
                <div>Healthcare <span className="block text-xs text-gray-500 font-medium">Counting patients strictly grouped by doctor ID</span></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlCount;