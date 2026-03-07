import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, AlertTriangle, Play, LayoutGrid,
  Calculator, Type, Hash, Calendar, Settings, Code2, 
  Stethoscope, ShieldCheck, Search
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-indigo-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm w-full">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => (
               <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SqlServerFunctions: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Server Functions
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Built-in operations that take input values, perform a specific task, and return a result dynamically.
        </p>
      </header>

      {/* Intro Definition */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-indigo-500" /> What are SQL Server Functions?
          </h2>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl mb-6 shadow-inner">
            <span className="font-bold text-indigo-800 dark:text-indigo-400 text-lg">
              Functions process data and return a value.
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Calculator className="w-4 h-4 mr-2 text-sky-500" /> Performing calculations</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><LayoutGrid className="w-4 h-4 mr-2 text-fuchsia-500" /> Formatting data</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Type className="w-4 h-4 mr-2 text-emerald-500" /> Working with text</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Calendar className="w-4 h-4 mr-2 text-amber-500" /> Processing dates and times</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/20 transform"><Code2 className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-emerald-400" /> 2️⃣ Types of Functions
          </h2>
          <div className="relative z-10 w-full">
            <ResultTable 
                headers={['Function Type', 'Core Purpose']}
                rows={[
                    [<strong className="text-indigo-300">Aggregate</strong>, 'Perform calculations on groups of rows'],
                    [<strong className="text-sky-300">String</strong>, 'Work with text data strings'],
                    [<strong className="text-emerald-300">Numeric</strong>, 'Perform mathematical operations'],
                    [<strong className="text-amber-300">Date</strong>, 'Work with dates and time formatting'],
                    [<strong className="text-fuchsia-300">System</strong>, 'Provide system database information']
                ]}
            />
          </div>
        </div>
      </section>

      {/* 3. Aggregate */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
            <Calculator className="w-8 h-8 mr-3 text-indigo-500" /> 3️⃣ Aggregate Functions
        </h2>
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Aggregate functions perform calculations on multiple rows and logically return a single output value.</p>
                <ResultTable 
                    headers={['Function', 'Description']}
                    rows={[
                        [<strong className="font-mono text-indigo-600 dark:text-indigo-400">COUNT()</strong>, 'Counts total rows'],
                        [<strong className="font-mono text-indigo-600 dark:text-indigo-400">SUM()</strong>, 'Total accumulated sum of values'],
                        [<strong className="font-mono text-indigo-600 dark:text-indigo-400">AVG()</strong>, 'Mathematical average mean value'],
                        [<strong className="font-mono text-indigo-600 dark:text-indigo-400">MIN()</strong>, 'Absolute minimum value'],
                        [<strong className="font-mono text-indigo-600 dark:text-indigo-400">MAX()</strong>, 'Absolute maximum value']
                    ]}
                />
                <div className="mt-8">
                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center"><Table2 className="w-4 h-4 mr-2 text-indigo-500"/> Example Example Table</h4>
                    <ResultTable 
                        headers={['EmployeeID', 'Name', 'Salary']}
                        rows={[
                            [1, 'Arun', 50000],
                            [2, 'Divya', 45000],
                            [3, 'Ravi', 60000]
                        ]}
                    />
                </div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
               <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                   <h4 className="font-black text-indigo-800 dark:text-indigo-300 mb-4 font-mono">Example: COUNT()</h4>
                   <CodeSnippetBlock codeSnippet={`SELECT COUNT(*) \nFROM Employees;`} />
                   <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                       <ResultTable headers={['COUNT']} rows={[[3]]} />
                   </div>
               </div>
               <div className="bg-sky-50 dark:bg-sky-900/10 p-6 rounded-2xl border border-sky-100 dark:border-sky-800/30">
                   <h4 className="font-black text-sky-800 dark:text-sky-300 mb-4 font-mono">Example: SUM()</h4>
                   <CodeSnippetBlock codeSnippet={`SELECT SUM(Salary)\nFROM Employees;`} />
                   <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                       <ResultTable headers={['SUM']} rows={[[155000]]} />
                   </div>
               </div>
               <div className="bg-fuchsia-50 dark:bg-fuchsia-900/10 p-6 rounded-2xl border border-fuchsia-100 dark:border-fuchsia-800/30 sm:col-span-2">
                   <h4 className="font-black text-fuchsia-800 dark:text-fuchsia-300 mb-4 font-mono">Example: AVG()</h4>
                   <div className="grid md:grid-cols-2 gap-4">
                       <CodeSnippetBlock codeSnippet={`SELECT AVG(Salary)\nFROM Employees;`} />
                       <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-center">
                           <ResultTable headers={['AVG']} rows={[[51666]]} />
                       </div>
                   </div>
               </div>
            </div>
        </div>
      </section>

      {/* Grid for String & Numeric & Date & System */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        
        {/* String Functions */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                <Type className="w-6 h-6 mr-3 text-emerald-500" /> 4️⃣ String Functions
            </h2>
             <ResultTable 
                headers={['Function', 'Description']}
                rows={[
                    [<strong className="font-mono text-emerald-600 dark:text-emerald-400">LEN()</strong>, 'Length of string'],
                    [<strong className="font-mono text-emerald-600 dark:text-emerald-400">UPPER()</strong>, 'Convert to uppercase'],
                    [<strong className="font-mono text-emerald-600 dark:text-emerald-400">LOWER()</strong>, 'Convert to lowercase'],
                    [<strong className="font-mono text-emerald-600 dark:text-emerald-400">SUBSTRING()</strong>, 'Extract part of string'],
                    [<strong className="font-mono text-emerald-600 dark:text-emerald-400">REPLACE()</strong>, 'Replace text dynamically']
                ]}
            />
            <div className="mt-6 space-y-4">
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-emerald-500 mb-2">LEN()</p>
                   <div className="flex items-center gap-4"><div className="flex-1"><CodeSnippetBlock codeSnippet={`SELECT LEN('Database');`} /></div><div className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-6 rounded-xl font-mono font-bold border border-emerald-100 dark:border-emerald-800/30">8</div></div>
               </div>
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-emerald-500 mb-2">UPPER()</p>
                   <div className="flex items-center gap-4"><div className="flex-1"><CodeSnippetBlock codeSnippet={`SELECT UPPER('sql server');`} /></div><div className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-6 rounded-xl font-mono font-bold border border-emerald-100 dark:border-emerald-800/30">SQL SERVER</div></div>
               </div>
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-emerald-500 mb-2">SUBSTRING()</p>
                   <div className="flex items-center gap-4"><div className="flex-1"><CodeSnippetBlock codeSnippet={`SELECT SUBSTRING('Database',1,4);`} /></div><div className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-6 rounded-xl font-mono font-bold border border-emerald-100 dark:border-emerald-800/30">Data</div></div>
               </div>
            </div>
        </div>

        {/* Numeric Functions */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                <Hash className="w-6 h-6 mr-3 text-sky-500" /> 5️⃣ Numeric Functions
            </h2>
             <ResultTable 
                headers={['Function', 'Description']}
                rows={[
                    [<strong className="font-mono text-sky-600 dark:text-sky-400">ROUND()</strong>, 'Rounds numbers'],
                    [<strong className="font-mono text-sky-600 dark:text-sky-400">CEILING()</strong>, 'Rounds logically up'],
                    [<strong className="font-mono text-sky-600 dark:text-sky-400">FLOOR()</strong>, 'Rounds logically down'],
                    [<strong className="font-mono text-sky-600 dark:text-sky-400">ABS()</strong>, 'Absolute positive value']
                ]}
            />
            <div className="mt-6 space-y-4">
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-sky-500 mb-2">ROUND()</p>
                   <div className="flex items-center gap-4"><div className="flex-1"><CodeSnippetBlock codeSnippet={`SELECT ROUND(45.678,2);`} /></div><div className="bg-sky-50 dark:bg-sky-900/20 px-4 py-6 rounded-xl font-mono font-bold border border-sky-100 dark:border-sky-800/30">45.68</div></div>
               </div>
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-sky-500 mb-2">ABS()</p>
                   <div className="flex items-center gap-4"><div className="flex-1"><CodeSnippetBlock codeSnippet={`SELECT ABS(-25);`} /></div><div className="bg-sky-50 dark:bg-sky-900/20 px-4 py-6 rounded-xl font-mono font-bold border border-sky-100 dark:border-sky-800/30">25</div></div>
               </div>
            </div>
        </div>

        {/* Date Functions */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                <Calendar className="w-6 h-6 mr-3 text-amber-500" /> 6️⃣ Date Functions
            </h2>
             <ResultTable 
                headers={['Function', 'Description']}
                rows={[
                    [<strong className="font-mono text-amber-600 dark:text-amber-400">GETDATE()</strong>, 'Current date and time'],
                    [<strong className="font-mono text-amber-600 dark:text-amber-400">DATEADD()</strong>, 'Add date interval'],
                    [<strong className="font-mono text-amber-600 dark:text-amber-400">DATEDIFF()</strong>, 'Difference between dates'],
                    [<strong className="font-mono text-amber-600 dark:text-amber-400">FORMAT()</strong>, 'Format date styling']
                ]}
            />
            <div className="mt-6 space-y-4">
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-amber-500 mb-2">GETDATE()</p>
                   <CodeSnippetBlock codeSnippet={`SELECT GETDATE();`} />
                   <div className="bg-amber-50 dark:bg-amber-900/20 px-4 py-3 rounded-xl font-mono font-bold border border-amber-100 dark:border-amber-800/30 text-center">2026-03-07 20:35:00</div>
               </div>
               <div>
                   <p className="font-bold text-xs uppercase tracking-widest text-amber-500 mb-2">DATEDIFF()</p>
                   <CodeSnippetBlock codeSnippet={`SELECT DATEDIFF(day,'2024-01-01','2024-01-10');`} />
                   <div className="bg-amber-50 dark:bg-amber-900/20 px-4 py-3 rounded-xl font-mono font-bold border border-amber-100 dark:border-amber-800/30 text-center">9</div>
               </div>
            </div>
        </div>
        
        {/* System Functions */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
            <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                <Settings className="w-6 h-6 mr-3 text-fuchsia-500" /> 7️⃣ System Functions
            </h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Functions returning core information precisely about the database or server.</p>
             <ResultTable 
                headers={['Function', 'Description']}
                rows={[
                    [<strong className="font-mono text-fuchsia-600 dark:text-fuchsia-400">@@VERSION</strong>, 'SQL Server version'],
                    [<strong className="font-mono text-fuchsia-600 dark:text-fuchsia-400">DB_NAME()</strong>, 'Current database context'],
                    [<strong className="font-mono text-fuchsia-600 dark:text-fuchsia-400">HOST_NAME()</strong>, 'Client machine networking name']
                ]}
            />
            <div className="mt-auto">
                <CodeSnippetBlock title="Get Instance Engine Details" codeSnippet={`SELECT @@VERSION;`} />
                <p className="text-xs text-center font-bold text-gray-500">This rapidly shows the installed SQL Server version context.</p>
            </div>
        </div>
      </section>

      {/* UDF SECTION */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 p-8 lg:p-12 rounded-3xl shadow-xl border border-indigo-800 relative overflow-hidden">
             <div className="absolute opacity-10 -right-10 -bottom-10"><Code2 className="w-64 h-64 text-indigo-400" /></div>
             <h2 className="text-3xl font-black text-white mb-6 flex items-center border-b border-indigo-500/30 pb-4 relative z-10">
                <Code2 className="w-8 h-8 mr-3 text-indigo-400" /> 8️⃣ User-Defined Functions (UDF)
             </h2>
             <p className="text-indigo-200 font-medium mb-8 text-lg relative z-10">Advanced developers can dynamically entirely create their own custom structural functions.</p>
             
             <div className="grid lg:grid-cols-2 gap-8 relative z-10 items-center">
                 <div>
                     <h4 className="font-bold text-white mb-3">1. Creation Syntax</h4>
                     <CodeSnippetBlock codeSnippet={`CREATE FUNCTION AddNumbers\n(@a INT, @b INT)\nRETURNS INT\nAS\nBEGIN\n    RETURN @a + @b\nEND;`} />
                 </div>
                 <div className="bg-black/30 p-6 rounded-2xl border border-indigo-500/30 drop-shadow-2xl">
                     <h4 className="font-bold text-white mb-3">2. Execution Usage</h4>
                     <CodeSnippetBlock codeSnippet={`SELECT dbo.AddNumbers(5,10);`} />
                     <div className="flex items-center gap-4 bg-indigo-950/40 border border-indigo-500/30 p-4 rounded-xl">
                        <span className="text-xs uppercase font-bold text-indigo-400 tracking-widest">Result:</span>
                        <div className="flex-1 text-center font-black text-xl text-white font-mono">15</div>
                     </div>
                 </div>
             </div>
        </div>
      </section>

      {/* Real-World Use Case */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <Briefcase className="w-6 h-6 mr-3 text-emerald-500" /> 🧩 Real-World Example
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">Core functions massively help create analytical reports and analytics rapidly natively.</p>
            
            <div className="space-y-6">
                <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                    <p className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 text-sm">Calculate Total Salary exactly specifically matching the IT department boundary:</p>
                    <CodeSnippetBlock codeSnippet={`SELECT SUM(Salary)\nFROM Employees\nWHERE Department='IT';`} />
                </div>
                
                <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                    <p className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 text-sm">Identify Average Marks intelligently mapping the Student system database framework:</p>
                    <CodeSnippetBlock codeSnippet={`SELECT AVG(Marks)\nFROM Students;`} />
                </div>
            </div>
        </div>
         
         <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white flex flex-col">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-indigo-500">
            <Target className="w-48 h-48" />
          </div>

          <h2 className="text-2xl font-black text-white mb-2 relative z-10 flex items-center">
            <Database className="w-6 h-6 mr-3 text-indigo-400" /> Developer Tips
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 15+ Years Experience</p>

          <div className="space-y-4 relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar">
             <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 mt-0.5 text-indigo-400"><Check className="w-4 h-4" /></div>
                <div className="w-full">
                   <h4 className="font-bold text-gray-100 text-sm mb-1">Use aggregate bounds exclusively for reports</h4>
                   <pre className="bg-black text-[10px] text-gray-300 p-2 rounded border border-gray-700 mt-2 overflow-x-auto">
<code className="block">SELECT Department, AVG(Salary){'\n'}FROM Employees{'\n'}GROUP BY Department;</code></pre>
                </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 mt-0.5 text-rose-400"><AlertTriangle className="w-4 h-4" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 text-sm mb-1">Avoid functions strictly explicitly on indexed columns</h4>
                   <p className="text-gray-400 text-xs font-medium">Wrap using functions heavily blindly inherently negatively ruins indexed search plans slowing system queries deeply.</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 mt-0.5 text-emerald-400"><Zap className="w-4 h-4" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 text-sm mb-1">Prefer native built-in functions where possible</h4>
                   <p className="text-gray-400 text-xs font-medium">UDFs are slow. Standard Built-ins strictly dynamically compile and aggressively execute far better structurally optimized natively.</p>
                </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <div className="flex-shrink-0 mt-0.5 text-sky-400"><Database className="w-4 h-4" /></div>
                <div className="w-full">
                   <h4 className="font-bold text-gray-100 text-sm mb-1">Combine precisely accurately paired heavily with GROUP BY</h4>
                   <pre className="bg-black text-[10px] text-gray-300 p-2 rounded border border-gray-700 mt-2 overflow-x-auto">
<code className="block">SELECT City, COUNT(*){'\n'}FROM Customers{'\n'}GROUP BY City;</code></pre>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlServerFunctions;