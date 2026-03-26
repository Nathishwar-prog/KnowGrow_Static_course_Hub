import React, { useState } from 'react';
import {
  Phone,
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
  Package,
  Link2,
  Users,
  Maximize,
  GitBranch
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

// ─── Interactive Call Lab ─────────────────────────────────────────────────────

const CallLab = () => {
  const [thisName, setThisName] = useState('Karthick');
  const [arg1, setArg1] = useState('Erode');
  const [arg2, setArg2] = useState('India');

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Phone size={120} className="text-emerald-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Phone className="text-emerald-500 animate-bounce" size={24} /> call() Playground
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">this.name</label>
          <input value={thisName} onChange={(e) => setThisName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-emerald-500/20" />
        </div>
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">arg1: city</label>
          <input value={arg1} onChange={(e) => setArg1(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-emerald-500/20" />
        </div>
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">arg2: country</label>
          <input value={arg2} onChange={(e) => setArg2(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-emerald-500/20" />
        </div>
      </div>

      <div className="p-4 bg-black rounded-xl font-mono text-xs text-gray-400 mb-4 border border-white/5 relative z-10">
        <span className="text-gray-500">greet.</span><span className="text-emerald-400">call</span>(<span className="text-amber-400">{`{ name: "${thisName}" }`}</span>, <span className="text-green-400">"{arg1}"</span>, <span className="text-green-400">"{arg2}"</span>);
      </div>

      <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center relative z-10">
        <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest block mb-2">⚡ IMMEDIATE OUTPUT</span>
        <span className="text-lg font-black text-white">Hello {thisName} from {arg1}, {arg2}</span>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsFunctionCall: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black mb-8 border border-emerald-100 dark:border-emerald-900/50 shadow-xl shadow-emerald-500/5 animate-pulse tracking-[0.2em]">
          <Phone size={14} /> FUNCTION METHOD
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 drop-shadow-2xl">
            call()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          call() invokes a function <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">immediately</span> with a specified <code className="text-emerald-500 font-black">this</code> value and arguments passed <span className="text-gray-900 dark:text-white font-bold underline decoration-emerald-500 underline-offset-4 tracking-tight">individually</span>.
        </p>
      </header>

      {/* ── Section 1-2: Definition & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. Definition" subtitle="What call() does." color="text-emerald-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-emerald-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              call() is a method that allows you to invoke a function immediately with a specified this value and arguments passed individually.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Code2} title="2. Syntax" subtitle="How call() is structured." color="text-emerald-500" />
          <CodeBlock title="Syntax" code={`function.call(thisArg, arg1, arg2, ...)`} />
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Parameter</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 dark:border-gray-900/50">
                  <td className="p-5 text-emerald-600 dark:text-emerald-400 font-black font-mono text-xs">thisArg</td>
                  <td className="p-5 text-gray-500 italic">Value of <code className="text-emerald-500">this</code></td>
                </tr>
                <tr>
                  <td className="p-5 text-emerald-600 dark:text-emerald-400 font-black font-mono text-xs">arguments</td>
                  <td className="p-5 text-gray-500 italic">Passed one by one</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3: Basic Example + Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="3. Basic Example" subtitle="Using call() with a greeting function." color="text-emerald-500" />
          <CodeBlock title="call() Example" code={`function greet(city, country) {\n    console.log(\`Hello \${this.name} from \${city}, \${country}\`);\n}\n\nlet user = { name: "Karthick" };\n\ngreet.call(user, "Erode", "India");\n\n// 👉 Output:\n// Hello Karthick from Erode, India`} />
        </div>
        <CallLab />
      </section>

      {/* ── Section 5: this Binding ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Eye size={200} className="text-emerald-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Eye} title="5. Key Concept — this Binding" subtitle="call() lets you control which object is used as this." color="text-emerald-500" />
            <CodeBlock title="this Binding" code={`let user1 = { name: "A" };\nlet user2 = { name: "B" };\n\nfunction show() {\n    console.log(this.name);\n}\n\nshow.call(user1); // A\nshow.call(user2); // B`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Passing Arguments ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="6. Passing Arguments" subtitle="Arguments are passed individually, not as an array." color="text-teal-500" />
        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl">
          <CodeBlock title="Individual Args" code={`function sum(a, b) {\n    return a + b;\n}\n\nconsole.log(sum.call(null, 10, 20));\n// 👉 Output: 30`} />
        </div>
      </section>

      {/* ── Section 7: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="7. Real-World Use Cases" subtitle="Where call() is essential." color="text-emerald-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-emerald-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 1. Function Borrowing</h4>
            <CodeBlock code={`let person1 = {\n    name: "Karthick",\n    greet: function() {\n        console.log("Hello " + this.name);\n    }\n};\n\nlet person2 = { name: "Raja" };\n\nperson1.greet.call(person2);\n// 👉 Output: Hello Raja`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
              <GitBranch className="text-teal-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 2. Constructor Chaining</h4>
            <CodeBlock code={`function Person(name) {\n    this.name = name;\n}\n\nfunction Student(name, grade) {\n    Person.call(this, name);\n    this.grade = grade;\n}\n\nlet s = new Student("Karthick", "A");\nconsole.log(s);\n// { name: "Karthick", grade: "A" }`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <Maximize className="text-green-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 3. Using Math Functions</h4>
            <CodeBlock code={`let numbers = [10, 20, 30];\n\nlet max = Math.max.call(\n    null, ...numbers\n);\n\nconsole.log(max);\n// 👉 Output: 30`} />
          </div>
        </div>
      </section>

      {/* ── Section 8: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Hash} title="8. call() vs apply() vs bind()" subtitle="Complete comparison." color="text-indigo-500" />
        <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Feature</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">call() 📞</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">apply() 📦</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">bind() 🔗</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { f: 'Arguments', c: 'Individual', a: 'Array', b: 'Individual' },
                { f: 'Execution', c: 'Immediate', a: 'Immediate', b: 'Later' },
                { f: 'Return', c: 'Result', a: 'Result', b: 'New function' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-indigo-500/5 transition-colors">
                  <td className="p-6 text-gray-400 font-black">{row.f}</td>
                  <td className="p-6 text-emerald-400 font-mono text-xs font-bold">{row.c}</td>
                  <td className="p-6 text-purple-400 font-mono text-xs font-bold">{row.a}</td>
                  <td className="p-6 text-sky-400 font-mono text-xs font-bold">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { label: 'call()', code: 'fn.call(obj, 1, 2);', color: 'emerald', icon: Phone },
            { label: 'apply()', code: 'fn.apply(obj, [1, 2]);', color: 'purple', icon: Package },
            { label: 'bind()', code: 'let newFn = fn.bind(obj);', color: 'sky', icon: Link2 }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <item.icon size={16} className={`text-${item.color}-500`} />
                <span className={`text-[10px] font-black text-${item.color}-500 uppercase tracking-widest`}>{item.label}</span>
              </div>
              <code className="text-xs font-mono text-gray-500 dark:text-gray-400">{item.code}</code>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Called.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-emerald-500/10 decoration-2">
          "call() is the direct line — immediate execution, precise control."
        </p>
      </footer>
    </div>
  );
};

export default JsFunctionCall;