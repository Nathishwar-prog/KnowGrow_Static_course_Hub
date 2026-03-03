import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, PlusCircle, Rows, Key, Shield, UserPlus, Layers, Settings, Type, ArrowDownToLine, RefreshCw, FileSymlink, Network } from 'lucide-react';

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

const SqlInsertIntoSelect: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <ArrowDownToLine className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL INSERT INTO SELECT
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The command to copy data from one table and rapidly insert it into another table natively on the database server.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <Layers className="w-6 h-6 mr-3 text-indigo-500" /> Basic Syntax
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-sm">
            You are essentially taking a <code>SELECT</code> query result and piping those rows directly into the destination table.
          </p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO target_table (column1, column2)\nSELECT column1, column2\nFROM source_table\nWHERE condition;`} />

          <div className="mt-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 p-4 rounded-xl flex items-start">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-orange-800 dark:text-orange-400 text-sm mb-1 uppercase tracking-wide">⚠ Important Execution Rules</p>
              <ul className="text-orange-900 dark:text-orange-200 text-xs font-medium space-y-1 ml-4 list-disc">
                <li>Data types must exact match mapping.</li>
                <li>Column array sequence order must map identically.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-900/30 flex flex-col justify-center hover:border-indigo-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-indigo-900 dark:text-indigo-400 mb-6 relative z-10">
            <RefreshCw className="w-6 h-6 mr-3 text-indigo-500" /> Execution Pipeline Order
          </h2>
          <div className="space-y-6 relative z-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-lg mr-4 shrink-0 shadow-lg">1</div>
              <div>
                <h3 className="font-bold text-indigo-900 dark:text-indigo-300 text-lg">SELECT Phase</h3>
                <p className="text-indigo-800 dark:text-indigo-400 text-sm">Engine first runs the inner query, fetching & filtering all matching standard rows.</p>
              </div>
            </div>
            <div className="flex justify-center -my-3">
              <ArrowDownToLine className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-lg mr-4 shrink-0 shadow-lg">2</div>
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg">INSERT Phase</h3>
                <p className="text-blue-800 dark:text-blue-400 text-sm">Engine bulk-copies that temporary matrix buffer into the target table on disk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Lab Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <DatabaseZap className="w-8 h-8 mr-3 text-violet-500" /> Practical Architecture Lab
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">Extracting IT department students into their own dedicated isolated table schema.</p>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
              <div className="absolute top-0 right-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-bl-xl text-xs font-bold text-gray-500">Step 1 & 2</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center"><Database className="w-5 h-5 mr-2 text-blue-500" /> Main Table Genesis</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    Name VARCHAR(50),\n    Department VARCHAR(50),\n    Marks INT\n);\n\nINSERT INTO Students VALUES (1, 'Karthick', 'IT', 85);\nINSERT INTO Students VALUES (2, 'Anjali', 'HR', 75);\nINSERT INTO Students VALUES (3, 'Rahul', 'IT', 90);\nINSERT INTO Students VALUES (4, 'Sneha', 'Finance', 70);`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
              <div className="absolute top-0 right-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-bl-xl text-xs font-bold text-gray-500">Step 4</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center"><Table2 className="w-5 h-5 mr-2 text-amber-500" /> Target DB Container Setup</h3>
              <p className="text-sm text-gray-500 mb-3">Creating a container purely for the extracted IT network.</p>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE IT_Students (\n    StudentID INT,\n    Name VARCHAR(50),\n    Marks INT\n);`} />
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-20"><Zap className="w-48 h-48 text-emerald-500" /></div>
            <div className="relative z-10">
              <div className="inline-block bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 border border-emerald-500/30">Step 5: The Action</div>
              <h3 className="text-2xl font-black text-white mb-6">Running The Query</h3>
              <CodeSnippetBlock codeSnippet={`INSERT INTO IT_Students (StudentID, Name, Marks)\nSELECT StudentID, Name, Marks\nFROM Students\nWHERE Department = 'IT';`} language="sql" />
            </div>

            <div className="bg-black/50 p-6 rounded-xl border border-gray-700 relative z-10 mt-6">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Final IT_Students Output Result</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300">
                  <thead className="text-xs text-gray-400 uppercase bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">StudentID</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3 rounded-tr-lg">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="px-4 py-3 font-mono">1</td>
                      <td className="px-4 py-3 font-medium text-white">Karthick</td>
                      <td className="px-4 py-3 text-emerald-400 font-bold">85</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono">3</td>
                      <td className="px-4 py-3 font-medium text-white">Rahul</td>
                      <td className="px-4 py-3 text-emerald-400 font-bold">90</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Capabilities Row */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm col-span-1 lg:col-span-1 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform">
          <h3 className="font-black text-lg text-gray-900 dark:text-white mb-3 flex items-center">
            <Copy className="w-5 h-5 mr-2 text-blue-500" /> Copying Entire Tables
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10">Creates an identical backup if structural schema identically matches.</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO Backup_Students\nSELECT * FROM Students;`} />
          <p className="text-xs text-red-500 font-bold mt-2">⚠ Both tables must have identical structure limits.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm col-span-1 lg:col-span-2 border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform">
          <h3 className="font-black text-lg text-gray-900 dark:text-white mb-3 flex items-center">
            <FileSymlink className="w-5 h-5 mr-2 text-purple-500" /> Data Transformation Injection
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10">You can run mathematical or string modifications actively while copying.</p>
          <CodeSnippetBlock codeSnippet={`INSERT INTO IT_Students (StudentID, Name, Marks)\nSELECT StudentID, Name, Marks + 5\nFROM Students\nWHERE Department = 'IT';`} />
          <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mt-2 bg-purple-50 dark:bg-purple-900/10 p-2 rounded inline-block">Adds 5 bonus marks mathematically on-the-fly inside memory while writing the rows.</p>
        </div>

      </section>

      {/* 15 Advanced Enterprise Pattern - JOINS */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-gray-900 text-white to-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-16 opacity-30 pointer-events-none text-indigo-500">
            <Network className="w-64 h-64" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-indigo-500/30 text-indigo-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6 border border-indigo-500/50">🎓 Advanced Application Pattern</div>
            <h2 className="text-3xl font-black mb-4 flex items-center">
              Inserting Using Advanced JOIN Intersections
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Highly common in enterprise application ecosystems to synthesize complex relationships into hard reporting ledger tables.
            </p>

            <div className="bg-black/60 p-2 rounded-xl border border-gray-700">
              <CodeSnippetBlock codeSnippet={`INSERT INTO HighScorers (StudentID, Name, Department)\nSELECT s.StudentID, s.Name, s.Department\nFROM Students s\nJOIN Results r ON s.StudentID = r.StudentID\nWHERE r.Score > 90;`} language="sql" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
              <AlertTriangle className="w-6 h-6 mr-3 text-red-500" /> Failure Matrix
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                <p className="font-bold text-red-700 dark:text-red-400 flex items-center mb-2"><Type className="w-4 h-4 mr-2" /> Column Limit Breakdown</p>
                <code className="text-xs bg-white dark:bg-black/50 p-2 rounded block">INSERT INTO IT_Students<br />SELECT Name FROM Students;</code>
                <p className="text-xs text-red-600 dark:text-red-300 mt-2 font-medium">ERROR: Column count target array mismatch.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                <p className="font-bold text-red-700 dark:text-red-400 flex items-center mb-1"><Target className="w-4 h-4 mr-2" /> Data Type Crash</p>
                <p className="text-xs text-red-600 dark:text-red-300 font-medium pt-1">Target strict INT mathematical columns absolutely cannot accept copied string VARCHAR character values.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                <p className="font-bold text-red-700 dark:text-red-400 flex items-center mb-1"><Key className="w-4 h-4 mr-2" /> Primary ID Collisions</p>
                <p className="text-xs text-red-600 dark:text-red-300 font-medium pt-1">If target table maintains unique ID arrays, pipeline duplicates will flag and kill the entire query transaction instantly.</p>
              </div>
            </div>
          </div>

          {/* Senior Arch */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center relative z-10">
              <Briefcase className="w-7 h-7 mr-3 text-emerald-500" /> 15+ Years Architecture Knowledge
            </h2>
            <div className="space-y-5 text-sm font-medium text-gray-600 dark:text-gray-400 relative z-10 mt-8">
              <div className="flex items-start">
                <span className="text-emerald-500 font-black text-xl mr-4 bg-emerald-50 dark:bg-emerald-900/20 w-8 h-8 flex items-center justify-center rounded-lg shadow-sm">1</span>
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-bold text-base mb-1">Never Base Logic on Structural Table Arrays</p>
                  <p>Always manually define targeted array mapping limits: <code className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-1 rounded text-xs">INSERT INTO X (a,b) SELECT a,b</code>. Do not run blind <code className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 px-1 rounded text-xs select-none">*</code> dumps which blow up applications when DBAs alter columns later on.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-500 font-black text-xl mr-4 bg-emerald-50 dark:bg-emerald-900/20 w-8 h-8 flex items-center justify-center rounded-lg shadow-sm">2</span>
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-bold text-base mb-1">Leverage Explicit Transactions for Heavy Vectors</p>
                  <code className="block bg-gray-900 text-emerald-300 p-2 rounded-lg text-xs mt-2 font-mono border border-gray-800">
                    BEGIN;<br />
                    INSERT INTO Archive_Systems SELECT ...<br />
                    COMMIT;
                  </code>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-500 font-black text-xl mr-4 bg-emerald-50 dark:bg-emerald-900/20 w-8 h-8 flex items-center justify-center rounded-lg shadow-sm">3</span>
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-bold text-base mb-1">This forms the nexus of ETL Engines</p>
                  <p>Extract, Transform, Load logic runs heavily on these background chron-jobs mapping legacy transactional databases down into condensed analytic warehousing pools over night.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20 max-w-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3 text-cyan-300" /> Infrastructure Training Protocol
            </h2>
            <div className="grid md:grid-cols-2 gap-4 gap-y-6">
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold mr-3 shadow shrink-0">1</span> <span className="text-blue-50 font-medium text-lg">Copy HR students into structured matrix.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold mr-3 shadow shrink-0">2</span> <span className="text-blue-50 font-medium text-lg">Safely Archive students scoring limits {"<"} 80.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold mr-3 shadow shrink-0">3</span> <span className="text-blue-50 font-medium text-lg">Inject and manipulate data marks boosted by +10 arrays.</span></div>
              <div className="flex items-center"><span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold mr-3 shadow shrink-0">4</span> <span className="text-blue-50 font-medium text-lg">Calculate backup clone injections.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Footer */}
      <section className="max-w-6xl mx-auto mb-8 text-center bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
        <p className="flex flex-wrap items-center justify-center font-medium text-gray-600 dark:text-gray-400 gap-3 text-sm">
          <DatabaseZap className="w-5 h-5 text-indigo-500" />
          <span className="font-bold text-gray-800 dark:text-white mr-2">Core Industry Tool For:</span>
          Archiving old orders <span className="text-gray-300 dark:text-gray-600">•</span>
          Creating monthly sales <span className="text-gray-300 dark:text-gray-600">•</span>
          Data warehousing <span className="text-gray-300 dark:text-gray-600">•</span>
          Backup DBs <span className="text-gray-300 dark:text-gray-600">•</span>
          ETL Workflows
        </p>
      </section>

    </div>
  );
};

export default SqlInsertIntoSelect;