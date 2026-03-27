import React, { useState } from 'react';
import {
  Check,
  Copy,
  Terminal,
  Calculator,
  RefreshCw,
  Hash,
  AlertTriangle,
  Code2,
  List,
  Target,
  Settings,
  Eye,
  ArrowRight,
  ShieldCheck,
  Search,
  ShoppingCart,
  CheckCircle,
  FileCode2,
  PieChart,
  Sigma,
  BoxSelect,
  Binary,
  Globe
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
            <span className="ml-2 text-[10px] font-black text-violet-400 uppercase tracking-[0.2em]">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 w-full" style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-violet-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
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

const JsNumberMethods: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#080512] min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-400 text-[10px] font-black mb-8 border border-violet-100 dark:border-violet-900/50 shadow-xl shadow-violet-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Hash size={14} className="fill-current" /> DATA PARSING
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          Number <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-purple-500 drop-shadow-2xl">
            Methods
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          The built-in toolkit bridging strings and math. Format displays, force data conversions, handle <span className="text-gray-900 dark:text-white font-bold underline decoration-violet-500 underline-offset-4 tracking-tight">high-precision floats</span>, and validate integers.
        </p>
      </header>

      {/* ── Section 1: What are Number Methods? ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="p-10 bg-white dark:bg-gray-800/80 rounded-[3rem] border border-violet-200 dark:border-violet-500/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
           <div className="absolute top-0 right-0 p-10 opacity-10"><Calculator size={200} className="text-violet-500"/></div>
           <SectionHeader icon={Settings} title="1. Purpose of Number Methods" color="text-violet-500" />
           <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
               In JavaScript, number methods give you programmatic control to:
           </p>
           <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative z-10 w-full">
              <li className="bg-indigo-50 dark:bg-indigo-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-indigo-100 dark:border-indigo-800">
                 <Eye size={24} className="text-indigo-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-indigo-200">Format Display</span>
              </li>
              <li className="bg-violet-50 dark:bg-violet-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-violet-100 dark:border-violet-800">
                 <RefreshCw size={24} className="text-violet-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-violet-200">Convert Values</span>
              </li>
              <li className="bg-purple-50 dark:bg-purple-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-purple-100 dark:border-purple-800">
                 <Target size={24} className="text-purple-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-purple-200">Handle Precision</span>
              </li>
              <li className="bg-emerald-50 dark:bg-emerald-900/20 p-4 flex flex-col items-center justify-center text-center rounded-2xl border border-emerald-100 dark:border-emerald-800">
                 <ShieldCheck size={24} className="text-emerald-500 mb-2"/>
                 <span className="font-bold text-gray-800 dark:text-emerald-200">Validate Data</span>
              </li>
           </ul>
         </div>
      </section>

      {/* ── Section 2: Instance Methods Grid ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="flex items-center justify-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
              <Terminal className="text-indigo-500" size={40} /> Prototype Methods
            </h2>
         </div>

         <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* toString */}
            <div className="bg-[#0b101c] border border-indigo-500/20 p-8 rounded-3xl shadow-lg flex flex-col h-full hover:border-indigo-500/50 transition-colors">
               <h4 className="font-black text-indigo-400 text-xl mb-4 flex items-center gap-2"><Binary size={20}/> 2.1 toString()</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Converts a number primitive directly into a String.</p>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let num = 100;\nconsole.log(num.toString()); // "100"\n\n// Bonus: Base conversion (e.g. Binary)\nconsole.log((10).toString(2)); // "1010"`} />
               </div>
            </div>

            {/* toFixed */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col h-full hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><PieChart size={20} className="text-emerald-500"/> 2.2 toFixed()</h4>
               <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Rounds the number to an exact number of decimal places (Returns String).</p>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let num = 5.6789;\nconsole.log(num.toFixed(2)); \n// "5.68"`} />
               </div>
            </div>

            {/* toPrecision */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col h-full hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
               <h4 className="font-black text-gray-900 dark:text-white text-xl mb-4 flex items-center gap-2"><Target size={20} className="text-rose-500"/> 2.3 toPrecision()</h4>
               <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">👉 Formats a number to a specified length of total digits (Returns String).</p>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let num = 5.6789;\nconsole.log(num.toPrecision(3)); \n// "5.68"`} />
               </div>
            </div>

            {/* valueOf */}
            <div className="bg-[#0b101c] border border-indigo-500/20 p-8 rounded-3xl shadow-lg flex flex-col h-full hover:border-indigo-500/50 transition-colors">
               <h4 className="font-black text-indigo-400 text-xl mb-4 flex items-center gap-2"><BoxSelect size={20}/> 2.4 valueOf()</h4>
               <p className="text-gray-400 text-sm font-medium mb-6">👉 Returns the primitive backend value of a Number object. Rarely used manually.</p>
               <div className="flex-1 w-full flex flex-col">
                  <CodeBlock code={`let num = 123;\nconsole.log(num.valueOf()); // 123`} />
               </div>
            </div>
         </div>
      </section>
      
      {/* ── Section 6: Visualization Quick Check ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-emerald-50 dark:bg-[#06120a] border border-emerald-200 dark:border-emerald-500/30 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col items-center">
            <h3 className="font-black text-emerald-800 dark:text-emerald-400 text-2xl uppercase tracking-widest mb-8"><Eye className="inline mr-2"/> Understanding the Output</h3>
            <div className="bg-white dark:bg-black/40 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 shadow-inner w-full max-w-lg font-mono text-sm space-y-4">
                <div className="text-center font-bold text-gray-400 mb-6 bg-gray-100 dark:bg-gray-900 p-2 rounded-lg">
                    Base Variable: <span className="text-gray-900 dark:text-white text-lg ml-2">5.6789</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                   <span className="text-emerald-600 dark:text-emerald-400 font-bold">.toFixed(2)</span>
                   <ArrowRight size={16} className="text-gray-300 dark:text-gray-700" />
                   <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded">"5.68"</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                   <span className="text-emerald-600 dark:text-emerald-400 font-bold">.toPrecision(3)</span>
                   <ArrowRight size={16} className="text-gray-300 dark:text-gray-700" />
                   <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded">"5.68"</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-emerald-600 dark:text-emerald-400 font-bold">.toString()</span>
                   <ArrowRight size={16} className="text-gray-300 dark:text-gray-700" />
                   <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded">"5.6789"</span>
                </div>
            </div>
         </div>
      </section>

      {/* ── Section 3 & 4: Global Parsing & Checking ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-12 gap-8">
         {/* Global Parse Grid */}
         <div className="bg-[#12050a] border border-fuchsia-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col lg:col-span-6 overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10 p-8"><RefreshCw size={200} className="text-fuchsia-500"/></div>
            <SectionHeader icon={Globe} title="3. Global Parsers" color="text-fuchsia-400" />
            <div className="space-y-6 mt-4 relative z-10 w-full">
               <div className="bg-black/30 border border-fuchsia-500/10 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-white mb-1">Number()</h5>
                  <p className="text-gray-400 text-xs mb-3">Converts entire value → Number.</p>
                  <CodeBlock code={`Number("123"); // 123\nNumber("abc"); // NaN`} />
               </div>
               <div className="bg-black/30 border border-fuchsia-500/10 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-white mb-1">parseInt()</h5>
                  <p className="text-gray-400 text-xs mb-3">Parses string strictly to an integer (drops decimals).</p>
                  <CodeBlock code={`parseInt("10.99"); // 10`} />
               </div>
               <div className="bg-black/30 border border-fuchsia-500/10 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-white mb-1">parseFloat()</h5>
                  <p className="text-gray-400 text-xs mb-3">Parses string strictly to a floating-point number.</p>
                  <CodeBlock code={`parseFloat("10.99"); // 10.99`} />
               </div>
            </div>
         </div>

         {/* Native Checking */}
         <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-10 rounded-[3rem] shadow-xl flex flex-col lg:col-span-6">
            <SectionHeader icon={ShieldCheck} title="4. Validation" subtitle="Type guards." color="text-emerald-500" />
            
            <div className="space-y-6 mt-4 w-full">
               <div className="bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-700 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1">isNaN()</h5>
                  <p className="text-gray-500 text-xs mb-3">Standard global check for "Not-A-Number".</p>
                  <CodeBlock code={`isNaN("abc"); // true`} />
               </div>
               <div className="bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-700 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">Number.isNaN()</h5>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-3 flex items-center gap-1"><CheckCircle size={12}/> More accurate than global isNaN()</p>
                  <CodeBlock code={`Number.isNaN(NaN); // true`} />
               </div>
               <div className="bg-gray-50 dark:bg-black/30 border border-gray-100 dark:border-gray-700 p-5 rounded-2xl w-full">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1">Number.isInteger()</h5>
                  <p className="text-gray-500 text-xs mb-3">Strict check if the type is a whole number primitive.</p>
                  <CodeBlock code={`Number.isInteger(10);   // true\nNumber.isInteger(10.5); // false`} />
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 5: Real World Mini Project ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <div className="bg-white dark:bg-gray-800 p-10 md:p-14 border border-gray-100 dark:border-gray-700 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 w-full">
               <SectionHeader icon={ShoppingCart} title="5. Mini Project" subtitle="E-Commerce Price Formatter" color="text-indigo-500" />
               <CodeBlock language="javascript" code={`function formatPrice(price) {\n  return "₹" + price.toFixed(2);\n}\n\nconsole.log(formatPrice(99.9));`} />
            </div>

            <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center relative z-10">
                <div className="bg-[#1e1e1e] p-6 rounded-3xl border-4 border-indigo-500 shadow-2xl shadow-indigo-500/20 text-center min-w-[200px]">
                   <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-2 flex items-center justify-center gap-2"><Terminal size={14}/> Output</p>
                   <p className="font-mono text-emerald-400 font-black text-4xl">₹99.90</p>
                </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          PRECISION ENGINEERING
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-violet-500/10 decoration-2">
          "Mastering JavaScript Number methods bridges the gap between raw backend mathematical logic and beautifully formatted Frontend UI strings."
        </p>
      </footer>

    </div>
  );
};

export default JsNumberMethods;