import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, PlusCircle, Rows, Key, Shield, UserPlus, Layers, Settings, Type, ArrowDownToLine, RefreshCw, FileSymlink, Network, Laptop, LineChart, Cpu as BrainCircuit, Building, Building2, Map, MapPin, DatabaseBackup, List, GitBranch, ArrowUpRight } from 'lucide-react';

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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlIntro: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          INTRODUCTION TO SQL
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Structured Query Language. The global standard programming language used to communicate directly with relational databases.
        </p>
      </header>

      {/* Core Concept Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 text-sky-100 dark:text-gray-700/50"><DatabaseZap className="w-32 h-32" /></div>
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6 relative z-10">
            <Server className="w-6 h-6 mr-3 text-sky-500" /> What is SQL?
          </h2>
          <div className="relative z-10 space-y-4 font-medium text-gray-600 dark:text-gray-400">
            <div className="flex items-center"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />Store data permanently</div>
            <div className="flex items-center"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />Retrieve data instantly</div>
            <div className="flex items-center"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />Update data automatically</div>
            <div className="flex items-center"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />Delete data securely</div>
            <div className="flex items-center"><Target className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />Manage database structural architecture</div>
            <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-xl relative overflow-hidden">
              <span className="font-bold text-sky-700 dark:text-sky-400 text-lg relative z-10">SQL is literally the native language used to talk to databases.</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <HelpCircle className="w-6 h-6 mr-3 text-purple-500" /> Why Do We Need SQL?
          </h2>
          <p className="text-gray-900 dark:text-gray-100 font-bold mb-4">Every application stores data. SQL powers it all.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex flex-col">
              <span className="font-bold text-pink-500 flex items-center mb-1"><Smartphone className="w-4 h-4 mr-2" /> Instagram</span>
              <span className="text-gray-500 dark:text-gray-400">User profiles & photo posts</span>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex flex-col">
              <span className="font-bold text-emerald-500 flex items-center mb-1"><Banknote className="w-4 h-4 mr-2" /> Banking Apps</span>
              <span className="text-gray-500 dark:text-gray-400">Monetary transactions</span>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex flex-col">
              <span className="font-bold text-orange-500 flex items-center mb-1"><Building2 className="w-4 h-4 mr-2" /> E-commerce</span>
              <span className="text-gray-500 dark:text-gray-400">Orders, carts, & payments</span>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 flex flex-col">
              <span className="font-bold text-blue-500 flex items-center mb-1"><Shield className="w-4 h-4 mr-2" /> Hospitals</span>
              <span className="text-gray-500 dark:text-gray-400">Patient medical records</span>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-500 font-bold uppercase tracking-wider mt-6">All this data is stored in DBs — SQL is used to manage it.</p>
        </div>
      </section>

      {/* Relational Database Overview */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-32 opacity-10"><Database className="w-96 h-96 text-sky-300" /></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black flex items-center mb-6">What is a Relational Database?</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                A database is an organized collection of data safely stored electronically.<br /><br />
                <span className="font-bold text-sky-400">Relational databases</span> logically store data in rigid <strong className="text-white">Tables</strong> spanning strict <strong className="text-white">Rows</strong> and <strong className="text-white">Columns</strong>. These tables can then be mathematically connected dynamically using defined <strong className="text-white">Relationships</strong>.
              </p>

              <h3 className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-4 border-b border-gray-800 pb-2">Industry Giants Using SQL Under The Hood</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-sky-200">MySQL</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-emerald-200">PostgreSQL</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-rose-200">Oracle</span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-indigo-200">SQL Server</span>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-gray-700 shadow-lg">
              <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">Example: Electronic Students Table Structure</p>
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-sky-300 uppercase bg-sky-900/30">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">StudentID</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3 rounded-tr-lg">Department</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-mono">1</td>
                    <td className="px-4 py-3 font-medium text-white">Karthick</td>
                    <td className="px-4 py-3 font-bold text-emerald-400">IT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">2</td>
                    <td className="px-4 py-3 font-medium text-white">Anjali</td>
                    <td className="px-4 py-3 font-bold text-purple-400">HR</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-xs text-gray-500 mt-4 italic">A DB stores this information securely and allows lightning fast structural access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SQL Categories */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Layers className="w-8 h-8 mr-3 text-fuchsia-500" /> 5 Master Categories of SQL Commands
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-blue-500 shadow-sm hover:-translate-y-1 transition-transform">
            <h3 className="font-black text-xl text-blue-600 dark:text-blue-400 mb-1">DDL</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 h-8">Data Definition Language</p>
            <div className="space-y-2 font-mono text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
              <div className="text-blue-500">CREATE</div>
              <div className="text-blue-500">ALTER</div>
              <div className="text-blue-500">DROP</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-emerald-500 shadow-sm hover:-translate-y-1 transition-transform relative">
            <div className="absolute top-0 right-0 p-2"><StarBadge /></div>
            <h3 className="font-black text-xl text-emerald-600 dark:text-emerald-400 mb-1">DML</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 h-8">Data Manipulation Language</p>
            <div className="space-y-2 font-mono text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
              <div className="text-emerald-500">INSERT</div>
              <div className="text-emerald-500">UPDATE</div>
              <div className="text-emerald-500">DELETE</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-purple-500 shadow-sm hover:-translate-y-1 transition-transform relative bg-purple-50 dark:bg-purple-900/10">
            <div className="absolute top-0 right-0 p-2"><StarBadge /></div>
            <h3 className="font-black text-xl text-purple-600 dark:text-purple-400 mb-1">DQL</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 h-8">Data Query Language</p>
            <div className="space-y-2 font-mono text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
              <div className="text-purple-500 text-lg">SELECT</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-amber-500 shadow-sm hover:-translate-y-1 transition-transform">
            <h3 className="font-black text-xl text-amber-600 dark:text-amber-400 mb-1">DCL</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 h-8">Data Control Language</p>
            <div className="space-y-2 font-mono text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
              <div className="text-amber-500">GRANT</div>
              <div className="text-amber-500">REVOKE</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-rose-500 shadow-sm hover:-translate-y-1 transition-transform">
            <h3 className="font-black text-xl text-rose-600 dark:text-rose-400 mb-1">TCL</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4 h-8">Transaction Control Language</p>
            <div className="space-y-2 font-mono text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
              <div className="text-rose-500">COMMIT</div>
              <div className="text-rose-500">ROLLBACK</div>
            </div>
          </div>

        </div>
      </section>

      {/* Write First Code Container */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center border border-sky-200 dark:border-sky-900/50 rounded-3xl p-2 bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-black flex items-center mb-6 text-gray-900 dark:text-white"><Zap className="w-8 h-8 mr-3 text-amber-400" /> Your First SQL Execution</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Let's walk through standard database interaction from genesis block creation, adding data rows, and finally requesting to read the stored arrays.</p>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4 py-1">
              <p className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider text-xs mb-1">1. Create Table Block (DDL)</p>
              <code className="text-sm font-mono text-sky-600 dark:text-sky-400 font-bold">CREATE TABLE Students (StudentID INT PRIMARY KEY, Name VARCHAR(50), Age INT);</code>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <p className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider text-xs mb-1">2. Insert Data Rows (DML)</p>
              <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold">INSERT INTO Students VALUES (1, 'Karthick', 21);<br />INSERT INTO Students VALUES (2, 'Anjali', 20);</code>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-1">
              <p className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider text-xs mb-1">3. Retrieve Matrix Query (DQL)</p>
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 px-2 py-0.5 rounded">SELECT * FROM Students;</code>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl h-full p-6 sm:p-8 flex flex-col justify-center border border-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-xs uppercase font-bold text-gray-500 mb-4 tracking-widest flex items-center"><Terminal className="w-4 h-4 mr-2" /> Database Output Console Render:</p>
            <table className="w-full text-sm text-left font-mono">
              <thead className="text-xs text-sky-400 uppercase border-b border-gray-700">
                <tr><th className="py-3">StudentID</th><th>Name</th><th>Age</th></tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 text-gray-500">1</td>
                  <td className="py-3 text-white">Karthick</td>
                  <td className="py-3 text-emerald-400">21</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-500">2</td>
                  <td className="py-3 text-white">Anjali</td>
                  <td className="py-3 text-emerald-400">20</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
              <span className="font-bold text-emerald-400">🎉 Congratulations! You just interacted with a relational DB.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap & Professional Advice section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-12 gap-8">

        {/* Roadmap */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
              <Map className="w-6 h-6 mr-3 text-sky-500" /> SQL Learning Roadmap
            </h3>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-emerald-500">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="font-bold text-emerald-600 dark:text-emerald-400">🔰 Beginner Level</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">Basics, SELECT, WHERE, INSERT, UPDATE, DELETE</p>
              </div>

              <div className="relative pl-6 border-l-2 border-amber-500">
                <div className="absolute w-4 h-4 rounded-full bg-amber-500 -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="font-bold text-amber-600 dark:text-amber-400">🟡 Intermediate Level</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">JOIN, GROUP BY, HAVING, SUBQUERIES, CONSTRAINTS</p>
              </div>

              <div className="relative pl-6 border-l-2 border-red-500">
                <div className="absolute w-4 h-4 rounded-full bg-red-500 -left-[9px] top-1 border-4 border-white dark:border-gray-800"></div>
                <h4 className="font-bold text-red-600 dark:text-red-400">🔴 Advanced Level</h4>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">INDEXES, STORED PROCEDURES, TRIGGERS, WINDOW FUNCTIONS, TUNING</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-500 text-white rounded-3xl p-8 relative overflow-hidden shadow-lg border border-sky-400">
            <div className="relative z-10">
              <h3 className="font-black text-xl mb-4 flex items-center"><GitBranch className="w-6 h-6 mr-3" /> Under The Hood Flow</h3>
              <div className="flex items-center text-sm font-bold bg-white/10 p-3 rounded-lg overflow-x-auto whitespace-nowrap">
                <span className="shrink-0">User App</span> <ArrowRight className="w-4 h-4 mx-2 text-sky-200 shrink-0" />
                <span className="shrink-0">SQL Query</span> <ArrowRight className="w-4 h-4 mx-2 text-sky-200 shrink-0" />
                <span className="shrink-0">DB Engine</span> <ArrowRight className="w-4 h-4 mx-2 text-sky-200 shrink-0" />
                <span className="text-yellow-300 border-b border-yellow-300 shrink-0">Result Matrix</span>
              </div>
            </div>
          </div>
        </div>

        {/* 15 Year Exp Arch */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Briefcase className="w-64 h-64" />
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10">
            15+ Years Architecture Insight
          </h2>
          <p className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-8 border-b border-gray-100 dark:border-gray-700 pb-4 relative z-10">Real-World Engineer Wisdom</p>

          <div className="space-y-8 relative z-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center font-black text-purple-600 dark:text-purple-400 text-xl border border-purple-200 dark:border-purple-800 shrink-0 shadow-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Master SELECT First</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium bg-purple-50 dark:bg-purple-900/10 p-2 rounded"><strong>90% of real-world enterprise SQL work revolves entirely around massive SELECT reporting queries.</strong></p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center font-black text-emerald-600 dark:text-emerald-400 text-xl border border-emerald-200 dark:border-emerald-800 shrink-0 shadow-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Algorithm Logic &gt; Pure Syntax</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">Do not try to memorize code. Always systematically ask yourself these architectural questions first:</p>
                <div className="flex flex-wrap gap-2 text-xs font-bold font-mono">
                  <span className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">What data?</span>
                  <span className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">From which table mapping?</span>
                  <span className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">What math condition constraint?</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-black text-blue-600 dark:text-blue-400 text-xl border border-blue-200 dark:border-blue-800 shrink-0 shadow-sm">3</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xl mb-2">Learn DB Design Alongside Code Matrix</h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Understanding the concepts of Primary Keys, Foreign Key JOIN bridges, complex Table Relationships, and strict mathematical Normalization is strictly what establishes you as a strong Tier-1 Backend Developer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Footer */}
      <section className="max-w-6xl mx-auto mb-8 bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 text-center text-gray-300">
        <h3 className="font-black text-2xl text-white mb-8 flex items-center justify-center"><Target className="w-6 h-6 mr-3 text-rose-500" /> Career Paths Dependent on SQL Mastery</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-800 px-4 py-2 rounded-full font-bold flex items-center border border-gray-700 hover:border-gray-500 cursor-default transition-colors text-white"><Laptop className="w-4 h-4 mr-2 text-blue-400" /> Backend Developers</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full font-bold flex items-center border border-gray-700 hover:border-gray-500 cursor-default transition-colors text-white"><LineChart className="w-4 h-4 mr-2 text-emerald-400" /> Data Analysts</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full font-bold flex items-center border border-gray-700 hover:border-gray-500 cursor-default transition-colors text-white"><BrainCircuit className="w-4 h-4 mr-2 text-purple-400" /> AI/ML Engineers</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full font-bold flex items-center border border-gray-700 hover:border-gray-500 cursor-default transition-colors text-white"><Building className="w-4 h-4 mr-2 text-amber-400" /> BI Professionals</span>
        </div>
        <p className="mt-8 text-sky-400 font-bold uppercase tracking-widest text-sm">Since you are building structural software logic, this module is your foundation ground-zero.</p>
      </section>

    </div>
  );
};

/* Micro component */
const StarBadge = () => (
  <span className="bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm border border-yellow-200">Most Used</span>
)

export default SqlIntro;