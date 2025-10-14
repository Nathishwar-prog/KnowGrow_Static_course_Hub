import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Settings, Globe, Brush, Palette, TestTube
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
            <div key={i} className="hover:bg-slate-800/ ৫০ px-2 -mx-2 rounded transition-colors">
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span|:root|--[\w-]+|var)$/)) {
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

const CssVariables = () => {
  const [primaryColor, setPrimaryColor] = useState('#6366f1');
  const [secondaryColor, setSecondaryColor] = useState('#ec4899');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sandboxThemeStyle = {
    '--primary-color': primaryColor,
    '--secondary-color': secondaryColor,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-2xl mb-8">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 mb-6 leading-tight">
            CSS Variables
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Also known as Custom Properties, variables allow you to store values for reuse throughout your stylesheet, making your code more powerful and maintainable.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Concepts
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Declaring a Variable"
              icon={Code}
              color="text-purple-500"
              description="Variables are declared using a custom property name that begins with two dashes (`--`). They are most often defined within the `:root` pseudo-class, which makes them globally available throughout your document."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`:root {\n  --main-bg-color: #f3f4f6;\n  --primary-text-color: #111827;\n  --main-padding: 15px;\n}`} />
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="Using a Variable"
              icon={Brush}
              color="text-green-500"
              description="To use a variable, you call the `var()` function, passing the custom property name as the argument. The browser then replaces `var()` with the value of that property."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`body {\n  background-color: var(--main-bg-color);\n  color: var(--primary-text-color);\n}\n\n.container {\n  padding: var(--main-padding);\n}`} />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Scope: Global vs. Local"
              icon={Globe}
              color="text-blue-500"
              description="Variables defined in `:root` are global. You can also define variables within a specific selector to limit their scope. This allows you to override global variables for a specific component or section."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`/* Global variable */\n:root { --accent-color: blue; }\n\n/* Local override */\n.special-section {\n  --accent-color: red;\n}\n\nh1 {\n  color: var(--accent-color); /* Blue by default, red in .special-section */\n}`} />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <TestTube className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Theming Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div>
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-2">Primary Color</label>
                        <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="w-full h-12 p-1 border-2 rounded-lg" />
                    </div>
                    <div>
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-2">Secondary Color</label>
                        <input type="color" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)} className="w-full h-12 p-1 border-2 rounded-lg" />
                    </div>
                    <InteractiveCodeBlock title="Live CSS" code={`:root {\n  --primary-color: ${primaryColor};\n  --secondary-color: ${secondaryColor};\n}\n\nh1 {\n  color: var(--primary-color);\n}\n\nbutton {\n  background-color: var(--secondary-color);\n}`} />
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600" style={sandboxThemeStyle}>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-center" style={{ color: 'var(--primary-color)' }}>Themed Content</h3>
                        <p className="text-center text-slate-600 dark:text-slate-300">Change the colors to see all elements update at once!</p>
                        <div className="p-4 rounded-lg" style={{ border: '2px solid var(--primary-color)' }}>
                            <p style={{ color: 'var(--primary-color)' }}>This text uses the primary color.</p>
                        </div>
                        <button className="w-full py-3 px-4 text-white font-bold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--secondary-color)' }}>This button uses the secondary color</button>
                    </div>
                </div>
            </div>
        </section>

        <section>
          <div className="flex items-center mb-12">
            <Palette className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase - Light/Dark Mode
            </h2>
          </div>
           <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                <p className="mb-4 text-lg">One of the most powerful uses for CSS variables is creating a theme switcher. By defining color variables globally and then re-declaring them inside a class (e.g., `.dark-mode`), you can change the entire color scheme by toggling a single class on the <code>&lt;body&gt;</code> element.</p>
                 <div className="grid lg:grid-cols-2 gap-8">
                    <InteractiveCodeBlock title="CSS" code={`/* Light Mode (Default) */\n:root {\n  --bg-color: #ffffff;\n  --text-color: #111827;\n}\n\n/* Dark Mode Override */\n.dark-mode {\n  --bg-color: #1f2937;\n  --text-color: #f3f4f6;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}`} />
                    <div className="p-6 rounded-xl shadow-inner" style={{ background: isDarkMode ? '#1f2937' : '#ffffff', color: isDarkMode ? '#f3f4f6' : '#111827', border: '1px solid #ccc' }}>
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="font-bold text-lg">Live Demo</h4>
                           <button onClick={() => setIsDarkMode(!isDarkMode)} className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-200 dark:bg-slate-700">Toggle Theme</button>
                        </div>
                        <p>This is some text in a container.</p>
                        <p className="mt-2 text-sm opacity-70">Click the button to switch between light and dark themes instantly.</p>
                    </div>
                 </div>
            </div>
        </section>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Variables Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now write cleaner, more maintainable, and powerful CSS, and build advanced features like theme switching with ease.
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

export default CssVariables;

