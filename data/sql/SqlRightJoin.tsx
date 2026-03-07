import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, Zap, Target, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, GitBranch, AlignRight, ShieldAlert, Building2 } from 'lucide-react';

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

const SqlRightJoin: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <AlignRight className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL RIGHT JOIN
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The structural command used to return all records from the right table, and the matched records from the left table.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Link2 className="w-6 h-6 mr-3 text-emerald-500" /> What is RIGHT JOIN?
          </h2>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl mb-6">
            <span className="font-bold text-emerald-800 dark:text-emerald-400 text-lg">RIGHT JOIN = Show everything from the right table, even if no match exists.</span>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-teal-500 shrink-0 mt-0.5" /> Returns all rows absolutely from the primary right table.</div>
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-teal-500 shrink-0 mt-0.5" /> Returns matching rows mapping to the left table.</div>
            <div className="flex items-start"><Target className="w-5 h-5 mr-3 text-rose-500 shrink-0 mt-0.5" /> <span className="font-bold text-gray-800 dark:text-gray-200">If no match</span> &rarr; DB Engine fills the gaps with NULL values for left columns.</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-teal-800/50">
          <div className="absolute top-0 left-0 -m-6 text-teal-500/20 transform -scale-x-100"><GitBranch className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-emerald-400" /> Syntax & Architecture
          </h2>
          <p className="text-teal-200 mb-6 font-medium text-sm relative z-10">Notice how table2 is the Right designated core table.</p>
          <div className="relative z-10 space-y-4 text-sm font-bold text-teal-50">
            <CodeSnippetBlock codeSnippet={`SELECT columns\nFROM table1\nRIGHT JOIN table2\nON table1.column = table2.column;`} />
            <ul className="space-y-2 font-mono text-xs text-teal-300 bg-black/30 p-4 rounded-xl border border-teal-800/40">
                <li><span className="text-white">table1</span> &rarr; Left table</li>
                <li><span className="text-emerald-400">table2</span> &rarr; Right table</li>
                <li><span className="text-sky-400">ON</span> &rarr; Join condition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Setup DB Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4"><Database className="text-sky-500 w-8 h-8 mr-3" /> Architecture Setup (Step-by-Step)</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-fuchsia-500" /> 1. Students (Left Table)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n    StudentID INT,\n    Name VARCHAR(50)\n);\n\nINSERT INTO Students VALUES\n(1, 'Arun'),\n(2, 'Divya'),\n(3, 'Kiran');`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center"><Table2 className="w-5 h-5 mr-2 text-emerald-500" /> 2. Courses (Right Table)</h3>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Courses (\n    CourseID INT,\n    StudentID INT,\n    CourseName VARCHAR(50)\n);\n\nINSERT INTO Courses VALUES\n(101, 1, 'SQL'),\n(102, 2, 'Python'),\n(103, 4, 'Cyber Security');`} />
            </div>
          </div>

          {/* Matrix Result Blocks */}
          <div className="grid lg:grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-inner">
              <p className="text-xs uppercase font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Left Table Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-2 px-2">StudentID</th><th>Name</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-fuchsia-500">1</td><td>Arun</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2 font-bold text-fuchsia-500">2</td><td>Divya</td></tr>
                  <tr><td className="py-2 px-2 font-bold text-fuchsia-500">3</td><td>Kiran</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-inner">
              <p className="text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-3 tracking-widest"><Terminal className="inline w-4 h-4 mr-1 mb-1 text-gray-400" /> Current Right Table Data</p>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <tr><th className="py-2 px-2">CourseID</th><th>StudentID</th><th>CourseName</th></tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2">101</td><td className="text-emerald-500 font-bold">1</td><td className="text-blue-500">SQL</td></tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800"><td className="py-2 px-2">102</td><td className="text-emerald-500 font-bold">2</td><td className="text-blue-500">Python</td></tr>
                  <tr><td className="py-2 px-2">103</td><td className="text-emerald-500 font-bold">4</td><td className="text-blue-500">Cyber Security</td></tr>
                </tbody>
              </table>
              <div className="mt-3 p-2 bg-amber-50 dark:bg-amber-900/20 text-xs font-bold text-amber-700 dark:text-amber-400 rounded-lg">Notice: StudentID 4 exists in Courses but not in Students.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Right Join Output */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-teal-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center"><Zap className="w-8 h-8 mr-3 text-amber-400" /> RIGHT JOIN Query In Action</h2>
              <p className="text-teal-200 mb-6 font-medium text-lg border-b border-teal-800/50 pb-6">Target goal: Show <strong className="text-white">All Courses</strong> explicitly alongside mapping students.</p>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 to-transparent blur-2xl rounded-full"></div>
                <div className="relative z-10 shadow-2xl drop-shadow-2xl">
                  <CodeSnippetBlock
                    codeSnippet={`SELECT Students.Name, Courses.CourseName\nFROM Students\nRIGHT JOIN Courses\nON Students.StudentID = Courses.StudentID;`}
                  />
                </div>
              </div>
            </div>

            <div className="bg-black/40 rounded-2xl border border-teal-500/30 overflow-hidden shadow-xl">
              <div className="bg-teal-950/50 p-4 border-b border-teal-500/30">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center"><Terminal className="w-4 h-4 mr-2" /> Rendered Output Stream</p>
              </div>
              <table className="w-full text-sm font-mono text-left">
                <thead className="text-xs text-gray-500 border-b border-gray-800 bg-gray-900/50">
                  <tr><th className="py-3 px-4">Name</th><th className="px-4">CourseName</th></tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Arun</td><td className="px-4 text-emerald-400">SQL</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">Divya</td><td className="px-4 text-emerald-400">Python</td>
                  </tr>
                  <tr className="bg-rose-500/5 hover:bg-rose-500/10 transition-colors">
                    <td className="py-3 px-4 font-black text-rose-500">NULL</td><td className="px-4 text-emerald-400">Cyber Security</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 bg-teal-950/30 border-t border-teal-500/20">
                <span className="text-xs font-bold text-teal-300">Explanation: Arun exists in Students ✔ | Divya exists in Students ✔ | Cyber Security (StudentID 4) does NOT exist → NULL.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference LEFT vs RIGHT Join */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center overflow-hidden relative">
            <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 z-10 relative">
               <GitBranch className="w-6 h-6 mr-3 text-emerald-500 scale-x-[-1]" /> RIGHT JOIN vs LEFT JOIN
            </h2>
            <div className="overflow-x-auto relative z-10 w-full mb-6 ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                        <tr>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-fuchsia-50/50 dark:bg-fuchsia-900/10 text-fuchsia-700 dark:text-fuchsia-400">LEFT JOIN</th>
                            <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-emerald-50/50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400">RIGHT JOIN</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                            <td className="px-6 py-4">Keeps all rows from</td>
                            <td className="px-6 py-4 bg-fuchsia-50/20 dark:bg-fuchsia-900/5">Left table</td>
                            <td className="px-6 py-4 bg-emerald-50/20 dark:bg-emerald-900/5">Right table</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4">Missing match result</td>
                            <td className="px-6 py-4 bg-fuchsia-50/20 dark:bg-fuchsia-900/5 text-rose-500 font-mono">NULL in right columns</td>
                            <td className="px-6 py-4 bg-emerald-50/20 dark:bg-emerald-900/5 text-rose-500 font-mono">NULL in left columns</td>
                        </tr>
                    </tbody>
                </table>
            </div>
               
             <div className="grid md:grid-cols-2 gap-8 z-10 relative">
               <div className="p-5 border border-fuchsia-200 dark:border-fuchsia-900/30 bg-fuchsia-50/50 dark:bg-fuchsia-900/10 rounded-2xl">
                 <h4 className="font-bold text-fuchsia-700 dark:text-fuchsia-400 mb-3 text-sm uppercase">Example LEFT JOIN Output</h4>
                 <pre className="text-xs font-mono text-gray-800 dark:text-gray-300">
                   Arun  | SQL{'\n'}
                   Divya | Python{'\n'}
                   Kiran | <span className="text-rose-500 font-bold">NULL</span>
                 </pre>
               </div>
               <div className="p-5 border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl">
                 <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 text-sm uppercase">Example RIGHT JOIN Output</h4>
                 <pre className="text-xs font-mono text-gray-800 dark:text-gray-300">
                   Arun  | SQL{'\n'}
                   Divya | Python{'\n'}
                   <span className="text-rose-500 font-bold">NULL</span>  | Cyber Security
                 </pre>
               </div>
             </div>
        </div>
      </section>

      {/* WHERE Filter Logic */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-900/10 p-8 rounded-3xl shadow-sm border border-indigo-200 dark:border-indigo-900/30 flex-1">
            <h3 className="text-2xl font-black flex items-center text-indigo-900 dark:text-indigo-400 mb-6">
              <ShieldAlert className="w-6 h-6 mr-3 text-indigo-500" /> RIGHT JOIN with WHERE
            </h3>
            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 bg-white/50 dark:bg-black/50 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
              Find courses where student details are completely missing using <code className="text-indigo-600 dark:text-indigo-400">IS NULL</code>.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Meaning: Course exists in our catalog without any active assigned student record matching it.</p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col gap-6">
            <CodeSnippetBlock codeSnippet={`SELECT Students.Name, Courses.CourseName\nFROM Students\nRIGHT JOIN Courses\nON Students.StudentID = Courses.StudentID\nWHERE Students.StudentID IS NULL;`} />
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                <h4 className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-3 border-b border-indigo-200 dark:border-indigo-800/50 pb-2">Result Set</h4>
                <pre className="text-sm font-mono text-gray-800 dark:text-gray-300 leading-loose">
                    <span className="text-rose-500 font-bold">NULL</span> | Cyber Security
                </pre>
            </div>
        </div>
      </section>

      {/* Real-World Use Case & Tips */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 flex flex-col gap-6">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-colors">
            <h2 className="text-xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <Building2 className="w-6 h-6 mr-3 text-emerald-500" /> Real-World Example
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-4">Imagine your blood bank database:</p>
            <div className="space-y-4 font-medium text-gray-600 dark:text-gray-400 text-sm mb-6">
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Donors:</strong> table holding Donor Profiles.</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-emerald-500 shrink-0" /><strong className="text-gray-800 dark:text-gray-200 mr-2">Donations:</strong> table recording actual blood bags given.</div>
              <p className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-xs">Query: Show ALL Donations, mapped to profile if it exists.</p>
            </div>
             <CodeSnippetBlock title="Blood Bank Records" codeSnippet={`SELECT Donors.Name, Donations.BloodGroup\nFROM Donors\nRIGHT JOIN Donations\nON Donors.DonorID = Donations.DonorID;`} />
             <div className="mt-3 text-xs font-bold text-gray-600 dark:text-gray-400 text-center uppercase tracking-widest"><Target className="inline w-3 h-3 mb-0.5 mr-1 text-emerald-500"/> Donation exists even if donor record is officially missing.</div>
          </div>

        </div>

        <div className="lg:col-span-6 bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute -top-10 -right-10 p-8 opacity-10 text-emerald-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-emerald-400" /> 15+ Years SQL Experience
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 Developer Tips</p>

          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-emerald-400 font-bold"><CheckCircle className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-sm mb-1">Most developers prefer LEFT JOIN</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed mb-3">Because queries sequentially read physically from left &rarr; right logically and intuitively. Instead of `RIGHT JOIN Courses` in an engine block, they flip it to rewrite natively as `Courses LEFT JOIN Students`.</p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-amber-400 font-bold"><Zap className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-sm mb-1">RIGHT JOIN can always be rewritten</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed">
                   `Students RIGHT JOIN Courses` <br/><strong className="text-white mt-1 block">Same precisely as:</strong> <br/>`Courses LEFT JOIN Students`
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-rose-400 font-bold"><AlertTriangle className="w-5 h-5" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-sm mb-1">Use joins carefully in large databases</h4>
                <p className="text-gray-400 font-medium text-xs leading-relaxed">Large massive matrix joins executed without targeted indexes inherently can completely freeze and slow query performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlRightJoin;