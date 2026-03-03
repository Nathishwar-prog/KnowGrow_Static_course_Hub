import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, GitBranch, ArrowRight, Zap, Target, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Shuffle, FileEdit, BarChart3, Hospital, Banknote, ShoppingCart } from 'lucide-react';

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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-lime-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simple' | 'searched' | 'groupby' | 'orderby' | 'update'>('simple');

  // Lab Sandbox Generator logic
  const getLabContent = () => {
    switch (activeTab) {
      case 'simple':
        return {
          title: "Simple CASE (Exact Matches)",
          desc: "Uses a single column at the top and evaluates exact WHEN matches down the list.",
          code: "SELECT name,\nCASE department\n    WHEN 'IT' THEN 'Technical Team'\n    WHEN 'HR' THEN 'Human Resources'\n    ELSE 'Other Department'\nEND AS DeptCategory\nFROM Employees;",
          source: [
            { id: 1, name: 'Arjun', col1: 'department', val1: 'IT' },
            { id: 2, name: 'Meena', col1: 'department', val1: 'HR' },
            { id: 3, name: 'Ravi', col1: 'department', val1: 'IT' },
            { id: 4, name: 'Priya', col1: 'department', val1: 'Finance' },
          ],
          result: [
            { name: 'Arjun', cat: 'Technical Team', color: 'text-blue-500' },
            { name: 'Meena', cat: 'Human Resources', color: 'text-purple-500' },
            { name: 'Ravi', cat: 'Technical Team', color: 'text-blue-500' },
            { name: 'Priya', cat: 'Other Department', color: 'text-gray-500' },
          ],
          resHeaders: ['name', 'DeptCategory']
        };
      case 'searched':
        return {
          title: "Searched CASE (Most Important)",
          desc: "Instead of an exact match, every WHEN builds a complex mathematical/logical equation.",
          code: "SELECT name,\nCASE\n    WHEN marks >= 80 THEN 'A'\n    WHEN marks >= 60 THEN 'B'\n    WHEN marks >= 50 THEN 'C'\n    ELSE 'Fail'\nEND AS Grade\nFROM Students;",
          source: [
            { id: 1, name: 'Arjun', col1: 'marks', val1: 85 },
            { id: 2, name: 'Meena', col1: 'marks', val1: 72 },
            { id: 3, name: 'Ravi', col1: 'marks', val1: 55 },
            { id: 4, name: 'Priya', col1: 'marks', val1: 40 },
          ],
          result: [
            { name: 'Arjun', cat: 'A', color: 'text-emerald-500 font-black' },
            { name: 'Meena', cat: 'B', color: 'text-lime-500 font-bold' },
            { name: 'Ravi', cat: 'C', color: 'text-amber-500 font-bold' },
            { name: 'Priya', cat: 'Fail', color: 'text-red-500 font-bold' },
          ],
          resHeaders: ['name', 'Grade']
        };
      case 'groupby':
        return {
          title: "CASE + GROUP BY Combo",
          desc: "Extremely advanced reporting! It dynamically bins rows into categories, then counts those exact categories.",
          code: "SELECT\nCASE\n    WHEN marks >= 50 THEN 'Pass'\n    ELSE 'Fail'\nEND AS Result,\nCOUNT(*) AS TotalStudents\nFROM Students\nGROUP BY \n  CASE\n    WHEN marks >= 50 THEN 'Pass'\n    ELSE 'Fail'\n  END;",
          source: [
            { id: 1, name: 'Arjun', col1: 'marks', val1: 85 },
            { id: 2, name: 'Meena', col1: 'marks', val1: 72 },
            { id: 3, name: 'Ravi', col1: 'marks', val1: 55 },
            { id: 4, name: 'Priya', col1: 'marks', val1: 40 },
          ],
          result: [
            { name: 'Pass', cat: '3', color: 'text-emerald-500 font-black' },
            { name: 'Fail', cat: '1', color: 'text-red-500 font-bold' },
          ],
          resHeaders: ['Result', 'TotalStudents']
        };
      case 'orderby':
        return {
          title: "CASE inside ORDER BY",
          desc: "Overrides standard alphabetical sorting. You can literally force specific categories to sort to the top!",
          code: "SELECT name, department\nFROM Employees\nORDER BY\nCASE department\n    WHEN 'IT' THEN 1\n    WHEN 'HR' THEN 2\n    ELSE 3\nEND;",
          source: [
            { id: 4, name: 'Priya', col1: 'department', val1: 'Finance' },
            { id: 2, name: 'Meena', col1: 'department', val1: 'HR' },
            { id: 1, name: 'Arjun', col1: 'department', val1: 'IT' },
            { id: 3, name: 'Ravi', col1: 'department', val1: 'IT' },
          ],
          result: [
            { name: 'Arjun', cat: 'IT', color: 'text-blue-500 font-bold' },
            { name: 'Ravi', cat: 'IT', color: 'text-blue-500 font-bold' },
            { name: 'Meena', cat: 'HR', color: 'text-purple-500 font-bold' },
            { name: 'Priya', cat: 'Finance', color: 'text-gray-500 font-bold' },
          ],
          resHeaders: ['name', 'department']
        };
      case 'update':
        return {
          title: "CASE inside UPDATE",
          desc: "Mass-migrates rows in the actual database instead of just displaying them on screen. Highly used in production.",
          code: "UPDATE Students\nSET grade =\nCASE\n    WHEN marks >= 80 THEN 'A'\n    WHEN marks >= 60 THEN 'B'\n    ELSE 'C'\nEND;",
          source: [
            { id: 1, name: 'Arjun', col1: 'marks/grade', val1: '85 -> ?' },
            { id: 2, name: 'Meena', col1: 'marks/grade', val1: '72 -> ?' },
            { id: 3, name: 'Ravi', col1: 'marks/grade', val1: '55 -> ?' }
          ],
          result: [
            { name: 'Arjun', cat: '85 -> A', color: 'text-emerald-500 font-bold' },
            { name: 'Meena', cat: '72 -> B', color: 'text-lime-500 font-bold' },
            { name: 'Ravi', cat: '55 -> C', color: 'text-amber-500 font-bold' },
          ],
          resHeaders: ['student', 'marks -> new_grade']
        };
    }
  };

  const lab = getLabContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-lime-50 to-green-50 dark:from-gray-900 dark:to-lime-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-12 relative animate-fade-in">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-lime-100 to-green-100 dark:from-lime-900/30 dark:to-green-900/30 rounded-2xl mb-4 border border-lime-200 dark:border-lime-800">
          <GitBranch className="w-8 h-8 text-lime-600 dark:text-lime-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight flex items-center justify-center">
          SQL CASE <code className="text-xl ml-4 bg-lime-100 dark:bg-lime-900/50 text-lime-700 dark:text-lime-300 px-3 py-1 rounded-lg">WHEN..THEN</code>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate conditional logic engine. Execute pure <strong>IF...ELSE</strong> structural routing directly inside your SQL database queries.
        </p>
      </header>

      {/* Syntax Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col h-full">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
            3️⃣ Simple CASE
          </h2>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 bg-gray-50 dark:bg-gray-900/50 p-3 rounded text-center">Evaluates the column once, checking <strong className="text-lime-600 dark:text-lime-400">exact matches</strong>.</p>
          <div className="flex-grow mt-auto">
            <CodeSnippetBlock codeSnippet={`SELECT name,\nCASE department\n    WHEN 'IT' THEN 'Tech'\n    WHEN 'HR' THEN 'Human'\n    ELSE 'Other'\nEND\nFROM table;`} />
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden flex flex-col h-full">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 border-b border-gray-800 pb-3 relative z-10">
            4️⃣ Searched CASE <span className="ml-3 text-xs bg-lime-500/20 text-lime-400 border border-lime-500/30 px-2 py-0.5 rounded-full">(Most Used)</span>
          </h2>
          <p className="text-sm font-medium text-gray-400 mb-4 bg-black/50 border border-gray-800 p-3 rounded text-center relative z-10">Allows <strong className="text-lime-400">complex conditions</strong> (&gt;=, &lt;, AND, OR) inside every single branch.</p>
          <div className="flex-grow mt-auto relative z-10">
            <CodeSnippetBlock codeSnippet={`SELECT name,\nCASE\n    WHEN marks >= 80 THEN 'A'\n    WHEN marks >= 60 THEN 'B'\n    ELSE 'F'\nEND\nFROM table;`} />
          </div>
        </div>
      </section>

      {/* Extreme CASE Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Header Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 p-4 pb-0 flex flex-nowrap overflow-x-auto custom-scrollbar shadow-inner">
            {[
              { id: 'simple', label: 'Simple CASE', icon: <Terminal className="w-4 h-4 mr-2" /> },
              { id: 'searched', label: 'Searched CASE', icon: <Target className="w-4 h-4 mr-2" /> },
              { id: 'groupby', label: 'GROUP BY Combo', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
              { id: 'orderby', label: 'ORDER BY Sort', icon: <Shuffle className="w-4 h-4 mr-2" /> },
              { id: 'update', label: 'Transform UPDATE', icon: <FileEdit className="w-4 h-4 mr-2" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap px-6 py-4 font-bold text-sm tracking-wide transition-colors flex items-center border-b-2 ${activeTab === tab.id ? 'border-lime-500 text-lime-600 dark:text-lime-400 bg-white dark:bg-gray-800' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content Lab Wrapper */}
          <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-10">

            {/* Left Controls & Code */}
            <div className="flex flex-col animate-fade-in relative z-10">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{lab.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">
                {lab.desc}
              </p>

              <div className="flex-grow mt-auto relative z-10 shadow-lg group">
                <CodeSnippetBlock codeSnippet={lab.code} title={activeTab === 'update' ? 'Mutating Database Query' : 'Selection Query'} />
              </div>

              {activeTab === 'searched' && (
                <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500 flex items-start shadow-sm">
                  <AlertTriangle className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-amber-900 dark:text-amber-500">🔥 Important Engine Rule</p>
                    <p className="text-xs font-medium text-amber-800 dark:text-amber-400">CASE executes rigidly top-to-bottom. <strong className="text-black dark:text-white underline">Once a condition evaluates TRUE → it stops checking.</strong> Execution order matters infinitely.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Transformation Lab */}
            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col animate-fade-in shadow-inner">

              {/* Source DB */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
                <div className="bg-gray-50 dark:bg-gray-900/80 uppercase text-xs font-bold text-gray-500 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                  <span>Source Table</span>
                  {activeTab === 'update' && <span className="text-red-500 flex items-center"><FileEdit className="w-3 h-3 mr-1" /> Pending Mutate</span>}
                </div>
                <table className="w-full text-left font-mono text-sm text-gray-600 dark:text-gray-300">
                  <thead className="border-b border-gray-100 dark:border-gray-700">
                    <tr className="opacity-70 text-xs">
                      <th className="px-4 py-2">{activeTab === 'groupby' ? 'id' : 'name'}</th>
                      <th className="px-4 py-2 font-bold text-gray-900 dark:text-white">
                        {lab.source[0].col1}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                    {lab.source.map((r: any) => (
                      <tr key={r.id}>
                        <td className="px-4 py-2">{r.name}</td>
                        <td className="px-4 py-2">{r.val1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Transformation Arrow */}
              <div className="flex justify-center text-gray-300 dark:text-gray-600 my-2">
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mb-1"></div>
              </div>

              {/* Target Output */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border-2 border-lime-200 dark:border-lime-900">
                <div className="bg-lime-50 dark:bg-lime-900/20 uppercase text-xs font-bold text-lime-700 dark:text-lime-400 px-4 py-2 border-b border-lime-100 dark:border-lime-900/50 flex justify-between">
                  <span className="flex items-center"><Terminal className="w-3 h-3 mr-1" /> Transformed Output Result</span>
                </div>
                <table className="w-full text-left font-mono text-sm text-gray-700 dark:text-gray-200">
                  <thead className="border-b border-gray-100 dark:border-gray-700">
                    <tr className="bg-gray-50/50 dark:bg-gray-900/50 text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {lab.resHeaders.map((h, i) => <th key={i} className="px-4 py-2">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                    {lab.result.map((r: any, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 py-3">{r.name}</td>
                        <td className={`px-4 py-3 ${r.color}`}>{r.cat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex flex-col border-b border-gray-200 dark:border-gray-700 pb-2">
          <span>8️⃣ Real-World Architectures</span>
          <span className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">Where you actually use this in Enterprise Jobs</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-amber-500 shadow-sm">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center rounded-lg mb-4 text-amber-600 dark:text-amber-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">E-commerce</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">Classifying users mathematically.</p>
            <code className="text-xs font-mono bg-gray-50 dark:bg-gray-900 p-2 block border border-gray-100 dark:border-gray-700 text-gray-500">WHEN total &gt; 10k<br />THEN 'Premium'</code>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-emerald-500 shadow-sm">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center rounded-lg mb-4 text-emerald-600 dark:text-emerald-400">
              <Banknote className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Banking</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">Classifying account risk levels dynamically.</p>
            <code className="text-xs font-mono bg-gray-50 dark:bg-gray-900 p-2 block border border-gray-100 dark:border-gray-700 text-gray-500">WHEN bal &lt; 0<br />THEN 'High Risk'</code>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-blue-500 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center rounded-lg mb-4 text-blue-600 dark:text-blue-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Data Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">Creating dynamic aggregate categories directly in report generation via Group By combinations.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-rose-500 shadow-sm">
            <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center rounded-lg mb-4 text-rose-600 dark:text-rose-400">
              <Hospital className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hospital ER</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">Classify patients instantly into severity threat-levels by vitals parameters.</p>
          </div>
        </div>
      </section>

      {/* Production & Interview Tier Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-7 bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-lime-400" />
              Performance Rules
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">(15+ Years App Optimization)</p>

            <div className="space-y-6 relative z-10">
              <div className="bg-black/50 p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-lg mb-2 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 1. Avoid Massive Nested Logic</h3>
                <p className="text-gray-400 text-sm">If your logic requires 30+ <code className="text-lime-400 font-mono">WHEN</code> parameters, the query CPU spikes. Immediately stop using <code className="text-lime-400 font-mono">CASE</code> and swap to an indexed external <strong className="text-blue-400 px-1">LUT (Lookup Table)</strong> bridging via a <strong className="text-emerald-400">JOIN</strong>.</p>
              </div>

              <div className="bg-black/50 p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-base mb-2 flex items-center text-white">🔥 2. Do NOT use CASE inside WHERE block</h3>
                <div className="bg-rose-900/20 border-l-2 border-rose-500 p-3 rounded text-sm text-gray-300">
                  CASE forces non-sargable full-table scans when nested in a WHERE clause filter, bypassing any database B-Tree indexes you created.
                </div>
              </div>

              <div className="bg-black/50 p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-base flex items-center text-white">🔥 3. Ensure Evaluated Columns Are Indexed</h3>
                <p className="text-gray-400 text-sm mt-2">If your CASE Statement constantly calculates conditions checking the `salary` column, the `salary` column itself must be indexed.</p>
              </div>
            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30 flex-grow h-full flex flex-col">
              <h3 className="text-indigo-900 dark:text-indigo-300 font-extrabold text-2xl mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
                <HelpCircle className="w-7 h-7 mr-3 text-indigo-500" />
                Interview Q&A
              </h3>

              <div className="space-y-4 flex-grow">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2 text-sm">Difference Between CASE and IF()?</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium text-xs">CASE is rigid ANSI Standard SQL supported by all major vendors. <code>IF()</code> is proprietary (not supported on all SQL servers). Always prefer CASE.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2 text-sm">Can CASE return NULL?</p>
                  <p className="text-rose-600 dark:text-rose-400 font-bold text-xs bg-rose-50 dark:bg-rose-900/20 py-1 px-2 rounded inline-flex mt-1">Yes, implicitly</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-xs mt-2">If there is no <code>ELSE</code> backup parameter mapped, and no conditions match TRUE, it automatically outputs a NULL flag.</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-indigo-200 dark:border-indigo-800/50">
                <p className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center mb-3"><AlertOctagon className="w-4 h-4 mr-2" /> Beginner Mistakes</p>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <span className="bg-gray-50 dark:bg-gray-900/30 p-2 rounded">Forgetting END</span>
                  <span className="bg-gray-50 dark:bg-gray-900/30 p-2 rounded">Incorrect order</span>
                  <span className="bg-gray-50 dark:bg-gray-900/30 p-2 rounded">Missing ELSE</span>
                  <span className="bg-gray-50 dark:bg-gray-900/30 p-2 rounded">Overlapping triggers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlCase;