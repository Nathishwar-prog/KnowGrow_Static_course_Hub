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
  AlarmClock,
  Hash,
  Layers,
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

const JsDateGet: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 animate-pulse tracking-[0.2em]">
          <Search size={14} /> EXTRACTING DATE PARTS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-500 drop-shadow-2xl">
            Date Get
          </span><br />
          Methods
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Date Get methods are used to <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500 underline-offset-4 tracking-tight">extract specific parts</span> (day, month, year, time) from a Date object.
        </p>
      </header>

      {/* ── Live Date Parts Explorer ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5 animate-pulse">
            <Calendar size={200} className="text-violet-500" />
          </div>
          <div className="text-center relative z-10 mb-8">
            <span className="text-[8px] font-black text-violet-400 uppercase tracking-[0.3em] block mb-4">⏱ Live Date Object — Updates Every Second</span>
            <p className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tighter mb-8">
              {now.toDateString()} {now.toLocaleTimeString('en-IN')}
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {[
              { label: 'getFullYear()', value: String(now.getFullYear()), color: 'text-violet-400' },
              { label: 'getMonth()', value: `${now.getMonth()} (${monthNames[now.getMonth()]})`, color: 'text-fuchsia-400' },
              { label: 'getDate()', value: String(now.getDate()), color: 'text-pink-400' },
              { label: 'getDay()', value: `${now.getDay()} (${dayNames[now.getDay()]})`, color: 'text-amber-400' },
              { label: 'getHours()', value: String(now.getHours()), color: 'text-emerald-400' },
              { label: 'getMinutes()', value: String(now.getMinutes()), color: 'text-cyan-400' },
              { label: 'getSeconds()', value: String(now.getSeconds()), color: 'text-sky-400' },
              { label: 'getMilliseconds()', value: String(now.getMilliseconds()), color: 'text-teal-400' },
              { label: 'getTime()', value: String(now.getTime()), color: 'text-orange-400' },
              { label: 'getTimezoneOffset()', value: `${now.getTimezoneOffset()} min`, color: 'text-rose-400' }
            ].map((item, i) => (
              <div key={i} className="px-4 py-5 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <span className="text-[7px] font-black text-gray-500 uppercase tracking-widest block mb-2">{item.label}</span>
                <span className={`text-sm font-black font-mono ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 & 4: Create & All Get Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1-2. Definition & Setup" subtitle="Create a Date object first." color="text-violet-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-violet-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-violet-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Simple Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              Date Get methods are used to extract specific parts (day, month, year, time) from a Date object.
            </p>
          </div>
          <CodeBlock title="Setup" code={`let d = new Date();\n\n// 👉 Example value:\n// Fri Mar 26 2026 16:30:00 GMT+0530`} />

          <div className="space-y-4">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2"><Hash className="text-violet-500" size={20} /> 4. All Important Get Methods</h3>
            {[
              { method: '1. getFullYear()', code: 'd.getFullYear();', output: '2026', note: null },
              { method: '2. getMonth() ⚠️', code: 'd.getMonth();', output: '2', note: '⚠️ Months start from 0' },
              { method: '3. getDate()', code: 'd.getDate();', output: '26', note: '👉 Day of the month' },
              { method: '4. getDay()', code: 'd.getDay();', output: '5', note: '👉 Day of week (0=Sun, 5=Fri)' },
              { method: '5. getHours()', code: 'd.getHours();', output: '16', note: '👉 24-hour format' },
              { method: '6. getMinutes()', code: 'd.getMinutes();', output: '30', note: null },
              { method: '7. getSeconds()', code: 'd.getSeconds();', output: '—', note: null },
              { method: '8. getMilliseconds()', code: 'd.getMilliseconds();', output: '—', note: null },
              { method: '9. getTime()', code: 'd.getTime();', output: 'ms since 1970', note: null }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-black text-violet-500 uppercase tracking-widest">🔹 {item.method}</span>
                  <span className="text-[9px] font-black text-emerald-500 font-mono">→ {item.output}</span>
                </div>
                <code className="text-xs font-mono text-gray-500 dark:text-gray-400">{item.code}</code>
                {item.note && <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold mt-1">{item.note}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Month Table */}
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest mb-6 italic underline decoration-fuchsia-500/30 underline-offset-4">⚠️ Month Values (0-indexed)</h4>
            <div className="grid grid-cols-4 gap-3">
              {monthNames.map((m, i) => (
                <div key={i} className={`p-3 rounded-xl text-center border ${i === now.getMonth() ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'bg-white/5 border-white/10'}`}>
                  <span className="text-lg font-black text-white block">{i}</span>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day Table */}
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-6 italic underline decoration-amber-500/30 underline-offset-4">Day of Week Values</h4>
            <div className="grid grid-cols-7 gap-2">
              {dayNames.map((d, i) => (
                <div key={i} className={`p-3 rounded-xl text-center border ${i === now.getDay() ? 'bg-amber-500/20 border-amber-500/50' : 'bg-white/5 border-white/10'}`}>
                  <span className="text-lg font-black text-white block">{i}</span>
                  <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest">{d.slice(0, 3)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UTC Methods */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe size={100} className="text-violet-500" />
            </div>
            <SectionHeader icon={Globe} title="5. UTC Get Methods" subtitle="Advanced: Same methods in UTC time." color="text-violet-500" />
            <CodeBlock code={`d.getUTCFullYear();\nd.getUTCHours();`} />
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { label: 'Global Apps', emoji: '🌍' },
                { label: 'Servers', emoji: '🖥️' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-violet-500/5 border border-violet-500/10 rounded-xl text-center">
                  <span className="text-2xl block mb-1">{item.emoji}</span>
                  <span className="text-[9px] font-black text-violet-500 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Digital Clock ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-16 bg-white dark:bg-gray-800 rounded-[5rem] shadow-2xl border border-gray-50 dark:border-gray-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <AlarmClock size={200} className="text-violet-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Clock} title="6. Real-World: Digital Clock" subtitle="Using Get methods to build a live clock." color="text-violet-500" />
            <CodeBlock title="Digital Clock" code={`function showTime() {\n    let d = new Date();\n\n    let h = d.getHours();\n    let m = d.getMinutes();\n    let s = d.getSeconds();\n\n    console.log(\`\${h}:\${m}:\${s}\`);\n}\n\nsetInterval(showTime, 1000);`} />
            <div className="mt-8 p-8 bg-[#0b1120] rounded-3xl border border-white/5 text-center">
              <span className="text-[8px] font-black text-violet-400 uppercase tracking-[0.3em] block mb-3">⏱ LIVE DIGITAL CLOCK</span>
              <span className="text-5xl font-black font-mono text-white">
                {String(now.getHours()).padStart(2, '0')}
                <span className="text-violet-500 animate-pulse">:</span>
                {String(now.getMinutes()).padStart(2, '0')}
                <span className="text-violet-500 animate-pulse">:</span>
                {String(now.getSeconds()).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7 & 8: Custom Format ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Code2 size={150} className="text-fuchsia-500" />
          </div>
          <SectionHeader icon={Terminal} title="7. Custom Format" subtitle="DD-MM-YYYY using Get methods." color="text-fuchsia-500" />
          <CodeBlock title="Format: DD-MM-YYYY" code={`let d = new Date();\n\nlet day = d.getDate();\nlet month = d.getMonth() + 1;\nlet year = d.getFullYear();\n\nconsole.log(\`\${day}-\${month}-\${year}\`);\n// 👉 Output: 26-3-2026`} />
          <div className="mt-4 p-4 bg-fuchsia-500/5 border border-fuchsia-500/10 rounded-2xl text-center">
            <span className="text-[8px] font-black text-fuchsia-500 uppercase tracking-widest block mb-1">LIVE OUTPUT</span>
            <span className="text-xl font-black font-mono text-gray-900 dark:text-white">
              {now.getDate()}-{now.getMonth() + 1}-{now.getFullYear()}
            </span>
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Layers size={150} className="text-pink-500" />
          </div>
          <SectionHeader icon={Code2} title="8. With Padding" subtitle="Professional formatting with padStart." color="text-pink-500" />
          <CodeBlock title="Padded Format" code={`let d = new Date();\n\nlet day = String(d.getDate()).padStart(2, '0');\nlet month = String(d.getMonth() + 1).padStart(2, '0');\n\nconsole.log(\`\${day}-\${month}-\${d.getFullYear()}\`);\n// 👉 Output: 26-03-2026`} />
          <div className="mt-4 p-4 bg-pink-500/10 border border-pink-500/20 rounded-2xl text-center">
            <span className="text-[8px] font-black text-pink-400 uppercase tracking-widest block mb-1">PADDED LIVE OUTPUT</span>
            <span className="text-xl font-black font-mono text-white">
              {String(now.getDate()).padStart(2, '0')}-{String(now.getMonth() + 1).padStart(2, '0')}-{now.getFullYear()}
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Extracted.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Every second counts — and now you know how to get each one."
        </p>
      </footer>
    </div>
  );
};

export default JsDateGet;