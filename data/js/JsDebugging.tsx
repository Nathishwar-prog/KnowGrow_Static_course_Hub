import React, { useState } from 'react';
import {
  Bug,
  Info,
  Zap,
  Terminal,
  Code2,
  Monitor,
  Copy,
  Check,
  AlertTriangle,
  Search,
  Play,
  SkipForward,
  ArrowDownToLine,
  ArrowUpFromLine,
  Wrench,
  Eye,
  Globe,
  Pause,
  ShieldAlert,
  CheckCircle,
  XCircle,
  AlertCircle,
  Lightbulb
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

// ─── Interactive Bug Fix Lab ──────────────────────────────────────────────────

const BugFixLab = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'Buggy Code', code: 'function add(a, b) {\n    return a - b; // wrong operator\n}\n\nconsole.log(add(5, 3));\n// 👉 Output: 2 ❌ (expected 8)', status: 'error' },
    { label: 'Add console.log', code: 'function add(a, b) {\n    console.log("a:", a, "b:", b); // debug\n    return a - b;\n}\n\nconsole.log(add(5, 3));\n// Console: a: 5 b: 3\n// Output: 2 ❌', status: 'warn' },
    { label: 'Find & Fix', code: 'function add(a, b) {\n    return a + b; // ✅ Fixed!\n}\n\nconsole.log(add(5, 3));\n// 👉 Output: 8 ✅', status: 'success' }
  ];

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Bug size={120} className="text-red-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Bug className="text-red-500" size={24} /> 8. Interactive Bug Fix
      </h3>

      <div className="flex gap-2 mb-8 relative z-10">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
              step === i
                ? s.status === 'error' ? 'bg-red-500 text-white' : s.status === 'warn' ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="relative z-10">
        <CodeBlock title={steps[step].label} code={steps[step].code} />
        <div className={`p-4 rounded-2xl text-center text-sm font-black ${
          steps[step].status === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
          steps[step].status === 'warn' ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' :
          'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        }`}>
          {steps[step].status === 'error' ? '❌ Bug detected! Wrong operator.' :
           steps[step].status === 'warn' ? '🔍 Investigating... values look correct, operator is wrong.' :
           '✅ Bug fixed! Changed - to +.'}
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsDebugging: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 text-[10px] font-black mb-8 border border-red-100 dark:border-red-900/50 shadow-xl shadow-red-500/5 animate-pulse tracking-[0.2em]">
          <Bug size={14} /> BUG HUNTER
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 drop-shadow-2xl">
            Debugging
          </span><br />
          Mastery
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Debugging is the process of <span className="text-gray-900 dark:text-white font-bold underline decoration-red-500 underline-offset-4 tracking-tight">finding, analyzing, and fixing errors</span> (bugs) in your code.
        </p>
      </header>

      {/* ── Section 2: Error Types ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="2. Types of Errors" subtitle="Know your enemy before you fight." color="text-red-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              color: 'red', label: '🔴 Syntax Errors', emoji: '❌',
              code: 'console.log("Hello\n\n// 👉 Missing quote → ❌ Error',
              desc: 'Code cannot even be parsed.'
            },
            {
              color: 'amber', label: '🟡 Runtime Errors', emoji: '💥',
              code: 'let x = undefined;\nconsole.log(x.length);\n\n// 👉 Accessing property of undefined',
              desc: 'Code runs but crashes mid-execution.'
            },
            {
              color: 'blue', label: '🔵 Logical Errors', emoji: '🤔',
              code: 'let total = 10 + "5"; // "105" ❌\n\n// 👉 Code runs, but wrong result',
              desc: 'Code runs fine but gives wrong result.'
            }
          ].map((item, i) => (
            <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group hover:-translate-y-1 transition-transform`}>
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${item.color}-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-${item.color}-500/20 text-lg`}>
                {item.emoji}
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3">{item.label}</h3>
              <p className="text-xs text-gray-500 font-medium italic mb-4">{item.desc}</p>
              <CodeBlock code={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Debugging Flow ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Search} title="3. Debugging Flow" subtitle="How professionals think." color="text-red-500" />
        <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Search size={200} className="text-red-500" />
          </div>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            {[
              { step: '1', text: 'Identify the problem', icon: Eye },
              { step: '2', text: 'Reproduce the bug', icon: Play },
              { step: '3', text: 'Isolate the issue', icon: Search },
              { step: '4', text: 'Fix the code', icon: Wrench },
              { step: '5', text: 'Test again', icon: CheckCircle }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-red-500/10 transition-colors group/step">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-black group-hover/step:bg-red-500 group-hover/step:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <item.icon size={16} className="text-red-400 mb-1" />
                    <span className="text-xs text-gray-300 font-bold block">{item.text}</span>
                  </div>
                </div>
                {i < 4 && <span className="text-red-500 font-black text-xl hidden lg:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Console Methods ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="4. console.log()" subtitle="Basic but Powerful." color="text-red-500" />
          <CodeBlock title="Basic Logging" code={`let a = 5;\nlet b = 10;\n\nconsole.log(a, b);\n// 👉 Prints values`} />
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h4 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-6 italic underline decoration-red-500/20 underline-offset-4">🎯 Advanced Console Methods</h4>
            <CodeBlock code={`console.error("Error message");\nconsole.warn("Warning");\nconsole.table([{name: "Karthick", age: 21}]);`} />
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Monitor size={150} className="text-red-500" />
          </div>
          <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
            <Monitor className="text-red-500" size={24} /> Browser DevTools 🔥
          </h3>
          <p className="text-gray-400 font-medium mb-6 italic relative z-10">Must Know! Open with:</p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-6 relative z-10">
            <p className="text-white font-mono text-sm font-bold">Right click → Inspect → Console / Sources</p>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {[
              { label: 'Console', desc: 'Log output' },
              { label: 'Sources', desc: 'Breakpoints' },
              { label: 'Network', desc: 'API calls' },
              { label: 'Elements', desc: 'DOM tree' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-red-500/10 transition-colors">
                <span className="text-sm font-black text-white block">{item.label}</span>
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5 & 6: Breakpoints & debugger ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Pause size={150} className="text-orange-500" />
          </div>
          <SectionHeader icon={Pause} title="5. Breakpoints" subtitle="Professional debugging technique." color="text-orange-500" />
          <CodeBlock code={`let x = 10;\nlet y = 20;\n\nlet result = x + y; // breakpoint here\n\n// 👉 Browser pauses execution`} />
          <div className="space-y-3 mt-4">
            <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest">🔍 What You Can Do:</span>
            {['Check variable values', 'Step through code', 'Understand flow'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <CheckCircle size={14} className="text-orange-500" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <ShieldAlert size={150} className="text-red-500" />
          </div>
          <SectionHeader icon={Code2} title="6. debugger Keyword" subtitle="Auto-pause in code." color="text-red-500" />
          <CodeBlock title="debugger" code={`let x = 5;\nlet y = 10;\n\ndebugger;\n\nlet result = x + y;\n\n// 👉 Automatically pauses execution`} />
        </div>
      </section>

      {/* ── Section 7: Step Actions Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={SkipForward} title="7. Step-by-Step Debugging" subtitle="Debugger navigation actions." color="text-red-500" />
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Action</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { a: '▶ Resume', m: 'Continue execution' },
                { a: '⏭ Step Over', m: 'Next line' },
                { a: '⏬ Step Into', m: 'Go inside function' },
                { a: '⏫ Step Out', m: 'Exit function' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-red-500/5 transition-colors">
                  <td className="p-6 text-red-600 dark:text-red-400 font-black text-lg">{row.a}</td>
                  <td className="p-6 text-gray-600 dark:text-gray-300 italic">{row.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 8: Bug Fix Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <BugFixLab />
      </section>

      {/* ── Section 9: Async Debugging ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Globe size={150} className="text-indigo-500" />
          </div>
          <SectionHeader icon={Globe} title="9. Debugging Async Code" subtitle="Promises, fetch, and async/await." color="text-indigo-500" />
          <CodeBlock code={`async function fetchData() {\n    let res = await fetch("api");\n    let data = await res.json();\n    console.log(data);\n}`} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: 'Breakpoints', emoji: '🔴' },
              { label: 'Network Tab', emoji: '🌐' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-xl text-center">
                <span className="text-2xl block mb-1">{item.emoji}</span>
                <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Lightbulb size={150} className="text-amber-500" />
          </div>
          <SectionHeader icon={Lightbulb} title="10. Common Techniques" subtitle="Pro-level debugging strategies." color="text-amber-500" />
          <div className="space-y-6 relative z-10">
            {[
              { label: '🔍 1. Binary Search Debugging', desc: 'Remove half code → test → repeat' },
              { label: '🔍 2. Rubber Duck Debugging 🦆', desc: 'Explain code out loud → find mistake' },
              { label: '🔍 3. Check Inputs First', desc: 'Most bugs come from wrong input' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-500/10 transition-colors">
                <h4 className="text-sm font-black text-white mb-2">{item.label}</h4>
                <p className="text-xs text-gray-400 font-medium italic">👉 {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Bug Squashed.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-red-500/10 decoration-2">
          "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." — Brian W. Kernighan
        </p>
      </footer>
    </div>
  );
};

export default JsDebugging;