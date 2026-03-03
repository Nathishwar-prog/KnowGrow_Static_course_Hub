import React, { useState } from 'react';
import { Database, Terminal, Check, Target, Zap, CheckCircle, BarChart3, HelpCircle, GraduationCap, MapPin, Briefcase, Award, TrendingUp, Cpu, Server, Lock, Layers } from 'lucide-react';

const SqlBootcamp: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  const modules = [
    {
      id: 1,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/10',
      borderColor: 'border-yellow-200 dark:border-yellow-800/30',
      title: "Module 1: SQL Foundations",
      week: "Week 1",
      icon: <Terminal className="w-6 h-6" />,
      topics: ['What is Database?', 'RDBMS Concepts', 'SQL Introduction', 'Data Types', 'CREATE TABLE', 'INSERT', 'SELECT', 'WHERE', 'AND / OR / NOT', 'BETWEEN', 'IN', 'LIKE'],
      practice: "Create Students table, Insert 20 records, Write filtering queries"
    },
    {
      id: 2,
      color: 'bg-orange-500',
      textColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10',
      borderColor: 'border-orange-200 dark:border-orange-800/30',
      title: "Module 2: Sorting & Aggregation",
      week: "Week 2",
      icon: <BarChart3 className="w-6 h-6" />,
      topics: ['ORDER BY', 'DISTINCT', 'COUNT()', 'SUM()', 'AVG()', 'MIN()', 'MAX()', 'GROUP BY', 'HAVING'],
      practice: "Build a Student Result Analysis System"
    },
    {
      id: 3,
      color: 'bg-amber-600',
      textColor: 'text-amber-700 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-900/10',
      borderColor: 'border-amber-200 dark:border-amber-800/30',
      title: "Module 3: Joins",
      week: "Week 3",
      icon: <Layers className="w-6 h-6" />,
      topics: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'SELF JOIN'],
      practice: "Build Employee & Department system"
    },
    {
      id: 4,
      color: 'bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800/30',
      title: "Module 4: Subqueries & Filtering",
      week: "Week 4",
      icon: <Target className="w-6 h-6" />,
      topics: ['Subqueries', 'Correlated Subqueries', 'EXISTS', 'ANY', 'ALL', 'CASE', 'Aliases'],
      practice: "Advanced Data Extraction Setup"
    },
    {
      id: 5,
      color: 'bg-purple-500',
      textColor: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800/30',
      title: "Module 5: Database Design",
      week: "Week 5",
      icon: <Cpu className="w-6 h-6" />,
      topics: ['Primary Key', 'Foreign Key', 'Constraints', 'AUTO_INCREMENT', 'Normalization (1NF, 2NF, 3NF)', 'ER Diagrams'],
      practice: "Design E-commerce Database Schema"
    },
    {
      id: 6,
      color: 'bg-amber-800',
      textColor: 'text-amber-900 dark:text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/10',
      borderColor: 'border-amber-200 dark:border-amber-800/30',
      title: "Module 6: Performance & Indexing",
      week: "Week 6",
      icon: <Zap className="w-6 h-6" />,
      topics: ['Index', 'Composite Index', 'Query Optimization', 'Execution Plan', 'Performance Tips'],
      practice: "Separates beginners from professionals 🔥"
    },
    {
      id: 7,
      color: 'bg-slate-800',
      textColor: 'text-slate-800 dark:text-slate-300',
      bgColor: 'bg-slate-50 dark:bg-slate-900/30',
      borderColor: 'border-slate-300 dark:border-slate-700',
      title: "Module 7: Transactions & Backup",
      week: "Week 7",
      icon: <Server className="w-6 h-6" />,
      topics: ['COMMIT', 'ROLLBACK', 'ACID Properties', 'Backup & Restore', 'Transaction Logs'],
      practice: "Protecting Data Integrity"
    },
    {
      id: 8,
      color: 'bg-red-500',
      textColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/10',
      borderColor: 'border-red-200 dark:border-red-800/30',
      title: "Module 8: Advanced SQL",
      week: "Week 8",
      icon: <Lock className="w-6 h-6" />,
      topics: ['Window Functions', 'Views', 'Stored Procedures', 'Triggers', 'CTE (Common Table Expressions)'],
      practice: "Advanced Analytic Pipelines"
    }
  ];

  const currentMod = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-6xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL Database <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Bootcamp</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The complete 8-Week Professional Developer Roadmap. Go from absolute zero to mastering production-level queries and database architecture.
        </p>
      </header>

      {/* 8-Week Timeline Simulator */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-3 flex items-center">
          <MapPin className="w-8 h-8 mr-3 text-indigo-500" />
          The 8-Week Blueprint
        </h2>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Timeline selector */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {modules.map(mod => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-4 rounded-xl flex items-center justify-between transition-all transform hover:scale-[1.02] shadow-sm ${activeModule === mod.id ? `${mod.bgColor} border-2 ${mod.borderColor}` : 'bg-white dark:bg-gray-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700'}`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm mr-4 ${mod.color}`}>
                    {mod.id}
                  </div>
                  <div className="text-left">
                    <p className={`text-xs font-bold uppercase tracking-widest ${activeModule === mod.id ? mod.textColor : 'text-gray-500 dark:text-gray-400'}`}>{mod.week}</p>
                    <h4 className="font-bold text-gray-900 dark:text-white mt-0.5">{mod.title.split(': ')[1]}</h4>
                  </div>
                </div>
                {activeModule === mod.id && <ChevronRight className={`w-5 h-5 ${mod.textColor}`} />}
              </button>
            ))}
          </div>

          {/* Module Detail Card */}
          <div className="lg:col-span-8 animate-fade-in">
            <div className={`h-full p-8 rounded-3xl border-2 ${currentMod.borderColor} ${currentMod.bgColor} shadow-lg relative overflow-hidden flex flex-col`}>

              {/* BG Graphic */}
              <div className={`absolute -right-10 -bottom-10 opacity-10 ${currentMod.textColor}`}>
                {React.cloneElement(currentMod.icon as React.ReactElement, { className: 'w-64 h-64' })}
              </div>

              <div className="relative z-10 flex-grow">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/50 dark:bg-gray-900/50 ${currentMod.textColor}`}>
                  {currentMod.week} Objective
                </span>
                <h3 className={`text-4xl font-extrabold mb-8 ${currentMod.textColor}`}>
                  {currentMod.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4 flex items-center border-b border-gray-300 dark:border-gray-600/50 pb-2">
                      <Target className={`w-5 h-5 mr-2 ${currentMod.textColor}`} /> Topics Covered
                    </h4>
                    <ul className="space-y-2.5">
                      {currentMod.topics.map((t, i) => (
                        <li key={i} className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/40 dark:bg-gray-900/30 p-2 rounded shadow-sm border border-white/20 dark:border-gray-700/30">
                          <CheckCircle className={`w-4 h-4 mr-2 shrink-0 my-0.5 ${currentMod.textColor}`} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4 flex items-center border-b border-gray-300 dark:border-gray-600/50 pb-2">
                      <Briefcase className={`w-5 h-5 mr-2 ${currentMod.textColor}`} /> Practice / Project
                    </h4>
                    <div className="bg-white/60 dark:bg-gray-900/50 p-5 rounded-xl border border-white/40 dark:border-gray-700/50 shadow-inner">
                      <p className="font-bold text-gray-800 dark:text-gray-200">{currentMod.practice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-4xl font-extrabold text-white mb-4 text-center relative z-10 flex items-center justify-center">
            <Award className="w-10 h-10 mr-4 text-cyan-400" />
            🧪 Capstone Projects
          </h2>
          <p className="text-cyan-200 text-center font-bold uppercase tracking-widest mb-12 border-b border-gray-800 pb-4">(Mandatory Real-World Exams)</p>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">

            {/* Project 1 */}
            <div className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-xl flex items-center justify-center mb-4 text-cyan-400 text-2xl">🛒</div>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce DB</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Build Tables</p>
                  <ul className="text-sm font-mono text-gray-400 space-y-1">
                    <li>- Users</li><li>- Products</li><li>- Orders</li><li>- Payments</li>
                  </ul>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-700/50 text-xs font-bold text-gray-300">
                  Write joins • Calculate totals • Optimize queries
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 text-emerald-400 text-2xl">🏥</div>
              <h3 className="text-xl font-bold text-white mb-4">Hospital System</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">Build Tables</p>
                  <ul className="text-sm font-mono text-gray-400 space-y-1">
                    <li>- Patients</li><li>- Doctors</li><li>- Appointments</li><li>- Billing</li>
                  </ul>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-700/50 text-xs font-bold text-gray-300">
                  Manage scheduling • Calculate active bills
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 hover:border-rose-500/50 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-rose-900/50 rounded-xl flex items-center justify-center mb-4 text-rose-400 text-2xl">🏦</div>
              <h3 className="text-xl font-bold text-white mb-4">Banking Platform</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Build Tables</p>
                  <ul className="text-sm font-mono text-gray-400 space-y-1">
                    <li>- Accounts</li><li>- Transactions</li><li>- Logs</li>
                  </ul>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-gray-700/50 text-xs font-bold text-gray-300">
                  Balance math • Fraud detection trigger queries
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Senior Dev 15 Yrs Real World Advice */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 sm:p-10 text-white">
            <h2 className="text-3xl font-extrabold mb-2 flex items-center">
              <Briefcase className="w-8 h-8 mr-3 opacity-80" />
              Real-World Developer Advice
            </h2>
            <p className="font-bold opacity-90 uppercase tracking-widest text-sm">(15+ Years Industry Experience)</p>
          </div>

          <div className="p-8 sm:p-10 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-800 dark:to-orange-900/5">

            <div className="space-y-8">
              <div className="flex">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center font-black text-xl mr-5 shrink-0 shadow-sm border border-orange-200 dark:border-orange-800">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Focus on Practical Queries</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Students <strong className="text-orange-600 dark:text-orange-400">MUST</strong> write at least <strong className="text-gray-900 dark:text-white text-lg">200</strong> queries manually before feeling confident.</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center font-black text-xl mr-5 shrink-0 shadow-sm border border-orange-200 dark:border-orange-800">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Teach Performance Early</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Most courses entirely ignore optimization. We mandate performance warnings inside <strong className="underline decoration-orange-400 decoration-2">every single module</strong>.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center font-black text-xl mr-5 shrink-0 shadow-sm border border-orange-200 dark:border-orange-800">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Use True Data Sizes</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">Stop using basic 5-row toy examples. You must show how queries physically behave when scanning <strong className="text-gray-900 dark:text-white text-lg">10,000+ rows</strong>.</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center font-black text-xl mr-5 shrink-0 shadow-sm border border-orange-200 dark:border-orange-800">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Teach Debugging</h3>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Show exactly: <br />
                    <ul className="mt-2 space-y-1">
                      <li><Check className="inline-block w-4 h-4 text-orange-500 mr-2" /> Why a query is slow</li>
                      <li><Check className="inline-block w-4 h-4 text-orange-500 mr-2" /> How to fix it</li>
                      <li><Check className="inline-block w-4 h-4 text-orange-500 mr-2" /> How to read Execution Plans</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform & Monetization Layout */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Website Structure */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 p-8 py-10 rounded-3xl border border-emerald-200 dark:border-emerald-800/40 shadow-sm flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-6 flex items-center">
            <Database className="w-8 h-8 mr-3 text-emerald-500" />
            Premium Platform Toolkit
          </h3>
          <p className="text-emerald-800 dark:text-emerald-400 font-medium mb-6">Serious platforms require structured mechanics:</p>
          <div className="grid grid-cols-2 gap-4">
            {['SQL Playground (Live)', 'Downloadable DBs', 'Practice Mode', 'Challenge Mode', 'Timed Queries', 'Interview Mode'].map((f, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex items-center text-sm font-bold text-gray-800 dark:text-gray-200">
                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>

        {/* Monetization Roadmap */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 p-8 py-10 rounded-3xl border border-indigo-200 dark:border-indigo-800/40 shadow-sm flex flex-col justify-center text-center">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 mr-3 text-indigo-500" />
            Monetization Strategy
          </h3>

          <div className="space-y-4 max-w-sm mx-auto w-full">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-indigo-400 shadow-sm flex justify-between items-center text-left">
              <span className="font-bold text-gray-800 dark:text-white text-sm">Basic Modules (W1 & W2)</span>
              <span className="bg-green-100 text-green-700 text-xs font-black uppercase px-2 py-1 rounded">FREE</span>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-amber-400 shadow-sm flex justify-between items-center text-left">
              <span className="font-bold text-gray-800 dark:text-white text-sm">Advanced Modules</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-black uppercase px-2 py-1 rounded">PAID</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border-t border-purple-200 dark:border-purple-800 text-sm font-bold text-gray-700 dark:text-gray-300">Cert. Exam</div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center border-t border-rose-200 dark:border-rose-800 text-sm font-bold text-gray-700 dark:text-gray-300">Mock Int.</div>
            </div>
          </div>
        </div>

      </section>

      {/* Completion Outcome Banner */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center border-t-8 border-t-emerald-500">
          <GraduationCap className="w-20 h-20 text-emerald-400 mb-6" />
          <h2 className="text-4xl font-black text-white mb-6">Bootcamp Developer Outcome</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mb-10">
            <span className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full font-bold border border-gray-700 text-sm">Build DB Schema</span>
            <span className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full font-bold border border-gray-700 text-sm">Write Complex Joins</span>
            <span className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full font-bold border border-gray-700 text-sm">Optimize Slow Queries</span>
            <span className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full font-bold border border-gray-700 text-sm">Production-level Logic</span>
          </div>
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:scale-105 transition-transform">
            <p className="text-emerald-50 font-bold uppercase tracking-widest text-xs mb-1">Career Target</p>
            <p className="text-2xl font-black text-white">Junior Backend SQL Developer</p>
          </div>
        </div>
      </section>

    </div>
  );
};

// Required wrapper to make the Chevron icon work missing from import list at top
const ChevronRight = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export default SqlBootcamp;