import React, { useState } from 'react';
import {
  Lock,
  Info,
  Zap,
  Terminal,
  Code2,
  Copy,
  Check,
  Eye,
  Layers,
  Target,
  ShieldCheck,
  AlertTriangle,
  MousePointer2,
  ArrowRight,
  RefreshCw,
  Brain
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

// ─── Interactive Counter Lab ──────────────────────────────────────────────────

const ClosureCounterLab = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Lock size={120} className="text-indigo-500" />
      </div>
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3 italic relative z-10">
        <Lock className="text-indigo-500 animate-bounce" size={24} /> 6. Closure Counter Lab
      </h3>

      <div className="p-4 bg-black rounded-xl font-mono text-xs text-gray-400 mb-6 border border-white/5 relative z-10">
        <span className="text-gray-500">// count is </span><span className="text-amber-400">private</span><span className="text-gray-500"> inside closure</span><br/>
        <span className="text-indigo-400">let</span> count = <span className="text-amber-400">{count}</span>;
      </div>

      <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center mb-6 relative z-10">
        <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest block mb-3">CLOSURE COUNT</span>
        <span className="text-6xl font-black font-mono text-white">{count}</span>
      </div>

      <div className="flex gap-3 relative z-10">
        <button
          onClick={() => setCount(c => c + 1)}
          className="flex-1 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-black rounded-2xl transition-all active:scale-95"
        >
          c() → count++ 🔥
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-6 py-4 bg-white/5 border border-white/10 text-gray-400 hover:text-white font-black rounded-2xl transition-all"
        >
          <RefreshCw size={16} />
        </button>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const JsFunctionClosures: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">

      {/* ── Background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-pulse tracking-[0.2em]">
          <Brain size={14} /> ADVANCED CONCEPT
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Function <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-400 to-purple-500 drop-shadow-2xl">
            Closures
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          A closure is a function that <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 tracking-tight">remembers variables</span> from its outer scope even after the outer function has finished executing.
        </p>
      </header>

      {/* ── Section 2 & 3: Simple Example ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1-2. Definition & Example" subtitle="A closure in action." color="text-indigo-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-indigo-500/20">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">🧠 Definition:</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed italic">
              A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.
            </p>
          </div>
          <CodeBlock title="Simple Closure" code={`function outer() {\n    let name = "Karthick";\n\n    function inner() {\n        console.log(name);\n    }\n\n    return inner;\n}\n\nlet fn = outer();\nfn();\n// 👉 Output: Karthick`} />
        </div>

        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Brain size={150} className="text-indigo-500" />
          </div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic relative z-10">
            <Eye className="text-indigo-500" size={24} /> 3. Why This Works?
          </h3>
          <div className="space-y-4 relative z-10">
            {[
              { step: '1', text: 'outer() executes and creates name = "Karthick"', color: 'text-indigo-400' },
              { step: '2', text: 'inner() is returned (not executed yet)', color: 'text-violet-400' },
              { step: '3', text: 'outer() finishes — normally variables would be garbage collected', color: 'text-amber-400' },
              { step: '4', text: 'But inner() still "remembers" name via closure!', color: 'text-emerald-400' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-black text-sm shrink-0">
                  {item.step}
                </div>
                <span className={`text-sm font-medium ${item.color}`}>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl relative z-10">
            <p className="text-xs text-indigo-400 font-bold italic">💡 Normally, variables disappear after function execution — but closures "remember" the environment!</p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Lexical Scope ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <Layers size={200} className="text-indigo-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={Layers} title="5. Lexical Scope" subtitle="Closures are based on lexical scope." color="text-indigo-500" />
            <CodeBlock title="Lexical Scope" code={`function outer() {\n    let x = 10;\n\n    function inner() {\n        console.log(x);\n    }\n\n    inner();\n}\n\n// 👉 Inner function can access outer variables`} />
          </div>
        </div>
      </section>

      {/* ── Section 6: Counter + Lab ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionHeader icon={Target} title="6. Counter Example 🔥" subtitle="The classic closure pattern." color="text-indigo-500" />
          <CodeBlock title="Counter Closure" code={`function counter() {\n    let count = 0;\n\n    return function() {\n        count++;\n        console.log(count);\n    };\n}\n\nlet c = counter();\n\nc(); // 1\nc(); // 2\nc(); // 3\n\n// 👉 count is private and preserved`} />
        </div>
        <ClosureCounterLab />
      </section>

      {/* ── Section 7: Data Privacy ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={ShieldCheck} title="7. Data Privacy" subtitle="Closures create truly private variables." color="text-emerald-500" />
        <div className="bg-[#0b1120] p-10 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Lock size={150} className="text-emerald-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <CodeBlock title="Private Data" code={`function createUser() {\n    let password = "12345";\n\n    return {\n        getPassword: function() {\n            return password;\n        }\n    };\n}\n\nlet user = createUser();\n\nconsole.log(user.getPassword());\n// 👉 Password is hidden from outside`} />
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
              <p className="text-sm text-emerald-400 font-bold italic">🔒 The password variable is completely inaccessible except through getPassword() — true encapsulation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Closures in Loops ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={AlertTriangle} title="8. Closures in Loops" subtitle="Common Interview Question 🎯" color="text-amber-500" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border-2 border-red-200 dark:border-red-900/50 shadow-xl relative">
            <div className="absolute -top-3 left-8 px-4 py-1 bg-red-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full">❌ Problem</div>
            <div className="mt-4">
              <CodeBlock code={`for (var i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 1000);\n}\n\n// 👉 Output: 4 4 4 ❌`} />
              <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl text-center">
                <span className="text-sm font-bold text-red-500">❌ var shares one i — all callbacks see final value (4)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border-2 border-emerald-200 dark:border-emerald-900/50 shadow-xl relative">
            <div className="absolute -top-3 left-8 px-4 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full">✅ Fix with Closure</div>
            <div className="mt-4">
              <CodeBlock code={`for (var i = 1; i <= 3; i++) {\n    (function(i) {\n        setTimeout(function() {\n            console.log(i);\n        }, 1000);\n    })(i);\n}\n\n// 👉 Output: 1 2 3 ✅`} />
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <span className="text-sm font-bold text-emerald-500">✅ IIFE creates a new closure for each iteration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Real-World ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Target} title="9. Closures in Real-World" subtitle="Practical applications." color="text-indigo-500" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
              <MousePointer2 className="text-indigo-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 1. Event Handlers</h4>
            <CodeBlock code={`function setupButton() {\n    let count = 0;\n\n    button.addEventListener("click", function() {\n        count++;\n        console.log(count);\n    });\n}`} />
          </div>

          <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="text-violet-500" size={20} />
            </div>
            <h4 className="text-sm font-black text-white mb-4">🎯 2. Functions with Memory</h4>
            <CodeBlock code={`function multiply(x) {\n    return function(y) {\n        return x * y;\n    };\n}\n\nlet double = multiply(2);\n\nconsole.log(double(5)); // 10`} />
          </div>
        </div>
      </section>

      {/* ── Section 10: Arrow Functions ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-125 transition-transform duration-1000">
            <ArrowRight size={200} className="text-indigo-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <SectionHeader icon={ArrowRight} title="10. Closures + Arrow Functions" subtitle="Same behavior, shorter syntax." color="text-indigo-500" />
            <CodeBlock title="Arrow Closure" code={`const outer = () => {\n    let x = 10;\n\n    return () => console.log(x);\n};\n\n// 👉 Same behavior, shorter syntax`} />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          Enclosed.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-indigo-500/10 decoration-2">
          "Closures are not just a concept — they are the soul of JavaScript."
        </p>
      </footer>
    </div>
  );
};

export default JsFunctionClosures;