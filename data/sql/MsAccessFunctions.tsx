import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, FunctionSquare, FileText, Calendar, Hash, CheckCircle, Navigation, LayoutGrid, Type } from 'lucide-react';

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

const MsAccessFunctions: React.FC = () => {
  const [inputText, setInputText] = useState('Arjun kumar');
  const [inputMarks, setInputMarks] = useState(80);
  const [activeOp, setActiveOp] = useState('UCase');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const calculate = (op: string) => {
    setActiveOp(op);
    let res: string | number | boolean;
    let code: string;

    switch (op) {
      case 'UCase':
        res = inputText.toUpperCase();
        code = `SELECT UCase('${inputText}') AS UpperName; \n-- Result: '${res}'`;
        break;
      case 'Left':
        res = inputText.substring(0, 3);
        code = `SELECT Left('${inputText}', 3) AS ShortName; \n-- Result: '${res}'`;
        break;
      case 'Len':
        res = inputText.length;
        code = `SELECT Len('${inputText}') AS NameLength; \n-- Result: ${res}`;
        break;
      case 'IIf':
        res = inputMarks >= 50 ? 'Pass' : 'Fail';
        code = `SELECT IIf(${inputMarks} >= 50, 'Pass', 'Fail') AS Result; \n-- Result: '${res}'`;
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
          What Are MS Access Functions?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          MS Access Functions are built-in or user-defined operations that perform calculations, manipulate data, validate inputs, or return specific values inside queries, forms, and reports.
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
              In simple words:
              <strong className="text-blue-600 dark:text-blue-400 block mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">A function takes input → processes it → returns output.</strong>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              2️⃣ Why Functions Are Important?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">In real-world database systems, you don't just store data. You analyze, format, calculate, and validate data. Functions help you:</p>
            <ul className="list-none space-y-2">
              {['Calculate totals', 'Format dates', 'Handle null values', 'Create dynamic reports', 'Validate form inputs'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
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
            Function Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Input Values
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
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Marks</label>
                  <input
                    type="number"
                    value={inputMarks}
                    onChange={(e) => setInputMarks(Number(e.target.value))}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select Function</h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { op: 'UCase', icon: Type, label: 'UCase' },
                  { op: 'Left', icon: Type, label: 'Left' },
                  { op: 'Len', icon: Hash, label: 'Len' },
                  { op: 'IIf', icon: LayoutGrid, label: 'IIf' }
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
                <div className="text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">
                  {activeOp === 'UCase' ? inputText.toUpperCase() :
                    activeOp === 'Left' ? inputText.substring(0, 3) :
                      activeOp === 'Len' ? inputText.length :
                        (inputMarks >= 50 ? 'Pass' : 'Fail')}
                </div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2">
                  Result of {activeOp}()
                </div>
              </div>

              {/* Console Output Simulator */}
              <div className="mt-6 bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner w-full">
                <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Query Output Simulator</div>
                {consoleOutput.length === 0 ? (
                  <span className="text-gray-600 italic">Select a function operation...</span>
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

      {/* 3️⃣ Types of MS Access Functions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          3️⃣ Types of MS Access Functions
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">We'll divide them into 6 major categories:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {['🧮 Aggregate Functions', '🔤 Text Functions', '📅 Date & Time Functions', '🔢 Numeric Functions', '🔍 Logical Functions', '🔁 Conversion Functions'].map((cat, i) => (
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
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used with <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">GROUP BY</code> to calculate summary values.</p>

          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr><th className="px-6 py-3">Function</th><th className="px-6 py-3">Purpose</th></tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">SUM()</td><td className="px-6 py-3">Adds values</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">AVG()</td><td className="px-6 py-3">Calculates average</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">COUNT()</td><td className="px-6 py-3">Counts records</td></tr>
                <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">MIN()</td><td className="px-6 py-3">Smallest value</td></tr>
                <tr><td className="px-6 py-3 font-medium">MAX()</td><td className="px-6 py-3">Largest value</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-6">
            <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">🧪 Example Table: Students</h4>
            <table className="w-full max-w-sm text-sm text-left">
              <thead><tr className="border-b border-blue-200 dark:border-blue-800"><th>StudentID</th><th>Name</th><th>Marks</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>Arjun</td><td>80</td></tr>
                <tr><td>2</td><td>Meena</td><td>90</td></tr>
                <tr><td>3</td><td>Ravi</td><td>70</td></tr>
              </tbody>
            </table>
          </div>

          <CodeSnippetBlock title="Example 1: Calculate Total Marks" codeSnippet={`SELECT SUM(Marks) AS TotalMarks\nFROM Students;\n\n-- ✅ Output: TotalMarks = 240`} />
          <CodeSnippetBlock title="Example 2: Average Marks" codeSnippet={`SELECT AVG(Marks) AS AverageMarks\nFROM Students;\n\n-- ✅ Output: AverageMarks = 80`} />

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400 space-y-2">
            <h4 className="font-bold flex items-center text-yellow-800 dark:text-yellow-300">
              <Lightbulb className="w-5 h-5 mr-2" /> Personal Tip (From Experience)
            </h4>
            <p className="text-gray-700 dark:text-gray-300">Always handle NULL values when using aggregate functions. If Marks column has NULL, <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">AVG()</code> ignores them silently.</p>
            <p className="text-gray-700 dark:text-gray-300">Use <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded font-mono">SELECT AVG(Nz(Marks,0)) FROM Students;</code> <br /> <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded font-mono">Nz()</code> replaces NULL with 0.</p>
          </div>
        </div>

        {/* 2. Text Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">2️⃣ 🔤</span> Text Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used to manipulate strings.</p>

          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-6 py-3">Function</th><th className="px-6 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">UCase()</td><td className="px-6 py-3">Converts to uppercase</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">LCase()</td><td className="px-6 py-3">Converts to lowercase</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">Left()</td><td className="px-6 py-3">Extract left characters</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">Right()</td><td className="px-6 py-3">Extract right characters</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">Mid()</td><td className="px-6 py-3">Extract middle text</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-6 py-3 font-medium">Len()</td><td className="px-6 py-3">Count characters</td></tr>
                  <tr><td className="px-6 py-3 font-medium">Trim()</td><td className="px-6 py-3">Remove spaces</td></tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              <CodeSnippetBlock title="Example: Convert Name to Uppercase" codeSnippet={`SELECT UCase(Name) AS UpperName\nFROM Students;\n\n-- ✅ Output: ARJUN, MEENA, RAVI`} />
              <CodeSnippetBlock title="Example: First 3 Characters" codeSnippet={`SELECT Left(Name,3) AS ShortName\nFROM Students;\n\n-- ✅ Output: Arj, Mee, Rav`} />

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold flex items-center text-blue-800 dark:text-blue-300 mb-2">
                  <Terminal className="w-5 h-5 mr-2" /> Developer Tip
                </h4>
                <p className="text-gray-700 dark:text-gray-300">If you're building login systems in Access, always use: <br /><code className="bg-blue-100 dark:bg-blue-800 px-1 rounded font-mono mt-1 block w-fit">WHERE UCase(Username) = UCase('admin')</code> <br />To avoid case sensitivity problems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Date & Time Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">3️⃣ 📅</span> Date & Time Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Very important in real-world projects.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Date()</td><td className="px-4 py-3">Current date</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Now()</td><td className="px-4 py-3">Current date & time</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">DateDiff()</td><td className="px-4 py-3">Difference between dates</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">DateAdd()</td><td className="px-4 py-3">Add days/months</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Year()</td><td className="px-4 py-3">Extract year</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Month()</td><td className="px-4 py-3">Extract month</td></tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              <CodeSnippetBlock title="Example: Current Date" codeSnippet={`SELECT Date() AS TodayDate;\n-- ✅ Output: 01-03-2026`} />
              <CodeSnippetBlock title="Example: Age Calculation" codeSnippet={`SELECT DateDiff("yyyy", DOB, Date()) AS Age\nFROM Students;`} />
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-bold flex items-center text-indigo-800 dark:text-indigo-300 mb-2">
              <FileText className="w-5 h-5 mr-2" /> Real-World Tip
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">For accurate age calculation, don't rely only on DateDiff. It may miscalculate if birthday hasn't occurred this year. Professional way:</p>
            <code className="bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded block font-mono text-sm">
              DateDiff("yyyy", DOB, Date()) - IIf(Format(DOB,"mmdd") {'>'} Format(Date(),"mmdd"),1,0)
            </code>
          </div>
        </div>

        {/* 4. Numeric Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">4️⃣ 🔢</span> Numeric Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used for mathematical operations.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Round()</td><td className="px-4 py-3">Round value</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Abs()</td><td className="px-4 py-3">Absolute value</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">Int()</td><td className="px-4 py-3">Integer part</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Sqr()</td><td className="px-4 py-3">Square root</td></tr>
                </tbody>
              </table>
            </div>

            <CodeSnippetBlock title="Example: Round Marks" codeSnippet={`SELECT Round(Marks,0) AS RoundedMarks\nFROM Students;`} />
          </div>
        </div>

        {/* 5. Logical Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">5️⃣ 🔍</span> Logical Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used for conditional logic.</p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
            <h4 className="font-bold text-xl mb-2">IIf() Function</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Very powerful in MS Access.</p>
            <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">📌 Syntax:</p>
            <code className="bg-gray-100 dark:bg-gray-700 p-2 rounded block font-mono text-sm mb-6 w-fit">IIf(condition, true_part, false_part)</code>

            <CodeSnippetBlock title="Example: Pass or Fail" codeSnippet={`SELECT Name,\nIIf(Marks >= 50, "Pass", "Fail") AS Result\nFROM Students;\n\n-- ✅ Output: Arjun (Pass), Meena (Pass), Ravi (Pass)`} />

            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border-l-4 border-teal-500 mt-6">
              <h4 className="font-bold flex items-center text-teal-800 dark:text-teal-300 mb-2">
                <Lightbulb className="w-5 h-5 mr-2" /> Advanced Tip
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Avoid deeply nested IIf(). Instead, create calculated fields in stages for readability.</p>
            </div>
          </div>
        </div>

        {/* 6. Conversion Functions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="mr-2">6️⃣ 🔁</span> Conversion Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Used to convert data types.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-fit">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr><th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CInt()</td><td className="px-4 py-3">Convert to Integer</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-3 font-medium">CStr()</td><td className="px-4 py-3">Convert to String</td></tr>
                  <tr><td className="px-4 py-3 font-medium">CDate()</td><td className="px-4 py-3">Convert to Date</td></tr>
                </tbody>
              </table>
            </div>

            <CodeSnippetBlock title="Example" codeSnippet={`SELECT CStr(Marks) AS MarksText\nFROM Students;`} />
          </div>
        </div>
      </section>

      {/* Advanced Concept & Best Practices */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">

        {/* Advanced UDF */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800/30">
          <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4 flex items-center">
            <FunctionSquare className="w-6 h-6 mr-2" />
            🧠 Advanced Concept (Important for Course Website)
          </h2>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">User Defined Function (UDF) in MS Access</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">You can create custom functions in VBA.</p>

          <div className="grid lg:grid-cols-2 gap-6">
            <CodeSnippetBlock title="VBA Code" language="vb" codeSnippet={`Public Function CalculateGrade(Marks As Integer) As String\n    If Marks >= 90 Then\n        CalculateGrade = "A"\n    ElseIf Marks >= 75 Then\n        CalculateGrade = "B"\n    Else\n        CalculateGrade = "C"\n    End If\nEnd Function`} />
            <CodeSnippetBlock title="Then use in query:" codeSnippet={`SELECT Name, CalculateGrade(Marks) AS Grade\nFROM Students;`} />
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center text-center justify-center">
            <span className="text-3xl mr-2">🎯</span> Best Practices <span className="text-lg font-normal text-gray-500 ml-2">(From 15+ Years Experience)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center">
                ✅ 1. Always Handle NULL
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Use <code className="bg-green-100 dark:bg-green-800/50 px-1 rounded">Nz()</code> frequently.</p>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center">
                ✅ 2. Avoid Complex Nested IIf
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Makes queries unreadable.</p>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center">
                ✅ 3. Use Aliases
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Improves report clarity:</p>
              <code className="bg-green-100 dark:bg-green-800/50 p-2 rounded block font-mono text-sm w-fit">SELECT SUM(Marks) AS TotalMarks</code>
            </div>

            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
              <h3 className="font-bold text-green-800 dark:text-green-400 mb-2 flex items-center">
                ✅ 4. Optimize Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Functions inside WHERE slow queries.</p>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-2 border-l-2 border-red-500">
                  <span className="text-red-700 dark:text-red-400 font-bold block mb-1">❌ Bad:</span>
                  <code className="text-sm">WHERE Year(OrderDate) = 2026</code>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-2 border-l-2 border-green-500">
                  <span className="text-green-700 dark:text-green-400 font-bold block mb-1">✅ Better:</span>
                  <code className="text-sm">WHERE OrderDate BETWEEN #01-01-2026# AND #12-31-2026#</code>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default MsAccessFunctions;