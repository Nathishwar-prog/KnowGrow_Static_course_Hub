import React, { useState } from 'react';
import { Terminal, Copy, Check, AlertTriangle, ArrowRight, Zap, Database, Server, Settings, Monitor, LayoutTemplate, Briefcase, FileCode, Clock, ShieldAlert, Cpu, HardDrive, Target, Table2, HelpCircle } from 'lucide-react';

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
      <div className="relative group bg-gray-900 flex-grow">
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

const SqlEditor: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 rounded-3xl mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <Monitor className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          What is an SQL Editor?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          An <code className="bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded font-bold text-blue-700 dark:text-blue-300">SQL Editor</code> is a dedicated workspace tool where you write, edit, and execute SQL queries. Think of it like <strong>VS Code, but specifically tailored for Databases</strong>.
        </p>

        {/* Capabilities Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5">
            <LayoutTemplate className="w-48 h-48 text-blue-500" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center text-lg relative z-10 border-b border-gray-100 dark:border-gray-700 pb-3">
            <span className="text-xl mr-2">📌</span> It seamlessly allows you to:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300 font-medium relative z-10">
            {[
              { text: "Write SQL Statements", icon: FileCode },
              { text: "Run & Execute Queries", icon: Zap },
              { text: "View Results Live", icon: Monitor },
              { text: "Debug Execution Errors", icon: AlertTriangle },
              { text: "Manage Entire Databases", icon: Database },
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 transition-colors">
                <item.icon className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Importance Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
          <span className="mr-3 text-emerald-500">2️⃣</span> Why SQL Editor is Important?
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm flex flex-col justify-center">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-indigo-500" /> In Real-World Tech Pipelines:
            </h3>
            <ul className="space-y-4 font-medium text-gray-700 dark:text-gray-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0"></span> Developers use SQL Editors daily to build APIs.</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0"></span> Database Admins (DBAs) manage architecture and tune queries.</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shrink-0"></span> Data Analysts run complex ad-hoc reporting and BI queries.</li>
            </ul>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800/40 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-emerald-900 dark:text-emerald-300 mb-4 uppercase tracking-wider text-sm flex items-center">
                <Target className="w-5 h-5 mr-2 text-emerald-500" /> For Your Coding Bootcamp:
              </h3>
              <ul className="space-y-3 font-bold text-emerald-800 dark:text-emerald-400">
                <li className="flex items-center"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0 bg-white dark:bg-gray-900 rounded-full" /> Students must practice live</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0 bg-white dark:bg-gray-900 rounded-full" /> Visually see real-time output grids</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0 bg-white dark:bg-gray-900 rounded-full" /> Learn manual debugging techniques</li>
              </ul>
            </div>
            <p className="mt-8 text-center text-sm font-bold bg-white dark:bg-gray-800 py-3 rounded-lg text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-100 dark:border-emerald-800">
              Without an SQL Editor → SQL learning is purely theoretical and incomplete.
            </p>
          </div>

        </div>
      </section>

      {/* Editor Types & Popular Tools */}
      <section className="max-w-6xl mx-auto mb-16 space-y-16">

        {/* Types Table */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
            <span className="mr-3 text-purple-500">3️⃣</span> Types of SQL Editors
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <table className="w-full text-left font-medium">
              <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b dark:border-gray-700">Type Category</th>
                  <th className="px-6 py-4 border-b dark:border-gray-700">Real-World Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50 text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">Desktop GUI Software</td>
                  <td className="px-6 py-4 font-bold text-blue-600 dark:text-blue-400">MySQL Workbench</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">Web-based Dashboard</td>
                  <td className="px-6 py-4 font-bold text-purple-600 dark:text-purple-400">phpMyAdmin</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">IDE-based (Extensions)</td>
                  <td className="px-6 py-4 font-bold text-blue-500 dark:text-blue-300">VS Code</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">Cloud-based / Serverless</td>
                  <td className="px-6 py-4 font-bold text-indigo-500 dark:text-indigo-400">Azure Data Studio / Snowsight</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">Native Built-in DB Tools</td>
                  <td className="px-6 py-4 font-bold text-red-500 dark:text-red-400">SSMS (SQL Server)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Industry Standards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-8 flex items-center">
            <span className="mr-3 text-amber-500">4️⃣</span> Popular Industry Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <Database className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">MySQL Workbench</h3>
                  <span className="text-xs bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Oracle</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Writing complex queries</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Managing schemas visually</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Creating ER (Entity-Relationship) diagrams</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                  <Server className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">SSMS</h3>
                  <span className="text-xs bg-red-50 text-red-600 dark:bg-red-900/40 dark:text-red-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Microsoft</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> SQL Server databases exclusively</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Highly optimized Query execution</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Deep visual Execution plans</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4">
                  <HardDrive className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">pgAdmin</h3>
                  <span className="text-xs bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">PostgreSQL</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Premier PostgreSQL management</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Deep JSONB support viewer</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Role and privilege management GUI</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                  <FileCode className="text-blue-500 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">VS Code Extensions</h3>
                  <span className="text-xs bg-blue-50 text-blue-500 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Universal IDE</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Heavily used by Full-Stack Backends</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Connects to multiple drivers (Postgres, MySQL)</li>
                <li className="flex items-center"><Check className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Integrated right next to application code</li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      {/* Feature & Architecture */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Editor Features */}
          <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 shadow-xl relative overflow-hidden flex flex-col h-full">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10 border-b border-gray-700 pb-4">
              <span className="mr-3 text-emerald-400">5️⃣</span> Critical Editor Features
            </h2>

            <div className="space-y-6 relative z-10 flex-grow">
              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Core Requirements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Syntax highlighting', 'Auto-completion', 'Error highlighting', 'Query run button', 'Result grid UI', 'Query history tracking', 'Execution clock timer', 'Export to CSV/Excel'].map((ft, i) => (
                    <div key={i} className="bg-gray-800/80 p-2.5 rounded border border-gray-700 flex items-center text-sm font-medium text-gray-200 shadow-inner">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      <span className="truncate">{ft}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Advanced Pro Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Visual Execution Plans', 'Theme System (Dark)', 'Multi-tab routing', 'Live Schema Tree viewer'].map((ft, i) => (
                    <div key={i} className="bg-black/40 p-2.5 rounded border border-gray-800 flex items-center text-sm font-medium text-indigo-300">
                      <Zap className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
                      <span className="truncate">{ft}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Architecture flow */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="mr-3 text-blue-500">6️⃣</span> How It Works (Internals)
            </h2>

            <div className="flex flex-col items-center justify-center space-y-3 flex-grow py-4">

              <div className="bg-blue-50 dark:bg-blue-900/20 w-4/5 p-4 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm flex items-center transform transition hover:scale-105">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-4 shrink-0"><Terminal className="text-blue-600 dark:text-blue-400 w-5 h-5" /></div>
                <span className="font-bold text-gray-800 dark:text-gray-200">1. User writes raw query text</span>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 rotate-90" />

              <div className="bg-indigo-50 dark:bg-indigo-900/20 w-4/5 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-sm flex items-center transform transition hover:scale-105">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg mr-4 shrink-0"><Server className="text-indigo-600 dark:text-indigo-400 w-5 h-5" /></div>
                <span className="font-bold text-gray-800 dark:text-gray-200">2. Payload sent via TCP/TCP connection</span>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 rotate-90" />

              <div className="bg-amber-50 dark:bg-amber-900/20 w-4/5 p-4 rounded-xl border border-amber-200 dark:border-amber-800 shadow-sm flex items-center transform transition hover:scale-105">
                <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-lg mr-4 shrink-0"><Cpu className="text-amber-600 dark:text-amber-400 w-5 h-5" /></div>
                <span className="font-bold text-gray-800 dark:text-gray-200">3. Database parses, compiles, & executes</span>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600 rotate-90" />

              <div className="bg-emerald-50 dark:bg-emerald-900/20 w-4/5 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center transform transition hover:scale-105">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-lg mr-4 shrink-0"><Table2 className="text-emerald-600 dark:text-emerald-400 w-5 h-5" /></div>
                <span className="font-bold text-gray-800 dark:text-gray-200">4. Grid results stream back to UI</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Building Course Platform & Security Rules */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-3 text-indigo-500">7️⃣</span> Building Embedded SQL Playgrounds
          </div>
          <span className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider hidden sm:block">Architecture Guide</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-8">

          <div className="lg:col-span-8 space-y-6 flex flex-col">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-grow">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4 bg-indigo-50 dark:bg-indigo-900/20 inline-block px-3 py-1 rounded uppercase tracking-wider text-xs">Option 1: Containerized Isolation</h4>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex-1">
                  <h5 className="font-bold mb-2 flex items-center text-sm"><Database className="w-4 h-4 mr-2" /> Infrastructure</h5>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Spin up isolated Docker containers</li>
                    <li>• Load pre-defined Sandbox databases</li>
                    <li>• Students execute safely inside boundaries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-grow">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4 bg-indigo-50 dark:bg-indigo-900/20 inline-block px-3 py-1 rounded uppercase tracking-wider text-xs">Option 2: Web-Based Terminal Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold mb-2 flex items-center text-sm"><LayoutTemplate className="w-4 h-4 mr-2" /> Frontend Libs</h5>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Monaco Editor (VS Code engine)</li>
                    <li>• CodeMirror</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold mb-2 flex items-center text-sm"><Server className="w-4 h-4 mr-2" /> Backend Tech</h5>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Node.js / Python Router</li>
                    <li>• Restricts driver permissions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-rose-50 dark:bg-rose-900/10 p-6 rounded-2xl shadow-sm border-2 border-rose-200 dark:border-rose-800/40 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-2 right-2 opacity-10">
              <ShieldAlert className="w-32 h-32 text-rose-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-rose-500 shrink-0" /> Important Security Rule
              </h3>

              <p className="text-sm font-bold text-rose-800 dark:text-rose-400 mb-2 uppercase tracking-wide">Never Allow In Web Form:</p>
              <div className="bg-white/60 dark:bg-gray-900/60 p-3 rounded-lg border border-rose-200 dark:border-rose-800/50 mb-6">
                <code className="text-xs font-mono text-rose-600 dark:text-rose-400 block mb-1">DROP DATABASE</code>
                <code className="text-xs font-mono text-rose-600 dark:text-rose-400 block mb-1">DROP TABLE</code>
                <code className="text-xs font-mono text-rose-600 dark:text-rose-400 block">DELETE without WHERE</code>
              </div>

              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase tracking-wide">Always Implement:</p>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300 font-medium">
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Pre-execution query Regex validation</li>
                <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Read-only specific restricted permissions</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Developer Tips Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 dark:bg-black rounded-3xl border border-gray-800 pb-10 shadow-2xl relative overflow-hidden">

          <div className="bg-black/60 p-6 sm:p-8 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-white">
              <span className="mr-3 text-amber-500">8️⃣</span> Developer Best Practices
            </h2>
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mt-4 sm:mt-0 w-fit">15+ Years Experience</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8 relative z-10 text-gray-300">

            {/* Tip 1 */}
            <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700">
              <h3 className="font-bold text-white mb-4 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 1. Always Format Queries</h3>
              <p className="text-sm text-gray-400 mb-4">Good formatting improves team readability.</p>
              <div className="bg-red-900/20 border border-red-900/50 p-3 rounded-lg mb-4">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">❌ Bad Format</p>
                <code className="text-xs font-mono text-gray-500 block">SELECT name,salary FROM Employees WHERE department='IT';</code>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-900/50 p-3 rounded-lg">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">✅ Good Format</p>
                <code className="text-xs font-mono text-emerald-300 block leading-relaxed">SELECT name, salary<br />FROM Employees<br />WHERE department = 'IT';</code>
              </div>
            </div>

            {/* Timers & Comments & Shortcuts */}
            <div className="space-y-6 flex flex-col">

              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="font-bold text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 2. Use Shortcuts</h3>
                <p className="text-sm text-gray-400 mb-4">Teach these universally recognized hotkeys in your platform:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black/50 p-2 rounded flex items-center border border-gray-800">
                    <kbd className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs mr-3 font-mono">Ctrl + Enter</kbd>
                    <span className="text-sm font-medium">Run query</span>
                  </div>
                  <div className="bg-black/50 p-2 rounded flex items-center border border-gray-800">
                    <kbd className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs mr-3 font-mono">Ctrl + /</kbd>
                    <span className="text-sm font-medium">Comment line</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700">
                  <h3 className="font-bold text-white mb-2 flex items-center text-sm"><span className="text-lg mr-2">🔥</span> 3. Comments</h3>
                  <code className="text-xs font-mono text-green-400 bg-black/40 p-2 rounded block">-- Monthly sales report</code>
                </div>

                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700">
                  <h3 className="font-bold text-white mb-2 flex items-center text-sm"><span className="text-lg mr-2">🔥</span> 4. Performance</h3>
                  <p className="text-xs text-amber-200 mt-2 flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> Always check execution times on large joins.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Real World Use Cases */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="mr-2 text-3xl">9️⃣</span> Real-World Scenarios
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "🛒", title: "E-commerce", items: ["Analyze order trends", "Debug payment issues"], theme: "blue" },
            { icon: "🏦", title: "Banking", items: ["Investigate transaction history"], theme: "emerald" },
            { icon: "🏥", title: "Hospital", items: ["Fetch secure patient reports"], theme: "rose" },
            { icon: "📊", title: "Analytics", items: ["Generate monthly dashboard feeds"], theme: "purple" },
          ].map((role, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <div className="text-3xl mb-3">{role.icon}</div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{role.title}</h4>
              <ul className="space-y-1">
                {role.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="mr-2 mt-1 opacity-50">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="max-w-4xl mx-auto pb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center border-t border-gray-200 dark:border-gray-700 pt-16">
          <HelpCircle className="w-8 h-8 mr-3 text-indigo-500" />
          Interview-Level Questions
        </h2>

        <div className="space-y-4">
          {[
            { q: "What exactly is an SQL Editor?", a: "A dedicated software workspace tool used to write, manage, debug, and execute SQL statements against a database." },
            { q: "What is the primary difference between GUI and CLI SQL tools?", a: "GUI (Graphical User Interface) provides a visual point-and-click interface. CLI (Command-Line Interface) relies entirely on typed keyboard commands natively in a shell terminal." },
            { q: "What is an Execution Plan?", a: "A visual or text-based diagram that shows exactly how the database engine interprets, optimizes, and physically executes a query step-by-step." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row sm:items-center transform transition hover:-translate-y-1">
              <div className="sm:w-1/3 pr-4 mb-4 sm:mb-0">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-start text-sm md:text-base">
                  <span className="text-indigo-500 mr-2 shrink-0">❓</span>
                  {faq.q}
                </h4>
              </div>
              <div className="sm:w-2/3 sm:pl-6 sm:border-l border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SqlEditor;