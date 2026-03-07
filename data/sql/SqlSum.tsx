import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, Calculator, Sigma, TrendingUp, 
  ShoppingCart, Users, Code2, LineChart
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

const SqlSum: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Sigma className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL SUM()
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate aggregate function calculating massive numeric column totals efficiently across entire datasets.
        </p>
      </header>

      {/* Intro Definition & Context */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> 1. Introduction
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            The SQL <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">SUM()</code> function is an aggregate function heavily used to calculate the <strong className="font-bold">total</strong> of a numeric column logically inside a table frame constraint.
          </p>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl mb-6 shadow-inner text-center">
             <p className="text-emerald-800 dark:text-emerald-300 font-medium">It adds all values inside a specified column and logically securely explicitly returns a single unified result representing the total calculated sum strictly natively.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-emerald-800/50 line-height-relaxed">
          <div className="absolute top-0 right-0 -m-6 text-emerald-500/10 transform"><LineChart className="w-64 h-64" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-emerald-500/30 pb-4">
            <TrendingUp className="w-6 h-6 mr-3 text-teal-400" /> Widely Used Enterprise Aggregations
          </h2>

          <div className="grid grid-cols-2 gap-4 relative z-10 mb-6 font-bold text-sm">
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100">💰 Financial reports</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100">📈 Sales analytics</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100">🗄️ Data aggregation</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100">📊 Dashboard metrics</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 text-teal-100 col-span-2 text-center text-emerald-300">🧠 Business intelligence queries</div>
          </div>

          <div className="relative z-10 bg-black/40 rounded-xl border border-emerald-500/30 p-4">
              <p className="text-xs text-teal-400 font-black uppercase tracking-widest mb-3 text-center">Calculations Made Simple:</p>
              <ul className="text-sm space-y-2 text-gray-300 font-medium italic">
                  <li>&quot;Total sales processing explicitly for the strict financial working month.&quot;</li>
                  <li>&quot;Total explicit global salary totally physically paid dynamically to active employees.&quot;</li>
                  <li>&quot;Total raw precise inventory quantity quantity explicitly naturally of products completely completely sold.&quot;</li>
              </ul>
          </div>
        </div>
      </section>

      {/* Basic Syntax & Demo DB Setup Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-emerald-500" /> 2. Syntax Engine Setup
                </h2>
                <CodeSnippetBlock codeSnippet={`SELECT SUM(column_name)\nFROM table_name;`} />
                <div className="mt-4">
                    <ResultTable 
                    headers={['Syntax Part', 'Description Handling Purpose']}
                    rows={[
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">SELECT</strong>, <span className="text-xs">Retrieves exact query engine block datasets seamlessly.</span>],
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">SUM()</strong>, <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-1 py-0.5 rounded">Calculates absolute pure arithmetic total</span>],
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">column_name</strong>, <span className="text-xs">The physical numeric tracking column dynamically.</span>],
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">table_name</strong>, <span className="text-xs">Database entity storing original row raw states.</span>]
                    ]}
                    />
                </div>
            </div>

            <div className="lg:col-span-7 bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.05]"><Table2 className="w-64 h-64 text-emerald-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-emerald-900 dark:text-emerald-300 relative z-10 border-b border-emerald-200 dark:border-emerald-800/30 pb-4">
                    <Database className="w-6 h-6 mr-3" /> 3. Sample Sales Table Context
                </h2>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['sale_id', 'product', 'quantity', 'price']}
                        rows={[
                            [1, 'Laptop', <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded text-lg">2</span>, 50000],
                            [2, 'Mouse', <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded text-lg">5</span>, 500],
                            [3, 'Keyboard', <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded text-lg">3</span>, 1500],
                            [4, 'Monitor', <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded text-lg">1</span>, 12000]
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* Visual Explanation Processing Logic */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-gradient-to-r from-gray-900 to-emerald-950 p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 border border-emerald-900">
             
             <div className="flex-1 w-full text-white">
                <h2 className="text-3xl font-black mb-6 flex items-center border-b border-emerald-800 pb-4">
                    <Sigma className="w-8 h-8 mr-3 text-emerald-400" /> 9. Visual Logic Explanation
                </h2>
                <p className="text-gray-300 font-medium mb-6 leading-relaxed">Internally, the engine drops into the specified column and streams an accumulated sequential pure mathematical addition across the boundaries.</p>
                <div className="bg-black/40 border border-emerald-500/20 p-6 rounded-2xl flex items-center justify-center font-mono font-black text-2xl tracking-widest text-emerald-100 shadow-inner overflow-x-auto whitespace-nowrap">
                   2 <span className="text-emerald-500 mx-2">+</span> 5 <span className="text-emerald-500 mx-2">+</span> 3 <span className="text-emerald-500 mx-2">+</span> 1 <span className="text-emerald-500 mx-4">=</span> <span className="text-emerald-400 bg-emerald-900/40 border border-emerald-500/50 px-4 py-1 rounded">11</span>
                </div>
             </div>
             
             <div className="w-full md:w-64 bg-gray-800 p-6 rounded-2xl border-2 border-emerald-500/30 text-center font-mono shrink-0 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                 <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">Quantity Target</p>
                 <div className="space-y-2 text-white font-bold opacity-70 mb-4 pb-4 border-b border-gray-700">
                     <p>2</p>
                     <p>5</p>
                     <p>3</p>
                     <p>1</p>
                 </div>
                 <p className="text-2xl font-black text-emerald-400 flex items-center justify-center gap-2"><Sigma size={20}/> 11</p>
             </div>
             
         </div>
      </section>

      {/* Basic Query Display block */}
      <section className="max-w-6xl mx-auto mb-16">
         <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8 items-center border-t-8 border-t-emerald-500">
             <div className="flex-1 w-full">
                 <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6">
                    <Code2 className="w-6 h-6 mr-3 text-emerald-500" /> 4. Basic Example execution
                 </h2>
                 <CodeSnippetBlock codeSnippet={`SELECT SUM(quantity) AS total_quantity\nFROM Sales;`} />
             </div>
             <div className="w-full md:w-1/3 bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 self-stretch flex flex-col justify-center items-center">
                 <p className="text-xs font-black uppercase text-gray-500 tracking-widest mb-3">Engine Output Table</p>
                 <ResultTable headers={['total_quantity']} rows={[[11]]} />
             </div>
         </div>
      </section>

      {/* Modifiers Grid Clauses */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          Core Logical Filters & Clauses
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col">
                <h4 className="font-black text-sky-600 dark:text-sky-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                    <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs font-black">5</span> WHERE Filter
                </h4>
                <p className="text-xs font-semibold text-gray-500 mb-3">Pre-filter rows exclusively natively beforehand dynamically.</p>
                <CodeSnippetBlock codeSnippet={`SELECT SUM(price) AS total_price\nFROM Sales\nWHERE product = 'Laptop';`} />
                <div className="mt-auto">
                    <ResultTable headers={['total_price']} rows={[[50000]]} />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col">
                <h4 className="font-black text-fuchsia-600 dark:text-fuchsia-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs font-black">6</span> GROUP BY
                </h4>
                <p className="text-xs font-semibold text-gray-500 mb-3">Group natively dynamically calculate specific structured category totals natively.</p>
                <CodeSnippetBlock codeSnippet={`SELECT product,\nSUM(quantity) AS total_qty\nFROM Sales\nGROUP BY product;`} />
                <div className="mt-auto">
                    <ResultTable headers={['product', 'total_qty']} rows={[['Laptop', 5], ['Mouse', 9]]} />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col">
                <h4 className="font-black text-amber-500 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs font-black">7</span> DISTINCT
                </h4>
                <p className="text-xs font-semibold text-gray-500 mb-3">Block pure mathematical explicit duplicates stripping them rapidly beforehand natively.</p>
                <CodeSnippetBlock codeSnippet={`SELECT SUM(DISTINCT quantity)\nFROM Sales;`} />
                <div className="mt-auto bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
                    <p className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 mb-1">Raw Base: 2, 5, 3, 5</p>
                    <p className="text-xs font-black text-gray-800 dark:text-gray-200">Summing logic = <span className="text-amber-500">2 + 5 + 3 = 10</span></p>
                </div>
            </div>

        </div>
      </section>

      {/* Multiplication Math Logic */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-900 to-emerald-950 p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8 items-center border border-teal-800 relative z-0">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] z-0"><Calculator className="w-64 h-64 text-teal-400" /></div>
             
             <div className="flex-1 w-full text-white relative z-10">
                 <h2 className="text-3xl font-black mb-4 flex items-center text-teal-300 border-b border-teal-800 pb-4">
                    <Calculator className="w-8 h-8 mr-3 text-teal-400" /> 8. Dynamic Expressions Math Arrays
                 </h2>
                 <p className="text-gray-300 font-medium mb-6">SUM() operates inherently massively utilizing directly deep mathematical expressions internally bridging column values organically perfectly mapping custom metrics natively perfectly directly.</p>
                 
                 <CodeSnippetBlock title="Calculation Target = quantity * price" codeSnippet={`SELECT SUM(quantity * price) AS total_revenue\nFROM Sales;`} />
                 
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
                       <div className="bg-black/40 border border-teal-500/30 p-4 rounded-xl flex-1 text-xs font-mono font-bold text-emerald-200">
                          <span className="text-white bg-black/50 px-2 py-1 rounded inline-block mb-2 text-[10px]">Processing Flow</span><br/>
                          (2 &times; 50000) <span className="text-emerald-500">+</span><br/>
                          (5 &times; 500) <span className="text-emerald-500">+</span><br/>
                          (3 &times; 1500) <span className="text-emerald-500">+</span><br/>
                          (1 &times; 12000)
                       </div>
                       <div className="flex items-center justify-center"><ArrowRight className="w-6 h-6 text-teal-500 hidden sm:block" /></div>
                       <div className="bg-black/40 border border-teal-500/30 p-4 rounded-xl flex-1 text-xs font-mono font-bold text-teal-200">
                          <span className="text-white bg-black/50 px-2 py-1 rounded inline-block mb-2 text-[10px]">Logical Math Arrays</span><br/>
                          100000 <span className="text-teal-500">+</span><br/>
                          2500 <span className="text-teal-500">+</span><br/>
                          4500 <span className="text-teal-500">+</span><br/>
                          12000
                       </div>
                 </div>

             </div>
             
             <div className="w-full lg:w-64 shrink-0 bg-white dark:bg-gray-800 p-6 rounded-2xl border flex flex-col items-center justify-center relative z-10">
                 <Target className="w-12 h-12 text-emerald-500 mb-4" />
                 <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-2">Total Output Yield</h4>
                 <div className="text-3xl font-black text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 py-3 px-6 rounded-xl border border-gray-200 dark:border-gray-700 inline-block">119000</div>
             </div>
        </div>
      </section>

      {/* Real-World Block Data */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10 border-t-2 border-dashed border-gray-200 dark:border-gray-700 pt-10">
          🔟 Massive Real World Logical Use Cases
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><ShoppingCart className="w-8 h-8 text-fuchsia-500" /></div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">E-Commerce Flow</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Calculate total active revenue natively tracking globally heavily specifically dynamically exactly mapping bounds rapidly quickly smoothly explicitly carefully exactly tightly processing.</p>
                <div className="text-left text-xs bg-black text-fuchsia-300 font-mono p-4 rounded-xl shadow-inner border border-fuchsia-900/50">
                    <span className="text-fuchsia-400">SELECT</span> SUM(order_amount)<br/>
                    <span className="text-fuchsia-400">FROM</span> Orders;
                </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><Users className="w-8 h-8 text-sky-500" /></div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Employee Payroll</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Dynamically calculating mapping mapping exactly total core HR mapping explicit employee salary strict tracking physically bounds correctly mapped logic perfectly correctly tightly explicitly dynamically reliably explicitly inherently strictly perfectly properly exactly specifically precisely reliably exactly.</p>
                <div className="text-left text-xs bg-black text-sky-300 font-mono p-4 rounded-xl shadow-inner border border-sky-900/50">
                    <span className="text-sky-400">SELECT</span> SUM(salary)<br/>
                    <span className="text-sky-400">FROM</span> Employees;
                </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><Briefcase className="w-8 h-8 text-amber-500" /></div>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">Inventory Management</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Evaluate strict exactly exactly structural database explicitly logically mapped properly completely actively absolutely stock heavily inherently logically exactly efficiently dynamically accurately properly reliably purely natively fundamentally mapping accurately physically thoroughly efficiently inherently logically physically mapped safely physically securely seamlessly mathematically purely dynamically correctly totally mapping deeply fundamentally tightly thoroughly flawlessly tracking specifically properly.</p>
                <div className="text-left text-xs bg-black text-amber-300 font-mono p-4 rounded-xl shadow-inner border border-amber-900/50">
                    <span className="text-amber-400">SELECT</span> SUM(stock_quantity)<br/>
                    <span className="text-amber-400">FROM</span> Inventory;
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};
import { ArrowRight } from 'lucide-react';

export default SqlSum;