import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  ListOrdered, RotateCcw, PlusCircle, FileText
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
                 if (part.match(/^(class|href|id|src|alt|for|type|name|placeholder|rows)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|body|h1|h2|::before|::after)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mr-4`}>
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

const CssCounters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50 dark:from-slate-900 dark:via-cyan-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-600 shadow-2xl mb-8">
            <ListOrdered className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 mb-6 leading-tight">
            CSS Counters
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Automatically generate and style dynamic numbering for your content without JavaScript.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Counter Properties
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="counter-reset"
              icon={RotateCcw}
              color="text-red-500"
              description="This property creates or re-initializes a counter. It must be applied to a parent element. You give the counter a name and can optionally set a starting number (defaults to 0)."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Creates a counter named 'section' starting at 0 */\nbody {\n  counter-reset: section;\n}\n\n/* Creates 'subsection' and starts it at 1 */\n.container {\n  counter-reset: subsection 1;\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="counter-increment"
              icon={PlusCircle}
              color="text-green-500"
              description="This property increases a counter's value. It's applied to the element you want to count (e.g., headings, list items). By default, it increments by 1 each time the element appears."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Increments 'section' counter by 1 for each h1 */\nh1 {\n  counter-increment: section;\n}\n\n/* Increments 'item' counter by 2 for each .list-item */\n.list-item {\n  counter-increment: item 2;\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="counter() and counters()"
              icon={FileText}
              color="text-blue-500"
              description="These functions are used with the `content` property (usually in a `::before` or `::after` pseudo-element) to display the counter's value. `counter()` is for simple counters, while `counters()` is for nested counters (e.g., '1.1', '1.2.3')."
            >
                <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Displays 'Chapter 1:', 'Chapter 2:' etc. */\nh1::before {\n  content: "Chapter " counter(section) ": ";\n}\n\n/* Displays '1.1', '1.2' for nested items */\nli::before {\n  content: counters(item, ".") " ";\n}`}
              />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase - Numbered Headings
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                    <InteractiveCodeBlock title="HTML Structure" code={`<body>\n  <h1>First Main Topic</h1>\n  <h2>Sub-topic 1.1</h2>\n  <h2>Sub-topic 1.2</h2>\n\n  <h1>Second Main Topic</h1>\n  <h2>Sub-topic 2.1</h2>\n  <h2>Sub-topic 2.2</h2>\n</body>`}/>
                    <InteractiveCodeBlock title="Complete CSS" code={`body {\n  /* Create 'section' counter for h1s */\n  counter-reset: section;\n}\n\nh1 {\n  /* Every h1 resets the 'subsection' counter */\n  counter-reset: subsection;\n  /* Increment the main section counter */\n  counter-increment: section;\n}\n\nh1::before {\n  /* Display '1: ', '2: ' etc. */\n  content: counter(section) ": ";\n  color: #0891b2; /* Cyan-600 */\n}\n\nh2 {\n  /* Increment the subsection counter */\n  counter-increment: subsection;\n}\n\nh2::before {\n  /* Display '1.1 ', '1.2 ' etc. */\n  content: counter(section) "." counter(subsection) " ";\n  color: #64748b; /* Slate-500 */\n}\n`}/>
                </div>

                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <h3 className="text-xl font-bold text-center mb-6 text-slate-800 dark:text-slate-200">Live Demo</h3>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h1><span className="text-cyan-600 dark:text-cyan-400">1: </span>First Main Topic</h1>
                        <h2><span className="text-slate-500 dark:text-slate-400">1.1 </span>Sub-topic 1.1</h2>
                        <h2><span className="text-slate-500 dark:text-slate-400">1.2 </span>Sub-topic 1.2</h2>
                        
                        <h1 className="mt-8"><span className="text-cyan-600 dark:text-cyan-400">2: </span>Second Main Topic</h1>
                        <h2><span className="text-slate-500 dark:text-slate-400">2.1 </span>Sub-topic 2.1</h2>
                        <h2><span className="text-slate-500 dark:text-slate-400">2.2 </span>Sub-topic 2.2</h2>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Counters Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now create sophisticated, automatically numbered content for legal documents, tutorials, and outlines purely with CSS.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssCounters;
