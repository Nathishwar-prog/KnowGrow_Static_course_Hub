import React, { useState, useMemo } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Layout,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  Cpu,
  List,
  Binary,
  Box,
  Trash2,
  Filter,
  Search,
  BookOpen,
  Power,
  RefreshCw,
  Share2,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  Minus,
  X,
  Play,
  ArrowRight,
  Code2,
  Layers,
  GitBranch,
  Eye,
  Globe,
  Settings,
  CircleSlash,
  Regex,
  TextCursor,
  Hash,
  Sparkles,
  Smartphone,
  ShieldAlert,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Lock,
  Unlock
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans">
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

const JsRegExpQuantifiers: React.FC = () => {
  const [testText, setTestText] = useState('aaaabbbcccc12345');
  const [regexPattern, setRegexPattern] = useState('a+');
  const [isLazy, setIsLazy] = useState(false);

  const matches = useMemo(() => {
    try {
      const flags = 'g';
      const p = isLazy ? `${regexPattern}?` : regexPattern;
      const re = new RegExp(p, flags);
      const res = testText.match(re);
      return res ? Array.from(res) : [];
    } catch (e) {
      return [];
    }
  }, [testText, regexPattern, isLazy]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden text-gray-900 dark:text-white">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 text-[10px] font-black mb-8 border border-rose-100 dark:border-rose-900/50 shadow-xl shadow-rose-500/5 animate-pulse tracking-[0.2em]">
          <Search size={14} className="fill-current" /> PATTERN FREQUENCY CONTROL
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
          JS RegExp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-500 to-indigo-600 drop-shadow-2xl">
            Quantifiers
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Define patterns of occurrence. Quantifiers determine <span className="text-gray-900 dark:text-white font-bold italic underline decoration-rose-500/30 uppercase tracking-widest text-sm">"How many times"</span> a character or pattern should match.
        </p>
      </header>

      {/* ── Section 1: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionHeader icon={Info} title="1. What are Quantifiers?" subtitle="Defining repetition in regular expressions." color="text-rose-500" />
          <div className="p-8 bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed font-sans italic">
              "Quantifiers define how many times a character or pattern should occur in a sequence. They are the backbone of robust pattern matching."
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Form Validation", icon: List },
                { label: "Password Rules", icon: ShieldCheck },
                { label: "Data Extraction", icon: Download },
                { label: "Text Processing", icon: TextCursor }
              ].map((use, i) => (
                <div key={i} className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center gap-4 group">
                  <div className="p-2 bg-white dark:bg-gray-900 rounded-xl text-rose-500 shadow-sm transition-transform group-hover:scale-110">
                    <use.icon size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">{use.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 font-sans">
          <div className="p-2 bg-gradient-to-br from-rose-500/20 to-indigo-500/20 rounded-[3rem]">
            <div className="bg-white dark:bg-gray-950 rounded-[2.8rem] p-10 shadow-2xl space-y-8">
              <h4 className="text-xl font-black italic tracking-tight flex items-center gap-3">
                <Layers size={24} className="text-rose-500 font-sans italic underline decoration-rose-500/10" /> Main Quantifiers
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { q: "*", m: "0 or more" },
                  { q: "+", m: "1 or more" },
                  { q: "?", m: "0 or 1" },
                  { q: "{n}", m: "Exactly n" },
                  { q: "{n,}", m: "n or more" },
                  { q: "{n,m}", m: "Between n and m" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl group hover:border-rose-500/40 transition-all font-sans italic overflow-hidden text-ellipsis">
                    <span className="text-lg font-black text-rose-500 mb-1">{row.q}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-300 transition-colors">{row.m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Detailed Reference ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-x-12 gap-y-16">
        {/* * Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-emerald-500 font-sans italic">
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <Sparkles size={24} />
            </div>
            * (0 or More)
          </h4>
          <p className="text-gray-500 font-medium italic font-sans italic">Matches the preceding item zero or more times. It effectively makes the character optional but allows for an infinite sequence.</p>
          <CodeBlock title="* Example" code={`let regex = /a*/;\n\nconsole.log("aaa".match(regex));\n\n// Matches: "", "a", "aaa"`} />
        </div>

        {/* + Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all font-sans italic">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-sky-500 font-sans italic">
            <div className="p-3 bg-sky-500/10 rounded-2xl">
              <Plus size={24} />
            </div>
            + (1 or More)
          </h4>
          <p className="text-gray-500 font-medium italic font-sans italic">Matches the preceding item one or more times. Requires **at least one** instance for a successful match.</p>
          <CodeBlock title="+ Example" code={`let regex = /a+/;\n\nconsole.log("aaa".match(regex));\n\n// Matches: "a", "aaa" | ❌ Not empty`} />
        </div>

        {/* ? Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all font-sans italic font-sans">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-indigo-500">
            <div className="p-3 bg-indigo-500/10 rounded-2xl">
              <HelpCircle size={24} />
            </div>
            ? (0 or 1)
          </h4>
          <p className="text-gray-500 font-medium font-sans italic">Makes the preceding item optional. It matches either zero or one instance of the character.</p>
          <CodeBlock title="? Example" code={`let regex = /colou?r/;\n\nconsole.log("color".match(regex));\nconsole.log("colour".match(regex));\n\n// Matches: "color" and "colour"`} />
        </div>

        {/* {n} Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all font-sans italic">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-rose-500">
            <div className="p-3 bg-rose-500/10 rounded-2xl">
              <Hash size={24} />
            </div>
            {`{n}`} (Exact Count)
          </h4>
          <p className="text-gray-500 font-medium font-sans italic">Matches the preceding item **exactly** n times. Useful for fixed-length data like years or IDs.</p>
          <CodeBlock title="Exact Count Example" code={`let regex = /\\d{4}/;\n\nconsole.log("2024".match(regex));\n\n// Exactly 4 digits`} />
        </div>

        {/* {n,} Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all font-sans italic font-sans">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-amber-500">
            <div className="p-3 bg-amber-500/10 rounded-2xl">
              <Maximize size={24} />
            </div>
            {`{n,}`} (At Least n)
          </h4>
          <p className="text-gray-500 font-medium italic font-sans italic">Matches the preceding item **at least** n times, with no upper limit.</p>
          <CodeBlock title="Minimum Count Example" code={`let regex = /\\d{2,}/;\n\nconsole.log("12345".match(regex));\n\n// 2 or more digits`} />
        </div>

        {/* {n,m} Group */}
        <div className="space-y-6 group p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all font-sans italic font-sans italic">
          <h4 className="text-2xl font-black italic flex items-center gap-4 text-teal-500">
            <div className="p-3 bg-teal-500/10 rounded-2xl">
              <Grid size={24} />
            </div>
            {`{n,m}`} (Range)
          </h4>
          <p className="text-gray-500 font-medium leading-relaxed font-sans italic font-sans italic">Matches the preceding item **between n and m** times (inclusive).</p>
          <CodeBlock title="Range Example" code={`let regex = /\\d{2,4}/;\n\nconsole.log("12345".match(regex));\n\n// Matches strings like "12" or "1234"`} />
        </div>
      </section>

      {/* ── Section 3: Interactive Regex Playground ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="p-1 sm:p-2 bg-gradient-to-br from-indigo-500/20 via-rose-500/20 to-purple-500/20 rounded-[4rem]">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner font-sans italic">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest font-sans italic">
                  <Terminal size={12} /> Live Engine
                </div>
                <h3 className="text-4xl font-black italic tracking-tighter leading-tight font-sans italic underline decoration-transparent">
                  Regex <span className="text-rose-500 font-sans italic">Quantifier</span> Playground
                </h3>
                <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 font-sans italic">Experiment with Greedy vs Lazy logic. Enter a string and a pattern to see exactly what gets captured.</p>

                <div className="space-y-6 italic">
                  <div className="flex flex-col gap-2 italic">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 italic">Test String</label>
                    <input
                      type="text"
                      value={testText}
                      onChange={(e) => setTestText(e.target.value)}
                      className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-8 py-5 font-black italic outline-none transition-all focus:border-rose-500 text-gray-900 dark:text-white font-sans italic"
                      placeholder="Enter text..."
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-sans italic">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2 font-sans italic underline decoration-transparent">Quantifier Pattern</label>
                    <div className="relative group">
                      <input
                        type="text"
                        value={regexPattern}
                        onChange={(e) => setRegexPattern(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl px-12 py-5 font-black italic outline-none transition-all focus:border-indigo-500 text-gray-900 dark:text-white font-sans italic"
                        placeholder="e.g. a+"
                      />
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">/</div>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">/g{isLazy ? '?' : ''}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 group font-sans italic">
                    <button
                      onClick={() => setIsLazy(!isLazy)}
                      className={`w-14 h-8 rounded-full transition-all relative flex items-center p-1 ${isLazy ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-700'}`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${isLazy ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </button>
                    <div>
                      <h6 className="text-xs font-black italic tracking-tight underline decoration-transparent uppercase">Enable Lazy Mode (?)</h6>
                      <p className="text-[10px] text-gray-500 font-medium">Minimal match instead of maximal match.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="p-10 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl min-h-[400px] flex flex-col justify-center font-sans italic border-rose-500/10 underline decoration-transparent">
                  <div className="flex flex-wrap gap-2 mb-8 underline decoration-transparent bg-white/5 p-12 rounded-[2.5rem] border border-white/5 shadow-inner backdrop-blur-3xl">
                    {matches.length === 0 ? (
                      <span className="text-gray-600 font-black italic uppercase tracking-widest text-xs">No Matches Found</span>
                    ) : (
                      matches.map((match, i) => (
                        <div key={i} className="px-5 py-2.5 bg-rose-500 text-white font-black italic rounded-xl shadow-lg shadow-rose-500/20 animate-in zoom-in duration-300">
                          {match as string}
                        </div>
                      ))
                    )}
                  </div>
                  <div className="text-center italic underline decoration-transparent">
                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]">Engine Status: {isLazy ? 'LAZY' : 'GREEDY'}</span>
                    <div className="mt-4 p-4 border border-white/5 rounded-2xl bg-white/5">
                      <code className="text-rose-500 font-bold italic font-mono">
                        {`Result: ${JSON.stringify(matches)}`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Greedy vs Lazy ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
          <SectionHeader icon={Activity} title="3. Greedy vs Lazy Quantifiers" subtitle="How much content should we swallow?" color="text-indigo-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10">
            <div className="space-y-4">
              <h5 className="text-xl font-black italic text-emerald-500 flex items-center gap-3">
                <Lock size={20} /> Greedy (Default)
              </h5>
              <p className="text-gray-500 font-medium italic underline decoration-emerald-500/10 uppercase tracking-widest text-[10px]">Swallows as much text as possible while still matching the pattern.</p>
              <CodeBlock title="Greedy Example" code={`let text = "aaaa";\nconsole.log(text.match(/a+/));\n\n// Output: "aaaa" (Maximum)`} />
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-700"></div>
            <div className="space-y-4">
              <h5 className="text-xl font-black italic text-rose-500 flex items-center gap-3">
                <Unlock size={20} /> Lazy (Minimal)
              </h5>
              <p className="text-gray-500 font-medium italic underline decoration-rose-500/10 uppercase tracking-widest text-[10px]">Stops as soon as the first valid match is identified.</p>
              <CodeBlock title="Lazy Example" code={`let text = "aaaa";\nconsole.log(text.match(/a+?/));\n\n// Output: "a" (Minimum)`} />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={ShieldCheck} title="4. Real-World Power" subtitle="Practical ways to use repetition in apps." color="text-rose-500" />
          <div className="space-y-6">
            {[
              {
                title: "Phone Number Validation",
                code: `let regex = /^\\d{10}$/;\nregex.test("9876543210"); // true`,
                icon: Smartphone,
                color: "text-emerald-500",
                desc: "Strict length enforcement."
              },
              {
                title: "Password Robustness",
                code: `let regex = /^.{6,}$/;\nregex.test("secret123"); // true`,
                icon: ShieldAlert,
                color: "text-rose-500",
                desc: "Minimum character limit."
              },
              {
                title: "Extract Alpha Words",
                code: `let text = "Hello123";\ntext.match(/[a-zA-Z]+/); // ["Hello"]`,
                icon: TextCursor,
                color: "text-indigo-500",
                desc: "Continuous content parsing."
              }
            ].map((exp, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-4 group hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 ${exp.color} group-hover:scale-110 transition-transform`}>
                    <exp.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{exp.desc}</span>
                </div>
                <h4 className="text-xl font-black italic tracking-tight">🎯 {exp.title}</h4>
                <CodeBlock title={exp.title} code={exp.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Visualization Block ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <SectionHeader icon={Eye} title="5. Visual Logic Mapping" subtitle="Understanding valid and invalid sequence lengths." color="text-emerald-500" />
        <div className="p-12 bg-gray-950 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-[2000ms]">
            <Layers size={250} className="text-emerald-500" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h4 className="text-2xl font-black italic text-white underline decoration-emerald-500/20">/a{`{2,4}`}/</h4>
              <p className="text-gray-500 font-medium italic underline decoration-transparent">Target: Between 2 and 4 continuous 'a' characters.</p>

              <div className="space-y-4 mt-8">
                {[
                  { text: "aa", s: "✅ VALID (min length)" },
                  { text: "aaa", s: "✅ VALID" },
                  { text: "aaaa", s: "✅ VALID (max length)" },
                  { text: "a", s: "❌ INVALID (too short)" },
                  { text: "aaaaa", s: "❌ INVALID (too long)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 bg-white/5 border border-white/5 rounded-2xl group transition-all">
                    <span className="font-mono text-emerald-500 font-black italic tracking-widest w-20 group-hover:translate-x-2 transition-transform">"{item.text}"</span>
                    <span className="text-[10px] font-black uppercase text-white/40 tracking-widest italic">{item.s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:block">
              <div className="p-8 bg-black/40 border border-emerald-500/10 rounded-[3rem] text-center">
                <span className="text-emerald-500/50 text-[8px] font-black uppercase tracking-[0.5em] italic">Repetition Theory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Recommendations & Tips ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 font-sans italic">
        <div className="space-y-8">
          <SectionHeader icon={Lightbulb} title="Expert Advice" subtitle="Production-level Regex strategies." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-6">
            {[
              { label: "Prefer Range over Plus", text: "Use {n,m} for validation as it provides significantly more precision than +.", icon: ShieldCheck, color: "text-emerald-500" },
              { label: "The Star Risk", text: "Be careful with *. It can match empty strings, which often leads to infinite loops or false positives.", icon: AlertTriangle, color: "text-amber-500" },
              { label: "Lazy Parsing", text: "Always use lazy quantifiers (? appended) for HTML or text parsing to avoid overmatching large blocks.", icon: Anchor, color: "text-indigo-500" }
            ].map((rec, i) => (
              <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-950 rounded-3xl group">
                <div className={`p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${rec.color} group-hover:scale-110 transition-transform`}>
                  <rec.icon size={20} />
                </div>
                <div>
                  <h6 className={`text-sm font-black italic underline decoration-transparent ${rec.color} block mb-1`}>{rec.label}</h6>
                  <p className="text-xs text-gray-500 font-medium italic underline decoration-gray-500/10">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader icon={Zap} title="⚡ Workflow Power" subtitle="Speed up your pattern development." color="text-rose-500" />
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Combine and Conquer", text: "Mix quantifiers with character classes for complex validation patterns.", code: "/[a-z]{3,5}\\d+/" },
              { title: "Anchors are Essential", text: "Wrap quantifiers with ^ and $ for total string validation enforcement.", code: "/^\\d{10}$/" },
              { title: "Incremental Building", text: "Always test small, specific patterns before combining them into a massive expression.", code: "Develop Step-by-Step" },
              { title: "External Verification", text: "Use tools like Regex101 or RegExr to visualize your capture groups and performance.", code: "Test Online Regularly" }
            ].map((tip, i) => (
              <div key={i} className="p-8 bg-gray-950 rounded-[2.8rem] border border-white/5 shadow-2xl space-y-4 group">
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-black italic underline decoration-rose-500/20 underline decoration-transparent">{tip.title}</h5>
                  <ArrowRight size={16} className="text-rose-500 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-gray-500 text-xs italic">{tip.text}</p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-[10px] text-rose-400 underline decoration-transparent">{tip.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-rose-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] leading-tight">
          Pattern Repeat. <br /> Total Control.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-medium">
          Quantifiers are the "How Many" of the RegExp world. Mastering them allows you to move from searching for fixed strings to enforcing complex, flexible data rules.
        </p>
      </footer>

    </div>
  );
};

export default JsRegExpQuantifiers;