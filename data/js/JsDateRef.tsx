import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Info,
  Zap,
  Terminal,
  Timer,
  CalendarDays,
  Code2,
  Monitor,
  Copy,
  Check,
  Edit3,
  Eye,
  Layers,
  Hash,
  Settings,
  Search
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button onClick={handleCopy} className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors">
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsDateRef: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-rose-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <BookOpen size={14} /> COMPLETE REFERENCE
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-fuchsia-500 drop-shadow-2xl">
            Date
          </span><br />
          Reference
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          A collection of <span className="text-gray-900 dark:text-white font-bold underline decoration-rose-500 underline-offset-4 tracking-tight">all methods, properties, and usages</span> of the Date object.
        </p>
      </header>

      {/* ── Section 2: Creating Date Objects ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1-2. Definition & Creating" subtitle="All the ways to create a Date object." color="text-rose-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-rose-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              JavaScript Date Reference is a collection of all methods, properties, and usages of the Date object used to work with date and time.
            </p>
          </div>
          <CodeBlock title="Creating Dates" code={`new Date()                  // Current\nnew Date("2026-03-26")      // From string\nnew Date(2026, 2, 26)       // Year, Month-1, Day\nnew Date(milliseconds)      // From timestamp\n\n// ⚠️ Month starts from 0 (Jan = 0)`} />
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
            <Calendar size={150} className="text-rose-500" />
          </div>
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
            <Clock className="text-rose-500" size={24} /> Live Date Object
          </h3>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center mb-6 relative z-10">
            <span className="text-3xl font-black font-mono text-white">{now.toDateString()}</span>
            <span className="text-2xl font-black font-mono text-rose-400 block mt-2">{now.toLocaleTimeString('en-IN')}</span>
          </div>
          <div className="grid grid-cols-3 gap-3 relative z-10">
            {[
              { l: 'YEAR', v: now.getFullYear() },
              { l: 'MONTH', v: now.getMonth() },
              { l: 'DATE', v: now.getDate() },
              { l: 'DAY', v: now.getDay() },
              { l: 'HOURS', v: now.getHours() },
              { l: 'SECONDS', v: now.getSeconds() }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                <span className="text-[7px] font-black text-gray-500 uppercase tracking-widest block mb-1">{item.l}</span>
                <span className="text-lg font-black font-mono text-rose-400">{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: GET Methods ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Eye} title="4. GET Methods (Read Values)" subtitle="Extract specific parts from a Date." color="text-rose-500" />
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-rose-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Example Output</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { m: 'getFullYear()', d: 'Year', o: '2026' },
                { m: 'getMonth()', d: 'Month (0–11)', o: '2' },
                { m: 'getDate()', d: 'Day (1–31)', o: '26' },
                { m: 'getDay()', d: 'Weekday (0–6)', o: '5' },
                { m: 'getHours()', d: 'Hours', o: '16' },
                { m: 'getMinutes()', d: 'Minutes', o: '30' },
                { m: 'getSeconds()', d: 'Seconds', o: '45' },
                { m: 'getMilliseconds()', d: 'Milliseconds', o: '500' },
                { m: 'getTime()', d: 'Timestamp', o: '1711440000000' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-rose-500/5 transition-colors">
                  <td className="p-6 text-rose-600 dark:text-rose-400 font-black font-mono text-xs">{row.m}</td>
                  <td className="p-6 text-gray-600 dark:text-gray-300 italic">{row.d}</td>
                  <td className="p-6 text-gray-900 dark:text-white font-mono font-bold">{row.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock title="GET Example" code={`let d = new Date();\n\nconsole.log(d.getFullYear());     // 2026\nconsole.log(d.getMonth() + 1);    // 3\nconsole.log(d.getDate());          // 26`} />
      </section>

      {/* ── Section 5: SET Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader icon={Edit3} title="5. SET Methods (Modify)" subtitle="Change parts of a Date object." color="text-fuchsia-500" />
          <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-fuchsia-600 text-white">
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {[
                  { m: 'setFullYear()', d: 'Set year' },
                  { m: 'setMonth()', d: 'Set month' },
                  { m: 'setDate()', d: 'Set day' },
                  { m: 'setHours()', d: 'Set hours' },
                  { m: 'setMinutes()', d: 'Set minutes' },
                  { m: 'setSeconds()', d: 'Set seconds' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-fuchsia-500/5 transition-colors">
                    <td className="p-6 text-fuchsia-400 font-black font-mono text-xs">{row.m}</td>
                    <td className="p-6 text-gray-400 italic">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock title="SET Example" code={`let d = new Date();\n\nd.setFullYear(2030);\nd.setMonth(5);    // June\nd.setDate(15);\n\nconsole.log(d);`} />
        </div>

        <div>
          <SectionHeader icon={Settings} title="6. FORMAT Methods" subtitle="Convert Date to readable strings." color="text-indigo-500" />
          <div className="bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Output</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {[
                  { m: 'toDateString()', o: 'Fri Mar 26 2026' },
                  { m: 'toTimeString()', o: '16:30:00 GMT' },
                  { m: 'toISOString()', o: '2026-03-26T10:30:00.000Z' },
                  { m: 'toLocaleDateString()', o: '26/03/2026' },
                  { m: 'toLocaleTimeString()', o: '4:30 PM' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-indigo-500/5 transition-colors">
                    <td className="p-6 text-indigo-600 dark:text-indigo-400 font-black font-mono text-xs">{row.m}</td>
                    <td className="p-6 text-gray-600 dark:text-gray-300 font-mono text-xs italic">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock title="FORMAT Example" code={`let d = new Date();\n\nconsole.log(d.toDateString());\nconsole.log(d.toLocaleDateString("en-IN"));`} />
        </div>
      </section>

      {/* ── Section 7 & 8: Static & UTC ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Hash size={150} className="text-emerald-500" />
          </div>
          <SectionHeader icon={Terminal} title="7. Static Methods" subtitle="Class-level utilities." color="text-emerald-500" />
          <div className="bg-[#0b1120] rounded-[2rem] border border-white/5 overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-5 text-emerald-400 font-black font-mono text-xs">Date.now()</td>
                  <td className="p-5 text-gray-400 italic">Current timestamp</td>
                </tr>
                <tr>
                  <td className="p-5 text-emerald-400 font-black font-mono text-xs">Date.parse()</td>
                  <td className="p-5 text-gray-400 italic">Convert string → date</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock code={`console.log(Date.now());\n// 👉 ${Date.now()}`} />
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Globe size={150} className="text-sky-500" />
          </div>
          <SectionHeader icon={Globe} title="8. UTC Methods" subtitle="Same as GET/SET but in UTC." color="text-sky-500" />
          <CodeBlock code={`d.getUTCFullYear();\nd.getUTCHours();\nd.setUTCDate(10);`} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: 'Global Apps', emoji: '🌍' },
              { label: 'Servers', emoji: '🖥️' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl text-center">
                <span className="text-3xl block mb-2">{item.emoji}</span>
                <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Timestamp ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Timer size={200} className="text-rose-500" />
          </div>
          <div className="max-w-3xl relative z-10">
            <SectionHeader icon={Timer} title="9. Timestamp & Internal Working" subtitle="How dates are stored internally." color="text-rose-500" />
            <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-3xl mb-8">
              <p className="text-sm font-bold text-gray-900 dark:text-white">🧠 Important Concept:</p>
              <p className="text-rose-600 dark:text-rose-400 font-black text-lg mt-2">Date = milliseconds since Jan 1, 1970 (UTC)</p>
            </div>
            <CodeBlock code={`let timestamp = new Date().getTime();\nconsole.log(timestamp);`} />
            <div className="p-4 bg-[#0b1120] border border-white/5 rounded-2xl text-center">
              <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest block mb-1">LIVE TIMESTAMP</span>
              <span className="text-2xl font-black font-mono text-white">{now.getTime()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 10: Real-World Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-16 bg-[#0b1120] rounded-[5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Monitor size={200} className="text-rose-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Code2} title="10. Real-World Example" subtitle="Date Formatter Function." color="text-rose-500" />
            <CodeBlock title="formatDate()" code={`function formatDate() {\n    let d = new Date();\n\n    let day = String(d.getDate()).padStart(2, '0');\n    let month = String(d.getMonth() + 1).padStart(2, '0');\n    let year = d.getFullYear();\n\n    return \`\${day}-\${month}-\${year}\`;\n}\n\nconsole.log(formatDate());`} />
            <div className="mt-8 p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-center">
              <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest block mb-2">LIVE OUTPUT</span>
              <span className="text-3xl font-black font-mono text-white">
                {String(now.getDate()).padStart(2, '0')}-{String(now.getMonth() + 1).padStart(2, '0')}-{now.getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Referenced.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-rose-500/10 decoration-2">
          "A complete reference is the foundation of mastery."
        </p>
      </footer>
    </div>
  );
};

export default JsDateRef;