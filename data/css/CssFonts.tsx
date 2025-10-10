import React from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Layers, Lightbulb, Type, Ruler, Bold, Link, Zap, ListOrdered, Monitor, Globe
} from 'lucide-react';

// --- Reusable UI Components ---

/**
 * A syntax-highlighted code block for displaying CSS.
 */
const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(p|h1|body|@font-face|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(font-family|font-size|font-weight|font-style|src|url|format|unicode-range)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|normal|italic|bold|400|700|\d+px|\d+em|\d+rem|serif|sans-serif|monospace)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
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

/**
 * A visually distinct card for explaining individual font properties.
 */
const FontPropertyCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
  const Icon = icon;
  return (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-purple-500/20 to-purple-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? 
          <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
          <span key={i}>{part}</span>
        )}
      </p>

      <div className="mt-6 space-y-4">
        {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            <strong className="mr-1">Key Tip:</strong>{keyBenefit}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
function CssFonts() {

  const familyProperties = [
    {
      title: 'font-family',
      icon: ListOrdered,
      color: 'text-red-600',
      description: 'Sets the typeface for the element. Always provide a **fallback list** ending in a generic family (serif, sans-serif, monospace).',
      syntaxCode: `body {\n  font-family: "Helvetica Neue", Arial, sans-serif;\n}`,
      keyBenefit: 'Using generic families ensures the user’s browser displays *some* text, preventing layout breakage if a specific font fails to load.',
    },
    {
      title: 'Web Safe Fonts',
      icon: Monitor,
      color: 'text-green-600',
      description: 'These fonts (like **Arial, Times New Roman, Courier New**) are highly likely to be installed on any device, making them reliable fallbacks.',
      syntaxCode: `h1 {\n  font-family: Georgia, serif;\n}`,
      keyBenefit: 'Use these names without quotes unless the name contains spaces (e.g., "Courier New").',
    },
    {
      title: 'Generic Families',
      icon: Layers,
      color: 'text-blue-600',
      description: 'Fallback terms like **serif** (has decorative strokes), **sans-serif** (clean, modern), and **monospace** (fixed-width).',
      syntaxCode: `p {\n  font-family: Tahoma, Verdana, sans-serif;\n}`,
      keyBenefit: 'Always include a generic family as the very last resort in your font stack.',
    },
  ];

  const styleProperties = [
    {
      title: 'font-size',
      icon: Ruler,
      color: 'text-teal-600',
      description: 'Sets the height of the characters. **`em` and `rem`** are preferred over `px` for better accessibility and responsiveness.',
      syntaxCode: `p {\n  font-size: 1.125rem; /* 18px / 16 = 1.125rem */\n}`,
      keyBenefit: 'Use **rem** (relative to the root element) for sizing text and **em** (relative to the parent element) for padding/margins.',
    },
    {
      title: 'font-weight',
      icon: Bold,
      color: 'text-orange-600',
      description: 'Defines the **thickness** or boldness of the glyphs. Accepts keywords (`normal`, `bold`) or numeric values (`100` to `900`).',
      syntaxCode: `h2 {\n  font-weight: 700; /* same as bold */\n}`,
      keyBenefit: 'Ensure your chosen font family actually includes the specific weights (e.g., 300, 700) you are trying to use.',
    },
    {
      title: 'font-style',
      icon: Zap,
      color: 'text-purple-600',
      description: 'Sets the stylistic variant, most commonly to **`italic`** or back to `normal`.',
      syntaxCode: `em {\n  font-style: italic;\n}`,
      keyBenefit: 'Use this only when you explicitly need a slanted appearance, typically for emphasis.',
    },
  ];

  const webFontSection = {
    title: '@font-face Rule',
    icon: Link,
    color: 'text-indigo-600',
    description: 'The **`@font-face`** rule is how you load and define custom font files (like WOFF, TTF, OTF) that are not installed on a user’s computer.',
    syntaxCode: `@font-face {\n  font-family: 'My Custom Font';\n  src: url('myfont.woff2') format('woff2');\n  font-weight: 400;\n}`,
    keyBenefit: 'Always use modern formats like **WOFF2** for smaller file sizes and better performance.',
    linkCode: `<!-- After defining @font-face, you use it here -->\nbody {\n  font-family: 'My Custom Font', Arial, sans-serif;\n}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Type className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Font Styling
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Control the typeface, size, weight, and delivery of every character on your page.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Font Families & Fallbacks (Vertical) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Globe className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Font Family & Fallbacks
            </h2>
          </div>
          <div className="space-y-8">
            {familyProperties.map((prop, index) => (
              <FontPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Sizing and Weight (Vertical) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Ruler className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Size, Weight, and Style
            </h2>
          </div>
          <div className="space-y-8">
            {styleProperties.map((prop, index) => (
              <FontPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>

        {/* Section 3: Web Fonts & @font-face */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Link className="w-8 h-8 mr-4 text-indigo-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Custom Web Fonts
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Description Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-indigo-500"/> {webFontSection.title}
                </h3>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    The {webFontSection.description}
                </p>

                <div className="p-3 bg-red-50 dark:bg-red-900/40 rounded-xl border-l-4 border-red-500 flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                        <strong className="mr-1">Critical:</strong> Loading custom fonts impacts page speed. Only load the weights and styles you absolutely need.
                    </p>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white pt-4">Usage after Definition</h4>
                <p className="text-base text-slate-600 dark:text-slate-300">
                    Once defined using `@font-face`, the custom font name is used like any other font in your stack:
                </p>
                <InteractiveCodeBlock 
                    code={webFontSection.linkCode}
                    title="Applying the Custom Font"
                    language="css"
                />

            </div>
            
            {/* Code Block Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The `@font-face` Syntax</h4>
                <InteractiveCodeBlock 
                    code={webFontSection.syntaxCode}
                    title="CSS Definition"
                />
                 <div className="p-3 bg-yellow-50 dark:bg-yellow-900/40 rounded-xl border-l-4 border-yellow-500 flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                        <strong className="mr-1">Best Practice:</strong> Use multiple formats (`woff2`, `woff`) for maximum browser compatibility.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Font Mastery!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to select, size, and embed fonts, ensuring your typography is perfect on every device.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue to Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default CssFonts;
