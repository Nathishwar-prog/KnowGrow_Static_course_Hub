import React, { useState } from 'react';
import { 
  Terminal, Copy, Check, Target, 
  HelpCircle, ShieldCheck, Database,
  Filter, Layers, ArrowRight,
  ListFilter, FileSearch, SplitSquareHorizontal,
  ThumbsUp, ThumbsDown, Zap, XCircle, Briefcase
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-orange-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | number | React.ReactNode)[][] }) => (
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

const SqlWhere: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-orange-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Filter className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL WHERE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Filter records in a query to retrieve only the exact rows that match your specific conditions.
        </p>
      </header>

      {/* 1. What is SQL WHERE? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-orange-500" /> 1. What is SQL WHERE?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            The SQL <code className="text-orange-600 dark:text-orange-400 font-bold bg-orange-50 dark:bg-orange-900/30 px-1.5 py-0.5 rounded">WHERE</code> clause is used to filter records in a query. It allows you to retrieve only the rows that match a specified condition. Without WHERE, SQL will return all records from the table.
          </p>
          <div className="mb-4">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">Commonly used with:</p>
            <ul className="flex flex-wrap gap-3 mt-3 font-mono text-sm text-orange-800 dark:text-orange-300">
               <li className="bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg border border-orange-100 dark:border-orange-800/30 flex items-center"><Terminal className="w-4 h-4 mr-2" /> SELECT</li>
               <li className="bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg border border-orange-100 dark:border-orange-800/30 flex items-center"><Target className="w-4 h-4 mr-2" /> UPDATE</li>
               <li className="bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg border border-orange-100 dark:border-orange-800/30 flex items-center"><XCircle className="w-4 h-4 mr-2 text-rose-500" /> DELETE</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-amber-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-orange-800/50 justify-center overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><ListFilter className="w-48 h-48 text-orange-500" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-orange-500/30 pb-4">
            <Filter className="w-6 h-6 mr-3 text-orange-400" /> Key Idea Pipeline
          </h2>
          <div className="relative z-10 flex flex-col md:flex-row gap-3 font-mono text-center w-full mx-auto justify-center items-center text-sm lg:text-base">
             <div className="bg-gray-800/90 border border-gray-600 px-4 py-3 flex justify-center text-gray-300 rounded shadow whitespace-nowrap"><span className="text-indigo-400 font-bold mr-2">SELECT</span> data</div>
             <ArrowRight className="text-orange-400 rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-gray-800/90 border border-gray-600 px-4 py-3 flex justify-center text-gray-300 rounded shadow whitespace-nowrap"><span className="text-indigo-400 font-bold mr-2">FROM</span> table</div>
             <ArrowRight className="text-orange-400 rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-orange-600/50 border border-orange-400/50 px-4 py-3 rounded-xl flex items-center justify-center font-bold text-orange-100 shadow-lg whitespace-nowrap"><span className="text-yellow-300 font-black mr-2">WHERE</span> cond.</div>
             <ArrowRight className="text-orange-400 rotate-90 md:rotate-0 flex-shrink-0" />
             <div className="bg-emerald-900/40 border border-emerald-500/50 px-4 py-3 rounded text-emerald-300 shadow whitespace-nowrap">Filtered Result</div>
          </div>
        </div>
      </section>

      {/* 2. SQL WHERE Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-orange-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-orange-500" /> 2. SQL WHERE Syntax
                </h2>
                <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table_name\nWHERE condition;`} title="Syntax" />
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.03]"><ListFilter className="w-64 h-64 text-orange-700" /></div>
                <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Layers className="w-5 h-5 mr-3 text-orange-500" /> Syntax Explanation
                </h3>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Keyword', 'Description']}
                        rows={[
                            [<strong className="text-orange-600 dark:text-orange-400 font-mono text-sm">SELECT</strong>, 'Retrieves data'],
                            [<strong className="text-gray-900 dark:text-white font-mono text-sm">FROM</strong>, 'Specifies the table'],
                            [<strong className="text-orange-600 dark:text-orange-400 font-mono text-sm bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded">WHERE</strong>, 'Filters rows based on a condition']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* 3, 4. Example Table & Basic Usage */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-500"></div>
           
           <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white flex items-center"><Database className="w-8 h-8 mr-3 text-orange-500" /> Employees Database Scenario</h2>
           
           <div className="mb-10">
               <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-orange-400 pl-3">3. Example Table: Employees</h3>
               <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[[1, 'John', 'IT', 50000], [2, 'Mary', 'HR', 45000], [3, 'David', 'IT', 60000], [4, 'Sarah', 'Finance', 55000]]} />
           </div>

           <div className="grid lg:grid-cols-2 gap-8 mb-4">
               <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                   <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-orange-400 pl-3">4. Basic SQL WHERE Example</h3>
                   <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE department = 'IT';`} title="Equal To String" />
                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-center">
                       <Filter className="w-4 h-4 text-emerald-500 mr-2" /> 
                       <strong>Explanation:</strong> The query returns only employees from the IT department.
                   </p>
               </div>
               
               <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100 dark:border-orange-800/40 flex flex-col justify-center">
                   <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-orange-400 pl-3">Output</h3>
                   <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[[1, 'John', 'IT', 50000], [3, 'David', 'IT', 60000]]} />
               </div>
           </div>
        </div>
      </section>

      {/* 5, 6. Numeric & Comparison Operators */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700 w-full">
                  <SplitSquareHorizontal className="w-6 h-6 mr-3 text-orange-500" /> 5. Numeric Conditions
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mb-6">Filter results mathematically.</p>
               
               <CodeSnippetBlock codeSnippet={`SELECT name, salary\nFROM Employees\nWHERE salary > 50000;`} title="Greater Than" />
               <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4 flex-1">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</p>
                   <ResultTable headers={['name', 'salary']} rows={[['David', 60000], ['Sarah', 55000]]} />
               </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700 w-full">
                  <FileSearch className="w-6 h-6 mr-3 text-orange-500" /> 6. Comparison Operators
               </h2>
               
               <div className="grid md:grid-cols-2 gap-8 items-start flex-1">
                   <ResultTable 
                       headers={['Operator', 'Meaning']}
                       rows={[
                           [<code className="font-bold text-indigo-500">=</code>, 'Equal to'],
                           [<code className="font-bold text-indigo-500">&gt;</code>, 'Greater than'],
                           [<code className="font-bold text-indigo-500">&lt;</code>, 'Less than'],
                           [<code className="font-bold text-indigo-500">&gt;=</code>, 'Greater than or equal'],
                           [<code className="font-bold text-indigo-500">&lt;=</code>, 'Less than or equal'],
                           [<code className="font-bold text-indigo-500">&lt;&gt; or !=</code>, 'Not equal']
                       ]}
                   />

                   <div className="flex flex-col gap-4">
                       <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE salary >= 55000;`} title="Example" />
                       <div className="bg-orange-50 dark:bg-orange-900/20 p-4 border border-orange-100 dark:border-orange-800/40 rounded-xl">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Result</p>
                          <ResultTable headers={['name', 'salary']} rows={[['David', 60000], ['Sarah', 55000]]} />
                       </div>
                   </div>
               </div>
          </div>
      </section>

      {/* 7, 8, 9, 10. Logical Operators */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              <h2 className="text-3xl font-black mb-10 text-center text-white border-b border-slate-700 pb-4">
                  Logical Operators
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
                  {/* 7. AND */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-emerald-400 font-black text-xl mb-2">7. AND Condition</h3>
                      <p className="text-slate-300 text-sm mb-4 border-b border-slate-700 pb-4">Requires <strong className="text-white border-b-2 border-emerald-500">all</strong> conditions to be true.</p>
                      <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE department = 'IT'\nAND salary > 55000;`} title="Both must match" />
                      <div className="mt-auto">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Output</p>
                          <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[[3, 'David', 'IT', 60000]]} />
                      </div>
                  </div>

                  {/* 8. OR */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-amber-400 font-black text-xl mb-2">8. OR Condition</h3>
                      <p className="text-slate-300 text-sm mb-4 border-b border-slate-700 pb-4">Requires <strong className="text-white border-b-2 border-amber-500">any</strong> condition to be true.</p>
                      <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE department = 'IT'\nOR department = 'HR';`} title="Either can match" />
                      <div className="mt-auto">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Output</p>
                          <ResultTable headers={['id', 'name', 'department']} rows={[[1, 'John', 'IT'], [2, 'Mary', 'HR'], [3, 'David', 'IT']]} />
                      </div>
                  </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                  {/* 9. NOT */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-rose-400 font-black text-xl mb-2">9. NOT Condition</h3>
                      <p className="text-slate-300 text-sm mb-4 border-b border-slate-700 pb-4">Reverses a condition.</p>
                      <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Employees\nWHERE NOT department = 'IT';`} title="Exclude match" />
                      <div className="mt-auto">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Output</p>
                          <ResultTable headers={['id', 'name', 'department']} rows={[[2, 'Mary', 'HR'], [4, 'Sarah', 'Finance']]} />
                      </div>
                  </div>

                  {/* 10. Multiple */}
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 flex flex-col">
                      <h3 className="text-indigo-400 font-black text-xl mb-2">10. Multiple Conditions</h3>
                      <p className="text-slate-300 text-sm mb-4 border-b border-slate-700 pb-4">Combining columns and criteria.</p>
                      <CodeSnippetBlock codeSnippet={`SELECT name, salary\nFROM Employees\nWHERE department = 'IT'\nAND salary > 50000;`} title="Chaining conditions" />
                      <div className="mt-auto">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Output</p>
                          <ResultTable headers={['name', 'salary']} rows={[['David', 60000]]} />
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* 11. SQL WHERE Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="border border-orange-200 dark:border-orange-900/40 p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col">
              <h2 className="text-3xl font-black mb-10 text-center border-b border-gray-200 dark:border-gray-700 pb-4 text-gray-900 dark:text-orange-400">
                  11. SQL WHERE Visualization
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-mono text-center">
                  
                  {/* Original */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow w-full md:w-auto">
                      <p className="font-bold text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2 uppercase tracking-wide">Original Table: Employees</p>
                      <div className="flex flex-col text-gray-700 dark:text-gray-300 gap-1 text-xs">
                          <div className="flex bg-gray-200 dark:bg-gray-800 p-2 font-bold"><span className="w-8">id</span><span className="w-16">name</span><span className="w-24">department</span><span className="w-16">salary</span></div>
                          <div className="flex bg-orange-100 dark:bg-orange-900/30 p-2 border border-orange-300 dark:border-orange-700/50 rounded"><span className="w-8">1</span><span className="w-16 font-bold text-orange-600 dark:text-orange-400">John</span><span className="w-24 font-bold text-orange-600 dark:text-orange-400">IT</span><span className="w-16">50000</span></div>
                          <div className="flex p-2 opacity-50 bg-gray-100 dark:bg-gray-800/80 rounded"><span className="w-8">2</span><span className="w-16">Mary</span><span className="w-24 line-through">HR</span><span className="w-16">45000</span></div>
                          <div className="flex bg-orange-100 dark:bg-orange-900/30 p-2 border border-orange-300 dark:border-orange-700/50 rounded"><span className="w-8">3</span><span className="w-16 font-bold text-orange-600 dark:text-orange-400">David</span><span className="w-24 font-bold text-orange-600 dark:text-orange-400">IT</span><span className="w-16">60000</span></div>
                          <div className="flex p-2 opacity-50 bg-gray-100 dark:bg-gray-800/80 rounded"><span className="w-8">4</span><span className="w-16">Sarah</span><span className="w-24 line-through">Finance</span><span className="w-16">55000</span></div>
                      </div>
                  </div>

                  {/* Query */}
                  <div className="flex flex-col items-center gap-2">
                       <ArrowRight className="text-orange-500 w-8 h-8 rotate-90 md:rotate-0 animate-pulse" />
                       <div className="bg-orange-50 dark:bg-orange-950 border border-orange-300 dark:border-orange-500/50 p-4 rounded-xl text-orange-800 dark:text-orange-300 shadow z-10 w-48 text-left">
                           <div className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-2">Filter Query:</div>
                           <div className="leading-snug">SELECT *<br/>FROM Employees<br/>WHERE <span className="bg-orange-200 dark:bg-orange-900 px-1 font-bold">dept = 'IT'</span></div>
                       </div>
                       <ArrowRight className="text-orange-500 w-8 h-8 rotate-90 md:rotate-0 animate-pulse" />
                  </div>

                  {/* Filtered View */}
                  <div className="bg-orange-100 dark:bg-orange-900/20 p-4 border border-orange-300 dark:border-orange-500/50 rounded-xl shadow w-full md:w-auto relative">
                      <div className="absolute -top-3 -right-3 bg-emerald-500 text-white font-bold px-3 py-1 text-xs rounded-full shadow-lg">Filtered</div>
                      <p className="font-bold text-orange-800 dark:text-orange-400 mb-3 border-b border-orange-300 dark:border-orange-500/50 pb-2 uppercase tracking-wide">Filtered Result</p>
                      <div className="flex flex-col text-orange-900 dark:text-orange-100 gap-1 text-xs">
                          <div className="flex p-2 bg-orange-200 dark:bg-orange-900/50 rounded font-bold"><span className="w-16 text-center text-base">John</span></div>
                          <div className="flex p-2 bg-orange-200 dark:bg-orange-900/50 rounded font-bold"><span className="w-16 text-center text-base">David</span></div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* 12, 13, 14. UPDATE, DELETE, Real-world */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-8 items-stretch">
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  <Target className="w-5 h-5 mr-3 text-indigo-500" /> 12. WHERE with UPDATE
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">WHERE prevents updating all rows. It targets specific rows.</p>
              <CodeSnippetBlock codeSnippet={`UPDATE Employees\nSET salary = 52000\nWHERE id = 1;`} title="Update Query" />
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Result</p>
                  <ResultTable headers={['id', 'name', 'salary']} rows={[[1, 'John', 52000]]} />
              </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-4 flex items-center text-rose-600 dark:text-rose-400">
                  <XCircle className="w-5 h-5 mr-3 text-rose-500" /> 13. WHERE with DELETE
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">WHERE prevents deleting all rows from a table.</p>
              <CodeSnippetBlock codeSnippet={`DELETE FROM Employees\nWHERE id = 2;`} title="Delete Query" />
              <div className="mt-auto pt-4 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-900/50">
                  <p className="text-sm font-bold text-rose-700 dark:text-rose-400 flex items-center">
                     <Check className="w-4 h-4 mr-2" /> This deletes Mary's record only.
                  </p>
              </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-indigo-900/20 p-8 rounded-3xl shadow-sm border border-indigo-100 dark:border-indigo-800/40 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 text-indigo-500"/>
                  14. Real-World Example
              </h2>
              
              <div className="flex-1">
                  <p className="font-bold text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">Table: Orders</p>
                  <ResultTable headers={['order_id', 'customer', 'amount']} rows={[[1, 'John', 500], [2, 'Lisa', 700], [3, 'David', 300]]} />
                  
                  <div className="mt-4 mb-4">
                      <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Orders\nWHERE amount > 400;`} title="Find High Value Orders" />
                  </div>
              </div>
              
              <div className="mt-auto">
                 <p className="font-bold text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">Output</p>
                 <ResultTable headers={['order_id', 'customer', 'amount']} rows={[[1, 'John', 500], [2, 'Lisa', 700]]} />
              </div>
          </div>

      </section>

    </div>
  );
};

export default SqlWhere;