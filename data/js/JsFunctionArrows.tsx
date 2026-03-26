import React, { useState } from 'react';
import {
  ArrowRight,
  Info,
  Zap,
  Terminal,
  Code2,
  Copy,
  Check,
  Eye,
  Layers,
  Hash,
  Target,
  AlertTriangle,
  MousePointer2,
  Timer,
  Braces
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

const JsFunctionArrows: React.FC = () => {
  const [activeForm, setActiveForm] = useState(0);

  const forms = [
    { label: 'No Params', code: 'const greet = () => "Hello";', note: '👉 Empty parentheses required' },
    { label: 'One Param', code: 'const square = x => x * x;', note: '👉 Parentheses optional for single param' },
    { label: 'Multiple Params', code: 'const sum = (a, b) => a + b;', note: '👉 Parentheses required' },
    { label: 'Multi-line', code: 'const multiply = (a, b) => {\n    let result = a * b;\n    return result;\n};', note: '👉 Braces + explicit return needed' }
  ];

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em]">
          <ArrowRight size={14} /> ES6 FUNCTIONS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Arrow <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-500 drop-shadow-2xl">
            Functions
          </span><br />
          <span className="text-5xl sm:text-6xl text-gray-300 dark:text-gray-700">{`() => {}`}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          A <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">shorter and cleaner way</span> to write functions in JavaScript using <code className="text-amber-500 font-black">{`=>`}</code>.
        </p>
      </header>

      {/* ── Section 2: Basic Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Code2} title="2. Basic Syntax" subtitle="Three ways to write the same function." color="text-amber-500" />
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-3">✅ Normal Function</span>
              <CodeBlock code={`function add(a, b) {\n    return a + b;\n}`} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-amber-200 dark:border-amber-900/50 shadow-xl ring-2 ring-amber-500/10">
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block mb-3">✅ Arrow Function</span>
              <CodeBlock code={`const add = (a, b) => {\n    return a + b;\n};`} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-emerald-200 dark:border-emerald-900/50 shadow-xl ring-2 ring-emerald-500/10">
              <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest block mb-3">✅ Short Form (Implicit Return)</span>
              <CodeBlock code={`const add = (a, b) => a + b;\n\n// 👉 No return needed!`} />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. Definition" subtitle="What arrow functions are." color="text-amber-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-amber-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              Arrow functions are a shorter and cleaner way to write functions in JavaScript using <code className="text-amber-500 font-black">{`=>`}</code>.
            </p>
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-full h-[2px] bg-gradient-to-r from-gray-500 via-amber-500 to-emerald-500"></div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Traditional</span>
                <span className="text-xs font-mono text-gray-400">3 lines</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest block mb-1">Arrow</span>
                <span className="text-xs font-mono text-amber-400">3 lines</span>
              </div>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Short</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">1 line ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Different Forms (Interactive) ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="4. Arrow Function Forms" subtitle="Click each form to explore." color="text-amber-500" />
        <div className="bg-[#0b1120] p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5">
            <Braces size={200} className="text-amber-500" />
          </div>
          <div className="flex flex-wrap gap-3 mb-8 relative z-10">
            {forms.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveForm(i)}
                className={`px-5 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                  activeForm === i
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                🔹 {i + 1}. {f.label}
              </button>
            ))}
          </div>
          <div className="relative z-10">
            <CodeBlock title={forms[activeForm].label} code={forms[activeForm].code} />
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center">
              <span className="text-sm font-bold text-amber-400">{forms[activeForm].note}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: this Behavior (🔥 CRITICAL) ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="5. this Behavior 🔥" subtitle="VERY IMPORTANT — the key difference." color="text-red-500" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border-2 border-red-200 dark:border-red-900/50 shadow-xl relative">
            <div className="absolute -top-3 left-8 px-4 py-1 bg-red-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full">🔴 Normal Function</div>
            <div className="mt-4">
              <CodeBlock code={`const obj = {\n    name: "Karthick",\n    greet: function() {\n        console.log(this.name);\n    }\n};\n\n// 👉 this → refers to object ✅`} />
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <span className="text-sm font-bold text-emerald-500">✅ this = the object that calls it</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border-2 border-emerald-200 dark:border-emerald-900/50 shadow-xl relative">
            <div className="absolute -top-3 left-8 px-4 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full">🟢 Arrow Function</div>
            <div className="mt-4">
              <CodeBlock code={`const obj = {\n    name: "Karthick",\n    greet: () => {\n        console.log(this.name);\n    }\n};\n\n// ❌ this does NOT refer to object\n// It uses lexical scope (parent scope)`} />
              <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl text-center">
                <span className="text-sm font-bold text-red-500">❌ this = parent scope (lexical)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl text-center">
          <span className="text-lg font-black text-gray-900 dark:text-white">🧠 Rule: Arrow functions do <span className="text-red-500 uppercase">not</span> have their own <code className="text-amber-500">this</code></span>
        </div>
      </section>

      {/* ── Section 6: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="6. Real-World Examples" subtitle="Where arrow functions shine." color="text-amber-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
              <Hash className="text-amber-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 1. Array Methods</h4>
            <CodeBlock code={`let numbers = [1, 2, 3, 4];\n\nlet doubled = numbers.map(n => n * 2);\n\nconsole.log(doubled);\n// 👉 Output: [2, 4, 6, 8]`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <MousePointer2 className="text-orange-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 2. Event Handling</h4>
            <CodeBlock code={`button.addEventListener("click", () => {\n    console.log("Clicked!");\n});`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
              <Timer className="text-yellow-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 3. Short Callbacks</h4>
            <CodeBlock code={`setTimeout(() => {\n    console.log("Hello");\n}, 1000);`} />
          </div>
        </div>
      </section>

      {/* ── Section 7: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Eye} title="7. Arrow vs Normal Function" subtitle="Side-by-side feature comparison." color="text-indigo-500" />
        <div className="bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Feature</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Arrow Function ⚡</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Normal Function 🔧</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { f: 'Syntax', a: 'Short', n: 'Long' },
                { f: 'this', a: 'Lexical', n: 'Dynamic' },
                { f: 'arguments', a: '❌ Not available', n: '✅ Available' },
                { f: 'Constructor', a: '❌ Cannot use', n: '✅ Can use' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-indigo-500/5 transition-colors">
                  <td className="p-6 text-gray-900 dark:text-white font-black">{row.f}</td>
                  <td className="p-6 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">{row.a}</td>
                  <td className="p-6 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">{row.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          {`() => Mastered`}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-amber-500/10 decoration-2">
          "Write less, do more — that's the arrow function philosophy."
        </p>
      </footer>
    </div>
  );
};

export default JsFunctionArrows;