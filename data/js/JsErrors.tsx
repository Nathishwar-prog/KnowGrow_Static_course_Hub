import React, { useState } from 'react';
import {
  AlertTriangle,
  Info,
  Zap,
  Terminal,
  Code2,
  Monitor,
  Copy,
  Check,
  Shield,
  XCircle,
  AlertCircle,
  CheckCircle,
  Globe,
  Bug,
  Wrench,
  Eye,
  Layers,
  ShieldAlert
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

// ─── Interactive Error Simulator ──────────────────────────────────────────────

const ErrorSimulator = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { label: '❌ Buggy', code: 'function divide(a, b) {\n    return a / b;\n}\n\nconsole.log(divide(10, 0));\n// 👉 Logical issue (division by 0)\n// Output: Infinity ❌', status: 'error' },
    { label: '✅ Fixed', code: 'function divide(a, b) {\n    if (b === 0) {\n        throw new Error("Cannot divide by zero");\n    }\n    return a / b;\n}\n\n// Now safely handles edge case ✅', status: 'success' }
  ];

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Bug size={120} className="text-red-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Wrench className="text-red-500" size={24} /> 7. Real Debugging Example
      </h3>
      <div className="flex gap-3 mb-8 relative z-10">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
              step === i
                ? s.status === 'error' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'
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
          'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        }`}>
          {steps[step].status === 'error' ? '❌ Division by zero returns Infinity — a silent logical bug!' : '✅ Now throws a clear Error with a descriptive message.'}
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsErrors: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-red-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 text-[10px] font-black mb-8 border border-red-100 dark:border-red-900/50 shadow-xl shadow-red-500/5 animate-pulse tracking-[0.2em]">
          <AlertTriangle size={14} /> ERROR HANDLING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-pink-500 drop-shadow-2xl">
            Errors
          </span><br />
          & Handling
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Errors are problems in code that <span className="text-gray-900 dark:text-white font-bold underline decoration-red-500 underline-offset-4 tracking-tight">stop execution or produce incorrect results</span>.
        </p>
      </header>

      {/* ── Section 2: Error Types ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="2. Types of Errors" subtitle="Three categories of JavaScript errors." color="text-red-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              dot: '🔴', label: '1. Syntax Errors', desc: 'Occur when code violates JavaScript rules.',
              code: 'console.log("Hello\n\n// ❌ Missing quote → SyntaxError',
              color: 'red'
            },
            {
              dot: '🟡', label: '2. Runtime Errors', desc: 'Occur during execution.',
              code: 'let x = undefined;\nconsole.log(x.length);\n\n// ❌ TypeError',
              color: 'amber'
            },
            {
              dot: '🔵', label: '3. Logical Errors', desc: 'Code runs but gives wrong result.',
              code: 'let total = 10 + "5"; // "105"\n\n// ❌ Wrong logic',
              color: 'blue'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
              <span className="text-3xl mb-4 block">{item.dot}</span>
              <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.label}</h3>
              <p className="text-xs text-gray-500 font-medium italic mb-4">👉 {item.desc}</p>
              <CodeBlock code={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Error Flow ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="3. Error Flow" subtitle="How errors propagate through your code." color="text-red-500" />
        <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <AlertTriangle size={200} className="text-red-500" />
          </div>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            {[
              { step: '1', text: 'Code Executes', icon: Code2 },
              { step: '2', text: 'Error Occurs', icon: XCircle },
              { step: '3', text: 'Execution Stops', icon: AlertCircle },
              { step: '4', text: 'Error Message', icon: Eye }
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
                {i < 3 && <span className="text-red-500 font-black text-xl hidden lg:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Built-in Error Types ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldAlert} title="4. Built-in Error Types" subtitle="5 common error constructors." color="text-red-500" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'ReferenceError', code: 'console.log(a);', note: '👉 Variable not defined' },
            { name: 'TypeError', code: 'let x = null;\nx.toString();', note: '👉 Invalid type usage' },
            { name: 'SyntaxError', code: 'if (true {', note: '👉 Missing bracket' },
            { name: 'RangeError', code: 'let arr = new Array(-1);', note: '👉 Invalid range' },
            { name: 'URIError', code: 'decodeURI("%");', note: '👉 Invalid URI' }
          ].map((item, i) => (
            <div key={i} className="bg-[#0b1120] p-6 rounded-[2rem] border border-white/5 shadow-xl hover:border-red-500/30 transition-colors">
              <span className="text-[9px] font-black text-red-400 uppercase tracking-widest block mb-3">🔹 {i + 1}. {item.name}</span>
              <CodeBlock code={item.code} />
              <p className="text-[10px] text-gray-400 font-bold italic">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Handling Errors ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Shield} title="5. Handling Errors" subtitle="try...catch, finally, and throw." color="text-emerald-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 italic underline decoration-emerald-500/20 underline-offset-4">🔧 try...catch</h4>
            <CodeBlock code={`try {\n    let x = y; // error\n} catch (err) {\n    console.log("Error:", err.message);\n}`} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 italic underline decoration-emerald-500/20 underline-offset-4">🔧 finally block</h4>
            <CodeBlock code={`try {\n    console.log("Try block");\n} catch (err) {\n    console.log(err);\n} finally {\n    console.log("Always runs");\n}`} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 italic underline decoration-emerald-500/20 underline-offset-4">🔧 throw (Custom Errors)</h4>
            <CodeBlock code={`function checkAge(age) {\n    if (age < 18) {\n        throw "Not allowed";\n    }\n}`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Error Object Properties ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeader icon={Info} title="6. Error Object Properties" subtitle=" .name and .message" color="text-indigo-500" />
          <CodeBlock title="Error Properties" code={`try {\n    let x = y;\n} catch (err) {\n    console.log(err.name);    // ReferenceError\n    console.log(err.message); // y is not defined\n}`} />
          <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-[2rem] overflow-hidden mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Property</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-indigo-500/10">
                  <td className="p-5 text-indigo-600 dark:text-indigo-400 font-black font-mono text-xs">name</td>
                  <td className="p-5 text-gray-500 italic">Error type</td>
                </tr>
                <tr>
                  <td className="p-5 text-indigo-600 dark:text-indigo-400 font-black font-mono text-xs">message</td>
                  <td className="p-5 text-gray-500 italic">Error message</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 7: Bug Fix */}
        <ErrorSimulator />
      </section>

      {/* ── Section 8: Async Error Handling ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Globe} title="8. Async Error Handling" subtitle="Handling errors in promises and async/await." color="text-sky-500" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
            <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-4 italic underline decoration-sky-500/20 underline-offset-4">🔹 try...catch with async/await</h4>
            <CodeBlock code={`async function fetchData() {\n    try {\n        let res = await fetch("api");\n        let data = await res.json();\n    } catch (err) {\n        console.log(err);\n    }\n}`} />
          </div>
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h4 className="text-[10px] font-black text-sky-400 uppercase tracking-widest mb-4 italic underline decoration-sky-500/30 underline-offset-4">🔹 Using .catch()</h4>
            <CodeBlock code={`fetch("api")\n    .then(res => res.json())\n    .catch(err => console.log(err));`} />
            <div className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl mt-4">
              <p className="text-xs text-sky-400 font-bold italic">💡 Always handle async errors — unhandled promise rejections can crash your app!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Error Handled.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-red-500/10 decoration-2">
          "The only real mistake is the one from which we learn nothing." — Henry Ford
        </p>
      </footer>
    </div>
  );
};

export default JsErrors;