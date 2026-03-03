import React, { useState } from 'react';
import { Database, Terminal, CheckCircle, Target, Award, ShieldCheck, GraduationCap, MapPin, Briefcase, TrendingUp, Cpu, Server, Lock, Layers, Download, Check, FileText, QrCode, MonitorPlay, Users, Star } from 'lucide-react';

const SqlCertificate: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(3); // 1 = Foundational, 2 = Inter, 3 = Pro

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-6xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          SQL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Certification</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Master SQL from zero to professional level. Learn real-world database skills used in production systems and earn an industry-aligned Certification.
        </p>
        <div className="flex justify-center gap-3 mt-8">
          <span className="bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Practical Skills</span>
          <span className="bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Query Writing</span>
          <span className="bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 flex items-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> DB Design</span>
        </div>
      </header>

      {/* 3-Tier Certificate System */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-3 flex items-center">
          <Layers className="w-8 h-8 mr-3 text-amber-500" />
          The 3-Tier Certification Path
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Tier 1 */}
          <div
            onClick={() => setActiveTier(1)}
            className={`cursor-pointer rounded-3xl p-8 border-2 transition-all transform hover:-translate-y-1 shadow-sm relative overflow-hidden ${activeTier === 1 ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-300'}`}
          >
            {activeTier === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>}
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 font-black text-xl">1</div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Foundation</h3>
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Level 1 Certificate</p>

            <ul className="space-y-3">
              {['SELECT', 'WHERE', 'AND, OR', 'BETWEEN', 'IN', 'ORDER BY', 'Basic Aggregates'].map((t, i) => (
                <li key={i} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CheckCircle className={`w-4 h-4 mr-3 ${activeTier === 1 ? 'text-emerald-500' : 'text-gray-400'}`} /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 2 */}
          <div
            onClick={() => setActiveTier(2)}
            className={`cursor-pointer rounded-3xl p-8 border-2 transition-all transform hover:-translate-y-1 shadow-sm relative overflow-hidden ${activeTier === 2 ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-amber-300'}`}
          >
            {activeTier === 2 && <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>}
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 font-black text-xl">2</div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Intermediate</h3>
            <p className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Level 2 Certificate</p>

            <ul className="space-y-3">
              {['GROUP BY', 'HAVING', 'JOINS', 'Subqueries', 'CASE', 'Aliases'].map((t, i) => (
                <li key={i} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CheckCircle className={`w-4 h-4 mr-3 ${activeTier === 2 ? 'text-amber-500' : 'text-gray-400'}`} /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 3 */}
          <div
            onClick={() => setActiveTier(3)}
            className={`cursor-pointer rounded-3xl p-8 border-2 transition-all transform hover:-translate-y-1 shadow-xl relative overflow-hidden ${activeTier === 3 ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 shadow-[0_10px_40px_rgba(244,63,94,0.15)]' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-rose-300'}`}
          >
            {activeTier === 3 && <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>}
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-black uppercase px-4 py-1 rounded-bl-xl shadow-sm">Premium</div>
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/50 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 font-black text-xl">3</div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Professional</h3>
            <p className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Level 3 Certificate</p>

            <ul className="space-y-3">
              {['Indexing', 'Optimization', 'Transactions', 'Backup & Restore', 'Stored Procedures', 'Window Functions', 'Database Design'].map((t, i) => (
                <li key={i} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <CheckCircle className={`w-4 h-4 mr-3 ${activeTier === 3 ? 'text-rose-500' : 'text-gray-400'}`} /> {t}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Assessment Engine */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-gray-800">
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 relative z-10 flex items-center">
            <Target className="w-8 h-8 mr-4 text-indigo-400" />
            Professional Assessment Engine
          </h2>
          <p className="text-gray-400 font-medium mb-12 relative z-10 border-b border-gray-800 pb-6 max-w-2xl">
            A globally recognized certification requires strict, multi-dimensional evaluation. We do not hand out certificates just for watching videos.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">

            {/* Section 1 */}
            <div className="bg-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 text-indigo-400"><FileText className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Section 1: Theory MCQ</h3>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Core Knowledge Check</p>

              <div className="space-y-3">
                <div className="bg-black/40 p-3 rounded-lg border border-gray-700 text-sm text-gray-300">"What does GROUP BY do?"</div>
                <div className="bg-black/40 p-3 rounded-lg border border-gray-700 text-sm text-gray-300">"Difference between WHERE and HAVING?"</div>
                <div className="bg-black/40 p-3 rounded-lg border border-gray-700 text-sm text-gray-300">"Explain Normalization & Indexes"</div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6 text-emerald-400"><Terminal className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Section 2: Practical SQL</h3>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Live Coding Exam</p>

              <div className="space-y-3">
                <p className="text-xs text-gray-400 font-bold mb-2">GIVEN TABLE: <code>| id | name | salary |</code></p>
                <div className="bg-black/40 p-3 rounded-lg border border-gray-700 text-sm text-gray-400 font-mono">
                  <span className="text-emerald-400">1.</span> Find average salary<br />
                  <span className="text-emerald-400">2.</span> Find top 3 salaries<br />
                  <span className="text-emerald-400">3.</span> Use CASE to classify salary
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 bg-rose-900/50 rounded-xl flex items-center justify-center mb-6 text-rose-400"><Briefcase className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Section 3: Miniproject</h3>
              <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">Architecture & Design</p>

              <div className="space-y-3">
                <p className="text-sm text-gray-300 mb-2">Design a database from scratch for an <strong>E-commerce</strong> or <strong>Banking</strong> platform.</p>
                <ul className="text-sm font-medium text-gray-400 space-y-1 mt-4">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-rose-500" /> Create Tables</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-rose-500" /> Add Constraints</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-rose-500" /> Insert Valid Data</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-rose-500" /> Query Results</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Visual Certificate Mockup */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-3 flex items-center">
          <ShieldCheck className="w-8 h-8 mr-3 text-amber-500" />
          The Final Credential
        </h2>

        <div className="bg-white dark:bg-gray-50 border-[16px] border-double border-gray-800 dark:border-gray-900 p-8 sm:p-16 rounded-sm shadow-2xl relative text-center">

          <div className="absolute top-8 left-8">
            <QrCode className="w-16 h-16 text-gray-800 dark:text-gray-900 opacity-80" />
            <p className="text-[10px] font-mono font-bold text-gray-500 mt-1">SQL-2026-001245</p>
          </div>

          <div className="absolute top-8 right-8 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <Award className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 font-bold mb-4 mt-12 uppercase tracking-widest text-[#2c3e50]">Certificate of Completion</h1>
          <p className="text-lg text-gray-600 font-medium mb-8 font-serif italic">This officially certifies that</p>

          <h2 className="text-5xl text-amber-600 font-bold mb-8 font-serif border-b-2 border-gray-200 inline-block pb-2 px-10">[ Student Name ]</h2>

          <p className="text-lg text-gray-600 font-medium mb-6 font-serif">has successfully completed the comprehensive</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">SQL Bootcamp – Beginner to Advanced</h3>

          <p className="text-md text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            and has demonstrated exceptional proficiency through rigorous practical examination in Query Writing, Database Design, Complex Joins & Aggregation, and Performance Optimization.
          </p>

          <div className="flex justify-between items-end mt-16 max-w-3xl mx-auto px-4">
            <div className="text-center w-48">
              <div className="border-b-2 border-gray-400 mb-2 h-8 flex items-end justify-center"><span className="text-gray-800 font-mono text-sm">March 1, 2026</span></div>
              <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Date of Issue</p>
            </div>

            <div className="text-center w-48">
              <div className="border-b-2 border-gray-400 mb-2 h-8 flex items-end justify-center"><span className="text-gray-900 font-serif text-xl italic font-bold">Karthick Raja</span></div>
              <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">Lead Instructor</p>
            </div>
          </div>

          {/* Verification Banner */}
          <div className="mt-16 bg-gray-100 p-3 rounded text-sm font-mono text-gray-500 border border-gray-200 shadow-inner inline-flex items-center">
            <Lock className="w-4 h-4 mr-2" /> Verify Authenticity: <span className="text-blue-600 ml-2 font-bold">yourwebsite.com/verify/SQL-2026-001245</span>
          </div>
        </div>
      </section>

      {/* Global Standards & 15Yrs Experience Block */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 lg:p-10 rounded-3xl border border-blue-200 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold flex items-center mb-6 text-blue-900 dark:text-blue-300">
              <MonitorPlay className="w-7 h-7 mr-3 text-blue-500" />
              Live Developer Advice
            </h3>
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-8 border-b border-blue-200 dark:border-blue-800/50 pb-4">(15+ Years Industry Experience)</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-2"><span className="text-xl mr-2">🔥</span> 1. Force Real Project Evaluation</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 pl-7">Students cannot just receive a certificate for "watching videos". They must submit physical project repositories and pass a live terminal test.</p>
              </div>
              <div>
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-2"><span className="text-xl mr-2">🔥</span> 2. Implement Timed Challenges</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 pl-7">Simulate high-pressure environments. Give them <strong>20 queries</strong> and exactly <strong>45 minutes</strong> in a locked live coding terminal.</p>
              </div>
              <div>
                <h4 className="font-bold flex items-center text-gray-900 dark:text-white mb-2"><span className="text-xl mr-2">🔥</span> 3. Gamify Difficulty Levels</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 pl-7">Students love progression arcs. Force them to unlock Intermediate by passing Beginner, simulating an RPG-like skill tree.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold flex items-center mb-4 text-gray-900 dark:text-white">
              <Star className="w-7 h-7 mr-3 text-amber-500" />
              Industry Competitors
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
              Design your certificate to align with—and rival—these global heavyweight credentials:
            </p>

            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm flex items-center">
                <div className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold mr-4">O</div> Oracle Database SQL Certified Associate
              </li>
              <li className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm flex items-center">
                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">M</div> Microsoft Azure Data Fundamentals
              </li>
              <li className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm flex items-center">
                <div className="w-8 h-8 rounded bg-blue-800 text-white flex items-center justify-center font-bold mr-4">IBM</div> IBM Data Analyst Professional Certificate
              </li>
              <li className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 shadow-sm flex items-center">
                <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-4">My</div> MySQL Developer Certification
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Pricing Module */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Bootcamp Monetization Tiers</h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* Tier 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center text-center">
            <h3 className="font-bold text-gray-500 mb-2 uppercase tracking-wide">Starter</h3>
            <div className="text-3xl font-black text-gray-900 dark:text-white mb-6">Free</div>
            <div className="flex-grow w-full border-t border-gray-100 dark:border-gray-700 pt-6">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Basic modules only</p>
              <p className="text-xs text-gray-400 mt-2">No certificates</p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-t-4 border-t-emerald-500 shadow-md flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide">Graduate</h3>
            <div className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-start justify-center"><span className="text-lg mt-1 mr-1">₹</span>999</div>
            <div className="flex-grow w-full border-t border-gray-100 dark:border-gray-700 pt-6">
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center justify-center mb-2"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Level Assessment</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center justify-center"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Verified Certificate</p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="bg-gray-900 rounded-2xl p-6 border-t-4 border-t-amber-500 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform scale-105 z-10 relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-bl-lg shadow-sm">Popular</div>
            <h3 className="font-bold text-amber-500 mb-2 uppercase tracking-wide">Professional</h3>
            <div className="text-3xl font-black text-white mb-6 flex items-start justify-center"><span className="text-lg mt-1 mr-1 text-gray-400">₹</span>1999</div>
            <div className="flex-grow w-full border-t border-gray-800 pt-6">
              <p className="text-sm font-bold text-gray-200 flex items-center justify-center mb-2"><Check className="w-4 h-4 mr-2 text-amber-500" /> Advanced Curriculum</p>
              <p className="text-sm font-bold text-gray-200 flex items-center justify-center"><Check className="w-4 h-4 mr-2 text-amber-500" /> Project Review By Reps</p>
            </div>
          </div>

          {/* Tier 4 */}
          <div className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-2xl p-6 border border-indigo-700 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-indigo-300 mb-2 uppercase tracking-wide">Mentorship</h3>
            <div className="text-3xl font-black text-white mb-6 flex items-start justify-center"><span className="text-lg mt-1 mr-1 text-indigo-400">₹</span>4999</div>
            <div className="flex-grow w-full border-t border-indigo-800 pt-6">
              <p className="text-sm font-bold text-indigo-100 flex items-center justify-center mb-2"><Check className="w-4 h-4 mr-2 text-indigo-400" /> Mock Interview Call</p>
              <p className="text-sm font-bold text-indigo-100 flex items-center justify-center"><Check className="w-4 h-4 mr-2 text-indigo-400" /> 1-on-1 Mentorship</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlCertificate;