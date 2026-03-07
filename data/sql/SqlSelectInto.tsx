import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, CheckCircle, HelpCircle, AlertTriangle, 
  GitBranch, ListFilter, Files, Forward, DatabaseBackup,
  Layers, HardDrive, ShieldAlert, ArrowRight, Save
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

// Helper for rendering tables
const ResultTable = ({ headers, rows, highlightPredicate }: { headers: string[], rows: (string | number)[][], highlightPredicate?: (colIndex: number, rowIndex: number, cell: string | number) => boolean }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4 shadow-sm">
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
          <tr key={i} className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 ${rows.length === 1 && rows[0][0] === '(empty)' ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''}`}>
            {row.map((cell, j) => {
               const isHighlighted = highlightPredicate && highlightPredicate(j, i, cell);
               return (
                  <td key={j} className={`px-4 py-3 ${isHighlighted ? 'text-sky-600 dark:text-sky-400 font-bold bg-sky-50/50 dark:bg-sky-900/10' : ''} ${cell === '(empty)' ? 'italic text-gray-400' : ''}`}>
                    {cell}
                  </td>
               );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SqlSelectInto: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-900 dark:to-sky-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/3 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <DatabaseBackup className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL SELECT INTO
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The structural command to instantly copy data and automatically generate a new table.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-sky-500" /> What is SQL SELECT INTO?
          </h2>
          <div className="p-4 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-xl mb-6 shadow-inner">
            <span className="font-bold text-sky-800 dark:text-sky-400 text-lg">
              SELECT INTO = Create a new table using data from another table
            </span>
            <p className="mt-2 text-sm text-sky-700 dark:text-sky-300 font-medium">
              The SELECT INTO statement is used to copy data from one table and insert it into a <strong>new</strong> table.
            </p>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Files className="w-5 h-5 mr-3 text-sky-500" /> It creates a new table automatically.</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Database className="w-5 h-5 mr-3 text-blue-500" /> It fills it with data from the existing table.</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-sky-800/50">
          <div className="absolute top-0 right-0 -m-6 text-sky-500/20 transform"><Terminal className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-sky-400" /> Basic Syntax
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-bold text-sky-50">
            <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nINTO new_table_name\nFROM existing_table;`} />
            <ul className="space-y-3 font-mono text-xs text-sky-300 bg-black/30 p-5 rounded-xl border border-sky-800/40 shadow-inner">
                <li className="flex items-center"><span className="text-emerald-400 w-24">SELECT</span> <span className="text-white">&rarr; Choose columns</span></li>
                <li className="flex items-center"><span className="text-fuchsia-400 w-24">INTO</span> <span className="text-white">&rarr; Create new table</span></li>
                <li className="flex items-center"><span className="text-sky-400 w-24">FROM</span> <span className="text-white">&rarr; Source table</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Example - Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Layers className="text-sky-500 w-8 h-8 mr-3" /> Step 1: The Existing Table
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-center"><Table2 className="w-6 h-6 mr-2 text-indigo-500" /> Students Table</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed">
                  Before we copy anything, here is the original source table containing our current student records and grades. We will use this as our base for all `SELECT INTO` operations.
              </p>
            </div>
            
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-100 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-900/20 blur-xl -z-10 rounded-3xl"></div>
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

      {/* Select Into Operations Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          SELECT INTO Use Cases
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* 3️⃣ Create Full Backup */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-sky-400 transition-colors flex flex-col group">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <DatabaseBackup className="w-5 h-5 mr-3 text-sky-500" /> 3️⃣ Create New Table Backup
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">A new table called <code className="font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-1 rounded">StudentsBackup</code> is created dynamically.</p>
                <CodeSnippetBlock codeSnippet={`SELECT *\nINTO StudentsBackup\nFROM Students;`} />
                
                <div className="mt-auto pt-4 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-500/10 group-hover:text-sky-500/20 transition-colors -z-10"><DatabaseBackup className="w-32 h-32" /></div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Target className="w-4 h-4 mr-1 text-sky-500"/> StudentsBackup Table</p>
                    <ResultTable 
                    headers={['StudentID', 'Name', 'Marks', 'City']}
                    rows={[
                        [1, 'Arun', 85, 'Chennai'],
                        [2, 'Divya', 92, 'Madurai'],
                        [3, 'Kiran', 40, 'Chennai'],
                        [4, 'Meena', 70, 'Coimbatore']
                    ]}
                    />
                    <div className="text-center p-2 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg text-emerald-700 dark:text-emerald-400 text-xs font-bold">Now both tables contain the exact same data.</div>
                </div>
            </div>

            {/* 4️⃣ Specific Columns */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-400 transition-colors flex flex-col group">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <Files className="w-5 h-5 mr-3 text-indigo-500" /> 4️⃣ Copy Specific Columns
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">We can copy only selected columns into the new table.</p>
                <CodeSnippetBlock codeSnippet={`SELECT Name, Marks\nINTO StudentMarks\nFROM Students;`} />
                
                <div className="mt-auto pt-4 relative">
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors -z-10"><Files className="w-32 h-32" /></div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Target className="w-4 h-4 mr-1 text-indigo-500"/> StudentMarks Table</p>
                    <ResultTable 
                    headers={['Name', 'Marks']}
                    rows={[
                        ['Arun', 85],
                        ['Divya', 92],
                        ['Kiran', 40],
                        ['Meena', 70]
                    ]}
                    />
                    <div className="text-center p-2 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg text-indigo-700 dark:text-indigo-400 text-xs font-bold">Only selected columns are copied and structured.</div>
                </div>
            </div>

            {/* 5️⃣ Conditions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-400 transition-colors flex flex-col group">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ListFilter className="w-5 h-5 mr-3 text-emerald-500" /> 5️⃣ Copy Data with Conditions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">You can copy only certain rows using the WHERE clause.</p>
                <CodeSnippetBlock codeSnippet={`SELECT *\nINTO TopStudents\nFROM Students\nWHERE Marks > 80;`} />
                
                <div className="mt-auto pt-4 relative">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Target className="w-4 h-4 mr-1 text-emerald-500"/> TopStudents Table</p>
                    <ResultTable 
                    headers={['StudentID', 'Name', 'Marks', 'City']}
                    rows={[
                        [1, 'Arun', 85, 'Chennai'],
                        [2, 'Divya', 92, 'Madurai']
                    ]}
                    highlightPredicate={(_, __, cell) => cell === 85 || cell === 92}
                    />
                    <div className="text-center p-2 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg text-emerald-700 dark:text-emerald-400 text-xs font-bold">Only high-scoring students are copied over.</div>
                </div>
            </div>

            {/* 6️⃣ Structure Only */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors flex flex-col group">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <Layers className="w-5 h-5 mr-3 text-amber-500" /> 6️⃣ Copy Structure Without Data
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">Sometimes we want to create a table structure only using <code className="text-amber-600 dark:text-amber-400 font-mono font-bold">1 = 0</code> false logic.</p>
                <CodeSnippetBlock codeSnippet={`SELECT *\nINTO EmptyStudents\nFROM Students\nWHERE 1 = 0;`} />
                
                <div className="mt-auto pt-4 relative">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Target className="w-4 h-4 mr-1 text-amber-500"/> Empty Table Result</p>
                    <ResultTable 
                    headers={['StudentID', 'Name', 'Marks', 'City']}
                    rows={[
                        ['(empty)', '', '', '']
                    ]}
                    />
                    <div className="text-center p-2 bg-amber-50 dark:bg-amber-900/10 rounded-lg text-amber-700 dark:text-amber-400 text-xs font-bold">Table is created strictly with schema but no rows are inserted.</div>
                </div>
            </div>
        </div>
      </section>

      {/* Advanced Join Integration */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-indigo-800 relative overflow-hidden">
             {/* Decorative background */}
             <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none translate-x-1/4 -translate-y-1/4 transform scale-150">
                <GitBranch className="w-full h-full" />
             </div>

             <h2 className="text-2xl font-black text-white mb-6 relative z-10 flex items-center">
                <GitBranch className="w-8 h-8 mr-3 text-sky-400" /> 7️⃣ SELECT INTO with JOIN
             </h2>
             <p className="text-indigo-200 mb-8 font-medium text-lg relative z-10 max-w-2xl">
                We can dynamically create tables combining multi-table joined data into one solid denormalized snapshot.
             </p>

             <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                <div className="shadow-2xl drop-shadow-xl rounded-xl">
                    <CodeSnippetBlock codeSnippet={`SELECT Students.Name, Courses.CourseName\nINTO StudentCourses\nFROM Students\nINNER JOIN Courses\nON Students.StudentID = Courses.StudentID;`} />
                </div>
                <div className="bg-black/40 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                   <h4 className="text-white font-bold mb-2 flex items-center"><Zap className="w-5 h-5 mr-2 text-fuchsia-400" /> Dynamic Snapshot Creation</h4>
                   <p className="text-gray-300 text-sm leading-relaxed">
                       The engine grabs combinations from the <strong className="text-sky-300">INNER JOIN</strong> mapping process and instantly persists those exact joined results into a brand new permanent table called <code className="text-emerald-400 font-mono">StudentCourses</code>.
                   </p>
                </div>
             </div>
        </div>
      </section>

      {/* Comparison: SELECT INTO vs INSERT INTO */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
               <ArrowRight className="w-6 h-6 mr-3 text-red-500" /> 8️⃣ SELECT INTO vs INSERT INTO SELECT
            </h2>

            <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-8">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                        <tr>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/4">Feature</th>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/3 bg-sky-50 dark:bg-sky-900/10 text-sky-700 dark:text-sky-400">SELECT INTO</th>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/3 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400">INSERT INTO SELECT</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                            <td className="px-6 py-4">Table creation</td>
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white bg-sky-50/30 dark:bg-sky-900/5">Creates new table</td>
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white bg-red-50/30 dark:bg-red-900/5">Inserts into existing table</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                            <td className="px-6 py-4">Use case</td>
                            <td className="px-6 py-4 bg-sky-50/30 dark:bg-sky-900/5">Backup / temporary table</td>
                            <td className="px-6 py-4 bg-red-50/30 dark:bg-red-900/5">Add data to existing table</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3 uppercase tracking-widest flex items-center"><Target className="w-4 h-4 mr-2" /> Example INSERT INTO SELECT</h4>
                    <pre className="text-xs font-mono text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <span className="text-red-500 font-bold">INSERT INTO</span> StudentsBackup{'\n'}
                        <span className="text-sky-500 font-bold">SELECT</span> * <span className="text-sky-500 font-bold">FROM</span> Students;
                    </pre>
                 </div>
                 <div className="flex items-center justify-center p-4">
                     <span className="px-4 py-2 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 rounded-lg text-sm font-bold border border-red-200 dark:border-red-800/50 text-center w-full">
                         Warning: Destination table MUST already exist.
                     </span>
                 </div>
            </div>
        </div>
      </section>

      {/* Internal & Real World combined */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
                <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <HardDrive className="w-6 h-6 mr-3 text-sky-500" /> Real-World Example
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-4">In your blood bank system, suppose you want to create a backup table before data updates or migrations:</p>
                <CodeSnippetBlock codeSnippet={`SELECT *\nINTO DonorsBackup\nFROM Donors;`} />
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30 flex items-center mt-2">
                   <Target className="w-5 h-5 mr-3 text-emerald-500" />
                   <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">Now you have a backup copy of donor data.</p>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-900/30 flex flex-col justify-center">
                 <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-indigo-100 dark:border-indigo-800">
                        <Save className="w-10 h-10 text-indigo-500" />
                    </div>
                 </div>
                 <h3 className="text-xl font-black text-center text-indigo-900 dark:text-indigo-400 mb-4">Migration Lifesaver</h3>
                 <p className="text-center text-gray-600 dark:text-gray-300 font-medium text-sm leading-relaxed px-4">
                    Before making massive UPDATE or DELETE operations on a production table, Senior DBAs will constantly use <code className="text-indigo-600 dark:text-indigo-400 font-bold">SELECT INTO</code> to clone the data to a backup table. If a mistake happens, rollback is trivial.
                 </p>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-sky-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-sky-400" /> Professional Developer Tips
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 15+ Years SQL Experience</p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            
             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-emerald-400 font-bold"><DatabaseBackup className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use SELECT INTO for quick backups</h4>
                <div className="bg-black/50 p-2 rounded border border-gray-700 mb-2 mt-2">
                   <code className="text-xs text-emerald-300 font-mono">SELECT * INTO Backup_Employees FROM Employees;</code>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-sky-400 font-bold"><Layers className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Avoid using SELECT * in production</h4>
                <div className="bg-black/50 p-2 rounded border border-gray-700 mb-2 mt-2">
                   <code className="text-xs text-sky-300 font-mono">SELECT ID, Name, Salary INTO BackupEmployees FROM Employees;</code>
                </div>
                <p className="text-gray-400 font-medium text-xs">Better approach targeting specifically needed snapshot columns.</p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-red-400 font-bold"><AlertTriangle className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Be careful with large tables</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed mb-2">
                   Copying millions of rows blocks IO operations and consumes massive:
                </p>
                <div className="flex gap-2">
                    <span className="bg-rose-900/30 text-rose-300 px-2 py-1 rounded text-xs font-bold border border-rose-800/50">Storage</span>
                    <span className="bg-rose-900/30 text-rose-300 px-2 py-1 rounded text-xs font-bold border border-rose-800/50">Memory</span>
                    <span className="bg-rose-900/30 text-rose-300 px-2 py-1 rounded text-xs font-bold border border-rose-800/50">Execution Time</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-indigo-400 font-bold"><ShieldAlert className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use temporary tables when needed</h4>
                <div className="bg-black/50 p-2 rounded border border-gray-700 mb-2 mt-2">
                   <code className="text-xs text-indigo-300 font-mono">SELECT * INTO #TempStudents FROM Students;</code>
                </div>
                <p className="text-gray-400 font-medium text-xs leading-relaxed mt-2 bg-indigo-900/20 p-2 rounded border border-indigo-800/30">
                   Prefixing with '#' creates temporary tables that vanish instantly after the session ends, keeping your DB clean!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSelectInto;