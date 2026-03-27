import React, { useState } from 'react';
import {
  Check,
  Copy,
  Terminal,
  Calendar,
  Rocket,
  Zap,
  ShieldCheck,
  Code2,
  Lock,
  Globe,
  Lightbulb,
  Milestone
} from 'lucide-react';

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-4 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-amber-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button onClick={handleCopy} className="p-1 text-gray-400 hover:text-white transition-colors">
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const TimelineNode = ({ 
    year, 
    title, 
    icon: Icon, 
    features, 
    impact, 
    codeSnippet, 
    codeTitle,
    colorClass 
}: { 
    year: string, 
    title: string, 
    icon: any, 
    features: string[], 
    impact: string, 
    codeSnippet?: string,
    codeTitle?: string,
    colorClass: string 
}) => (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center absolute left-2 sm:left-[6.5rem] top-0 bottom-0">
          <div className={`w-[2px] h-full ${colorClass} opacity-30`}></div>
      </div>
      
      {/* Timeline Node */}
      <div className={`absolute left-0 sm:left-[5.5rem] top-10 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 ${colorClass.replace('bg-', 'bg-').split(' ')[0]} z-10 shadow-lg shadow-${colorClass.split('-')[1]}-500/50 group-hover:scale-150 transition-transform duration-300`}></div>
      
      {/* Year Label (Desktop) */}
      <div className="hidden sm:block absolute left-0 top-9 w-20 text-right pr-6">
          <span className={`font-black text-xl tracking-tighter ${colorClass.replace('bg-', 'text-').split(' ')[0]}`}>{year}</span>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none"><Icon size={120} /></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className={`p-3 rounded-xl text-white ${colorClass.replace('bg-', 'bg-').split(' ')[0]}`}>
                  <Icon size={24} />
              </div>
              <div>
                  {/* Year Label (Mobile) */}
                  <span className={`sm:hidden font-black text-lg tracking-tighter block mb-1 ${colorClass.replace('bg-', 'text-').split(' ')[0]}`}>{year}</span>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">{title}</h3>
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2"><Zap size={16} className="text-amber-500"/> Core Features</h4>
                  <ul className="space-y-3">
                      {features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-medium text-sm">
                              <span className={`mt-0.5 ${colorClass.replace('bg-', 'text-').split(' ')[0]}`}>⚡</span> {feat}
                          </li>
                      ))}
                  </ul>

                  <div className={`mt-6 p-4 rounded-2xl border bg-opacity-10 dark:bg-opacity-10 ${colorClass.replace('bg-', 'bg-').split(' ')[0]} ${colorClass.replace('bg-', 'border-').split(' ')[0]} border-opacity-30`}>
                      <p className={`text-xs uppercase font-bold tracking-widest mb-1 ${colorClass.replace('bg-', 'text-').split(' ')[0]}`}>💡 Impact</p>
                      <p className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">{impact}</p>
                  </div>
              </div>

              {codeSnippet && (
                  <div className="flex flex-col justify-center">
                     <CodeBlock code={codeSnippet} title={codeTitle} />
                  </div>
              )}
          </div>
      </div>
    </div>
);

const JsNews: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#070510] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Calendar size={14} className="fill-current" /> 2015 → 2025
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-[0.9]">
          JS News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 drop-shadow-2xl">Evolution</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          A timeline-style guide tracking how JavaScript evolved from ES6 basics into a <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500 underline-offset-4 tracking-tight">modern, powerful</span> ecosystem.
        </p>
      </header>

      {/* ── Timeline Section ── */}
      <section className="max-w-5xl mx-auto mb-20 relative">
         <TimelineNode 
            year="2015"
            title="The Game Changer (ES6/ES2015)"
            icon={Rocket}
            colorClass="bg-amber-500"
            impact="👉 This exact version modernized JavaScript completely, laying the foundation for all modern web dev."
            features={[
                "let & const block scoping",
                "Arrow functions () => {}",
                "Template literals \`Hello \${name}\`",
                "Destructuring arrays/objects",
                "Default parameters",
                "Modules (import/export)",
                "Classes"
            ]}
         />

         <TimelineNode 
            year="2016-17"
            title="The Async Revolution"
            icon={Zap}
            colorClass="bg-sky-500"
            impact="👉 Eradicated 'Callback Hell' and made asynchronous code strictly linear, clean, and highly readable."
            features={[
                "Array.includes() (2016)",
                "async / await (2017)",
                "Object.values() & Object.entries()"
            ]}
            codeTitle="2017 Syntax"
            codeSnippet={`async function fetchData() {\n  const res = await fetch("api");\n  return res.json();\n}`}
         />

         <TimelineNode 
            year="2018-19"
            title="Performance & Power"
            icon={Terminal}
            colorClass="bg-fuchsia-500"
            impact="👉 Cleaner data handling, rapid array transformations, and powerful object rebuilding tools."
            features={[
                "Spread & Rest operators (...)",
                "Promise.finally()",
                "Array.flat() & flatMap()",
                "Object.fromEntries()",
                "Optional catch binding"
            ]}
         />

         <TimelineNode 
            year="2020"
            title="Modern Safety & Big Numbers"
            icon={ShieldCheck}
            colorClass="bg-emerald-500"
            impact="👉 Reduced runtime errors drastically. Stopped the dreaded 'Cannot read property of undefined' crashes."
            features={[
                "Optional chaining (?.)",
                "Nullish coalescing (??)",
                "BigInt for massive numbers",
                "Promise.allSettled()"
            ]}
            codeTitle="Safe Deep Checking"
            codeSnippet={`// No crash if profile is missing!\nconst name = user?.profile?.name ?? "Guest";`}
         />

         <TimelineNode 
            year="2021-22"
            title="Cleaner Syntax & New Methods"
            icon={Code2}
            colorClass="bg-indigo-500"
            impact="👉 Made algorithms drastically more concise and expressive, stripping away boilerplate code."
            features={[
                "Logical assignment (||=, &&=, ??=)",
                "String.replaceAll()",
                "Array.at() (Negative indexing!)",
                "Top-level await in modules"
            ]}
         />

         <TimelineNode 
            year="2023"
            title="Immutable & Modern Arrays"
            icon={Lock}
            colorClass="bg-rose-500"
            impact="👉 Heavily encourages immutability, making state management in modern frameworks (React) significantly easier."
            features={[
                "toSorted() (Immutable sort)",
                "toReversed() (Immutable reverse)",
                "toSpliced() (Immutable splice)",
                "findLast() & findLastIndex()"
            ]}
         />

         <TimelineNode 
            year="2024-25"
            title="Future JS (Modern Trends)"
            icon={Globe}
            colorClass="bg-violet-500"
            impact="👉 The industry shift shows JS becoming strictly more predictable, highly performance-focused, and robustly framework-friendly."
            features={[
                "Temporal API (Rebuilding Date handling)",
                "Decorators (Class meta-programming)",
                "Records & Tuples (Deeply immutable data)",
                "Faster Runtimes shifting to Bun & Deno"
            ]}
         />
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-16">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
        <p className="text-2xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          CONTINUOUS EVOLUTION
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto">
          "JavaScript isn't standing still. The transition from ES6 in 2015 to the immutable, type-safe, backend-dominating beast it is today proves it's the most adaptive language in the world."
        </p>
      </footer>
    </div>
  );
};

export default JsNews;