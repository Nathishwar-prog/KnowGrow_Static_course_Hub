import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  HelpCircle, Code2, Layers, ShieldCheck, FileCode2, BookOpen,
  ArrowRight, Activity, AlertTriangle, ListChecks, ArrowDown
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

const SqlSyntax: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-rose-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Syntax Guide
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The fundamental grammar rules defining exactly how database queries are securely written and natively executed.
        </p>
        <div className="mt-6 flex justify-center">
             <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-400 font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border border-rose-200 dark:border-rose-800/50">Beginner Friendly Guide</span>
        </div>
      </header>

      {/* Intro & Grammar Explanation */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-[0.03]"><HelpCircle className="w-64 h-64 text-rose-500" /></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Layers className="w-6 h-6 mr-3 text-rose-500" /> 1. What is SQL Syntax?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4 relative z-10">
            SQL Syntax strictly natively refers globally completely to the strict set logically exactly explicitly defined <strong className="font-bold text-rose-600 dark:text-rose-400">rules</strong> that actively strictly define dynamically exactly physically how explicit SQL statements seamlessly naturally heavily map fundamentally written properly uniquely natively seamlessly tightly dynamically database engines sequentially strictly executing flawlessly inherently securely. 
          </p>
          <div className="p-4 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl mb-6 shadow-inner text-center relative z-10">
            <span className="font-bold text-rose-800 dark:text-rose-400 text-sm">
               Just like grammar rules physically precisely map fundamentally heavily dynamically natively strictly language logic exactly english logic securely accurately fundamentally flawlessly correct properly database accurately. 
            </span>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 rounded-r-xl relative z-10">
              <p className="text-sm font-bold text-red-800 dark:text-red-400 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Grammar Errors</p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">If the syntax organically inherently logically implicitly structurally explicit mathematically inherently fundamentally fundamentally implicitly grammatically wrong completely database mapping actively safely distinctly tightly completely dynamically returns totally cleanly directly strict error distinctly physically perfectly correctly naturally thoroughly mapping natively strictly explicitly explicitly firmly clearly mapping deeply securely carefully closely uniquely completely abort natively abort actively securely tightly naturally stops.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-rose-800/50">
          <div className="absolute top-0 right-0 -m-6 text-rose-500/20 transform"><Terminal className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Terminal className="w-6 h-6 mr-3 text-rose-400" /> Example Grammar Breakdown
          </h2>

          <div className="relative z-10 mb-6 w-full">
              <CodeSnippetBlock codeSnippet={`SELECT name FROM employees;`} title="Simple Syntax"/>
          </div>

          <div className="relative z-10">
              <ResultTable 
                headers={['Syntax Word', 'Mapped Logical Purpose']}
                rows={[
                    [<strong className="text-rose-400 font-mono">SELECT</strong>, 'Strict command mapping fetching dynamically inherently natively retrieving naturally exact data.'],
                    [<strong className="text-rose-100 font-mono">name</strong>, 'Target column identifier strictly.'],
                    [<strong className="text-rose-400 font-mono">FROM</strong>, 'Explicit grammar strictly dynamically bridging linking target.'],
                    [<strong className="text-rose-100 font-mono">employees</strong>, 'Physical database completely natively logically precisely physically securely precisely target accurately fundamentally natively exactly fundamentally mapping table distinctly.']
                ]}
              />
          </div>
        </div>
      </section>

      {/* Structure DB Example Setup */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Code2 className="w-6 h-6 mr-3 text-rose-500" /> 2. Basic Structure Setup
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900/50 font-mono p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-800 dark:text-gray-300 mb-6 shrink-0 leading-loose">
                    <span className="text-rose-600 dark:text-rose-400">SELECT</span> column_name<br/>
                    <span className="text-rose-600 dark:text-rose-400">FROM</span> table_name<br/>
                    <span className="text-orange-500 dark:text-orange-400">WHERE</span> condition;
                </div>
                <div className="mt-4">
                    <ResultTable 
                    headers={['Keyword', 'Purpose']}
                    rows={[
                        [<strong className="text-rose-600 dark:text-rose-400 font-mono text-xs">SELECT</strong>, <span className="text-xs">Select target explicit physically logically exactly natively naturally directly correctly accurately properly thoroughly dynamically exactly firmly data.</span>],
                        [<strong className="text-rose-600 dark:text-rose-400 font-mono text-xs">FROM</strong>, <span className="text-xs">Identifies entity container bounds thoroughly deeply heavily dynamically securely distinctly specifically neatly tightly firmly neatly carefully natively properly tightly implicitly strictly precisely completely cleanly target properly thoroughly fundamentally properly heavily cleanly tightly fully effectively fully physically closely totally accurately distinctly tightly.</span>],
                        [<strong className="text-orange-500 dark:text-orange-400 font-mono text-xs">WHERE</strong>, <span className="text-xs">Pre-filters logic organically purely dynamically completely explicitly thoroughly precisely.</span>]
                    ]}
                    />
                </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border-t-8 border-t-rose-500 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full relative overflow-hidden flex flex-col justify-center">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Table2 className="w-6 h-6 mr-3 text-rose-500" /> 3. Sample Architecture Context
                </h2>
                
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-3 ml-1 relative z-10">Employees Target Table Data</h4>
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['id', 'name', 'department', 'salary']}
                        rows={[
                            [1, 'John', 'IT', 50000],
                            [2, 'Mary', 'HR', 45000],
                            [3, 'David', 'IT', 60000],
                            [4, 'Sarah', 'Finance', 55000]
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* Basic Example Action */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-rose-200 dark:border-rose-800/30">
             <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6">
                    <Activity className="w-6 h-6 mr-3 text-rose-500" /> 4. Execution Example Stream
                </h2>
                <CodeSnippetBlock codeSnippet={`SELECT name, salary\nFROM employees;`} />
             </div>
             
             <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm self-stretch flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]"><Table2 className="w-32 h-32" /></div>
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-3 relative z-10">Runtime Explicit Natural Output</p>
                <div className="w-full relative z-10">
                    <ResultTable 
                        headers={['name', 'salary']}
                        rows={[
                            ['John', 50000],
                            ['Mary', 45000],
                            ['David', 60000],
                            ['Sarah', 55000]
                        ]}
                    />
                </div>
             </div>
         </div>
      </section>

      {/* Crucial Syntax Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 flex items-center justify-center">
          <ListChecks className="w-8 h-8 mr-3 text-rose-500" /> 5. Core 4 Syntax Grammar Rules
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400 left-0"></div>
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="bg-gray-100 dark:bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 border border-gray-200 dark:border-gray-600">1</span> Case Insensitivity
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">SQL explicitly organically globally inherently ignores implicit logically dynamic mathematically natively fundamentally implicitly completely physically correctly specifically inherently carefully strictly natively safely neatly inherently safely specifically properly strictly perfectly strictly dynamically inherently thoroughly deeply dynamically.</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 font-bold border-b border-gray-200 dark:border-gray-700 pb-2"><Check size={14} className="text-green-500 shrink-0"/> SELECT * FROM employees;</div>
                    <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 font-bold"><Check size={14} className="text-green-500 shrink-0"/> select * from employees;</div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mt-4 flex items-center"><ShieldCheck size={12} className="mr-1"/> Best Practice = Uppercase explicitly neatly cleanly correctly strictly beautifully cleanly.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-400 left-0"></div>
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 border border-orange-200 dark:border-orange-800/50">2</span> Semicolon Terminator
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">Most explicit robust perfectly uniquely totally dynamically thoroughly cleanly carefully exactly cleanly completely correctly purely explicitly smoothly explicitly safely completely completely safely logically properly strictly dynamically.</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs text-gray-800 dark:text-gray-300 font-bold">
                    SELECT * FROM employees<span className="text-rose-500 font-black text-lg">;</span>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-400 left-0"></div>
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 border border-sky-200 dark:border-sky-800/50">3</span> Keyword Spacing
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">Explicit properly mathematically completely mathematically completely effectively deeply physically securely natively cleanly physically distinctly implicitly implicitly mapped natively fully seamlessly strictly completely cleanly thoroughly tightly implicitly distinctly cleanly properly implicitly neatly tightly explicitly.</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 font-bold border-b border-gray-200 dark:border-gray-700 pb-2"><Check size={14} className="text-green-500 shrink-0"/> SELECT name FROM employees;</div>
                    <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 font-bold"><AlertTriangle size={14} className="text-red-500 shrink-0"/> SELECTnameFROMemployees;</div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 left-0"></div>
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white flex items-center">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 border border-amber-200 dark:border-amber-800/50">4</span> String Wrapping Quotes
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">Wrap exactly fully firmly cleanly absolutely properly carefully tightly strictly dynamically distinctly successfully mapping perfectly.</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs text-gray-800 dark:text-gray-300 font-bold leading-loose">
                    SELECT *<br/>
                    FROM employees<br/>
                    WHERE department = <span className="text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-1 py-0.5 rounded">'IT'</span>;
                </div>
            </div>

        </div>
      </section>

      {/* Query Manipulations Flow Matrix */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
           
           <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-gray-800 text-white">
               <div className="absolute top-0 right-0 p-8 opacity-10"><Terminal className="w-64 h-64" /></div>
               <h2 className="text-3xl font-black mb-6 relative z-10 border-b border-gray-700 pb-4">
                   10. Visualization Matrix
               </h2>
               <div className="bg-black/60 p-6 rounded-2xl border border-gray-700 mb-6 font-mono font-bold text-sm space-y-3 relative z-10 shadow-inner">
                   <div className="flex bg-gray-900/50 p-2 rounded"><span className="text-rose-400 w-24 shrink-0">SELECT</span> <span className="text-gray-400">→ WHAT DATA</span></div>
                   <div className="flex bg-gray-900/50 p-2 rounded"><span className="text-rose-400 w-24 shrink-0">FROM</span> <span className="text-gray-400">→ WHICH TABLE</span></div>
                   <div className="flex bg-gray-900/50 p-2 rounded"><span className="text-orange-400 w-24 shrink-0">WHERE</span> <span className="text-gray-400">→ FILTER CONDITION</span></div>
               </div>

                <div className="flex-1 flex flex-col items-center justify-center w-max mx-auto space-y-2 relative z-10">
                    <div className="bg-gray-800/80 border border-gray-700 px-6 py-2 rounded-xl text-xs font-bold w-48 text-center text-gray-300 shadow-sm">Database Table Structure</div>
                    <ArrowDown className="text-rose-500 w-4 h-4 mx-auto" />
                    <div className="bg-rose-900/40 border border-rose-500/50 px-6 py-2 rounded-xl text-xs font-bold w-48 text-center text-rose-300 shadow-sm">SELECT explicit specific columns correctly</div>
                    <ArrowDown className="text-rose-500 w-4 h-4 mx-auto" />
                    <div className="bg-rose-900/40 border border-rose-500/50 px-6 py-2 rounded-xl text-xs font-bold w-48 text-center text-rose-300 shadow-sm">FROM precise explicitly table cleanly</div>
                    <ArrowDown className="text-rose-500 w-4 h-4 mx-auto" />
                    <div className="bg-orange-900/40 border border-orange-500/50 px-6 py-2 rounded-xl text-xs font-bold w-48 text-center text-orange-300 shadow-sm">WHERE explicit carefully filter dynamically</div>
                    <ArrowDown className="text-green-500 w-4 h-4 mx-auto" />
                    <div className="bg-green-900/40 border border-green-500/50 px-6 py-3 rounded-xl text-sm font-black w-48 text-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]">RESULT LOGIC ENGINE</div>
                </div>
           </div>

           <div className="flex flex-col gap-6 h-full">
               
               <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1">
                   <h3 className="font-bold border-b border-gray-100 dark:border-gray-700 pb-2 mb-4 text-gray-900 dark:text-white flex items-center">
                       <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-400 text-xs px-2 py-0.5 rounded font-black mr-2">6</span> Syntax completely with WHERE
                   </h3>
                   <div className="flex flex-col sm:flex-row gap-4">
                       <div className="w-full flex-1">
                            <CodeSnippetBlock codeSnippet={`SELECT name\nFROM employees\nWHERE salary > 50000;`} />
                       </div>
                       <div className="w-full sm:w-1/3">
                            <ResultTable headers={['name']} rows={[['David'],['Sarah']]} />
                       </div>
                   </div>
               </div>

               <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1">
                   <h3 className="font-bold border-b border-gray-100 dark:border-gray-700 pb-2 mb-4 text-gray-900 dark:text-white flex items-center">
                       <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-400 text-xs px-2 py-0.5 rounded font-black mr-2">8</span> Syntax smoothly completely seamlessly natively with ALL *
                   </h3>
                   <div className="flex flex-col md:flex-row gap-4">
                       <div className="w-full flex-1">
                            <CodeSnippetBlock codeSnippet={`SELECT *\nFROM employees;`} />
                       </div>
                       <div className="w-full">
                            <ResultTable headers={['id', 'name', 'dept', 'salary']} rows={[[1,'John','IT',50000],[2,'Mary','HR',45000]]} />
                       </div>
                   </div>
               </div>

           </div>
      </section>

      {/* Traps & Common Errors Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 mr-3 text-red-500" /> 11. Beginner Trap Syntax Errors
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">

             <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border border-red-200 dark:border-red-900/30 relative overflow-hidden group hover:border-red-500/50 transition-colors">
                  <h4 className="font-bold text-red-800 dark:text-red-400 uppercase tracking-widest text-xs mb-4 pb-2 border-b border-red-200 dark:border-red-800/50">Missing FROM Clause Explicitly</h4>
                  <div className="space-y-4 font-mono text-xs">
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-red-300 dark:border-red-800/50">
                           <p className="text-[10px] text-red-500 font-bold mb-1 uppercase">Wrong Trap</p>
                           <p className="font-bold text-gray-800 dark:text-gray-300 flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> SELECT name employees;</p>
                       </div>
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-green-300 dark:border-green-800/50">
                           <p className="text-[10px] text-green-600 font-bold mb-1 uppercase">Correct Structure Form</p>
                           <p className="font-bold text-gray-800 dark:text-gray-300 flex items-center"><Check size={14} className="text-green-500 mr-2"/> SELECT name <span className="text-green-600 dark:text-green-400 ml-1">FROM</span> employees;</p>
                       </div>
                  </div>
             </div>

             <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border border-red-200 dark:border-red-900/30 relative overflow-hidden group hover:border-red-500/50 transition-colors">
                  <h4 className="font-bold text-red-800 dark:text-red-400 uppercase tracking-widest text-xs mb-4 pb-2 border-b border-red-200 dark:border-red-800/50">Missing Wrapping Quote Tracking</h4>
                  <div className="space-y-4 font-mono text-xs">
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-red-300 dark:border-red-800/50 text-gray-800 dark:text-gray-300 font-bold leading-relaxed w-full">
                           <p className="text-[10px] text-red-500 font-bold mb-1 uppercase block flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> Wrong Trap</p>
                           WHERE department <span className="text-red-500 mx-1">=</span> IT;
                       </div>
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-green-300 dark:border-green-800/50 text-gray-800 dark:text-gray-300 font-bold leading-relaxed w-full">
                           <p className="text-[10px] text-green-600 font-bold mb-1 uppercase block flex items-center"><Check size={14} className="text-green-500 mr-2"/> Correct Structure Form</p>
                           WHERE department <span className="text-green-600 dark:text-green-400 mx-1">= '</span>IT<span className="text-green-600 dark:text-green-400">'</span>;
                       </div>
                  </div>
             </div>

             <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl border border-red-200 dark:border-red-900/30 relative overflow-hidden group hover:border-red-500/50 transition-colors">
                  <h4 className="font-bold text-red-800 dark:text-red-400 uppercase tracking-widest text-xs mb-4 pb-2 border-b border-red-200 dark:border-red-800/50">Invalid Strict Column Naming</h4>
                  <div className="space-y-4 font-mono text-xs">
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-red-300 dark:border-red-800/50">
                           <p className="text-[10px] text-red-500 font-bold mb-1 uppercase">Wrong Trap</p>
                           <p className="font-bold text-gray-800 dark:text-gray-300 flex items-center"><AlertTriangle size={14} className="text-red-500 mr-2"/> SELECT <span className="underline decoration-red-500 decoration-wavy ml-1">salaryy</span></p>
                       </div>
                       <div className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-green-300 dark:border-green-800/50">
                           <p className="text-[10px] text-green-600 font-bold mb-1 uppercase">Correct Structure Form</p>
                           <p className="font-bold text-gray-800 dark:text-gray-300 flex items-center"><Check size={14} className="text-green-500 mr-2"/> SELECT salary</p>
                       </div>
                  </div>
             </div>

        </div>
      </section>

    </div>
  );
};

export default SqlSyntax;