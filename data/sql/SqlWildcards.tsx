import React, { useState } from 'react';
import { 
  Terminal, Copy, Check, Target, 
  HelpCircle, Database, Search, TextCursor,
  Zap, FileSearch, ArrowRight, XCircle, AlertTriangle
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

const SqlWildcards: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Search className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL WILDCARDS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Unlock the power of pattern matching to find partial text matches instead of exact strings.
        </p>
      </header>

      {/* 1. What are SQL Wildcards? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> 1. What are SQL Wildcards?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            SQL Wildcards are special characters used with the <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">LIKE</code> operator to search for patterns in text data. Wildcards allow you to find partial matches instead of exact matches.
          </p>
          <div className="mb-4">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">Commonly used for:</p>
            <ul className="grid grid-cols-2 gap-3 mt-3 font-mono text-sm text-emerald-800 dark:text-emerald-300">
               <li className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30 flex items-center"><TextCursor className="w-4 h-4 mr-2" /> Searching names</li>
               <li className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30 flex items-center"><Search className="w-4 h-4 mr-2" /> Filtering emails</li>
               <li className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30 flex items-center"><Terminal className="w-4 h-4 mr-2" /> Similar text</li>
               <li className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-800/30 flex items-center"><Database className="w-4 h-4 mr-2" /> Data analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-emerald-800/50 justify-center overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><FileSearch className="w-48 h-48 text-emerald-500" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-emerald-500/30 pb-4">
            <Zap className="w-6 h-6 mr-3 text-emerald-400" /> Key Idea
          </h2>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
             <div className="bg-gray-800/90 border border-gray-600 px-6 py-4 rounded-xl shadow-lg mb-6 flex items-center gap-4">
                 <span className="text-emerald-400 font-black text-2xl tracking-widest">LIKE</span>
                 <span className="text-gray-400 font-bold text-xl">+</span>
                 <span className="text-teal-300 font-bold text-xl bg-teal-900/50 px-3 py-1 rounded">Wildcard</span>
                 <ArrowRight className="text-gray-400" />
                 <span className="text-white font-bold">Pattern Matching</span>
             </div>
             <div className="w-full">
                 <CodeSnippetBlock codeSnippet={`SELECT * FROM customers\nWHERE name LIKE 'J%';`} title="Example Query" />
                 <p className="text-emerald-300 font-mono text-sm text-center">This retrieves all names starting with &quot;J&quot;.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Syntax and Common Wildcards */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12 bg-gray-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-gray-800">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]"><Search className="w-96 h-96 text-emerald-500" /></div>
                
                <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <h2 className="text-2xl font-black mb-6 text-white border-b border-gray-700 pb-4 flex items-center">
                            <Terminal className="w-6 h-6 mr-3 text-emerald-500" /> 2. SQL Wildcard Syntax
                        </h2>
                        <CodeSnippetBlock codeSnippet={`SELECT column_name\nFROM table_name\nWHERE column_name LIKE pattern;`} title="Syntax Structure" />
                        <div className="mt-6">
                            <ResultTable 
                                headers={['Element', 'Description']}
                                rows={[
                                    [<strong className="text-emerald-400 font-mono">LIKE</strong>, <span className="text-gray-300">Used for pattern matching</span>],
                                    [<strong className="text-teal-400 font-mono">pattern</strong>, <span className="text-gray-300">Text pattern using wildcards</span>]
                                ]}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-6 text-white border-b border-gray-700 pb-4 flex items-center">
                            <TextCursor className="w-6 h-6 mr-3 text-teal-400" /> 3. Most Common Wildcards
                        </h2>
                        <p className="text-emerald-400 font-bold text-sm mb-4 uppercase tracking-widest"><Check className="inline w-4 h-4 mr-1"/> Most used: <code className="bg-emerald-900/50 px-2 py-0.5 rounded text-white text-lg">%</code> and <code className="bg-emerald-900/50 px-2 py-0.5 rounded text-white text-lg">_</code></p>
                        <ResultTable 
                            headers={['Wildcard', 'Meaning']}
                            rows={[
                                [<code className="font-black text-xl text-emerald-400">%</code>, <span className="text-gray-300">Represents zero or more characters</span>],
                                [<code className="font-black text-xl text-emerald-400">_</code>, <span className="text-gray-300">Represents exactly one character</span>],
                                [<code className="font-bold text-lg text-teal-500">[]</code>, <span className="text-gray-400 text-xs">Any character within brackets (SQL Server)</span>],
                                [<code className="font-bold text-lg text-teal-500">^</code>, <span className="text-gray-400 text-xs">Not in brackets</span>],
                                [<code className="font-bold text-lg text-teal-500">-</code>, <span className="text-gray-400 text-xs">Range of characters</span>]
                            ]}
                        />
                    </div>
                </div>
            </div>
      </section>

      {/* 4. Example Table & 5. Multiple Characters (%) */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Database className="w-5 h-5 mr-3 text-emerald-500" /> 4. Example Table
               </h2>
               <p className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2">Table: Customers</p>
               <div className="flex-1">
                 <ResultTable headers={['id', 'name']} rows={[[1, 'John'], [2, 'Mary'], [3, 'Jack'], [4, 'David'], [5, 'James']]} />
               </div>
          </div>

          <div className="lg:col-span-8 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-2xl font-black mb-4 flex items-center text-gray-900 dark:text-white">
                  5. Wildcard <code className="ml-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-800">%</code> <span className="ml-3 text-lg font-bold text-emerald-600 dark:text-emerald-500">(Multiple Characters)</span>
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium border-l-4 border-emerald-500 pl-3"><code className="font-black text-emerald-600 dark:text-emerald-400">%</code> represents any number of characters.</p>
               
               <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex flex-col">
                       <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name LIKE 'J%';`} title="Names starting with 'J'" />
                       <div className="mt-2">
                           <p className="font-bold text-xs uppercase text-gray-500 tracking-wider mb-2">Output</p>
                           <ResultTable headers={['id', 'name']} rows={[[1, 'John'], [3, 'Jack'], [5, 'James']]} />
                       </div>
                   </div>

                   <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/40 flex flex-col">
                       <h3 className="font-black text-emerald-800 dark:text-emerald-400 mb-4 uppercase tracking-widest text-sm flex items-center"><Search className="w-4 h-4 mr-2"/> Visualization</h3>
                       <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm font-mono text-gray-700 dark:text-gray-300 flex-1 flex flex-col justify-center">
                           <div className="text-center font-black text-2xl mb-4 text-emerald-600 dark:text-emerald-400 border-b border-emerald-100 dark:border-emerald-900/50 pb-2">J%</div>
                           <div className="flex flex-col items-center gap-2">
                               <div className="flex items-center"><span className="text-emerald-500 mr-2">│</span></div>
                               <div className="flex items-center w-full max-w-[150px]"><span className="text-emerald-500 mr-2">├──</span> <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded w-full border border-emerald-200 dark:border-emerald-800 font-bold">John</span></div>
                               <div className="flex items-center w-full max-w-[150px]"><span className="text-emerald-500 mr-2">├──</span> <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded w-full border border-emerald-200 dark:border-emerald-800 font-bold">Jack</span></div>
                               <div className="flex items-center w-full max-w-[150px]"><span className="text-emerald-500 mr-2">└──</span> <span className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded w-full border border-emerald-200 dark:border-emerald-800 font-bold">James</span></div>
                           </div>
                       </div>
                   </div>
               </div>
          </div>
      </section>

      {/* 6 & 7. % Ending and Contains */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  6. Wildcard <code className="mx-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded shadow-sm">%</code> (Ending Pattern)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm font-medium border-l-4 border-emerald-400 pl-3">Find names ending with "n".</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name LIKE '%n';`} title="Ends With" />
              <div className="mt-auto pt-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</p>
                  <ResultTable headers={['id', 'name']} rows={[[1, 'John']]} />
              </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                  7. Wildcard <code className="mx-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded shadow-sm">%</code> (Contains Pattern)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm font-medium border-l-4 border-emerald-400 pl-3">Find names containing "av".</p>
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name LIKE '%av%';`} title="Contains" />
              <div className="mt-auto pt-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</p>
                  <ResultTable headers={['id', 'name']} rows={[[4, 'David']]} />
              </div>
          </div>
      </section>

      {/* 8. Wildcard _ (Single Character) */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-indigo-900/20 p-8 lg:p-12 rounded-[2rem] shadow-sm border border-indigo-100 dark:border-indigo-800/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05]"><TextCursor className="w-64 h-64 text-indigo-500" /></div>
              
              <h2 className="text-3xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-indigo-200 dark:border-indigo-800/50 pb-4 relative z-10">
                  8. Wildcard <code className="mx-3 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-400 px-4 py-1 rounded-xl shadow-sm border border-indigo-200 dark:border-indigo-700">_</code> <span className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold">(Single Character)</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-8 text-lg relative z-10 border-l-4 border-indigo-500 pl-4">
                  <code className="font-black text-indigo-600 dark:text-indigo-400">_</code> represents <strong>exactly one</strong> character.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                  <div className="flex flex-col">
                      <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name LIKE 'J_ck';`} title="Strict One Character Gap" />
                      <div className="mt-6">
                           <p className="font-bold text-xs uppercase text-indigo-600 dark:text-indigo-400 tracking-wider mb-2">Output</p>
                           <ResultTable headers={['name']} rows={[['Jack']]} />
                      </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900/60 p-8 rounded-2xl border border-indigo-200 dark:border-indigo-800 flex flex-col justify-center items-center shadow-lg">
                      <p className="text-indigo-500 dark:text-indigo-400 font-bold uppercase tracking-widest mb-6">Explanation Visualization</p>
                      
                      <div className="flex flex-col items-center font-mono text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
                          <div className="flex gap-4 font-black mb-4 pb-4 border-b-2 border-dashed border-indigo-300 dark:border-indigo-700">
                              <span className="text-emerald-500">J</span>
                              <span className="text-indigo-500 bg-indigo-100 dark:bg-indigo-900/50 px-2 rounded">_</span>
                              <span className="text-emerald-500">c</span>
                              <span className="text-emerald-500">k</span>
                          </div>
                          <div className="flex gap-4 mb-4 text-indigo-400">
                              <span>│</span>
                              <span>│</span>
                              <span>│</span>
                              <span>│</span>
                          </div>
                          <div className="flex gap-4 font-bold bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                              <span className="text-emerald-500">J</span>
                              <span className="text-amber-500 border-b-4 border-amber-500 px-1">a</span>
                              <span className="text-emerald-500">c</span>
                              <span className="text-emerald-500">k</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 9 & 10. Visualization and Multiple Conditions */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl flex flex-col text-white border border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
               <h2 className="text-2xl font-black mb-6 text-emerald-400 flex items-center pb-4 border-b border-slate-700">
                  <Search className="w-6 h-6 mr-3" /> 9. Visualization Overview
               </h2>
               
               <div className="flex-1 flex flex-col justify-between gap-6 font-mono text-sm mt-4">
                   <div className="flex gap-4 justify-between items-end">
                       <div>
                           <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2">Dataset</p>
                           <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 flex flex-col gap-1">
                               <div className="bg-emerald-900/30 text-emerald-300 border border-emerald-500/50 px-2 py-0.5 rounded">John</div>
                               <div className="bg-emerald-900/30 text-emerald-300 border border-emerald-500/50 px-2 py-0.5 rounded">Jack</div>
                               <div className="bg-emerald-900/30 text-emerald-300 border border-emerald-500/50 px-2 py-0.5 rounded">James</div>
                               <div className="text-slate-500 px-2 py-0.5 line-through">Mary</div>
                               <div className="text-slate-500 px-2 py-0.5 line-through">David</div>
                           </div>
                       </div>
                       
                       <div className="flex flex-col items-center">
                           <div className="bg-slate-800 border-2 border-emerald-500 p-3 rounded-xl shadow-lg shadow-emerald-900/50 z-10 mb-6">
                               <p className="text-emerald-400 font-bold text-center">LIKE 'J%'</p>
                           </div>
                           <ArrowRight className="text-emerald-500 w-6 h-6 rotate-90" />
                       </div>

                       <div>
                           <p className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] mb-2">Result</p>
                           <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/50 flex flex-col gap-1">
                               <div className="text-emerald-100 font-bold bg-emerald-800/80 px-2 py-0.5 rounded min-w-[60px] text-center">John</div>
                               <div className="text-emerald-100 font-bold bg-emerald-800/80 px-2 py-0.5 rounded min-w-[60px] text-center">Jack</div>
                               <div className="text-emerald-100 font-bold bg-emerald-800/80 px-2 py-0.5 rounded min-w-[60px] text-center">James</div>
                           </div>
                       </div>
                   </div>
               </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Database className="w-6 h-6 mr-3 text-emerald-500" /> 10. Multiple Conditions
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">Combine wildcards using logical operators like <code className="font-bold">OR</code>/<code className="font-bold">AND</code>.</p>
               
               <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name LIKE 'J%'\nOR name LIKE 'M%';`} title="Find J OR M names" />
               <div className="mt-auto pt-4">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</p>
                   <ResultTable headers={['name']} rows={[['John'], ['Jack'], ['James'], ['Mary']]} />
               </div>
          </div>
      </section>

      {/* 11, 12, 13. Real World, NOT LIKE, Performance */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 11 */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-teal-900/20 p-8 rounded-3xl shadow-sm border border-teal-200 dark:border-teal-800/40 flex flex-col">
              <h2 className="text-xl font-bold mb-4 flex items-center text-teal-800 dark:text-teal-400">
                  <Target className="w-5 h-5 mr-3 text-teal-600" /> 11. Real-World Use
              </h2>
              <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 bg-white dark:bg-gray-900/50 p-3 rounded border border-teal-100 dark:border-teal-800/50"><strong>Goal:</strong> Find all gmail users in analytics filtering.</p>
                  <p className="font-bold text-[10px] uppercase text-gray-500 tracking-wider mb-2">Table: Users</p>
                  <ResultTable headers={['id', 'email']} rows={[[1, 'john@gmail.com'], [2, 'mary@yahoo.com'], [3, 'david@gmail.com']]} />
                  <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Users\nWHERE email LIKE '%gmail.com';`} title="Targeting Domain" />
              </div>
              <div className="mt-4 pt-4 border-t border-teal-200 dark:border-teal-800/50">
                  <p className="text-xs font-bold text-teal-700 dark:text-teal-500 uppercase tracking-wider mb-2">Output</p>
                  <ResultTable headers={['email']} rows={[['john@gmail.com'], ['david@gmail.com']]} />
              </div>
          </div>

          {/* 12 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
              <h2 className="text-xl font-bold mb-4 flex items-center text-rose-600 dark:text-rose-400">
                  <XCircle className="w-5 h-5 mr-3 text-rose-500" /> 12. NOT LIKE
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 border-l-4 border-rose-500 pl-3">Invert the logic to explicitly exclude specific patterns from your results.</p>
              
              <CodeSnippetBlock codeSnippet={`SELECT *\nFROM Customers\nWHERE name NOT LIKE 'J%';`} title="Exclude 'J' names" />
              <div className="mt-auto pt-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Output</p>
                  <ResultTable headers={['name']} rows={[['Mary'], ['David']]} />
              </div>
          </div>

          {/* 13 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col relative overflow-hidden">
              <div className="absolute -top-6 -right-6 opacity-[0.05]"><AlertTriangle className="w-48 h-48 text-amber-500" /></div>
              <h2 className="text-xl font-bold mb-4 flex items-center text-amber-600 dark:text-amber-500 relative z-10">
                  <Zap className="w-5 h-5 mr-3 text-amber-500" /> 13. Performance Tip
              </h2>
              <div className="relative z-10 flex-1 flex flex-col">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-6 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-200 dark:border-amber-800/50">
                      Using <code className="text-amber-600 dark:text-amber-400 font-black text-lg">%</code> at the beginning of a pattern may slow down queries.
                  </p>
                  
                  <div className="space-y-4 font-mono text-sm mb-6">
                      <div className="border border-rose-200 dark:border-rose-900/50 rounded p-3 bg-rose-50/50 dark:bg-rose-900/10">
                          <p className="text-rose-600 dark:text-rose-400 font-bold mb-1 uppercase text-[10px] tracking-widest"><XCircle className="w-3 h-3 inline mr-1" /> Slow (Scan required)</p>
                          <code className="text-gray-800 dark:text-gray-200">WHERE name LIKE <span className="text-rose-500 font-black">'%son'</span></code>
                      </div>
                      
                      <div className="border border-emerald-200 dark:border-emerald-900/50 rounded p-3 bg-emerald-50/50 dark:bg-emerald-900/10">
                          <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-1 uppercase text-[10px] tracking-widest"><Check className="w-3 h-3 inline mr-1" /> Better Performance</p>
                          <code className="text-gray-800 dark:text-gray-200">WHERE name LIKE <span className="text-emerald-500 font-black">'Joh%'</span></code>
                      </div>
                  </div>

                  <p className="mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4 flex items-start">
                      <Terminal className="w-3 h-3 mr-2 shrink-0 mt-0.5" />
                      <strong>Reason:</strong> Indexes work much better when the pattern targets from the beginning of the string.
                  </p>
              </div>
          </div>

      </section>

    </div>
  );
};

export default SqlWildcards;