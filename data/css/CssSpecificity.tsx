import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Medal, Target, Calculator, AlertTriangle
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|body|html|div|p|h1|!important)$/)) {
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

const LessonPropertyCard = ({ title, icon: Icon, color, description, score, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mr-4`}>
              <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        {score && <span className="px-4 py-2 text-sm font-bold text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900/50 rounded-full">{score}</span>}
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {children}
    </div>
  );
// --- End Reusable Components ---

const CssSpecificity = () => {
  const specificityHierarchy = [
    { title: 'Inline Styles', score: 'Score: 1,0,0,0', description: 'Styles applied directly to an element via the `style` attribute. This is the highest level of specificity and overrides almost everything.', code: `<p style="color: red;">...</p>` },
    { title: 'ID Selectors', score: 'Score: 0,1,0,0', description: 'Selectors that target an element by its unique ID (e.g., `#main-header`). They are very powerful and should be used sparingly.', code: `#main-header {\n  color: blue;\n}` },
    { title: 'Classes, Attributes, and Pseudo-classes', score: 'Score: 0,0,1,0', description: 'This is the most common and recommended level for styling. It includes class names (`.my-class`), attribute selectors (`[type="button"]`), and pseudo-classes (`:hover`).', code: `.button:hover {\n  background-color: green;\n}` },
    { title: 'Elements and Pseudo-elements', score: 'Score: 0,0,0,1', description: 'The lowest level of specificity. This targets element types (`p`, `div`) and pseudo-elements (`::before`, `::after`).', code: `p::first-line {\n  font-weight: bold;\n}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-50 dark:from-slate-900 dark:via-red-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl mb-8">
            <Medal className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 mb-6 leading-tight">
            CSS Specificity
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The set of rules the browser uses to decide which style declaration "wins" and gets applied to an element.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Specificity Hierarchy
            </h2>
          </div>
          <div className="space-y-12">
            {specificityHierarchy.map((item, index) => (
              <LessonPropertyCard
                key={index}
                title={item.title}
                icon={Medal}
                color="text-red-500"
                description={item.description}
                score={item.score}
              >
                <InteractiveCodeBlock 
                  language={item.title === 'Inline Styles' ? 'html' : 'css'}
                  title="Example"
                  code={item.code}
                />
              </LessonPropertyCard>
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Calculator className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Specificity Calculator Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <InteractiveCodeBlock title="HTML" code={`<div class="container">\n  <p id="title" class="highlight">Specificity showdown!</p>\n</div>`} />
                    <div className="mt-6 space-y-4">
                        <p className="text-lg">Below are three competing CSS rules. The one with the highest score wins.</p>
                        
                        <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/30">
                            <code className="font-mono text-red-700 dark:text-red-300">#title</code>
                            <p className="font-bold text-red-800 dark:text-red-200">Score: (0, 1, 0, 0) - ID</p>
                        </div>
                        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30">
                            <code className="font-mono text-blue-700 dark:text-blue-300">div .highlight</code>
                            <p className="font-bold text-blue-800 dark:text-blue-200">Score: (0, 0, 1, 1) - Class + Element</p>
                        </div>
                        <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/30">
                            <code className="font-mono text-green-700 dark:text-green-300">p</code>
                            <p className="font-bold text-green-800 dark:text-green-200">Score: (0, 0, 0, 1) - Element</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Visual Output</h3>
                    <div className="text-center">
                        <p style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '4px solid',
                            color: '#be123c', /* Red-800 */
                            borderColor: '#be123c',
                            backgroundColor: '#ffe4e6',
                        }}>
                            Specificity showdown!
                        </p>
                    </div>
                    <p className="mt-4 text-center font-semibold text-slate-700 dark:text-slate-300">The ID selector <code className="bg-red-200 dark:bg-red-800/50 text-red-800 dark:text-red-200 p-1 rounded">#title</code> has the highest specificity, so its styles are applied.</p>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <AlertTriangle className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Overriding Rules
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="The !important Rule"
              icon={AlertTriangle}
              color="text-yellow-500"
              description="The `!important` declaration will override ANY other declaration. It breaks the natural cascade and specificity rules, making debugging very difficult. It should be avoided whenever possible, especially in large stylesheets."
            >
              <InteractiveCodeBlock 
                language="css"
                title="Example"
                code={`p { \n  color: blue !important; /* This will win, even against an ID */ \n}\n\n#my-paragraph { \n  color: red; \n}`}
              />
            </LessonPropertyCard>
            <LessonPropertyCard
              title="Universal Selector (*)"
              icon={Target}
              color="text-slate-500"
              description="The universal selector `*` and combinators like `+`, `>`, `~` have no specificity value themselves (a score of 0,0,0,0). They don't increase a selector's score but can be part of a larger, more specific selector."
            >
                <InteractiveCodeBlock language="css" title="Example" code={`* {\n  box-sizing: border-box; /* Score: 0,0,0,0 */\n}\n\ndiv > p {\n /* Score is based on 'div' and 'p' only (0,0,0,2) */\n}`} />
            </LessonPropertyCard>
          </div>
        </section>


        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Specificity Understood!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand the fundamental rules that govern CSS, allowing you to write more predictable and maintainable styles.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssSpecificity;
