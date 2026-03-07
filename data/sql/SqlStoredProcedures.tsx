import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, AlertTriangle, Code2, Layers,
  ShieldCheck, Activity, LineChart, FileCode2, Play
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

const SqlStoredProcedures: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <FileCode2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Stored Procedures
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Precompiled collections of SQL statements physically stored securely inside the database engine.
        </p>
      </header>

      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-emerald-500" /> What is a Stored Procedure?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
            A Stored Procedure is a <strong className="font-bold text-emerald-600 dark:text-emerald-400">precompiled</strong> collection of SQL statements stored directly inside the database. It can be executed effortlessly whenever logically needed.
          </p>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl mb-6 shadow-inner text-center">
            <span className="font-bold text-emerald-800 dark:text-emerald-400 text-lg">
              Stored Procedure = saved SQL program
            </span>
            <p className="text-xs text-emerald-600 dark:text-emerald-500 font-bold uppercase tracking-widest mt-2">Inside the database</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-bold mb-4 italic text-center">Instead of rewriting complex queries repeatedly, store them once immediately and reuse dynamically.</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden border border-emerald-800/50 line-height-relaxed">
          <div className="absolute top-0 right-0 -m-6 text-emerald-500/20 transform"><Zap className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Target className="w-6 h-6 mr-3 text-teal-400" /> 2️⃣ Why Stored Procedures Are Used
          </h2>

          <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 font-bold text-sm flex items-center gap-2"><Code2 className="w-4 h-4 text-emerald-400" /> Reusable SQL code</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 font-bold text-sm flex items-center gap-2"><Zap className="w-4 h-4 text-amber-400" /> Faster execution</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 font-bold text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-400" /> Better security</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 font-bold text-sm flex items-center gap-2"><Activity className="w-4 h-4 text-fuchsia-400" /> Reduced network traffic</div>
              <div className="bg-white/10 p-3 rounded-lg border border-teal-500/30 font-bold text-sm flex items-center gap-2 col-span-2 justify-center"><Layers className="w-4 h-4 text-emerald-400" /> Easier maintenance</div>
          </div>

          <div className="relative z-10 border-t border-emerald-800/50 pt-4">
              <p className="text-xs text-teal-300 font-black uppercase tracking-widest mb-3">Enterprise Use Cases:</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold font-mono">
                  <span className="px-3 py-1 bg-black/40 border border-emerald-500/30 rounded">Retrieve employee details</span>
                  <span className="px-3 py-1 bg-black/40 border border-emerald-500/30 rounded">Insert customer records</span>
                  <span className="px-3 py-1 bg-black/40 border border-emerald-500/30 rounded">Generate reports</span>
                  <span className="px-3 py-1 bg-black/40 border border-emerald-500/30 rounded">Perform calculations</span>
              </div>
          </div>
        </div>
      </section>

      {/* Basic Syntax & Demo DB Setup Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                    <Terminal className="w-6 h-6 mr-3 text-emerald-500" /> 3️⃣ Basic Syntax
                </h2>
                <CodeSnippetBlock codeSnippet={`CREATE PROCEDURE procedure_name\nAS\nBEGIN\n    -- SQL statements placed here\nEND;`} />
                <div className="mt-4">
                    <ResultTable 
                    headers={['Keyword Syntax', 'Execution Purpose']}
                    rows={[
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono">CREATE PROCEDURE</strong>, 'Initializes creation of stored procedure'],
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono">BEGIN</strong>, 'Declares logical start of the executable body block'],
                        [<strong className="text-emerald-600 dark:text-emerald-400 font-mono">END</strong>, 'Closes the execution block completely']
                    ]}
                    />
                </div>
            </div>

            <div className="lg:col-span-7 bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 h-full relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10"><Database className="w-48 h-48 text-emerald-700" /></div>
                <h2 className="text-2xl font-black mb-6 flex items-center text-emerald-900 dark:text-emerald-300 relative z-10">
                    <Database className="w-6 h-6 mr-3" /> 🧪 Practical Environment Setup
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                    <div>
                        <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Step 1: Create Table</h4>
                        <CodeSnippetBlock codeSnippet={`CREATE TABLE Employees (\n  EmployeeID INT,\n  Name VARCHAR(50),\n  Department VARCHAR(50),\n  Salary INT\n);`} />
                    </div>
                    <div>
                        <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">Step 2: Insert Data</h4>
                        <CodeSnippetBlock codeSnippet={`INSERT INTO Employees VALUES\n(1,'Arun','IT',50000),\n(2,'Divya','HR',45000),\n(3,'Ravi','Finance',60000);`} />
                    </div>
                </div>
            </div>
      </section>

      {/* Execution Flows (Create -> Exec) */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          Core Procedure Operations
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-4 border-t-teal-500 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-black mb-4 flex items-center text-gray-900 dark:text-white">
                  <FileCode2 className="w-5 h-5 mr-3 text-teal-500" /> 4️⃣ Creating a Stored Procedure
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Example logic retrieving absolutely every employee seamlessly natively:</p>
                <CodeSnippetBlock title="Save logic memory to Database" codeSnippet={`CREATE PROCEDURE GetEmployees\nAS\nBEGIN\n    SELECT * FROM Employees;\nEND;`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-t-4 border-t-emerald-500 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-black mb-4 flex items-center text-gray-900 dark:text-white">
                  <Play className="w-5 h-5 mr-3 text-emerald-500" /> 5️⃣ Executing a Stored Procedure
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">You just call the name directly using <code className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/40 px-1 rounded">EXEC</code> syntax.</p>
                <CodeSnippetBlock title="Trigger Execution" codeSnippet={`EXEC GetEmployees;`} />
                <div className="mt-4">
                     <ResultTable 
                    headers={['EmployeeID', 'Name', 'Department', 'Salary']}
                    rows={[
                        [1, 'Arun', 'IT', 50000],
                        [2, 'Divya', 'HR', 45000],
                        [3, 'Ravi', 'Finance', 60000]
                    ]}
                    />
                </div>
            </div>
        </div>

        {/* 6 Parameterized Execution */}
        <div className="bg-gradient-to-br from-slate-900 to-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col lg:flex-row gap-8 items-center text-white w-full overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]"><Table2 className="w-64 h-64 text-white" /></div>
            
            <div className="flex-1 w-full relative z-10">
                <h3 className="text-2xl font-black mb-4 flex items-center text-white border-b border-gray-700 pb-4">
                  <Code2 className="w-6 h-6 mr-3 text-amber-400" /> 6️⃣ Stored Procedure with Parameters
                </h3>
                <p className="text-gray-300 font-medium mb-6">Stored procedures can accept <strong className="text-amber-400">dynamic input parameters</strong> using the `@` variable mapping pattern.</p>
                
                <CodeSnippetBlock language="sql" codeSnippet={`CREATE PROCEDURE GetEmployeeByID\n    @EmpID INT\nAS\nBEGIN\n    SELECT * \n    FROM Employees\n    WHERE EmployeeID = @EmpID;\nEND;`} />
            </div>
            
            <div className="flex-1 w-full bg-black/40 p-6 rounded-2xl border border-gray-700/50 shadow-inner relative z-10">
                <h4 className="font-bold text-amber-400 text-sm uppercase tracking-widest mb-3 flex items-center"><Play className="w-4 h-4 mr-2" /> Executing with Parameter</h4>
                <CodeSnippetBlock language="sql" codeSnippet={`EXEC GetEmployeeByID @EmpID = 1;`} />
                
                <ResultTable 
                    headers={['EmployeeID', 'Name', 'Department', 'Salary']}
                    rows={[
                        [1, 'Arun', 'IT', 50000]
                    ]}
                />
            </div>
        </div>

      </section>

      {/* DML Operations CRUD Using SPs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          CRUD Operations inside Pipelines
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-black text-emerald-600 dark:text-emerald-400 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs">7</span> INSERT DML
                </h4>
                <CodeSnippetBlock codeSnippet={`CREATE PROCEDURE AddEmployee\n  @ID INT,\n  @Name VARCHAR(50),\n  @Dept VARCHAR(50),\n  @Salary INT\nAS\nBEGIN\n  INSERT INTO Employees\n  VALUES(@ID,@Name,@Dept,@Salary);\nEND;`} />
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Execution Trigger</p>
                    <code className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block">EXEC AddEmployee 4,'Meena','Sales',55000;</code>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-black text-amber-500 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs">8</span> UPDATE DML
                </h4>
                <CodeSnippetBlock codeSnippet={`CREATE PROCEDURE UpdateSalary\n  @EmpID INT,\n  @NewSalary INT\nAS\nBEGIN\n  UPDATE Employees\n  SET Salary = @NewSalary\n  WHERE EmployeeID = @EmpID;\nEND;`} />
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800 mt-auto">
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Execution Trigger</p>
                    <code className="text-xs text-amber-600 dark:text-amber-400 font-bold block">EXEC UpdateSalary 1,60000;</code>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
                <h4 className="font-black text-rose-500 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700 flex items-center">
                   <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs">9</span> DELETE DML
                </h4>
                <CodeSnippetBlock codeSnippet={`CREATE PROCEDURE DeleteEmployee\n  @EmpID INT\nAS\nBEGIN\n  DELETE FROM Employees\n  WHERE EmployeeID = @EmpID;\nEND;`} />
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800 mt-auto">
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Execution Trigger</p>
                    <code className="text-xs text-rose-600 dark:text-rose-400 font-bold block">EXEC DeleteEmployee 3;</code>
                </div>
            </div>

        </div>
      </section>

      {/* Comparisons & Real World Segment */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-gray-900 p-8 rounded-3xl shadow-xl border border-gray-700 flex flex-col justify-between text-white">
                <h2 className="text-2xl font-black flex items-center text-white mb-6 pb-4 border-b border-gray-700">
                   <Target className="w-6 h-6 mr-3 text-emerald-400" /> 🔟 Advantages
                </h2>
                <div className="space-y-4 font-mono w-full flex-1 flex flex-col justify-center">
                    <div className="bg-gray-800/80 border border-gray-700 p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                        <Zap className="text-amber-400 w-6 h-6 shrink-0" />
                        <div><strong className="block text-emerald-300 text-sm">Performance</strong><span className="text-xs text-gray-400">Significantly faster caching execution</span></div>
                    </div>
                    <div className="bg-gray-800/80 border border-gray-700 p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                        <Code2 className="text-teal-400 w-6 h-6 shrink-0" />
                        <div><strong className="block text-emerald-300 text-sm">Reusability</strong><span className="text-xs text-gray-400">Write precisely once, use globally many times</span></div>
                    </div>
                    <div className="bg-gray-800/80 border border-gray-700 p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                        <ShieldCheck className="text-sky-400 w-6 h-6 shrink-0" />
                        <div><strong className="block text-emerald-300 text-sm">Security</strong><span className="text-xs text-gray-400">Tightly restrict direct physical table access</span></div>
                    </div>
                    <div className="bg-gray-800/80 border border-gray-700 p-4 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                        <Layers className="text-fuchsia-400 w-6 h-6 shrink-0" />
                        <div><strong className="block text-emerald-300 text-sm">Maintainability</strong><span className="text-xs text-gray-400">Centralized easy to update internal logic</span></div>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-black mb-6 flex items-center text-gray-900 dark:text-white pb-4 border-b border-gray-100 dark:border-gray-700">
                    <Briefcase className="w-6 h-6 mr-3 text-indigo-500" /> 🧩 Real-World Example
                </h2>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-4 bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                    In a strictly secured native banking system architecture, a stored procedure physically ensures absolutely consistent transaction logic transfers reliably.
                </p>
                <div className="mb-4">
                    <CodeSnippetBlock title="Bank Transaction Logic Flow" codeSnippet={`CREATE PROCEDURE TransferMoney\n  @FromAccount INT,\n  @ToAccount INT,\n  @Amount INT\nAS\nBEGIN\n  -- Debit Logic\n  UPDATE Accounts\n  SET Balance = Balance - @Amount\n  WHERE AccountID = @FromAccount;\n\n  -- Credit Logic\n  UPDATE Accounts\n  SET Balance = Balance + @Amount\n  WHERE AccountID = @ToAccount;\nEND;`} />
                </div>
            </div>

      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         {/* Title Card */}
         <div className="bg-gradient-to-br from-indigo-900 to-violet-900 p-8 rounded-3xl shadow-xl border border-indigo-800 relative overflow-hidden text-white flex flex-col justify-center text-center">
          <div className="absolute top-0 left-0 p-8 opacity-[0.05] text-white">
            <Target className="w-64 h-64" />
          </div>

          <h2 className="text-4xl font-black text-white mb-2 relative z-10 flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3 text-indigo-400" /> Developer Tips
          </h2>
          <p className="font-bold text-indigo-200 uppercase tracking-widest text-sm relative z-10 mt-2 bg-black/30 w-max mx-auto px-4 py-1.5 rounded-full border border-indigo-500/30">
            🚀 15+ Years SQL Experience
          </p>
        </div>

        {/* Tips Grids */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative h-full flex flex-col">
          <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            
             <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex-shrink-0 mt-0.5 text-indigo-500"><Terminal className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Use SPs explicitly for heavy backend logic</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Most major strict enterprise web applications physically heavily call exclusively stored procedures instead of raw ad-hoc querying streams.</p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex-shrink-0 mt-0.5 text-emerald-500"><Code2 className="w-5 h-5" /></div>
                <div className="w-full">
                   <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">Use dynamic parameters instead of hardcoding</h4>
                   <div className="flex items-center gap-4 w-full">
                       <pre className="bg-gray-100 dark:bg-black text-[10px] text-gray-900 dark:text-gray-300 font-mono p-2 rounded border border-gray-200 dark:border-gray-700 flex-1 relative">
<span className="absolute top-1 right-1 text-emerald-500 font-black"><Check size={12}/></span>Instead of mapping fixed ids natively use:<br/><span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-1 rounded">@EmpID</span></pre>
                   </div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex-shrink-0 mt-0.5 text-amber-500"><ShieldCheck className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Always thoroughly validate input parameters natively</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">This fundamentally intrinsically helps prevent deep system errors mapping alongside strict SQL Injection parameter security risks issues.</p>
                </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex-shrink-0 mt-0.5 text-rose-500"><Activity className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Combine robustly inherently with database transactions</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Vital entirely for critical data bounds systems physically like: Banking modules, core exact order pipelines, and raw heavy payment gateway systems frameworks.</p>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlStoredProcedures;