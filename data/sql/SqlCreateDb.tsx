import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, FolderOpen, FileJson, ArrowRight, Zap, Target, LayoutTemplate, Box, Server, AlertTriangle, ShieldAlert, Key, HelpCircle, Briefcase, FileCode, CheckCircle, AlertOctagon, RefreshCw, LayoutList, Fingerprint, Lock, Globe2 } from 'lucide-react';

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
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-blue-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlCreateDb: React.FC = () => {
  const [activePlatformTab, setActivePlatformTab] = useState<'mysql' | 'sqlserver' | 'postgres'>('mysql');

  // Interactive Platform DB Setup Lab Configurations
  const getPlatformContent = () => {
    switch (activePlatformTab) {
      case 'mysql':
        return {
          title: "MySQL Production Stack",
          icon: <Database className="w-5 h-5 mr-2 text-cyan-500" />,
          desc: "Creates a database equipped with exact Character Encoding protocols to support emojis, specialized languages, and absolute security privileges.",
          creation: "CREATE DATABASE company_db\nCHARACTER SET utf8mb4\nCOLLATE utf8mb4_unicode_ci;",
          connect: "USE company_db;",
          check: "SHOW DATABASES;",
          tip: "Always use utf8mb4 in modern systems! utf8 is fundamentally broken in legacy MySQL.",
          highlight: "cyan"
        };
      case 'sqlserver':
        return {
          title: "SQL Server (T-SQL) Stack",
          icon: <Server className="w-5 h-5 mr-2 text-red-500" />,
          desc: "Highly robust infrastructure defining exact disk storage limits, raw hard-drive file paths, and automated megabyte growth boundaries.",
          creation: "CREATE DATABASE company_db\nON\n(\n    NAME = company_data,\n    FILENAME = 'C:\\SQLData\\company_db.mdf',\n    SIZE = 10MB,\n    MAXSIZE = 100MB,\n    FILEGROWTH = 5MB\n);",
          connect: "USE company_db;\nGO",
          check: "SELECT name FROM sys.databases;",
          tip: "Physically maps data (.mdf) and logged transations (.ldf) to distinct hardware disks.",
          highlight: "rose"
        };
      case 'postgres':
        return {
          title: "PostgreSQL Stack",
          icon: <Globe2 className="w-5 h-5 mr-2 text-indigo-500" />,
          desc: "A pure object-relational powerhouse. Connections are made directly over absolute URL connections outside standard SQL query execution parameters.",
          creation: "CREATE DATABASE company_db;",
          connect: "\\c company_db",
          check: "\\l",
          tip: "Postgres isolates environments strictly. You connect specifically to the target database directly from the standard terminal input.",
          highlight: "indigo"
        };
    }
  };

  const platform = getPlatformContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          CREATE DATABASE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The absolute foundation of engineering. Construct the core logical container that hosts tables, views, procedures, and memory stacks.
        </p>
      </header>

      {/* Intro Concept Flow */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Box className="w-6 h-6 mr-3 text-blue-500" /> Container Architecture
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-sm">
              Think of the Database itself as the ultimate Parent Directory. By itself, it stores absolutely no actual rows or cells. It organizes components.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 text-center flex flex-col items-center">
                <FolderOpen className="w-10 h-10 text-blue-500 mb-2" />
                <span className="font-black text-gray-900 dark:text-white block mt-1">Database</span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest mt-1">The Master Folder</span>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-center flex flex-col items-center">
                <FileJson className="w-10 h-10 text-indigo-500 mb-2" />
                <span className="font-black text-gray-900 dark:text-white block mt-1">Tables/Views</span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest mt-1">Files inside folder</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden flex flex-col justify-center text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-blue-400 text-sm font-black uppercase tracking-widest mb-4 relative z-10">Step-by-Step Evolution</h3>

            <div className="space-y-3 relative z-10 text-xl font-mono text-gray-300">
              <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mx-auto max-w-xs transition-transform hover:scale-105"><span className="text-blue-400">CREATE</span> DATABASE</div>
              <ArrowRight className="w-5 h-5 mx-auto text-gray-600 rotate-90 my-2" />
              <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mx-auto max-w-xs transition-transform hover:scale-105"><span className="text-emerald-400">USE</span> DATABASE</div>
              <ArrowRight className="w-5 h-5 mx-auto text-gray-600 rotate-90 my-2" />
              <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mx-auto max-w-xs transition-transform hover:scale-105"><span className="text-indigo-400">CREATE</span> TABLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cross-Connection Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          🧪 Platform Connection Matrix
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'mysql', label: 'MySQL', icon: <Database className="w-4 h-4 mr-2" />, color: 'cyan' },
              { id: 'sqlserver', label: 'SQL Server', icon: <Server className="w-4 h-4 mr-2" />, color: 'rose' },
              { id: 'postgres', label: 'PostgreSQL', icon: <Globe2 className="w-4 h-4 mr-2" />, color: 'indigo' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActivePlatformTab(tab.id as any)}
                className={`flex-shrink-0 px-8 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activePlatformTab === tab.id ? `border-${tab.color}-500 text-${tab.color}-600 dark:text-${tab.color}-400 bg-white dark:bg-gray-800` : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content Lab */}
          <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-10">
            {/* Left Controls & Code */}
            <div className="flex flex-col animate-fade-in relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                  {platform.icon} {platform.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {platform.desc}
                </p>
              </div>

              <div className="flex-grow flex flex-col justify-end space-y-4 shadow-sm">
                <CodeSnippetBlock codeSnippet={platform.creation} title="Initialize Configuration" />
              </div>
            </div>

            {/* Right Terminals Console */}
            <div className="flex flex-col animate-fade-in space-y-4">
              {/* Terminal Connect */}
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl flex flex-col relative">
                <div className="bg-black/50 p-3 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center">
                    <Terminal className="w-4 h-4 mr-2" /> Connect / Use Target
                  </span>
                </div>
                <div className="p-4 font-mono text-sm leading-loose">
                  {platform.connect.split('\n').map((line, i) => (
                    <div key={i} className={`text-${platform.highlight}-400 font-bold`}><span className="text-gray-600 mr-2">❯</span>{line}</div>
                  ))}
                </div>
              </div>

              {/* Terminal Check */}
              <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl flex flex-col relative">
                <div className="bg-black/50 p-3 border-b border-gray-800 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center">
                    <LayoutList className="w-4 h-4 mr-2" /> List Existing Databases
                  </span>
                </div>
                <div className="p-4 font-mono text-sm leading-loose text-white">
                  <span className="text-gray-600 mr-2">❯</span>{platform.check}
                </div>
              </div>

              {/* Architecture Tip */}
              <div className={`mt-auto bg-${platform.highlight}-900/10 border border-${platform.highlight}-900/30 p-4 rounded-xl flex items-start text-${platform.highlight}-900 dark:text-${platform.highlight}-200`}>
                <Zap className={`w-5 h-5 text-${platform.highlight}-500 mr-3 shrink-0`} />
                <p className="text-xs font-bold">{platform.tip}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extreme Production Architecture & Drops */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Rules */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Briefcase className="w-7 h-7 mr-3 text-blue-400" />
              Production Deployment Blueprint
            </h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">(15+ Years Dev-Ops Perspective)</p>

            <div className="space-y-6 relative z-10">
              {/* Rule 1 */}
              <div>
                <h3 className="font-bold text-gray-200 mb-2 flex items-center"><span className="text-xl mr-2 text-rose-500">🔥</span> Separate Lifecycle Environments</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed pl-7">
                  Absolutely <strong className="text-rose-400 px-1">never</strong> develop features on your Production data block. Top-tier corporate database clusters map out identical environments explicitly named:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 pl-7">
                  <div className="bg-gray-800 p-2 text-xs font-mono text-center text-gray-300 rounded border border-gray-700">development_db</div>
                  <div className="bg-gray-800 p-2 text-xs font-mono text-center text-emerald-400 rounded border border-emerald-900/50">testing_db</div>
                  <div className="bg-gray-800 p-2 text-xs font-mono text-center text-indigo-400 rounded border border-indigo-900/50">staging_db</div>
                  <div className="bg-red-900/40 p-2 text-xs font-mono text-center text-red-400 rounded border border-red-900/80 shadow-[0_0_10px_rgba(239,68,68,0.2)] font-black">production_db</div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-200 mb-2 flex items-center"><span className="text-xl mr-2 text-rose-500">🔥</span> Bind Permissions Instantly</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed pl-7">
                  After creating the block, <strong className="text-amber-400">never let API backends login as Root!</strong> Create specialized user handles restricted purely to one database payload:
                </p>
                <div className="mt-3 pl-7">
                  <code className="text-xs font-mono text-blue-300 bg-black/60 p-3 rounded-lg border border-gray-800 block shadow-inner">GRANT ALL PRIVILEGES ON company_db.* TO 'app_user'@'localhost';</code>
                </div>
              </div>

              {/* Rule 3 Naming */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-200 mb-2 flex items-center"><span className="text-xl mr-2 text-rose-500">🔥</span> Naming Nomenclature</h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-3 pl-7 text-sm font-bold">
                  <div className="bg-emerald-900/10 p-3 rounded-xl border border-emerald-900/30">
                    <p className="text-emerald-500 text-xs uppercase tracking-widest mb-2 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Permitted Standard</p>
                    <span className="block text-gray-300">hospital_management</span>
                    <span className="block text-gray-300 mt-1">ecommerce_db</span>
                  </div>
                  <div className="bg-red-900/10 p-3 rounded-xl border border-red-900/30">
                    <p className="text-red-500 text-xs uppercase tracking-widest mb-2 flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Unprofessional</p>
                    <span className="block text-gray-500 line-through">db1</span>
                    <span className="block text-gray-500 line-through mt-1">testing_final_v2</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Delete Danger Layout Right */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="bg-red-50 dark:bg-rose-950/20 p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/50 flex-grow hover:border-red-500 transition-colors flex flex-col justify-center">
              <AlertOctagon className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
              <h3 className="text-red-900 dark:text-red-400 font-black text-2xl mb-2">Total Annihilation</h3>
              <p className="text-red-800 dark:text-red-300 text-sm font-medium mb-6">
                Using the <code className="bg-red-200 dark:bg-red-900/50 px-1 rounded font-bold">DROP</code> command eradicates the folder, including every table, index, row, and user configuration inside it permanently.
              </p>
              <div className="shadow-lg">
                <CodeSnippetBlock codeSnippet="DROP DATABASE company_db;" title="Vaporize Environment" />
              </div>
              <p className="text-xs text-red-600 dark:text-red-400 uppercase font-bold tracking-widest text-center">There is no "Trash Can" recovery.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Junior Pitfalls & Interview */}
      <section className="max-w-6xl mx-auto mb-10 grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative text-gray-900 dark:text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center"><Fingerprint className="w-6 h-6 mr-3 text-blue-500" /> Deep Engineering Interview</h3>

          <div className="mb-6 pb-4">
            <p className="font-bold mb-2">CREATE DB vs CREATE TABLE?</p>
            <div className="grid grid-cols-2 gap-4 text-sm mt-3 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
                <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1">DATABASE</span>
                <p className="text-gray-600 dark:text-gray-400">Allocates abstract disk space partitioning for the system wrapper.</p>
              </div>
              <div className="p-4 border-l border-gray-200 dark:border-gray-700">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">TABLE</span>
                <p className="text-gray-600 dark:text-gray-400">Creates strict geometric row-and-column mapping inside the wrapper.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-2">What precisely is Collation?</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
              It is the rigid architectural ruleset governing exactly how the Engine handles alphabetical sorting mechanisms and exact character comparison mapping (e.g. Case Sensitivities, Language Accents).
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-900/30 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center text-amber-900 dark:text-amber-500"><Lock className="w-6 h-6 mr-3 text-amber-500" /> Junior Dev Mistakes</h3>

          <ul className="space-y-4 text-sm font-medium text-amber-900 dark:text-amber-400">
            <li className="flex items-start bg-white dark:bg-amber-900/10 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/30">
              <span className="text-amber-500 mr-3 mt-0.5">❌</span> Forgetting to run <code>USE [DB]</code> resulting in tables being created in the ghost Master DB.
            </li>
            <li className="flex items-start bg-white dark:bg-amber-900/10 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/30">
              <span className="text-amber-500 mr-3 mt-0.5">❌</span> Utilizing ROOT admin credentials inside application <code>.env</code> files connected to APIs.
            </li>
            <li className="flex items-start bg-white dark:bg-amber-900/10 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/30">
              <span className="text-amber-500 mr-3 mt-0.5">❌</span> Assuming renaming a database is simple (Usually, it's safer to backup, extract, and remap to a new DB shell instance).
            </li>
            <li className="flex items-start bg-white dark:bg-amber-900/10 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/30">
              <span className="text-amber-500 mr-3 mt-0.5">❌</span> Missing `utf8mb4` implementations on database start, causing Emojis/Russian chars to corrupt table rows.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default SqlCreateDb;