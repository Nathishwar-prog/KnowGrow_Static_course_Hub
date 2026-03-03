import React, { useState } from 'react';
import {
  ShieldAlert, AlertOctagon, Terminal, Database, ServerCrash, Skull,
  CheckCircle2, AlertTriangle, ShieldCheck, Code, Zap, FileWarning,
  Lock, Activity, TrendingDown, EyeOff, MinusCircle, Flame, FileCode,
  Check, Copy, ArrowRight, Target
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql', highlightWarning = false }: { codeSnippet: string, title?: string, language?: string, highlightWarning?: boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={`mb - 6 rounded - xl overflow - hidden border ${highlightWarning ? 'border-rose-500 shadow-rose-900/20' : 'border-gray-200 dark:border-gray-700'} shadow - sm w - full transition - all`}>
      {title && (
        <div className={`${highlightWarning ? 'bg-rose-50 dark:bg-rose-900/30' : 'bg-gray-50 dark:bg-gray-800'} px - 4 py - 2 border - b ${highlightWarning ? 'border-rose-200 dark:border-rose-800/50' : 'border-gray-200 dark:border-gray-700'} flex justify - between items - center`}>
          <span className={`text - xs font - bold uppercase tracking - wider flex items - center ${highlightWarning ? 'text-rose-600 dark:text-rose-400' : 'text-gray-500'} `}>
            {highlightWarning && <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />} {title}
          </span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className={`relative group flex - grow h - full ${highlightWarning ? 'bg-rose-950/40 dark:bg-[#1a0f12]' : 'bg-gray-900'} `}>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className={`p - 1.5 rounded - md ${highlightWarning ? 'bg-rose-900/50 text-rose-300 hover:bg-rose-600' : 'bg-gray-800 text-gray-400 hover:bg-emerald-500'} hover: text - white transition - colors border ${highlightWarning ? 'border-rose-800/50' : 'border-gray-700'} `}
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className={`p - 4 overflow - x - auto text - sm font - mono leading - relaxed min - h - full ${highlightWarning ? 'text-rose-300' : 'text-emerald-300'} `}>
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const SqlInjection: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-rose-50 to-red-50 dark:from-gray-900 dark:to-rose-950/20 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* Introduction */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-4 bg-rose-600 dark:bg-rose-600 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800 animate-pulse">
          <ShieldAlert className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-500 dark:from-rose-400 dark:to-red-300 mb-6 tracking-tight">
          What is SQL Injection?
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <p className="text-lg font-medium mb-6 leading-relaxed flex items-start">
            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mr-3 mt-1 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <span>
              <strong className="text-rose-600 dark:text-rose-400 font-bold">Definition:</strong> SQL Injection is a type of cyber attack where malicious SQL code is inserted into input fields to manipulate or access the database.
            </span>
          </p>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-2xl border border-rose-100 dark:border-rose-800/50 mb-4">
            <p className="font-bold text-rose-900 dark:text-rose-200 text-sm uppercase tracking-widest mb-2 flex items-center">
              <span className="text-2xl mr-3">👉</span> In simple words:
            </p>
            <p className="text-xl font-black text-rose-800 dark:text-rose-300 ml-9 mb-2 leading-tight">
              SQL Injection = Trick the database by injecting malicious SQL code through user input.
            </p>
          </div>
        </div>
      </header>

      {/* 🧠 2️⃣ How SQL Injection Happens */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Activity className="w-6 h-6" />
          </span>
          2️⃣ How SQL Injection Happens
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[100px] pointer-events-none"></div>

          <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center">
            <Terminal className="w-5 h-5 mr-3 text-indigo-500" /> Imagine a login system:
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <CodeSnippetBlock codeSnippet={`SELECT * FROM Users
WHERE username = 'user_input'
AND password = 'user_input'; `} title="Original Query" />

              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-inner mt-6">
                <p className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide text-xs mb-2">If user types:</p>
                <p className="font-mono text-lg font-black text-gray-900 dark:text-white bg-white dark:bg-black/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                  ' OR '1'='1
                </p>
              </div>
            </div>

            <div>
              <CodeSnippetBlock codeSnippet={`SELECT * FROM Users
WHERE username = '' OR '1' = '1'
AND password = ''; `} title="Manipulated Query" highlightWarning={true} />

              <div className="bg-rose-100 dark:bg-rose-900/40 p-5 rounded-xl border border-rose-300 dark:border-rose-700/50 mt-6 shadow-sm inline-flex items-center w-full">
                <div className="text-4xl mr-4 drop-shadow-sm">😨</div>
                <div>
                  <p className="font-bold text-rose-800 dark:text-rose-200 text-sm">Since <code className="bg-rose-200 dark:bg-rose-800 px-1 py-0.5 rounded text-rose-900 dark:text-rose-100 mx-1">'1'='1'</code> is always TRUE <span className="text-2xl ml-1 leading-none align-middle">→</span></p>
                  <p className="text-xl font-black text-rose-600 dark:text-rose-400 mt-1">Login bypassed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 3️⃣ Real Attack Example */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">🔥</span> 3️⃣ Real Attack Example
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 w-full">
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Suppose login form Username:</p>
              <div className="bg-black border border-rose-500/50 p-4 rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.2)] font-mono text-xl text-rose-400 font-black mb-6 flex items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500 animate-pulse"></div>
                <span className="opacity-50 text-gray-500 mr-2">{'>'}</span> admin' --
              </div>

              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Query becomes:</p>
              <CodeSnippetBlock codeSnippet={`SELECT * FROM Users
WHERE username = 'admin' --'
AND password = ''; `} language="sql" highlightWarning={true} />
            </div>

            <div className="flex-1 w-full bg-gray-800/80 p-6 rounded-2xl border border-gray-700 shadow-inner">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileCode className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                  <p className="text-gray-300 font-medium text-sm"><code className="text-rose-400 font-bold bg-black/40 px-2 rounded">--</code> means <strong className="text-white">comment</strong> → Password check ignored.</p>
                </div>
                <div className="h-px bg-gray-700 w-full"></div>
                <div className="flex items-start bg-rose-900/30 p-4 rounded-xl border border-rose-500/30 shadow-sm">
                  <Skull className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
                  <p className="text-white font-bold text-lg">Attacker logs in without password.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚠ 4️⃣ Types of SQL Injection */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">⚠</span> 4️⃣ Types of SQL Injection
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative group">
            <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/10 rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-indigo-500 mr-3 text-2xl">🔹 1️⃣</span> Authentication Bypass
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-sm">
              Login without password.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-orange-200 dark:border-orange-800/50 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-2 bg-orange-500 h-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-orange-500 mr-3 text-2xl">🔹 2️⃣</span> Data Extraction
            </h3>
            <code className="block bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 p-3 rounded-lg text-xs font-mono border border-orange-200 dark:border-orange-800/50 mb-3 shadow-inner">
              ' UNION SELECT username, password FROM Users --
            </code>
            <p className="text-rose-600 dark:text-rose-400 font-bold text-sm flex items-center"><Activity className="w-4 h-4 mr-2" /> Steals database credentials.</p>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-rose-300 dark:border-rose-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-2 bg-rose-600 h-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-rose-600 mr-3 text-2xl">🔹 3️⃣</span> Data Deletion
            </h3>
            <code className="block bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 p-3 rounded-lg text-xs font-mono border border-rose-200 dark:border-rose-800/50 mb-3 shadow-inner">
              '; DROP TABLE Users; --
            </code>
            <p className="text-rose-700 dark:text-rose-500 font-black text-sm flex items-center uppercase tracking-wider"><ServerCrash className="w-4 h-4 mr-2" /> Deletes entire table.</p>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm relative group">
            <div className="absolute top-0 right-0 w-12 h-12 bg-gray-500/10 rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="text-gray-500 mr-3 text-2xl">🔹 4️⃣</span> Blind SQL Injection
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-sm flex items-center">
              <EyeOff className="w-4 h-4 mr-2 text-gray-500" /> Used when error messages are hidden.
            </p>
          </div>
        </div>
      </section>

      {/* 🧠 5️⃣ Why SQL Injection is Dangerous */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-rose-600 text-white rounded-3xl p-8 border border-rose-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Skull className="w-48 h-48" />
          </div>

          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10 text-white">
            <span className="bg-white/20 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm border border-white/30">
              <AlertOctagon className="w-8 h-8 text-white" />
            </span>
            5️⃣ Why SQL Injection is Dangerous
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 relative z-10">
            {[
              { text: "Data theft", icon: <Lock className="w-5 h-5" /> },
              { text: "Data corruption", icon: <FileWarning className="w-5 h-5" /> },
              { text: "Database deletion", icon: <ServerCrash className="w-5 h-5" /> },
              { text: "Financial fraud", icon: <TrendingDown className="w-5 h-5" /> },
              { text: "Legal consequences", icon: <AlertTriangle className="w-5 h-5" /> },
              { text: "Reputation damage", icon: <MinusCircle className="w-5 h-5" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/20 backdrop-blur-md p-4 rounded-xl flex items-center shadow-sm border border-white/10 hover:bg-black/30 transition-colors">
                <span className="text-rose-200 mr-3 shrink-0">{item.icon}</span>
                <span className="font-bold text-white text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 relative z-10">
            <p className="font-black text-white text-lg mb-4 text-center tracking-wide">Major companies have suffered due to poor input validation.</p>

            <div className="bg-black/30 p-5 rounded-xl border border-white/10">
              <h4 className="font-bold text-rose-200 uppercase tracking-widest text-xs mb-3 flex items-center">
                <span className="text-xl mr-2">🌍</span> Real-World Impact
              </h4>
              <p className="text-white/90 text-sm mb-3 font-medium leading-relaxed">Many security breaches have happened due to SQL injection vulnerabilities.</p>
              <p className="text-white/80 text-sm italic">For example, platforms like Sony and Yahoo experienced massive data breaches (not only SQL injection, but poor database security contributed to vulnerabilities).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗 6️⃣ How to Prevent SQL Injection (MOST IMPORTANT) */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center">
            <span className="text-4xl mr-4 drop-shadow-md">🏗</span> 6️⃣ How to Prevent SQL Injection
          </h2>
          <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-black uppercase text-xs px-3 py-1.5 rounded-full mt-4 sm:mt-0 shadow-sm border border-emerald-200 dark:border-emerald-800/50 flex items-center w-max">
            <ShieldCheck className="w-4 h-4 mr-2" /> Most Important Part
          </span>
        </div>

        <div className="space-y-8">

          {/* 1. Prepared Statements */}
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-4 h-full bg-emerald-500 rounded-r-3xl"></div>
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
              <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 w-10 h-10 rounded-xl flex items-center justify-center mr-4 text-lg shadow-sm">✅</span>
              1️⃣ Use Prepared Statements <span className="bg-emerald-600 text-white text-[10px] uppercase px-2 py-1 rounded ml-4 font-black tracking-widest shadow-sm hidden sm:block">Best Practice</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-bold text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-1.5" /> Instead of:</p>
                <div className="bg-white dark:bg-gray-900 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 font-mono text-xs text-rose-500 overflow-x-auto shadow-inner">
                  const query = "SELECT * FROM Users WHERE username = '" + username + "'";
                </div>
              </div>
              <div>
                <p className="font-bold text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-wider mb-2 flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5" /> Use:</p>
                <div className="bg-white dark:bg-gray-900 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400 overflow-x-auto shadow-inner">
                  <p>const query = "SELECT * FROM Users WHERE username = <strong className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 px-1 py-0.5 rounded mx-1">?</strong>";</p>
                  <p className="mt-2 text-indigo-500">connection.execute(query, [username]);</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 inline-block font-bold text-emerald-800 dark:text-emerald-300 text-sm shadow-sm">
              Prepared statements treat input as <strong className="text-emerald-600 dark:text-emerald-400 text-base mx-1 bg-emerald-100 dark:bg-transparent px-1 rounded">data</strong>, not SQL code.
            </div>
          </div>

          {/* 2. Parameterized Queries */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex flex-col sm:flex-row sm:items-center">
              <span className="flex items-center"><span className="text-emerald-500 mr-3 text-2xl">✅</span> 2️⃣ Parameterized Queries</span>
              <span className="text-gray-500 text-sm font-medium mt-1 sm:mt-0 sm:ml-2">(Example in Node.js)</span>
            </h3>
            <CodeSnippetBlock codeSnippet={`connection.execute(
  "SELECT * FROM Users WHERE username = ? AND password = ?",
  [username, password]
); `} language="javascript" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 3. ORM */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">✅</span> 3️⃣ Use ORM
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tools like:</p>
              <ul className="mb-4 space-y-2">
                <li className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-800/50 text-sm inline-block shadow-sm">Sequelize</li>
                <li className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-bold px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800/50 text-sm inline-block shadow-sm ml-2">Hibernate</li>
                <li className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 font-bold px-3 py-1.5 rounded-lg border border-purple-100 dark:border-purple-800/50 text-sm inline-block shadow-sm mt-2">Entity Framework</li>
              </ul>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-auto bg-gray-50 dark:bg-gray-900/50 p-2 rounded-lg text-center">Automatically handle parameter binding.</p>
            </div>

            {/* 4. Input Validation */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">✅</span> 4️⃣ Input Validation
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Validate:</p>
              <div className="mt-auto space-y-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Length</div>
                <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Format</div>
                <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Allowed characters</div>
              </div>
            </div>

            {/* 5. Least Privilege */}
            <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-rose-900 dark:text-rose-300 mb-4 flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">✅</span> 5️⃣ Least Privilege
              </h3>
              <p className="text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-widest mb-3">Database user should NOT have:</p>
              <div className="mt-auto space-y-2 text-sm font-bold text-rose-700 dark:text-rose-300">
                <div className="flex items-center bg-white/60 dark:bg-black/20 p-2 rounded-lg border border-rose-100 dark:border-rose-800/50"><XCircle className="w-4 h-4 mr-2 text-rose-500" /> DROP TABLE perm</div>
                <div className="flex items-center bg-white/60 dark:bg-black/20 p-2 rounded-lg border border-rose-100 dark:border-rose-800/50"><XCircle className="w-4 h-4 mr-2 text-rose-500" /> Admin rights</div>
                <div className="flex items-center bg-white/60 dark:bg-black/20 p-2 rounded-lg border border-rose-100 dark:border-rose-800/50"><XCircle className="w-4 h-4 mr-2 text-rose-500" /> Unnecessary access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 7️⃣ Vulnerable vs Secure Code Comparison */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex justify-center items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Code className="w-6 h-6" />
          </span>
          7️⃣ Vulnerable vs Secure Code Comparison
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col md:flex-row text-left">
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 bg-rose-50/50 dark:bg-rose-900/10">
            <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 flex items-center mb-6">
              <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 w-8 h-8 rounded-full flex items-center justify-center mr-3"><XCircle className="w-5 h-5" /></span> Vulnerable
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT * FROM Users
WHERE username = ' " + userInput + " '; `} language="sql" highlightWarning={true} />
            <p className="text-sm font-bold text-rose-800 dark:text-rose-300 mt-4 text-center bg-rose-100 dark:bg-rose-900/40 p-2 rounded-lg border border-rose-200 dark:border-rose-800/50">Direct concatenation invites attack</p>
          </div>

          <div className="flex-1 p-8 bg-emerald-50/50 dark:bg-emerald-900/10">
            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center mb-6">
              <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center mr-3"><CheckCircle2 className="w-5 h-5" /></span> Secure
            </h3>
            <CodeSnippetBlock codeSnippet={`SELECT * FROM Users
WHERE username = ?; `} language="sql" />
            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mt-4 text-center bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800/50">Parameters sanitize input automatically</p>
          </div>
        </div>
      </section>

      {/* 📊 8️⃣ How SQL Injection Works Internally */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex justify-center items-center">
          <span className="text-4xl mr-4 drop-shadow-md">📊</span> 8️⃣ How SQL Injection Works Internally
        </h2>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-br-full blur-2xl pointer-events-none"></div>

          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-8">Flow:</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 relative z-10 w-full overflow-x-auto pb-4">
            <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl font-bold text-white shadow-lg min-w-[120px]">User Input</div>
            <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
            <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl font-bold text-white shadow-lg min-w-[120px]">Web App</div>
            <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
            <div className="bg-gray-800 border border-rose-500/50 p-4 rounded-xl font-bold text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)] min-w-[120px]">SQL Query</div>
            <ArrowRight className="w-6 h-6 text-rose-500 hidden md:block" />
            <div className="bg-rose-900/40 border border-rose-500 p-4 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] min-w-[120px]">Database</div>
          </div>

          <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-2xl max-w-lg mx-auto relative z-10">
            <p className="font-black text-rose-400 text-sm sm:text-base">If input not sanitized → Injection occurs</p>
          </div>

          {/* Visual Placeholder for "4" from user's content */}
          <div className="absolute top-8 right-8 bg-black/30 w-16 h-16 rounded-full flex items-center justify-center border border-white/5 opacity-50">
            <span className="text-3xl font-black text-gray-700">4</span>
          </div>
        </div>
      </section>

      {/* 🎯 9️⃣ Real-World Developer Responsibility */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-3xl p-8 border border-indigo-500 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>

          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="bg-white/20 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm border border-white/30">
              <ShieldCheck className="w-8 h-8 text-white" />
            </span>
            9️⃣ Developer Responsibility
          </h2>

          <p className="font-bold text-indigo-100 uppercase tracking-widest text-sm mb-6 relative z-10 bg-black/20 px-4 py-2 rounded-lg inline-block">As a backend developer:</p>

          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 flex items-center shadow-sm">
              <div className="bg-emerald-500 p-1.5 rounded-full mr-4 shadow-md"><Check className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-white">Always use parameterized queries</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 flex items-center shadow-sm">
              <div className="bg-rose-500 p-1.5 rounded-full mr-4 shadow-md"><AlertTriangle className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-white">Never trust user input</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 flex items-center shadow-sm">
              <div className="bg-blue-500 p-1.5 rounded-full mr-4 shadow-md"><EyeOff className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-white">Hide database error messages</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 flex items-center shadow-sm">
              <div className="bg-purple-500 p-1.5 rounded-full mr-4 shadow-md"><Activity className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-white">Monitor logs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 flex items-center shadow-sm sm:col-span-2 md:col-span-1">
              <div className="bg-amber-500 p-1.5 rounded-full mr-4 shadow-md"><ShieldAlert className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-white">Use Web Application Firewall</span>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 10️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">💡</span> 10️⃣ My 15+ Years Professional Advice
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">

          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-rose-200 dark:border-rose-900/50 shadow-sm relative group overflow-hidden border-l-4 border-l-rose-500 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[100px] transition-transform group-hover:scale-125 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">1</span>
              Never Concatenate User Input in SQL
            </h3>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800/30 font-bold text-rose-800 dark:text-rose-300 flex items-center h-[calc(100%-4rem)] justify-center text-center shadow-sm">
              <AlertTriangle className="w-6 h-6 mr-3 shrink-0 text-rose-500" />
              <span className="text-lg uppercase tracking-wide">This is the biggest beginner mistake.</span>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] transition-transform group-hover:scale-125 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">2</span>
              Always Use Prepared Statements
            </h3>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30 font-black text-emerald-800 dark:text-emerald-400 mt-auto text-center shadow-sm flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-emerald-500" /> Even for small projects.
            </div>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] transition-transform group-hover:scale-125 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">3</span>
              Disable Detailed Error Messages in Production
            </h3>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30 font-bold text-amber-900 dark:text-amber-300 mt-auto flex items-start shadow-sm">
              <EyeOff className="w-5 h-5 mr-3 shrink-0 text-amber-500 mt-0.5" />
              Attackers use error messages to craft injection.
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[100px] transition-transform group-hover:scale-125 pointer-events-none"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg font-black shrink-0">4</span>
              Learn Basic Security Along with SQL
            </h3>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 font-bold text-white mt-auto text-center shadow-lg relative overflow-hidden group/inner">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 opacity-0 group-hover/inner:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center justify-center text-sm md:text-base tracking-wide"><ShieldAlert className="w-5 h-5 mr-2 text-rose-500" /> Database knowledge without security is dangerous.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 🧪 11️⃣ Practice Exercises */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 border border-indigo-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="text-4xl mr-4 drop-shadow-md">🧪</span> 11️⃣ Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {[
              "Write vulnerable login query",
              "Convert it into prepared statement",
              "Create parameterized query example",
              "Simulate simple injection test",
              "Explain why UNION injection works"
            ].map((task, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex items-center shadow-sm hover:bg-white/20 transition-colors cursor-default">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 shrink-0">{idx + 1}</div>
                <span className="font-medium text-sm sm:text-base leading-tight">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// SVG component missing from lucide-react in previous versions
const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

export default SqlInjection;