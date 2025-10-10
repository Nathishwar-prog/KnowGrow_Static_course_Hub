import React from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Layers, Lightbulb, Type, Zap, Gem, SquareDashedKanban, Feather, Monitor, Link, Globe, Palette
} from 'lucide-react';

// --- Reusable UI Components ---

/**
 * A syntax-highlighted code block for displaying CSS and HTML.
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
                // Comments and HTML tags are highlighted separately for combined examples
                if (part.includes('/*') || part.includes('*/') || part.match(/<!--.*?-->/)) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|i|span|svg|img|path|a|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML elements / Selectors
                }
                if (part.match(/^(font-family|content|color|font-size|background|width|height|fill|display)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|normal|bold|before|after|sans-serif|\d+px|\d+em|block|none)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // Values
                }
                return <span key={j} className="text-slate-300">{part}</span>; // Standard text
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

/**
 * A visually distinct card for explaining individual lesson properties/concepts.
 */
const LessonPropertyCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
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
function CssIcons() {

  const iconFontMethods = [
    {
      title: 'Pseudo-elements',
      icon: SquareDashedKanban,
      color: 'text-red-600',
      description: 'The standard technique for using icon fonts. Icons are inserted using the **`content` property** on `::before` or `::after` pseudo-elements.',
      syntaxCode: `.btn-icon::before {\n  font-family: 'Font Awesome';\n  content: '\\f00c'; /* Unicode for checkmark */\n  margin-right: 8px;\n}`,
      keyBenefit: 'Keeps the HTML clean and visually separates the icon from the main content.',
    },
    {
      title: 'Sizing & Color',
      icon: Palette,
      color: 'text-green-600',
      description: 'Icon fonts are treated as **text**. You can change their size using `font-size` and their color using the `color` property.',
      syntaxCode: `.icon-lg {\n  font-size: 24px;\n  color: #10B981;\n}`,
      keyBenefit: 'This text-based nature allows for easy styling but limits advanced graphical effects.',
    },
    {
      title: 'Accessibility (SR-Only)',
      icon: Target,
      color: 'text-blue-600',
      description: 'Icons need descriptive text for screen readers. Use a class like **`sr-only`** to hide the text visually but keep it available to assistive tech.',
      syntaxCode: `<!-- In HTML -->\n<i class="fa-check" aria-hidden="true"></i>\n<span class="sr-only">Success</span>`,
      keyBenefit: 'Essential for inclusive design. Never rely on an icon alone to convey meaning.',
    },
  ];

  const svgMethods = [
    {
      title: 'Inline SVG',
      icon: Code,
      color: 'text-teal-600',
      description: 'Embedding the SVG code directly into the HTML. This is the **most versatile method** as CSS can style every part of the path.',
      syntaxCode: `<!-- In HTML -->\n<svg width="24" height="24" fill="currentColor">\n  <path d="..." />\n</svg>\n\n/* In CSS */\nsvg {\n  transition: fill 0.3s;\n}\nbutton:hover svg {\n  fill: #6366f1;\n}`,
      keyBenefit: 'Grants full CSS control over colors and interactions, improving performance by avoiding extra HTTP requests.',
    },
    {
      title: 'External SVG (Image)',
      icon: Monitor,
      color: 'text-orange-600',
      description: 'Using an SVG file as an image source via `<img>` or `background-image`. This is simple but limits CSS control.',
      syntaxCode: `div {\n  background-image: url('icon.svg');\n  background-size: 24px;\n  width: 24px;\n  height: 24px;\n}`,
      keyBenefit: 'Ideal for large, complex graphics or logos where you do not need dynamic color changes.',
    },
    {
      title: 'Controlling Color',
      icon: Zap,
      color: 'text-purple-600',
      description: 'When inline, SVG color is controlled by the **`fill` or `stroke`** attributes, not `color`. The CSS property `fill` or `stroke` will override the inline attributes.',
      syntaxCode: `.icon-primary {\n  fill: #7C3AED;\n  stroke-width: 1.5px;\n}`,
      keyBenefit: 'To change SVG color with CSS, you must use `fill` (for solid shapes) or `stroke` (for lines), not the standard `color` property.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Gem className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Icon Implementation
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The two paths to visual assets: Icon Fonts and Scalable Vector Graphics (SVG).
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Icon Fonts (Legacy Method) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Type className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Icon Fonts & Pseudo-elements
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Icon Fonts (like Font Awesome or Material Icons) treat icons as scalable glyphs that can be styled like text. This is often done using **pseudo-elements** for insertion.
          </p>
          <div className="space-y-8">
            {iconFontMethods.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Scalable Vector Graphics (Modern Standard) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Feather className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: SVG: The Modern Icon Standard
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            **SVG** is the industry standard today. It provides true vector scaling and superior CSS control without being tied to text properties.
          </p>
          <div className="space-y-8">
            {svgMethods.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>

        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Icon Mastery!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to insert and style icons, preparing you for complex UI component creation.
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

export default CssIcons;
