import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, GraduationCap, Network, Activity,
  LineChart, BrainCircuit, Code2, Layers, ShieldCheck, Play
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

const SqlTraining: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Training
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate structured learning program teaching exactly how data is seamlessly manipulated logically natively dynamically.
        </p>
      </header>

      {/* Intro Definition & Context */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> 1. What is SQL Training?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            SQL Training is a strongly structured learning program teaching exactly how to <strong className="font-bold text-emerald-600 dark:text-emerald-400">store, retrieve, manage, and analyze</strong> precise data fully via natively dynamically executed relational queries physically.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4 font-mono text-sm tracking-tight text-emerald-800 dark:text-emerald-300">
             <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 text-center rounded-lg border border-emerald-100 dark:border-emerald-800/50">MySQL</div>
             <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 text-center rounded-lg border border-emerald-100 dark:border-emerald-800/50">PostgreSQL</div>
             <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 text-center rounded-lg border border-emerald-100 dark:border-emerald-800/50 text-[10px] sm:text-xs">OS MS SQL Server</div>
             <div className="bg-emerald-50 dark:bg-emerald-900/30 p-2 text-center rounded-lg border border-emerald-100 dark:border-emerald-800/50">SQLite</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-emerald-800/50 line-height-relaxed">
          <div className="absolute top-0 right-0 -m-6 text-emerald-500/20 transform"><BrainCircuit className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-emerald-500/30 pb-4">
            <Target className="w-6 h-6 mr-3 text-teal-400" /> Professional Target Audiences
          </h2>

          <div className="grid grid-cols-2 gap-4 relative z-10 mb-6 font-bold text-sm">
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100 flex items-center gap-2"><Code2 size={16} className="text-teal-400"/> Software Devs</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100 flex items-center gap-2"><LineChart size={16} className="text-teal-400"/> Data Analysts</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100 flex items-center gap-2"><Activity size={16} className="text-teal-400"/> Data Scientists</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100 flex items-center gap-2"><Database size={16} className="text-teal-400"/> Database Admins</div>
          </div>

          <div className="relative z-10 bg-black/40 rounded-xl border border-teal-500/50 p-4 border-l-4 border-l-teal-400">
              <p className="text-teal-300 font-bold text-sm leading-relaxed flex items-start">
                  <BrainCircuit className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-teal-400" />
                  Since you are already learning Machine Learning (like your NPTEL course), SQL is extremely important because most ML data comes directly from databases!
              </p>
          </div>
        </div>
      </section>

      {/* Importance Sect  */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-emerald-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Briefcase className="w-6 h-6 mr-3 text-emerald-500" /> 2. Core Enterprise Value
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">Companies store millions of records in databases, and SQL is the primary tool used to retrieve and analyze this data.</p>
                
                <CodeSnippetBlock codeSnippet={`SELECT name, salary\nFROM employees\nWHERE salary > 50000;`} />
            </div>

            <div className="lg:col-span-7 bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><Network className="w-64 h-64 text-emerald-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-emerald-900 dark:text-emerald-300 relative z-10 border-b border-emerald-200 dark:border-emerald-800/30 pb-4">
                    <Database className="w-6 h-6 mr-3" /> Core Industry Verticals
                </h2>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Business Field Sector', 'Native SQL Core Pipeline Usage']}
                        rows={[
                            [<strong className="text-emerald-700 dark:text-emerald-400">Banking</strong>, 'Transaction records'],
                            [<strong className="text-emerald-700 dark:text-emerald-400">E-commerce</strong>, 'Orders & customers'],
                            [<strong className="text-emerald-700 dark:text-emerald-400">Healthcare</strong>, 'Patient records'],
                            [<strong className="text-emerald-700 dark:text-emerald-400">Social media</strong>, 'User activity tracking'],
                            [<strong className="text-emerald-700 dark:text-emerald-400">Data Science</strong>, 'Data extraction']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* Structured Path Vis Array Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-gradient-to-b from-gray-900 to-black p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-gray-800 text-white">
               
               <h2 className="text-3xl font-black mb-10 w-full text-center tracking-widest text-emerald-300 uppercase relative z-10">
                   7. Structured Training Ladder
               </h2>

                <div className="flex flex-col items-center justify-center w-max mx-auto space-y-4 relative z-10 font-bold font-mono">
                    <div className="flex gap-4 items-center">
                        <span className="bg-green-600/20 text-green-400 px-4 py-2 border border-green-500/30 rounded w-24 text-center shadow-sm">Level 6</span>
                        <div className="bg-green-900/40 border border-green-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]">Advanced Features</div>
                    </div>
                    <div className="w-1 h-8 bg-gray-800"></div>

                    <div className="flex gap-4 items-center">
                        <span className="bg-teal-600/20 text-teal-400 px-4 py-2 border border-teal-500/30 rounded w-24 text-center shadow-sm">Level 5</span>
                        <div className="bg-teal-900/40 border border-teal-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-teal-300">Subqueries</div>
                    </div>
                    <div className="w-1 h-8 bg-gray-800"></div>

                    <div className="flex gap-4 items-center">
                        <span className="bg-sky-600/20 text-sky-400 px-4 py-2 border border-sky-500/30 rounded w-24 text-center shadow-sm">Level 4</span>
                        <div className="bg-sky-900/40 border border-sky-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-sky-300">Joins</div>
                    </div>
                     <div className="w-1 h-8 bg-gray-800"></div>

                    <div className="flex gap-4 items-center">
                        <span className="bg-violet-600/20 text-violet-400 px-4 py-2 border border-violet-500/30 rounded w-24 text-center shadow-sm">Level 3</span>
                        <div className="bg-violet-900/40 border border-violet-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-violet-300">Aggregate Functions</div>
                    </div>
                     <div className="w-1 h-8 bg-gray-800"></div>

                    <div className="flex gap-4 items-center">
                        <span className="bg-amber-600/20 text-amber-400 px-4 py-2 border border-amber-500/30 rounded w-24 text-center shadow-sm">Level 2</span>
                        <div className="bg-amber-900/40 border border-amber-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-amber-300">Filtering & Sorting</div>
                    </div>
                     <div className="w-1 h-8 bg-gray-800"></div>

                    <div className="flex gap-4 items-center">
                        <span className="bg-rose-600/20 text-rose-400 px-4 py-2 border border-rose-500/30 rounded w-24 text-center shadow-sm">Level 1</span>
                        <div className="bg-rose-900/40 border border-rose-500/50 px-8 py-3 rounded-xl text-lg w-72 text-center text-rose-300">Basic Queries</div>
                    </div>
                </div>
           </div>
      </section>

      {/* The 3 Training Levels Flow Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        
        <div className="grid lg:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-orange-400"></div>
                <h4 className="font-black text-rose-600 dark:text-rose-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center mr-3 border border-rose-200 dark:border-rose-800/50 font-black">4</span> Beginner
                </h4>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">This stage focuses on basic database operations.</p>
                
                <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-bold">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Syntax</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">SELECT</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">WHERE</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">AND/OR</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">ORDER BY</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">INSERT</span>
                </div>

                <div className="mt-auto">
                    <CodeSnippetBlock codeSnippet={`SELECT name\nFROM students\nWHERE marks > 80;`} />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
                <h4 className="font-black text-amber-600 dark:text-amber-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mr-3 border border-amber-200 dark:border-amber-800/50 font-black">5</span> Intermediate
                </h4>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">This level teaches data analysis techniques.</p>

                <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-bold">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Aggregates</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">GROUP BY</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">HAVING</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-amber-300">JOINS</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Subqueries</span>
                </div>

                <div className="mt-auto">
                    <CodeSnippetBlock codeSnippet={`SELECT department, SUM(salary)\nFROM employees\nGROUP BY department;`} />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400"></div>
                <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-3 border border-emerald-200 dark:border-emerald-800/50 font-black">6</span> Advanced Edge
                </h4>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">Advanced SQL is used in real production systems.</p>
                
                 <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-bold">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Indexes</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Views</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Stored Procedures</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-emerald-300">Window Functions</span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Optimization</span>
                </div>

                <div className="mt-auto">
                    <CodeSnippetBlock codeSnippet={`SELECT name, salary,\nSUM(salary) OVER() AS total\nFROM employees;`} />
                </div>
            </div>

        </div>
      </section>

      {/* Traps & Common Errors Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-rose-50 dark:bg-rose-900/10 p-8 sm:p-12 rounded-3xl border border-rose-200 dark:border-rose-900/40 relative overflow-hidden text-center flex flex-col items-center shadow-lg">
                <div className="absolute top-0 right-1/4 w-32 h-32 bg-white/50 rounded-full blur-3xl -z-10"></div>
                <h2 className="text-3xl font-black text-rose-900 dark:text-rose-100 mb-6 flex items-center justify-center">
                    <Activity className="w-8 h-8 mr-3 text-rose-500" /> 10. The Ultimate Training Practice Ratio
                </h2>
                
                <div className="flex bg-white dark:bg-gray-900 p-2 rounded-xl border border-rose-200 dark:border-rose-800 shadow-sm w-full font-black text-sm tracking-widest uppercase mb-10 overflow-hidden text-center relative max-w-lg mx-auto h-16">
                    <div className="absolute top-0 left-0 w-1/5 bg-gray-200 dark:bg-gray-800 h-full flex items-center justify-center text-gray-600 dark:text-gray-400 z-10 border-r-4 border-white dark:border-gray-900">20% Theory</div>
                    <div className="absolute top-0 left-[20%] w-4/5 bg-gradient-to-r from-rose-400 to-orange-500 h-full flex items-center justify-center text-white z-10">80% Practice Method</div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 text-left w-full items-stretch">
                     
                     <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                          <p className="font-bold text-gray-500 uppercase tracking-widest text-xs mb-4">Sample Setup Constraints</p>
                          <ResultTable 
                             headers={['id', 'product', 'price']} 
                             rows={[[1, 'Laptop', 50000], [2, 'Mouse', 500], [3, 'Keyboard', 1500]]}
                          />
                          <p className="font-black text-rose-600 mt-4 border-t border-gray-100 pt-4"><span className="underline">Find total product price.</span></p>
                     </div>
                     
                     <div className="flex-1 bg-gray-900 text-white p-6 rounded-2xl shadow-xl border border-gray-800 flex flex-col">
                          <p className="font-bold text-emerald-400 uppercase tracking-widest text-xs mb-4 flex items-center"><Play size={14} className="mr-2"/> Result Operation Validation Code</p>
                          <div className="mt-auto">
                              <CodeSnippetBlock codeSnippet={`SELECT SUM(price)\nFROM products;`} />
                          </div>
                     </div>

                </div>
           </div>
      </section>

    </div>
  );
};

export default SqlTraining;