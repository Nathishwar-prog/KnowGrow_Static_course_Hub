import React from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Zap, ListChecks, Layers, Ruler, Palette, MinusCircle
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
                if (part.match(/^(ul|ol|li|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML elements / Selectors
                }
                if (part.match(/^(list-style-type|list-style-image|list-style-position|list-style|margin|padding|color|font-size|text-decoration)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|none|disc|square|url|inside|outside|0|red|blue|auto)$/)) {
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
function CssLists() {

  const coreProperties = [
    {
      title: 'list-style-type',
      icon: Layers,
      color: 'text-red-600',
      description: 'Defines the appearance of the list marker (bullet point or number). Common values include **`disc`**, **`circle`**, **`square`**, or **`none`**.',
      syntaxCode: `ul {\n  list-style-type: square;\n}\nol {\n  list-style-type: upper-roman;\n}`,
      keyBenefit: 'Use for custom bullet shapes. Using `none` is the first step when designing custom navigation menus.',
    },
    {
      title: 'list-style-position',
      icon: Target,
      color: 'text-green-600',
      description: 'Specifies where the marker should appear relative to the list item content. Options are **`inside`** or **`outside`** (default).',
      syntaxCode: `ul {\n  list-style-position: inside;\n}`,
      keyBenefit: '`inside` wraps longer text cleanly, aligning the marker with the list text block. `outside` keeps the marker separate.',
    },
    {
      title: 'list-style-image',
      icon: Zap,
      color: 'text-blue-600',
      description: 'Allows you to use a **custom image** as the list marker. It takes a URL value.',
      syntaxCode: `ul {\n  list-style-image: url('star.png');\n}`,
      keyBenefit: 'Provides full creative control, but requires managing image files and accessibility fallbacks.',
    },
    {
      title: 'list-style (Shorthand)',
      icon: Code,
      color: 'text-purple-600',
      description: 'The **shorthand** property to set all three list properties in one line: `type`, `position`, and `image` (order is flexible).',
      syntaxCode: `ul {\n  list-style: square inside url('bullet.png');\n}`,
      keyBenefit: 'Always use the shorthand when setting multiple properties for cleaner, more concise CSS.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <ListChecks className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Lists: Styling and Control
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Mastering bullet points, numbering, and removing default browser styles for navigation.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core List Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Three List Properties
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            These properties define how the list marker appears and where it is positioned relative to the list item content.
          </p>
          <div className="space-y-8">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Removing Default Styles (Crucial for Navigation) */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <MinusCircle className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Resetting Lists for Navigation
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Description Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-teal-500"/> Why We Reset Lists
                </h3>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Most navigation menus are created using **`&lt;ul&gt;`** (unordered list) tags because they are **semantic** (meaningful to search engines and screen readers).
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    However, lists come with default browser styles (bullets, padding, margins) that we must remove before applying custom layout and styles.
                </p>

                <div className="p-3 bg-red-50 dark:bg-red-900/40 rounded-xl border-l-4 border-red-500 flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                        <strong className="mr-1">Crucial Step:</strong> Always remove the **list marker** (`list-style: none`) and the default **padding** from the **`&lt;ul&gt;`** or **`&lt;ol&gt;`** element.
                    </p>
                </div>
            </div>
            
            {/* Code Block Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Code to Remove All Default Styling</h4>
                <InteractiveCodeBlock 
                    code={`ul.main-nav {\n  list-style: none; /* Removes bullets */\n  padding: 0; /* Removes padding indentation */\n  margin: 0; /* Removes outer spacing */\n}\n\nul.main-nav li {\n  /* Often reset margin/padding here too */\n}`}
                    title="Navigation Reset Example"
                />
                 <div className="p-3 bg-yellow-50 dark:bg-yellow-900/40 rounded-xl border-l-4 border-yellow-500 flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                        <strong className="mr-1">Pro Tip:</strong> Removing padding from the `ul` is usually sufficient to pull the list content flush with the container edge.
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
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: List Styling Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to apply custom list styles and, more importantly, how to reset them for custom navigation layouts.
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

export default CssLists;
