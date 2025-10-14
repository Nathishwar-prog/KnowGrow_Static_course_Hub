import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Type, FileText, Download, Clock, Zap
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
                 if (part.match(/^(class|id|style|src|format)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span|@font-face|url)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center mr-4`}>
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

const CssWebFonts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 dark:from-slate-900 dark:via-teal-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl mb-8">
            <Type className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500 mb-6 leading-tight">
            CSS Web Fonts
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Break free from system defaults and bring custom typography to your websites using the `@font-face` rule.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The `@font-face` Rule
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Defining a Custom Font"
              icon={FileText}
              color="text-teal-500"
              description="The `@font-face` at-rule is how you tell the browser about a custom font you want to use. You give it a name (`font-family`) and point to the font file (`src`). The modern standard format is WOFF2 for its excellent compression."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`@font-face {\n  font-family: 'MyCustomFont'; /* The name you'll use in CSS */\n  src: url('/fonts/my-font.woff2') format('woff2');\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Defining Font Variations"
              icon={Type}
              color="text-sky-500"
              description="A single font family can have multiple weights and styles. You define each variation in a separate `@font-face` rule but use the same `font-family` name. The browser will then automatically select the correct file based on `font-weight` and `font-style` properties."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`/* Regular */\n@font-face {\n  font-family: 'MyCustomFont';\n  src: url('/fonts/my-font-regular.woff2') format('woff2');\n  font-weight: 400;\n  font-style: normal;\n}\n\n/* Bold */\n@font-face {\n  font-family: 'MyCustomFont';\n  src: url('/fonts/my-font-bold.woff2') format('woff2');\n  font-weight: 700;\n  font-style: normal;\n}`}
              />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase - Implementation
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-300">Once you've defined your font with `@font-face`, you use the `font-family` name just like any other font (e.g., Arial, Georgia). The browser handles the rest.</p>
                    <InteractiveCodeBlock title="CSS Usage" code={`h1 {\n  font-family: 'MyCustomFont', sans-serif;\n  font-weight: 700; /* Uses the bold font file */\n}\n\np {\n  font-family: 'MyCustomFont', sans-serif;\n  font-weight: 400; /* Uses the regular font file */\n}`}/>
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <h3 className="text-xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Visual Output</h3>
                    <div className="p-4 rounded-lg">
                        <p className="text-4xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 700 }}>This is a Bold Heading</p>
                        <p className="mt-4 text-lg" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>This is a paragraph with regular weight text. The browser automatically selects the correct font file based on the font-weight property specified in our CSS.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Performance & Font Loading
            </h2>
          </div>
          <div className="space-y-12">
             <LessonPropertyCard
                title="The `font-display` Property"
                icon={Clock}
                color="text-orange-500"
                description="Web fonts can block page rendering while they download, leaving users with a blank page. The `font-display: swap;` descriptor is the modern solution. It tells the browser to immediately render text with a fallback system font, and then 'swap' in the web font once it has finished downloading."
            >
                <InteractiveCodeBlock language="css" title="CSS Example" code={`@font-face {\n  font-family: 'MyCustomFont';\n  src: url('my-font.woff2') format('woff2');\n  font-display: swap; /* Crucial for performance! */\n}`}/>
                 <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Experience:</h4>
                   <div className="grid grid-cols-2 gap-4 text-center">
                       <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                           <p className="font-bold">Without `swap`</p>
                           <p className="text-sm text-slate-500">Text is invisible until font loads (Flash of Invisible Text).</p>
                       </div>
                       <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                           <p className="font-bold">With `swap`</p>
                           <p className="text-sm text-slate-500">Fallback text shows instantly, then swaps (Flash of Unstyled Text).</p>
                       </div>
                   </div>
                </div>
            </LessonPropertyCard>
            <LessonPropertyCard
                title="Preloading Critical Fonts"
                icon={Download}
                color="text-green-500"
                description="For fonts that are critical to your page's initial render (like a heading or body text), you can tell the browser to start downloading them as early as possible by adding a `<link rel='preload'>` tag to your HTML's `<head>`."
            >
                <InteractiveCodeBlock language="html" title="HTML Example" code={`<head>\n  <link rel="preload" href="/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>\n</head>`}/>
            </LessonPropertyCard>
          </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Web Fonts Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now implement custom typography to elevate your designs while maintaining excellent performance and user experience.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssWebFonts;
