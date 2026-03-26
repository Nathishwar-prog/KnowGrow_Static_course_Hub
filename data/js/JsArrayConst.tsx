import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Code2, 
  CheckCircle, 
  TriangleAlert, 
  Terminal, 
  ArrowRight,
  Monitor,
  Cpu,
  RefreshCw,
  PlusCircle,
  Edit3,
  Trash2,
  Copy,
  Check,
  Package,
  Variable
} from 'lucide-react';

// ─── Reusable Components ──────────────────────────────────────────────────────

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
            <span className="ml-2 text-xs font-medium text-gray-400 uppercase tracking-widest">{title}</span>
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
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2">
      <div className={`p-2 rounded-xl bg-gray-100 dark:bg-gray-800 mr-4 shadow-sm ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-14 font-medium">{subtitle}</p>}
  </div>
);

const JsArrayConst: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#0f172a] min-h-screen font-sans selection:bg-amber-500/30">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-20 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-bold mb-6 border border-amber-200 dark:border-amber-800 shadow-sm animate-pulse">
          <ShieldCheck size={16} /> MODERN JS DATA STRUCTURES
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
          JS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Array Const</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The keyword <span className="text-amber-500 font-bold">const</span> is a bit misleading. It does NOT define a constant array. It defines a constant reference to an array.
        </p>
      </header>

      {/* ── Section 1: The Core Concept ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <SectionHeader icon={Package} title="1. Constant Reference" color="text-amber-500" />
              <div className="space-y-6">
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/50">
                  <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">👉 The Rule:</p>
                  <p className="text-amber-700 dark:text-amber-300 italic text-xl font-medium">
                    “You can change the elements of a const array, but you cannot reassign the array.”
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Variable size={20} className="text-gray-400" /> 🧠 Memory Insight
                  </h3>
                  <p className="text-gray-500 mb-4">The variable stores the <strong>address</strong> (reference) of the array, not the values directly.</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-emerald-500/30">✓</div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Modify Elements</p>
                        <p className="text-sm text-gray-500">Allowed because address remains same</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center shrink-0 font-bold text-white shadow-lg shadow-rose-500/30">✗</div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-rose-500">Reassign Array</p>
                        <p className="text-sm text-gray-500">Blocked because it creates a new address</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <PlusCircle size={24} className="text-emerald-500" /> 🔹 2. Elements Can Be Changed
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">You can add, change, and delete elements in a <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">const</span> array.</p>
                <CodeBlock title="Modifying Const Array" code={`const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars); // ["Toyota", "Volvo", "BMW", "Audi"]`} />
                <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-xl font-mono text-xs text-green-400 border border-gray-800">
                  <CheckCircle size={14} /> Result: Array is successfully updated!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Browser Support & Reassignment ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
          <SectionHeader icon={TriangleAlert} title="3. Reassignment NOT Allowed" color="text-rose-500" subtitle="This is where const enforces its rule." />
          <p className="text-gray-600 dark:text-gray-300 mb-6">If you try to assign a completely new array to the variable, JavaScript will throw a <strong>TypeError</strong>.</p>
          <CodeBlock title="TypeError Example" code={`const cars = ["Saab", "Volvo", "BMW"];

try {
    cars = ["Toyota", "Volvo", "Audi"]; // ERROR!
} catch (err) {
    console.log(err.message); 
    // Assignment to constant variable.
}`} />
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
             <p className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-2">
               <TriangleAlert size={18} /> TypeError: Assignment to constant variable.
             </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-gray-900 dark:from-black dark:to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Monitor size={120} className="text-amber-500" />
          </div>
          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
             <RefreshCw size={32} className="text-amber-500" /> 🔹 4. Browser Support
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The <span className="text-amber-400 font-bold">const</span> keyword was introduced in <strong>ES6 (2015)</strong>. It is fully supported in all modern browsers.
          </p>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {[
              { browser: 'Chrome', ver: '49+' },
              { browser: 'Edge', ver: '12+' },
              { browser: 'Firefox', ver: '36+' },
              { browser: 'Safari', ver: '10+' }
            ].map((b, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                <span className="text-gray-300 font-bold">{b.browser}</span>
                <span className="text-amber-500 font-mono text-xs">{b.ver}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Block Scope ── */}
      <section className="max-w-6xl mx-auto mb-20 bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
        <SectionHeader icon={Layers} title="5. Block Scope (ES6)" subtitle="Arrays declared with const have Block Scope." color="text-orange-500" />
        
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              An array declared in a block is NOT the same as an array declared outside the block.
            </p>
            <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-800/50">
               <h4 className="font-bold text-orange-900 dark:text-orange-200 mb-2">Remember:</h4>
               <p className="text-sm text-orange-700 dark:text-orange-300 italic">
                 Block scope is defined by Curly Braces <span className="font-bold"><code>{`{ }`}</code></span>.
               </p>
            </div>
          </div>
          <CodeBlock title="Block Scope Example" code={`const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"

{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}

// Here cars[0] is "Saab"`} />
        </div>
      </section>

      {/* ── Section 4: Best Practices & Methods ── */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Code2 size={28} className="text-amber-500" /> 🔹 6. Best Practice: Always Const?
            </h3>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                It is common practice for developers to use <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">const</span> for arrays unless they clearly intend to reassign them.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { text: 'Prevents accidental reassignment', icon: ShieldCheck },
                  { text: 'Communicates intent to keep reference', icon: Terminal },
                  { text: 'Enables engine optimizations', icon: Cpu }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <div className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg">
                      <item.icon size={18} />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <PlusCircle size={28} className="text-emerald-500" /> 🔹 7. Allowed Operations🎯
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                <span>Value Modification</span>
                <Edit3 size={18} />
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                <span>Pushing Elements</span>
                <PlusCircle size={18} />
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                <span>Popping Elements</span>
                <Trash2 size={18} />
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-100 dark:border-emerald-800/50">
                <span>Sorting / Reversing</span>
                <RefreshCw size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Summarizing Comparisons ── */}
      <section className="max-w-6xl mx-auto mb-20 grid lg:grid-cols-3 gap-8">
        {[
          { 
            title: 'Initial Assignment', 
            desc: 'Must be initialized when declared.', 
            icon: Edit3,
            color: 'bg-indigo-500'
          },
          { 
            title: 'Reassignment', 
            desc: 'Illegal. Will throw Type Error.', 
            icon: TriangleAlert,
            color: 'bg-rose-500'
          },
          { 
            title: 'Redeclaration', 
            desc: 'Illegal in the same scope.', 
            icon: Layers,
            color: 'bg-amber-500'
          }
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-[1.02] transition-transform">
            <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${card.color.split('-')[1]}-500/30`}>
              <card.icon size={24} />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{card.title}</h3>
            <p className="text-gray-500 font-medium leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* ── Footer Quote ── */}
      <footer className="max-w-4xl mx-auto text-center py-20">
         <div className="h-px w-24 bg-amber-500/30 mx-auto mb-10"></div>
         <p className="text-2xl font-black text-gray-400 dark:text-gray-600 mb-4 font-mono uppercase tracking-[0.2em]">
           Reference Matters.
         </p>
         <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
           Understanding the difference between a constant variable and a constant value is key to mastering modern JavaScript.
         </p>
      </footer>

    </div>
  );
};

export default JsArrayConst;
  