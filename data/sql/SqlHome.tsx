import React, { useState } from 'react';
import {
  Database, Server, Globe, Building2, User, Users,
  CheckCircle2, AlertTriangle, Lightbulb, Hexagon, Layers,
  Terminal, Code2, Map, BookOpen, Key, Link as LinkIcon,
  Target, GraduationCap, Zap, Activity, ShieldCheck, Copy, Check,
  Brain, Table2
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
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm w-full">
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
      <div className="relative group bg-gray-900 flex-grow h-full">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed min-h-full">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlHome: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* 1️⃣ What is SQL? */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-indigo-200 dark:bg-indigo-900/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-600 dark:bg-indigo-500 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Database className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6 tracking-tight">
            What is SQL?
          </h1>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
              <Server className="w-48 h-48 text-indigo-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mr-3">
                <CheckCircle2 className="w-6 h-6" />
              </span>
              Definition
            </h2>

            <p className="text-lg font-medium mb-6 leading-relaxed">
              <strong className="text-indigo-600 dark:text-indigo-400 text-xl font-black tracking-wide">SQL</strong> (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.
            </p>

            <div className="mb-8">
              <p className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs mb-4">It allows you to:</p>
              <div className="flex flex-wrap gap-3">
                {["Store data", "Retrieve data", "Update data", "Delete data", "Control access"].map((action, idx) => (
                  <span key={idx} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full font-bold text-sm border border-indigo-100 dark:border-indigo-800/50 flex items-center shadow-sm">
                    <Zap className="w-3.5 h-3.5 mr-2" /> {action}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-2xl border border-amber-200 dark:border-amber-800/50 flex items-start sm:items-center">
              <span className="text-3xl mr-4 drop-shadow-sm hidden sm:block">👉</span>
              <div>
                <p className="font-bold text-amber-900 dark:text-amber-200 text-sm uppercase tracking-widest mb-1">In simple words:</p>
                <p className="text-lg font-black text-amber-800 dark:text-amber-300">SQL is the language used to <u className="decoration-amber-400 decoration-4 underline-offset-4">talk</u> to databases.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 🌍 2️⃣ Why SQL is Important? */}
      <section className="max-w-4xl mx-auto mb-20 relative">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-blue-200 dark:border-blue-800/50">
            <Globe className="w-6 h-6" />
          </span>
          2️⃣ Why SQL is Important?
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden">
          {/* Abstract visual background element representing "App connections" */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}>
          </div>

          <p className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">SQL is used in:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mb-8">
            {[
              { text: "Banking systems", icon: () => "🏦" },
              { text: "E-commerce platforms", icon: () => "🛒" },
              { text: "Hospital systems", icon: () => "🏥" },
              { text: "Social media", icon: () => "📱" },
              { text: "Govt databases", icon: () => "🏛️" },
              { text: "Analytics dashboards", icon: () => "📊" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform cursor-default group">
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon()}</span>
                <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-2xl text-center border border-emerald-200 dark:border-emerald-800/50 relative z-10">
            <p className="font-bold text-emerald-800 dark:text-emerald-300 text-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 mr-2 text-emerald-500 shrink-0" />
              Every app that stores data uses SQL or a database system.
            </p>
          </div>
        </div>
      </section>

      {/* 🏗 3️⃣ What is a Database? */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-amber-200 dark:border-amber-800/50">
            <Building2 className="w-6 h-6" />
          </span>
          3️⃣ What is a Database?
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8">
          <div className="flex items-start mb-8">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg mr-4 border border-emerald-200 dark:border-emerald-800/50">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Definition</h3>
              <p className="text-xl font-bold text-gray-900 dark:text-white">A database is an <span className="text-indigo-600 dark:text-indigo-400">organized collection</span> of data.</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h4 className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs mb-4 flex items-center">
              <Table2 className="w-4 h-4 mr-2" /> Example Table Structure
            </h4>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6 bg-white dark:bg-gray-800 shadow-sm">
              <table className="w-full text-left font-sans text-sm">
                <thead className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200 font-bold">
                  <tr>
                    <th className="px-6 py-3 border-b border-indigo-100 dark:border-indigo-800">StudentID</th>
                    <th className="px-6 py-3 border-b border-indigo-100 dark:border-indigo-800">Name</th>
                    <th className="px-6 py-3 border-b border-indigo-100 dark:border-indigo-800">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-6 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">1</td>
                    <td className="px-6 py-3 font-medium">Karthick</td>
                    <td className="px-6 py-3"><span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded text-xs font-bold">IT</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-6 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">2</td>
                    <td className="px-6 py-3 font-medium">Anjali</td>
                    <td className="px-6 py-3"><span className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 px-2 py-1 rounded text-xs font-bold">HR</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 text-center">
              <ShieldCheck className="w-5 h-5 mr-2 shrink-0 text-indigo-500" />
              A database stores this data permanently and safely.
            </p>
          </div>
        </div>
      </section>

      {/* 🧠 4️⃣ Types of SQL Commands */}
      <section className="max-w-4xl mx-auto mb-20 relative">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Brain className="w-6 h-6" />
          </span>
          4️⃣ Types of SQL Commands
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans min-w-[600px]">
              <thead className="bg-gray-900 text-gray-300 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Commands</th>
                  <th className="px-6 py-4">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                {[
                  { cat: "DDL", full: "Data Definition Language", cmds: "CREATE, ALTER, DROP", purpose: "Define structure", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/10" },
                  { cat: "DML", full: "Data Manipulation Language", cmds: "INSERT, UPDATE, DELETE", purpose: "Modify data", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/10" },
                  { cat: "DQL", full: "Data Query Language", cmds: "SELECT", purpose: "Retrieve data", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/10" },
                  { cat: "DCL", full: "Data Control Language", cmds: "GRANT, REVOKE", purpose: "Control permissions", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/10" },
                  { cat: "TCL", full: "Transaction Control Language", cmds: "COMMIT, ROLLBACK", purpose: "Manage transactions", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/10" },
                ].map((row, idx) => (
                  <tr key={idx} className={`hover:${row.bg} transition-colors group cursor-default`}>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                      <div className="font-black text-lg">{row.cat}</div>
                      <div className="text-xs text-gray-400">{row.full}</div>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-[13px] text-gray-600 dark:text-gray-300">
                      <div className={`${row.bg} ${row.color} px-3 py-1.5 rounded-lg inline-block border border-gray-100 dark:border-gray-700 shadow-sm transition-transform group-hover:scale-105`}>
                        {row.cmds}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🚀 5️⃣ Your First SQL Example */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">🚀</span>
          5️⃣ Your First SQL Example
        </h2>

        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-8 px-4 border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/20 py-2">
          Let’s write your first SQL query.
        </p>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-blue-400 dark:hover:border-blue-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center border-2 border-blue-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🧱</div>
            <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Create Table</h3>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-emerald-400 dark:hover:border-emerald-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center border-2 border-emerald-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">📝</div>
            <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Insert Data</h3>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Students VALUES (1, 'Karthick', 21);
INSERT INTO Students VALUES (2, 'Anjali', 20);`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 relative pl-12 transition-all hover:border-indigo-400 dark:hover:border-indigo-500 group">
            <div className="absolute left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500 z-10 text-xl shadow-md group-hover:scale-110 transition-transform">🔍</div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Select Data</h3>
            <CodeSnippetBlock codeSnippet={`SELECT * FROM Students;`} />

            <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-inner">
              <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest"><Table2 className="w-3.5 h-3.5 mr-2" /> Output</div>
              <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800/80 p-4">
                <table className="w-full text-left font-sans text-sm rounded bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700">
                  <thead className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <tr><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">StudentID</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Name</th><th className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300">Age</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">1</td><td className="px-4 py-2 font-medium">Karthick</td><td className="px-4 py-2 font-mono">21</td></tr>
                    <tr><td className="px-4 py-2 font-mono text-indigo-600 dark:text-indigo-400 font-bold">2</td><td className="px-4 py-2 font-medium">Anjali</td><td className="px-4 py-2 font-mono">20</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg shadow-emerald-500/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-xl sm:text-2xl font-black flex items-center justify-center tracking-wide">
            <span className="text-3xl mr-3 drop-shadow-md">🎉</span> Congratulations! You just interacted with a database.
          </p>
        </div>
      </section>

      {/* 🎯 6️⃣ Who Should Learn SQL? */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-rose-200 dark:border-rose-800/50">
            <Target className="w-6 h-6" />
          </span>
          6️⃣ Who Should Learn SQL?
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="font-bold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest text-sm">SQL is for:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { role: "Backend Developers", icon: () => "👨‍💻" },
              { role: "Data Analysts", icon: () => "📊" },
              { role: "Data Scientists", icon: () => "📈" },
              { role: "BI Developers", icon: () => "🏢" },
              { role: "AI/ML Engineers", icon: () => "🧠" },
              { role: "Banking Pro's", icon: () => "🏦" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl flex items-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mr-3 bg-white dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">{item.icon()}</span>
                <span className="font-bold text-gray-800 dark:text-gray-200">{item.role}</span>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/40 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800/50 flex items-start">
            <AlertTriangle className="w-6 h-6 text-indigo-500 mr-3 shrink-0" />
            <p className="text-indigo-900 dark:text-indigo-200 font-medium">Since you're building projects (like your previous system designs), <strong className="font-black text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-400">SQL is mandatory knowledge.</strong></p>
          </div>
        </div>
      </section>

      {/* 🗺 7️⃣ SQL Learning Roadmap */}
      <section className="max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-blue-300/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center relative z-10">
          <span className="text-4xl mr-4 drop-shadow-md">🗺️</span> 7️⃣ SQL Learning Roadmap <span className="text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full uppercase tracking-widest ml-4 hidden sm:inline-block border border-indigo-200 dark:border-indigo-800/50">For Your Course Page</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">

          {/* Beginner */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border-t-8 border-t-emerald-400 dark:border-t-emerald-500 shadow-xl flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="text-2xl mr-2">🔰</span> Beginner
              </h3>
            </div>
            <ul className="space-y-3 font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400 flex-grow">
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> What is Database</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> CREATE TABLE</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> INSERT</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> SELECT</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> WHERE</li>
              <li className="flex items-center"><Check className="w-4 h-4 mr-2" /> ORDER BY</li>
            </ul>
          </div>

          {/* Intermediate */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border-t-8 border-t-amber-400 dark:border-t-amber-500 shadow-xl flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="text-2xl mr-2">🟡</span> Intermediate
              </h3>
            </div>
            <ul className="space-y-3 font-mono text-sm font-bold text-amber-700 dark:text-amber-400 flex-grow">
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> GROUP BY</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> HAVING</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> JOINS</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> SUBQUERIES</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" /> CONSTRAINTS</li>
            </ul>
          </div>

          {/* Advanced */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border-t-8 border-t-rose-500 dark:border-t-rose-500 shadow-xl flex flex-col h-full transform transition-transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="text-2xl mr-2">🔴</span> Advanced
              </h3>
            </div>
            <ul className="space-y-3 font-mono text-sm font-bold text-rose-700 dark:text-rose-400 flex-grow">
              <li className="flex items-center"><Activity className="w-4 h-4 mr-2" /> INDEXES</li>
              <li className="flex items-center"><Activity className="w-4 h-4 mr-2" /> STORED PROCEDURES</li>
              <li className="flex items-center"><Activity className="w-4 h-4 mr-2" /> TRIGGERS</li>
              <li className="flex items-center"><Activity className="w-4 h-4 mr-2" /> WINDOW FUNCTIONS</li>
              <li className="flex items-center"><Activity className="w-4 h-4 mr-2" /> PERFORMANCE TUNING</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 🧩 8️⃣ Real-World Database Relationship */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">🧩</span> 8️⃣ Real-World Database Relationship
        </h2>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-6 border-b border-gray-800 pb-2">SQL works using:</p>
              <ul className="space-y-4">
                {[
                  { text: "Tables", icon: Table2, color: "text-blue-400" },
                  { text: "Rows", icon: Layers, color: "text-emerald-400" },
                  { text: "Columns", icon: Code2, color: "text-amber-400" },
                  { text: "Relationships", icon: LinkIcon, color: "text-rose-400" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg font-bold text-white bg-gray-800/80 p-3 rounded-xl border border-gray-700 shadow-sm">
                    <item.icon className={`w-5 h-5 mr-3 ${item.color}`} /> {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-[60%] bg-black/40 p-6 rounded-2xl border border-gray-800 flex items-center justify-center min-h-[250px] relative">
              {/* Visual placeholder for the "4" graphic from the user prompt */}
              <div className="text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-20 h-24 border-2 border-blue-500/50 bg-blue-500/10 rounded-lg flex flex-col">
                    <div className="h-6 border-b-2 border-blue-500/50 bg-blue-500/20"></div>
                    <div className="flex-1 flex flex-col justify-evenly px-2">
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                      <div className="h-2 bg-emerald-500/70 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center px-2">
                    <LinkIcon className="w-8 h-8 text-rose-500/80" />
                  </div>
                  <div className="w-20 h-24 border-2 border-amber-500/50 bg-amber-500/10 rounded-lg flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-amber-500/30"></div>
                    <div className="h-6 border-b-2 border-amber-500/50 bg-amber-500/20"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <p className="font-bold text-indigo-300 mt-6 bg-indigo-900/30 py-2 px-4 rounded-full border border-indigo-500/30 inline-flex items-center">
                  <Hexagon className="w-4 h-4 mr-2" /> Everything connects logically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 9️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 flex flex-col sm:flex-row sm:items-center">
          <span className="flex items-center"><span className="text-4xl mr-4 drop-shadow-md">💡</span> 9️⃣ My 15+ Years Professional Advice</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* 1 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 sm:p-8 rounded-3xl border border-indigo-100 dark:border-indigo-800/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center relative z-10 border-b border-indigo-200 dark:border-indigo-800/50 pb-3">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shadow-md shadow-indigo-500/30">1</span>
              Don’t Memorize Queries
            </h3>
            <div className="relative z-10">
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-3 bg-white/50 dark:bg-black/20 p-2 rounded inline-block">Understand logic:</p>
              <ul className="space-y-2 mt-2 font-mono text-sm text-indigo-800 dark:text-indigo-200 font-bold ml-2 border-l-2 border-indigo-300/50 dark:border-indigo-700/50 pl-4">
                <li><span className="text-rose-500">•</span> What data?</li>
                <li><span className="text-emerald-500">•</span> From which table?</li>
                <li><span className="text-amber-500">•</span> What condition?</li>
                <li><span className="text-blue-500">•</span> Any grouping?</li>
                <li><span className="text-purple-500">•</span> Any sorting?</li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4 flex items-center relative z-10 border-b border-emerald-200 dark:border-emerald-800/50 pb-3">
              <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shadow-md shadow-emerald-500/30">2</span>
              Practice with Real Scenarios
            </h3>
            <div className="relative z-10">
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-4 bg-white/50 dark:bg-black/20 p-2 rounded inline-block">Build:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { t: "Student management", icon: GraduationCap },
                  { t: "E-commerce system", icon: Globe },
                  { t: "Hospital database", icon: Activity },
                  { t: "Banking transaction", icon: Database }
                ].map((item, i) => (
                  <div key={i} className="bg-white/60 dark:bg-gray-800/50 p-3 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 flex items-center shadow-sm">
                    <item.icon className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 sm:p-8 rounded-3xl border border-rose-100 dark:border-rose-800/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 mb-4 flex items-center relative z-10 border-b border-rose-200 dark:border-rose-800/50 pb-3">
              <span className="bg-rose-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shadow-md shadow-rose-500/30">3</span>
              Learn SELECT Deeply
            </h3>
            <div className="flex h-full items-center justify-center relative z-10 pb-8">
              <div className="text-center">
                <div className="text-5xl font-black text-rose-500 drop-shadow-sm mb-2">90%</div>
                <p className="font-bold text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-gray-900/50 px-4 py-2 rounded-xl shadow-sm border border-rose-200 dark:border-rose-800/30 inline-block">of real-world SQL work is <code className="text-rose-600 dark:text-rose-400 font-black">SELECT</code> queries.</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 sm:p-8 rounded-3xl border border-amber-100 dark:border-amber-800/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full transition-transform group-hover:scale-125"></div>
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4 flex items-center relative z-10 border-b border-amber-200 dark:border-amber-800/50 pb-3">
              <span className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shadow-md shadow-amber-500/30">4</span>
              Think Like a Database Designer
            </h3>
            <div className="relative z-10 mt-2">
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-4 bg-white/50 dark:bg-black/20 p-2 rounded inline-block text-sm">Before writing queries, think:</p>
              <div className="space-y-3">
                <div className="flex items-center bg-white/60 dark:bg-gray-800/50 p-3 rounded-lg border border-amber-200/50 dark:border-amber-800/30 shadow-sm">
                  <LinkIcon className="w-5 h-5 mr-3 text-amber-600" />
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">What is the relationship?</span>
                </div>
                <div className="flex items-center bg-white/60 dark:bg-gray-800/50 p-3 rounded-lg border border-amber-200/50 dark:border-amber-800/30 shadow-sm">
                  <Key className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">What is primary key?</span>
                </div>
                <div className="flex items-center bg-white/60 dark:bg-gray-800/50 p-3 rounded-lg border border-amber-200/50 dark:border-amber-800/30 shadow-sm">
                  <Key className="w-5 h-5 mr-3 text-indigo-600" />
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">What is foreign key?</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 📌 10️⃣ Final Summary */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 border border-blue-500/30 shadow-2xl relative overflow-hidden text-center sm:text-left">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
            <Database className="w-48 h-48 text-blue-500" />
          </div>
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500"></div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 flex items-center justify-center sm:justify-start">
            <span className="text-4xl mr-3 drop-shadow-md">📌</span> Final Summary
          </h2>

          <div className="bg-gray-800/80 p-6 sm:p-8 rounded-2xl border border-gray-700 backdrop-blur-md relative z-10">
            <p className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 font-mono tracking-tight">SQL is:</p>

            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-lg font-bold text-gray-200 w-fit mx-auto sm:mx-0">
              <li className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-emerald-500 shrink-0" /> Powerful</li>
              <li className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-blue-400 shrink-0" /> Industry standard</li>
              <li className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-amber-400 shrink-0" /> Beginner-friendly</li>
              <li className="flex items-center"><CheckCircle2 className="w-6 h-6 mr-3 text-pink-400 shrink-0" /> Used everywhere</li>
              <li className="flex items-center sm:col-span-2 mt-2 bg-indigo-500/20 p-3 rounded-xl border border-indigo-500/30 text-indigo-200"><Star className="w-6 h-6 mr-3 text-yellow-400 shrink-0" /> Essential for developers & analysts</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

// Simple Star icon since it wasn't imported from lucide-react initially, 
// using a custom SVG path simply to avoid any import errors. 
// Adding it directly instead of changing imports.
const Star = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default SqlHome;