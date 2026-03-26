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
  Languages,
  Code2,
  Monitor,
  Activity,
  Copy,
  Check,
  RefreshCw,
  AlarmClock,
  Scale
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
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
          >
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

const JsDateFormats: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-teal-500/30 overflow-x-hidden">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 text-[10px] font-black mb-8 border border-teal-100 dark:border-teal-900/50 shadow-xl shadow-teal-500/5 animate-pulse tracking-[0.2em]">
          <Calendar size={14} className="fill-current" /> DATE & TIME
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-500 drop-shadow-2xl">
            Date
          </span><br />
          Formats
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          A Date object represents a single moment in time based on <span className="text-gray-900 dark:text-white font-bold underline decoration-teal-500 underline-offset-4 tracking-tight">milliseconds since Jan 1, 1970 — UTC</span>.
        </p>
      </header>

      {/* ── Live Clock Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5 animate-pulse">
            <Clock size={200} className="text-teal-500" />
          </div>
          <div className="text-center relative z-10">
            <span className="text-[8px] font-black text-teal-400 uppercase tracking-[0.3em] block mb-4">⏱ Live Clock — Updates Every Second</span>
            <p className="text-5xl sm:text-7xl font-black text-white font-mono tracking-tighter mb-6">
              {now.toLocaleTimeString('en-IN', { hour12: true })}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { label: 'ISO', value: now.toISOString() },
                { label: 'DATE STRING', value: now.toDateString() },
                { label: 'DD-MM-YYYY', value: `${day}-${month}-${year}` },
                { label: 'TIMESTAMP', value: String(Date.now()) }
              ].map((item, i) => (
                <div key={i} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest block mb-1">{item.label}</span>
                  <span className="text-xs font-mono text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1 & 2: Definition & Creating Dates ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What & 2. Creating" subtitle="Building Date objects from scratch." color="text-teal-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-teal-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Simple Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              A Date object represents a single moment in time (based on milliseconds since Jan 1, 1970 — UTC).
            </p>
          </div>
          <CodeBlock title="Creating Dates" code={`let now = new Date(); // current date & time\nlet specific = new Date("2026-03-26");\nlet custom = new Date(2026, 2, 26); // (year, month-1, day)\n\n// ⚠️ Month starts from 0 (January)`} />
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
            <CalendarDays size={150} className="text-teal-500" />
          </div>
          <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3 italic">
            <CalendarDays className="text-teal-500" size={24} /> 3. Standard Formats
          </h3>
          <div className="space-y-6 relative z-10">
            {[
              { label: 'ISO FORMAT', code: 'date.toISOString()', output: '2026-03-26T10:30:00.000Z', tag: '✅ Most Important' },
              { label: 'SHORT DATE', code: 'new Date("03/26/2026")', output: 'MM/DD/YYYY', tag: '✅ Common' },
              { label: 'LONG DATE', code: 'new Date("March 26, 2026")', output: 'Month DD, YYYY', tag: '✅ Readable' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl group/item hover:bg-teal-500/5 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">{item.label}</span>
                  <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">{item.tag}</span>
                </div>
                <code className="text-xs font-mono text-gray-300 block mb-1">{item.code}</code>
                <span className="text-[10px] text-gray-500 font-mono">→ {item.output}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Output Methods Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Terminal} title="4. Common Output Methods" subtitle="Different ways to display dates." color="text-teal-500" />
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em]">Output Example</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { m: 'd.toDateString()', o: 'Fri Mar 26 2026' },
                { m: 'd.toTimeString()', o: '10:30:00 GMT+0530' },
                { m: 'd.toLocaleDateString()', o: '26/3/2026' },
                { m: 'd.toLocaleTimeString()', o: '10:30:00 AM' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-teal-500/5 transition-colors">
                  <td className="p-8 text-teal-600 dark:text-teal-400 font-black font-mono text-xs">{row.m}</td>
                  <td className="p-8 text-gray-600 dark:text-gray-300 font-mono text-xs italic">{row.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 5 & 6: Custom Formatting ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Code2} title="6. Custom Formatting" subtitle="JS has no built-in DD-MM-YYYY, so we do it manually." color="text-teal-500" />
          <CodeBlock title="DD-MM-YYYY" code={`let d = new Date();\n\nlet day = String(d.getDate()).padStart(2, '0');\nlet month = String(d.getMonth() + 1).padStart(2, '0');\nlet year = d.getFullYear();\n\nlet formatted = \`\${day}-\${month}-\${year}\`;\n\nconsole.log(formatted);\n// 👉 Output: 26-03-2026`} />
          <CodeBlock title="YYYY/MM/DD" code={`let formatted = \`\${year}/\${month}/\${day}\`;\n// 👉 Output: 2026/03/26`} />
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Languages} title="7. Locale-Based Formatting" subtitle="Best practice for international apps." color="text-cyan-500" />
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-6 italic underline decoration-cyan-500/30 underline-offset-4">Basic Locale</h4>
            <CodeBlock code={`let d = new Date();\n\nconsole.log(d.toLocaleDateString("en-IN"));\n// 👉 Output (India): 26/03/2026`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-6 italic underline decoration-cyan-500/30 underline-offset-4">Custom Locale Options</h4>
            <CodeBlock code={`let options = {\n    day: '2-digit',\n    month: 'long',\n    year: 'numeric'\n};\n\nconsole.log(d.toLocaleDateString("en-IN", options));\n// 👉 Output: 26 March 2026`} />
          </div>
        </div>
      </section>

      {/* ── Section 8 & 9: Time & Timestamp ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <AlarmClock size={150} className="text-teal-500" />
          </div>
          <SectionHeader icon={Clock} title="8. Working with Time" subtitle="Extracting hours, minutes, seconds." color="text-teal-500" />
          <CodeBlock code={`let d = new Date();\n\nconsole.log(d.getHours());   // e.g. 10\nconsole.log(d.getMinutes()); // e.g. 30\nconsole.log(d.getSeconds()); // e.g. 45`} />
          <div className="flex gap-4 mt-6">
            {[
              { label: 'HOURS', value: String(now.getHours()).padStart(2, '0') },
              { label: 'MINUTES', value: String(now.getMinutes()).padStart(2, '0') },
              { label: 'SECONDS', value: String(now.getSeconds()).padStart(2, '0') }
            ].map((item, i) => (
              <div key={i} className="flex-1 p-4 bg-teal-500/5 border border-teal-500/10 rounded-2xl text-center">
                <span className="text-[8px] font-black text-teal-500 uppercase tracking-widest block mb-1">{item.label}</span>
                <span className="text-2xl font-black font-mono text-gray-900 dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Timer size={150} className="text-cyan-500" />
          </div>
          <SectionHeader icon={Timer} title="9. Timestamp (Unix Time)" subtitle="Milliseconds since Jan 1, 1970." color="text-cyan-500" />
          <CodeBlock code={`let timestamp = Date.now();\nconsole.log(timestamp);\n// 👉 Output: 1711440000000`} />
          <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest block mb-2">LIVE TIMESTAMP</span>
            <span className="text-2xl font-black font-mono text-cyan-400">{Date.now()}</span>
          </div>
        </div>
      </section>

      {/* ── Section 10: Real-World Example ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-16 bg-white dark:bg-gray-800 rounded-[5rem] shadow-2xl border border-gray-50 dark:border-gray-700 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Monitor size={200} className="text-teal-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Globe} title="10. Real-World Example" subtitle="Show Current Date in UI." color="text-teal-500" />
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-serif italic border-l-4 border-teal-500/20 pl-8">
              Use <span className="text-teal-500 font-bold uppercase tracking-tight">toLocaleDateString</span> with options to display a user-friendly date string directly in your UI.
            </p>
            <CodeBlock title="showDate.js" code={`function showDate() {\n    let d = new Date();\n\n    let options = {\n        weekday: 'long',\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric'\n    };\n\n    document.body.innerHTML = d.toLocaleDateString("en-IN", options);\n}\n\nshowDate();`} />
            <div className="mt-8 p-6 bg-teal-500/5 border border-teal-500/10 rounded-2xl text-center">
              <span className="text-[8px] font-black text-teal-500 uppercase tracking-widest block mb-2">LIVE PREVIEW</span>
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Time Mastered.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-teal-500/10 decoration-2">
          "Time is what we want most, but what we use worst." — William Penn
        </p>
      </footer>
    </div>
  );
};

export default JsDateFormats;