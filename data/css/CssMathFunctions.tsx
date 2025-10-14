import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Calculator, FunctionSquare, Minimize, Maximize, Scaling
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg-text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                 if (part.match(/^(class|href|id|src|alt|for|type|name|placeholder|rows|style)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|body|html|div|p|h1|--[\w-]+|calc|min|max|clamp|var)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                return <span key={j} className="text-slate-300">{part}</span>;
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

const LessonPropertyCard = ({ title, icon: Icon, color, description, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {children}
    </div>
  );
// --- End Reusable Components ---

const CssMathFunctions = () => {
  const [clampMin, setClampMin] = useState(30);
  const [clampPref, setClampPref] = useState(5);
  const [clampMax, setClampMax] = useState(70);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl mb-8">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 mb-6 leading-tight">
            CSS Math Functions
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Perform calculations directly in your CSS to create dynamic, flexible, and responsive layouts.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Functions
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="calc()"
              icon={FunctionSquare}
              color="text-green-500"
              description="The most fundamental math function. It lets you perform calculations with addition (+), subtraction (-), multiplication (*), and division (/) using different units. This is incredibly useful for mixing relative and absolute units."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Set width to 100% of parent minus a fixed 50px */\n.element {\n  width: calc(100% - 50px);\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="min()"
              icon={Minimize}
              color="text-blue-500"
              description="Takes a comma-separated list of values and applies the smallest (most negative) one. It's great for setting a maximum size that shouldn't be exceeded, but allowing the element to be smaller if needed."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Width will be 50% of parent, but never larger than 500px */\n.element {\n  width: min(50%, 500px);\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="max()"
              icon={Maximize}
              color="text-red-500"
              description="Takes a comma-separated list of values and applies the largest (most positive) one. This is ideal for ensuring an element has a minimum size, but can grow larger if needed."
            >
                <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Width will be 50% of parent, but never smaller than 300px */\n.element {\n  width: max(50%, 300px);\n}`}
              />
            </LessonPropertyCard>

             <LessonPropertyCard
              title="clamp()"
              icon={Scaling}
              color="text-orange-500"
              description="The most powerful of the four. It 'clamps' a value between an upper and lower bound. It takes three arguments: a minimum allowed value, a preferred value, and a maximum allowed value. The browser will try to use the preferred value, but will never go below the minimum or above the maximum."
            >
                <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Font size will try to be 5vw, but never smaller than 1rem or larger than 3rem */\nh1 {\n  font-size: clamp(1rem, 5vw, 3rem);\n}`}
              />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive `clamp()` Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Minimum Width (px): <span className="font-bold text-red-600">{clampMin}px</span></label>
                        <input type="range" min="10" max="100" value={clampMin} onChange={(e) => setClampMin(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                     <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Preferred Width (vw): <span className="font-bold text-purple-600">{clampPref}vw</span></label>
                        <input type="range" min="1" max="10" value={clampPref} onChange={(e) => setClampPref(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Maximum Width (px): <span className="font-bold text-blue-600">{clampMax}px</span></label>
                        <input type="range" min="120" max="300" value={clampMax} onChange={(e) => setClampMax(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                     <InteractiveCodeBlock title="Live CSS" code={`.fluid-box {\n  width: clamp(${clampMin}px, ${clampPref}vw, ${clampMax}px);\n}`} />
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Visual Output</h3>
                    <p className="text-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">Resize the container (or your browser window) to see the effect.</p>
                    <div className="w-full resize-x overflow-auto p-4 border-2 border-dashed border-slate-400 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800">
                        <div className="h-24 bg-purple-500 rounded-lg transition-all duration-200 ease-in-out" style={{ width: `clamp(${clampMin}px, ${clampPref}vw, ${clampMax}px)`}}>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Math Functions Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now write CSS that intelligently adapts to different viewport sizes, creating truly fluid and powerful user interfaces.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssMathFunctions;

