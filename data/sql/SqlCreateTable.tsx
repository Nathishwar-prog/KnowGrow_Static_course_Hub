import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Key, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, MapPin, Layers } from 'lucide-react';

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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-indigo-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlCreateTable: React.FC = () => {
  const [activePlatformTab, setActivePlatformTab] = useState<'mysql' | 'sqlserver' | 'postgres'>('mysql');

  // Interactive Platform DB Setup Lab Configurations
  const getPlatformContent = () => {
    switch (activePlatformTab) {
      case 'mysql':
        return {
          title: "MySQL Standard",
          icon: <Database className="w-5 h-5 mr-2 text-cyan-500" />,
          desc: "MySQL utilizes the AUTO_INCREMENT keyword natively on the primary key column.",
          code: "CREATE TABLE Orders (\n    order_id INT AUTO_INCREMENT PRIMARY KEY,\n    customer_name VARCHAR(100),\n    total_amount DECIMAL(10,2)\n);",
          highlight: "cyan"
        };
      case 'sqlserver':
        return {
          title: "SQL Server (T-SQL)",
          icon: <Server className="w-5 h-5 mr-2 text-rose-500" />,
          desc: "T-SQL assigns the IDENTITY(1,1) function, passing the exact starting ID and growth steps.",
          code: "CREATE TABLE Orders (\n    order_id INT IDENTITY(1,1) PRIMARY KEY,\n    customer_name VARCHAR(100),\n    total_amount DECIMAL(10,2)\n);",
          highlight: "rose"
        };
      case 'postgres':
        return {
          title: "PostgreSQL",
          icon: <DatabaseZap className="w-5 h-5 mr-2 text-indigo-500" />,
          desc: "Postgres establishes a SERIAL pseudo-type which auto-generates sequential integer sequences beneath the hood.",
          code: "CREATE TABLE Orders (\n    order_id SERIAL PRIMARY KEY,\n    customer_name VARCHAR(100),\n    total_amount DECIMAL(10,2)\n);",
          highlight: "indigo"
        };
    }
  };

  const platform = getPlatformContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <Table2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          CREATE TABLE
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The blueprint of your data. Define the exact columns, rigid datatypes, and strict constraints that construct your database architecture.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* Simple Baseline */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <BoxSelect className="w-6 h-6 mr-3 text-indigo-500" /> Fundamental Structure
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-sm">
            A table holds exact, predefined columns mapped to strict datatypes. Rows (Payloads) must exactly match this blueprint structure to exist.
          </p>
          <div className="flex-grow">
            <CodeSnippetBlock codeSnippet="CREATE TABLE Students (&#10;    student_id INT,&#10;    name VARCHAR(50),&#10;    marks INT&#10;);" title="Basic Unconstrained Setup" />
          </div>
        </div>

        {/* Advanced Projection */}
        <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl text-indigo-500"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-indigo-400" /> Production-Ready Table
          </h2>
          <p className="text-gray-400 font-medium mb-6 text-sm relative z-10">
            Real production software virtually never deploys naked columns. Attributes are fully guarded by constraints declaring exact structural laws.
          </p>
          <div className="flex-grow relative z-10">
            <CodeSnippetBlock codeSnippet="CREATE TABLE Users (&#10;    user_id INT PRIMARY KEY,&#10;    name VARCHAR(100) NOT NULL,&#10;    email VARCHAR(150) UNIQUE NOT NULL,&#10;    age INT CHECK (age >= 18),&#10;    status VARCHAR(20) DEFAULT 'Active'&#10;);" title="The Constraints Matrix" />
          </div>
        </div>
      </section>

      {/* Advanced Typings Array */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Filter className="w-6 h-6 mr-3 text-indigo-500" /> Common Data Type Dictionary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full"></div>
            <Hash className="w-6 h-6 text-blue-500 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">INT</h3>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">Standard Integer</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Whole numbers only.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/10 rounded-bl-full"></div>
            <Hash className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-700 pb-1">BIGINT</h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Massive whole numbers (e.g., global transaction IDs).</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
            <LayoutTemplate className="w-6 h-6 text-emerald-500 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">VARCHAR(n)</h3>
            <p className="text-xs text-emerald-500 mt-1 uppercase tracking-widest font-bold">Variable Text</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Strings that adapt length. Shrinks down to save memory exactly on the string size.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-600/10 rounded-bl-full"></div>
            <LayoutTemplate className="w-6 h-6 text-emerald-600 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-700 pb-1">CHAR(n)</h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Hard-locked sequence length. Pads blank spaces causing slight memory waste.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-bl-full"></div>
            <Clock className="w-6 h-6 text-purple-500 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-700 pb-1">DATE</h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Only Year, Month, Day mappings.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-600/10 rounded-bl-full"></div>
            <Clock className="w-6 h-6 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">DATETIME</h3>
            <p className="text-xs text-purple-600 mt-1 uppercase tracking-widest font-bold">Timestamp</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Date fused with precise Hours/Mins/Secs.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col relative overflow-hidden md:col-span-2 text-center text-amber-900 dark:text-amber-500">
            <Target className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">DECIMAL(p,s)</h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2 max-w-[250px] mx-auto">Absolute currency precision mapping. (e.g. `10,2` signifies maximum 10 total digits long, holding exactly 2 decimals trailing).</p>
          </div>
        </div>
      </section>

      {/* Cross-Platform Autoincrement */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <DatabaseZap className="w-8 h-8 mr-3 text-indigo-500" /> Auto Key-Generation Dialects
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'mysql', label: 'MySQL', icon: <Database className="w-4 h-4 mr-2" />, color: 'cyan' },
              { id: 'sqlserver', label: 'SQL Server', icon: <Server className="w-4 h-4 mr-2" />, color: 'rose' },
              { id: 'postgres', label: 'PostgreSQL', icon: <DatabaseZap className="w-4 h-4 mr-2" />, color: 'indigo' },
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
              <div className="flex-grow mt-auto shadow-sm">
                <CodeSnippetBlock codeSnippet={platform.code} title={`${platform.title} Syntax`} />
              </div>
            </div>

            {/* Right Terminal Map */}
            <div className={`bg-${platform.highlight}-900/10 border border-${platform.highlight}-900/30 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${platform.highlight}-500/20 rounded-full blur-3xl`}></div>
              <h4 className={`text-xl font-bold text-${platform.highlight}-900 dark:text-${platform.highlight}-400 mb-4 flex items-center`}><Link2 className="w-5 h-5 mr-3" /> Foreign Key Integration</h4>
              <p className={`text-sm tracking-wide text-${platform.highlight}-800 dark:text-${platform.highlight}-200 mb-4`}>The generated IDs mapped out in these engine sequences immediately act as the exact anchor point for future <code>FOREIGN KEY</code> constraints injected into dependent relational tables.</p>
              <code className="block bg-black p-4 rounded-xl text-xs font-mono text-gray-400 shadow-inner">
                FOREIGN KEY (customer_id)<br />
                <span className={`text-${platform.highlight}-400 ml-4 font-bold`}>REFERENCES Customers(customer_id)</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Cloner Layout & Multi-level Checks */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        {/* Advanced Table Cloning */}
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden flex flex-col h-full text-white">
          <h3 className="text-2xl font-bold mb-4 flex items-center"><Copy className="w-6 h-6 mr-3 text-emerald-400" /> Subsets (Cloning)</h3>
          <p className="text-sm font-medium text-gray-400 mb-6">
            You can hijack an active <code>SELECT</code> payload to immediately generate an explicit backup or subsection schema dynamically filled with exact live data.
          </p>
          <div className="flex-grow shadow-2xl">
            <CodeSnippetBlock codeSnippet="CREATE TABLE IT_Employees AS&#10;SELECT * FROM Employees&#10;WHERE department = 'IT';" title="Architecture Replication" />
          </div>
        </div>

        {/* Advanced Multi-column Constraints */}
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden flex flex-col h-full text-white">
          <h3 className="text-2xl font-bold mb-4 flex items-center"><Layers className="w-6 h-6 mr-3 text-emerald-400" /> Table-Level Logic</h3>
          <p className="text-sm font-medium text-gray-400 mb-6">
            Occasionally conditions span entirely unrelated columns inside the row. Attach these explicitly to the absolute base of the schema structure during design.
          </p>
          <div className="flex-grow shadow-2xl">
            <CodeSnippetBlock codeSnippet="CREATE TABLE Projects (&#10;    project_id INT PRIMARY KEY,&#10;    start_date DATE,&#10;    end_date DATE,&#10;    CHECK (end_date > start_date)&#10;);" title="Multi-column Condition Mapping" />
          </div>
        </div>
      </section>

      {/* Extreme Production Tips & Interview Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center relative z-10">
              <Briefcase className="w-7 h-7 mr-3 text-indigo-500" />
              Real-World Best Practices
            </h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 relative z-10">(15+ Years Industry Experience)</p>

            <div className="space-y-6 relative z-10 text-sm font-medium">

              {/* Rule 1 */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 1. Never skip PRIMARY KEY declarations</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed">
                  Deploying a physical table into a production container without absolute uniqueness bindings fundamentally breaks relation mappings. The engine creates automatic B-Tree Indexes immediately out of keys resolving SELECT speeds instantly.
                </p>
              </div>

              {/* Rule 2 */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 2. Heavy Typings Crash Architecture</h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-3 pl-7">
                  <div className="bg-red-50 dark:bg-rose-900/10 p-4 rounded-xl border border-red-100 dark:border-rose-900/30">
                    <p className="text-red-600 dark:text-red-400 text-xs font-bold mb-2 uppercase tracking-widest flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Poor Memory Map</p>
                    <code className="text-[10px] sm:text-xs block bg-white dark:bg-gray-900 p-2 border border-red-200 dark:border-rose-800/40 text-gray-600 dark:text-gray-400 font-bold mb-2">age VARCHAR(255)</code>
                    <p className="text-[10px] text-gray-500">Sloppily wastes gigantic dynamic memory slots handling a max 3 character length limit.</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                    <p className="text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-2 uppercase tracking-widest flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Professional Map</p>
                    <code className="text-[10px] sm:text-xs block bg-white dark:bg-gray-900 p-2 border border-emerald-200 dark:border-emerald-800/40 text-gray-800 dark:text-gray-200 font-bold mb-2">age INT CHECK (<span className="text-emerald-500">age &gt; 0</span>)</code>
                    <p className="text-[10px] text-gray-500">Fast tiny numerical validation.</p>
                  </div>
                </div>
              </div>

              {/* Rule 3 Naming */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 3. Strict Nomenclatures</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed mb-4">You do not code for yourself, you map logic for developers logging onto the stack 6 months later. Use extremely clear nouns.</p>
                <div className="grid sm:grid-cols-2 gap-4 pl-7 text-xs font-bold">
                  <ul className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-emerald-600 dark:text-emerald-400">
                    <li>✔ user_id</li>
                    <li>✔ order_date</li>
                    <li>✔ total_amount_paid</li>
                  </ul>
                  <ul className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-rose-600 dark:text-rose-400 line-through">
                    <li>❌ id1</li>
                    <li>❌ col1</li>
                    <li>❌ data</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-sm font-medium">
            <h3 className="text-gray-900 dark:text-white font-extrabold text-xl mb-2 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-gray-500" />
              Interview Check
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                <LayoutTemplate className="w-4 h-4 mr-2" /> CHAR vs VARCHAR
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                <div><span className="font-bold block text-indigo-500 mb-1">CHAR</span> Fixed sequential blocks. Slightly faster in raw engine mapping.</div>
                <div><span className="font-bold block text-purple-500 mb-1">VARCHAR</span> Adaptable strings. Saves extreme space shrinking empty null spaces.</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                Duplicate Primary Hooks?
              </p>
              <div className="text-rose-700 dark:text-rose-400 flex items-start">
                <AlertOctagon className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-rose-500" />
                <span>The system instantly terminates execution and throws a hard Constraint Error preventing duplicates.</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 text-white to-black p-6 rounded-xl shadow-sm border border-indigo-800">
              <h4 className="font-black mb-2 flex items-center text-indigo-400"><DatabaseZap className="w-4 h-4 mr-2" /> Avoid Overusing TEXT</h4>
              <p className="text-gray-300 text-xs font-medium leading-relaxed">Gigantic text-glob columns severely lag querying pipelines. Normalize data structurally out into other arrays to avoid dropping caching performances.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlCreateTable;