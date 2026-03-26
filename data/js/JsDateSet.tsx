import React, { useState, useEffect } from 'react';
import {
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
  Hash,
  AlertTriangle,
  PlusCircle,
  Settings
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

const JsDateSet: React.FC = () => {
  const [baseDate, setBaseDate] = useState(new Date());
  const [modYear, setModYear] = useState('2028');
  const [modMonth, setModMonth] = useState('0');
  const [modDay, setModDay] = useState('1');
  const [expiryDays, setExpiryDays] = useState('7');

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getModifiedDate = () => {
    const d = new Date();
    d.setFullYear(Number(modYear));
    d.setMonth(Number(modMonth));
    d.setDate(Number(modDay));
    return d;
  };

  const getExpiryDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + Number(expiryDays));
    return d;
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Edit3 size={14} /> MODIFY DATES
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 drop-shadow-2xl">
            Date Set
          </span><br />
          Methods
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Set methods are used to <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">change or update specific parts</span> of a Date object (year, month, day, time).
        </p>
      </header>

      {/* ── Interactive Date Modifier Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Settings} title="Date Modifier Lab" subtitle="Change values and see the result live." color="text-emerald-500" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Edit3 className="text-emerald-500" size={20} /> Set Values
            </h3>
            <div className="space-y-4">
              {[
                { label: 'setFullYear()', value: modYear, setter: setModYear, placeholder: '2028' },
                { label: 'setMonth()', value: modMonth, setter: setModMonth, placeholder: '0 (Jan)' },
                { label: 'setDate()', value: modDay, setter: setModDay, placeholder: '1' }
              ].map((item, i) => (
                <div key={i}>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">{item.label}</label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) => item.setter(e.target.value)}
                    placeholder={item.placeholder}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl outline-none focus:ring-2 ring-emerald-500/20 font-mono text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Calendar size={120} className="text-emerald-500" />
            </div>
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-2 italic relative z-10">
              <Monitor className="text-emerald-500" size={20} /> Result
            </h3>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center mb-6 relative z-10">
              <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-3">MODIFIED DATE</span>
              <span className="text-3xl font-black font-mono text-white">{getModifiedDate().toDateString()}</span>
            </div>
            <div className="p-4 bg-black rounded-xl font-mono text-xs text-gray-400 border border-white/5 relative z-10">
              <span className="text-emerald-400">d</span>.setFullYear(<span className="text-amber-400">{modYear}</span>);<br/>
              <span className="text-emerald-400">d</span>.setMonth(<span className="text-amber-400">{modMonth}</span>);<br/>
              <span className="text-emerald-400">d</span>.setDate(<span className="text-amber-400">{modDay}</span>);
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 & 4: Setup & All Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1-2. Definition & Setup" subtitle="Create a Date object first." color="text-emerald-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-emerald-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              Set methods are used to change or update specific parts of a Date object (year, month, day, time).
            </p>
          </div>
          <CodeBlock title="Setup" code={`let d = new Date();\nconsole.log(d);\n\n// 👉 Example:\n// Fri Mar 26 2026 16:30:00 GMT+0530`} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2"><Hash className="text-emerald-500" size={20} /> 4. All Important Set Methods</h3>
          {[
            { method: '1. setFullYear()', code: 'd.setFullYear(2030);', note: '👉 Changes the year' },
            { method: '2. setMonth() ⚠️', code: 'd.setMonth(5);', note: '👉 Sets month (0–11)' },
            { method: '3. setDate()', code: 'd.setDate(15);', note: '👉 Sets day of the month' },
            { method: '4. setHours()', code: 'd.setHours(10);', note: null },
            { method: '5. setMinutes()', code: 'd.setMinutes(45);', note: null },
            { method: '6. setSeconds()', code: 'd.setSeconds(30);', note: null },
            { method: '7. setMilliseconds()', code: 'd.setMilliseconds(500);', note: null },
            { method: '8. setTime() (Advanced)', code: 'd.setTime(1711440000000);', note: '👉 Sets using timestamp' }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">🔹 {item.method}</span>
              </div>
              <code className="text-xs font-mono text-gray-500 dark:text-gray-400">{item.code}</code>
              {item.note && <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold mt-1">{item.note}</p>}
            </div>
          ))}

          {/* Month sub-table */}
          <div className="bg-[#0b1120] p-6 rounded-2xl border border-white/5">
            <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest block mb-3">⚠️ Month Values (0-indexed)</span>
            <div className="grid grid-cols-6 gap-2">
              {monthNames.map((m, i) => (
                <div key={i} className="p-2 bg-white/5 border border-white/10 rounded-lg text-center">
                  <span className="text-sm font-black text-white block">{i}</span>
                  <span className="text-[7px] font-black text-gray-500 uppercase">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Step-by-Step Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Code2 size={200} className="text-emerald-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Terminal} title="5. Step-by-Step Example" subtitle="Combining multiple set calls." color="text-emerald-500" />
            <CodeBlock title="Step-by-Step" code={`let d = new Date();\n\nd.setFullYear(2028);\nd.setMonth(0);   // January\nd.setDate(1);\n\nconsole.log(d);\n// 👉 Output: Mon Jan 01 2028`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={PlusCircle} title="6. Real-World Examples" subtitle="Adding days, months, and years." color="text-teal-500" />
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {[
            { title: '🎯 Add 7 Days', code: `let d = new Date();\n\nd.setDate(d.getDate() + 7);\n\nconsole.log(d);`, uses: ['Expiry dates', 'Booking systems', 'Deadlines'] },
            { title: '🎯 Add 1 Month', code: `d.setMonth(d.getMonth() + 1);`, uses: [] },
            { title: '🎯 Add 1 Year', code: `d.setFullYear(d.getFullYear() + 1);`, uses: [] }
          ].map((item, i) => (
            <div key={i} className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <h4 className="text-sm font-black text-white mb-4">{item.title}</h4>
              <CodeBlock code={item.code} />
              {item.uses.length > 0 && (
                <div className="mt-4 space-y-2">
                  <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">👉 Used in:</span>
                  {item.uses.map((u, j) => (
                    <div key={j} className="text-gray-400 text-xs font-medium pl-4">• {u}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Expiry Calculator */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Timer className="text-teal-500" size={20} /> Expiry Date Calculator
          </h3>
          <div className="flex gap-4 items-end mb-6">
            <div className="flex-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Days from now</label>
              <input
                type="number"
                value={expiryDays}
                onChange={(e) => setExpiryDays(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl outline-none focus:ring-2 ring-teal-500/20 font-mono text-sm"
              />
            </div>
            <div className="flex-1 p-4 bg-teal-500/5 border border-teal-500/10 rounded-2xl text-center">
              <span className="text-[8px] font-black text-teal-500 uppercase tracking-widest block mb-1">EXPIRY DATE</span>
              <span className="text-lg font-black font-mono text-gray-900 dark:text-white">{getExpiryDate().toDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Auto-Adjustment ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <AlertTriangle size={150} className="text-amber-500" />
          </div>
          <SectionHeader icon={AlertTriangle} title="7. Automatic Date Adjustment" subtitle="JavaScript auto-adjusts overflow values." color="text-amber-500" />
          <CodeBlock code={`let d = new Date();\n\nd.setDate(32);\nconsole.log(d);\n// 👉 Output: Next month date\n\n// 👉 This is powerful but tricky ⚠️`} />
          <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
            <p className="text-xs text-amber-700 dark:text-amber-400 font-bold italic">⚠️ JavaScript will roll over to the next valid date automatically. Great for calculations, but be cautious with edge cases!</p>
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Globe size={150} className="text-cyan-500" />
          </div>
          <SectionHeader icon={Globe} title="8. UTC Set Methods" subtitle="Advanced: Set in UTC timezone." color="text-cyan-500" />
          <CodeBlock code={`d.setUTCFullYear(2030);\nd.setUTCHours(12);`} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: 'Global Apps', emoji: '🌍' },
              { label: 'Server Logic', emoji: '🖥️' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl text-center">
                <span className="text-3xl block mb-2">{item.emoji}</span>
                <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Complete Practical ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-16 bg-[#0b1120] rounded-[5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Monitor size={200} className="text-emerald-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Code2} title="9. Complete Practical Example" subtitle="Expiry Date System." color="text-emerald-500" />
            <CodeBlock title="setExpiry()" code={`function setExpiry(days) {\n    let d = new Date();\n    d.setDate(d.getDate() + days);\n    return d;\n}\n\nconsole.log(setExpiry(7));`} />
            <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
              <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-2">LIVE: setExpiry(7)</span>
              <span className="text-2xl font-black font-mono text-white">{getExpiryDate().toDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Modified.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "The power to change time is in your hands — one method at a time."
        </p>
      </footer>
    </div>
  );
};

export default JsDateSet;