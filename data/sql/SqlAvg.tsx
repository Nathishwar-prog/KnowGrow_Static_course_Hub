import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, Table2, Calculator, Target, ArrowRight, Zap, Target as TargetIcon, CheckCircle, BarChart3, HelpCircle, AlertOctagon } from 'lucide-react';

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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-indigo-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlAvg: React.FC = () => {
  // Lab Simulator State
  type StudentType = { student_id: number; name: string; department: string; marks: number | null };
  const initialStudents: StudentType[] = [
    { student_id: 1, name: 'Arjun', department: 'IT', marks: 80 },
    { student_id: 2, name: 'Meena', department: 'HR', marks: 90 },
    { student_id: 3, name: 'Ravi', department: 'IT', marks: 70 },
    { student_id: 4, name: 'Priya', department: 'HR', marks: 60 },
    { student_id: 5, name: 'Karthik', department: 'IT', marks: 100 }
  ];

  const nullScenarioStudents: StudentType[] = [
    { student_id: 1, name: 'Arjun', department: 'IT', marks: 80 },
    { student_id: 2, name: 'Meena', department: 'HR', marks: null },
    { student_id: 3, name: 'Ravi', department: 'IT', marks: 70 }
  ];

  const [activeTab, setActiveTab] = useState<'basic' | 'where' | 'groupby' | 'null'>('basic');

  const getLabData = () => {
    switch (activeTab) {
      case 'basic':
        return {
          title: "Calculate Aggregate Average",
          desc: "(80 + 90 + 70 + 60 + 100) ÷ 5 = 80",
          code: "SELECT AVG(marks) AS AverageMarks\nFROM Students;",
          students: initialStudents,
          result: [{ average: 80 }]
        };
      case 'where':
        return {
          title: "Average Marks > 70",
          desc: "(80 + 90 + 100) ÷ 3 = 90",
          code: "SELECT AVG(marks) AS AvgAbove70\nFROM Students\nWHERE marks > 70;",
          students: initialStudents.filter(s => s.marks && s.marks > 70),
          result: [{ average: 90 }]
        };
      case 'groupby':
        return {
          title: "Department-wise Average",
          desc: "IT: (80 + 70 + 100) ÷ 3 = 83.33 | HR: (90 + 60) ÷ 2 = 75",
          code: "SELECT department,\n       AVG(marks) AS DepartmentAverage\nFROM Students\nGROUP BY department;",
          students: initialStudents,
          result: [{ department: "HR", average: 75 }, { department: "IT", average: 83.33 }]
        };
      case 'null':
        return {
          title: "Ignoring NULL values",
          desc: "(80 + 70) ÷ 2 = 75. Notice Meena is completely ignored in the divisor.",
          code: "SELECT AVG(marks) AS AverageMarks\nFROM Students;",
          students: nullScenarioStudents,
          result: [{ average: 75 }]
        };
    }
  };

  const labData = getLabData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Calculator className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          SQL Average <code className="text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-2 rounded-lg ml-2">AVG()</code>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          An aggregate function that calculates the mathematical mean value of a numeric column, compressing millions of rows into a single powerful insight.
        </p>
      </header>

      {/* Definitions Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
              It returns <span className="font-extrabold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-1 rounded mx-1">one single value</span> distilled from multiple numeric rows matching your query.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-indigo-800/30">
              <h3 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-widest mb-3 text-center">Data Formula</h3>
              <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="font-bold text-purple-600 dark:text-purple-400">Average</span>
                <span className="text-gray-400">=</span>
                <span className="font-mono text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">Total Sum</span>
                <span className="text-gray-400">÷</span>
                <span className="font-mono text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">Number of Rows</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
              2️⃣ Basic Syntax
            </h2>

            <div className="space-y-4 relative z-10">
              <CodeSnippetBlock codeSnippet={`SELECT AVG(column_name)\nFROM table_name;`} />
              <p className="text-sm text-gray-400 font-bold ml-1">With Alias:</p>
              <CodeSnippetBlock codeSnippet={`SELECT AVG(column_name) AS AverageValue\nFROM table_name;`} />
            </div>
          </div>

        </div>
      </section>

      {/* Interactive AVG Live Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">

          {/* Lab Header */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
              <Terminal className="w-7 h-7 mr-3 text-indigo-500" /> Live AVG Computing Lab
            </h2>
            <p className="text-gray-600 dark:text-gray-400">See how mathematical queries reduce the table below into aggregate answers.</p>
          </div>

          {/* Lab Body */}
          <div className="grid lg:grid-cols-12">

            {/* Left controls */}
            <div className="lg:col-span-4 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20">
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">Query Modes</p>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('basic')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col ${activeTab === 'basic' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-sm' : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                >
                  <span className={`font-bold mb-1 ${activeTab === 'basic' ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'}`}>3️⃣ Basic Example</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Calculate Average Marks table-wide.</span>
                </button>

                <button
                  onClick={() => setActiveTab('where')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col ${activeTab === 'where' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm' : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                >
                  <span className={`font-bold mb-1 ${activeTab === 'where' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'}`}>4️⃣ AVG with WHERE</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Filter rows before averaging (Marks &gt; 70).</span>
                </button>

                <button
                  onClick={() => setActiveTab('groupby')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col ${activeTab === 'groupby' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-sm' : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                >
                  <div className="flex justify-between w-full">
                    <span className={`font-bold mb-1 ${activeTab === 'groupby' ? 'text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'}`}>5️⃣ AVG with GROUP BY</span>
                    <span className="text-xs font-black bg-purple-200 dark:bg-purple-800/40 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">Core</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">The most powerful capability. Dept-wise avgs.</span>
                </button>

                <button
                  onClick={() => setActiveTab('null')}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col ${activeTab === 'null' ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 shadow-sm' : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                >
                  <span className={`font-bold mb-1 ${activeTab === 'null' ? 'text-rose-700 dark:text-rose-300' : 'text-gray-700 dark:text-gray-300'}`}>6️⃣ Ignoring NULL</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Simulate a student without any grade.</span>
                </button>
              </div>
            </div>

            {/* Right panels (Data + Query) */}
            <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TargetIcon className="w-5 h-5 mr-3 text-indigo-500" /> {labData.title}
              </h3>

              <CodeSnippetBlock codeSnippet={labData.code} />

              {/* Math Explanation box */}
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-lg my-4 text-sm font-mono text-indigo-800 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50 flex">
                <Calculator className="w-5 h-5 mr-3 shrink-0" />
                <div>
                  <span className="font-bold font-sans text-indigo-900 dark:text-indigo-200 uppercase text-xs tracking-wider block mb-1">Execution Explanation:</span>
                  {labData.desc}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4 flex-grow">

                {/* Source Table */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden flex flex-col shadow-sm">
                  <div className="bg-gray-50 dark:bg-gray-800/50 text-xs font-bold text-gray-500 uppercase tracking-widest p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                    <span className="flex items-center"><Table2 className="w-3 h-3 mr-2" /> Source: Students</span>
                    <span>{labData.students.length} rows</span>
                  </div>
                  <div className="overflow-x-auto flex-grow bg-white dark:bg-gray-800">
                    <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
                      <thead className="bg-gray-100 dark:bg-gray-900/50 text-xs">
                        <tr>
                          <th className="px-4 py-2 border-b dark:border-gray-700">name</th>
                          <th className="px-4 py-2 border-b dark:border-gray-700">dept</th>
                          <th className="px-4 py-2 border-b dark:border-gray-700 font-bold text-indigo-600 dark:text-indigo-400">marks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-mono text-xs">
                        {labData.students.map((stu, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="px-4 py-2 font-sans font-medium">{stu.name}</td>
                            <td className="px-4 py-2 text-gray-500">{stu.department}</td>
                            <td className={`px-4 py-2 font-bold ${stu.marks === null ? 'text-rose-500' : 'text-indigo-600 dark:text-indigo-400'}`}>
                              {stu.marks === null ? 'NULL' : stu.marks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Output Matrix */}
                <div className="border border-emerald-200 dark:border-emerald-800 rounded-xl overflow-hidden shadow-lg bg-emerald-50 dark:bg-emerald-900/10 flex flex-col transform hover:-translate-y-1 transition-transform relative">
                  <div className="absolute top-0 right-0 p-2 opacity-50"><CheckCircle className="w-12 h-12 text-emerald-500/20" /></div>
                  <div className="bg-emerald-100/50 dark:bg-emerald-800/30 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest p-3 border-b border-emerald-200 dark:border-emerald-800">
                    Output
                  </div>
                  <div className="p-4 flex-grow flex items-center justify-center">
                    <table className="w-full text-center">
                      <thead>
                        <tr>
                          {activeTab === 'groupby' && <th className="pb-3 text-sm text-gray-600 dark:text-gray-400">department</th>}
                          <th className="pb-3 text-sm font-bold text-emerald-700 dark:text-emerald-400">AverageMarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {labData.result.map((res: any, i) => (
                          <tr key={i}>
                            {activeTab === 'groupby' && <td className="py-2 font-medium bg-white dark:bg-gray-800 rounded-l shadow-sm border-y border-l border-gray-200 dark:border-gray-700 px-4">{res.department}</td>}
                            <td className={`py-2 text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800 shadow-sm border-y border-r border-gray-200 dark:border-gray-700 px-4 ${activeTab !== 'groupby' ? 'border-l rounded w-full block' : 'rounded-r'}`}>
                              {res.average}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Specialty Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold flex items-center mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
              <AlertOctagon className="w-6 h-6 mr-3 text-rose-500" />
              NULL Handling Exception
            </h3>
            <p className="font-bold text-rose-600 dark:text-rose-400 mb-2">AVG() ignores NULL values entirely.</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">It does not divide by them. Thus 4 rows with 1 null creates a division by 3.</p>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Force NULL to zero:</p>
              <code className="text-xs font-mono block text-indigo-600 dark:text-indigo-400">SELECT AVG(IFNULL(marks, 0))<br />FROM Students;</code>
            </div>
            <p className="text-xs italic text-gray-500">⚠ Be careful — this radically changes the mathematical result.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold flex items-center mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
              <span>7️⃣</span> <span className="mx-3">Decimal Precision</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Averages often produce long decimals (e.g. 83.3333333). You should virtually always wrap them in a rounding function for reports.</p>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Format exactly 2 decimals:</p>
              <code className="text-xs font-mono block text-purple-600 dark:text-purple-400">SELECT ROUND(AVG(marks), 2)<br />FROM Students;</code>
            </div>
          </div>

        </div>
      </section>

      {/* Analytics App Usage Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden text-center">

          <h2 className="text-3xl font-extrabold mb-8 flex items-center justify-center relative z-10">
            <BarChart3 className="w-8 h-8 mr-3 text-cyan-400" />
            8️⃣ Real-World Analytics Systems
          </h2>
          <p className="text-lg text-blue-200 font-medium mb-12 max-w-2xl mx-auto relative z-10">AVG is one of the most critical daily functions driving KPI dashboards and corporate reporting datasets globally.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 text-left">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🛒</div>
              <h4 className="font-bold text-sm uppercase text-cyan-300 tracking-wider">AOV</h4>
              <p className="text-xs text-blue-100 mt-2 font-medium">Average Order Value in e-Commerce</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-bold text-sm uppercase text-purple-300 tracking-wider">Finance</h4>
              <p className="text-xs text-blue-100 mt-2 font-medium">Average account monthly balance</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-bold text-sm uppercase text-emerald-300 tracking-wider">Medical</h4>
              <p className="text-xs text-blue-100 mt-2 font-medium">Average patient waiting time in ER</p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-sm uppercase text-amber-300 tracking-wider">EdTech</h4>
              <p className="text-xs text-blue-100 mt-2 font-medium">Classroom / Region performance data</p>
            </div>
          </div>

          {/* Background design */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Production & Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* 15+ Yrs Exp */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-amber-500" />
              9️⃣ Performance Tips
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 relative z-10">(15+ Years Experience)</p>

            <div className="space-y-8 relative z-10">
              {/* Tip 1 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 1. Use WHERE Before GROUP BY</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Drastically reduce the mathematical dataset <strong className="text-indigo-600 dark:text-indigo-400">before</strong> executing the actual average function.</p>
                <code className="bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded font-mono text-xs block border border-indigo-100 dark:border-indigo-800/40 text-indigo-800 dark:text-indigo-300">SELECT AVG(salary)<br />FROM Employees<br /><span className="font-bold">WHERE department = 'IT';</span></code>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 italic">Infinitely more efficient than grouping the entire 10-million row table first.</p>
              </div>

              {/* Tip 2 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 2. Index Filter Columns</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">If you are constantly triggering analytic dashboard averages filtering by a dimension (like timeframe or department), heavily index that field.</p>
              </div>

              {/* Tip 3 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 3. Pre-computation on Huge Data</h3>
                <p className="text-amber-700 dark:text-amber-500 text-sm mb-3 font-bold bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-200 dark:border-amber-800/50">"On millions of rows, AVG scans the entire column. Consider chron-job based summary tables for rapid reporting."</p>
              </div>
            </div>
          </div>

          {/* Q&A Interview Concepts */}
          <div className="lg:col-span-5 flex flex-col space-y-6">

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-800/30 flex-grow h-full">
              <h3 className="text-indigo-900 dark:text-indigo-300 font-extrabold text-2xl mb-6 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-4">
                <HelpCircle className="w-7 h-7 mr-3 text-indigo-500" />
                Interview Concepts
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider">Question:</span>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2 text-lg">What datatype does AVG return?</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                    <div className="absolute top-4 right-4 text-emerald-500"><CheckCircle className="w-5 h-5" /></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-2 pr-6">It forces a return of a <strong className="text-indigo-600 dark:text-indigo-400">decimal/float</strong> value, even if the origin column was explicitly created as an INT.</p>
                    <p className="text-xs font-mono text-gray-500 bg-gray-50 dark:bg-gray-900/50 p-2 rounded block">80 + 90 avg = 85.0000</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider">Question:</span>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2 text-lg">Difference Between AVG and SUM/COUNT?</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Internally the engine runs a macro algorithm directly equatable to:</p>
                    <div className="mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-100 dark:border-blue-800 text-center font-bold text-blue-700 dark:text-blue-300 font-mono text-sm shadow-inner">
                      AVG = SUM(col) / COUNT(col)
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider">Question:</span>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2">What if all values are NULL?</p>
                  <div className="px-2 border-l-4 border-indigo-400 text-indigo-800 dark:text-indigo-400 font-bold text-sm">
                    AVG implicitly returns NULL.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlAvg;