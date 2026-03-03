import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, ShieldAlert, ArrowRight, Zap, Target, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Key, Link2, FileWarning, ToggleRight, Layers, Briefcase, ShoppingCart, Banknote, Hospital, Shield, FileEdit } from 'lucide-react';

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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors border border-gray-700"
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

const SqlConstraints: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notnull' | 'unique' | 'pk' | 'fk' | 'check' | 'default'>('pk');

  // Interactive Validation Lab Configurations
  const getLabContent = () => {
    switch (activeTab) {
      case 'notnull':
        return {
          title: "NOT NULL",
          icon: <FileWarning className="w-5 h-5 mr-2 text-red-500" />,
          desc: "Prevents empty (NULL) values from being inserted.",
          schema: "CREATE TABLE Students (\n    id INT,\n    name VARCHAR(50) NOT NULL\n);",
          constraintBadge: "NOT NULL",
          validations: [
            { query: "INSERT INTO Students VALUES (1, 'Arjun');", result: true, reason: "'Arjun' is provided, satisfying NOT NULL." },
            { query: "INSERT INTO Students VALUES (2, NULL);", result: false, reason: "FAILS: NULL value blocked by constraint." }
          ]
        };
      case 'unique':
        return {
          title: "UNIQUE",
          icon: <Target className="w-5 h-5 mr-2 text-purple-500" />,
          desc: "Prevents duplicate values across the entire column.",
          schema: "CREATE TABLE Users (\n    user_id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE\n);\n\n-- Base Setup\nINSERT INTO Users VALUES (1, 'arjun@mail.com');",
          constraintBadge: "UNIQUE",
          validations: [
            { query: "INSERT INTO Users VALUES (2, 'meena@mail.com');", result: true, reason: "Email is unique." },
            { query: "INSERT INTO Users VALUES (3, 'arjun@mail.com');", result: false, reason: "FAILS: 'arjun@mail.com' already exists." }
          ]
        };
      case 'pk':
        return {
          title: "PRIMARY KEY",
          icon: <Key className="w-5 h-5 mr-2 text-amber-500" />,
          desc: "UNIQUE + NOT NULL combined. Strongly identifies each record.",
          schema: "CREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    name VARCHAR(50)\n);\n\n-- Base Setup\nINSERT INTO Employees VALUES (101, 'Arjun');",
          constraintBadge: "PRIMARY KEY",
          validations: [
            { query: "INSERT INTO Employees VALUES (102, 'Meena');", result: true, reason: "102 is unique and not null." },
            { query: "INSERT INTO Employees VALUES (101, 'Ravi');", result: false, reason: "FAILS: PK 101 already exists (Duplicate)." },
            { query: "INSERT INTO Employees VALUES (NULL, 'Priya');", result: false, reason: "FAILS: PK cannot be NULL." }
          ]
        };
      case 'fk':
        return {
          title: "FOREIGN KEY",
          icon: <Link2 className="w-5 h-5 mr-2 text-blue-500" />,
          desc: "Links two tables together enforcing referential integrity.",
          schema: "CREATE TABLE Customers (customer_id INT PRIMARY KEY);\nINSERT INTO Customers VALUES (99);\n\nCREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)\n);",
          constraintBadge: "FOREIGN KEY REFERENCES",
          validations: [
            { query: "INSERT INTO Orders VALUES (1, 99);", result: true, reason: "Customer 99 exists in Customers table." },
            { query: "INSERT INTO Orders VALUES (2, 500);", result: false, reason: "FAILS: Customer 500 does NOT exist!" }
          ]
        };
      case 'check':
        return {
          title: "CHECK",
          icon: <ShieldAlert className="w-5 h-5 mr-2 text-emerald-500" />,
          desc: "Validates a specific data condition is met before inserting.",
          schema: "CREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    salary INT CHECK (salary %gt; 0)\n);",
          constraintBadge: "CHECK (salary > 0)",
          validations: [
            { query: "INSERT INTO Employees VALUES (1, 50000);", result: true, reason: "50000 > 0 evaluates to True." },
            { query: "INSERT INTO Employees VALUES (2, -100);", result: false, reason: "FAILS: -100 violates CHECK constraint." }
          ]
        };
      case 'default':
        return {
          title: "DEFAULT",
          icon: <ToggleRight className="w-5 h-5 mr-2 text-pink-500" />,
          desc: "Provides an automatic fallback value if none is passed.",
          schema: "CREATE TABLE Users (\n    id INT PRIMARY KEY,\n    status VARCHAR(20) DEFAULT 'Active'\n);",
          constraintBadge: "DEFAULT 'Active'",
          validations: [
            { query: "INSERT INTO Users (id, status) VALUES (1, 'Pending');", result: true, reason: "Returns: (1, 'Pending')" },
            { query: "INSERT INTO Users (id) VALUES (2);", result: true, reason: "Returns: (2, 'Active') - Default was applied!" }
          ]
        };
    }
  };

  const lab = getLabContent();
  const rawSchemaCode = lab.schema.replace(/%gt;/g, '>');

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL Constraints
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate guardians of data integrity. Stop bad data instantly by enforcing exact business rules directly inside the table schema.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 opacity-5"><ShieldAlert className="w-64 h-64" /></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center relative z-10">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> Why Constraints?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium relative z-10 mb-6 text-lg">
              Without constraints applied to your Database architecture, you risk catastrophic data collapse:
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Duplicate User IDs colliding
              </li>
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Negative Salaries (-$5000)
              </li>
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Ghost Orders tracking deleted Customers
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
              <Layers className="w-6 h-6 mr-3 text-indigo-400" /> Column vs Table Level
            </h2>
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-2">Column-Level (Attached inline)</p>
                <code className="block w-full bg-black border border-gray-800 p-3 rounded-lg text-sm text-gray-300 font-mono">
                  salary INT <strong className="text-indigo-400">CHECK (salary &gt; 0)</strong>
                </code>
              </div>
              <div className="flex items-center text-gray-700 text-xs font-bold w-full my-2">
                <div className="flex-grow h-px bg-gray-800"></div><span className="px-3 tracking-widest">VS</span><div className="flex-grow h-px bg-gray-800"></div>
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-2">Table-Level (Bottom of table, applies to multiple coords)</p>
                <code className="block w-full bg-black border border-gray-800 p-3 rounded-lg text-sm text-gray-300 font-mono">
                  <strong className="text-indigo-400">CHECK (end_date &gt; start_date)</strong>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constraint Sandbox Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          🧪 Interactive Integrity Sandbox
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'pk', label: 'PRIMARY KEY', icon: <Key className="w-4 h-4 mr-2" /> },
              { id: 'fk', label: 'FOREIGN KEY', icon: <Link2 className="w-4 h-4 mr-2" /> },
              { id: 'unique', label: 'UNIQUE', icon: <Target className="w-4 h-4 mr-2" /> },
              { id: 'notnull', label: 'NOT NULL', icon: <FileWarning className="w-4 h-4 mr-2" /> },
              { id: 'check', label: 'CHECK', icon: <ShieldAlert className="w-4 h-4 mr-2" /> },
              { id: 'default', label: 'DEFAULT', icon: <ToggleRight className="w-4 h-4 mr-2" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-shrink-0 px-5 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activeTab === tab.id ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
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
                  {lab.icon} {lab.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {lab.desc}
                </p>
              </div>
              <div className="flex-grow mt-auto shadow-sm">
                <CodeSnippetBlock codeSnippet={rawSchemaCode} title={`${lab.title} Schema Setup`} />
              </div>
            </div>

            {/* Right Live Simulation Console */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl flex flex-col animate-fade-in relative">
              <div className="bg-black/50 p-4 border-b border-gray-800 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center">
                  <Terminal className="w-4 h-4 mr-2" /> Execution Matrix
                </span>
                <div className="bg-gray-800 border border-gray-700 px-3 py-1 rounded text-xs font-mono font-bold text-indigo-400">
                  {lab.constraintBadge}
                </div>
              </div>

              <div className="p-5 font-mono text-sm space-y-4 flex-grow relative z-10">
                {lab.validations.map((v: any, idx: number) => (
                  <div key={idx} className="bg-black/30 p-4 rounded-xl border border-gray-800/50">
                    <div className="flex items-center text-gray-300 mb-3 font-bold text-xs uppercase tracking-wider bg-gray-800/50 inline-block px-2 py-1 rounded">
                      <ArrowRight className="w-3 h-3 mr-1 inline" /> {v.query}
                    </div>

                    {v.result ? (
                      <div className="flex items-start bg-emerald-900/10 border border-emerald-900/30 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-emerald-500 font-bold mb-1 tracking-wide">SUCCESS</span>
                          <span className="block text-emerald-400/70 text-xs font-medium">{v.reason}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start bg-rose-900/10 border border-rose-900/30 p-3 rounded-lg">
                        <AlertOctagon className="w-5 h-5 mr-3 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-rose-500 font-bold mb-1 tracking-wide">CONSTRAINT VIOLATION ALARM</span>
                          <span className="block text-rose-400/70 text-xs font-medium">{v.reason}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Configuration */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-indigo-950 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl text-indigo-500 scale-[2]"></div>

          <h2 className="text-3xl font-bold text-white mb-3 flex items-center relative z-10">
            <Database className="w-8 h-8 mr-3 text-indigo-400" /> Ultimate Production Schema
          </h2>
          <p className="text-gray-400 text-sm font-medium mb-6 relative z-10">
            Real production tables combine almost EVERY constraint type simultaneously to forge indestructible data sets.
          </p>

          <div className="bg-black/60 p-6 rounded-2xl border border-gray-800 relative z-10 font-mono text-sm leading-loose overflow-x-auto shadow-inner">
            <div className="text-indigo-400">CREATE TABLE <span className="text-gray-100">Users (</span></div>
            <div className="pl-8">
              <span className="text-blue-300">user_id</span> INT <strong className="text-emerald-400 drop-shadow-sm">PRIMARY KEY</strong>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">name</span> VARCHAR(50) <strong className="text-rose-400 drop-shadow-sm">NOT NULL</strong>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">email</span> VARCHAR(100) <strong className="text-purple-400 drop-shadow-sm">UNIQUE</strong> <strong className="text-rose-400 drop-shadow-sm">NOT NULL</strong>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">age</span> INT <strong className="text-amber-400 drop-shadow-sm">CHECK (age &gt;= 18)</strong>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">status</span> VARCHAR(20) <strong className="text-pink-400 drop-shadow-sm">DEFAULT 'Active'</strong>
            </div>
            <div className="text-gray-100">);</div>
          </div>
        </div>
      </section>

      {/* Dynamic Additions */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0 sm:pr-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center mb-2">
              <FileEdit className="w-6 h-6 mr-3 text-blue-500" /> Appending Late Constraints
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              You do not need to drop the table to add logic. Use <code>ALTER TABLE</code> to inject a named constraint onto live data.
            </p>
          </div>
          <div className="w-full sm:w-auto min-w-[300px]">
            <CodeSnippetBlock codeSnippet="ALTER TABLE Employees&#10;ADD CONSTRAINT chk_salary&#10;CHECK (salary > 0);" title="Post-Creation Alteration" />
          </div>
        </div>
      </section>

      {/* Performance & Real World Usage */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Performance Insight */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-amber-400" /> Performance Pipeline
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-800 pb-4 relative z-10">(15+ Years Industry Experience)</p>

            <div className="space-y-4 relative z-10 font-medium pb-4">
              <div className="bg-black/40 border border-gray-800 p-4 rounded-xl flex items-start">
                <Key className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm"><strong className="text-white block mb-1">PRIMARY KEY & UNIQUE:</strong> Automatically generate massive B-Tree indexes under the hood to ensure uniqueness. Speeds up SELECT searching immensely.</p>
              </div>
              <div className="bg-black/40 border border-gray-800 p-4 rounded-xl flex items-start">
                <Link2 className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm"><strong className="text-white block mb-1">FOREIGN KEY Limits:</strong> Improves relational structure flawlessly but <span className="text-rose-400">CAN slightly bottleneck bulk millions of INSERTS</span> because the Engine has to cross-check the parent table every single time.</p>
              </div>
              <div className="bg-black/40 border border-gray-800 p-4 rounded-xl flex items-start">
                <HelpCircle className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm"><strong className="text-white block mb-1">The Golden Rule:</strong> Always prioritize data integrity constraints over minor performance gains. Application memory is cheap; corrupted data is business lethal.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 ml-2">Business Sectors</h3>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-start hover:-translate-y-1 transition-transform">
              <ShoppingCart className="w-8 h-8 mr-4 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">E-commerce</h4>
                <p className="text-xs text-gray-500 mb-1">price <ArrowRight className="inline w-3 h-3" /> CHECK &gt; 0</p>
                <p className="text-xs text-gray-500">product_id <ArrowRight className="inline w-3 h-3" /> PRIMARY KEY</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-start hover:-translate-y-1 transition-transform">
              <Banknote className="w-8 h-8 mr-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Banking</h4>
                <p className="text-xs text-gray-500 mb-1">account_num <ArrowRight className="inline w-3 h-3" /> UNIQUE</p>
                <p className="text-xs text-gray-500">balance <ArrowRight className="inline w-3 h-3" /> CHECK &gt;= 0</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-start hover:-translate-y-1 transition-transform">
              <Hospital className="w-8 h-8 mr-4 text-rose-500 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Medical</h4>
                <p className="text-xs text-gray-500 mb-1">patient_id <ArrowRight className="inline w-3 h-3" /> PRIMARY KEY</p>
                <p className="text-xs text-gray-500">doctor_id <ArrowRight className="inline w-3 h-3" /> FOREIGN KEY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview & Mistakes */}
      <section className="max-w-6xl mx-auto mb-10 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl relative text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-indigo-400" /> Technical Interview Check</h3>

          <div className="mb-6 border-b border-gray-800 pb-4">
            <p className="font-bold mb-2">Difference between PRIMARY KEY and UNIQUE?</p>
            <div className="grid grid-cols-2 gap-4 text-sm mt-3">
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-amber-400 font-bold block mb-1">PRIMARY KEY</span>
                <ul className="text-gray-400 space-y-1"><li>- 1 Per Table</li><li>- NO Nulls Allowed</li></ul>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <span className="text-purple-400 font-bold block mb-1">UNIQUE</span>
                <ul className="text-gray-400 space-y-1"><li>- Multiple Per Table</li><li>- Can allow 1 NULL</li></ul>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-2 text-indigo-200">What is Referential Integrity?</p>
            <p className="text-gray-400 text-sm">Ensuring foreign key values physically exist in the parent table. If deleting a parent row, you must choose a cascading rule (CASCADE, SET NULL, RESTRICT).</p>
          </div>
        </div>

        <div className="bg-rose-50 dark:bg-rose-950/30 rounded-3xl p-8 border border-rose-200 dark:border-rose-900/50 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center text-rose-900 dark:text-rose-400"><AlertOctagon className="w-6 h-6 mr-3 text-rose-500" /> Junior Dev Mistakes</h3>

          <ul className="space-y-4 text-sm font-medium text-rose-800 dark:text-rose-300">
            <li className="flex items-start bg-white dark:bg-rose-900/10 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-900/20">
              <span className="text-rose-500 mr-3 mt-0.5">❌</span> Assuming frontend JS validation is enough and skipping table constraints.
            </li>
            <li className="flex items-start bg-white dark:bg-rose-900/10 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-900/20">
              <span className="text-rose-500 mr-3 mt-0.5">❌</span> Forgetting to append `PRIMARY KEY` during initial table creation.
            </li>
            <li className="flex items-start bg-white dark:bg-rose-900/10 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-900/20">
              <span className="text-rose-500 mr-3 mt-0.5">❌</span> Missing indexes on `FOREIGN KEY` columns leading to massive read-locks.
            </li>
            <li className="flex items-start bg-white dark:bg-rose-900/10 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-rose-900/20">
              <span className="text-rose-500 mr-3 mt-0.5">❌</span> Not naming constraints explicitly (leaving auto-generated jumbled names making logs unreadable).
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default SqlConstraints;