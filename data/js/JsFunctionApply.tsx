import React, { useState } from 'react';
import {
  Package,
  Info,
  Zap,
  Terminal,
  Code2,
  Copy,
  Check,
  ArrowRight,
  Eye,
  Layers,
  Phone,
  Link2,
  Users,
  Hash,
  Target,
  Maximize
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

// ─── Interactive Apply Lab ────────────────────────────────────────────────────

const ApplyLab = () => {
  const [thisName, setThisName] = useState('Karthick');
  const [city, setCity] = useState('Erode');
  const [country, setCountry] = useState('India');

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Package size={120} className="text-purple-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Target className="text-purple-500 animate-bounce" size={24} /> apply() Playground
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">this.name</label>
          <input value={thisName} onChange={(e) => setThisName(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-purple-500/20" />
        </div>
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">arg[0]: city</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-purple-500/20" />
        </div>
        <div>
          <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-2">arg[1]: country</label>
          <input value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded-xl outline-none text-white font-mono text-sm focus:ring-2 ring-purple-500/20" />
        </div>
      </div>

      <div className="p-4 bg-black rounded-xl font-mono text-xs text-gray-400 mb-4 border border-white/5 relative z-10">
        <span className="text-gray-500">greet.</span><span className="text-purple-400">apply</span>(<span className="text-amber-400">{`{ name: "${thisName}" }`}</span>, [<span className="text-green-400">"{city}", "{country}"</span>]);
      </div>

      <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center relative z-10">
        <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest block mb-2">OUTPUT</span>
        <span className="text-lg font-black text-white">Hello {thisName} from {city}, {country}</span>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsFunctionApply: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-8 border border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 animate-pulse tracking-[0.2em]">
          <Package size={14} className="fill-current" /> FUNCTION METHOD
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 drop-shadow-2xl">
            apply()
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          apply() allows you to call a function with a specific <span className="text-gray-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 tracking-tight">this value</span> and arguments passed as an <span className="text-gray-900 dark:text-white font-bold underline decoration-purple-500 underline-offset-4 tracking-tight">array</span>.
        </p>
      </header>

      {/* ── Section 2: Syntax ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Code2} title="2. Syntax" subtitle="How apply() is structured." color="text-purple-500" />
          <CodeBlock title="Syntax" code={`function.apply(thisArg, [argsArray])`} />
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Parameter</th>
                  <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 dark:border-gray-900/50">
                  <td className="p-5 text-purple-600 dark:text-purple-400 font-black font-mono text-xs">thisArg</td>
                  <td className="p-5 text-gray-500 italic">Value of <code className="text-purple-500">this</code> inside function</td>
                </tr>
                <tr>
                  <td className="p-5 text-purple-600 dark:text-purple-400 font-black font-mono text-xs">argsArray</td>
                  <td className="p-5 text-gray-500 italic">Arguments as an array</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. Definition" subtitle="What apply() does." color="text-purple-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-purple-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              apply() is a method that allows you to call a function with a specific this value and arguments passed as an array.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Basic Example + Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Terminal} title="3. Basic Example" subtitle="Calling greet with a custom this." color="text-purple-500" />
          <CodeBlock title="apply() Example" code={`function greet(city, country) {\n    console.log(\`Hello \${this.name} from \${city}, \${country}\`);\n}\n\nlet person = { name: "Karthick" };\n\ngreet.apply(person, ["Erode", "India"]);\n\n// 👉 Output:\n// Hello Karthick from Erode, India`} />
        </div>
        <ApplyLab />
      </section>

      {/* ── Section 5: this Binding ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Eye size={200} className="text-purple-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Eye} title="5. Key Concept — this Binding" subtitle="apply() lets you control what this refers to." color="text-purple-500" />
            <CodeBlock title="this Binding" code={`let user1 = { name: "A" };\nlet user2 = { name: "B" };\n\nfunction sayName() {\n    console.log(this.name);\n}\n\nsayName.apply(user1); // A\nsayName.apply(user2); // B`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Passing Args as Array ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Layers} title="6. Passing Arguments as Array" subtitle="apply() takes an array of arguments." color="text-violet-500" />
        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl">
          <CodeBlock title="Array Arguments" code={`function sum(a, b, c) {\n    return a + b + c;\n}\n\nlet result = sum.apply(null, [10, 20, 30]);\n\nconsole.log(result);\n// 👉 Output: 60`} />
        </div>
      </section>

      {/* ── Section 7: Real-World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="7. Real-World Use Cases" subtitle="Where apply() shines in practice." color="text-purple-500" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
              <Maximize className="text-purple-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2">🎯 1. Find Max in Array</h4>
            <CodeBlock code={`let numbers = [5, 10, 20, 3];\n\nlet max = Math.max.apply(null, numbers);\n\nconsole.log(max);\n// 👉 Output: 20`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-violet-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2">🎯 2. Borrowing Functions</h4>
            <CodeBlock code={`let person1 = {\n    name: "Karthick",\n    greet: function() {\n        console.log("Hello " + this.name);\n    }\n};\n\nlet person2 = { name: "Raja" };\n\nperson1.greet.apply(person2);\n// 👉 Output: Hello Raja`} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
              <Layers className="text-indigo-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2">🎯 3. Array-like to Array</h4>
            <CodeBlock code={`function example() {\n    let args = Array.prototype\n      .slice.apply(arguments);\n    console.log(args);\n}\n\nexample(1, 2, 3);\n// 👉 [1, 2, 3]`} />
          </div>
        </div>
      </section>

      {/* ── Section 8: Comparison Table ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Hash} title="8. apply() vs call() vs bind()" subtitle="Three ways to control this." color="text-indigo-500" />
        <div className="bg-[#0b1120] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Feature</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">apply() 📦</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">call() 📞</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">bind() 🔗</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr className="border-b border-white/5 hover:bg-indigo-500/5 transition-colors">
                <td className="p-6 text-gray-400 font-black">Arguments</td>
                <td className="p-6 text-purple-400 font-mono text-xs">Array</td>
                <td className="p-6 text-emerald-400 font-mono text-xs">Individual</td>
                <td className="p-6 text-sky-400 font-mono text-xs">Individual</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-indigo-500/5 transition-colors">
                <td className="p-6 text-gray-400 font-black">Execution</td>
                <td className="p-6 text-purple-400 font-mono text-xs">Immediate</td>
                <td className="p-6 text-emerald-400 font-mono text-xs">Immediate</td>
                <td className="p-6 text-sky-400 font-mono text-xs">Returns function</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { label: 'apply()', code: 'fn.apply(obj, [1, 2]);', color: 'purple', icon: Package },
            { label: 'call()', code: 'fn.call(obj, 1, 2);', color: 'emerald', icon: Phone },
            { label: 'bind()', code: 'let newFn = fn.bind(obj);', color: 'sky', icon: Link2 }
          ].map((item, i) => (
            <div key={i} className={`p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg`}>
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
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Applied.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-purple-500/10 decoration-2">
          "Master apply(), and you master the art of borrowing behavior."
        </p>
      </footer>
    </div>
  );
};

export default JsFunctionApply;