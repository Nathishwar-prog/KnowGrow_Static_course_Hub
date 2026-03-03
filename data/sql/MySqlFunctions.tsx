import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, FileText, Hash, CheckCircle, Type, LayoutGrid, AlertTriangle, ArrowRight, Server } from 'lucide-react';

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
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const MySqlFunctions: React.FC = () => {
  const [inputText, setInputText] = useState('Karthick');
  const [inputMarks, setInputMarks] = useState(85);
  const [activeOp, setActiveOp] = useState('UPPER');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const calculate = (op: string) => {
    setActiveOp(op);
    let res: string | number | boolean;
    let code: string;

    switch (op) {
      case 'UPPER':
        res = inputText.toUpperCase();
        code = `SELECT UPPER('${inputText}') AS UpperName; \n-- Result: '${res}'`;
        break;
      case 'LENGTH':
        res = inputText.length;
        code = `SELECT LENGTH('${inputText}') AS NameLength; \n-- Result: ${res}`;
        break;
      case 'CONCAT':
        res = `${inputText} scored ${inputMarks}`;
        code = `SELECT CONCAT('${inputText}', ' scored ', ${inputMarks}) AS Result; \n-- Result: '${res}'`;
        break;
      case 'IF':
        res = inputMarks >= 50 ? 'Pass' : 'Fail';
        code = `SELECT IF(${inputMarks} >= 50, 'Pass', 'Fail') AS Result; \n-- Result: '${res}'`;
        break;
      default:
        return;
    }

    setConsoleOutput([`> Executing: ${code.split('\n')[0]}`, `> Output: ${code.split('-- Result: ')[1]}`]);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
          <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What Are MySQL Functions?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          MySQL Functions are built-in operations that perform calculations, data manipulation, formatting, and logical processing inside SQL queries.
        </p>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
              In simple terms:
              <strong className="text-blue-600 dark:text-blue-400 block mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">A function takes input → processes it → returns output.</strong>
            </p>
            <div className="mt-4">
              <h4 className="font-bold text-sm text-gray-500 uppercase mb-2">Example:</h4>
              <CodeSnippetBlock codeSnippet="SELECT UPPER('karthick');\n\n-- Output:\n-- KARTHICK" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              2️⃣ Why Functions Are Important?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Without functions, SQL would only retrieve raw data. In real-world systems, functions bring data to life:</p>
            <ul className="list-none space-y-3">
              {[
                { domain: 'E-commerce', usage: 'Calculate totals' },
                { domain: 'Banking', usage: 'Compute interest' },
                { domain: 'HR', usage: 'Calculate age & salary' },
                { domain: 'Analytics', usage: 'Aggregate reports' },
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
                  <Server className="w-5 h-5 text-blue-500 mr-3 hidden sm:block" />
                  <span className="font-bold w-32">{item.domain}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                  <span className="text-gray-600 dark:text-gray-400">{item.usage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive SQL Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-blue-500" />
            Live SQL Function Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Data Inputs
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Student Name</label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Marks (0-100)</label>
                  <input
                    type="number"
                    value={inputMarks}
                    onChange={(e) => setInputMarks(Number(e.target.value))}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select Function to Test</h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { op: 'UPPER', icon: Type, label: 'UPPER()' },
                  { op: 'LENGTH', icon: Hash, label: 'LENGTH()' },
                  { op: 'CONCAT', icon: Type, label: 'CONCAT()' },
                  { op: 'IF', icon: LayoutGrid, label: 'IF()' }
                ].map((item) => (
                  <button
                    key={item.op}
                    onClick={() => calculate(item.op)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 ${activeOp === item.op
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-500'
                      }`}
                  >
                    <item.icon className="w-5 h-5 mb-1" />
                    <span className="text-xs font-bold">{item.op}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter break-all">
                  {activeOp === 'UPPER' ? inputText.toUpperCase() :
                    activeOp === 'LENGTH' ? inputText.length :
                      activeOp === 'CONCAT' ? `${inputText} scored ${inputMarks}` :
                        (inputMarks >= 50 ? 'Pass' : 'Fail')}
                </div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2">
                  Result of {activeOp}()
                </div>
              </div>

              {/* Console Output Simulator */}
              <div className="mt-6 bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner w-full">
                <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">MySQL Query Emulator</div>
                {consoleOutput.length === 0 ? (
                  <span className="text-gray-600 italic">Click a function to see the query & output...</span>
                ) : (
                  consoleOutput.map((line, i) => (
                    <div key={i} className="mb-1 text-green-400 animate-fade-in line-clamp-2">
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Types of MySQL Functions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          3️⃣ Types of MySQL Functions
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">MySQL functions are mainly divided into 6 categories:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {['🧮 Aggregate Functions', '🔤 String Functions', '🔢 Numeric Functions', '📅 Date & Time Functions', '🔁 Control Flow Functions', '🔄 Conversion Functions'].map((cat, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center text-center">
              {cat}
            </div>
          ))}
        </div>

        {/* 1. Aggregate Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">1️⃣ 🧮</span> Aggregate Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used to perform calculations on multiple rows.</p>

          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr><th className="px-6 py-3">Function</th><th className="px-6 py-3">Description</th></tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">SUM()</td><td className="px-6 py-3">Total value</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">AVG()</td><td className="px-6 py-3">Average value</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">COUNT()</td><td className="px-6 py-3">Number of rows</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">MIN()</td><td className="px-6 py-3">Smallest value</td></tr>
                <tr><td className="px-6 py-3 font-medium">MAX()</td><td className="px-6 py-3">Largest value</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-6">
            <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">🧪 Example Table: Students</h4>
            <table className="w-full max-w-sm text-sm text-left">
              <thead><tr className="border-b border-blue-200 dark:border-blue-800"><th>id</th><th>name</th><th>marks</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Arjun</td><td>80</td></tr>
                <tr><td>2</td><td>Meena</td><td>90</td></tr>
                <tr><td>3</td><td>Ravi</td><td>70</td></tr>
              </tbody>
            </table>
          </div>

          <CodeSnippetBlock title="Example 1: Total Marks" codeSnippet={`SELECT SUM(marks) AS TotalMarks\nFROM Students;\n\n-- ✅ Output: TotalMarks = 240`} />
          <CodeSnippetBlock title="Example 2: Average Marks" codeSnippet={`SELECT AVG(marks) AS AverageMarks\nFROM Students;\n\n-- ✅ Output: AverageMarks = 80.00`} />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400 space-y-2 mt-6">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-300">
              <Lightbulb className="w-5 h-5 mr-2" /> Developer Tip
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Always handle NULL values. If marks column has NULL:</p>
            <code className="bg-yellow-100 dark:bg-yellow-800/50 p-2 rounded block font-mono text-sm w-fit">SELECT AVG(IFNULL(marks,0)) FROM Students;</code>
          </div>
        </div>

        {/* 2. String Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">2️⃣ 🔤</span> String Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used to manipulate text data.</p>

          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-6 py-3">Function</th><th className="px-6 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">UPPER()</td><td className="px-6 py-3">Convert to uppercase</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">LOWER()</td><td className="px-6 py-3">Convert to lowercase</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">LENGTH()</td><td className="px-6 py-3">Count characters</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">CONCAT()</td><td className="px-6 py-3">Combine strings</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">SUBSTRING()</td><td className="px-6 py-3">Extract part of string</td></tr>
                  <tr><td className="px-6 py-3 font-medium">TRIM()</td><td className="px-6 py-3">Remove spaces</td></tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              <CodeSnippetBlock title="Example: Convert Name to Uppercase" codeSnippet={`SELECT UPPER(name) AS UpperName\nFROM Students;\n\n-- ✅ Output: ARJUN, MEENA, RAVI`} />
              <CodeSnippetBlock title="Example: Combine Name & Marks" codeSnippet={`SELECT CONCAT(name, ' scored ', marks) AS Result\nFROM Students;\n\n-- ✅ Output: Arjun scored 80, Meena scored 90, Ravi scored 70`} />

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border-l-4 border-indigo-500 mt-6">
                <h4 className="font-bold flex items-center text-indigo-800 dark:text-indigo-300 mb-2">
                  <FileText className="w-5 h-5 mr-2" /> Real-world Advice
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">If you build a login system:</p>
                <code className="bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded block font-mono text-sm mb-3 w-fit">WHERE LOWER(username) = LOWER('admin')</code>
                <p className="text-red-600 dark:text-red-400 text-sm font-bold flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  ⚠ Avoid using functions in WHERE for large tables (performance issue).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Numeric Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">3️⃣ 🔢</span> Numeric Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used for mathematical operations.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">ROUND()</td><td className="px-4 py-3">Round number</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CEIL()</td><td className="px-4 py-3">Round up</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">FLOOR()</td><td className="px-4 py-3">Round down</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">ABS()</td><td className="px-4 py-3">Absolute value</td></tr>
                  <tr><td className="px-4 py-3 font-medium">MOD()</td><td className="px-4 py-3">Modulus</td></tr>
                </tbody>
              </table>
            </div>

            <CodeSnippetBlock title="Example: ROUND" codeSnippet={`SELECT ROUND(89.567, 2);\n\n-- Output:\n-- 89.57`} />
          </div>
        </div>

        {/* 4. Date & Time Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">4️⃣ 📅</span> Date & Time Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Very important for real applications.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">NOW()</td><td className="px-4 py-3">Current date & time</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CURDATE()</td><td className="px-4 py-3">Current date</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">DATEDIFF()</td><td className="px-4 py-3">Difference between dates</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">DATE_ADD()</td><td className="px-4 py-3">Add date interval</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">YEAR()</td><td className="px-4 py-3">Extract year</td></tr>
                  <tr><td className="px-4 py-3 font-medium">MONTH()</td><td className="px-4 py-3">Extract month</td></tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              <CodeSnippetBlock title="Example: Current Date" codeSnippet={`SELECT CURDATE();\n\n-- Example Output:\n-- 2026-03-01`} />
              <CodeSnippetBlock title="Example: Age Calculation" codeSnippet={`SELECT name,\nTIMESTAMPDIFF(YEAR, dob, CURDATE()) AS Age\nFROM Students;`} />

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">
                  <Lightbulb className="w-5 h-5 mr-2" /> Professional Tip
                </h4>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Never store age in table.</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Store DOB and calculate dynamically. Why? Age changes every year.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Control Flow Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">5️⃣ 🔁</span> Control Flow Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">These work like IF conditions in programming.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">IF()</td><td className="px-4 py-3">Conditional logic</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CASE</td><td className="px-4 py-3">Multiple conditions</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">IFNULL()</td><td className="px-4 py-3">Replace NULL</td></tr>
                  <tr><td className="px-4 py-3 font-medium">COALESCE()</td><td className="px-4 py-3">First non-null value</td></tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              <CodeSnippetBlock title="Example: Pass or Fail" codeSnippet={`SELECT name,\nIF(marks >= 50, 'Pass', 'Fail') AS Result\nFROM Students;\n\n-- ✅ Output: Arjun (Pass), Meena (Pass), Ravi (Pass)`} />
              <CodeSnippetBlock title="Advanced Example: Grade System (CASE)" codeSnippet={`SELECT name,\nCASE\n    WHEN marks >= 90 THEN 'A'\n    WHEN marks >= 75 THEN 'B'\n    ELSE 'C'\nEND AS Grade\nFROM Students;`} />
            </div>
          </div>
        </div>

        {/* 6. Conversion Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">6️⃣ 🔄</span> Conversion Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used to convert data types.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CAST()</td><td className="px-4 py-3">Convert datatype</td></tr>
                  <tr><td className="px-4 py-3 font-medium">CONVERT()</td><td className="px-4 py-3">Convert datatype</td></tr>
                </tbody>
              </table>
            </div>

            <CodeSnippetBlock title="Example: CAST" codeSnippet={`SELECT CAST(marks AS CHAR)\nFROM Students;`} />
          </div>
        </div>
      </section>

      {/* Advanced Concept & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Real-World Project Example */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/30">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6 flex items-center">
            <Database className="w-6 h-6 mr-3" />
            🎯 Real-World Project Example
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-4">Imagine you build:</p>
              <ul className="space-y-3 mb-6">
                {['E-commerce system', 'Banking system', 'Hospital management'].map((sys, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-2 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {sys}
                  </li>
                ))}
              </ul>
              <p className="text-blue-800 dark:text-blue-400 font-bold italic">Functions are used in 80% of production queries.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 font-bold mb-4">You will use:</p>
              <ul className="space-y-3">
                <li className="flex items-center"><code className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono mr-3 w-28 shrink-0 text-center">SUM()</code> <span className="text-sm text-gray-600 dark:text-gray-400">→ total bill</span></li>
                <li className="flex items-center"><code className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono mr-3 w-28 shrink-0 text-center">COUNT()</code> <span className="text-sm text-gray-600 dark:text-gray-400">→ total users</span></li>
                <li className="flex items-center"><code className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono mr-3 w-28 shrink-0 text-center">DATE_ADD()</code> <span className="text-sm text-gray-600 dark:text-gray-400">→ subscription expiry</span></li>
                <li className="flex items-center"><code className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono mr-3 w-28 shrink-0 text-center">CASE</code> <span className="text-sm text-gray-600 dark:text-gray-400">→ grade or status</span></li>
                <li className="flex items-center"><code className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono mr-3 w-28 shrink-0 text-center">IFNULL()</code> <span className="text-sm text-gray-600 dark:text-gray-400">→ avoid null errors</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center text-center justify-center">
            <span className="text-3xl mr-2">⚡</span> Performance Tips <span className="text-sm font-normal text-gray-500 ml-2">(Very Important for Your Website Content)</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 italic">After 15+ years experience, here are key mistakes beginners make:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
              <h3 className="font-bold text-red-800 dark:text-red-400 mb-4 flex items-center">
                ❌ Avoid Functions in WHERE (Bad Practice)
              </h3>
              <CodeSnippetBlock language="sql" codeSnippet={`SELECT * FROM orders\nWHERE YEAR(order_date) = 2026;`} />
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/40 rounded text-red-800 dark:text-red-300 text-sm font-medium">
                This prevents index usage.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-4 flex items-center">
                ✅ Better Version
              </h3>
              <CodeSnippetBlock language="sql" codeSnippet={`SELECT * FROM orders\nWHERE order_date BETWEEN '2026-01-01' AND '2026-12-31';`} />
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/40 rounded text-green-800 dark:text-green-300 text-sm font-medium">
                Much faster for large databases.
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default MySqlFunctions;