import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, AlertTriangle, 
  GitBranch, ListFilter, ArrowDownUp, ScissorsSquare, 
  PieChart, Server, Link2, ShieldAlert, Layers
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-rose-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-rose-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
            {row.map((cell, j) => {
               const isHighlighted = highlightPredicate && highlightPredicate(j, i, cell);
               return (
                  <td key={j} className={`px-4 py-3 ${isHighlighted ? 'text-rose-600 dark:text-rose-400 font-bold bg-rose-50/50 dark:bg-rose-900/10' : ''}`}>
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

const SqlSelectTop: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <ArrowDownUp className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL SELECT TOP
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The essential limit command to capture exactly the specific number of rows you need.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-rose-500" /> What is SQL SELECT TOP?
          </h2>
          <div className="p-4 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl mb-6 shadow-inner">
            <span className="font-bold text-rose-800 dark:text-rose-400 text-lg">
              SELECT TOP = Return only a specific number of rows
            </span>
            <p className="mt-2 text-sm text-rose-700 dark:text-rose-300 font-medium">
              The SELECT TOP statement is used to limit the number of rows returned in a query result. It retrieves only the first specified number of records.
            </p>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><ScissorsSquare className="w-5 h-5 mr-3 text-rose-500" /> Slices large datasets down perfectly.</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><ArrowDownUp className="w-5 h-5 mr-3 text-orange-500" /> Pairs excellently with sorting (ORDER BY).</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-rose-800/50">
          <div className="absolute top-0 right-0 -m-6 text-rose-500/20 transform"><Terminal className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-rose-400" /> Basic Syntax (SQL Server)
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-bold text-rose-50">
            <CodeSnippetBlock codeSnippet={`SELECT TOP number column1, column2\nFROM table_name;`} />
            <div className="p-4 bg-black/40 rounded-xl border border-rose-500/30">
                <p className="text-rose-300 mb-2 font-mono text-xs uppercase tracking-wider">Example:</p>
                <CodeSnippetBlock codeSnippet={`SELECT TOP 5 *\nFROM Students;`} />
                <p className="text-rose-200 text-xs italic text-center w-full mt-2">This returns exactly the first 5 rows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example - Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
             <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center">
                <Table2 className="text-rose-500 w-8 h-8 mr-3" /> 3️⃣ Example Table Setup
             </h2>
             <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-bold text-gray-500 mt-4 md:mt-0">Students Table</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
                    This table will be used as the base dataset for visualizing how <code className="text-rose-600 dark:text-rose-400 font-bold">SELECT TOP</code> accurately retrieves and slices output based on our requested row limits.
                </p>
                <div className="p-5 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                    <h4 className="font-bold text-rose-800 dark:text-rose-300 text-lg mb-2 flex items-center"><Target className="w-5 h-5 mr-2"/> Note the Total Size</h4>
                    <p className="font-mono text-gray-700 dark:text-gray-300 text-sm">We currently have <strong className="text-rose-600 dark:text-rose-400 text-lg mx-1 block sm:inline">6 total rows</strong> loaded.</p>
                </div>
             </div>

             <div className="relative shadow-xl">
                <ResultTable 
                    headers={['StudentID', 'Name', 'Marks', 'City']}
                    rows={[
                        [1, 'Arun', 85, 'Chennai'],
                        [2, 'Divya', 92, 'Madurai'],
                        [3, 'Kiran', 40, 'Chennai'],
                        [4, 'Meena', 70, 'Coimbatore'],
                        [5, 'Rahul', 35, 'Madurai'],
                        [6, 'Priya', 88, 'Salem']
                    ]}
                />
             </div>
          </div>
        </div>
      </section>

      {/* Select Top Examples Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          SELECT TOP Masterclass Operations
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* 4️⃣ Basic TOP 3 rows */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ScissorsSquare className="w-5 h-5 mr-3 text-orange-500" /> 4️⃣ Retrieve Top 3 Rows
                </h3>
                <CodeSnippetBlock codeSnippet={`SELECT TOP 3 *\nFROM Students;`} />
                <div className="mt-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Terminal className="w-4 h-4 mr-1"/> Output Result</p>
                    <ResultTable 
                    headers={['StudentID', 'Name', 'Marks', 'City']}
                    rows={[
                        [1, 'Arun', 85, 'Chennai'],
                        [2, 'Divya', 92, 'Madurai'],
                        [3, 'Kiran', 40, 'Chennai']
                    ]}
                    />
                    <div className="text-center p-2 bg-orange-50 dark:bg-orange-900/10 rounded-lg text-orange-700 dark:text-orange-400 text-xs font-bold">The exact first 3 physically inserted rows are successfully naturally returned.</div>
                </div>
            </div>

            {/* 5️⃣ Sorting with TOP */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rose-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ArrowDownUp className="w-5 h-5 mr-3 text-rose-500" /> 5️⃣ SELECT TOP with ORDER BY
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Normally, TOP is most powerfully used in combination with <code className="font-bold text-rose-500">ORDER BY</code> to fetch real highest/lowest datasets.</p>
                <CodeSnippetBlock codeSnippet={`SELECT TOP 3 *\nFROM Students\nORDER BY Marks DESC;`} />
                <div className="mt-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Terminal className="w-4 h-4 mr-1"/> Top 3 Highest Marks</p>
                    <ResultTable 
                    headers={['Name', 'Marks']}
                    rows={[
                        ['Divya', 92],
                        ['Priya', 88],
                        ['Arun', 85]
                    ]}
                    highlightPredicate={(cIndex) => cIndex === 1}
                    />
                    <div className="text-center p-2 bg-rose-50 dark:bg-rose-900/10 rounded-lg text-rose-700 dark:text-rose-400 text-xs font-bold mt-2">SQL inherently first sorts marks in descending order, perfectly evaluating the absolute top 3.</div>
                </div>
            </div>

            {/* 6️⃣ Top Percentage */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <PieChart className="w-5 h-5 mr-3 text-blue-500" /> 6️⃣ SELECT TOP with Percentage
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">SQL Server powerfully allows dynamically selecting a true mathematical percentage fraction of rows.</p>
                <CodeSnippetBlock codeSnippet={`SELECT TOP 50 PERCENT *\nFROM Students;`} />
                <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30 text-center mt-auto">
                   <p className="font-black text-blue-700 dark:text-blue-400 text-2xl mb-1 mt-2">50%</p>
                   <p className="text-sm font-bold text-gray-700 dark:text-gray-300">If internal table specifically has exactly 6 total rows &rarr; result dynamically outputs <span className="text-blue-600 dark:text-blue-400">3 precise rows.</span></p>
                </div>
            </div>

            {/* 7️⃣ Filtering + Top */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-400 transition-colors flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <ListFilter className="w-5 h-5 mr-3 text-purple-500" /> 7️⃣ SELECT TOP with WHERE
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Naturally, you can easily combine target filtering alongside dynamic <code className="font-bold text-purple-500">TOP</code> restrictions.</p>
                <CodeSnippetBlock codeSnippet={`SELECT TOP 2 *\nFROM Students\nWHERE City = 'Chennai';`} />
                <div className="mt-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center"><Terminal className="w-4 h-4 mr-1"/> Output Result</p>
                    <ResultTable 
                    headers={['Name', 'City']}
                    rows={[
                        ['Arun', 'Chennai'],
                        ['Kiran', 'Chennai']
                    ]}
                    />
                    <div className="text-center p-2 bg-purple-50 dark:bg-purple-900/10 rounded-lg text-purple-700 dark:text-purple-400 text-xs font-bold">Successfully filters and strictly returns ONLY the first 2 matching subset students originating exactly from Chennai.</div>
                </div>
            </div>

             {/* 9️⃣ TIES Edge Case */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-400 transition-colors lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                        <Link2 className="w-5 h-5 mr-3 text-emerald-500" /> 9️⃣ SELECT TOP with TIES
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed">
                            This unique modifier forcefully returns additional structural rows intrinsically including tie conditions locked in the explicit <code className="font-bold text-emerald-500">ORDER BY</code> clause results.
                        </p>
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">If two total subset elements technically share the exact same identical mathematical marks evaluating as the third logical sequential row, they both rightfully display!</p>
                        </div>
                    </div>
                    <div>
                        <CodeSnippetBlock codeSnippet={`SELECT TOP 3 WITH TIES *\nFROM Students\nORDER BY Marks DESC;`} />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Database Differences & Real World combined */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
                <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                <Server className="w-6 h-6 mr-3 text-orange-500" /> 8️⃣ Database Differences (Important)
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-6">Different architectural databases fundamentally use completely different keyword sets to logically accomplish absolute row limit caps.</p>
                
                <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-6 flex-1">
                    <table className="w-full text-sm text-left font-mono">
                        <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                            <tr>
                                <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/2">Database Engine Matrix Platform</th>
                                <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 w-1/2 bg-rose-50/50 dark:bg-rose-900/10">Corresponding Syntactical Keyword</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                                <td className="px-6 py-3 border-r border-gray-100 dark:border-gray-700">SQL Server</td>
                                <td className="px-6 py-3 font-bold text-rose-600 dark:text-rose-400">TOP</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                                <td className="px-6 py-3 border-r border-gray-100 dark:border-gray-700">MySQL / PostgreSQL</td>
                                <td className="px-6 py-3 font-bold text-blue-600 dark:text-blue-400">LIMIT</td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                                <td className="px-6 py-3 border-r border-gray-100 dark:border-gray-700">Oracle</td>
                                <td className="px-6 py-3 font-bold text-fuchsia-600 dark:text-fuchsia-400">FETCH FIRST</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                     <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-inner">
                         <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 flex items-center"><Terminal className="inline w-3 h-3 mr-1"/> MySQL Example</p>
                         <code className="text-xs font-mono block whitespace-pre text-gray-800 dark:text-gray-300">SELECT *\nFROM Students\n<span className="text-blue-500 font-bold">LIMIT</span> 3;</code>
                     </div>
                     <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-inner">
                         <p className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest mb-2 flex items-center"><Terminal className="inline w-3 h-3 mr-1"/> Oracle Example</p>
                         <code className="text-xs font-mono block whitespace-pre text-gray-800 dark:text-gray-300">SELECT *\nFROM Students\n<span className="text-fuchsia-500 font-bold">FETCH FIRST</span> 3 ROWS ONLY;</code>
                     </div>
                </div>
            </div>
            
            <div className="lg:col-span-5 bg-gradient-to-br from-rose-900 to-red-900 p-8 rounded-3xl shadow-xl border border-rose-800 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute opacity-10 -right-6 -top-6 text-white scale-150 transform rotate-12"><Target className="w-48 h-48" /></div>
                 <h3 className="text-xl font-black text-white flex items-center mb-6 relative z-10 border-b border-rose-500/30 pb-4">
                    <Target className="w-6 h-6 mr-3 text-rose-400" /> Real-World Example
                 </h3>
                 <p className="text-gray-300 font-medium text-sm leading-relaxed mb-6 relative z-10">
                    In your blood bank database matrix system architecture, suppose you dynamically instantly want exactly tracking monitoring data for the heavily active <strong className="text-white">latest 5 donors.</strong>
                 </p>
                 <div className="relative z-10 shadow-2xl drop-shadow-2xl">
                    <CodeSnippetBlock codeSnippet={`SELECT TOP 5 *\nFROM Donors\nORDER BY DonationDate DESC;`} />
                 </div>
                 <div className="relative z-10 grid grid-cols-1 gap-2 mt-4 text-center text-sm font-bold">
                    <span className="text-rose-200 mb-1">Incredibly Useful Application Implementation Design Frameworks For:</span>
                    <div className="flex gap-2 justify-center">
                        <span className="bg-black/40 text-rose-400 px-3 py-1.5 rounded-lg border border-rose-500/40">Dashboards</span>
                        <span className="bg-black/40 text-rose-400 px-3 py-1.5 rounded-lg border border-rose-500/40">Analytics</span>
                        <span className="bg-black/40 text-rose-400 px-3 py-1.5 rounded-lg border border-rose-500/40">Reports</span>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-rose-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-rose-400" /> Professional Developer Tips
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 15+ Years SQL Experience</p>

          <div className="grid md:grid-cols-3 gap-6 relative z-10 border-gray-700/50">
            
             <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                <div className="flex items-center text-emerald-400 font-bold mb-1"><AlertTriangle className="w-5 h-5 mr-2" /> <h4 className="text-gray-100">Always use ORDER BY with TOP</h4></div>
                <div className="space-y-3">
                   <div className="bg-rose-950/30 p-2 text-xs rounded border border-rose-900/50 font-mono text-gray-400"><strong className="text-rose-400 text-xs">Bad:</strong> Random memory returns<br/>`SELECT TOP 5 * FROM Students;`</div>
                   <div className="bg-emerald-950/30 p-2 text-xs rounded border border-emerald-900/50 font-mono text-gray-300"><strong className="text-emerald-400 text-xs">Better:</strong> Guaranteed logic<br/>`SELECT TOP 5 * FROM Students ORDER BY Marks DESC;`</div>
                </div>
            </div>

            <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                 <div className="flex items-center text-orange-400 font-bold mb-1"><Layers className="w-5 h-5 mr-2" /> <h4 className="text-gray-100">Use TOP for pagination</h4></div>
                 <p className="text-gray-400 font-medium text-xs">For rendering web catalogs, extract limits optimally instead of massive dumps globally.</p>
                 <div className="bg-black/50 p-2.5 rounded border border-gray-700 mt-auto">
                   <p className="text-gray-400 text-xs mb-1">Top 10 highest priced products:</p>
                   <code className="text-[11px] text-orange-300 font-mono">SELECT TOP 10 * FROM Products ORDER BY Price DESC;</code>
                </div>
            </div>

             <div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
                 <div className="flex items-center text-blue-400 font-bold mb-1"><ShieldAlert className="w-5 h-5 mr-2" /> <h4 className="text-gray-100">Avoid retrieving too much</h4></div>
                 <p className="text-gray-400 font-medium text-xs mb-2">Massive bandwidth limits application framework rendering. Greatly improves speed dynamically limiting size.</p>
                 <div className="space-y-2 mt-auto">
                    <p className="text-gray-500 font-mono text-[10px] uppercase">Instead of:</p>
                    <code className="text-xs font-mono text-gray-400 bg-gray-950 p-1.5 block rounded line-through decoration-rose-500/50">SELECT * FROM Orders;</code>
                    <p className="text-blue-400 font-mono text-[10px] uppercase pt-1">Use:</p>
                    <code className="text-xs font-mono text-blue-300 bg-blue-950/30 p-1.5 block rounded border border-blue-900/50">SELECT TOP 100 * FROM Orders;</code>
                 </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSelectTop;