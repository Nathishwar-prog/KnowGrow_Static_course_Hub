import React, { useState } from 'react';
import { 
  Terminal, Copy, Check, Target, 
  HelpCircle, ShieldCheck, Database,
  Eye, Layers, Briefcase, Key, Lock,
  RefreshCw, Trash2, Zap, ArrowRight,
  MonitorPlay, CheckCircle, AlertCircle
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

const SqlViews: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-cyan-950/20 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default relative">
          <Eye className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL VIEWS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Virtual tables showing customized data queries for security, simplicity, and reuse.
        </p>
      </header>

      {/* 1. What is an SQL View? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-cyan-500" /> 1. What is an SQL View?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            An SQL View is a <strong>virtual table</strong> created from a SQL query. Instead of storing data itself, a view displays data from one or more tables. Think of a view as a <span className="text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-900/30 px-1.5 py-0.5 rounded">saved SQL query</span> that behaves like a table.
          </p>
          <div className="mb-4">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-100 dark:border-gray-700 pb-2">Views are commonly used to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 font-mono text-sm text-cyan-800 dark:text-cyan-300">
               <li className="flex items-center bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded-lg border border-cyan-100 dark:border-cyan-800/30"><Zap className="w-4 h-4 text-amber-500 mr-2 shrink-0" />Simplify complex queries</li>
               <li className="flex items-center bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded-lg border border-cyan-100 dark:border-cyan-800/30"><ShieldCheck className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />Hide sensitive data</li>
               <li className="flex items-center bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded-lg border border-cyan-100 dark:border-cyan-800/30"><Target className="w-4 h-4 text-rose-500 mr-2 shrink-0" />Provide customized data</li>
               <li className="flex items-center bg-cyan-50 dark:bg-cyan-900/20 p-2 rounded-lg border border-cyan-100 dark:border-cyan-800/30"><RefreshCw className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />Improve code reusability</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white p-8 rounded-3xl shadow-xl flex flex-col relative border border-cyan-800/50 justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform"><Layers className="w-48 h-48 text-cyan-500" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10 border-b border-cyan-500/30 pb-4">
            <Eye className="w-6 h-6 mr-3 text-cyan-400" /> Key Idea
          </h2>
          <div className="relative z-10 flex flex-col gap-4 font-mono text-center w-full mx-auto max-w-sm">
             <div className="bg-gray-800/80 border border-gray-600 p-3 flex justify-center text-gray-300 rounded shadow">Base Tables</div>
             <div className="flex justify-center"><ArrowRight className="text-cyan-400 rotate-90 md:rotate-0" /></div>
             <div className="bg-cyan-600/30 border border-cyan-500/50 p-3 flex justify-center text-cyan-300 rounded shadow">SQL Query</div>
             <div className="flex justify-center"><ArrowRight className="text-cyan-400 rotate-90 md:rotate-0" /></div>
             <div className="bg-blue-600/50 border border-blue-400/50 p-4 rounded-xl flex items-center justify-center font-black tracking-widest text-lg text-blue-100 shadow-lg">VIEW</div>
             <div className="flex justify-center"><ArrowRight className="text-cyan-400 rotate-90 md:rotate-0" /></div>
             <div className="bg-emerald-900/40 border border-emerald-500/50 p-3 rounded font-bold text-emerald-300 shadow">Result shown like a table</div>
          </div>
        </div>
      </section>

      {/* 2. SQL View Syntax */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-8 border-t-cyan-500 border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-cyan-500" /> 2. SQL View Syntax
                </h2>
                <CodeSnippetBlock codeSnippet={`CREATE VIEW view_name AS\nSELECT column1, column2\nFROM table_name\nWHERE condition;`} title="Syntax" />
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute -right-8 -bottom-8 opacity-[0.03]"><MonitorPlay className="w-64 h-64 text-cyan-700" /></div>
                <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white relative z-10 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Layers className="w-5 h-5 mr-3 text-cyan-500" /> Syntax Explanation
                </h3>
                
                <div className="relative z-10 flex-1">
                    <ResultTable 
                        headers={['Keyword', 'Description']}
                        rows={[
                            [<strong className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">CREATE VIEW</strong>, 'Creates a new view'],
                            [<strong className="text-gray-900 dark:text-white font-mono text-sm">view_name</strong>, 'Name of the view'],
                            [<strong className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">SELECT</strong>, 'Query that defines the view'],
                            [<strong className="text-gray-900 dark:text-white font-mono text-sm">table_name</strong>, 'Source table']
                        ]}
                    />
                </div>
            </div>
      </section>

      {/* 3, 4, 5. Example & Usage */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-[2rem] shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
           
           <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white flex items-center"><Database className="w-8 h-8 mr-3 text-cyan-500" /> Employees Database Scenario</h2>
           
           <div className="mb-10">
               <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-cyan-400 pl-3">3. Example Table: Employees</h3>
               <ResultTable headers={['id', 'name', 'department', 'salary']} rows={[[1, 'John', 'IT', 50000], [2, 'Mary', 'HR', 45000], [3, 'David', 'IT', 60000], [4, 'Sarah', 'Finance', 55000]]} />
           </div>

           <div className="grid lg:grid-cols-2 gap-8 mb-10">
               <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                   <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-cyan-400 pl-3">4. Creating a Simple SQL View</h3>
                   <CodeSnippetBlock codeSnippet={`CREATE VIEW IT_Employees AS\nSELECT name, salary\nFROM Employees\nWHERE department = 'IT';`} title="Create View Query" />
                   <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 flex items-center"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> The view shows only IT department employees.</p>
               </div>
               
               <div className="bg-cyan-50 dark:bg-cyan-900/10 p-6 rounded-2xl border border-cyan-100 dark:border-cyan-800/40 flex flex-col justify-center">
                   <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-cyan-400 pl-3">Result (View)</h3>
                   <ResultTable headers={['name', 'salary']} rows={[['John', 50000], ['David', 60000]]} />
               </div>
           </div>

           <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800/50">
               <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 border-l-4 border-blue-400 pl-3">5. Using a View</h3>
               <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Once created, a view works just like a table.</p>
               <div className="grid lg:grid-cols-2 gap-6 items-center">
                   <CodeSnippetBlock codeSnippet={`SELECT *\nFROM IT_Employees;`} title="Querying the View" />
                   <div>
                       <ResultTable headers={['name', 'salary']} rows={[['John', 50000], ['David', 60000]]} />
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* 6. Visualization */}
      <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-slate-900 p-8 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-700">
              <h2 className="text-3xl font-black mb-10 text-center text-white border-b border-slate-700 pb-4">
                  6. SQL View Visualization
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-mono text-center">
                  
                  {/* Table */}
                  <div className="bg-slate-800 p-4 border border-slate-600 rounded-xl shadow w-full md:w-auto">
                      <p className="font-bold text-slate-300 mb-3 border-b border-slate-600 pb-2 uppercase tracking-wide">Employees Table</p>
                      <div className="flex flex-col text-slate-400 gap-1 text-xs">
                          <div className="flex bg-slate-900/50 p-2 font-bold"><span className="w-8">id</span><span className="w-16">name</span><span className="w-24">department</span><span className="w-16">salary</span></div>
                          <div className="flex bg-cyan-900/30 p-2 border border-cyan-700/50 text-cyan-300 rounded"><span className="w-8">1</span><span className="w-16">John</span><span className="w-24">IT</span><span className="w-16">50000</span></div>
                          <div className="flex p-2"><span className="w-8">2</span><span className="w-16">Mary</span><span className="w-24">HR</span><span className="w-16">45000</span></div>
                          <div className="flex bg-cyan-900/30 p-2 border border-cyan-700/50 text-cyan-300 rounded"><span className="w-8">3</span><span className="w-16">David</span><span className="w-24">IT</span><span className="w-16">60000</span></div>
                          <div className="flex p-2"><span className="w-8">4</span><span className="w-16">Sarah</span><span className="w-24">Finance</span><span className="w-16">55000</span></div>
                      </div>
                  </div>

                  {/* Filter / Query */}
                  <div className="flex flex-col items-center gap-2">
                       <ArrowRight className="text-cyan-500 w-8 h-8 rotate-90 md:rotate-0 animate-pulse" />
                       <div className="bg-cyan-950 border border-cyan-500/50 p-4 rounded-xl text-cyan-300 shadow shadow-cyan-900/50 z-10 w-48 text-left">
                           <div className="text-[10px] uppercase font-bold text-cyan-500 tracking-wider mb-2">View Query:</div>
                           <div className="leading-snug">SELECT name, salary<br/>FROM Employees<br/>WHERE department='IT'</div>
                       </div>
                       <ArrowRight className="text-cyan-500 w-8 h-8 rotate-90 md:rotate-0 animate-pulse" />
                  </div>

                  {/* Result View */}
                  <div className="bg-cyan-900/20 p-4 border border-cyan-500/50 rounded-xl shadow shadow-cyan-900/20 w-full md:w-auto relative">
                      <div className="absolute -top-3 -right-3 bg-cyan-500 text-slate-900 font-bold px-3 py-1 text-xs rounded-full shadow-lg">Virtual</div>
                      <p className="font-bold text-cyan-400 mb-3 border-b border-cyan-500/50 pb-2 uppercase tracking-wide">IT_Employees View</p>
                      <div className="flex flex-col text-cyan-100 gap-1 text-xs">
                          <div className="flex bg-cyan-950/80 p-2 font-bold border-b border-cyan-800"><span className="w-16">name</span><span className="w-16 text-right">salary</span></div>
                          <div className="flex p-2 bg-cyan-900/30"><span className="w-16">John</span><span className="w-16 text-right">50000</span></div>
                          <div className="flex p-2 bg-cyan-900/30"><span className="w-16">David</span><span className="w-16 text-right">60000</span></div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* 7, 8, 9. Multiple Tables, Updating, Dropping */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
               <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                  <Layers className="w-6 h-6 mr-3 text-cyan-500" /> 7. Views with Multiple Tables (JOIN)
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mb-6">Views are often used with joins to abstract complex relationships.</p>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                   <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Orders Table</p>
                       <ResultTable headers={['order_id', 'customer_id']} rows={[[1, 101], [2, 102]]} />
                   </div>
                   <div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Customers Table</p>
                       <ResultTable headers={['customer_id', 'name']} rows={[[101, 'John'], [102, 'Mary']]} />
                   </div>
               </div>

               <CodeSnippetBlock codeSnippet={`CREATE VIEW Order_Details AS\nSELECT Orders.order_id, Customers.name\nFROM Orders\nJOIN Customers\nON Orders.customer_id = Customers.customer_id;`} title="Joining in a View" />
               <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Order_Details View Result</p>
                   <ResultTable headers={['order_id', 'name']} rows={[[1, 'John'], [2, 'Mary']]} />
               </div>
          </div>

          <div className="flex flex-col gap-8 h-full">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex-1">
                  <h2 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                      <RefreshCw className="w-5 h-5 mr-3 text-cyan-500" /> 8. Updating a View
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">You can modify a view using <code className="font-bold text-cyan-600 dark:text-cyan-400">CREATE OR REPLACE VIEW</code>. Now the view shows only high-salary IT employees.</p>
                  <CodeSnippetBlock codeSnippet={`CREATE OR REPLACE VIEW IT_Employees AS\nSELECT name, salary\nFROM Employees\nWHERE department = 'IT'\nAND salary > 55000;`} />
              </div>

              <div className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-3xl shadow-sm border border-rose-200 dark:border-rose-900/50 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-4 flex items-center text-rose-800 dark:text-rose-400">
                      <Trash2 className="w-5 h-5 mr-3 text-rose-500" /> 9. Dropping a View
                  </h2>
                  <p className="text-rose-700 dark:text-rose-300/80 text-sm mb-4">To delete a view (this removes the view without affecting the original table):</p>
                  <CodeSnippetBlock codeSnippet={`DROP VIEW IT_Employees;`} title="Drop View Command" />
              </div>
          </div>
      </section>

      {/* 10. Real-World & 11. Advantages */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-8 rounded-3xl shadow-xl border border-gray-800 relative flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Briefcase className="w-32 h-32 text-cyan-400"/></div>
              <h2 className="text-2xl font-black mb-6 text-white flex items-center relative z-10">
                  <Target className="w-6 h-6 mr-3 text-cyan-400" /> 10. Real-World Security
              </h2>
              <div className="relative z-10 flex-1">
                  <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest mb-2 border-b border-gray-700 pb-2 flex items-center"><AlertCircle className="w-4 h-4 mr-1"/> Scenario: E-commerce</p>
                  <p className="text-gray-300 text-sm mb-4">Table: Customers (<code className="text-cyan-300">id, name, email, password</code>)<br/>For security, we don't want users to see passwords.</p>
                  
                  <div className="mb-4">
                      <CodeSnippetBlock codeSnippet={`CREATE VIEW Customer_Public AS\nSELECT id, name, email\nFROM Customers;`} title="Secure View" />
                  </div>
                  
                  <div className="bg-emerald-900/30 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                      <p className="text-emerald-400 text-sm font-bold flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" /> Users can access Customer_Public, but the password column remains safely hidden.
                      </p>
                  </div>
              </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-black mb-6 text-gray-900 dark:text-white flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
                  <Zap className="w-6 h-6 mr-3 text-cyan-500" /> 11. Advantages of SQL Views
              </h2>
              <ResultTable 
                  headers={['Benefit', 'Explanation']}
                  rows={[
                      [<span className="flex items-center font-bold text-gray-900 dark:text-white"><ShieldCheck className="w-4 h-4 mr-2 text-emerald-500"/> Security</span>, 'Hide sensitive columns'],
                      [<span className="flex items-center font-bold text-gray-900 dark:text-white"><Target className="w-4 h-4 mr-2 text-blue-500"/> Simplicity</span>, 'Simplifies complex queries'],
                      [<span className="flex items-center font-bold text-gray-900 dark:text-white"><RefreshCw className="w-4 h-4 mr-2 text-indigo-500"/> Reusability</span>, 'Save frequently used queries'],
                      [<span className="flex items-center font-bold text-gray-900 dark:text-white"><Layers className="w-4 h-4 mr-2 text-purple-500"/> Data abstraction</span>, 'Users see only necessary data']
                  ]}
              />
          </div>
      </section>

    </div>
  );
};

export default SqlViews;