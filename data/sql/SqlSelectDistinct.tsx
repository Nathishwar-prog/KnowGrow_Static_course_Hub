import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, CheckCircle, HelpCircle, AlertTriangle, 
  GitBranch, ListFilter, Scissors, Fingerprint, PlusCircle,
  FileSearch, Activity, Layers, ArrowRight
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

// Helper for rendering tables
const ResultTable = ({ headers, rows, highlightPredicate }: { headers: string[], rows: (string | number)[][], highlightPredicate?: (colIndex: number, rowIndex: number, cell: string | number) => boolean }) => (
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
            {row.map((cell, j) => {
               const isHighlighted = highlightPredicate && highlightPredicate(j, i, cell);
               return (
                  <td key={j} className={`px-4 py-3 ${isHighlighted ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}>
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

const SqlSelectDistinct: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Fingerprint className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL SELECT DISTINCT
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The essential command to surgically extract only unique values and remove duplicates.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-indigo-500" /> What is SQL SELECT DISTINCT?
          </h2>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl mb-6">
            <span className="font-bold text-indigo-800 dark:text-indigo-400 text-lg">
              DISTINCT = show only unique values
            </span>
            <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300 font-medium">
              The SELECT DISTINCT statement is used to return only unique values from a column. It dynamically removes duplicate records from the resulting output.
            </p>
          </div>
          <div className="relative z-10 space-y-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Scissors className="w-5 h-5 mr-3 text-indigo-500" /> Slices away duplicate identical rows.</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><ListFilter className="w-5 h-5 mr-3 text-purple-500" /> Condenses lists to pure unique entities.</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/20 transform"><Terminal className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-indigo-400" /> Basic Syntax
          </h2>
          <div className="relative z-10 space-y-4 text-sm font-bold text-indigo-50">
            <CodeSnippetBlock codeSnippet={`SELECT DISTINCT column_name\nFROM table_name;`} />
            <ul className="space-y-3 font-mono text-xs text-indigo-300 bg-black/30 p-5 rounded-xl border border-indigo-800/40">
                <li className="flex"><span className="text-indigo-400 w-24">SELECT</span> <span className="text-white">&rarr; Retrieves data</span></li>
                <li className="flex"><span className="text-fuchsia-400 w-24">DISTINCT</span> <span className="text-white">&rarr; Removes duplicate values</span></li>
                <li className="flex"><span className="text-sky-400 w-24">FROM</span> <span className="text-white">&rarr; Specifies the table</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Example - Setup */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Table2 className="text-indigo-500 w-8 h-8 mr-3" /> Practical Example Setup
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center"><PlusCircle className="w-5 h-5 mr-2 text-indigo-500" /> Step 1 & 2: Create & Insert</h3>
                <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (\n  StudentID INT,\n  Name VARCHAR(50),\n  Marks INT,\n  City VARCHAR(50)\n);\n\nINSERT INTO Students VALUES\n(1,'Arun',85,'Chennai'),\n(2,'Divya',92,'Madurai'),\n(3,'Kiran',40,'Chennai'),\n(4,'Meena',70,'Coimbatore'),\n(5,'Rahul',35,'Madurai');`} />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center"><Table2 className="w-5 h-5 mr-2 text-purple-500" /> Students Table Visualization</h3>
              <ResultTable 
                headers={['StudentID', 'Name', 'Marks', 'City']}
                rows={[
                  [1, 'Arun', 85, 'Chennai'],
                  [2, 'Divya', 92, 'Madurai'],
                  [3, 'Kiran', 40, 'Chennai'],
                  [4, 'Meena', 70, 'Coimbatore'],
                  [5, 'Rahul', 35, 'Madurai']
                ]}
                highlightPredicate={(colIndex, _, cell) => colIndex === 3 && (cell === 'Chennai' || cell === 'Madurai')}
              />
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl">
                 <p className="text-sm font-bold text-amber-800 dark:text-amber-400 mb-2">Notice that:</p>
                 <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 font-medium space-y-1">
                    <li><strong className="text-indigo-600 dark:text-indigo-400">Chennai</strong> appears twice</li>
                    <li><strong className="text-indigo-600 dark:text-indigo-400">Madurai</strong> appears twice</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons & Variations Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          DISTINCT Execution Paths
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* The Core Comparison */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                  <GitBranch className="w-6 h-6 mr-3 text-indigo-500" /> DISTINCT vs Without DISTINCT
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl">
                        <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Without DISTINCT</h4>
                        <CodeSnippetBlock codeSnippet={`SELECT City\nFROM Students;`} />
                        <div className="mt-4">
                           <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Output</p>
                           <ul className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner">
                               <li>Chennai</li>
                               <li>Madurai</li>
                               <li className="text-red-500 font-bold bg-red-100/50 dark:bg-red-900/30 px-1 rounded">Chennai</li>
                               <li>Coimbatore</li>
                               <li className="text-red-500 font-bold bg-red-100/50 dark:bg-red-900/30 px-1 rounded">Madurai</li>
                           </ul>
                           <p className="mt-3 text-sm font-bold text-red-600 dark:text-red-400 text-center uppercase tracking-widest">Duplicates appear.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl relative">
                        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 hidden md:flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 z-10 shadow-sm"><ArrowRight className="w-4 h-4 text-gray-400" /></div>
                        
                        <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> With DISTINCT</h4>
                        <CodeSnippetBlock codeSnippet={`SELECT DISTINCT City\nFROM Students;`} />
                        <div className="mt-4">
                           <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Output</p>
                           <ul className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner">
                               <li className="text-emerald-600 dark:text-emerald-400 font-bold">Chennai</li>
                               <li className="text-emerald-600 dark:text-emerald-400 font-bold">Madurai</li>
                               <li className="text-emerald-600 dark:text-emerald-400 font-bold">Coimbatore</li>
                           </ul>
                           <p className="mt-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-center uppercase tracking-widest">Duplicates removed.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Multiple Columns */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <Layers className="w-5 h-5 mr-3 text-blue-500" /> 4️⃣ DISTINCT with Multiple Columns
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">DISTINCT can be applied to multiple columns. This returns unique <strong>combinations</strong> of City and Marks.</p>
              <CodeSnippetBlock codeSnippet={`SELECT DISTINCT City, Marks\nFROM Students;`} />
              <ResultTable 
                headers={['City', 'Marks']}
                rows={[
                  ['Chennai', 85],
                  ['Madurai', 92],
                  ['Chennai', 40],
                  ['Coimbatore', 70],
                  ['Madurai', 35]
                ]}
              />
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-xs font-bold text-blue-800 dark:text-blue-300">
                Here duplicates are checked based on both columns together!
              </div>
            </div>

            {/* ORDER BY & COUNT combinations */}
            <div className="flex flex-col gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-400 transition-colors flex-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                    <ListFilter className="w-5 h-5 mr-3 text-purple-500" /> 6️⃣ DISTINCT with ORDER BY
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">We can sort unique values alphabetically.</p>
                  <CodeSnippetBlock codeSnippet={`SELECT DISTINCT City\nFROM Students\nORDER BY City;`} />
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">Output</p>
                      <ul className="font-mono text-sm space-y-1 text-gray-700 dark:text-gray-300"><li>Chennai</li><li>Coimbatore</li><li>Madurai</li></ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-fuchsia-400 transition-colors flex-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                    <Activity className="w-5 h-5 mr-3 text-fuchsia-500" /> 7️⃣ DISTINCT with COUNT
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Count unique values directly.</p>
                  <CodeSnippetBlock codeSnippet={`SELECT COUNT(DISTINCT City)\nFROM Students;`} />
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <div>
                         <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">COUNT Output</p>
                         <p className="font-mono text-xl font-black text-fuchsia-600 dark:text-fuchsia-400">3</p>
                      </div>
                      <span className="text-xs font-bold text-gray-500">There are 3 unique cities.</span>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Internal Workings & Real World */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800">
          <div className="absolute -bottom-10 -right-10 p-8 opacity-10 text-indigo-400"><Database className="w-64 h-64" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-indigo-400" /> How DISTINCT Works Internally
          </h2>
          <p className="text-indigo-200 mb-6 font-medium text-sm relative z-10">SQL strictly performs these engine steps:</p>
          
          <div className="space-y-4 relative z-10">
              <div className="flex items-center bg-white/5 p-4 rounded-xl border border-indigo-500/30">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black flex items-center justify-center mr-4 shrink-0">1</div>
                  <p className="font-medium text-indigo-50 text-sm">Retrieve column values from the disk table.</p>
              </div>
              <div className="flex items-center bg-white/5 p-4 rounded-xl border border-indigo-500/30">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-black flex items-center justify-center mr-4 shrink-0">2</div>
                  <p className="font-medium text-indigo-50 text-sm">Compare rows holding the requested combination.</p>
              </div>
              <div className="flex items-center bg-red-500/10 p-4 rounded-xl border border-red-500/30">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white font-black flex items-center justify-center mr-4 shrink-0">3</div>
                  <p className="font-medium text-red-100 text-sm">Remove duplicates (memory pruning phase).</p>
              </div>
              <div className="flex items-center bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center mr-4 shrink-0">4</div>
                  <p className="font-medium text-emerald-100 text-sm">Return final unique values to output stream.</p>
              </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors flex flex-col justify-center">
            <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <FileSearch className="w-6 h-6 mr-3 text-indigo-500" /> Real-World Example
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold mb-4">In your blood bank system (Donors come from multiple cities):</p>
            
            <ResultTable 
                headers={['DonorID', 'Name', 'City']}
                rows={[[1, 'Arun', 'Chennai'], [2, 'Divya', 'Madurai'], [3, 'Ravi', 'Chennai']]}
            />
            
            <div className="space-y-4 my-6">
                <CodeSnippetBlock codeSnippet={`SELECT DISTINCT City\nFROM Donors;`} />
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl">
                <p className="text-sm font-bold text-indigo-800 dark:text-indigo-300 mb-2 border-b border-indigo-200 dark:border-indigo-800/50 pb-2">Highly Useful For:</p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                   <span className="text-xs bg-white dark:bg-gray-900 py-1.5 px-2 rounded-md shadow-sm text-center font-bold text-indigo-700 dark:text-indigo-400">&bull; Filtering city lists</span>
                   <span className="text-xs bg-white dark:bg-gray-900 py-1.5 px-2 rounded-md shadow-sm text-center font-bold text-indigo-700 dark:text-indigo-400">&bull; Dashboard setup</span>
                   <span className="text-xs bg-white dark:bg-gray-900 py-1.5 px-2 rounded-md shadow-sm text-center font-bold text-indigo-700 dark:text-indigo-400">&bull; Report generation</span>
                </div>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-indigo-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-indigo-400" /> 15+ Years SQL Experience
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 Developer Tips</p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-red-400 font-bold"><AlertTriangle className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use DISTINCT carefully</h4>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                   <code className="text-red-400 font-bold">DISTINCT</code> can significantly slow down queries on very large datasets because it requires the database engine to perform sort/hash operations across millions of rows.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-amber-400 font-bold"><GitBranch className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Sometimes GROUP BY is better</h4>
                <div className="bg-black/50 p-2 rounded border border-gray-700 mb-2 mt-2">
                   <code className="text-xs text-amber-300 font-mono">SELECT City FROM Students GROUP BY City;</code>
                </div>
                <p className="text-gray-400 font-medium text-xs">
                   Produces the same result as DISTINCT, but often allows better index utilization in complex queries.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-emerald-400 font-bold"><FileSearch className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use DISTINCT for reports</h4>
                <div className="bg-black/50 p-2 rounded border border-gray-700 mb-2 mt-2">
                   <code className="text-xs text-emerald-300 font-mono">SELECT DISTINCT Department FROM Employees;</code>
                </div>
                <p className="text-gray-400 font-medium text-xs">
                  A classic architecture pattern: Extracting unique departments, statuses, or categories to populate UI filter dropdowns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm">
              <div className="mt-1 flex-shrink-0 text-indigo-400 font-bold"><Target className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Avoid unnecessary DISTINCT</h4>
                <p className="text-gray-400 font-medium text-sm leading-relaxed block bg-indigo-900/30 border border-indigo-800/50 p-3 rounded-lg">
                   If the table already has a <strong className="text-white">PRIMARY KEY</strong> or <strong className="text-white">UNIQUE CONSTRAINT</strong> on the selected columns, duplicates are impossible. Calling DISTINCT here is redundant and wastes CPU.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlSelectDistinct;