import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Zap, Gauge, Recycle, FileImage, Sparkles, Feather
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
                 if (part.match(/^(class|href|id|src|alt|for|type|name|placeholder|rows|style|media|onload)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|body|html|div|p|h1|ul|li|\*|@font-face|::before|head|style|link)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mr-4`}>
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

const CssOptimization = () => {
  const [willChange, setWillChange] = useState(false);

  const sandboxStyles = `
    .animated-box {
      transition: transform 0.5s ease-in-out, opacity 0.5s;
    }
    .sandbox-container:hover .animated-box {
      transform: translateX(20px) rotate(180deg);
      opacity: 0.5;
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900">
      <style>{sandboxStyles}</style>
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-2xl mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 mb-6 leading-tight">
            CSS Optimization
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Techniques and best practices for writing faster, more efficient, and highly maintainable stylesheets.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Optimization Techniques
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Minification"
              icon={Gauge}
              color="text-green-500"
              description="Minification is the process of removing all unnecessary characters from code (like whitespace, new lines, and comments) without changing its functionality. This significantly reduces file size, leading to faster downloads and parsing."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InteractiveCodeBlock 
                  language="css"
                  title="Before (Readable)"
                  code={`/* Main button style */\n.btn-primary {\n  background-color: #007bff;\n  color: #ffffff;\n  padding: 10px 20px;\n}`}
                />
                 <InteractiveCodeBlock 
                  language="css"
                  title="After (Minified)"
                  code={`.btn-primary{background-color:#007bff;color:#fff;padding:10px 20px}`}
                />
              </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Efficient Selectors"
              icon={Feather}
              color="text-sky-500"
              description="Browsers read CSS selectors from right to left. This means overly complex or generic selectors (like `*` or `ul li a`) force the browser to check more elements than necessary. Simple, specific selectors (like `.main-nav-link`) are much faster."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <InteractiveCodeBlock language="css" title="Inefficient (Avoid)" code={`div ul li a { ... }`} />
                 <InteractiveCodeBlock language="css" title="Efficient (Prefer)" code={`.main-nav-link { ... }`} />
              </div>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Reduce Redundancy (DRY)"
              icon={Recycle}
              color="text-purple-500"
              description="DRY stands for 'Don't Repeat Yourself.' Instead of writing the same styles over and over, group common properties into reusable utility classes or use CSS Custom Properties (variables) to define values that are used throughout your site."
            >
                 <InteractiveCodeBlock language="css" title="Example" code={`:root {\n  --primary-color: #3b82f6;\n}\n\n.button {\n  background-color: var(--primary-color);\n}\n\n.alert {\n  border-color: var(--primary-color);\n}`} />
            </LessonPropertyCard>
             <LessonPropertyCard
              title="Image Sprites"
              icon={FileImage}
              color="text-orange-500"
              description="Combine multiple small images or icons into a single image file (a 'sprite sheet'). This reduces the number of HTTP requests the browser needs to make, which is one of the most effective ways to speed up page load times."
            >
                 <InteractiveCodeBlock language="css" title="Example" code={`.icon-home {\n  background: url('sprite.png') 0 0;\n}\n\n.icon-settings {\n  background: url('sprite.png') -50px 0;\n}`} />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox - The `will-change` Property
              </h2>
            </div>
            <div className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-4xl space-y-4">
              <p>
                The `will-change` property is a hint to the browser that an element's property is expected to change in the future. This allows the browser to perform optimizations ahead of time, potentially creating a new rendering layer for the element to make animations smoother. **Warning:** Overusing it can harm performance.
              </p>
              <p>
                To demonstrate this, we'll animate multiple elements at once to simulate a graphically intensive task. When you toggle `will-change` on, the browser may be able to prepare for the animation, resulting in a smoother transition (less "jank" or stutter). The difference may be subtle on powerful computers.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                     <InteractiveCodeBlock title="CSS" code={`.animated-box {\n  transition: transform 0.5s ease-in-out, opacity 0.5s;\n  ${willChange ? 'will-change: transform, opacity;' : '/* will-change is off */'}\n}\n\n/* Animate all boxes when hovering the container */\n.sandbox-container:hover .animated-box {\n  transform: translateX(20px) rotate(180deg);\n  opacity: 0.5;\n}`} />
                    <div className="flex items-center justify-center mt-6 p-4 border rounded-lg">
                        <label className="flex items-center cursor-pointer">
                            <span className="mr-3 font-semibold text-lg">Apply `will-change`:</span>
                            <div className="relative">
                                <input type="checkbox" checked={willChange} onChange={() => setWillChange(!willChange)} className="sr-only" />
                                <div className={`block w-14 h-8 rounded-full ${willChange ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${willChange ? 'transform translate-x-6' : ''}`}></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center cursor-pointer sandbox-container">
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="h-12 w-12 bg-blue-500 rounded-lg shadow-lg animated-box" 
                          style={{ willChange: willChange ? 'transform, opacity' : 'auto' }}
                        />
                      ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Sparkles className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Advanced Concepts
            </h2>
          </div>
           <div className="space-y-8">
             <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Critical CSS</h3>
                <p className="mb-4">For the fastest possible initial render, identify the minimum CSS required to style the 'above-the-fold' content (what the user sees without scrolling). Inline this 'critical CSS' in a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> of your HTML. The rest of the stylesheet can then be loaded asynchronously without blocking the page from appearing.</p>
                <InteractiveCodeBlock title="Example" language="html" code={`<head>\n  <style>\n    /* Critical CSS for header, nav, etc. */\n    .header { background: #fff; }\n  </style>\n  <link rel="stylesheet" href="full.css" media="print" onload="this.media='all'">\n</head>`} />
             </div>
             <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Font Loading Strategy</h3>
                <p className="mb-4">Web fonts can block page rendering while they download. Use the `font-display: swap;` descriptor in your `@font-face` rule. This tells the browser to immediately display text in a fallback font and then 'swap' in the web font once it has loaded, preventing a blank page.</p>
                <InteractiveCodeBlock title="Example" language="css" code={`@font-face {\n  font-family: 'MyWebFont';\n  src: url('myfont.woff2') format('woff2');\n  font-display: swap;\n}`} />
             </div>
          </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-sky-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Optimization Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have a powerful toolkit of techniques to make your websites faster, more responsive, and more professional.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssOptimization;

