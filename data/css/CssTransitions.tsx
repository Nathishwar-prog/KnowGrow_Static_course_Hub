import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Zap, Clock, FastForward, ChevronsRight, TestTube
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
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
                 if (part.match(/^(class|id|style)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span|button|:hover)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4`}>
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

const CssTransitions = () => {
  const [duration, setDuration] = useState(0.5);
  const [delay, setDelay] = useState(0);
  const [timingFunction, setTimingFunction] = useState('ease');

  const transitionStyle = {
      transitionProperty: 'transform, background-color',
      transitionDuration: `${duration}s`,
      transitionDelay: `${delay}s`,
      transitionTimingFunction: timingFunction,
  };

  const timingFunctions = ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 dark:from-slate-900 dark:via-orange-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 mb-6 leading-tight">
            CSS Transitions
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Create smooth, gradual animations when the value of a CSS property changes.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Transition Properties
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="transition-property"
              icon={ChevronsRight}
              color="text-orange-500"
              description="Specifies the name of the CSS property to which the transition effect should be applied (e.g., `background-color`, `transform`, or `all`)."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.box {\n  transition-property: opacity;\n}`} />
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="transition-duration"
              icon={Clock}
              color="text-green-500"
              description="Defines how long the transition animation should take to complete. It's specified in seconds (s) or milliseconds (ms)."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.box {\n  transition-duration: 0.5s; /* or 500ms */\n}`} />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="transition-timing-function"
              icon={FastForward}
              color="text-blue-500"
              description="Controls the speed curve of the transition. Values like `ease` (default), `linear`, `ease-in`, `ease-out`, and `cubic-bezier()` allow you to create natural-looking acceleration and deceleration."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.box {\n  transition-timing-function: ease-in-out;\n}`} />
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="transition-delay"
              icon={Clock}
              color="text-red-500"
              description="Specifies a delay before the transition will start. This is useful for creating sequenced animations."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.box {\n  transition-delay: 1s;\n}`} />
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="transition (Shorthand)"
              icon={Code}
              color="text-indigo-500"
              description="The most common way to write transitions. It combines property, duration, timing function, and delay into a single line. The order is important, with duration always being the first time value."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.box {\n  transition: background-color 0.5s ease-in-out 0.1s;\n}`} />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <TestTube className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold block mb-1">Duration: <span className="font-bold text-orange-500">{duration.toFixed(1)}s</span></label>
                        <input type="range" min="0" max="2" step="0.1" value={duration} onChange={e => setDuration(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Delay: <span className="font-bold text-orange-500">{delay.toFixed(1)}s</span></label>
                        <input type="range" min="0" max="2" step="0.1" value={delay} onChange={e => setDelay(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Timing Function:</label>
                        <select value={timingFunction} onChange={e => setTimingFunction(e.target.value)} className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700">
                          {timingFunctions.map(func => <option key={func} value={func}>{func}</option>)}
                        </select>
                    </div>
                    <InteractiveCodeBlock title="Live CSS" code={`.box:hover {\n  transition: all ${duration.toFixed(1)}s ${timingFunction} ${delay.toFixed(1)}s;\n  transform: translateX(100px) rotate(45deg);\n  background-color: #f97316;\n}`} />
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center">
                    <div className="w-24 h-24 bg-orange-500 rounded-lg cursor-pointer hover:bg-red-500 hover:scale-125" style={transitionStyle}></div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Transitions Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now add subtle, professional animations to user interactions, creating a more engaging and responsive user experience.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssTransitions;
