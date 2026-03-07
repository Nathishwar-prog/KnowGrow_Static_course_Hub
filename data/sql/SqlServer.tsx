import React, { useState } from 'react';
import { 
  Database, Terminal, Copy, Check, Table2, Zap, Target, 
  Briefcase, HelpCircle, AlertTriangle, GitBranch, 
  Server, HardDrive, ShieldCheck, Activity, LineChart, 
  Search, Stethoscope
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

// Helper for rendering tables
const ResultTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
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

const SqlServer: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-900 dark:to-sky-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Server className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Microsoft SQL Server
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The industry-leading Relational Database Management System (RDBMS) designed for enterprise data processing.
        </p>
      </header>

      {/* Intro Definition Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-sky-500" /> What is SQL Server?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-relaxed">
            SQL Server is a Relational Database Management System (RDBMS) developed by <strong className="font-black text-sky-600 dark:text-sky-400">Microsoft</strong>.
          </p>
          <div className="p-4 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-xl mb-6 shadow-inner">
            <span className="font-bold text-sky-800 dark:text-sky-400 text-lg">
              SQL Server is software used to create and manage databases.
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 font-medium text-gray-700 dark:text-gray-300 text-sm">
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><HardDrive className="w-4 h-4 mr-2 text-indigo-500" /> Store data</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Database className="w-4 h-4 mr-2 text-sky-500" /> Manage databases</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><Search className="w-4 h-4 mr-2 text-fuchsia-500" /> Process queries</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800"><ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" /> Secure information</div>
             <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 col-span-2"><LineChart className="w-4 h-4 mr-2 text-amber-500" /> Perform data analysis</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-sky-800/50">
          <div className="absolute top-0 right-0 -m-6 text-sky-500/20 transform"><Target className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-amber-400" /> 2️⃣ Why SQL Server is Used
          </h2>
          <p className="text-gray-300 font-medium mb-6 relative z-10">Global organizations structurally depend on SQL Server to strictly handle mission-critical tasks.</p>
          
          <ul className="space-y-3 font-bold text-sky-100 relative z-10 mb-8 border-b border-sky-500/30 pb-6">
            <li className="flex items-center">✔ Store massive large amounts of data</li>
            <li className="flex items-center">✔ Retrieve dynamic data blazingly fast</li>
            <li className="flex items-center">✔ Maintain enterprise-level data security</li>
            <li className="flex items-center">✔ Backend support for business applications</li>
            <li className="flex items-center">✔ Perform real-time data analysis</li>
          </ul>

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest font-black text-amber-400 mb-3">Enterprise Examples:</p>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-900">
                <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">Banking systems</span>
                <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">Hospital management</span>
                <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">E-commerce</span>
                <span className="bg-white px-3 py-1.5 rounded-full shadow-sm">Inventory systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Components & Architecture Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          Ecosystem & Architecture
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* 3️⃣ Components */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                  <Server className="w-5 h-5 mr-3 text-indigo-500" /> 3️⃣ Components of SQL Server
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">SQL Server consists of multiple powerful tightly integrated operational components.</p>
                <div className="flex-1">
                    <ResultTable 
                        headers={['Core Component Module', 'Primary Purpose']}
                        rows={[
                            [<strong className="text-indigo-600 dark:text-indigo-400" key="de">Database Engine</strong>, 'Core service for storing and retrieving data'],
                            [<strong className="text-sky-600 dark:text-sky-400" key="ssms">Management Studio (SSMS)</strong>, 'GUI tool to visually manage databases'],
                            [<strong className="text-fuchsia-600 dark:text-fuchsia-400" key="ssa">SQL Server Agent</strong>, 'Job scheduling & automation'],
                            [<strong className="text-emerald-600 dark:text-emerald-400" key="is">Integration Services (SSIS)</strong>, 'Data integration and ETL pipelines'],
                            [<strong className="text-amber-600 dark:text-amber-400" key="rs">Reporting Services (SSRS)</strong>, 'Generate real-time analytics reports']
                        ]}
                    />
                </div>
            </div>

            {/* 4️⃣ Architecture Flow */}
             <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl shadow-xl flex flex-col relative border border-gray-800 h-full">
                <h3 className="text-xl font-bold mb-8 flex items-center text-white">
                  <GitBranch className="w-5 h-5 mr-3 text-sky-400" /> 4️⃣ Internal Flow Architecture
                </h3>
                
                <div className="flex-1 flex flex-col items-center justify-center font-mono space-y-4">
                     <div className="bg-indigo-500/20 border border-indigo-500/50 py-3 px-8 rounded-lg text-indigo-300 font-bold w-64 text-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">Client Application</div>
                     <div className="text-gray-600 dark:text-gray-500 animate-pulse">↓</div>
                     <div className="bg-sky-500/20 border border-sky-500/50 py-3 px-8 rounded-lg text-sky-300 font-bold w-64 text-center shadow-[0_0_15px_rgba(14,165,233,0.2)]">SQL Server</div>
                     <div className="text-gray-600 dark:text-gray-500 animate-pulse">↓</div>
                     <div className="bg-emerald-500/20 border border-emerald-500/50 py-3 px-8 rounded-lg text-emerald-300 font-bold w-64 text-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">Database Engine</div>
                     <div className="text-gray-600 dark:text-gray-500 animate-pulse">↓</div>
                     <div className="bg-fuchsia-500/20 border border-fuchsia-500/50 py-3 px-8 rounded-lg text-fuchsia-300 font-bold w-64 text-center shadow-[0_0_15px_rgba(217,70,239,0.2)]">Databases</div>
                     <div className="text-gray-600 dark:text-gray-500 animate-pulse">↓</div>
                     <div className="bg-amber-500/20 border border-amber-500/50 py-3 px-8 rounded-lg text-amber-300 font-bold w-64 text-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">Tables</div>
                </div>

                <div className="mt-8 bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-xs font-medium text-gray-400 space-y-2">
                    <p><strong className="text-indigo-400">1.</strong> Apps logically send queries over the network.</p>
                    <p><strong className="text-sky-400">2.</strong> SQL Server instance physically receives and processes them.</p>
                    <p><strong className="text-emerald-400">3.</strong> Engine natively extracts target tables resolving data instantly.</p>
                </div>
            </div>

        </div>
      </section>

      {/* Database vs Table Core Concept */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
             <h2 className="text-2xl font-black mb-4 flex items-center text-gray-900 dark:text-white">
                <Database className="w-6 h-6 mr-3 text-sky-500" /> 5️⃣ What are Databases?
             </h2>
             <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">A database acts simply as a master collection of completely related data.</p>
             
             <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 shadow-inner mb-6 text-emerald-400 font-mono text-sm leading-loose">
                 <span className="text-white font-bold block mb-2 cursor-pointer">📂 CompanyDB</span>
                 <span className="text-gray-500">│</span><br/>
                 <span className="text-gray-500">├──</span> 📄 Employees<br/>
                 <span className="text-gray-500">├──</span> 📄 Departments<br/>
                 <span className="text-gray-500">├──</span> 📄 Salaries<br/>
                 <span className="text-gray-500">└──</span> 📄 Projects
             </div>
             
             <div className="flex gap-2 flex-wrap">
                 <span className="px-3 py-1 bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400 rounded-lg text-xs font-bold border border-sky-100 dark:border-sky-800/30">Tables</span>
                 <span className="px-3 py-1 bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400 rounded-lg text-xs font-bold border border-sky-100 dark:border-sky-800/30">Views</span>
                 <span className="px-3 py-1 bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400 rounded-lg text-xs font-bold border border-sky-100 dark:border-sky-800/30">Stored Procedures</span>
                 <span className="px-3 py-1 bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400 rounded-lg text-xs font-bold border border-sky-100 dark:border-sky-800/30">Indexes</span>
             </div>
         </div>

         <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
             <h2 className="text-2xl font-black mb-4 flex items-center text-gray-900 dark:text-white">
                <Table2 className="w-6 h-6 mr-3 text-fuchsia-500" /> 6️⃣ What are Tables?
             </h2>
             <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">Tables literally store the actual physical data structurally.</p>
             
             <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">Example Table Data:</h4>
             <div className="shadow-lg">
                <ResultTable 
                    headers={['EmployeeID', 'Name', 'Department', 'Salary']}
                    rows={[
                        [1, 'Arun', 'IT', 50000],
                        [2, 'Divya', 'HR', 45000],
                        [3, 'Ravi', 'Finance', 55000]
                    ]}
                />
             </div>
             <p className="text-xs text-center font-bold text-gray-500 mt-2 italic">A table is comprised of strict internal specific column structures and row inserts.</p>
         </div>
      </section>

      {/* Syntax Code Crash Course */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-10">
          7️⃣ Basic SQL Server Action Commands
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border-t-4 border-t-sky-500 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Initialization</p>
                <CodeSnippetBlock title="Create DB" codeSnippet={`CREATE DATABASE CompanyDB;`} />
                <CodeSnippetBlock title="Switch Context" codeSnippet={`USE CompanyDB;`} />
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 border-t-4 border-t-emerald-500 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-2">
                <p className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Structure</p>
                <CodeSnippetBlock title="Table DDL" codeSnippet={`CREATE TABLE Employees (\n  EmployeeID INT PRIMARY KEY,\n  Name VARCHAR(50),\n  Department VARCHAR(50),\n  Salary INT\n);`} />
            </div>
            
            <div className="p-4 flex flex-col gap-4 bg-white dark:bg-gray-800 border-t-4 border-t-fuchsia-500 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-black uppercase text-gray-500 mb-[-6px] tracking-widest">Operations</p>
                <CodeSnippetBlock title="Insert" codeSnippet={`INSERT INTO Employees\nVALUES\n(1,'Arun','IT',50000);`} />
                <CodeSnippetBlock title="Select" codeSnippet={`SELECT *\nFROM Employees;`} />
            </div>
        </div>
      </section>

      {/* Grid for Data Types & Features */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                 <Terminal className="w-6 h-6 mr-3 text-sky-500" /> 8️⃣ Data Types
                </h2>
                <ResultTable 
                    headers={['Native Data Type', 'Physical Target Description']}
                    rows={[
                        [<span className="text-sky-600 dark:text-sky-400 font-bold font-mono">INT</span>, 'Strict absolute integer numbers'],
                        [<span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold font-mono">VARCHAR</span>, 'Variable fluid dynamic length text bounds'],
                        [<span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold font-mono">CHAR</span>, 'Rigid absolutely fixed length string text block'],
                        [<span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">DATE</span>, 'Specific precise day date values'],
                        [<span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">DATETIME</span>, 'Timestamp explicitly including time metrics'],
                        [<span className="text-amber-600 dark:text-amber-400 font-bold font-mono">FLOAT</span>, 'Floating decimal fractional point numbers']
                    ]}
                />
                <CodeSnippetBlock title="Type implementation Sample" codeSnippet={`CREATE TABLE Students (\n  StudentID INT,\n  Name VARCHAR(50),\n  BirthDate DATE\n);`} />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-violet-950 p-8 rounded-3xl shadow-xl border border-indigo-800 text-white flex-1">
                    <h2 className="text-2xl font-black flex items-center text-white mb-6 border-b border-indigo-500/30 pb-4">
                        <Zap className="w-6 h-6 mr-3 text-amber-400" /> 9️⃣ Advanced Features
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start"><ShieldCheck className="w-5 h-5 mr-3 text-emerald-400 shrink-0" /><div><strong className="block text-indigo-200">Security</strong> <span className="text-sm font-medium">Data encryption and access control.</span></div></li>
                        <li className="flex items-start"><HardDrive className="w-5 h-5 mr-3 text-sky-400 shrink-0" /><div><strong className="block text-indigo-200">Backup & Recovery</strong> <span className="text-sm font-medium">Native restore to protect from loss.</span></div></li>
                        <li className="flex items-start"><Search className="w-5 h-5 mr-3 text-amber-400 shrink-0" /><div><strong className="block text-indigo-200">Indexing</strong> <span className="text-sm font-medium">Architecture for hyper-fast querying.</span></div></li>
                        <li className="flex items-start"><Terminal className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0" /><div><strong className="block text-indigo-200">Stored Procedures</strong> <span className="text-sm font-medium">Cached, fully reusable SQL binary code.</span></div></li>
                        <li className="flex items-start"><Activity className="w-5 h-5 mr-3 text-rose-400 shrink-0" /><div><strong className="block text-indigo-200">Triggers</strong> <span className="text-sm font-medium">Automatic event-driven logic execution.</span></div></li>
                    </ul>
                </div>
            </div>
      </section>

      {/* Editions & Tools */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-black flex items-center text-gray-900 dark:text-white mb-6">
                 <Server className="w-5 h-5 mr-3 text-gray-500" /> 🔟 Deployment Editions
                </h2>
                <div className="space-y-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <span className="font-black text-sky-600 dark:text-sky-400">Express</span>
                        <span className="text-sm font-bold text-gray-500">Free, small applications</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <span className="font-black text-emerald-600 dark:text-emerald-400">Standard</span>
                        <span className="text-sm font-bold text-gray-500">Small to medium DBs</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between shadow-xl ring-2 ring-indigo-500/20">
                        <span className="font-black text-indigo-600 dark:text-indigo-400">Enterprise</span>
                        <span className="text-sm font-bold text-gray-500">Massive scalability limits</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                        <span className="font-black text-fuchsia-600 dark:text-fuchsia-400">Developer</span>
                        <span className="text-sm font-bold text-gray-500">Testing environments</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-black flex items-center text-gray-900 dark:text-white mb-6">
                 <Briefcase className="w-5 h-5 mr-3 text-gray-500" /> 1️⃣1️⃣ Essential Native Tools
                </h2>
                 <ResultTable 
                    headers={['Software Application Tools', 'Platform Setup Purpose']}
                    rows={[
                        [<span className="font-bold text-gray-900 dark:text-gray-100" key="ssms2">SSMS</span>, 'Ultimate visual complete Database management'],
                        [<span className="font-bold text-gray-900 dark:text-gray-100" key="ads">Azure Data Studio</span>, 'Cross-platform native code Query editing'],
                        [<span className="font-bold text-gray-900 dark:text-gray-100" key="sp">SQL Profiler</span>, 'Deep active active Performance monitoring trace'],
                        [<span className="font-bold text-gray-900 dark:text-gray-100" key="sa">SQL Server Agent</span>, 'Heavy recursive background Job scheduling processing']
                    ]}
                />
            </div>
      </section>

      {/* Real-World Use Case */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-900 to-emerald-900 p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 border border-emerald-800 overflow-hidden relative">
            <div className="absolute opacity-10 -left-10 -bottom-10"><Stethoscope className="w-64 h-64 text-white" /></div>
            <div className="relative z-10 flex-1 w-full">
                <h2 className="text-2xl font-black text-white flex items-center mb-6 border-b border-emerald-500/30 pb-4">
                  <Stethoscope className="w-6 h-6 mr-3 text-emerald-400" /> 1️⃣2️⃣ Real-World Example
                </h2>
                <p className="text-emerald-100 font-medium mb-4">Imagine an instantly responsive enterprise scalable <strong className="text-white bg-black/30 px-2 py-1 rounded">hospital architecture database</strong>.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-white rounded-lg border border-white/20 text-xs font-bold font-mono">Patients</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-lg border border-white/20 text-xs font-bold font-mono">Doctors</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-lg border border-white/20 text-xs font-bold font-mono">Appointments</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-lg border border-white/20 text-xs font-bold font-mono">MedicalRecords</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-lg border border-white/20 text-xs font-bold font-mono">Billing</span>
                </div>
            </div>
            <div className="relative z-10 shadow-2xl w-full max-w-lg shrink-0">
               <CodeSnippetBlock codeSnippet={`SELECT PatientName, AppointmentDate\nFROM Appointments\nWHERE DoctorID = 5;`} />
               <p className="text-xs text-center font-bold text-emerald-300 mt-[-10px]">SQL Server directly specifically isolates tables inside memory blocks handling processing completely locally returning results blazingly rapidly fast.</p>
            </div>
        </div>
      </section>

      {/* Developer Tips Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-sky-500">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-sky-400" /> Professional Developer Tips
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">🚀 15+ Years SQL Experience</p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10 border-gray-700/50">
            
             <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm hover:border-sky-500/50 transition-colors group">
                <div className="flex-shrink-0 mt-1 text-sky-400 font-bold group-hover:scale-110 transition-transform"><Search className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Always create indexes for large tables</h4>
                   <p className="text-gray-400 text-xs font-medium leading-relaxed">Indexes natively radically explicitly optimize architecture dramatically improving large raw query performance throughput execution.</p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm hover:border-emerald-500/50 transition-colors group">
                <div className="flex-shrink-0 mt-1 text-emerald-400 font-bold group-hover:scale-110 transition-transform"><Terminal className="w-5 h-5" /></div>
                <div className="w-full relative">
                   <h4 className="font-bold text-gray-100 mb-2">Use stored procedures for complex queries</h4>
                   <div className="mt-3 relative">
                       <pre className="bg-black text-[10px] text-emerald-300 font-mono p-3 rounded-lg border border-gray-700 overflow-x-auto w-full">
                           <code className="block w-full min-w-max">CREATE PROCEDURE GetEmployees{'\n'}AS{'\n'}SELECT * FROM Employees;</code>
                       </pre>
                   </div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm hover:border-amber-500/50 transition-colors group">
                <div className="flex-shrink-0 mt-1 text-amber-500 font-bold group-hover:scale-110 transition-transform"><HardDrive className="w-5 h-5" /></div>
                <div className="w-full relative">
                   <h4 className="font-bold text-gray-100 mb-2">Regularly backup databases manually</h4>
                   <div className="mt-3 relative">
                       <pre className="bg-black text-[10px] text-amber-300 font-mono p-3 rounded-lg border border-gray-700 overflow-x-auto w-full">
                           <code className="block w-full min-w-max">BACKUP DATABASE CompanyDB{'\n'}TO DISK = 'C:\backup\company.bak';</code>
                       </pre>
                   </div>
                </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50 shadow-sm backdrop-blur-sm hover:border-rose-500/50 transition-colors group">
                <div className="flex-shrink-0 mt-1 text-rose-500 font-bold group-hover:scale-110 transition-transform"><AlertTriangle className="w-5 h-5" /></div>
                <div>
                   <h4 className="font-bold text-gray-100 mb-2">Avoid SELECT * in production scopes</h4>
                   <div className="flex items-center gap-4 mt-3">
                       <div className="flex-1 opacity-50 relative pointer-events-none line-through text-rose-400 decoration-rose-500">
                           <pre className="bg-black text-[10px] font-mono p-2 rounded-lg border border-gray-700 text-center">SELECT * FROM Emp..</pre>
                       </div>
                       <Target className="w-4 h-4 text-emerald-400 shrink-0" />
                       <div className="flex-1">
                           <pre className="bg-black text-[10px] text-emerald-300 font-mono p-2 rounded border border-emerald-900/50 uppercase">SELECT Name, Salary{'\n'}FROM Employees;</pre>
                       </div>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlServer;