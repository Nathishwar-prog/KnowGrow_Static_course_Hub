import React, { useState } from 'react';
import { 
  Terminal, Copy, Check, Target, 
  HelpCircle, ShieldCheck,
  CheckCircle2, ListChecks,
  Zap, Layers, Briefcase, Key, Fingerprint, Lock, 
  AlertCircle, XCircle
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

const SqlUnique: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <div className="absolute -top-2 -right-2 bg-rose-400 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow border-2 border-white dark:border-gray-900 uppercase tracking-widest">Strict</div>
          <Fingerprint className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL UNIQUE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Ensure that all values in a column are different and prevent duplicates.
        </p>
      </header>

      {/* Intro Concept Visualizer */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-indigo-500" /> 1. What is SQL UNIQUE?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            The SQL <code className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded">UNIQUE</code> constraint ensures that all values in a column are different. It prevents duplicate values from being inserted into that column.
          </p>
          
          <div className="mb-6">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 underline decoration-indigo-500 decoration-2 underline-offset-4">Commonly Used For:</p>
            <ul className="grid grid-cols-2 gap-2 mt-3 font-mono text-sm text-indigo-800 dark:text-indigo-300">
               <li className="flex items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg border border-indigo-100 dark:border-indigo-800/30"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>Email addresses</li>
               <li className="flex items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg border border-indigo-100 dark:border-indigo-800/30"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>Phone numbers</li>
               <li className="flex items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg border border-indigo-100 dark:border-indigo-800/30"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>Usernames</li>
               <li className="flex items-center bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg border border-indigo-100 dark:border-indigo-800/30"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>National ID numbers</li>
            </ul>
            <p className="text-sm font-bold text-rose-600 dark:text-rose-400 mt-3 flex items-center"><Zap className="w-4 h-4 mr-1.5" /> Because these values must not repeat.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-indigo-800/50 items-center justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><Key className="w-48 h-48 text-indigo-500" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-white mb-8 relative z-10 border-b border-indigo-500/30 pb-4 w-full">
            <ShieldCheck className="w-6 h-6 mr-3 text-indigo-400" /> Key Idea: UNIQUE Constraint
          </h2>

          <div className="relative z-10 font-mono font-black text-center w-full max-w-sm mx-auto space-y-3 text-sm sm:text-base bg-black/40 p-6 rounded-2xl border border-indigo-500/30">
             <div className="flex justify-between items-center bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">
               <span>Value 1</span>
               <CheckCircle2 className="text-emerald-400 w-5 h-5" />
             </div>
             <div className="flex justify-between items-center bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">
               <span>Value 2</span>
               <CheckCircle2 className="text-emerald-400 w-5 h-5" />
             </div>
             <div className="flex justify-between items-center bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">
               <span>Value 3</span>
               <CheckCircle2 className="text-emerald-400 w-5 h-5" />
             </div>
             <div className="flex justify-between items-center bg-rose-900/30 border border-rose-500/50 p-3 rounded-lg text-rose-300 animate-pulse">
               <span>Value 2</span>
               <div className="flex items-center"><span className="text-xs mr-2 uppercase tracking-wide opacity-80">Duplicate</span><XCircle className="text-rose-400 w-5 h-5" /></div>
             </div>
             <p className="text-rose-400 text-xs font-bold pt-3 uppercase tracking-widest text-left">
                If a duplicate value is inserted, SQL will throw an error.
             </p>
          </div>
        </div>
      </section>

      {/* Syntax & Configuration Architecture */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-indigo-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-indigo-500" /> 2. SQL UNIQUE Syntax
                </h2>
                <div className="mb-4">
                  <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Method 1 — In CREATE TABLE</span>
                </div>
                <CodeSnippetBlock codeSnippet={`CREATE TABLE users (\n    id INT,\n    email VARCHAR(100) UNIQUE\n);`} />
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><ListChecks className="w-64 h-64 text-indigo-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Layers className="w-6 h-6 mr-3 text-indigo-500" /> Explanation
                </h2>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Element', 'Description']}
                        rows={[
                            [<strong className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">users</strong>, 'Table name'],
                            [<strong className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">email</strong>, 'Column name'],
                            [<strong className="text-rose-600 dark:text-rose-500 font-mono font-black text-sm">UNIQUE</strong>, 'Prevents duplicate email values from being added']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* Basic Implementation Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 border-t-2 border-dashed border-gray-200 dark:border-gray-700 pt-10">
          3. Example Table Behavior
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm border-l-4 border-l-indigo-500">
                 <p className="font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4 text-sm"><Target className="inline w-5 h-5 mr-2 -mt-1"/>Table: Users</p>
                 <ResultTable headers={['id', 'email']} rows={[[1, 'john@gmail.com'], [2, 'mary@gmail.com']]} />
             </div>
             
             <div className="bg-gradient-to-br from-rose-900 to-red-950 p-8 rounded-3xl border border-rose-800 shadow-xl flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-[0.08]"><AlertCircle className="w-32 h-32 text-rose-400" /></div>
                 
                 <p className="font-bold uppercase tracking-widest text-rose-400 mb-4 text-sm relative z-10">If someone tries to insert:</p>
                 <div className="relative z-10">
                    <CodeSnippetBlock codeSnippet={`INSERT INTO users\nVALUES (3, 'john@gmail.com');`} title="Duplicate Insert Attempt" />
                 </div>
                 <div className="bg-rose-500/20 border-l-4 border-rose-500 p-4 rounded-r-xl mt-2 relative z-10">
                     <p className="text-rose-100 font-bold flex items-center">
                        <XCircle className="w-5 h-5 mr-2 text-rose-400" /> 
                        SQL will produce an error because email must be unique.
                     </p>
                 </div>
             </div>
        </div>
      </section>

      {/* Multiple Columns Architecture Pipeline  */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="border border-indigo-200 dark:border-indigo-900/40 p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col">
              <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-indigo-400 flex items-center">
                  <Briefcase className="w-8 h-8 mr-4 text-indigo-500" /> 4. SQL UNIQUE with Multiple Columns
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-8 text-lg">
                  You can apply the UNIQUE constraint to more than one column. This means the <span className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-400/50 pb-0.5">combination</span> of those columns must be unique.
              </p>

              <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800/30 flex flex-col justify-center">
                      <CodeSnippetBlock codeSnippet={`CREATE TABLE employees (\n    id INT,\n    first_name VARCHAR(50),\n    last_name VARCHAR(50),\n    UNIQUE(first_name, last_name)\n);`} title="Combined Unique Example" />
                      <div className="mt-4 bg-white dark:bg-gray-800 p-4 border border-indigo-100 dark:border-indigo-800/50 rounded-xl shadow-sm text-sm font-bold text-gray-700 dark:text-gray-300 flex items-start">
                          <Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                          Meaning: The combination of first_name and last_name must be unique.
                      </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl flex flex-col relative">
                      <div className="mb-4">
                          <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-700 pb-2">Allowed Insertions</p>
                          <ResultTable headers={['first_name', 'last_name']} rows={[['John', 'Smith'], ['John', 'Lee']]} />
                          <p className="text-emerald-400 text-xs font-mono mb-6"><CheckCircle2 className="w-4 h-4 inline mr-1" /> Allowed because the overall combination is different.</p>
                      </div>

                      <div className="mt-auto">
                          <p className="text-rose-400 font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-700 pb-2">Not Allowed Insertion</p>
                          <ResultTable headers={['first_name', 'last_name']} rows={[['John', 'Smith'], [<span className="text-rose-400 font-bold">John</span>, <span className="text-rose-400 font-bold">Smith</span>]]} />
                          <p className="text-rose-400 text-xs font-mono"><XCircle className="w-4 h-4 inline mr-1" /> Not allowed. Combination already exists.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Altering Constraints */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white flex items-center"><Lock className="mr-3 w-6 h-6 text-emerald-500" />5. Adding UNIQUE</h2>
              <p className="mb-6 font-medium text-gray-600 dark:text-gray-300">
                  You can add a <code className="text-indigo-600 dark:text-indigo-400 font-bold">UNIQUE</code> constraint to an existing table using <code className="text-indigo-600 dark:text-indigo-400 font-bold">ALTER TABLE</code>.
              </p>
              
              <CodeSnippetBlock codeSnippet={`ALTER TABLE users\nADD CONSTRAINT unique_email UNIQUE(email);`} title="Add Constraint" />
              <div className="bg-emerald-50 dark:bg-emerald-900/10 border-l-4 border-emerald-500 p-4 rounded-r-xl mt-4">
                 <p className="text-emerald-800 dark:text-emerald-400 text-sm font-bold flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Result: Now the email column cannot contain duplicates.
                 </p>
              </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white flex items-center"><ShieldCheck className="mr-3 w-6 h-6 text-rose-500" />6. Removing UNIQUE</h2>
              <p className="mb-6 font-medium text-gray-600 dark:text-gray-300">
                  To remove the <code className="text-indigo-600 dark:text-indigo-400 font-bold">UNIQUE</code> constraint from a table:
              </p>
              
              <CodeSnippetBlock codeSnippet={`ALTER TABLE users\nDROP CONSTRAINT unique_email;`} title="Drop Constraint" />
          </div>
      </section>

      {/* Primary Key vs Unique */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-gray-900 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-gray-800">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03]"><Key className="w-96 h-96 text-indigo-500" /></div>
               
               <div className="relative z-10 w-full mb-10 text-center">
                    <h2 className="text-3xl font-black mb-4 w-full tracking-widest text-indigo-400 uppercase">
                        7. UNIQUE vs PRIMARY KEY
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm">Many beginners confuse these two constraint types. They are related but have strict differences.</p>
               </div>
               
               <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="overflow-x-auto ring-1 ring-gray-700 rounded-xl shadow-sm w-full">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-800 text-white uppercase font-black text-xs tracking-widest">
                            <tr>
                              <th className="px-6 py-4 border-b border-gray-700 bg-black/50">Feature</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-amber-400 border-x border-gray-700 text-center bg-amber-900/10">PRIMARY KEY</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-indigo-400 text-center bg-indigo-900/10">UNIQUE</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-900 font-medium text-gray-300 font-mono text-sm flex-col">
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Duplicate values</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-rose-400 bg-amber-900/10">Not allowed</td>
                               <td className="px-6 py-4 text-center text-rose-400 bg-indigo-900/10">Not allowed</td>
                            </tr>
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">NULL values</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-rose-400 bg-amber-900/10 flex items-center justify-center gap-2"><XCircle className="w-4 h-4"/> Not allowed</td>
                               <td className="px-6 py-4 text-center text-emerald-400 bg-indigo-900/10 flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4"/> Allowed <span className="text-[10px] opacity-70">(varies by DB)</span></td>
                            </tr>
                            <tr>
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Per table</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-amber-300 bg-amber-900/10">Only one</td>
                               <td className="px-6 py-4 text-center text-indigo-300 bg-indigo-900/10">Multiple allowed</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900/80 border border-indigo-500/30 rounded-2xl p-6 shadow-inner w-full flex flex-col justify-center">
                        <CodeSnippetBlock codeSnippet={`CREATE TABLE students(\n    id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE\n);`} title="Using both together" />
                        <div className="mt-2 space-y-3">
                            <p className="flex items-center text-amber-400 font-mono text-sm bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                                <Key className="w-4 h-4 mr-3 shrink-0" />
                                <span><strong className="tracking-widest mr-1">id</strong> identifies each row uniquely.</span>
                            </p>
                            <p className="flex items-center text-indigo-400 font-mono text-sm bg-indigo-900/20 p-3 rounded-lg border border-indigo-500/30">
                                <Fingerprint className="w-4 h-4 mr-3 shrink-0" />
                                <span><strong className="tracking-widest mr-1">email</strong> must be unique, but is not the primary identifier.</span>
                            </p>
                        </div>
                    </div>
               </div>

           </div>
      </section>

      {/* SQL UNIQUE Visualization Text Node */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="border border-indigo-200 dark:border-indigo-900/40 p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col">
              <h2 className="text-3xl font-black mb-10 text-center border-b border-gray-200 dark:border-gray-700 pb-4 text-gray-900 dark:text-indigo-400">
                  8. SQL UNIQUE Visualization
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col">
                     <h3 className="text-center font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Without UNIQUE</h3>
                     <div className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col gap-3 font-mono text-center">
                         <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm text-gray-700 dark:text-gray-300">john@gmail.com</div>
                         <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm text-gray-700 dark:text-gray-300">mary@gmail.com</div>
                         <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm text-gray-700 dark:text-gray-300 relative border-l-4 border-l-amber-500">
                             john@gmail.com
                             <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 translate-x-full text-xs text-amber-500 font-black tracking-wider whitespace-nowrap flex items-center">
                                 ← duplicate allowed
                             </span>
                         </div>
                     </div>
                  </div>

                  <div className="flex flex-col">
                     <h3 className="text-center font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-6 border-b-2 border-indigo-500 inline-block self-center pb-1">With UNIQUE</h3>
                     <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800/50 flex flex-col gap-3 font-mono text-center relative">
                         <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-indigo-700/50">john@gmail.com</div>
                         <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-indigo-700/50">mary@gmail.com</div>
                         <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded shadow-sm text-rose-700 dark:text-rose-300 relative border border-rose-300 dark:border-rose-700">
                             john@gmail.com
                             <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 translate-x-full text-xs text-rose-500 font-black tracking-wider whitespace-nowrap flex items-center">
                                 <XCircle className="w-4 h-4 mr-1"/> Error
                             </span>
                         </div>
                     </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Real-World Data & Multiple Constraints */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-indigo-900/20 p-8 rounded-3xl shadow-sm border border-indigo-100 dark:border-indigo-800/40 flex flex-col">
              <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-indigo-500"/>
                  9. Real-World Example
              </h2>
              <div className="flex-1">
                  <p className="font-bold text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">Table: Customers</p>
                  <ResultTable headers={['id', 'username', 'email']} rows={[[1, 'john123', 'john@gmail.com'], [2, 'mary456', 'mary@gmail.com']]} />
                  
                  <div className="mt-6 mb-4">
                      <CodeSnippetBlock codeSnippet={`CREATE TABLE customers(\n    id INT PRIMARY KEY,\n    username VARCHAR(50) UNIQUE,\n    email VARCHAR(100) UNIQUE\n);`} title="SQL Structure" />
                  </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900/60 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800">
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2" /> Benefits</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Prevents duplicate:</p>
                  <ul className="list-disc pl-5 mt-1 font-mono text-sm text-gray-700 dark:text-gray-300">
                      <li>usernames</li>
                      <li>email addresses</li>
                  </ul>
              </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white flex items-center">
                  <Layers className="w-6 h-6 mr-3 text-purple-500"/>
                  10. Multiple Constraints
              </h2>
              <div className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">You can apply UNIQUE to as many columns as needed independently.</p>
                  
                  <div className="mb-6">
                      <CodeSnippetBlock codeSnippet={`CREATE TABLE accounts(\n    id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE,\n    phone VARCHAR(15) UNIQUE\n);`} title="Example" />
                  </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-xl border border-purple-200 dark:border-purple-800/40">
                  <p className="font-bold text-purple-700 dark:text-purple-400 mb-3 text-sm uppercase tracking-wide">Output Rule:</p>
                  <div className="flex justify-around items-center bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm border border-purple-100 dark:border-purple-800/50 shadow-sm">
                      <div className="text-center">
                          <span className="font-bold text-gray-900 dark:text-white block mb-1">email</span>
                          <span className="inline-block px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded text-xs">unique</span>
                      </div>
                      <span className="text-purple-300 dark:text-purple-700 font-bold">&amp;</span>
                      <div className="text-center">
                          <span className="font-bold text-gray-900 dark:text-white block mb-1">phone</span>
                          <span className="inline-block px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded text-xs">unique</span>
                      </div>
                  </div>
                  <p className="text-center mt-3 text-xs font-bold text-gray-600 dark:text-gray-400">Both columns cannot have duplicate values globally.</p>
              </div>
          </div>

      </section>

    </div>
  );
};

export default SqlUnique;