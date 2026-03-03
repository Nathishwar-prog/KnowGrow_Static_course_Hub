import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Lightbulb, Table2, ShieldCheck, AlertTriangle, ArrowRight, Zap, ListOrdered, CheckCircle, DatabaseZap, XCircle, Users, Target } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group">
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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-emerald-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlAutoIncrement: React.FC = () => {
  // Simulator State
  type UserType = { id: number | string; name: string };
  const [labUsers, setLabUsers] = useState<UserType[]>([
    { id: 1, name: 'Arjun' },
    { id: 2, name: 'Meena' },
    { id: 3, name: 'Ravi' }
  ]);
  const [nextAutoInc, setNextAutoInc] = useState<number>(4);
  const [simError, setSimError] = useState<string | null>(null);

  const pendingNames = ['Priya', 'Karthik', 'Aisha', 'John', 'Vikram'];

  const handleInsert = () => {
    setSimError(null);
    if (labUsers.length >= 8) {
      setSimError("Table is getting full for this demo!");
      return;
    }
    const newName = pendingNames[labUsers.length % pendingNames.length];
    setLabUsers([...labUsers, { id: nextAutoInc, name: newName }]);
    setNextAutoInc(nextAutoInc + 1);
  };

  const handleDelete = (idToRemove: number | string) => {
    setSimError(null);
    setLabUsers(labUsers.filter(u => u.id !== idToRemove));
    // Notice we DO NOT decrement nextAutoInc. Gaps are intentional.
  };

  const handleManualInsert = () => {
    setSimError(null);
    if (labUsers.length === 0) return;
    // Attempting to manually insert an ID that already exists
    const existingId = labUsers[0].id;
    setSimError(`Primary Key Constraint Violation! ID ${existingId} already exists.`);
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
          <ListOrdered className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          SQL Auto Increment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A database feature that automatically generates a unique number whenever a new record is inserted. Say goodbye to managing ID counters manually!
        </p>
      </header>

      {/* Definitions & Importance */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-xl mr-2">📌</span> Definition
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium">
              <code className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-1 rounded font-bold">AUTO_INCREMENT</code> automatically increases a column's value by 1 (by default) for each new row.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
              <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">Mostly used with:</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-800 dark:text-gray-200"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Primary keys</li>
                <li className="flex items-center text-gray-800 dark:text-gray-200"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2" /> Default ID columns</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-800/30 h-full">
            <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center">
              2️⃣ Why it is Important?
            </h2>
            <p className="text-indigo-800 dark:text-indigo-200 mb-6 font-medium">In real-world scalable systems, the database handles IDs automatically rather than you calculating them in application code.</p>

            <div className="space-y-3">
              <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <Users className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Each user needs a unique ID</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-xl mr-3 shrink-0">🛒</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Each order needs a unique order number</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <span className="text-xl mr-3 shrink-0">💳</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Each transaction needs a unique reference</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Bad Practice vs Syntax Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          3️⃣ Example Without AUTO INCREMENT
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-200 dark:border-red-800/30">
            <div className="text-red-600 dark:text-red-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" /> Bad Practice (Manual IDs)
            </div>

            <CodeSnippetBlock codeSnippet={`CREATE TABLE Users (\n    user_id INT PRIMARY KEY,\n    name VARCHAR(50)\n);\n\n-- You must manually assign IDs:\nINSERT INTO Users VALUES (1, 'Arjun');\nINSERT INTO Users VALUES (2, 'Meena');`} />

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-red-100 dark:border-red-900/50 mt-4">
              <p className="font-bold text-red-800 dark:text-red-300 mb-2">❌ Problems:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
                <li>You must query the max ID globally before inserting.</li>
                <li>Risk of duplicate value crash in concurrent environments.</li>
                <li>Extremely non-scalable.</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
            <div className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> Good Practice (MySQL Syntax)
            </div>

            <CodeSnippetBlock codeSnippet={`CREATE TABLE Users (\n    user_id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(50)\n);\n\n-- The DB assigns IDs automatically:\nINSERT INTO Users (name) VALUES ('Arjun');\nINSERT INTO Users (name) VALUES ('Meena');`} />

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/50 mt-4">
              <p className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">✅ Advantages:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Zero application-side manual counting.</li>
                <li>Thread-safe sequential generation.</li>
                <li>Highly scalable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Database Dialect syntax */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 pb-2">
          <div className="bg-black/40 p-6 border-b border-gray-800 mb-6 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center">
              <DatabaseZap className="w-6 h-6 mr-3 text-cyan-400" />
              Cross-Database Syntax
            </h2>
            <span className="text-gray-400 text-sm italic mt-2 md:mt-0">Every DB has its own keyword</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 px-6 lg:px-10 pb-8">
            {/* MySQL */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest text-center border-b border-gray-700 pb-2">4️⃣ MySQL</h3>
              <CodeSnippetBlock title="Table Def" codeSnippet={`user_id INT AUTO_INCREMENT PRIMARY KEY`} />
            </div>

            {/* SQL Server */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h3 className="text-rose-400 font-bold mb-4 uppercase text-sm tracking-widest text-center border-b border-gray-700 pb-2">5️⃣ SQL Server</h3>
              <CodeSnippetBlock title="IDENTITY(Start, Increment)" codeSnippet={`user_id INT IDENTITY(1,1) PRIMARY KEY`} />
            </div>

            {/* PostgreSQL */}
            <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
              <h3 className="text-emerald-400 font-bold mb-4 uppercase text-sm tracking-widest text-center border-b border-gray-700 pb-2">6️⃣ PostgreSQL</h3>
              <CodeSnippetBlock title="Uses SERIAL Type" codeSnippet={`user_id SERIAL PRIMARY KEY`} />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Settings */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          Advanced Generation Rules
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7️⃣ Custom Starting Value</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">You can instruct a table to start generating IDs from a specific large number (like 1000) so customer facing order numbers look professional.</p>
            <CodeSnippetBlock codeSnippet={`CREATE TABLE Orders (\n    order_id INT AUTO_INCREMENT PRIMARY KEY,\n    order_name VARCHAR(50)\n) AUTO_INCREMENT = 1000;`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8️⃣ Changing Value Later</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">If you migrate data or need to jump the sequence, you can alter the system internally.</p>
            <CodeSnippetBlock codeSnippet={`ALTER TABLE Users AUTO_INCREMENT = 500;`} />
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 py-2 px-3 rounded inline-block">The next inserted row will start from 500.</p>
          </div>
        </div>
      </section>

      {/* Interactive Gaps Simulator Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-10 rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700">

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-300 dark:border-gray-700 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                <Terminal className="w-7 h-7 mr-3 text-emerald-500" />
                9️⃣ Interactive Deletions & Gaps Lab
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">See what happens when rows are deleted. AutoIncrement counters do <strong className="text-rose-500">NOT</strong> go backward.</p>
            </div>
            <div className="bg-gray-900 text-emerald-400 font-mono text-sm px-4 py-2 rounded-lg border border-emerald-900 mt-4 md:mt-0 shadow-inner">
              Internal Counter: <span className="font-bold text-lg">{nextAutoInc}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Control Panel */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm relative">
                {simError && (
                  <div className="absolute -top-12 left-0 right-0 bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-300 text-sm font-bold p-3 rounded-lg border border-red-200 dark:border-red-800 shadow-lg animate-bounce flex justify-between items-center">
                    <span>{simError}</span>
                    <button onClick={() => setSimError(null)}><XCircle className="w-4 h-4" /></button>
                  </div>
                )}

                <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Simulate Queries</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleInsert}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>INSERT INTO Users (name) VALUES (...)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleManualInsert}
                    className="w-full bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-700 dark:text-red-400 font-bold py-3 px-4 rounded-lg flex items-center justify-between transition-colors border border-red-200 dark:border-red-800 shadow-sm"
                  >
                    <span>INSERT Manual Conflict ❌</span>
                    <AlertTriangle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-xl border-l-4 border-amber-500 shadow-sm">
                <h4 className="font-bold flex items-center text-amber-900 dark:text-amber-500 mb-2">
                  <Lightbulb className="w-5 h-5 mr-2" /> Important Concept: Gaps in ID
                </h4>
                <p className="text-gray-700 dark:text-gray-300 font-bold mb-2 text-sm">Many beginners panic when IDs skip numbers. This is normal database behavior!</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">IDs are meant to be unique references — not a continuous contiguous timeline.</p>
                <div className="text-xs text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 p-2 rounded">
                  <strong className="block mb-1 text-gray-800 dark:text-gray-200">Reasons for gaps:</strong>
                  Deletions • Failed transactions • Rollbacks
                </div>
              </div>
            </div>

            {/* Live Table */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm h-full flex flex-col">
                <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="font-bold flex items-center text-gray-600 dark:text-gray-400 uppercase text-sm">
                    <Table2 className="w-4 h-4 mr-2" />
                    Live Users Table
                  </div>
                  <div className="text-xs bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded font-bold">
                    {labUsers.length} rows
                  </div>
                </div>

                <div className="flex-grow bg-gray-50 dark:bg-gray-900/50 p-4">
                  <table className="w-full text-left text-sm bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-t">
                      <tr>
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold shrink-0 w-24">user_id</th>
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold">name</th>
                        <th className="px-5 py-3 border-b dark:border-gray-700 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                      {labUsers.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-5 py-8 text-center text-gray-400 italic">Table is completely empty.</td>
                        </tr>
                      ) : (
                        labUsers.map(user => (
                          <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors animate-fade-in">
                            <td className="px-5 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{user.id}</td>
                            <td className="px-5 py-3 font-medium text-gray-800 dark:text-gray-200">{user.name}</td>
                            <td className="px-5 py-3 text-right">
                              <button
                                onClick={() => handleDelete(user.id)}
                                className="text-xs bg-red-100 dark:bg-red-900/30 font-bold text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800/50 px-3 py-1.5 rounded transition-colors"
                              >
                                DELETE
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {labUsers.length > 0 && labUsers.length < 8 && (
                    <p className="text-center text-xs text-gray-400 mt-4 italic">Try deleting a row, and then inserting a new one. The ID will skip over the deleted gap!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* 15+ Yrs Exp Performance */}
          <div className="lg:col-span-8 bg-gray-900 p-8 rounded-3xl border border-gray-800 h-full shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 text-emerald-500/10 w-64 h-64 blur-3xl rounded-full"></div>

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-emerald-400" />
              ⚡ Performance & Scaling Advice
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">Crucial (15+ Years in Production)</p>

            <div className="space-y-8 relative z-10">
              {/* Tip 1 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 1. Use INT vs BIGINT Wisely</h3>
                <div className="flex bg-black/50 p-3 rounded-lg border border-gray-800 mb-3 items-center">
                  <div className="w-1/2 text-center border-r border-gray-800">
                    <div className="text-emerald-400 font-bold font-mono">INT</div>
                    <div className="text-gray-400 text-sm">~2 Billion limit</div>
                  </div>
                  <div className="w-1/2 text-center">
                    <div className="text-purple-400 font-bold font-mono">BIGINT</div>
                    <div className="text-gray-400 text-sm">Very large limit</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm bg-gray-800/50 p-3 rounded-lg border-l-2 border-emerald-500">If your system expects millions of records rapidly spanning years → immediately use BIGINT.</p>
              </div>

              {/* Tip 2 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 2. Resetting Production Defaults</h3>
                <div className="bg-rose-900/20 border-l-4 border-rose-500 p-3 rounded-r-lg">
                  <code className="text-xs font-mono block text-rose-300 mb-2">ALTER TABLE Users AUTO_INCREMENT = 1;</code>
                  <p className="text-rose-400 text-sm font-bold">⚠ Dangerous. Never manually reset this if production records exist.</p>
                </div>
              </div>

              {/* Tip 3 */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-white"><span className="text-xl mr-2">🔥</span> 3. Distributed High-Scale Systems</h3>
                <p className="text-gray-300 text-sm mb-3">Auto Increment counters rely on single-node locking structures. In large-scale multi-server systems they become bottlenecks.</p>
                <p className="text-emerald-400 text-sm font-bold bg-emerald-900/10 p-2 rounded">
                  <CheckCircle className="inline w-4 h-4 mr-1" /> Architectures like Twitter shift to massive <span className="underline decoration-wavy">Snowflake ID</span> generation or completely decentralized <span className="underline decoration-wavy">UUIDs</span> instead.
                </p>
              </div>
            </div>
          </div>

          {/* Beginner Mistakes Outline */}
          <div className="lg:col-span-4 flex flex-col space-y-8 h-full">

            {/* Interview logic */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-2xl shadow-sm border border-indigo-200 dark:border-indigo-800/30 flex-grow">
              <h3 className="text-indigo-900 dark:text-indigo-300 font-bold mb-4 flex items-center border-b border-indigo-200 dark:border-indigo-800/50 pb-2">
                <Target className="w-5 h-5 mr-2 text-indigo-500" />
                🔎 Interview-Level Concept
              </h3>
              <div className="mb-4">
                <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider">Question:</span>
                <p className="text-gray-800 dark:text-gray-200 font-bold text-sm">Why shouldn’t AUTO_INCREMENT be used as a business logic ID? (e.g. Order #1001)</p>
              </div>
              <div>
                <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Answer: Because:</span>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mt-2 font-medium">
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-indigo-400" /> IDs can have gaps</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-indigo-400" /> IDs can drastically mutate during database migrations</li>
                  <li className="flex items-start"><ArrowRight className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-indigo-400" /> Not guaranteed sequential per business rules</li>
                </ul>
                <p className="mt-4 text-sm font-bold text-indigo-800 dark:text-indigo-200 bg-white dark:bg-gray-800 p-2 rounded text-center shadow-sm border border-indigo-100 dark:border-indigo-900/40">Use a separate <code className="font-mono text-xs bg-gray-100 dark:bg-gray-900 px-1 rounded">order_number</code> column alongside the primary key.</p>
              </div>
            </div>

            {/* Mistakes */}
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl shadow-sm border border-red-200 dark:border-red-800/30 h-fit">
              <h2 className="text-lg font-extrabold text-red-800 dark:text-red-400 mb-4 flex items-center border-b border-red-200 dark:border-red-800/50 pb-2">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" /> Common Mistakes
              </h2>
              <ul className="space-y-3">
                {[
                  'Forgetting to configure the PRIMARY KEY constraint entirely.',
                  'Trying to manually force inserts into AUTO_INCREMENT columns causing ID collisions.',
                  'Expecting IDs to be totally gapless and sequentially perfect.',
                  'Resetting AUTO_INCREMENT back to 1 in a live production environment.',
                  'Using standard INT scales for tables that will hold tens of billions of data points.'
                ].map((err, i) => (
                  <li key={i} className="flex items-start text-xs font-medium text-gray-700 dark:text-gray-300">
                    <XCircle className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                    <span>{err}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlAutoIncrement;