import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, ShieldAlert, ShieldCheck, DatabaseBackup, Clock, Zap, ArrowRight, Laptop, Server, Cloud, AlertTriangle, AlertOctagon, HelpCircle, HardDrive } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'bash' }: { codeSnippet: string, title?: string, language?: string }) => {
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
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-green-400 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlBackupDb: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mysql' | 'sqlserver' | 'postgres'>('mysql');
  const [activeStrategy, setActiveStrategy] = useState<'full' | 'incremental' | 'diff' | 'log'>('full');

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-4">
          <DatabaseBackup className="w-8 h-8 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          SQL Database Backup
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          A copy of your database stored separately so that data can be restored. <strong className="text-rose-600 dark:text-rose-400 border-b-2 border-rose-300">Backup = Insurance for your data.</strong>
        </p>
      </header>

      {/* Importance Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <ShieldAlert className="w-32 h-32 text-rose-500/80 animate-pulse" />
              <AlertOctagon className="w-12 h-12 text-gray-900 dark:text-white absolute top-10 left-10" />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-10 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">Why Backup is Mandatory</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-900/30 font-medium text-sm text-gray-800 dark:text-gray-200 flex items-start shadow-sm">
                <div className="mr-3 text-lg">🛒</div> <span>E-commerce website loses customer orders.</span>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-900/30 font-medium text-sm text-gray-800 dark:text-gray-200 flex items-start shadow-sm">
                <div className="mr-3 text-lg">🏦</div> <span>Banking system loses transaction history.</span>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-100 dark:border-rose-900/30 font-medium text-sm text-gray-800 dark:text-gray-200 flex items-start shadow-sm">
                <div className="mr-3 text-lg">🏥</div> <span>Hospital loses patient records.</span>
              </div>
              <div className="bg-red-600 p-4 rounded-xl border border-red-700 font-bold text-sm text-white flex items-center justify-center shadow-md transform hover:scale-105 transition-transform">
                <AlertTriangle className="w-5 h-5 mr-2" /> Without backup → Business Collapse.
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">Disasters include: System failures, server crashes, data corruption, accidental deletion, and cyber attacks.</p>
          </div>
        </div>
      </section>

      {/* Backup Flow & Types */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Visual Diagram */}
          <div className="lg:col-span-5 bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col justify-center relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-white font-bold text-xl mb-8 flex items-center justify-center border-b border-gray-800 pb-4">
              <Zap className="w-5 h-5 mr-3 text-emerald-400" />
              Visual Backup Flow
            </h3>

            <div className="flex flex-col items-center space-y-4 relative z-10 w-full max-w-[280px] mx-auto text-sm font-bold">
              <div className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg w-full text-center border-2 border-blue-500 flex items-center justify-center"><Database className="w-4 h-4 mr-2" /> Live Database</div>
              <div className="text-gray-500">↓</div>
              <div className="bg-gray-800 text-gray-300 py-3 px-6 rounded-xl border border-gray-700 w-full text-center flex items-center justify-center"><Terminal className="w-4 h-4 mr-2 text-cyan-400" /> Backup Command</div>
              <div className="text-gray-500">↓</div>
              <div className="bg-gray-800 text-emerald-400 font-mono text-xs py-3 px-6 rounded-xl border border-gray-700 w-full text-center flex items-center justify-center"><HardDrive className="w-4 h-4 mr-2" /> File (.sql / .bak)</div>
              <div className="text-gray-500">↓</div>
              <div className="bg-gray-800 text-gray-300 py-3 px-6 rounded-xl border border-gray-700 w-full text-center flex items-center justify-center"><Cloud className="w-4 h-4 mr-2 text-blue-400" /> Safe Location</div>
              <div className="text-gray-500">↓</div>
              <div className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 py-3 px-6 rounded-xl w-full text-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">Restore if Crash Happens</div>
            </div>
          </div>

          {/* Types Table Labs */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 flex flex-col">
            <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">3️⃣ Types of Backups</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              <button onClick={() => setActiveStrategy('full')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm border ${activeStrategy === 'full' ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'}`}>Full</button>
              <button onClick={() => setActiveStrategy('incremental')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm border ${activeStrategy === 'incremental' ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'}`}>Incremental</button>
              <button onClick={() => setActiveStrategy('diff')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm border ${activeStrategy === 'diff' ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'}`}>Differential</button>
              <button onClick={() => setActiveStrategy('log')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm border ${activeStrategy === 'log' ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'}`}>Tx Logs</button>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl flex-grow border border-indigo-100 dark:border-indigo-800/30 flex items-center relative overflow-hidden">
              {activeStrategy === 'full' && (
                <div>
                  <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Full Backup</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">Captures the <strong>entire database</strong>. This takes the longest time and space but proves to be the absolute easiest to restore. Used as the baseline for all other systems.</p>
                  <p className="text-xs bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded inline-block font-bold">Base File (.bak/.sql)</p>
                </div>
              )}
              {activeStrategy === 'incremental' && (
                <div>
                  <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Incremental Backup</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">Only backs up the data that has <strong>changed since the exact last backup</strong> (whether full or incremental). Fast to create, slower to restore.</p>
                  <p className="text-xs bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded inline-block font-bold">Changes vs Last Backup</p>
                </div>
              )}
              {activeStrategy === 'diff' && (
                <div>
                  <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Differential Backup</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">Backs up changes made exclusively <strong>since the last full backup</strong>. Middle ground between Full and Incremental processing speeds.</p>
                  <p className="text-xs bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded inline-block font-bold">Changes vs Full Baseline</p>
                </div>
              )}
              {activeStrategy === 'log' && (
                <div>
                  <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2">Transaction Log Backup</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">Captures rapid transaction logs enabling <strong>point-in-time recovery</strong>. You can literally rewind a database to the second before a crash.</p>
                  <p className="text-xs bg-emerald-200 dark:bg-emerald-800/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded inline-block font-bold">CRITICAL: Prevents 5pm-crash data loss</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Database Dialect Syntax Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Terminal Commands by Database
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            <button onClick={() => setActiveTab('mysql')} className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${activeTab === 'mysql' ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-t-4 border-t-blue-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>MySQL</button>
            <button onClick={() => setActiveTab('sqlserver')} className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${activeTab === 'sqlserver' ? 'bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 border-t-4 border-t-rose-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>SQL Server</button>
            <button onClick={() => setActiveTab('postgres')} className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${activeTab === 'postgres' ? 'bg-white dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 border-t-4 border-t-cyan-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>PostgreSQL</button>
          </div>

          <div className="p-6 md:p-10">
            {activeTab === 'mysql' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">MySQL uses <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-blue-500">mysqldump</code></h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Backing up:</p>
                      <CodeSnippetBlock title="Full Database" codeSnippet={`mysqldump -u root -p company_db > company_backup.sql`} />
                      <CodeSnippetBlock title="Specific Table Only" codeSnippet={`mysqldump -u root -p company_db employees > emp_backup.sql`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Restoring:</p>
                      <CodeSnippetBlock title="Restore Command" codeSnippet={`mysql -u root -p company_db < company_backup.sql`} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'sqlserver' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">SQL Server uses <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-rose-500">BACKUP DATABASE</code></h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Backing up:</p>
                      <CodeSnippetBlock language="sql" title="Full DB to disk" codeSnippet={`BACKUP DATABASE company_db\nTO DISK = 'C:\\Backup\\company_backup.bak';`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Restoring:</p>
                      <CodeSnippetBlock language="sql" title="Restore from disk" codeSnippet={`RESTORE DATABASE company_db\nFROM DISK = 'C:\\Backup\\company_backup.bak';`} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'postgres' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">PostgreSQL uses <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-cyan-500">pg_dump</code></h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Backing up:</p>
                      <CodeSnippetBlock title="Full Database" codeSnippet={`pg_dump -U postgres company_db > company_backup.sql`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">Restoring:</p>
                      <CodeSnippetBlock title="Restore Command" codeSnippet={`psql -U postgres company_db < company_backup.sql`} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Production 3-2-1 Rule & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* 15 Yrs Exp Tips */}
          <div className="lg:col-span-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-indigo-200 dark:border-gray-700 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl opacity-5"><ShieldCheck /></div>

            <h2 className="text-2xl font-bold text-indigo-900 dark:text-white mb-2 flex items-center relative z-10">
              <ShieldCheck className="w-7 h-7 mr-3 text-indigo-500" />
              🔟 Best Practices
            </h2>
            <p className="text-indigo-600 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-8 border-b border-indigo-200 dark:border-gray-700 pb-4 relative z-10">15+ Years Architecture Experience</p>

            <div className="space-y-6 relative z-10">
              {/* 3-2-1 */}
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-3 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 1. Follow the 3-2-1 Rule</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-100 dark:border-blue-800/50 text-center"><div className="text-2xl font-black text-blue-600 dark:text-blue-400">3</div><div className="text-xs font-bold text-gray-700 dark:text-gray-300">Copies of Data</div></div>
                  <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 p-3 rounded border border-purple-100 dark:border-purple-800/50 text-center"><div className="text-2xl font-black text-purple-600 dark:text-purple-400">2</div><div className="text-xs font-bold text-gray-700 dark:text-gray-300">Different Storage Types</div></div>
                  <div className="flex-1 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded border border-emerald-100 dark:border-emerald-800/50 text-center"><div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">1</div><div className="text-xs font-bold text-gray-700 dark:text-gray-300">Offsite Backup</div></div>
                </div>
              </div>

              {/* Automation */}
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center text-gray-900 dark:text-white"><span className="text-xl mr-2">🔥</span> 2. Automate Backups</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Use cron jobs (Linux) to run fully automated backups, like this daily 2 AM script:</p>
                <CodeSnippetBlock codeSnippet={`0 2 * * * mysqldump -u root -p company_db > /backup/daily.sql`} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30">
                  <h3 className="font-bold mb-2 flex items-center text-gray-900 dark:text-white text-sm"><span className="mr-2">🔥</span> 3. Storage Rules</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Never store a backup on the same server. If the server crashes → backup is also destroyed.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-amber-100 dark:border-amber-900/30">
                  <h3 className="font-bold mb-2 flex items-center text-gray-900 dark:text-white text-sm"><span className="mr-2">🔥</span> 4. Test Restores</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic border-l-2 border-amber-500 pl-2">Many companies backup but never test restore. <strong className="block text-rose-500 not-italic mt-1">Backup config without restore test = useless.</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Arch & Q&A */}
          <div className="lg:col-span-4 flex flex-col space-y-6">

            <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 shadow-xl flex-grow">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center border-b border-gray-700 pb-3">
                <Server className="w-5 h-5 mr-3 text-cyan-400" />
                Real Production Arch
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-gray-300"><span className="text-emerald-400 font-bold mr-2">Daily</span> Full Database Backup</div>
                <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-gray-300"><span className="text-blue-400 font-bold mr-2">Hourly</span> Incremental Base</div>
                <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-gray-300"><span className="text-purple-400 font-bold mr-2">5-minute</span> Transaction Logs</div>
                <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-gray-300"><span className="text-orange-400 font-bold mr-2">Live</span> Cloud storage replication</div>
              </div>
              <p className="text-center text-sm font-bold text-gray-400 mt-6 pt-4 border-t border-gray-800">Big companies take backup heavily seriously.</p>
            </div>

            {/* Common Beginner Mistakes */}
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-3xl shadow-sm border border-red-200 dark:border-red-800/30">
              <h2 className="text-lg font-extrabold text-red-800 dark:text-red-400 mb-4 flex items-center border-b border-red-200 dark:border-red-800/50 pb-2">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" /> Common Mistakes
              </h2>
              <ul className="space-y-3">
                {[
                  'Taking backup but not testing restore procedure.',
                  'Storing backup on the same exact machine.',
                  'Not scheduling automatic backup (forgetting).',
                  'Forgetting to backup transaction logs (Point in time failure).',
                  'Not verifying backup file size / corruption.'
                ].map((err, i) => (
                  <li key={i} className="flex items-start text-xs font-medium text-gray-800 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 shrink-0 mt-1"></div>
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

export default SqlBackupDb;