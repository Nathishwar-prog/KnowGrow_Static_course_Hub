import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Filter, CalendarDays, CaseSensitive, Hash, ArrowRight, Zap, Target, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, RefreshCw, BarChart2 } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group">
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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-pink-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlBetween: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'numbers' | 'dates' | 'text' | 'not'>('numbers');

  // Lab Data Generators
  const getLabContent = () => {
    switch (activeTab) {
      case 'numbers':
        return {
          title: "BETWEEN with Numbers",
          icon: <Hash className="w-5 h-5 mr-2 text-pink-500" />,
          description: "Filtering numeric ranges like salaries. Because BETWEEN is inclusive, exactly 50000 and 70000 are matched.",
          code: "SELECT name, salary\nFROM Employees\nWHERE salary BETWEEN 50000 AND 70000;",
          tableHeaders: ['name', 'salary'],
          allData: [
            { name: 'Arjun', val: 40000 },
            { name: 'Meena', val: 50000, highlight: true },
            { name: 'Ravi', val: 60000, highlight: true },
            { name: 'Priya', val: 70000, highlight: true },
            { name: 'Karthik', val: 80000 }
          ],
          explanation: "Includes values: = 50,000 and <= 70,000"
        };
      case 'dates':
        return {
          title: "BETWEEN with Dates",
          icon: <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />,
          description: "Finding all orders within a specific year. Notice how YYYY-MM-DD format is strictly required.",
          code: "SELECT *\nFROM Orders\nWHERE order_date BETWEEN '2026-01-01' AND '2026-12-31';",
          tableHeaders: ['order_id', 'order_date'],
          allData: [
            { id: 1, val: '2026-01-10', highlight: true },
            { id: 2, val: '2026-03-15', highlight: true },
            { id: 3, val: '2026-07-20', highlight: true },
            { id: 4, val: '2026-12-05', highlight: true },
            { id: 5, val: '2027-02-14' }
          ],
          explanation: "Matches everything from Jan 1st to Dec 31st"
        };
      case 'text':
        return {
          title: "BETWEEN Alphabetically",
          icon: <CaseSensitive className="w-5 h-5 mr-2 text-amber-500" />,
          description: "Yes, BETWEEN works on text! It looks at alphabetical sorting dictionaries to find matches.",
          code: "SELECT name\nFROM Students\nWHERE name BETWEEN 'A' AND 'M';",
          tableHeaders: ['id', 'name'],
          allData: [
            { id: 1, val: 'Arjun', highlight: true },
            { id: 5, val: 'Karthik', highlight: true },
            { id: 2, val: 'Meena' }, // Note: depending on engine collation 'Meena' might exclude because 'Meena' > 'M', but sticking to the provided content strictly
            { id: 4, val: 'Priya' },
            { id: 3, val: 'Ravi' }
          ],
          explanation: "Matches names starting with A through M."
        };
      case 'not':
        return {
          title: "NOT BETWEEN Operator",
          icon: <AlertOctagon className="w-5 h-5 mr-2 text-red-500" />,
          description: "Used to radically invert the logic and EXCLUDE specific ranges.",
          code: "SELECT name, salary\nFROM Employees\nWHERE salary NOT BETWEEN 50000 AND 70000;",
          tableHeaders: ['name', 'salary'],
          allData: [
            { name: 'Arjun', val: 40000, highlight: true },
            { name: 'Meena', val: 50000 },
            { name: 'Ravi', val: 60000 },
            { name: 'Priya', val: 70000 },
            { name: 'Karthik', val: 80000, highlight: true }
          ],
          explanation: "Keeps < 50,000 OR > 70,000"
        };
    }
  };

  const lab = getLabContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-900 dark:to-pink-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900/30 rounded-2xl mb-4">
          <Filter className="w-8 h-8 text-pink-600 dark:text-pink-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          SQL Between
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          A powerful filtering operator used to effortlessly capture records strictly within a specified start and end range boundary constraint.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10"><Target className="w-48 h-48" /></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center relative z-10">
              <span className="text-xl mr-2">📌</span> Core Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium relative z-10 text-lg">
              It filters records using an <strong className="bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 px-2 rounded mx-1 pb-0.5">inclusive range</strong>. It directly evaluates to TRUE if a target value is bounded strictly by those two points!
            </p>

            <div className="flex gap-4 relative z-10">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex-1 flex items-center shadow-sm">
                <Hash className="w-5 h-5 mr-3 text-pink-500 shrink-0" /> <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Numbers</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex-1 flex items-center shadow-sm">
                <CalendarDays className="w-5 h-5 mr-3 text-blue-500 shrink-0" /> <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Dates</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 rounded-lg flex-1 flex items-center shadow-sm">
                <CaseSensitive className="w-5 h-5 mr-3 text-amber-500 shrink-0" /> <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Text</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
              2️⃣ Basic Syntax
            </h2>

            <div className="relative z-10 flex-grow flex flex-col justify-between">
              <CodeSnippetBlock codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name BETWEEN value1 AND value2;`} />

              <div className="mt-4 flex items-center border-t border-gray-800 pt-6">
                <RefreshCw className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-4">Equivalent to:</span>
                <code className="bg-gray-800 text-pink-400 text-xs px-3 py-1.5 rounded font-mono border border-gray-700">WHERE col &gt;= val1 AND col &lt;= val2</code>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Range Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Lab Header Control */}
          <div className="grid md:grid-cols-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <button
              onClick={() => setActiveTab('numbers')}
              className={`p-5 flex flex-col items-center justify-center transition-all ${activeTab === 'numbers' ? 'bg-white dark:bg-gray-800 border-b-2 border-b-pink-500 text-pink-600 dark:text-pink-400 font-bold' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <Hash className="w-6 h-6 mb-2" />
              <span className="text-sm uppercase tracking-wider">Numbers</span>
            </button>
            <button
              onClick={() => setActiveTab('dates')}
              className={`p-5 flex flex-col items-center justify-center transition-all ${activeTab === 'dates' ? 'bg-white dark:bg-gray-800 border-b-2 border-b-blue-500 text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <CalendarDays className="w-6 h-6 mb-2" />
              <span className="text-sm uppercase tracking-wider">Dates</span>
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`p-5 flex flex-col items-center justify-center transition-all ${activeTab === 'text' ? 'bg-white dark:bg-gray-800 border-b-2 border-b-amber-500 text-amber-600 dark:text-amber-400 font-bold' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <CaseSensitive className="w-6 h-6 mb-2" />
              <span className="text-sm uppercase tracking-wider">Alphabetical</span>
            </button>
            <button
              onClick={() => setActiveTab('not')}
              className={`p-5 flex flex-col items-center justify-center transition-all ${activeTab === 'not' ? 'bg-white dark:bg-gray-800 border-b-2 border-b-red-500 text-red-600 dark:text-red-400 font-bold' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <AlertOctagon className="w-6 h-6 mb-2" />
              <span className="text-sm uppercase tracking-wider">NOT Filter</span>
            </button>
          </div>

          {/* Lab Body Area */}
          <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-10">

            {/* Documentation & Sandbox Query */}
            <div className="flex flex-col space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold flex items-center mb-3 text-gray-900 dark:text-white">
                  {lab.icon} {lab.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{lab.description}</p>
              </div>

              <CodeSnippetBlock codeSnippet={lab.code} />

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-inner flex items-center">
                <Target className="w-5 h-5 mr-3 text-pink-500 shrink-0" />
                <span className="font-bold font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 p-2 rounded shadow-sm flex-grow">
                  {lab.explanation}
                </span>
              </div>

              {/* Specialty Alert warnings */}
              {activeTab === 'dates' && (
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800/40 relative">
                  <div className="absolute top-0 right-0 p-3"><AlertTriangle className="w-5 h-5 text-amber-500 opacity-50" /></div>
                  <h4 className="font-bold text-amber-900 dark:text-amber-500 text-sm uppercase tracking-wider mb-2">⚠ Date Warning (DATETIME)</h4>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-medium mb-2">Dates with implicit times can glitch your results. <code className="bg-amber-100 dark:bg-amber-900/50">2026-12-31</code> really means <code className="bg-amber-100 dark:bg-amber-900/50">2026-12-31 00:00:00</code>.</p>
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-200">Pro Solution (<strong className="text-amber-500">15+ Yr Tip</strong>):</p>
                  <code className="text-xs font-mono block mt-1 text-emerald-600 dark:text-emerald-400">WHERE date &gt;= '2026-01-01' AND date &lt; '2027-01-01'</code>
                </div>
              )}

              {activeTab === 'numbers' && (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/40 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-indigo-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-indigo-900 dark:text-indigo-300">Clean vs Messy</p>
                    <p className="text-xs font-medium text-indigo-800 dark:text-indigo-400">BETWEEN executes exactly identical to <strong className="font-mono bg-indigo-100 dark:bg-indigo-900/50 px-1 rounded">&gt;= AND &lt;=</strong>. We simply use BETWEEN for drastically cleaner query readability.</p>
                  </div>
                </div>
              )}

            </div>

            {/* Simulated Data Execution Frame */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full animate-fade-in">
              <div className="bg-gray-100 dark:bg-gray-900 text-xs font-bold text-gray-500 uppercase tracking-widest p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <span>Result Set</span>
                <span className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded shadow-sm border border-gray-200 dark:border-gray-700">{lab.allData.filter((r: any) => r.highlight).length} Match</span>
              </div>

              <div className="bg-white dark:bg-gray-800 flex-grow">
                <table className="w-full text-left font-mono text-sm">
                  <thead className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 text-xs text-gray-400">
                    <tr>
                      <th className="px-5 py-3 font-medium w-6">St</th>
                      {lab.tableHeaders.map((h, i) => (
                        <th key={i} className="px-5 py-3 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
                    {lab.allData.map((row: any, i: number) => (
                      <tr key={i} className={`transition-colors ${row.highlight ? 'bg-pink-50/50 dark:bg-pink-900/10' : 'opacity-40 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100'}`}>
                        <td className="px-5 py-3 border-l-4" style={{ borderLeftColor: row.highlight ? '#ec4899' : 'transparent' }}>
                          {row.highlight ? <Check className="w-4 h-4 text-pink-500" /> : <span className="w-4 h-4 block"></span>}
                        </td>
                        <td className={`px-5 py-3 ${row.highlight ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                          {row.name || row.id}
                        </td>
                        <td className={`px-5 py-3 ${row.highlight ? 'font-bold text-pink-600 dark:text-pink-400' : 'text-gray-600 dark:text-gray-400'}`}>
                          {row.val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/80 p-3 text-center border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 font-medium">Faded rows are completely filtered out in the final mathematical result.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Real World Applications Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          8️⃣ Real-World Data Cases
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-lg text-white transform hover:-translate-y-1 transition-transform cursor-default">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl">🛒</span></div>
            <h3 className="font-bold text-lg mb-2">E-commerce</h3>
            <p className="text-blue-100 text-sm mb-3">Filtering product pages by user price sliders.</p>
            <code className="bg-black/30 font-mono text-xs px-2 py-1 rounded block mt-auto">price BETWEEN 1k AND 5k</code>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg text-white transform hover:-translate-y-1 transition-transform cursor-default">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl">🏦</span></div>
            <h3 className="font-bold text-lg mb-2">Banking</h3>
            <p className="text-emerald-100 text-sm mb-3">Isolating transactions between two calendar statement days.</p>
            <code className="bg-black/30 font-mono text-xs px-2 py-1 rounded block mt-auto">date BETWEEN x AND y</code>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 shadow-lg text-white transform hover:-translate-y-1 transition-transform cursor-default">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl">🏥</span></div>
            <h3 className="font-bold text-lg mb-2">Hospital</h3>
            <p className="text-rose-100 text-sm mb-3">Locating appointments within a doctor's active shift period.</p>
            <code className="bg-black/30 font-mono text-xs px-2 py-1 rounded block mt-auto">time BETWEEN m AND n</code>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 shadow-lg text-white transform hover:-translate-y-1 transition-transform cursor-default">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4"><BarChart2 className="w-6 h-6 text-white" /></div>
            <h3 className="font-bold text-lg mb-2">Analytics</h3>
            <p className="text-amber-100 text-sm mb-3">Aggregating user registrations isolated between two quarters.</p>
            <code className="bg-black/30 font-mono text-xs px-2 py-1 rounded block mt-auto">month BETWEEN q1 AND q2</code>
          </div>
        </div>
      </section>

      {/* Extreme Production Tips & Interview Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-amber-500" />
              Performance Engine Tips
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">(15+ Years Architecture Insight)</p>

            <div className="space-y-8 relative z-10">
              {/* Rule 1 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 1. Exploit Indexed Columns</h3>
                <p className="text-gray-300 text-sm mb-3">BETWEEN is fully capable of executing blazing fast index range scans. If you filter by salary constantly across millions of employees, you must index it.</p>
                <code className="bg-black/50 p-3 rounded font-mono text-sm block border border-gray-800 text-amber-400">CREATE INDEX idx_salary ON Employees(salary);</code>
              </div>

              {/* Rule 2 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 2. Never run Functions over Columns</h3>
                <div className="bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-xl mb-3">
                  <p className="text-rose-400 text-sm font-bold mb-2 flex items-center"><AlertOctagon className="w-4 h-4 mr-2" /> Disables entirely index usage (Sargable Failure):</p>
                  <code className="font-mono text-xs text-rose-300">WHERE YEAR(order_date) BETWEEN 2025 AND 2026</code>
                </div>
                <div className="bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                  <p className="text-emerald-400 text-sm font-bold mb-2 flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Proper Senior Approach:</p>
                  <code className="font-mono text-xs text-emerald-300">WHERE order_date BETWEEN '2025-01-01' AND '2026-12-31'</code>
                </div>
              </div>

              {/* Rule 3 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 3. Force Correct Low/High Directionality</h3>
                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <p className="text-gray-300 text-sm">If you accidentally flip the syntax <code>BETWEEN 70k AND 50k</code> it crashes implicitly and strictly returns exactly <strong className="text-amber-500">nothing</strong>. The lower value <strong className="text-white underline">MUST</strong> always come first to function as a valid tree scan rule.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30 flex-grow h-full">
              <h3 className="text-indigo-900 dark:text-indigo-300 font-extrabold text-2xl mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
                <HelpCircle className="w-7 h-7 mr-3 text-indigo-500" />
                Interview Check
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-1 text-sm bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-200 dark:border-gray-700">Is BETWEEN inclusive?</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium text-xs px-2 pt-1">Yes, it binds boundaries 100% inclusively.</p>
                </div>

                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-1 text-sm bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-200 dark:border-gray-700">Can it string match?</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium text-xs px-2 pt-1">Yes! Alphabetical dictionary matching.</p>
                </div>

                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-1 text-sm bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-200 dark:border-gray-700">BETWEEN vs <span className="text-rose-500">&gt;= &amp; &lt;=</span> speed?</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-medium text-xs px-2 pt-1 bg-indigo-100 dark:bg-indigo-900/30 rounded inline-block mt-1">Exact identical engine performance. Optimizer reads them identically.</p>
                </div>

                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-1 text-sm bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-200 dark:border-gray-700">NULL Handling?</p>
                  <p className="text-rose-700 dark:text-rose-400 font-bold text-xs px-2 pt-1 flex items-center"><AlertOctagon className="w-3 h-3 mr-1" /> Never matches NULL.</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-indigo-200 dark:border-indigo-800/50">
                <p className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Worst Beginner mistakes</p>
                <ul className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-2 space-y-1 list-disc list-inside">
                  <li>Reversing low &gt; high sizes</li>
                  <li>Assuming dates lock 23:59pm end</li>
                  <li>Not handling datetimes properly</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlBetween;