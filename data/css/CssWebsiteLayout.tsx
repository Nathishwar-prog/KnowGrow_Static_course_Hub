import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  LayoutTemplate, LayoutGrid, Rows, Columns, Server
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|body|html|div|p|h1|header|nav|main|aside|footer|@media)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-sky-600/20 flex items-center justify-center mr-4`}>
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

const CssWebsiteLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 dark:from-slate-900 dark:via-sky-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-2xl mb-8">
            <LayoutTemplate className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-500 mb-6 leading-tight">
            CSS Website Layout
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Learn to build structured, responsive, and modern website layouts using Flexbox and Grid.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Modern Layout Systems
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <LessonPropertyCard
              title="Flexbox (Flexible Box Layout)"
              icon={Columns}
              color="text-green-500"
              description="Flexbox is a one-dimensional layout model. It excels at distributing space along a single axis (either a row or a column). It's perfect for components like navigation bars, form controls, and aligning items within a container."
            >
              <InteractiveCodeBlock 
                language="css"
                title="Common Use Case: Navigation"
                code={`.nav-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Grid (Grid Layout)"
              icon={LayoutGrid}
              color="text-blue-500"
              description="Grid is a two-dimensional layout model, designed for both rows and columns simultaneously. It is the most powerful and flexible layout system in CSS, ideal for creating complex page structures, galleries, and aligning items in a grid."
            >
              <InteractiveCodeBlock 
                language="css"
                title="Common Use Case: Page Structure"
                code={`.page-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 20px;\n}`}
              />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase - Building a "Holy Grail" Layout
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                
                <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-300">This classic layout consists of a header, footer, main content area, and a sidebar. We can achieve this efficiently using CSS Grid and `grid-template-areas`.</p>
                    <InteractiveCodeBlock title="HTML Structure" code={`<div class="holy-grail-layout">\n  <header>Header</header>\n  <nav>Navigation</nav>\n  <main>Main Content</main>\n  <aside>Sidebar</aside>\n  <footer>Footer</footer>\n</div>`}/>
                    <InteractiveCodeBlock title="Complete CSS with Grid" code={`.holy-grail-layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "nav    main   sidebar"\n    "footer footer footer";\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 1rem;\n  min-height: 400px;\n}\n\nheader { grid-area: header; }\nnav { grid-area: nav; }\nmain { grid-area: main; }\naside { grid-area: sidebar; }\nfooter { grid-area: footer; }\n\n/* Basic styling for visualization */\n.holy-grail-layout > * {\n  background: #e0f2fe; /* Sky-100 */\n  border: 2px dashed #38bdf8; /* Sky-400 */\n  padding: 1rem;\n  border-radius: 0.5rem;\n  display: grid;\n  place-content: center;\n  font-weight: bold;\n}`}/>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <h3 className="text-xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Live Demo</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateAreas: '"header header header" "nav main sidebar" "footer footer footer"',
                        gridTemplateColumns: '1fr 2fr 1fr',
                        gridTemplateRows: 'auto 1fr auto',
                        gap: '1rem',
                        minHeight: '450px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        <div style={{ gridArea: 'header', background: 'blue', border: '2px dashed #38bdf8', borderRadius: '0.5rem', padding: '1rem', display: 'grid', placeContent: 'center'}}>Header</div>
                        <div style={{ gridArea: 'nav', background: 'green', border: '2px dashed #38bdf8', borderRadius: '0.5rem', padding: '1rem', display: 'grid', placeContent: 'center' }}>Navigation</div>
                        <div style={{ gridArea: 'main', background: 'black', border: '2px dashed #38bdf8', borderRadius: '0.5rem', padding: '1rem', display: 'grid', placeContent: 'center' }}>Main Content</div>
                        <div style={{ gridArea: 'sidebar', background: 'green', border: '2px dashed #38bdf8', borderRadius: '0.5rem', padding: '1rem', display: 'grid', placeContent: 'center' }}>Sidebar</div>
                        <div style={{ gridArea: 'footer', background: 'blue', border: '2px dashed #38bdf8', borderRadius: '0.5rem', padding: '1rem', display: 'grid', placeContent: 'center' }}>Footer</div>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Layouts Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the fundamental knowledge to build any modern website layout using the powerful combination of CSS Flexbox and Grid.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-sky-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssWebsiteLayout;
