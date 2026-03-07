import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, AlertTriangle, 
  GitBranch, Link2, Users, ArrowRightLeft, UserCircle, Users2, ShieldAlert, Server
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

// Helper for rendering tables
const ResultTable = ({ headers, rows, highlightPredicate }: { headers: string[], rows: (string | React.ReactNode)[][], highlightPredicate?: (colIndex: number, rowIndex: number, cell: string | React.ReactNode) => boolean }) => (
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
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => {
               const isHighlighted = highlightPredicate && highlightPredicate(j, i, cell);
               return (
                  <td key={j} className={`px-4 py-3 ${isHighlighted ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50/50 dark:bg-violet-900/10' : ''}`}>
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

const SqlSelfJoin: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <ArrowRightLeft className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL SELF JOIN
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The powerful technique of virtually joining a table to itself to resolve internal recursive relationships.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-violet-500" /> What is SQL SELF JOIN?
          </h2>
          <div className="p-4 bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-900/30 rounded-xl mb-6 shadow-inner">
            <span className="font-bold text-violet-800 dark:text-violet-400 text-lg">
              SELF JOIN = joining a table to itself
            </span>
            <p className="mt-2 text-sm text-violet-700 dark:text-violet-300 font-medium leading-relaxed">
              A SELF JOIN is a type of join where a table is joined with itself. This means the same table is used twice in a query, but with <strong className="font-bold text-violet-900 dark:text-violet-200">different aliases.</strong>
            </p>
          </div>
          
          <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-3 uppercase tracking-widest flex items-center">
             <Target className="w-4 h-4 mr-2 text-fuchsia-500" /> Why Use SELF JOIN?
          </h3>
          <div className="grid grid-cols-2 gap-3 font-medium text-gray-700 dark:text-gray-300 text-sm relative z-10">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Users className="w-4 h-4 mr-2 text-violet-500" /> Employees & Managers</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Link2 className="w-4 h-4 mr-2 text-fuchsia-500" /> Related Products</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><GitBranch className="w-4 h-4 mr-2 text-amber-500" /> Parent-Child Relations</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Server className="w-4 h-4 mr-2 text-sky-500" /> Org Hierarchy</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-violet-800/50">
          <div className="absolute top-0 right-0 -m-6 text-violet-500/20 transform"><ArrowRightLeft className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-violet-400" /> Basic Syntax
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-bold text-violet-50">
            <CodeSnippetBlock codeSnippet={`SELECT A.column, B.column\nFROM table_name A\nJOIN table_name B\nON A.common_column = B.common_column;`} />
            
            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                 <div className="bg-white/10 p-3 rounded-lg border border-violet-500/30">
                    <p className="text-violet-300 font-black text-xl mb-1">A</p>
                    <p className="text-xs text-violet-100">First instance</p>
                 </div>
                 <div className="bg-white/10 p-3 rounded-lg border border-fuchsia-500/30">
                    <p className="text-fuchsia-300 font-black text-xl mb-1">B</p>
                    <p className="text-xs text-fuchsia-100">Second instance</p>
                 </div>
            </div>
            <p className="text-xs text-center text-violet-200 bg-black/40 p-2 rounded-lg mt-4 font-medium italic">
                Aliases allow SQL to treat the same table as two completely different isolated tables in memory.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Example - Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden text-center sm:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
             <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center">
                <Users2 className="text-violet-500 w-8 h-8 mr-3 hidden sm:block" /> 3️⃣ Hierarchical Table Setup
             </h2>
             <span className="px-3 py-1 bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 rounded-full text-sm font-bold mt-4 md:mt-0 shadow-sm border border-violet-200 dark:border-violet-800/50">Employees Table</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start text-left">
             <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center"><Terminal className="w-5 h-5 mr-2 text-violet-500" /> Create & Insert</h3>
                <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (\n  EmployeeID INT,\n  EmployeeName VARCHAR(50),\n  ManagerID INT\n);\n\nINSERT INTO Employees VALUES\n(1,'Arun',NULL),\n(2,'Divya',1),\n(3,'Kiran',1),\n(4,'Meena',2),\n(5,'Rahul',2);`} />
             </div>

             <div className="relative">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center"><Table2 className="w-5 h-5 mr-2 text-fuchsia-500" /> Table Visualization</h3>
                <ResultTable 
                    headers={['EmployeeID', 'EmployeeName', 'ManagerID']}
                    rows={[
                        [1, 'Arun', <span className="text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-1 rounded">NULL</span>],
                        [2, 'Divya', 1],
                        [3, 'Kiran', 1],
                        [4, 'Meena', 2],
                        [5, 'Rahul', 2]
                    ]}
                />
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-inner mt-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Hierarchy Explained</p>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                        <li><span className="text-violet-600 dark:text-violet-400 font-bold">&bull; Arun</span> is the top manager (ManagerID is NULL)</li>
                        <li><span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">&bull; Divya</span> and <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">Kiran</span> report directly to Arun (1)</li>
                        <li><span className="text-sky-600 dark:text-sky-400 font-bold">&bull; Meena</span> and <span className="text-sky-600 dark:text-sky-400 font-bold">Rahul</span> report directly to Divya (2)</li>
                    </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          Executing SELF JOIN Operations
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* 4️⃣ Base LEFT JOIN */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
                  <ArrowRightLeft className="w-5 h-5 mr-3 text-violet-500" /> 4️⃣ Using SELF JOIN
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Query mapping every employee seamlessly to their literal manager name using <code className="text-violet-600 dark:text-violet-400 font-bold">LEFT JOIN</code>.</p>
                <CodeSnippetBlock codeSnippet={`SELECT E.EmployeeName AS Employee,\n       M.EmployeeName AS Manager\nFROM Employees E\nLEFT JOIN Employees M\nON E.ManagerID = M.EmployeeID;`} />
                <div className="mt-4">
                    <ResultTable 
                    headers={['Employee', 'Manager']}
                    rows={[
                        ['Arun', <span className="text-red-500 font-bold">NULL</span>],
                        ['Divya', 'Arun'],
                        ['Kiran', 'Arun'],
                        ['Meena', 'Divya'],
                        ['Rahul', 'Divya']
                    ]}
                    />
                    <div className="flex items-center justify-center p-3 bg-violet-50 dark:bg-violet-900/10 rounded-lg border border-violet-100 dark:border-violet-800/30 gap-6 text-sm font-bold text-violet-800 dark:text-violet-300">
                        <span>E = Employees</span>
                        <span>M = Managers</span>
                    </div>
                </div>
            </div>

            {/* 6️⃣ INNER JOIN Variant */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-fuchsia-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3">
                  <GitBranch className="w-5 h-5 mr-3 text-fuchsia-500" /> 6️⃣ SELF JOIN Using INNER JOIN
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">If you solely want employees who strictly mapped to managers, swap to <code className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">INNER JOIN</code>.</p>
                <CodeSnippetBlock codeSnippet={`SELECT E.EmployeeName AS Employee,\n       M.EmployeeName AS Manager\nFROM Employees E\nINNER JOIN Employees M\nON E.ManagerID = M.EmployeeID;`} />
                <div className="mt-4">
                    <ResultTable 
                    headers={['Employee', 'Manager']}
                    rows={[
                        ['Divya', 'Arun'],
                        ['Kiran', 'Arun'],
                        ['Meena', 'Divya'],
                        ['Rahul', 'Divya']
                    ]}
                    />
                    <div className="text-center p-3 bg-fuchsia-50 dark:bg-fuchsia-900/10 rounded-lg text-fuchsia-700 dark:text-fuchsia-400 text-xs font-bold border border-fuchsia-100 dark:border-fuchsia-800/30">
                        Notice: Arun is completely omitted because his Manager side is strictly NULL.
                    </div>
                </div>
            </div>
            
            {/* 5️⃣ Visual Logic Internal Processing */}
            <div className="bg-gradient-to-br from-violet-900 to-indigo-900 p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden lg:col-span-2 border border-violet-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fuchsia-500/10 blur-[100px] pointer-events-none rounded-full"></div>
                
                <h3 className="text-xl font-black mb-6 flex items-center text-white relative z-10">
                  <Database className="w-6 h-6 mr-3 text-violet-400" /> 5️⃣ How SELF JOIN Works Internally
                </h3>

                <div className="grid md:grid-cols-3 gap-6 relative z-10 items-center">
                    <div className="bg-black/40 p-5 rounded-2xl border border-violet-500/30 text-center">
                        <p className="text-violet-400 font-bold mb-2">Table E (Employees)</p>
                        <ul className="text-xs text-gray-300 font-mono space-y-1">
                            <li>2 | Divya | <span className="text-white font-bold bg-violet-500/30 px-1 rounded">1</span></li>
                            <li>3 | Kiran | <span className="text-white font-bold bg-violet-500/30 px-1 rounded">1</span></li>
                        </ul>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                        <Target className="w-8 h-8 text-fuchsia-500 mb-2" />
                        <p className="text-xs font-bold text-white uppercase tracking-widest text-center">Engine Mapping<br/><span className="text-fuchsia-400">E.ManagerID = M.EmployeeID</span></p>
                    </div>

                    <div className="bg-black/40 p-5 rounded-2xl border border-fuchsia-500/30 text-center">
                        <p className="text-fuchsia-400 font-bold mb-2">Table M (Managers)</p>
                        <ul className="text-xs text-gray-300 font-mono space-y-1">
                            <li><span className="text-white font-bold bg-fuchsia-500/30 px-1 rounded">1</span> | Arun | NULL</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Comparisons & Real World Segment */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="flex-1">
                    <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                       <ShieldAlert className="w-6 h-6 mr-3 text-amber-500" /> 8️⃣ SELF JOIN vs Normal JOIN
                    </h2>
                    <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl max-w-2xl">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                                <tr>
                                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Feature</th>
                                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-violet-50 dark:bg-violet-900/10 text-violet-700 dark:text-violet-400">SELF JOIN</th>
                                    <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/10 text-gray-600 dark:text-gray-400">Normal JOIN</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-100 dark:border-gray-700/50">
                                    <td className="px-6 py-3">Tables used</td>
                                    <td className="px-6 py-3 font-bold bg-violet-50/30 dark:bg-violet-900/5">Same table twice</td>
                                    <td className="px-6 py-3 bg-gray-50/30 dark:bg-gray-800/5">Two diff tables</td>
                                </tr>
                                <tr className="border-b border-gray-100 dark:border-gray-700/50">
                                    <td className="px-6 py-3">Alias needed</td>
                                    <td className="px-6 py-3 font-bold text-emerald-500 bg-violet-50/30 dark:bg-violet-900/5">Yes strictly</td>
                                    <td className="px-6 py-3 bg-gray-50/30 dark:bg-gray-800/5 text-gray-400">Optional</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3">Use case</td>
                                    <td className="px-6 py-3 bg-violet-50/30 dark:bg-violet-900/5">Hierarchical</td>
                                    <td className="px-6 py-3 bg-gray-50/30 dark:bg-gray-800/5">Related datasets</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner translate-y-2 md:translate-y-0 text-center">
                    <Server className="w-8 h-8 mx-auto text-sky-500 mb-3" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Company DB Org Logic</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 font-medium space-y-1">
                        <li>Developer &rarr; Team Lead</li>
                        <li>Team Lead &rarr; PM</li>
                        <li>PM &rarr; Director</li>
                    </ul>
                    <div className="mt-4 text-xs bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 p-2 rounded-lg border border-sky-200 dark:border-sky-800/50 font-bold">
                        All stored natively in the same Employees table.
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-12 bg-gradient-to-br from-violet-900 to-fuchsia-900 p-8 lg:p-12 rounded-3xl shadow-xl border border-violet-800 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute opacity-10 -right-12 -top-12 text-white scale-150 transform rotate-12"><UserCircle className="w-64 h-64" /></div>
                 <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
                     <div>
                         <h3 className="text-2xl font-black text-white flex items-center mb-4 pb-4 border-b border-violet-500/30">
                            <Target className="w-6 h-6 mr-3 text-fuchsia-400" /> Real-World Project DB Setup
                         </h3>
                         <p className="text-gray-200 font-medium text-lg leading-relaxed mb-6">
                            In your blood bank system architect architecture, assume donors directly logically refer other specific new donors. 
                         </p>
                         <ResultTable 
                            headers={['DonorID', 'Name', 'ReferredBy']}
                            rows={[
                                [1, 'Arun', <span className="text-red-400 font-bold" key="null">NULL</span>],
                                [2, 'Ravi', 1],
                                [3, 'Karthik', 1]
                            ]}
                         />
                     </div>
                     <div className="bg-black/40 rounded-2xl p-6 border border-fuchsia-500/30 shadow-2xl backdrop-blur-sm">
                        <CodeSnippetBlock codeSnippet={`SELECT D1.Name AS Donor,\n       D2.Name AS ReferredBy\nFROM Donors D1\nLEFT JOIN Donors D2\nON D1.ReferredBy = D2.DonorID;`} />
                        <ResultTable 
                            headers={['Donor', 'ReferredBy']}
                            rows={[
                                ['Arun', <span className="text-red-400 font-bold" key="null2">NULL</span>],
                                ['Ravi', 'Arun'],
                                ['Karthik', 'Arun']
                            ]}
                         />
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-violet-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-violet-400" /> Professional Developer Tips
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 15+ Years SQL Experience</p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10 border-gray-700/50">
            
             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                <div className="flex-shrink-0 mt-1 text-red-500 font-bold"><AlertTriangle className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Always use table aliases</h4>
                   <p className="text-gray-400 text-xs mb-3 font-medium">Without using structural aliases natively, SELF JOIN operations will crash and not conceptually work at all due to logical engine ambiguity.</p>
                   <div className="bg-black/50 p-2 text-xs rounded border border-gray-700 font-mono text-emerald-400">Employees E<br/>Employees M</div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                <div className="flex-shrink-0 mt-1 text-sky-400 font-bold"><GitBranch className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Use LEFT JOIN for hierarchy</h4>
                   <p className="text-gray-400 text-xs mb-3 font-medium leading-relaxed bg-sky-950/30 p-3 rounded-lg border border-sky-900/50">
                       Using LEFT JOIN uniquely successfully ensures absolutely critical top-level architectural records (like the CEO or Director without a manager) are cleanly captured and not implicitly totally lost in the render generation.
                   </p>
                </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                <div className="flex-shrink-0 mt-1 text-fuchsia-400 font-bold"><Link2 className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Avoid confusing column names</h4>
                   <p className="text-gray-400 text-xs mb-3 font-medium leading-relaxed">Ensure you always logically wrap columns explicitly mapping aliases.</p>
                   <div className="bg-black/50 py-2 px-3 text-xs rounded border border-gray-700 font-mono font-bold">
                       <span className="text-fuchsia-400 block pb-1 border-b border-gray-800 mb-1">AS Employee</span>
                       <span className="text-violet-400 block pt-0.5">AS Manager</span>
                   </div>
                </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                <div className="flex-shrink-0 mt-1 text-emerald-400 font-bold"><Check className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Works with ANY Join type fundamentally</h4>
                   <p className="text-gray-400 text-xs mb-3 font-medium">While LEFT mapping is highly common, it functions natively universally:</p>
                   <div className="flex flex-wrap gap-2 text-[10px] font-bold text-emerald-200">
                       <span className="px-2 py-1 bg-emerald-950 border border-emerald-900/50 rounded">INNER JOIN</span>
                       <span className="px-2 py-1 bg-emerald-950 border border-emerald-900/50 rounded">LEFT JOIN</span>
                       <span className="px-2 py-1 bg-emerald-950 border border-emerald-900/50 rounded">RIGHT JOIN</span>
                       <span className="px-2 py-1 bg-emerald-950 border border-emerald-900/50 rounded">FULL JOIN</span>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSelfJoin;