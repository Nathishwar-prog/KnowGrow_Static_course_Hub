import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, ShieldAlert, ArrowRight, Zap, Target, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, RefreshCw, Hand, Lock, Columns, UserSquare2, Shield, CalendarDays } from 'lucide-react';

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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-teal-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlCheck: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'range' | 'in' | 'table'>('single');

  // Interactive Validation Lab Configurations
  const getLabContent = () => {
    switch (activeTab) {
      case 'single':
        return {
          title: "Simple Mathematical Check",
          icon: <Target className="w-5 h-5 mr-2 text-teal-500" />,
          desc: "Validates a single column numerically. In this case, preventing a negative salary from breaking payroll.",
          code: "CREATE TABLE Employees (\n  emp_id INT PRIMARY KEY,\n  name VARCHAR(50),\n  salary INT CHECK (salary %gt; 0)\n);\n\n-- ✅ VALID\nINSERT INTO Employees VALUES (1, 'Arjun', 50000);\n\n-- ❌ FAILS: Constraint Violated\nINSERT INTO Employees VALUES (2, 'Meena', -4000);",
          constraintBadge: "CHECK (salary > 0)",
          validations: [
            { query: "INSERT (1, 'Arjun', 50000)", result: true, reason: "50000 > 0 evaluates TRUE" },
            { query: "INSERT (2, 'Meena', -4000)", result: false, reason: "-4000 is NOT > 0 (Execution Fails entirely)" }
          ]
        };
      case 'range':
        return {
          title: "BETWEEN Age Range Limit",
          icon: <UserSquare2 className="w-5 h-5 mr-2 text-blue-500" />,
          desc: "Uses the BETWEEN operator directly in the table schema to ensure human-realistic inputs.",
          code: "CREATE TABLE Staff (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  age INT CHECK (age BETWEEN 18 AND 60)\n);\n\n-- ❌ FAILS: Underage\nINSERT INTO Staff VALUES (1, 'Ravi', 15);",
          constraintBadge: "CHECK (age BETWEEN 18 AND 60)",
          validations: [
            { query: "INSERT (2, 'Priya', 29)", result: true, reason: "29 is between 18 and 60" },
            { query: "INSERT (1, 'Ravi', 15)", result: false, reason: "15 < 18 (Execution Fails)" },
            { query: "INSERT (3, 'Boss', 200)", result: false, reason: "200 > 60 (Execution Fails, prevents data corruption)" }
          ]
        };
      case 'in':
        return {
          title: "Restrict by IN List",
          icon: <Shield className="w-5 h-5 mr-2 text-purple-500" />,
          desc: "Forces a string column to only accept a hardcoded dictionary array of exact matching strings.",
          code: "CREATE TABLE Students (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other'))\n);\n\n-- ❌ FAILS: Random Text\nINSERT INTO Students VALUES (1, 'Karthik', 'Alien');",
          constraintBadge: "CHECK (gender IN ('Male', 'Female', 'Other'))",
          validations: [
            { query: "INSERT (1, 'Karthik', 'Male')", result: true, reason: "String exactly matches list item" },
            { query: "INSERT (2, 'Error', 'Alien')", result: false, reason: "'Alien' is not in the allowed IN array." },
            { query: "INSERT (3, 'Error', 'male')", result: false, reason: "'male' fails (case-sensitive check depending on DB collation)" }
          ]
        };
      case 'table':
        return {
          title: "Table-Level (Multi-Column) Check",
          icon: <CalendarDays className="w-5 h-5 mr-2 text-rose-500" />,
          desc: "Extremely advanced. Compares two entirely different columns against each other inside the same row upon insertion.",
          code: "CREATE TABLE Projects (\n  project_id INT PRIMARY KEY,\n  start_date DATE,\n  end_date DATE,\n  CHECK (end_date %gt; start_date) -- Table Level\n);\n\n-- ❌ FAILS: Cannot end before it begins!\nINSERT INTO Projects VALUES (1, '2026-05-01', '2026-04-01');",
          constraintBadge: "CHECK (end_date > start_date)",
          validations: [
            { query: "INSERT (1, '2026-01-01', '2026-12-31')", result: true, reason: "Dec > Jan evaluates TRUE" },
            { query: "INSERT (2, '2026-05-01', '2026-04-01')", result: false, reason: "April is NOT greater than May. (Prevents impossible timelines)" }
          ]
        };
    }
  };

  const lab = getLabContent();
  const rawGreaterCode = lab.code.replace(/%gt;/g, '>'); // Escaping React rendering overlap

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-900 dark:to-teal-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-6 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
          <Hand className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL CHECK
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate data guardian. Stop bad data instantly by enforcing business logic directly inside the table schema before writing rows.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 opacity-5"><ShieldAlert className="w-64 h-64" /></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center relative z-10">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" /> Why CHECK Constraints?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium relative z-10 mb-6 text-lg">
              Without CHECK logic built into the database engine, catastrophic UI bugs can insert impossible data:
            </p>

            <ul className="space-y-4 relative z-10">
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Negative Paychecks (Salary = -5000)
              </li>
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Immortality (Age = 200)
              </li>
              <li className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-800 dark:text-red-300 text-sm font-bold border border-red-100 dark:border-red-900/40">
                <AlertTriangle className="w-4 h-4 mr-3 shrink-0" /> Time Travel (End Date &lt; Start Date)
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 dark:bg-black p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
              <Columns className="w-6 h-6 mr-3 text-teal-400" /> Structural Syntax
            </h2>

            <div className="space-y-4 relative z-10">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Column-Level (Attached to 1 field)</p>
                <code className="block w-full bg-black border border-gray-800 p-3 rounded-lg text-sm text-teal-200 font-mono">
                  col_name <span className="text-indigo-400">datatype</span> <span className="text-rose-400 font-bold">CHECK ( condition )</span>
                </code>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-500 text-xs font-bold w-full my-2">
                <div className="flex-grow h-px bg-gray-600 dark:bg-gray-800"></div>
                <span className="px-3 uppercase tracking-widest text-[10px]">OR</span>
                <div className="flex-grow h-px bg-gray-600 dark:bg-gray-800"></div>
              </div>

              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Table-Level (Compares multiple fields)</p>
                <code className="block w-full bg-black border border-gray-800 p-3 rounded-lg text-sm text-teal-200 font-mono">
                  <span className="text-rose-400 font-bold">CHECK ( col1 &gt; col2 )</span>
                </code>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Validation Engine Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row overflow-x-auto shadow-inner">
            {[
              { id: 'single', label: 'Simple Num', icon: <Target className="w-4 h-4 mr-2" /> },
              { id: 'range', label: 'BETWEEN Range', icon: <UserSquare2 className="w-4 h-4 mr-2" /> },
              { id: 'in', label: 'IN Array', icon: <Shield className="w-4 h-4 mr-2" /> },
              { id: 'table', label: 'Table Level (x > y)', icon: <CalendarDays className="w-4 h-4 mr-2" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap flex-grow sm:flex-grow-0 px-6 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activeTab === tab.id ? 'border-teal-500 text-teal-600 dark:text-teal-400 bg-white dark:bg-gray-800' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
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
                <CodeSnippetBlock codeSnippet={rawGreaterCode} title="Schema & Simulation Query" />
              </div>
            </div>

            {/* Right Live Simulation Console */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl flex flex-col animate-fade-in relative">

              <div className="bg-black/50 p-4 border-b border-gray-800 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center">
                  <Terminal className="w-4 h-4 mr-2" /> Query Evaluator
                </span>
                <div className="bg-gray-800 border border-gray-700 px-3 py-1 rounded text-xs font-mono font-bold text-teal-400">
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
                          <span className="block text-emerald-500 font-bold mb-1 tracking-wide">SUCCESS: ROW INSERTED</span>
                          <span className="block text-emerald-400/70 text-xs font-medium">{v.reason}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start bg-rose-900/10 border border-rose-900/30 p-3 rounded-lg">
                        <AlertOctagon className="w-5 h-5 mr-3 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-rose-500 font-bold mb-1 tracking-wide">ERROR: CONSTRAINT VIOLATED</span>
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

      {/* Difference Matrix: Check vs Null vs Unique */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2">
          🔟 The Triad of Column Constraints
        </h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col hover:border-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4 shadow-sm">N</div>
            <h3 className="font-black text-xl text-gray-900 dark:text-white mb-2">NOT NULL</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4 flex-grow">A structural guarantee that an empty (NULL) void cannot be saved into a required field. You must provide a value.</p>
            <code className="text-xs bg-gray-50 dark:bg-gray-900 text-blue-500 p-2 border border-gray-100 dark:border-gray-700 rounded block font-bold text-center">name VARCHAR NOT NULL</code>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col hover:border-purple-400 transition-colors">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-4 shadow-sm">U</div>
            <h3 className="font-black text-xl text-gray-900 dark:text-white mb-2">UNIQUE</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4 flex-grow">Scans the entire table index. Prevents duplicate clones of the exact same string or number existing anywhere else.</p>
            <code className="text-xs bg-gray-50 dark:bg-gray-900 text-purple-500 p-2 border border-gray-100 dark:border-gray-700 rounded block font-bold text-center">email VARCHAR UNIQUE</code>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-teal-500 shadow-md flex flex-col transform hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-bl tracking-widest">Logic Engine</div>
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold mb-4 shadow-sm">C</div>
            <h3 className="font-black text-xl text-gray-900 dark:text-white mb-2">CHECK</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4 flex-grow">Executes a mathematical equation or pattern match evaluation to prove if the raw data is semantically logical to the business.</p>
            <code className="text-xs bg-gray-50 dark:bg-gray-900 text-teal-500 p-2 border border-gray-100 dark:border-gray-700 rounded block font-bold text-center">price INT CHECK (price &gt;= 0)</code>
          </div>

        </div>
      </section>

      {/* Extreme Production Tips & Interview Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-gray-900 rounded-3xl p-8 lg:p-10 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>

            <h2 className="text-2xl font-bold text-white mb-2 flex items-center relative z-10">
              <Zap className="w-7 h-7 mr-3 text-teal-400" />
              Performance & Engine Realities
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">(15+ Years Architecture Insight)</p>

            <div className="space-y-6 relative z-10">

              {/* Rule 1 */}
              <div className="flex">
                <div className="w-2 h-2 mt-2 mr-3 bg-teal-500 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">CHECK speeds are virtually instant</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed">
                    Adding logic evaluations at the database level does not drastically bottleneck your SQL Engine. Evaluating if `salary &gt; 0` during an `INSERT` block is microsecond-level speed. The massive data integrity protection easily outweighs the unnoticeable computational cost.
                  </p>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="flex">
                <div className="w-2 h-2 mt-2 mr-3 bg-rose-500 rounded-full"></div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2 line-through opacity-70">Relying purely on UI/Frontend blocks</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed bg-black/30 p-3 rounded-lg border border-rose-900/30">
                    <strong className="text-white">Senior Advice:</strong> Do not just trust your JavaScript/HTML forms to block negative ages. API endpoints can be directly attacked, skipping UI validation. The Database schema is the <strong className="text-rose-400 px-1 italic">Last Line of Absolute Defense</strong> against literal catastrophic data corruption.
                  </p>
                </div>
              </div>

              {/* Rule 3 MySQL Warning */}
              <div className="flex mt-6 bg-amber-900/10 border border-amber-900/30 p-4 rounded-xl items-start">
                <AlertTriangle className="w-6 h-6 mr-3 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-500 text-sm uppercase tracking-widest mb-1">Old Engine Failure Warning (MySQL)</h4>
                  <p className="text-amber-400/80 text-xs font-medium">Older MySQL variants (Anything before version <code>8.0.16</code>) completely and silently ignored the CHECK constraint syntax entirely. Modern implementations (MySQL 8+, PostgreSQL, SQL Server) fully enforce it flawlessly.</p>
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

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-colors">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">Can a constraint reference another table?</p>
              <div className="text-teal-700 dark:text-teal-400 flex items-start">
                <AlertOctagon className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-rose-500" />
                <span>No. CHECK can ONLY view data within its own exact row being inserted. For cross-DB logic, you must use <strong>TRIGGERS</strong>.</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-colors">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">When are they specifically evaluated?</p>
              <code className="text-xs bg-gray-50 dark:bg-gray-900 p-2 border border-gray-100 dark:border-gray-700 block font-bold text-gray-600 dark:text-gray-400">
                During [INSERT] <br /> During [UPDATE]
              </code>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-colors">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-2">What if table data contradicts an `ALTER` addition?</p>
              <div className="text-teal-700 dark:text-teal-400 flex items-start">
                <Lock className="w-4 h-4 mr-2 shrink-0 mt-0.5 text-rose-500" />
                <span>The <code>ALTER TABLE</code> constraint addition will immediately FAIL and halt if existing rows violate the requested rule.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlCheck;