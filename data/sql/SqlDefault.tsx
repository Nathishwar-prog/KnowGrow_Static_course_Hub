import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Shield, AlertTriangle, ArrowRight, Zap, Target, Layers, Clock, Settings, HelpCircle, UserPlus, Server } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
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
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-emerald-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlDefault: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
          <Settings className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What is DEFAULT in SQL?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          The <code className="bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded font-bold text-emerald-700 dark:text-emerald-300">DEFAULT</code> constraint automatically assigns a value to a column when no value is provided during an <code className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded font-bold text-gray-700 dark:text-gray-300">INSERT</code>.
        </p>
        <div className="inline-block bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-300">
          <Target className="inline-block w-5 h-5 mr-2 text-emerald-500" />
          If the user does not specify a value → the default value is inserted.
        </div>
      </header>

      {/* Intro section: Why DEFAULT is Important? */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-xl shadow-sm border border-rose-200 dark:border-rose-800/30 h-full">
            <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-300 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-rose-500" />
              2️⃣ Without DEFAULT
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">❌</span>
                <span className="text-gray-700 dark:text-gray-300">You must always provide all column values.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">❌</span>
                <span className="text-gray-700 dark:text-gray-300">Risk of inserting <code className="text-rose-600 dark:text-rose-400 font-mono text-sm bg-rose-100 dark:bg-rose-900/30 px-1 rounded">NULL</code> unintentionally.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 font-bold mr-2">❌</span>
                <span className="text-gray-700 dark:text-gray-300">More application-side logic required.</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-xl shadow-sm border border-emerald-200 dark:border-emerald-800/30 h-full">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
              <Check className="w-6 h-6 mr-3 text-emerald-500" />
              2️⃣ With DEFAULT
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Cleaner inserts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Better data consistency.</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">✅</span>
                <span className="text-gray-700 dark:text-gray-300">Simpler backend code.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Syntax & Basic Example */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">3️⃣</span> Basic Syntax
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <CodeSnippetBlock codeSnippet={`CREATE TABLE table_name (\n    column_name datatype DEFAULT default_value\n);`} title="SQL Syntax" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mt-8 pt-4">
              <span className="mr-3">🧪</span> Example 1: Basic DEFAULT Value
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-bold text-gray-500 mb-2 uppercase flex items-center"><UserPlus className="w-4 h-4 mr-2" /> Users Table</p>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Users (\n    user_id INT PRIMARY KEY,\n    name VARCHAR(100),\n    status VARCHAR(20) DEFAULT 'Active'\n);`} title="Table Creation" />

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
                <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">Insert Without Status</p>
                <CodeSnippetBlock codeSnippet={`INSERT INTO Users (user_id, name)\nVALUES (1, 'Arjun');`} />
                <div className="mt-3 flex items-center text-sm font-medium text-blue-700 dark:text-blue-400">
                  <ArrowRight className="w-4 h-4 mr-2" /> Result: Because status was not provided, 'Active' is inserted implicitly.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">4️⃣</span> DEFAULT with Numbers
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-bold text-gray-500 mb-2 uppercase">🎯 Orders Table</p>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    total_amount DECIMAL(10,2) DEFAULT 0\n);`} />
              <p className="text-sm text-gray-600 dark:text-gray-300">If <code className="font-mono text-emerald-600 dark:text-emerald-400">total_amount</code> not given → <strong className="text-gray-900 dark:text-white">0</strong> is stored.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mt-8 pt-4">
              <span className="mr-3">5️⃣</span> DEFAULT with Boolean
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-bold text-gray-500 mb-2 uppercase">MySQL Example:</p>
              <CodeSnippetBlock codeSnippet={`CREATE TABLE Accounts (\n    id INT PRIMARY KEY,\n    is_active BOOLEAN DEFAULT TRUE\n);`} />
              <p className="text-sm text-gray-600 dark:text-gray-300">If not provided → <strong className="text-emerald-600 dark:text-emerald-400">TRUE</strong> automatically inserted.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Date & Time (Very Important) */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-1 rounded-2xl shadow-xl">
          <div className="bg-gray-900 rounded-xl p-8 h-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="mr-3 text-4xl">6️⃣</span> DEFAULT with Date & Time
              </h2>
              <div className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                Very Important
              </div>
            </div>

            <p className="text-purple-300 mb-6 font-medium text-lg flex items-center border-l-4 border-purple-500 pl-4 py-1">
              <Clock className="w-5 h-5 mr-3" /> When a record is inserted → current date/time is stored automatically.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-3">
                  <Database className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="font-bold text-blue-400 uppercase tracking-wider text-sm">MySQL</span>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-gray-300 overflow-x-auto">
                  <span className="text-purple-400">CREATE TABLE</span> Posts (<br />
                  &nbsp;&nbsp;post_id INT PRIMARY KEY,<br />
                  &nbsp;&nbsp;created_at DATETIME <span className="text-emerald-400 font-bold">DEFAULT CURRENT_TIMESTAMP</span><br />
                  );
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-amber-500 transition-colors">
                <div className="flex items-center mb-3">
                  <Server className="w-5 h-5 text-amber-400 mr-2" />
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-sm">SQL Server</span>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-gray-300 overflow-x-auto">
                  <span className="text-purple-400">CREATE TABLE</span> Posts (<br />
                  &nbsp;&nbsp;post_id INT PRIMARY KEY,<br />
                  &nbsp;&nbsp;created_at DATETIME <span className="text-emerald-400 font-bold">DEFAULT GETDATE()</span><br />
                  );
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-indigo-400 transition-colors">
                <div className="flex items-center mb-3">
                  <Database className="w-5 h-5 text-indigo-400 mr-2" />
                  <span className="font-bold text-indigo-400 uppercase tracking-wider text-sm">PostgreSQL</span>
                </div>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-gray-300 overflow-x-auto">
                  <span className="text-purple-400">CREATE TABLE</span> Posts (<br />
                  &nbsp;&nbsp;post_id INT PRIMARY KEY,<br />
                  &nbsp;&nbsp;created_at TIMESTAMP <span className="text-emerald-400 font-bold">DEFAULT CURRENT_TIMESTAMP</span><br />
                  );
                </div>
              </div>

            </div>

            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 text-center">
              <p className="text-purple-200 font-bold">🔥 This is widely used in production systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alter Table, Best Practices & Explicit NULL */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
              <span className="mr-3">7️⃣</span> Adding DEFAULT to Existing Table
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-bold text-gray-500 mb-2 uppercase">PostgreSQL / SQL Server:</p>
              <CodeSnippetBlock codeSnippet={`ALTER TABLE Users\nALTER COLUMN status SET DEFAULT 'Active';`} />

              <p className="text-sm font-bold text-gray-500 mb-2 mt-6 uppercase">MySQL (Slightly Different):</p>
              <CodeSnippetBlock codeSnippet={`ALTER TABLE Users\nMODIFY status VARCHAR(20) DEFAULT 'Active';`} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center mt-8 pt-4">
              <span className="mr-3">9️⃣</span> DEFAULT + NOT NULL
              <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 ml-3 px-2 py-1 rounded-full uppercase tracking-wider font-bold shrink-0">Best Practice</span>
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 rounded-bl-full -z-0"></div>
              <div className="relative z-10">
                <CodeSnippetBlock codeSnippet={`CREATE TABLE Users (\n    user_id INT PRIMARY KEY,\n    status VARCHAR(20) NOT NULL DEFAULT 'Active'\n);`} />
                <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2 mt-4">This ensures:</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Column never NULL</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Default automatically applied</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-2xl shadow-lg border border-rose-200 dark:border-rose-800/30 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-rose-900 dark:text-rose-300 mb-4 flex items-center">
              8️⃣ What Happens If NULL Is Explicitly Inserted?
            </h2>
            <div className="bg-white dark:bg-gray-800 border-l-4 border-rose-500 p-4 rounded shadow-sm mb-6 inline-block w-fit">
              <p className="text-rose-700 dark:text-rose-400 font-bold uppercase tracking-wider text-sm flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" /> Important Concept
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">If you write:</p>
            <CodeSnippetBlock codeSnippet={`INSERT INTO Users (user_id, name, status)\nVALUES (2, 'Meena', NULL);`} />

            <div className="bg-rose-100 dark:bg-rose-900/40 p-5 rounded-xl border border-rose-200 dark:border-rose-800/50 mt-auto">
              <p className="text-rose-800 dark:text-rose-200 font-bold text-lg mb-2 text-center">
                DEFAULT will <span className="underline decoration-rose-500 decoration-2">NOT</span> apply.
              </p>
              <div className="flex flex-col space-y-3 mt-4">
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded shadow-sm flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Because NULL is explicitly provided:</span>
                  <span className="font-mono text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded">NULL is inserted</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded shadow-sm flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">DEFAULT applies ONLY when:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">Column is omitted</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Real World & Performance */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Real World Use Cases */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden h-full">
            <div className="bg-gray-50 dark:bg-gray-800/80 p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">🔟</span> Real-World Use Cases
              </h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-4 shrink-0">
                  <div className="text-2xl">🛒</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">E-commerce</h4>
                  <code className="text-xs bg-gray-100 dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded block">order_status VARCHAR(20) DEFAULT 'Pending'</code>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-4 shrink-0">
                  <div className="text-2xl">🏦</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Banking</h4>
                  <code className="text-xs bg-gray-100 dark:bg-gray-900 text-amber-600 dark:text-amber-400 px-2 py-1 rounded block">account_status VARCHAR(20) DEFAULT 'Active'</code>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-lg mr-4 shrink-0">
                  <div className="text-2xl">🏥</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Hospital</h4>
                  <code className="text-xs bg-gray-100 dark:bg-gray-900 text-rose-600 dark:text-rose-400 px-2 py-1 rounded block">appointment_status VARCHAR(20) DEFAULT 'Scheduled'</code>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-4 shrink-0">
                  <div className="text-2xl">📊</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Analytics</h4>
                  <code className="text-xs bg-gray-100 dark:bg-gray-900 text-purple-600 dark:text-purple-400 px-2 py-1 rounded block overflow-x-auto">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</code>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Considerations */}
          <div className="lg:col-span-7 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-200 dark:border-amber-800/50">
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-amber-500" />
                Performance Considerations
              </h2>
              <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest hidden sm:block">After 15+ years in industry</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 h-[calc(100%-5rem)]">
              <div className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex flex-col justify-center">
                <Shield className="w-8 h-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Minimal Impact</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">DEFAULT has minimal performance impact on the database engine. Highly optimized.</p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex flex-col justify-center">
                <Layers className="w-8 h-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Consistency over Logic</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Improves data consistency and explicitly reduces application-side condition logic.</p>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30 flex flex-col justify-center">
                <Terminal className="w-8 h-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Preferred Method</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Preferred over manual value insertion by backend code. Database handles it natively.</p>
              </div>

              <div className="bg-amber-500 text-white p-5 rounded-xl shadow-md flex flex-col justify-center transform transition hover:scale-105">
                <h3 className="font-bold text-lg mb-2 text-white">Golden Rule</h3>
                <p className="text-amber-50 font-medium text-sm">Always define sensible defaults for your columns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="max-w-4xl mx-auto pb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <HelpCircle className="w-8 h-8 mr-3 text-indigo-500" />
          Interview-Level Questions
        </h2>

        <div className="space-y-4">
          {[
            { q: "When does DEFAULT apply?", a: "When the column is omitted in the INSERT command." },
            { q: "Does DEFAULT apply if NULL is inserted?", a: "No. If NULL is explicitly passed, NULL is inserted." },
            { q: "Can DEFAULT be used with CURRENT_TIMESTAMP?", a: "Yes, extremely common for 'created_at' columns." },
            { q: "Can a column have both DEFAULT and NOT NULL?", a: "Yes, and it is highly recommended as a best practice." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center transform transition hover:-translate-y-1">
              <div className="flex-grow">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 sm:mb-0 flex items-start">
                  <span className="text-indigo-500 mr-2">❓</span>
                  {faq.q}
                </h4>
              </div>
              <div className="sm:w-1/2 mt-3 sm:mt-0 sm:pl-6 sm:border-l border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}

          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800/30 shadow-sm mt-6">
            <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-300 mb-4 flex items-center">
              <span className="text-indigo-500 mr-2">❓</span>
              Difference between DEFAULT and CHECK?
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <span className="text-xs uppercase font-bold text-gray-500 block mb-1">DEFAULT</span>
                <span className="font-bold text-indigo-700 dark:text-indigo-400">Assigns a value</span> if one is not provided.
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <span className="text-xs uppercase font-bold text-gray-500 block mb-1">CHECK</span>
                <span className="font-bold text-purple-700 dark:text-purple-400">Validates a value</span> before it's allowed.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlDefault;