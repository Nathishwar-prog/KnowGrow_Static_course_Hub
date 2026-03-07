import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Target, 
  HelpCircle, ArrowDown, Activity, ShieldCheck, BoxSelect,
  Combine, FastForward, CheckCircle2, ListChecks,
  Zap, Layers, Briefcase
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-cyan-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
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

const SqlUnionAll: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-cyan-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow border-2 border-white dark:border-gray-900 uppercase tracking-widest">Fast</div>
          <Combine className="w-8 h-8 text-white relative z-10" />
          <FastForward className="w-4 h-4 text-white absolute -bottom-1 -right-1" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL UNION ALL
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Combine the results of two or more SELECT statements without removing duplicates.
        </p>
      </header>

      {/* Intro Concept Visualizer */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-cyan-500" /> 1. What is SQL UNION ALL?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            SQL <code className="text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">UNION ALL</code> is used to combine the results of two or more SELECT statements into a single result set.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-xl relative z-10 mb-6 font-mono text-sm font-bold text-amber-800 dark:text-amber-300 tracking-tight leading-loose">
              Unlike UNION, UNION ALL <span className="uppercase text-amber-600 dark:text-amber-400 block border-b border-amber-200 dark:border-amber-800/50 pb-2 mb-2">does NOT remove duplicate rows.</span>
              It simply appends all rows from each query result.
          </div>

          <p className="text-sm font-bold text-cyan-700 dark:text-cyan-400 flex items-center"><Zap className="w-4 h-4 mr-2" /> This makes UNION ALL faster and more efficient, especially when working with large datasets.</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-cyan-800/50 items-center justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><Layers className="w-48 h-48 text-cyan-500" /></div>
          
          <h2 className="text-2xl font-bold flex items-center text-white mb-8 relative z-10 border-b border-cyan-500/30 pb-4 w-full">
            <Combine className="w-6 h-6 mr-3 text-cyan-400" /> Concept Visualization
          </h2>

          <div className="relative z-10 font-mono font-black text-center w-full max-w-sm mx-auto space-y-2 text-sm sm:text-base">
             <div className="bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">Result of Query 1</div>
             <div className="text-cyan-400 font-bold">+</div>
             <div className="bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">Result of Query 2</div>
             <div className="text-cyan-400 font-bold">+</div>
             <div className="bg-gray-800/80 border border-gray-600 p-3 rounded-lg text-gray-300">Result of Query 3</div>
             
             <div className="w-full border-b-2 border-dashed border-cyan-500/50 my-6"></div>
             
             <div className="bg-cyan-900 border border-cyan-400 p-4 rounded-xl text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                 All rows combined<br/>
                 <span className="text-xs uppercase tracking-widest text-cyan-200 mt-2 block opacity-80">(Duplicates Included)</span>
             </div>
          </div>
        </div>
      </section>

      {/* Syntax & Configuration Architecture */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-cyan-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-cyan-500" /> 2. SQL UNION ALL Syntax
                </h2>
                <CodeSnippetBlock codeSnippet={`SELECT column1, column2\nFROM table1\n\nUNION ALL\n\nSELECT column1, column2\nFROM table2;`} />
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><ListChecks className="w-64 h-64 text-cyan-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <ShieldCheck className="w-6 h-6 mr-3 text-cyan-500" /> Syntax Rules
                </h2>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Rule', 'Description']}
                        rows={[
                            [<strong className="text-gray-900 dark:text-gray-100 uppercase tracking-tight text-xs">Same number of columns</strong>, 'Each SELECT must return equal columns'],
                            [<strong className="text-gray-900 dark:text-gray-100 uppercase tracking-tight text-xs">Compatible data types</strong>, 'Column types must match'],
                            [<strong className="text-gray-900 dark:text-gray-100 uppercase tracking-tight text-xs">Same column order</strong>, 'Columns must appear in same order']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* Basic Implementation Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 border-t-2 border-dashed border-gray-200 dark:border-gray-700 pt-10">
          3. Example Tables & Query
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
             <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-blue-500">
                 <p className="font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 text-xs">Table: Students_2023</p>
                 <ResultTable headers={['id', 'name']} rows={[[1, 'John'], [2, 'Mary'], [3, 'Alex']]} />
             </div>
             
             <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm border-t-4 border-t-cyan-500">
                 <p className="font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3 text-xs">Table: Students_2024</p>
                 <ResultTable headers={['id', 'name']} rows={[[4, 'David'], [5, 'Lisa'], [3, 'Alex']]} />
             </div>

             <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-6 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-center">
                 <p className="font-bold uppercase tracking-widest text-emerald-400 mb-3 text-xs flex items-center justify-center border-b border-gray-700 pb-2"><CheckCircle2 size={16} className="mr-2"/> Output</p>
                 <ResultTable 
                    headers={['name']} 
                    rows={[
                        ['John'], 
                        ['Mary'], 
                        [<span className="text-yellow-400 font-bold bg-yellow-900/30 px-1 py-0.5 rounded">Alex</span>], 
                        ['David'], 
                        ['Lisa'], 
                        [<span className="text-yellow-400 font-bold bg-yellow-900/30 px-1 py-0.5 rounded">Alex</span>]
                    ]} 
                 />
                 <p className="text-sm text-gray-400 font-bold text-center mt-2 leading-relaxed">
                     Results from both tables are combined. Duplicate values are not removed.
                     <br/><br/>
                     <span className="text-yellow-400 block border border-yellow-500/30 bg-yellow-500/10 p-2 rounded-lg mt-2 font-mono">
                         The name Alex appears twice.
                     </span>
                 </p>
             </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-900/10 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800/30 w-full lg:w-3/4 mx-auto font-mono text-sm max-w-xl">
            <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-widest text-xs flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> 4. Basic SQL UNION ALL Example
            </h4>
            <CodeSnippetBlock codeSnippet={`SELECT name\nFROM Students_2023\n\nUNION ALL\n\nSELECT name\nFROM Students_2024;`} />
        </div>

      </section>

      {/* The Logical Diff UNION vs UNION ALL */}
      <section className="max-w-6xl mx-auto mb-16">
           <div className="bg-gray-900 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-gray-800 grid lg:grid-cols-2 gap-12 items-center">
               <div className="absolute top-0 right-0 p-8 opacity-[0.03]"><ArrowDown className="w-96 h-96 text-cyan-500" /></div>
               
               <div className="relative z-10 w-full">
                    <h2 className="text-3xl font-black mb-8 w-full tracking-widest text-cyan-400 uppercase">
                        5. SQL UNION vs UNION ALL
                    </h2>
                    
                    <div className="overflow-x-auto ring-1 ring-gray-700 rounded-xl mb-4 shadow-sm w-full">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-800 text-white uppercase font-black text-xs tracking-widest">
                            <tr>
                              <th className="px-6 py-4 border-b border-gray-700 bg-black/50">Feature</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-purple-400 border-x border-gray-700 text-center w-32 bg-purple-900/10">UNION</th>
                              <th className="px-6 py-4 border-b border-gray-700 text-cyan-400 text-center w-32 bg-cyan-900/10">UNION ALL</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-900 font-medium text-gray-300 font-mono text-sm flex-col">
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Removes duplicates</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center uppercase font-black text-purple-400 bg-purple-900/10">Yes</td>
                               <td className="px-6 py-4 text-center uppercase font-black text-cyan-400 bg-cyan-900/10">No</td>
                            </tr>
                            <tr className="border-b border-gray-800">
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Performance</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-rose-400 bg-purple-900/10">Slower</td>
                               <td className="px-6 py-4 text-center text-emerald-400 bg-cyan-900/10">Faster</td>
                            </tr>
                            <tr>
                               <td className="px-6 py-4 border-r border-gray-800 font-bold text-gray-200">Use case</td>
                               <td className="px-6 py-4 border-r border-gray-800 text-center text-gray-400">Unique data</td>
                               <td className="px-6 py-4 text-center text-cyan-300">Large datasets</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
               </div>

               <div className="relative z-10 w-full flex flex-col gap-6">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-inner relative overflow-hidden flex gap-4 w-full">
                         <div className="w-1/2">
                             <p className="font-bold text-purple-400 uppercase tracking-widest text-xs mb-3 flex items-center"><Target size={14} className="mr-2"/> Table A</p>
                             <div className="bg-black/50 p-3 rounded-lg font-mono text-xs text-gray-300 mb-4 text-center">John<br/>Mary</div>
                         </div>
                         <div className="w-1/2">
                             <p className="font-bold text-pink-400 uppercase tracking-widest text-xs mb-3 flex items-center"><Target size={14} className="mr-2"/> Table B</p>
                             <div className="bg-black/50 p-3 rounded-lg font-mono text-xs text-gray-300 mb-4 text-center">Mary<br/>David</div>
                         </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 border border-purple-500/30 rounded-xl p-6 shadow-inner w-full flex items-center">
                        <div className="w-1/2 border-r border-purple-500/30">
                            <p className="font-bold text-purple-300 uppercase tracking-widest text-xs mb-3">Using UNION</p>
                            <div className="font-mono text-sm text-purple-100 font-semibold flex flex-col items-center">
                                <div>John</div>
                                <div className="bg-yellow-500/20 px-4 rounded text-yellow-300 border border-yellow-500/30 my-1">Mary</div>
                                <div>David</div>
                            </div>
                        </div>
                        <div className="w-1/2 justify-center flex items-center h-full">
                            <p className="text-xs text-purple-300/80 font-bold tracking-wider leading-relaxed px-4 text-center">Removes duplicate "Mary"</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-6 shadow-inner w-full flex items-center">
                        <div className="w-1/2 border-r border-cyan-500/30">
                            <p className="font-bold text-cyan-300 uppercase tracking-widest text-xs mb-3">Using UNION ALL</p>
                            <div className="font-mono text-sm text-cyan-100 font-semibold flex flex-col items-center">
                                <div>John</div>
                                <div className="bg-yellow-500/20 px-4 rounded text-yellow-300 border border-yellow-500/30 mt-1">Mary</div>
                                <div className="bg-yellow-500/20 px-4 rounded text-yellow-300 border border-yellow-500/30 mb-1 mt-0.5">Mary</div>
                                <div>David</div>
                            </div>
                        </div>
                        <div className="w-1/2 justify-center flex items-center h-full">
                            <p className="text-xs text-cyan-300/80 font-bold tracking-wider leading-relaxed px-4 text-center">Keeps duplicate "Mary"</p>
                        </div>
                    </div>
               </div>

           </div>
      </section>

      {/* Multiple Columns Architecture Pipeline  */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="border border-cyan-200 dark:border-cyan-900/40 p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col">
              <h2 className="text-2xl font-black mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 text-gray-900 dark:text-cyan-400">
                  6. SQL UNION ALL with Multiple Columns
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <p className="font-bold text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-4 border-l-4 border-cyan-500 pl-2">Employees_US</p>
                      <ResultTable headers={['id', 'name', 'department']} rows={[[1, 'John', 'IT'], [2, 'Mary', 'HR']]} />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <p className="font-bold text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">Employees_UK</p>
                      <ResultTable headers={['id', 'name', 'department']} rows={[[3, 'David', 'IT'], [4, 'Sarah', 'Finance']]} />
                  </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch mt-4">
                  <div className="bg-cyan-50 dark:bg-cyan-900/10 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800/30">
                      <CodeSnippetBlock codeSnippet={`SELECT id, name, department\nFROM Employees_US\n\nUNION ALL\n\nSELECT id, name, department\nFROM Employees_UK;`} title="Query" />
                  </div>
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
                      <p className="font-bold uppercase text-xs tracking-wider text-emerald-400 mb-4 border-b border-gray-700 pb-2"><Check size={14} className="inline mr-2" /> Output</p>
                      <ResultTable headers={['id', 'name', 'department']} rows={[[1, 'John', 'IT'], [2, 'Mary', 'HR'], [3, 'David', 'IT'], [4, 'Sarah', 'Finance']]} />
                  </div>
              </div>
          </div>
      </section>

      {/* SQL UNION ALL Visualization Text Node */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
                  <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 flex items-center"><Terminal className="mr-3 w-6 h-6 text-amber-500" />8. SQL UNION ALL with ORDER BY</h2>
                  <p className="mb-6 font-medium text-gray-600 dark:text-gray-300 bg-amber-50 dark:bg-amber-900/20 p-4 border border-amber-200 dark:border-amber-800/30 rounded-xl">
                      <code className="text-amber-600 dark:text-amber-400 font-bold">ORDER BY</code> is placed at the end of the final query.
                  </p>
                  
                  <CodeSnippetBlock codeSnippet={`SELECT name\nFROM Students_2023\n\nUNION ALL\n\nSELECT name\nFROM Students_2024\n\nORDER BY name;`} title="Example" />
              </div>

              <div className="bg-gradient-to-br from-amber-900 to-gray-900 p-8 rounded-3xl shadow-xl border border-amber-800 flex flex-col">
                  <h3 className="text-white font-black text-xl mb-6 border-b border-gray-700 pb-4">Output Execution</h3>
                  <div className="bg-black/40 rounded-xl">
                      <ResultTable headers={['name']} rows={[['Alex'], ['Alex'], ['David'], ['John'], ['Lisa'], ['Mary']]} />
                  </div>
              </div>

          </div>
      </section>

      {/* Real-World Data & Diagram */}
      <section className="max-w-6xl mx-auto mb-16 px-4 sm:px-0">
          <div className="border border-cyan-200 dark:border-cyan-900/40 p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between gap-12">
               
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 dark:bg-cyan-900/10 rounded-full blur-3xl -z-10"></div>
               
               <div className="md:w-1/2">
                    <h2 className="text-3xl font-black mb-8 w-full tracking-widest text-gray-900 dark:text-cyan-400 border-b border-gray-200 dark:border-cyan-900/50 pb-4 flex items-center">
                        <Briefcase className="w-8 h-8 mr-3 text-cyan-500"/>
                        9. Real-World Example
                    </h2>
                    
                    <div className="mb-6">
                        <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 underline decoration-cyan-500 decoration-2 underline-offset-4">Scenario: Sales Data</p>
                        <p className="text-gray-600 dark:text-gray-300">Company sales are stored in two tables:</p>
                        <ul className="list-disc pl-5 mt-2 font-mono text-sm text-cyan-700 dark:text-cyan-400 mb-6 bg-cyan-50 dark:bg-cyan-900/20 p-4 border border-cyan-100 dark:border-cyan-800/30 rounded-xl">
                            <li>Online_Sales</li>
                            <li>Store_Sales</li>
                        </ul>
                    </div>

                    <CodeSnippetBlock codeSnippet={`SELECT product, amount\nFROM Online_Sales\n\nUNION ALL\n\nSELECT product, amount\nFROM Store_Sales;`} title="Query" />

                    <div className="mt-8 bg-gray-50 dark:bg-gray-900/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <p className="font-bold text-gray-900 dark:text-white mb-2 font-mono"><Target className="inline w-4 h-4 mr-2" />Result</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">All sales records are combined into one dataset.</p>
                        <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">This is commonly used for:</p>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">Business reports</span>
                            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">Data analytics</span>
                            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">Dashboard creation</span>
                        </div>
                    </div>
               </div>

               <div className="md:w-1/2 flex flex-col items-center font-mono font-black border-l-0 md:border-l border-gray-200 dark:border-cyan-900/50 pl-0 md:pl-12 w-full">
                     <p className="font-black text-cyan-600 dark:text-cyan-400 mb-6 tracking-widest text-center uppercase border-b border-gray-200 dark:border-cyan-900/50 pb-2 w-full">10. SQL UNION ALL Flow Diagram</p>
                     
                     <div className="bg-gray-100 dark:bg-cyan-900/20 border border-gray-300 dark:border-cyan-500/30 px-8 py-3 rounded-xl text-lg w-full max-w-[14rem] text-center text-gray-800 dark:text-cyan-300 shadow-sm mb-4 shrink-0 hover:scale-105 transition-transform cursor-default">Table A</div>
                     <ArrowDown className="text-gray-400 dark:text-cyan-500 w-6 h-6 my-1 shrink-0" />
                     <div className="bg-white dark:bg-black/40 border border-gray-300 dark:border-cyan-500/20 px-6 py-2 rounded-xl text-sm w-full max-w-[12rem] text-center text-gray-600 dark:text-cyan-400 mb-4 shrink-0 hover:scale-105 transition-transform cursor-default">SELECT Query</div>
                     <ArrowDown className="text-gray-400 dark:text-cyan-500 w-6 h-6 my-1 shrink-0" />
                     <div className="bg-gray-100 dark:bg-cyan-900/20 border border-gray-300 dark:border-cyan-500/30 px-8 py-3 rounded-xl text-lg w-full max-w-[14rem] text-center text-gray-800 dark:text-cyan-300 shadow-sm mb-4 shrink-0 hover:scale-105 transition-transform cursor-default">Table B</div>
                     <ArrowDown className="text-gray-400 dark:text-cyan-500 w-6 h-6 my-1 shrink-0" />
                     <div className="bg-white dark:bg-black/40 border border-gray-300 dark:border-cyan-500/20 px-6 py-2 rounded-xl text-sm w-full max-w-[12rem] text-center text-gray-600 dark:text-cyan-400 mb-4 shrink-0 hover:scale-105 transition-transform cursor-default">SELECT Query</div>
                     <ArrowDown className="text-cyan-500 dark:text-cyan-400 w-6 h-6 my-1 shrink-0" />
                     <div className="bg-cyan-500/10 dark:bg-cyan-600/40 border-2 border-cyan-400 px-8 py-3 rounded-xl text-xl w-full max-w-[14rem] text-center text-cyan-700 dark:text-white font-black shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-4 shrink-0 hover:scale-105 transition-transform cursor-default">UNION ALL</div>
                     <ArrowDown className="text-emerald-500 w-6 h-6 my-1 shrink-0" />
                     <div className="bg-emerald-50 dark:bg-emerald-900/80 border-2 border-emerald-500 px-8 py-4 rounded-xl text-2xl w-full max-w-[15rem] text-center text-emerald-700 dark:text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] shrink-0 flex items-center justify-center hover:scale-105 transition-transform cursor-default">Combined Results</div>

               </div>
          </div>
      </section>

    </div>
  );
};

export default SqlUnionAll;