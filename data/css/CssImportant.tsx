import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  AlertTriangle, ShieldAlert, ShieldCheck, TestTube
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

const LessonPropertyCard = ({ title, icon: Icon, color, description, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 text-${color}-500`} />
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

const CssImportant = () => {
  const [useImportant, setUseImportant] = useState(false);

  const finalColor = useImportant ? '#059669' : '#DC2626'; // Green if important, otherwise Red
  const winningSelector = useImportant ? '.highlight' : '#title';
  const winningColorName = useImportant ? 'Green' : 'Red';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-50 dark:from-slate-900 dark:via-yellow-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-red-500 shadow-2xl mb-8">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 mb-6 leading-tight">
            CSS !important
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The ultimate override. A powerful tool that breaks the rules of specificity and the cascade. Use with caution.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: What It Is and How It Works
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <LessonPropertyCard
                title="The Ultimate Override"
                icon={AlertTriangle}
                color="yellow"
                description="When `!important` is added to a style declaration, that declaration takes precedence over any other conflicting declaration, regardless of its specificity. It sits above inline styles, ID selectors, and everything else in the hierarchy."
            >
              <InteractiveCodeBlock 
                language="css"
                title="Syntax Example"
                code={`p {\n  color: blue !important; /* This will override all other color rules on <p> tags */\n}\n\n#my-special-paragraph {\n  color: red; /* This will be ignored */\n}`}
              />
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
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <InteractiveCodeBlock title="HTML" code={`<p id="title" class="highlight">The rule with !important wins.</p>`} />
                    <div className="mt-6 space-y-4">
                        <p className="text-lg">An ID selector has high specificity. Watch what happens when `!important` is used on a less specific class selector.</p>
                        
                        {/* Competing Rules */}
                        <InteractiveCodeBlock title="CSS Rules" code={`/* High specificity, but will be overridden */\n#title {\n  color: #DC2626; /* Red */\n}\n\n/* Low specificity, but will win if !important is active */\n.highlight {\n  color: #059669 ${useImportant ? '!important' : ''}; /* Green */\n}`} />
                        
                        <div className="flex items-center justify-center mt-6 p-4 border rounded-lg">
                            <label className="flex items-center cursor-pointer">
                                <span className="mr-3 font-semibold text-lg">Use `!important` on the green rule:</span>
                                <div className="relative">
                                    <input type="checkbox" checked={useImportant} onChange={() => setUseImportant(!useImportant)} className="sr-only" />
                                    <div className={`block w-14 h-8 rounded-full ${useImportant ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${useImportant ? 'transform translate-x-6' : ''}`}></div>
                                </div>
                            </label>
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
                            transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
                            border: `4px solid ${finalColor}`,
                            color: finalColor,
                            backgroundColor: useImportant ? 'rgba(5, 150, 105, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                        }}>
                            The rule with !important wins.
                        </p>
                    </div>
                    <p className="mt-4 text-center font-semibold text-slate-700 dark:text-slate-300">
                      The winning selector is <code className={`p-1 rounded font-mono ${useImportant ? 'bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-200' : 'bg-red-200 dark:bg-red-800/50 text-red-800 dark:text-red-200'}`}>{winningSelector}</code>, making the text **{winningColorName}**.
                    </p>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: When to Use It (And Why to Avoid It)
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <LessonPropertyCard
              title="Acceptable Use Cases"
              icon={ShieldCheck}
              color="green"
              description="Use `!important` as a last resort. It's sometimes necessary for:"
            >
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  <li>Overriding styles from external libraries or frameworks (e.g., Bootstrap, WordPress themes) that you cannot edit directly.</li>
                  <li>Helper/utility classes that must always win, such as <code className="p-1 font-mono text-sm bg-slate-200 dark:bg-slate-700 rounded">.hidden {'{'} display: none !important; {'}'}</code>.</li>
                  <li>Quick, temporary debugging to test if a style is applying.</li>
              </ul>
            </LessonPropertyCard>

             <LessonPropertyCard
              title="Why You Should Avoid It"
              icon={ShieldAlert}
              color="red"
              description="In your own code, `!important` is often a sign of poorly structured CSS. It leads to:"
            >
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                  <li>**Specificity Wars:** When one `!important` is used, the only way to override it is with another `!important`, leading to a messy and unmaintainable stylesheet.</li>
                  <li>**Debugging Nightmares:** It makes it extremely difficult to trace where a style is coming from because it breaks the natural rules of the cascade.</li>
                  <li>**Poor Practice:** Relying on `!important` prevents you from learning how to write better, more specific selectors to solve problems correctly.</li>
              </ul>
            </LessonPropertyCard>
          </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 to-red-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Handle with Care
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand the power and danger of `!important`. Always try to solve styling conflicts with better specificity first.
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

export default CssImportant;

