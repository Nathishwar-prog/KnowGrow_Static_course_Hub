import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Navigation, PanelLeft, Rows, MoveHorizontal
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title, style = {} }) => (
  <div className="relative group" style={style}>
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // HTML Tags
                }
                 if (part.match(/^(class|href|id)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // HTML Attributes
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // HTML Attribute Values
                }
                if (part.match(/^(nav|\.[\w-]+|ul|li|a)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // CSS Selectors
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

const LessonExampleCard = ({ title, icon: Icon, color, description, htmlCode, cssCode, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-green-500/20 to-green-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {htmlCode && <InteractiveCodeBlock code={htmlCode} title="HTML Structure" language="html" />}
        {cssCode && <InteractiveCodeBlock code={cssCode} title="CSS Styling" language="css" />}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Visual Example:</h4>
        <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
            {children}
        </div>
      </div>
    </div>
  );
// --- End Reusable Components ---

const CssNavigationBars = () => {

  const navExamples = [
        {
            id: 'vertical-nav',
            title: 'Vertical Navigation Bar',
            icon: Rows,
            color: 'text-blue-600',
            description: 'The standard approach for side menus. This is a block-level list where each link takes up the full width of the container.',
            htmlCode: `<!-- HTML for Vertical Nav -->\n<nav class="vertical-nav">\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Services</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>`,
            cssCode: `/* Basic Reset & Sizing */\n.vertical-nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: #333;\n  background-color: #f1f1f1;\n  border-bottom: 1px solid #ddd;\n}\n\n.vertical-nav a:hover {\n  background-color: #555;\n  color: white;\n}`,
            visual: (
                <nav className="w-full max-w-[200px] font-sans">
                  <ul className="list-none m-0 p-0 w-full">
                    <li><a href="#" className="block py-3 px-4 no-underline text-slate-800 bg-slate-200 border-b border-slate-300 transition-colors hover:bg-slate-600 hover:text-white">Home</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-slate-800 bg-slate-200 border-b border-slate-300 transition-colors hover:bg-slate-600 hover:text-white">About</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-slate-800 bg-slate-200 border-b border-slate-300 transition-colors hover:bg-slate-600 hover:text-white">Services</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-slate-800 bg-slate-200 transition-colors hover:bg-slate-600 hover:text-white">Contact</a></li>
                  </ul>
                </nav>
            )
        },
        {
            id: 'horizontal-nav',
            title: 'Horizontal Nav (Modern Flexbox)',
            icon: MoveHorizontal,
            color: 'text-green-600',
            description: 'The modern and most reliable way to create horizontal menus. Flexbox provides powerful alignment capabilities with minimal code.',
            htmlCode: `<!-- Same HTML Structure! -->\n<nav class="horizontal-nav">\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Services</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>`,
            cssCode: `.horizontal-nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex; /* Magic! */\n  background-color: #333;\n}\n\n.horizontal-nav a {\n  display: block;\n  padding: 14px 16px;\n  text-decoration: none;\n  color: white;\n}\n\n.horizontal-nav a:hover {\n  background-color: #111;\n}`,
            visual: (
                <nav className="w-full font-sans">
                  <ul className="list-none m-0 p-0 flex bg-slate-800 rounded-lg">
                    <li><a href="#" className="block py-3 px-4 no-underline text-white transition-colors hover:bg-slate-900">Home</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-white transition-colors hover:bg-slate-900">About</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-white transition-colors hover:bg-slate-900">Services</a></li>
                    <li><a href="#" className="block py-3 px-4 no-underline text-white transition-colors hover:bg-slate-900">Contact</a></li>
                  </ul>
                </nav>
            )
        },
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-indigo-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-2xl mb-8">
            <Navigation className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 mb-6 leading-tight">
            CSS Navigation Bars
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Building the most essential component of website usability: clear, stylish, and responsive navigation.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Navigation Patterns
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {navExamples.map((item) => (
              <LessonExampleCard key={item.id} {...item}>
                {item.visual}
              </LessonExampleCard>
            ))}
          </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
              <PanelLeft className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase
              </h2>
            </div>
            <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example A: Minimal Top Bar with Active State</h3>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
                      <nav className="font-sans">
                         <ul className="list-none m-0 p-0 flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg">
                            <li><a href="#" className="block py-3 px-5 no-underline text-white bg-indigo-600 rounded-lg font-semibold">Home</a></li>
                            <li><a href="#" className="block py-3 px-5 no-underline text-slate-600 dark:text-slate-300 font-semibold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Features</a></li>
                            <li><a href="#" className="block py-3 px-5 no-underline text-slate-600 dark:text-slate-300 font-semibold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a></li>
                            <li className="ml-auto"><a href="#" className="block py-2 px-4 no-underline text-indigo-600 dark:text-indigo-400 font-bold border-2 border-indigo-600 rounded-lg transition-all hover:bg-indigo-600 hover:text-white">Sign Up</a></li>
                         </ul>
                      </nav>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example B: Side Navigation with Icons</h3>
                   <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg">
                      <nav className="font-sans w-full max-w-[240px]">
                         <ul className="list-none m-0 p-0 w-full space-y-2">
                            <li><a href="#" className="flex items-center py-3 px-4 no-underline text-white bg-indigo-600 rounded-lg font-semibold"><Rows className="w-5 h-5 mr-3"/>Dashboard</a></li>
                            <li><a href="#" className="flex items-center py-3 px-4 no-underline text-slate-700 dark:text-slate-200 rounded-lg font-semibold transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"><Navigation className="w-5 h-5 mr-3"/>Analytics</a></li>
                            <li><a href="#" className="flex items-center py-3 px-4 no-underline text-slate-700 dark:text-slate-200 rounded-lg font-semibold transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"><PanelLeft className="w-5 h-5 mr-3"/>Settings</a></li>
                         </ul>
                      </nav>
                  </div>
                </div>

            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Navigation Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the fundamental skills to build clear, functional, and stylish navigation, the cornerstone of any great website.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssNavigationBars;
