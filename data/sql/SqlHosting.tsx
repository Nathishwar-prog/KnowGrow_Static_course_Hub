import React, { useState } from 'react';
import {
  Server, Globe, Cloud, Database, ShieldCheck, DollarSign, Target, Lightbulb, Activity,
  CheckCircle2, XCircle, ChevronRight, Lock, MonitorSmartphone, Monitor, Building2, Zap,
  Check, Copy, Terminal
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'javascript' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm w-full">
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
      <div className="relative group bg-gray-900 flex-grow h-full">
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

const SqlHosting: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans text-gray-800 dark:text-gray-200">

      {/* Introduction */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-600 dark:bg-indigo-500 rounded-3xl mb-6 shadow-xl border-4 border-white dark:border-gray-800">
          <Server className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6 tracking-tight">
          What is SQL Hosting?
        </h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto text-left relative overflow-hidden">
          <p className="text-lg font-medium mb-6 leading-relaxed flex items-start">
            <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-1 rounded mr-3 mt-1">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <span>
              <strong className="text-indigo-600 dark:text-indigo-400 font-bold">Definition:</strong> SQL Hosting means deploying your SQL database on a server (local or cloud) so it can be accessed by applications, websites, or users.
            </span>
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 flex items-start sm:items-center">
            <span className="text-3xl mr-4 drop-shadow-sm hidden sm:block">👉</span>
            <div>
              <p className="font-bold text-indigo-900 dark:text-indigo-200 text-sm uppercase tracking-widest mb-1">In simple words:</p>
              <p className="text-lg font-black text-indigo-800 dark:text-indigo-300">SQL Hosting = Where your database lives.</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2️⃣ Types of SQL Hosting */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md bg-rose-100 dark:bg-rose-900/40 p-2 rounded-xl border border-rose-200 dark:border-rose-800/50">🏠</span>
          2️⃣ Types of SQL Hosting
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Local */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Monitor className="w-24 h-24" /></div>
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3 text-blue-600 dark:text-blue-400"><MonitorSmartphone className="w-6 h-6" /></span>
              <h3 className="text-xl font-bold">1️⃣ Local Hosting</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm font-medium">Database runs on your own computer.</p>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 mb-4 font-mono text-xs space-y-2 text-gray-700 dark:text-gray-300">
              <div>• MySQL via XAMPP</div>
              <div>• SQL Server Express</div>
              <div>• PostgreSQL local install</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Good for learning</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> No internet required</li>
              <li className="flex items-start"><XCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5 shrink-0" /> Not accessible globally</li>
            </ul>
          </div>

          {/* Shared */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Globe className="w-24 h-24" /></div>
            <div className="flex items-center mb-4">
              <span className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-3 text-amber-600 dark:text-amber-400"><Globe className="w-6 h-6" /></span>
              <h3 className="text-xl font-bold">2️⃣ Shared Hosting</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm font-medium">Database hosted by hosting provider.</p>
            <p className="font-bold text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">Common for:</p>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700 mb-4 text-sm font-medium space-y-2 text-gray-700 dark:text-gray-300">
              <div>• Small websites</div>
              <div>• Student projects</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Cheap</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Easy to use</li>
              <li className="flex items-start"><XCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5 shrink-0" /> Limited performance</li>
              <li className="flex items-start"><XCircle className="w-4 h-4 text-rose-500 mr-2 mt-0.5 shrink-0" /> Not scalable</li>
            </ul>
          </div>

          {/* Cloud */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform"><Cloud className="w-32 h-32" /></div>
            <div className="absolute top-3 right-3 bg-white/20 text-white text-[10px] font-black uppercase px-2 py-1 rounded-full border border-white/30 tracking-widest backdrop-blur-sm">Most Important</div>
            <div className="flex items-center mb-4">
              <span className="bg-white/20 p-2 rounded-lg mr-3 shadow-inner"><Cloud className="w-6 h-6 text-white" /></span>
              <h3 className="text-xl font-bold">3️⃣ Cloud Hosting</h3>
            </div>
            <p className="text-indigo-100 mb-4 text-sm font-medium">Database hosted on cloud platforms.</p>
            <div className="bg-black/20 p-3 rounded-xl border border-white/10 mb-4 font-mono text-xs space-y-2 text-white">
              <div>• Amazon RDS</div>
              <div>• Azure SQL Database</div>
              <div>• Google Cloud SQL</div>
            </div>
            <ul className="space-y-2 text-sm font-medium text-white/90">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-300 mr-2 shrink-0" /> Scalable & Secure</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-300 mr-2 shrink-0" /> Backup support</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-300 mr-2 shrink-0" /> High performance</li>
              <li className="flex items-center mt-3 pt-3 border-t border-white/20"><Building2 className="w-4 h-4 mr-2 text-blue-200 shrink-0" /> Used in real prod systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🧠 3️⃣ Popular SQL Hosting Providers */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200 dark:border-purple-800/50">
            <Cloud className="w-6 h-6" />
          </span>
          3️⃣ Popular SQL Hosting Providers
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden">
          <p className="font-bold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest text-sm">Here are real industry platforms:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-center shadow-sm font-bold text-gray-800 dark:text-gray-200">Amazon Web Services (AWS RDS)</div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-center shadow-sm font-bold text-gray-800 dark:text-gray-200">Microsoft Azure (Azure SQL)</div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-center shadow-sm font-bold text-gray-800 dark:text-gray-200">Google Cloud (Cloud SQL)</div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-center shadow-sm font-bold text-gray-800 dark:text-gray-200">DigitalOcean</div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-center shadow-sm font-bold text-gray-800 dark:text-gray-200">Hostinger</div>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl text-indigo-800 dark:text-indigo-300 font-medium text-center border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center">
            <Target className="w-5 h-5 mr-2 text-indigo-500" /> For your course website, explaining these adds professional value.
          </div>
        </div>
      </section>

      {/* 🏗 4️⃣ Basic Architecture of SQL Hosting */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">🏗</span>
          4️⃣ Basic Architecture of SQL Hosting
        </h2>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Typical Architecture:</p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 overflow-x-auto pb-4">
            {/* 1 */}
            <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 flex flex-col items-center min-w-[120px] shadow-lg">
              <MonitorSmartphone className="w-10 h-10 text-blue-400 mb-3" />
              <span className="font-bold text-white text-sm">User</span>
              <span className="text-xs text-gray-400 mt-1">Browser</span>
            </div>

            <ChevronRight className="w-8 h-8 text-gray-600 hidden md:block" />

            {/* 2 */}
            <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 flex flex-col items-center min-w-[120px] shadow-lg">
              <Globe className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="font-bold text-white text-sm">Web Server</span>
              <span className="text-xs text-gray-400 mt-1">Host</span>
            </div>

            <ChevronRight className="w-8 h-8 text-gray-600 hidden md:block" />

            {/* 3 */}
            <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 flex flex-col items-center min-w-[120px] shadow-lg">
              <Terminal className="w-10 h-10 text-amber-400 mb-3" />
              <span className="font-bold text-white text-sm">Application</span>
              <span className="text-xs text-gray-400 mt-1">Node.js Backend</span>
            </div>

            <ChevronRight className="w-8 h-8 text-gray-600 hidden md:block" />

            {/* 4 */}
            <div className="bg-indigo-900/50 p-4 rounded-2xl border border-indigo-500/50 flex flex-col items-center min-w-[140px] shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Database className="w-10 h-10 text-indigo-400 mb-3" />
              <span className="font-bold text-white text-sm">SQL Database</span>
              <span className="text-xs text-indigo-300 mt-1">MySQL / Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 5️⃣ Example: Hosting MySQL on AWS RDS */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-orange-200 dark:border-orange-800/50">
            <Zap className="w-6 h-6" />
          </span>
          5️⃣ Hosting MySQL on AWS RDS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm transition-shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              Step-by-Step Overview:
            </h3>
            <ul className="space-y-4">
              {[
                "Create AWS account", "Go to RDS", "Choose MySQL engine", "Configure instance",
                "Set username & password", "Enable public access", "Get endpoint", "Connect from application"
              ].map((step, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 border border-gray-200 dark:border-gray-600 shrink-0">{i + 1}</div>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Example Connection (Node.js)</h3>
            <CodeSnippetBlock
              language="javascript"
              title="db.js"
              codeSnippet={`const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'admin',
  password: 'password',
  database: 'testdb'
});

connection.connect(); `} />
          </div>
        </div>
      </section>

      {/* 🔐 6️⃣ Security in SQL Hosting & 📊 7️⃣ Cost Comparison */}
      <section className="max-w-4xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
        {/* Security */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 p-8 rounded-3xl border border-rose-200 dark:border-rose-800/30 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Lock className="w-6 h-6 mr-3 text-rose-500" /> 6️⃣ Security
          </h2>
          <p className="text-rose-800 dark:text-rose-300 font-bold mb-4 italic">Very important for real projects.</p>
          <ul className="space-y-3 font-medium text-gray-800 dark:text-gray-200 mb-6">
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Use strong passwords</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Enable firewall rules</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Use SSL connections</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Restrict IP access</li>
            <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Backup regularly</li>
          </ul>
          <div className="bg-rose-100 dark:bg-rose-900/40 p-4 rounded-xl border border-rose-300 dark:border-rose-700/50 text-rose-900 dark:text-rose-200 font-bold text-center">
            Never expose database publicly without protection.
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <DollarSign className="w-6 h-6 mr-3 text-emerald-500" /> 7️⃣ Cost
          </h2>
          <div className="flex-grow overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Type</th>
                  <th className="px-4 py-3">Cost</th>
                  <th className="px-4 py-3 rounded-tr-lg">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-medium">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-4 py-4 text-gray-900 dark:text-gray-200"><span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Local</span></td>
                  <td className="px-4 py-4 text-emerald-600 dark:text-emerald-400 font-bold">Free</td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Learning</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-4 py-4 text-gray-900 dark:text-gray-200"><span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">Shared</span></td>
                  <td className="px-4 py-4 text-emerald-600 dark:text-emerald-400 font-bold">Low</td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Small websites</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-4 py-4 text-gray-900 dark:text-gray-200"><span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">Cloud DB</span></td>
                  <td className="px-4 py-4 text-rose-500 font-bold">Med / High</td>
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">Production apps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 💡 9️⃣ My 15+ Years Professional Advice */}
      <section className="max-w-5xl mx-auto space-y-8 mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-4xl mr-4 drop-shadow-md">💡</span> 9️⃣ My 15+ Years Professional Advice
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {/* 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-2 bg-indigo-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">1</span>
              Local → Cloud
            </h3>
            <p className="font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase text-xs tracking-wider">For Students:</p>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700 font-medium text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>1. Learn locally first</p>
              <p>2. Then deploy to cloud</p>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-2 bg-emerald-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">2</span>
              Use Managed DBs
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Avoid managing servers manually. Use <strong className="text-emerald-600 dark:text-emerald-400">AWS RDS, Azure SQL, Google Cloud</strong>.</p>
            <p className="text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 p-2 rounded inline-block border border-emerald-100 dark:border-emerald-800/50">Less maintenance, more reliability.</p>
          </div>

          {/* 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-2 bg-rose-500 h-full"></div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">3</span>
              Enable Backups
            </h3>
            <p className="font-bold text-rose-500 mb-2 uppercase text-xs tracking-wider">Production Rule:</p>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-200 dark:border-rose-800/50 font-bold text-rose-800 dark:text-rose-300 text-center text-sm shadow-sm">
              If there is no backup,<br />there is no database.
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative group overflow-hidden md:col-span-1 lg:col-span-2">
            <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">4</span>
                  Monitor Performance
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Check these regularly:</p>
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full">CPU usage</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full">Execution time</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full">Slow queries</span>
                </div>
              </div>
              <div className="sm:w-1/2 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-gray-700 pt-6 sm:pt-0 sm:pl-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-black shrink-0">5</span>
                  Separate Environments
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50 text-blue-800 dark:text-blue-300 font-bold text-center text-sm">
                  Never test directly in production.<br /><span className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2 block">Always use a DEV database.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧪 10️⃣ Practice Exercises for Students */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 border border-indigo-500 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Target className="w-48 h-48" />
          </div>
          <h2 className="text-3xl font-extrabold mb-8 flex items-center relative z-10">
            <span className="text-4xl mr-4 drop-shadow-md">🧪</span> 10️⃣ Practice Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {[
              "Install MySQL locally",
              "Create a database and connect via application",
              "Deploy MySQL on AWS RDS",
              "Configure firewall rules",
              "Enable automatic backup"
            ].map((task, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl flex items-center shadow-sm hover:bg-white/20 transition-colors cursor-default">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 shrink-0">{idx + 1}</div>
                <span className="font-medium text-sm sm:text-base">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlHosting;