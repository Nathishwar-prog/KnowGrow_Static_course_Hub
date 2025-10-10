import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Layers, Lightbulb, Focus, Maximize, Ruler, Palette
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
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|\.[\w-]+|#[\w-]+|\.box)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(outline|outline-style|outline-width|outline-color|border|width|height|color|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|solid|dotted|double|\d+px|red|blue|auto)$/)) {
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
 * A visually distinct card for explaining individual CSS properties.
 */
const PropertyExplainerCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
  const Icon = icon; // Assign to a capitalized variable for JSX rendering
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
function CssOutline() {
  const [outlineWidth, setOutlineWidth] = useState(8);
  const [outlineStyle, setOutlineStyle] = useState('solid');
  const outlineColor = '#EF4444'; // Red-500

  const coreProperties = [
    {
      title: 'outline-style',
      icon: Layers,
      color: 'text-blue-600',
      description: 'Sets the **pattern** of the outline, such as solid, dotted, or dashed. This property must be set for the outline to be visible.',
      syntaxCode: `div {\n  outline-style: solid;\n}`,
      keyBenefit: 'Most browsers default to a visible style when focusing an element for accessibility.',
    },
    {
      title: 'outline-width',
      icon: Ruler,
      color: 'text-green-600',
      description: 'Defines the **thickness** of the outline. This accepts any standard length unit (e.g., px, em, rem).',
      syntaxCode: `div {\n  outline-width: 4px;\n}`,
      keyBenefit: 'A thicker outline can significantly improve visibility for users with visual impairments.',
    },
    {
      title: 'outline-color',
      icon: Palette,
      color: 'text-red-600',
      description: 'Sets the **color** of the outline. For accessibility, this should have a high contrast against the page background.',
      syntaxCode: `div {\n  outline-color: #6366f1;\n}`,
      keyBenefit: 'Avoid using the default blue if it blends with your design; always choose a strong, contrasting color.',
    },
    {
      title: 'outline (Shorthand)',
      icon: Code,
      color: 'text-purple-600',
      description: 'The **shorthand** property to set all three values in one line: `width`, `style`, and `color` (in any order).',
      syntaxCode: `div {\n  outline: 5px solid #06B6D4;\n}`,
      keyBenefit: 'This is the most efficient and common way to apply a complete outline style in production code.',
    },
  ];

  const outlineStyles = ['solid', 'dotted', 'dashed', 'double', 'groove'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Focus className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Outline
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The non-structural boundary used primarily for accessibility and focus indicators.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8 gap-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Target className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Accessibility Essential</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Maximize className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Non-Layout-Breaking</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Syntax & Core Properties
            </h2>
          </div>
          <div className="space-y-12">
            {coreProperties.map((prop, index) => (
              <PropertyExplainerCard key={index} {...prop} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Maximize className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Outline vs. Border
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            The key difference: the **outline does NOT take up space** in the layout. It is drawn *over* the page, never causing surrounding elements to move.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Live Controls</h4>
              <div className="space-y-2 pt-4">
                <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Width: <span className="text-green-600 font-extrabold">{outlineWidth}px</span></label>
                <input
                  type="range" min="0" max="15" value={outlineWidth}
                  onChange={(e) => setOutlineWidth(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Style:</label>
                <select
                  value={outlineStyle} onChange={(e) => setOutlineStyle(e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  {outlineStyles.map((style) => (
                    <option key={style} value={style}>{style.charAt(0).toUpperCase() + style.slice(1)}</option>
                  ))}
                </select>
              </div>
              <InteractiveCodeBlock 
                code={`.box {\n  outline: ${outlineWidth}px ${outlineStyle} ${outlineColor};\n  /* outline-offset can also be used */\n}`}
                title="Live CSS Output"
              />
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Demonstration</h4>
              <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 space-y-4">
                <div className="flex space-x-2 items-start justify-center text-center">
                  <div className="w-32 h-32 bg-indigo-500 rounded-lg text-white font-bold p-2 flex flex-col justify-center items-center" style={{ outline: `${outlineWidth}px ${outlineStyle} ${outlineColor}`, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    Outline Box
                    <span className="text-xs mt-1">(No layout shift)</span>
                  </div>
                  <div className="w-32 h-32 bg-teal-500 rounded-lg text-white font-bold p-2 flex flex-col justify-center items-center" style={{ border: `${outlineWidth}px solid ${outlineColor}`, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    Border Box
                    <span className="text-xs mt-1">(Pushes layout)</span>
                  </div>
                </div>
                <div className="text-center font-semibold text-sm text-slate-600 dark:text-slate-300">
                  Notice the **Border Box** shrinks to accommodate its border, but the **Outline Box** does not.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Outline Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to apply visual emphasis for focus and debugging without breaking your carefully planned layouts.
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

export default CssOutline;

