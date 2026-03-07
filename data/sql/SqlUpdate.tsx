import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Target, 
  HelpCircle, ArrowDown, ArrowRight, ShieldAlert,
  Edit3, RefreshCw, Layers, Replace, AlertTriangle,
  Zap, CheckCircle2, Activity, Briefcase
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

const SqlUpdate: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow border-2 border-white dark:border-gray-900 uppercase tracking-widest">DML</div>
          <Edit3 className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL UPDATE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Modify existing records in a database table cleanly and efficiently.
        </p>
      </header>

      {/* Intro Concept Visualizer */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> 1. What is SQL UPDATE?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            The SQL <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">UPDATE</code> statement is used to modify existing records in a database table. It allows you to change the values of one or more columns for specific rows.
          </p>
          <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-6 flex items-center uppercase tracking-wider"><Database className="w-4 h-4 mr-2"/> This is a DML (Data Manipulation Language) operation.</p>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 p-5 rounded-xl">
             <p className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-sm border-b border-gray-200 dark:border-gray-700 pb-2">Common Workflows:</p>
             <ul className="space-y-2 font-mono text-sm text-gray-600 dark:text-gray-400">
                 <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Update an employee's salary</li>
                 <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Change a customer's address</li>
                 <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Modify a product price</li>
             </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-emerald-800/50 items-center justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><RefreshCw className="w-48 h-48 text-emerald-500" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-white mb-8 relative z-10 border-b border-emerald-500/30 pb-4 w-full">
            <Target className="w-6 h-6 mr-3 text-emerald-400" /> Key Idea: Modification
          </h2>

          <div className="relative z-10 font-mono font-black text-center w-full max-w-sm mx-auto flex flex-col items-center gap-4">
             <div className="bg-gray-800/80 border border-gray-600 px-6 py-4 rounded-xl text-gray-300 w-full shadow-sm">
                Existing Data
             </div>
             
             <div className="bg-emerald-500/20 border-2 border-emerald-400/50 px-4 py-2 rounded-lg text-emerald-300 text-sm flex items-center w-4/5 justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Edit3 className="w-4 h-4 mr-2" /> UPDATE Query
             </div>
             
             <div className="bg-emerald-900 border border-emerald-500 px-6 py-4 rounded-xl text-emerald-100 w-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                Modified Data
             </div>
          </div>
        </div>
      </section>

      {/* Syntax & Configuration Architecture */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-emerald-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-emerald-500" /> 2. SQL UPDATE Syntax
                </h2>
                <CodeSnippetBlock codeSnippet={`UPDATE table_name\nSET column1 = value1,\n    column2 = value2\nWHERE condition;`} />
            </div>

            <div className="lg:col-span-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><Layers className="w-64 h-64 text-emerald-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Replace className="w-6 h-6 mr-3 text-emerald-500" /> Syntax Explanation
                </h2>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Keyword', 'Description']}
                        rows={[
                            [<strong className="text-emerald-600 dark:text-emerald-400 font-mono text-base bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">UPDATE</strong>, 'Specifies the table to modify'],
                            [<strong className="text-blue-600 dark:text-blue-400 font-mono text-base bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">SET</strong>, 'Assigns new values to columns'],
                            [<strong className="text-amber-600 dark:text-amber-500 font-mono text-base bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">WHERE</strong>, 'Specifies which rows to update']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* 3 & 4 Basic Example Pipeline */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="border border-emerald-200 dark:border-emerald-900/40 p-8 sm:p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col">
              <div className="mb-10 text-center border-b border-gray-200 dark:border-gray-700 pb-6">
                 <h2 className="text-3xl font-black text-gray-900 dark:text-emerald-400">
                     3 & 4. Basic SQL UPDATE Example
                 </h2>
                 <p className="text-gray-500 mt-2 font-medium">Updating a single row based on an ID condition.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                  <div className="flex flex-col gap-6">
                      <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                          <p className="font-bold text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-4 border-l-4 border-emerald-500 pl-2">Before Update: Employees</p>
                          <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[
                              [<span className="text-amber-500 font-bold bg-amber-50 dark:bg-amber-900/20 px-1 py-0.5 rounded">1</span>, 'John', 'IT', <span className="line-through opacity-50 text-rose-500">50000</span>], 
                              [2, 'Mary', 'HR', 45000],
                              [3, 'David', 'IT', 60000],
                              [4, 'Sarah', 'Finance', 55000]
                          ]} />
                      </div>
                      
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
                          <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3 uppercase tracking-widest text-xs flex items-center">
                              <Terminal className="w-4 h-4 mr-2" /> Action: The Query
                          </h4>
                          <CodeSnippetBlock codeSnippet={`UPDATE Employees\nSET salary = 52000\nWHERE id = 1;`} />
                      </div>
                  </div>
                  
                  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-center relative">
                      <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center">
                         <Zap className="w-3 h-3 mr-1" /> Success
                      </div>
                      <p className="font-bold uppercase tracking-wider text-emerald-400 mb-6 text-sm flex items-center border-b border-gray-800 pb-3"><CheckCircle2 className="mr-2 w-5 h-5"/> After Update</p>
                      
                      <div className="ring-1 ring-gray-700 rounded-xl overflow-hidden shadow-sm mb-6">
                          <table className="w-full text-sm text-left">
                              <thead className="bg-gray-800 text-gray-300 uppercase font-bold text-xs">
                                  <tr><th className="px-4 py-3 border-b border-gray-700">id</th><th className="px-4 py-3 border-b border-gray-700">name</th><th className="px-4 py-3 border-b border-gray-700 text-emerald-400 bg-emerald-900/10 border-l border-r border-emerald-800">salary</th></tr>
                              </thead>
                              <tbody className="bg-gray-800/50 font-medium text-gray-300 font-mono">
                                  <tr className="border-b border-gray-700 bg-emerald-900/20 text-emerald-100">
                                      <td className="px-4 py-3">1</td><td className="px-4 py-3">John</td><td className="px-4 py-3 font-bold text-emerald-400 bg-emerald-900/30 border-l border-r border-emerald-800 flex items-center">52000 <span className="ml-2 text-[10px] bg-emerald-500/30 px-1 rounded text-emerald-200">NEW</span></td>
                                  </tr>
                                  <tr className="border-b border-gray-800">
                                      <td className="px-4 py-3 opacity-60">2</td><td className="px-4 py-3 opacity-60">Mary</td><td className="px-4 py-3 opacity-60 border-l border-r border-gray-700/50">45000</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      
                      <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700 text-gray-400 text-sm leading-relaxed">
                          <strong className="text-gray-200 block mb-1">Explanation:</strong> 
                          The salary of the employee with <code className="bg-gray-900 text-amber-400 px-1 py-0.5 rounded">id = 1</code> is successfully updated from 50000 → <span className="text-emerald-400 font-bold">52000</span>.
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Multiple Updates Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
          
          {/* Multiple Columns */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
                  <Table2 className="w-6 h-6 mr-3 text-blue-500" />
                  5. Updating Multiple Columns
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">You can update more than one column at the same time by separating them with commas.</p>
              
              <CodeSnippetBlock codeSnippet={`UPDATE Employees\nSET department = 'Management',\n    salary = 70000\nWHERE id = 2;`} title="Query" />
              
              <div className="mt-4">
                 <p className="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 border-l-4 border-blue-500 pl-2">Result</p>
                 <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[
                     ['2', 'Mary', <span className="text-blue-600 dark:text-blue-400 font-bold">Management</span>, <span className="text-blue-600 dark:text-blue-400 font-bold">70000</span>]
                 ]} />
              </div>
          </div>

          {/* Multiple Rows */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
                  <Layers className="w-6 h-6 mr-3 text-purple-500" />
                  6. Updating Multiple Rows
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">If multiple rows match the WHERE condition, <strong className="text-purple-600 dark:text-purple-400">they will all be updated</strong>.</p>
              
              <CodeSnippetBlock codeSnippet={`UPDATE Employees\nSET salary = 65000\nWHERE department = 'IT';`} title="Query" />
              
              <div className="mt-4">
                 <p className="font-bold text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3 border-l-4 border-purple-500 pl-2">Result (All IT Staff)</p>
                 <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[
                     ['1', 'John', 'IT', <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 px-1 py-0.5 rounded">65000</span>],
                     ['3', 'David', 'IT', <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 px-1 py-0.5 rounded">65000</span>]
                 ]} />
              </div>
          </div>

      </section>

      {/* The Danger Zone: UPDATE without WHERE */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-gradient-to-r from-rose-900 to-red-950 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-rose-800/50 flex flex-col md:flex-row gap-10 items-center">
               
               <div className="md:w-1/3 flex flex-col items-center text-center relative z-10">
                   <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.4)] animate-pulse border border-rose-500/50">
                       <ShieldAlert className="w-12 h-12 text-rose-500" />
                   </div>
                   <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
                       IMPORTANT WARNING
                   </h2>
                   <p className="text-rose-200 font-bold uppercase tracking-widest text-sm mb-4">7. UPDATE Without WHERE</p>
                   <p className="text-rose-100/90 leading-relaxed font-medium bg-rose-950/50 p-4 rounded-xl border border-rose-800/50">
                       If you do not use WHERE, <strong className="text-white bg-rose-600 px-1.5 py-0.5 rounded ml-1">ALL ROWS</strong> in the table will be updated.
                   </p>
               </div>
               
               <div className="md:w-2/3 w-full bg-black/40 backdrop-blur-sm border border-rose-500/30 p-6 rounded-2xl relative z-10 shadow-inner">
                    <p className="text-rose-400 font-mono text-xs uppercase tracking-widest mb-3 flex items-center"><Terminal size={14} className="mr-2"/> The Dangerous Query</p>
                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 font-mono text-sm mb-6">
                        <span className="text-emerald-400">UPDATE</span> <span className="text-gray-300">Employees</span><br/>
                        <span className="text-blue-400">SET</span> <span className="text-gray-300">salary = </span><span className="text-rose-400 font-bold">50000</span><span className="text-gray-300">;</span>
                        <div className="mt-2 text-gray-500 text-xs italic">-- Missing WHERE clause!</div>
                    </div>
                    
                    <p className="text-rose-400 font-mono text-xs uppercase tracking-widest mb-3 flex items-center"><Target size={14} className="mr-2"/> Disastrous Result</p>
                    <div className="overflow-hidden rounded-xl border border-rose-800/50">
                        <table className="w-full text-sm font-mono text-left bg-gray-900 text-gray-300">
                             <thead className="bg-rose-950 text-rose-300 text-xs">
                                 <tr><th className="px-4 py-2 border-b border-rose-900">Name</th><th className="px-4 py-2 border-b border-rose-900 border-l bg-rose-900/40">Salary</th></tr>
                             </thead>
                             <tbody>
                                 <tr><td className="px-4 py-2">John</td><td className="px-4 py-2 text-rose-400 font-bold border-l border-rose-900/30 bg-rose-500/10">50000</td></tr>
                                 <tr><td className="px-4 py-2 opacity-80">Mary</td><td className="px-4 py-2 text-rose-400 font-bold border-l border-rose-900/30 bg-rose-500/10">50000</td></tr>
                                 <tr><td className="px-4 py-2 opacity-60">David</td><td className="px-4 py-2 text-rose-400 font-bold border-l border-rose-900/30 bg-rose-500/10">50000</td></tr>
                                 <tr><td className="px-4 py-2 opacity-40">Sarah</td><td className="px-4 py-2 text-rose-400 font-bold border-l border-rose-900/30 bg-rose-500/10">50000</td></tr>
                             </tbody>
                        </table>
                    </div>
                    <p className="text-center text-rose-200 mt-4 text-sm font-bold bg-rose-500/20 py-2 rounded-lg border border-rose-500/30">Every single employee salary becomes 50000.</p>
               </div>

           </div>
      </section>

      {/* Advanced Concept Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Visual Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
              <h2 className="text-2xl font-black mb-6 border-b border-gray-200 dark:border-gray-700 pb-4 text-gray-900 dark:text-emerald-400 flex items-center">
                  <Table2 className="w-6 h-6 mr-3 text-emerald-500"/>
                  8. UPDATE Visualization
              </h2>
              
              <div className="flex flex-col font-mono text-sm bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-gray-500 uppercase">Before:</span>
                      <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm w-3/4 flex justify-between">
                         <span className="text-gray-400">1</span><span>John</span><span className="line-through decoration-rose-500 text-gray-500">50000</span>
                      </span>
                  </div>
                  
                  <div className="flex justify-center items-center py-2 h-16 w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center flex-col bg-emerald-500/10 border-y border-emerald-500/30">
                          <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 px-3 py-1 rounded text-xs font-bold font-sans">SET salary = 52000</span>
                          <ArrowDown className="text-emerald-500 h-4 mt-1" />
                      </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-emerald-500 uppercase">After:</span>
                      <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg border-2 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)] w-3/4 flex justify-between items-center bg-emerald-50/50 dark:bg-emerald-900/20">
                         <span className="text-gray-400">1</span><span>John</span><span className="text-emerald-600 dark:text-emerald-400 font-bold text-base">52000</span>
                      </span>
                  </div>
              </div>
          </div>

          <div className="border border-emerald-200 dark:border-emerald-900/40 p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-center">
              <h2 className="text-2xl font-black mb-4 border-b border-gray-100 dark:border-gray-700 pb-4 text-gray-900 dark:text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-cyan-500"/>
                  9. Math Operations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium text-sm">You can update values dynamically using mathematical calculations.</p>
              
              <CodeSnippetBlock codeSnippet={`-- Increase salary by 10%\nUPDATE Employees\nSET salary = salary * 1.10;`} title="Mathematical Update" />
              
              <div className="mt-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-4 rounded-xl border border-cyan-100 dark:border-cyan-800/30">
                  <ResultTable headers={['name', 'old salary', 'new salary']} rows={[
                      ['John', '50000', <span className="font-bold text-cyan-600 dark:text-cyan-400">55000</span>],
                      ['Mary', '45000', <span className="font-bold text-cyan-600 dark:text-cyan-400">49500</span>]
                  ]} />
              </div>
          </div>
      </section>

      {/* Advanced Examples */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
              <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center">
                  <Layers className="mr-3 w-6 h-6 text-indigo-500" />
                  10. Multiple Conditions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium text-sm">
                  You can use logical operators like <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1 py-0.5 rounded">AND</code> / <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1 py-0.5 rounded">OR</code> to narrow down the rows to update.
              </p>
              
              <CodeSnippetBlock codeSnippet={`UPDATE Employees\nSET salary = 70000\nWHERE department = 'IT'\nAND salary < 60000;`} title="Complex WHERE Clause" />
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-xl mt-2 font-mono text-sm text-indigo-800 dark:text-indigo-300">
                 This updates <strong className="font-bold">only</strong> IT employees earning less than 60000.
              </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-emerald-900/20 p-8 rounded-3xl shadow-sm border border-emerald-100 dark:border-emerald-800/40 flex flex-col justify-center">
              <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-emerald-500"/>
                  11. Real-World Example
              </h2>
              
              <p className="font-bold text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">Table: Products</p>
              <div className="mb-4 bg-white dark:bg-gray-900 p-2 rounded-xl">
                 <ResultTable headers={['id', 'product', 'price']} rows={[[1, 'Laptop', 50000], [2, 'Mouse', 500], [3, 'Keyboard', 1500]]} />
              </div>
              
              <div className="mb-4">
                  <CodeSnippetBlock codeSnippet={`UPDATE Products\nSET price = 55000\nWHERE product = 'Laptop';`} title="Updating a Product Price" />
              </div>
              
              <p className="font-bold text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-widest mt-2">Result Data</p>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl mt-2 flex items-center shadow-sm">
                 <div className="font-mono font-bold text-sm flex gap-6 w-full justify-around text-gray-800 dark:text-gray-200">
                    <span className="flex flex-col text-center"><span className="text-gray-500 text-xs mb-1">product</span>Laptop</span>
                    <span className="flex flex-col text-center"><span className="text-emerald-500 text-xs mb-1">price (updated)</span><span className="text-emerald-600 dark:text-emerald-400 text-lg">55000</span></span>
                 </div>
              </div>
          </div>

      </section>

    </div>
  );
};

export default SqlUpdate;