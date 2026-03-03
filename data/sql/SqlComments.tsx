import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, MessageSquare, ArrowRight, Zap, Target, HelpCircle, AlertTriangle, AlertOctagon, FileText, Code2, GitBranch, TerminalSquare, EyeOff, LayoutTemplate, Briefcase, Hospital, ShoppingCart, Banknote, Shield, CheckCircle } from 'lucide-react';

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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-purple-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlComments: React.FC = () => {
  const [debugActive, setDebugActive] = useState(false);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL Comments
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Non-executable communication notes helping humans understand logic spanning hundreds of rows. <strong className="text-purple-600 dark:text-purple-400">Completely invisible to the SQL engine.</strong>
        </p>
      </header>

      {/* Syntax Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold flex items-center text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-3">
          <LayoutTemplate className="w-8 h-8 mr-3 text-purple-500" /> Defining Architecture Notes
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col h-full hover:border-purple-300 transition-colors">
            <h3 className="text-2xl font-black flex items-center text-gray-900 dark:text-white mb-4">
              1️⃣ Single-Line
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-6 flex-grow">
              Uses double-dashes <code className="bg-gray-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 font-bold px-2 py-0.5 rounded">--</code>. Everything trailing after it on that specific line is ignored by the database.
            </p>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 font-mono text-sm shadow-inner">
              <div className="text-gray-500 italic mb-2">-- Fetch all employees from IT department</div>
              <div className="text-blue-400">SELECT <span className="text-white">*</span></div>
              <div className="text-blue-400">FROM <span className="text-white">Employees</span></div>
              <div className="text-blue-400">WHERE <span className="text-white">department = 'IT';</span></div>
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-black rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-black flex items-center text-white mb-4 relative z-10">
              2️⃣ Multi-Line Block
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-6 flex-grow relative z-10">
              Enclosed between <code className="bg-gray-800 text-purple-400 font-bold px-2 py-0.5 rounded border border-gray-700">/*</code> and <code className="bg-gray-800 text-purple-400 font-bold px-2 py-0.5 rounded border border-gray-700">*/</code>. Used for massive documentation headers covering dozens of lines without repeating syntax.
            </p>
            <div className="bg-black/50 p-4 rounded-xl border border-gray-800 font-mono text-sm shadow-inner relative z-10">
              <div className="text-purple-400/70 italic mb-2">
                     /*<br />
                &nbsp;This query calculates<br />
                &nbsp;the average salary<br />
                &nbsp;for each department<br />
                */
              </div>
              <div className="text-blue-400 inline">SELECT </div><span className="text-gray-300">department, AVG(salary)</span><br />
              <div className="text-blue-400 inline">FROM </div><span className="text-gray-300">Employees</span><br />
              <div className="text-blue-400 inline">GROUP BY </div><span className="text-gray-300">department;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Debugging Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-indigo-950 dark:bg-indigo-950 rounded-3xl shadow-2xl relative overflow-hidden border border-indigo-900 flex flex-col lg:flex-row">

          {/* Context Left */}
          <div className="lg:w-1/3 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-indigo-900/50 bg-indigo-900/20 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <TerminalSquare className="w-6 h-6 mr-3 text-indigo-400" />
              Live Debugging Mute
            </h2>
            <p className="text-indigo-200 text-sm font-medium mb-8 leading-relaxed">
              Developers frequently use single-line comments to temporarily "turn off" specific filters during bug tracking, diagnosing where a query drops desired rows.
            </p>

            <button
              onClick={() => setDebugActive(!debugActive)}
              className={`w-full py-4 px-6 rounded-xl font-bold tracking-wide transition-all shadow-lg flex items-center justify-center ${debugActive ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white hover:bg-gray-100 text-indigo-900 border-2 border-transparent hover:border-indigo-300'}`}
            >
              {debugActive ? <><CheckCircle className="w-5 h-5 mr-2" /> Restore Salary Filter</> : <><EyeOff className="w-5 h-5 mr-2" /> Mute Salary Filter</>}
            </button>
          </div>

          {/* Terminal Right */}
          <div className="lg:w-2/3 p-8 bg-black/60 relative font-mono">
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <div className="mt-6 text-sm sm:text-base leading-loose">
              <div className="text-indigo-400">SELECT <span className="text-gray-300">*</span></div>
              <div className="text-indigo-400">FROM <span className="text-gray-300">Employees</span></div>
              <div className="text-indigo-400">WHERE <span className="text-gray-300">department = 'IT'</span></div>

              <div className={`transition-all duration-300 px-2 -mx-2 rounded ${debugActive ? 'text-gray-600 italic bg-gray-900/50' : 'text-gray-300'}`}>
                {debugActive && <span className="text-gray-500 mr-2">--</span>}
                {debugActive ? '' : <span className="text-indigo-400">AND </span>}
                salary {'>'} 50000
              </div>
              <div className="text-gray-300">;</div>
            </div>

            {/* Result Card overlay */}
            <div className="mt-8 bg-indigo-900/30 border border-indigo-800/50 rounded-xl p-4 flex items-center">
              <Target className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
              <p className="text-indigo-200 text-sm">
                {debugActive
                  ? "The SQL Engine ignores the salary filter. Executing search exclusively for IT Department."
                  : "The SQL Engine enforces both the IT Department MATCH AND the > 50000 Salary MATCH."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Senior Guidelines (15+ Years) */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center relative z-10">
              <Briefcase className="w-7 h-7 mr-3 text-purple-500" />
              Professional Standards
            </h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 relative z-10">(15+ Years Production Architecture)</p>

            <div className="space-y-6">
              {/* Rule 1 */}
              <div>
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-3 text-lg"><span className="text-xl mr-2">🔥</span> 1. Explain WHY, Not WHAT</h4>
                <div className="grid sm:grid-cols-2 gap-4 ml-7">
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                    <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-widest mb-2 flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Bad Example</p>
                    <code className="text-xs font-mono text-gray-600 dark:text-gray-400 block mb-1 italic">-- Select name</code>
                    <code className="text-xs font-mono text-gray-800 dark:text-gray-200 font-bold block">SELECT name FROM Employees;</code>
                    <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wide">Completely Redundant. Anyone can read "Select name".</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-2 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Good Example</p>
                    <code className="text-xs font-mono text-gray-600 dark:text-gray-400 block mb-1 italic">-- Fetch names for Q1 payroll run</code>
                    <code className="text-xs font-mono text-gray-800 dark:text-gray-200 font-bold block">SELECT name FROM Employees;</code>
                    <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wide">Explains business intent.</p>
                  </div>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="pt-4">
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-3 text-lg"><span className="text-xl mr-2">🔥</span> 2. Heavy Headers for Stored Procedures</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-7 mb-3">Enterprise analytics run on massive stored procedures. They require internal licensing headers.</p>
                <div className="ml-7 bg-gray-900 p-4 rounded-xl shadow-inner font-mono text-xs text-emerald-400 border border-gray-800 break-words whitespace-pre-wrap">
                        /*<br />
                  &nbsp;&nbsp;Report: Monthly Sales Summary<br />
                  &nbsp;&nbsp;Author: Karthick Raja<br />
                  &nbsp;&nbsp;Purpose: Used for finance dashboard<br />
                  &nbsp;&nbsp;Date: 2026-03-01<br />
                  */
                </div>
              </div>

              {/* Rule 3 */}
              <div className="pt-4">
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-2 text-lg"><span className="text-xl mr-2">🔥</span> 3. Documenting Complex Joins</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-7">Never leave a 5+ table join undocumented. Explicitly state the relationship (e.g., <code>-- Joining Accounts to ledgers on user_id to find raw defects</code>) before the <code>FROM</code> payload.</p>
              </div>
            </div>
          </div>

          {/* Specialized Panels Right */}
          <div className="lg:col-span-4 flex flex-col space-y-6">

            {/* MySQL Specific */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-3xl border border-amber-200 dark:border-amber-800/40 shadow-sm relative">
              <h3 className="text-amber-900 dark:text-amber-500 font-extrabold text-lg mb-2 flex items-center">
                <Code2 className="w-5 h-5 mr-3 text-amber-500" />
                MySQL Version Limits
              </h3>
              <p className="text-amber-800 dark:text-amber-300 text-xs font-medium mb-4">MySQL allows executable condition-locked comments that only fire natively if the server version matches the trigger.</p>
              <code className="bg-black/80 text-orange-400 font-mono text-[10px] p-3 block rounded border border-orange-500/30">/*!40101 SET @OLD_CS_CLIENT=@@CS_CLIENT */;</code>
              <p className="text-[10px] text-amber-700/60 dark:text-amber-500/60 uppercase font-bold mt-3 text-center">Highly advanced migration tools.</p>
            </div>

            {/* Avoid Pitfalls */}
            <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-200 dark:border-rose-900/30 shadow-sm flex-grow">
              <h3 className="text-rose-900 dark:text-rose-400 font-extrabold text-lg mb-4 flex items-center border-b border-rose-200 dark:border-rose-900/30 pb-2">
                <AlertOctagon className="w-5 h-5 mr-3 text-rose-500" />
                Beginner Traps
              </h3>
              <ul className="space-y-3 font-medium text-sm text-rose-800 dark:text-rose-300">
                <li className="flex items-start"><span className="text-rose-500 mr-2 mt-0.5">❌</span> Forgetting the <strong>required space</strong> after dash. (`--comment` fails, `-- comment` works).</li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 mt-0.5">❌</span> Leaving severe security logic or passwords accidentally in comments.</li>
                <li className="flex items-start"><span className="text-rose-500 mr-2 mt-0.5">❌</span> "Ghost queries" - commenting out 500 lines of debug code and pushing to production forever.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Cross-Platform Table */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Database className="w-6 h-6 mr-3 text-purple-500" /> SQL Standard Compliance Matrix
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm text-gray-700 dark:text-gray-300">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 text-xs uppercase font-bold tracking-widest text-gray-500">
                <tr>
                  <th className="px-6 py-4">Database Platform</th>
                  <th className="px-6 py-4 border-l border-gray-200 dark:border-gray-700 text-center">Single-Line</th>
                  <th className="px-6 py-4 border-l border-gray-200 dark:border-gray-700 text-center">Multi-Line Block</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {['MySQL', 'SQL Server', 'PostgreSQL', 'Oracle'].map((db, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{db}</td>
                    <td className="px-6 py-4 border-l border-gray-100 dark:border-gray-700 text-center text-purple-600 dark:text-purple-400 font-black tracking-widest">--</td>
                    <td className="px-6 py-4 border-l border-gray-100 dark:border-gray-700 text-center text-purple-600 dark:text-purple-400 font-black tracking-widest">/* */</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest text-center border-t border-gray-200 dark:border-gray-700">
            ANSI Standard SQL fully supports both identically across all vendors.
          </div>
        </div>
      </section>

      {/* Real World Use Cases */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-blue-500 shadow-sm text-center">
          <ShoppingCart className="w-6 h-6 mx-auto mb-3 text-blue-500" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">E-commerce</h3>
          <p className="text-xs text-gray-500">Documenting heavy nested pricing and Black Friday logic.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-emerald-500 shadow-sm text-center">
          <Banknote className="w-6 h-6 mx-auto mb-3 text-emerald-500" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Banking</h3>
          <p className="text-xs text-gray-500">Leaving trailing notes detailing localized interest rate math.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-rose-500 shadow-sm text-center">
          <Hospital className="w-6 h-6 mx-auto mb-3 text-rose-500" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Hospital</h3>
          <p className="text-xs text-gray-500">Explaining specific threshold statuses mapped to patient priority.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-t-4 border-t-amber-500 shadow-sm text-center">
          <FileText className="w-6 h-6 mx-auto mb-3 text-amber-500" />
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">Analytics</h3>
          <p className="text-xs text-gray-500">Header files tracking data transformation migrations over years.</p>
        </div>
      </section>

      {/* Interview Setup */}
      <section className="max-w-4xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
            <HelpCircle className="w-7 h-7 mr-3 text-purple-400" />
            Interview & Performance Round
          </h2>

          <div className="space-y-4 relative z-10">
            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 flex flex-col md:flex-row md:items-center justify-between">
              <p className="text-white font-bold mb-2 md:mb-0">Do comments realistically bottleneck execution speeds?</p>
              <p className="text-emerald-400 font-black text-lg bg-emerald-900/30 px-6 py-2 rounded-lg border border-emerald-900 text-center">Absolutely NO.</p>
            </div>

            <p className="text-gray-400 text-sm font-medium leading-relaxed mt-4 p-4 border-l-2 border-purple-500 bg-gray-900">
              The DB Engine literally rips out and shreds every comment before mapping the AST (Abstract Syntax Tree) execution plan. Feel free to use comments generously for human maintenance — they cost zero CPU cycles.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlComments;