import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Search, 
  Filter, 
  Shuffle, 
  Layers, 
  Code2, 
  CheckCircle, 
  ShieldCheck,
  Terminal, 
  ArrowRight,
  Monitor,
  Cpu,
  RefreshCw,
  Zap,
  Box,
  Hash,
  Copy,
  Check,
  Package,
  Activity,
  Infinity,
  Database,
  Eye,
  Settings,
  Target
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
            title="Copy code"
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

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-indigo-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const MethodCard = ({ 
  icon: Icon, 
  title, 
  description, 
  code, 
  output, 
  colorClass = "indigo",
  badge = ""
}: { 
  icon: any; 
  title: string; 
  description: string; 
  code: string; 
  output: string;
  colorClass?: string;
  badge?: string;
}) => (
  <div className="group relative bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
      colorClass === 'indigo' ? 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400' :
      colorClass === 'rose' ? 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/30 dark:text-rose-400' :
      'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400'
    }`}>
      {badge || 'Standard'}
    </div>
    
    <div className="flex items-start gap-5 mb-6">
      <div className={`p-4 rounded-2xl ${
        colorClass === 'indigo' ? 'bg-indigo-500 shadow-indigo-500/20' :
        colorClass === 'rose' ? 'bg-rose-500 shadow-rose-500/20' :
        'bg-emerald-500 shadow-emerald-500/20'
      } text-white shadow-lg`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
      </div>
    </div>

    <div className="space-y-4">
      <CodeBlock title={title + " Syntax"} code={code} />
      <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 font-mono text-sm leading-none overflow-hidden">
        <Target size={16} className="text-amber-500 shrink-0" />
        <span className="text-gray-400 mr-2 shrink-0">Output:</span>
        <span className="text-emerald-500 font-bold truncate">{output}</span>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsArrayIterations: React.FC = () => {
  const [numbers, setNumbers] = useState([45, 4, 9, 16, 25]);
  const [selectedMethod, setSelectedMethod] = useState('map');
  const [activeTab, setActiveTab] = useState('transformation');

  const iterationLabResult = useMemo(() => {
    switch (selectedMethod) {
      case 'map':
        return numbers.map(n => n * 2);
      case 'filter':
        return numbers.filter(n => n > 18);
      case 'reduce':
        return [numbers.reduce((acc, n) => acc + n, 0)];
      case 'every':
        return [numbers.every(n => n > 18) ? 'True' : 'False'];
      case 'some':
        return [numbers.some(n => n > 18) ? 'True' : 'False'];
      default:
        return numbers;
    }
  }, [numbers, selectedMethod]);

  const labCode = useMemo(() => {
    switch (selectedMethod) {
      case 'map': return `const result = numbers.map(x => x * 2);`;
      case 'filter': return `const result = numbers.filter(x => x > 18);`;
      case 'reduce': return `const sum = numbers.reduce((total, x) => total + x, 0);`;
      case 'every': return `const allOver18 = numbers.every(x => x > 18);`;
      case 'some': return `const someOver18 = numbers.some(x => x > 18);`;
      default: return ``;
    }
  }, [selectedMethod]);

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-xs font-black mb-8 border border-indigo-100 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 animate-bounce">
          <Zap size={14} className="fill-current" /> ARRAY POWER-UPS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JS Array<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-600 drop-shadow-2xl">
            Iterations
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The most important part of working with arrays is <span className="text-gray-900 dark:text-white font-bold">navigating</span> and <span className="text-gray-900 dark:text-white font-bold">transforming</span> their data.
        </p>
      </header>

      {/* ── Section: Iteration Lab ── */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-white/70 dark:bg-gray-800/80 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white/50 dark:border-gray-700/50 overflow-hidden">
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Lab Controls */}
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-4">
                    <Activity className="text-indigo-500" size={36} /> Iteration Lab
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">Experiment with real-time array transformations.</p>
                </div>

                <div className="space-y-6">
                  {/* Array Display */}
                  <div className="p-6 bg-gray-900/5 dark:bg-gray-900/50 rounded-[2rem] border border-black/5 dark:border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Box size={14} /> Current Array
                      </span>
                      <button 
                        onClick={() => setNumbers([45, 4, 9, 16, 25])}
                        className="text-[10px] font-black text-indigo-500 uppercase tracking-tighter hover:text-indigo-600 transition-colors flex items-center gap-1"
                      >
                        <RotateCcw size={10} /> Reset
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {numbers.map((n, i) => (
                        <div key={i} className="px-5 py-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 font-black text-indigo-500 flex items-center justify-center transform hover:scale-110 transition-all cursor-default">
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Method Selection */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['map', 'filter', 'reduce', 'every', 'some'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedMethod(m)}
                        className={`px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                          selectedMethod === m 
                          ? 'bg-indigo-500 text-white shadow-xl shadow-indigo-500/25 scale-105' 
                          : 'bg-white dark:bg-gray-700 text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                        }`}
                      >
                        .{m}()
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lab Visualization */}
              <div className="lg:w-1/2 flex flex-col pt-8 lg:pt-0">
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#1e1e1e] rounded-t-[2rem] p-6 border-b border-gray-800">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-2">Transformation.js</span>
                    </div>
                    <pre className="font-mono text-indigo-300 text-base">
                      <code>{labCode}</code>
                    </pre>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-b-[2rem] p-10 flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Terminal size={120} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] mb-8">Result Array</span>
                    <div className="flex flex-wrap gap-4 justify-center relative z-10">
                      {iterationLabResult.map((val, i) => (
                        <div key={i} className="px-8 py-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-3xl shadow-2xl animate-in zoom-in duration-300">
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section: Method Navigation ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'transformation', label: 'Transformation', icon: RefreshCw },
            { id: 'search', label: 'Search & Filtering', icon: Search },
            { id: 'validation', label: 'Validation', icon: CheckCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 border-2 ${
                activeTab === tab.id
                ? 'bg-white dark:bg-gray-800 border-indigo-500 text-indigo-500 shadow-xl'
                : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {activeTab === 'transformation' && (
            <>
              <MethodCard 
                icon={RefreshCw}
                title="Array.map()"
                description="Creates a new array by performing a function on each element."
                colorClass="indigo"
                badge="ES5"
                code={`const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((value) => value * 2);`}
                output="[90, 8, 18, 32, 50]"
              />
              <MethodCard 
                icon={Database}
                title="Array.reduce()"
                description="Runs a function on each element to produce (reduce it to) a single value."
                colorClass="rose"
                badge="ES5"
                code={`const sum = numbers.reduce((total, value) => {
  return total + value;
}, 0);`}
                output="99"
              />
              <MethodCard 
                icon={Layers}
                title="Array.flatMap()"
                description="Maps each element using a mapping function and then flattens the result into a new array."
                colorClass="emerald"
                badge="ES2019"
                code={`const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);`}
                output="[2, 4, 6, 8, 10, 12]"
              />
              <MethodCard 
                icon={Infinity}
                title="Array.forEach()"
                description="Calls a function for each element. Returns undefined."
                colorClass="indigo"
                badge="ES5"
                code={`let text = "";
numbers.forEach((value) => {
  text += value + "<br>";
});`}
                output="undefined (Mutates External State)"
              />
            </>
          )}

          {activeTab === 'search' && (
            <>
              <MethodCard 
                icon={Filter}
                title="Array.filter()"
                description="Creates a new array with elements that pass a test."
                colorClass="rose"
                badge="ES5"
                code={`const over18 = numbers.filter((value) => {
  return value > 18;
});`}
                output="[45, 25]"
              />
              <MethodCard 
                icon={Search}
                title="Array.find()"
                description="Returns the value of the first element that passes a test."
                colorClass="emerald"
                badge="ES6"
                code={`const first = numbers.find((value) => {
  return value > 18;
});`}
                output="45"
              />
              <MethodCard 
                icon={Hash}
                title="Array.findIndex()"
                description="Returns the index of the first element that passes a test."
                colorClass="indigo"
                badge="ES6"
                code={`const index = numbers.findIndex((value) => {
  return value > 18;
});`}
                output="0"
              />
              <MethodCard 
                icon={Shuffle}
                title="Array.indexOf()"
                description="Searches for an element value and returns its position."
                colorClass="rose"
                badge="ES5"
                code={`let position = fruits.indexOf("Apple") + 1;`}
                output="1 (If first element is Apple)"
              />
            </>
          )}

          {activeTab === 'validation' && (
            <>
              <MethodCard 
                icon={CheckCircle}
                title="Array.every()"
                description="Checks if all array values pass a test."
                colorClass="emerald"
                badge="ES5"
                code={`const allOver18 = numbers.every((value) => {
  return value > 18;
});`}
                output="false"
              />
              <MethodCard 
                icon={Activity}
                title="Array.some()"
                description="Checks if some array values pass a test."
                colorClass="rose"
                badge="ES5"
                code={`const someOver18 = numbers.some((value) => {
  return value > 18;
});`}
                output="true"
              />
              <MethodCard 
                icon={Settings}
                title="Array.includes()"
                description="Check if an element is present in an array (including NaN)."
                colorClass="indigo"
                badge="ES2016"
                code={`fruits.includes("Mango");`}
                output="true"
              />
              <MethodCard 
                icon={Monitor}
                title="Array.from()"
                description="Returns an Array object from any object with a length property or an iterable object."
                colorClass="emerald"
                badge="ES6"
                code={`Array.from("ABCDEFG");`}
                output="['A', 'B', 'C', 'D', 'E', 'F', 'G']"
              />
            </>
          )}
        </div>
      </section>

      {/* ── Section: More ES Features ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 bg-white dark:bg-gray-800 p-12 rounded-[3.5rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -rotate-45 translate-x-12 -translate-y-12"></div>
          <SectionHeader icon={Zap} title="ES2023: Spread & Immutability" subtitle="Modern JS prioritizes non-mutating operations." color="text-yellow-500" />
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            The Spread operator <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-indigo-500">...</span> is essential for iteration when you want to avoid mutating the original array.
          </p>
          <CodeBlock title="Spread Example" code={`const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const year = [...q1, ...q2];
console.log(year);`} />
          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl border border-yellow-100 dark:border-yellow-800/50">
             <h4 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2 flex items-center gap-2 italic">
               <Activity size={18} /> Performance Tip:
             </h4>
             <p className="text-sm text-yellow-700 dark:text-yellow-300">
               Use <code className="font-bold">map</code> and <code className="font-bold">filter</code> over <code className="font-bold">forEach</code> when you need to chain operations. It keeps your code more readable and functional.
             </p>
          </div>
        </div>

        <div className="lg:col-span-4 bg-indigo-600 p-10 rounded-[3.5rem] shadow-2xl shadow-indigo-500/30 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <Monitor size={140} />
          </div>
          <h2 className="text-3xl font-black mb-6 relative z-10 leading-tight">Iteration<br />Best Practices</h2>
          <div className="space-y-6 relative z-10">
            {[
              { text: 'Dont modify original arrays', icon: ShieldCheck },
              { text: 'Use semantic methods (filter vs if)', icon: Layers },
              { text: 'Catch undefined results', icon: Search }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-sm tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
         <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-10"></div>
         <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
           Iterate Smarter.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
           Array iterations are the backbone of modern web applications.<br />
           Mastering these methods allows you to handle big data with elegant, readable code.
         </p>
         <div className="mt-12 flex justify-center gap-6">
            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:text-indigo-500 transition-colors">
              <Cpu size={24} />
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:text-rose-500 transition-colors">
              <RefreshCw size={24} />
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:text-emerald-500 transition-colors">
              <Database size={24} />
            </div>
         </div>
      </footer>

    </div>
  );
};

export default JsArrayIterations;