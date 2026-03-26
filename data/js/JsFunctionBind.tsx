import React, { useState } from 'react';
import {
  Link2,
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
  Phone,
  Package,
  Users,
  MousePointer2,
  Timer,
  RefreshCw
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

// ─── Interactive Bind Lab ─────────────────────────────────────────────────────

const BindLab = () => {
  const [userName, setUserName] = useState('Karthick');
  const [city, setCity] = useState('Erode');
  const [isBound, setIsBound] = useState(false);

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Link2 size={120} className="text-sky-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Link2 className="text-sky-500 animate-bounce" size={24} /> bind() Playground
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">this.name</label>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-sky-500/20" />
        </div>
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">preset arg: city</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-sky-500/20" />
        </div>
      </div>

      <div className="p-4 bg-black rounded-xl font-mono text-xs text-gray-400 mb-4 border border-white/5 relative z-10">
        <span className="text-gray-500">let fn = </span><span className="text-sky-400">greet</span>.<span className="text-sky-400">bind</span>(<span className="text-amber-400">{`{ name: "${userName}" }`}</span>, <span className="text-green-400">"{city}"</span>);
      </div>

      <button
        onClick={() => setIsBound(true)}
        className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-black rounded-2xl transition-all active:scale-95 mb-4 relative z-10"
      >
        {isBound ? '✅ fn() Called!' : '▶ Call fn()'}
      </button>

      {isBound && (
        <div className="p-5 bg-sky-500/10 border border-sky-500/20 rounded-2xl text-center relative z-10 animate-in fade-in duration-300">
          <span className="text-[8px] font-black text-sky-400 uppercase tracking-widest block mb-2">OUTPUT</span>
          <span className="text-lg font-black text-white">{userName} from {city}</span>
        </div>
      )}

      {isBound && (
        <button onClick={() => setIsBound(false)} className="w-full mt-3 py-2 text-gray-500 text-xs font-bold hover:text-white transition-colors relative z-10">
          <RefreshCw size={12} className="inline mr-1" /> Reset
        </button>
      )}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsFunctionBind: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 animate-pulse tracking-[0.2em]">
          <Link2 size={14} /> FUNCTION METHOD
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 drop-shadow-2xl">
            bind()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          bind() creates a <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4 tracking-tight">new function</span> with a fixed <code className="text-sky-500 font-black">this</code> value and optionally preset arguments.
        </p>
      </header>

      {/* ── Section 2 & 3: Syntax & Key Idea ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Code2} title="2. Syntax" subtitle="How bind() is structured." color="text-sky-500" />
          <CodeBlock title="Syntax" code={`function.bind(thisArg, arg1, arg2, ...)`} />
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-sky-600 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Parameter</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 dark:border-gray-900/50">
                  <td className="p-5 text-sky-600 dark:text-sky-400 font-black font-mono text-xs">thisArg</td>
                  <td className="p-5 text-gray-500 italic">Value of <code className="text-sky-500">this</code></td>
                </tr>
                <tr>
                  <td className="p-5 text-sky-600 dark:text-sky-400 font-black font-mono text-xs">arguments</td>
                  <td className="p-5 text-gray-500 italic">Optional preset values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Info} title="1 & 3. Definition & Key Idea" subtitle="bind() is unique." color="text-sky-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-sky-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              bind() creates a new function with a fixed this value and optionally preset arguments.
            </p>
          </div>
          <div className="bg-[#0b1120] rounded-[2rem] border border-white/5 shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em]">Method</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em]">Executes Immediately?</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold">
                <tr className="border-b border-white/5">
                  <td className="p-4 text-emerald-400 font-mono text-xs">call()</td>
                  <td className="p-4 text-emerald-400">✅ Yes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-purple-400 font-mono text-xs">apply()</td>
                  <td className="p-4 text-emerald-400">✅ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 text-sky-400 font-mono text-xs">bind()</td>
                  <td className="p-4 text-red-400">❌ No (returns new function)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: Basic Example + Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="4. Basic Example" subtitle="Creating a bound function." color="text-sky-500" />
          <CodeBlock title="bind() Example" code={`function greet() {\n    console.log("Hello " + this.name);\n}\n\nlet user = { name: "Karthick" };\n\nlet boundFunc = greet.bind(user);\n\nboundFunc();\n// 👉 Output: Hello Karthick`} />

          <SectionHeader icon={Layers} title="6. Passing Arguments" subtitle="Preset arguments with bind." color="text-sky-500" />
          <CodeBlock title="With Arguments" code={`function greet(city) {\n    console.log(this.name + " from " + city);\n}\n\nlet user = { name: "Karthick" };\n\nlet fn = greet.bind(user, "Erode");\n\nfn();\n// 👉 Output: Karthick from Erode`} />
        </div>
        <BindLab />
      </section>

      {/* ── Section 7: Partial Application ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Layers size={200} className="text-sky-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Zap} title="7. Partial Application 🔥" subtitle="Pre-filling arguments — a powerful technique." color="text-amber-500" />
            <CodeBlock title="Partial Application" code={`function multiply(a, b) {\n    return a * b;\n}\n\nlet double = multiply.bind(null, 2);\n\nconsole.log(double(5));\n// 👉 Output: 10`} />
            <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
              <p className="text-sm text-amber-700 dark:text-amber-400 font-bold italic">💡 bind(null, 2) permanently sets the first argument to 2, creating a specialized "double" function!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="8. Real-World Use Cases" subtitle="Where bind() is essential." color="text-sky-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4">
              <Timer className="text-sky-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 1. Fix this in Callbacks</h4>
            <CodeBlock code={`let user = {\n    name: "Karthick",\n    show: function() {\n        console.log(this.name);\n    }\n};\n\nsetTimeout(user.show.bind(user), 1000);\n\n// Without bind() → ❌ undefined\n// With bind() → ✅ correct`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <MousePointer2 className="text-blue-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 2. Event Handlers</h4>
            <CodeBlock code={`class App {\n    constructor() {\n        this.name = "App";\n    }\n\n    handleClick() {\n        console.log(this.name);\n    }\n}\n\nlet app = new App();\n\nbutton.addEventListener(\n  "click",\n  app.handleClick.bind(app)\n);`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-indigo-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 3. Function Reuse</h4>
            <CodeBlock code={`function sayHello() {\n    console.log("Hello " + this.name);\n}\n\nlet user1 = { name: "A" };\nlet user2 = { name: "B" };\n\nlet helloA = sayHello.bind(user1);\nlet helloB = sayHello.bind(user2);\n\nhelloA(); // Hello A\nhelloB(); // Hello B`} />
          </div>
        </div>
      </section>

      {/* ── Section 9: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Hash} title="9. bind() vs call() vs apply()" subtitle="Complete comparison." color="text-indigo-500" />
        <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Feature</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">bind() 🔗</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">call() 📞</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">apply() 📦</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { f: 'Execution', b: 'Later', c: 'Immediate', a: 'Immediate' },
                { f: 'Arguments', b: 'Individual', c: 'Individual', a: 'Array' },
                { f: 'Return', b: 'New function', c: 'Result', a: 'Result' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-indigo-500/5 transition-colors">
                  <td className="p-6 text-gray-400 font-black">{row.f}</td>
                  <td className="p-6 text-sky-400 font-mono text-xs font-bold">{row.b}</td>
                  <td className="p-6 text-emerald-400 font-mono text-xs font-bold">{row.c}</td>
                  <td className="p-6 text-purple-400 font-mono text-xs font-bold">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Bound.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-sky-500/10 decoration-2">
          "bind() gives you the power to lock context — use it wisely."
        </p>
      </footer>
    </div>
  );
};

export default JsFunctionBind;