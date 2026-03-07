import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, 
  AlertOctagon, Link2, GitBranch, AlignRight, ShieldAlert, 
  Building2, Filter, SortAsc, Hash, Calculator, ListEnd,
  Tag, Activity
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-emerald-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

// Helper for rendering tables
const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4">
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

const SqlSelect: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL SELECT
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The foundational command to fetch data from a database table.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> What is SQL SELECT?
          </h2>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl mb-6">
            <span className="font-bold text-emerald-800 dark:text-emerald-400 text-lg">
              SELECT = Fetch data from a database table
            </span>
            <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
              The SQL SELECT statement is used to retrieve data from one or more tables in a database.
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> View stored data</div>
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Filter className="w-4 h-4 mr-2 text-blue-500" /> Filter records</div>
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><SortAsc className="w-4 h-4 mr-2 text-indigo-500" /> Sort results</div>
            <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Calculator className="w-4 h-4 mr-2 text-purple-500" /> Perform calculations</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-teal-800/50">
          <div className="absolute top-0 right-0 -m-6 text-teal-500/20 transform"><Terminal className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-emerald-400" /> Basic Syntax
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-bold text-teal-50">
            <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table_name;`} />
            <ul className="space-y-3 font-mono text-xs text-teal-300 bg-black/30 p-5 rounded-xl border border-teal-800/40">
                <li className="flex"><span className="text-emerald-400 w-20">SELECT</span> <span className="text-white">&rarr; Specifies columns to retrieve</span></li>
                <li className="flex"><span className="text-sky-400 w-20">FROM</span> <span className="text-white">&rarr; Specifies the table</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Example - Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Table2 className="text-emerald-500 w-8 h-8 mr-3" /> Practical Example Setup
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center"><Hash className="w-5 h-5 mr-2 text-emerald-500" /> Step 1 & 2: Create & Insert</h3>
                <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n  StudentID INT,\n  Name VARCHAR(50),\n  Marks INT,\n  City VARCHAR(50)\n);\n\nINSERT INTO Students VALUES\n(1,'Arun',85,'Chennai'),\n(2,'Divya',92,'Madurai'),\n(3,'Kiran',40,'Chennai'),\n(4,'Meena',70,'Coimbatore');`} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center"><Table2 className="w-5 h-5 mr-2 text-indigo-500" /> Students Table Visualization</h3>
              <ResultTable 
                headers={['StudentID', 'Name', 'Marks', 'City']}
                rows={[
                  [1, 'Arun', 85, 'Chennai'],
                  [2, 'Divya', 92, 'Madurai'],
                  [3, 'Kiran', 40, 'Chennai'],
                  [4, 'Meena', 70, 'Coimbatore']
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Select Variations Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          SELECT Variations Masterclass
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 3️⃣ SELECT All Columns */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 p-1.5 rounded-lg mr-3 text-sm">3️⃣</span> SELECT All Columns
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">To retrieve all columns, use <code className="text-emerald-500 font-bold px-1">*</code>.</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students;`} />
            <ResultTable 
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                [1, 'Arun', 85, 'Chennai'],
                [2, 'Divya', 92, 'Madurai'],
                [3, 'Kiran', 40, 'Chennai'],
                [4, 'Meena', 70, 'Coimbatore']
              ]}
            />
          </div>

          {/* 4️⃣ SELECT Specific Columns */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 p-1.5 rounded-lg mr-3 text-sm">4️⃣</span> SELECT Specific Columns
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Instead of retrieving all columns, select only specific ones.</p>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nFROM Students;`} />
            <ResultTable 
              headers={['Name', 'Marks']}
              rows={[
                ['Arun', 85],
                ['Divya', 92],
                ['Kiran', 40],
                ['Meena', 70]
              ]}
            />
          </div>

          {/* 5️⃣ SELECT with WHERE */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 p-1.5 rounded-lg mr-3 text-sm">5️⃣</span> SELECT with WHERE Clause
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium"><code className="font-bold text-purple-500">WHERE</code> filters records based on conditions. Example: Marks &gt; 80.</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nWHERE Marks > 80;`} />
            <ResultTable 
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                [1, 'Arun', 85, 'Chennai'],
                [2, 'Divya', 92, 'Madurai']
              ]}
            />
          </div>

          {/* 6️⃣ SELECT with ORDER BY */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 p-1.5 rounded-lg mr-3 text-sm">6️⃣</span> SELECT with ORDER BY
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Sort results ascending (<code className="font-bold text-indigo-500">ASC</code>) or descending (<code className="font-bold text-indigo-500">DESC</code>).</p>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nFROM Students\nORDER BY Marks DESC;`} />
            <ResultTable 
              headers={['Name', 'Marks']}
              rows={[
                ['Divya', 92],
                ['Arun', 85],
                ['Meena', 70],
                ['Kiran', 40]
              ]}
            />
          </div>

          {/* 7️⃣ SELECT DISTINCT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 p-1.5 rounded-lg mr-3 text-sm">7️⃣</span> SELECT DISTINCT
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Removes duplicate values. E.g., unique cities.</p>
            <CodeSnippetBlock codeSnippet={`SELECT DISTINCT City\nFROM Students;`} />
            <ResultTable 
              headers={['City']}
              rows={[
                ['Chennai'],
                ['Madurai'],
                ['Coimbatore']
              ]}
            />
          </div>

          {/* 8️⃣ SELECT with Calculations */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 p-1.5 rounded-lg mr-3 text-sm">8️⃣</span> SELECT with Calculations
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">SQL can perform inline calculations directly in the SELECT.</p>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Marks + 5 AS BonusMarks\nFROM Students;`} />
            <ResultTable 
              headers={['Name', 'BonusMarks']}
              rows={[
                ['Arun', 90],
                ['Divya', 97],
                ['Kiran', 45],
                ['Meena', 75]
              ]}
            />
          </div>

          {/* 9️⃣ SELECT with LIMIT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-sky-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 p-1.5 rounded-lg mr-3 text-sm">9️⃣</span> SELECT with LIMIT (MySQL)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Return a limited number of rows.</p>
            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Students\nLIMIT 2;`} />
            <ResultTable 
              headers={['StudentID', 'Name', 'Marks', 'City']}
              rows={[
                [1, 'Arun', 85, 'Chennai'],
                [2, 'Divya', 92, 'Madurai']
              ]}
            />
          </div>

          {/* 🔟 SELECT with Aliases */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-fuchsia-400 transition-colors">
            <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900 dark:text-white">
              <span className="bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 p-1.5 rounded-lg mr-3 text-sm">🔟</span> SELECT with Aliases
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Aliases (<code className="font-bold text-fuchsia-500">AS</code>) rename columns temporarily for the output.</p>
            <CodeSnippetBlock codeSnippet={`SELECT Name AS StudentName, Marks AS Score\nFROM Students;`} />
            <ResultTable 
              headers={['StudentName', 'Score']}
              rows={[
                ['Arun', 85],
                ['Divya', 92],
                ['Kiran', 40],
                ['Meena', 70]
              ]}
            />
          </div>
        </div>
      </section>

      {/* Execution Order & Real-World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800">
          <div className="absolute -top-10 -right-10 p-8 opacity-10 text-indigo-400"><Activity className="w-64 h-64" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Activity className="w-6 h-6 mr-3 text-indigo-400" /> SQL Query Execution Order
          </h2>
          <p className="text-indigo-200 mb-6 font-medium text-sm relative z-10">SQL processes queries in this specific order (Not the order they are written!):</p>
          
          <div className="bg-black/40 rounded-xl border border-indigo-500/30 overflow-hidden relative z-10 mb-6">
            <table className="w-full text-sm text-left font-mono">
              <thead className="bg-indigo-950/50 text-indigo-300 border-b border-indigo-500/30">
                <tr><th className="px-4 py-2">Step</th><th className="px-4 py-2">Clause</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 hover:bg-white/5"><td className="px-4 py-2 text-gray-400">1</td><td className="px-4 py-2 font-bold text-blue-400">FROM</td></tr>
                <tr className="border-b border-gray-800/50 hover:bg-white/5"><td className="px-4 py-2 text-gray-400">2</td><td className="px-4 py-2 font-bold text-purple-400">WHERE</td></tr>
                <tr className="border-b border-gray-800/50 hover:bg-white/5"><td className="px-4 py-2 text-gray-400">3</td><td className="px-4 py-2 font-bold text-teal-400">GROUP BY</td></tr>
                <tr className="border-b border-gray-800/50 hover:bg-white/5"><td className="px-4 py-2 text-gray-400">4</td><td className="px-4 py-2 font-bold text-amber-400">HAVING</td></tr>
                <tr className="border-b border-gray-800/50 hover:bg-white/5"><td className="px-4 py-2 text-gray-400">5</td><td className="px-4 py-2 font-bold text-emerald-400">SELECT</td></tr>
                <tr className="hover:bg-white/5"><td className="px-4 py-2 text-gray-400">6</td><td className="px-4 py-2 font-bold text-indigo-400">ORDER BY</td></tr>
              </tbody>
            </table>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold text-indigo-300 mb-2 uppercase tracking-widest">Example Query</p>
            <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nFROM Students\nWHERE Marks > 50\nORDER BY Marks DESC;`} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors flex flex-col justify-center">
            <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Building2 className="w-6 h-6 mr-3 text-emerald-500" /> Real-World Example
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-4">In your blood bank database system:</p>
            
            <div className="space-y-4 mb-6">
                <CodeSnippetBlock codeSnippet={`SELECT Name, BloodGroup, City\nFROM Donors\nWHERE BloodGroup = 'O+';`} />
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl text-center">
                <span className="font-bold text-emerald-800 dark:text-emerald-400 text-lg">
                    This retrieves all O+ donors.
                </span>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-emerald-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-400" /> 15+ Years SQL Experience
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 Developer Tips</p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-emerald-400 font-bold"><Target className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Avoid using SELECT * in production</h4>
                <div className="space-y-2 mb-3">
                  <div className="bg-rose-950/30 border border-rose-900/50 p-2 rounded text-xs text-rose-300 font-mono"><strong className="text-rose-400">Bad:</strong> SELECT * FROM Students;</div>
                  <div className="bg-emerald-950/30 border border-emerald-900/50 p-2 rounded text-xs text-emerald-300 font-mono"><strong className="text-emerald-400">Better:</strong> SELECT Name, Marks FROM Students;</div>
                </div>
                <p className="text-gray-400 font-medium text-xs">Improves performance significantly by only fetching what's needed.</p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-amber-400 font-bold"><Filter className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Always use WHERE when needed</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed">
                   Prevents retrieving unnecessary data and minimizes memory load on your application server.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-indigo-400 font-bold"><Activity className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use DISTINCT carefully</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed">
                  It may slow down queries on large datasets because the database engine must sort and evaluate the entire result set to remove duplicates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-blue-400 font-bold"><Tag className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use clear column names</h4>
                <p className="text-gray-400 font-medium text-sm mb-2 font-mono bg-black/40 p-2 rounded inline-block">
                  SELECT Name, Marks
                </p>
                <p className="text-gray-400 font-medium text-xs leading-relaxed">
                   Instead of confusing expressions. Clear aliases help maintainability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSelect;