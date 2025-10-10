import React, { useState } from 'react';
import { BookOpen, Target, Code, Key, LayoutGrid, Zap, Tag, Hash, Minus, CheckCircle, ArrowRight, Layers, Plus, ChevronRight, CornerDownRight, Slash, Anchor, ListOrdered, MousePointer, Settings, AlignLeft } from 'lucide-react';

const CssSelectors = () => {
  const [activeTab, setActiveTab] = useState(0);

  // --- Helper Components copied from reference for visual consistency ---

  // Interactive Code Preview Component (Adapted for CSS/HTML)
  const InteractiveCodeBlock = ({ code, language = 'css', title, style = {} }) => (
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
                {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$])/g).map((part, j) => {
                  // Enhanced Syntax Highlighting
                  if (part.match(/^(p|h1|div|ul|a|input|body|html|\.[\w-]+|#[\w-]+|\*|::before|::after|:hover|:focus|:nth-child)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors/Pseudo
                  }
                  if (part.match(/^(color|font-size|background-color|margin|padding|width|content|display|transition)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties
                  }
                  if (['{', '}', ':', ';', '>', '+', '~', '[', ']', '=', '^', '|', '*', '$'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation/Combinators/Attribute symbols
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|\d+px|red|white|bold|none|absolute|block|0.3s|'NEW')$/)) {
                    return <span key={j} className="text-emerald-400">{part}</span>; // Values/Strings
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

  // General Topic Card Component (Highly Stylized)
  const TopicCard = ({ title, icon: Icon, color, description, code, badge }) => (
    <div className="group relative">
      {badge && (
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
          {badge}
        </div>
      )}
      <div className="p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 h-full">
        <div className="flex items-center mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
            color.includes('red') ? 'from-red-500/20 to-red-600/20' :
            color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
            color.includes('green') ? 'from-green-500/20 to-green-600/20' :
            color.includes('purple') ? 'from-purple-500/20 to-purple-600/20' :
            color.includes('orange') ? 'from-orange-500/20 to-orange-600/20' :
            'from-teal-500/20 to-teal-600/20'
          } flex items-center justify-center mr-4`}>
            <Icon className={`w-7 h-7 ${color}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          {description.split(/(\*\*.*?\*\*)/g).map((part, i) => (
            part.startsWith('**') && part.endsWith('**') ? 
            <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
            <span key={i}>{part}</span>
          ))}
        </p>
        {code && <InteractiveCodeBlock code={code} />}
      </div>
    </div>
  );
  // --- End Helper Components ---


  // Data for Combinator Selectors
  const combinatorSelectors = [
    {
      title: 'Descendant Selector (Space)',
      icon: CornerDownRight,
      color: 'text-indigo-600',
      description: 'Selects an element **inside** another element. This is the most common selector.',
      syntax: 'div p { color: blue; }',
      html: `<div>\n  <p>Styled</p>\n  <section><p>Styled</p></section>\n</div>\n<p>Unstyled</p>`
    },
    {
      title: 'Child Selector (>)',
      icon: ChevronRight,
      color: 'text-pink-600',
      description: 'Selects an element that is a **direct child** of another element.',
      syntax: 'ul > li { color: red; }',
      html: `<ul>\n  <li>Styled</li>\n  <li>Styled</li>\n  <ul><li>Unstyled grandchild</li></ul>\n</ul>`
    },
    {
      title: 'Adjacent Sibling (+)',
      icon: Plus,
      color: 'text-teal-600',
      description: 'Selects an element that is **immediately preceded** by a specific element at the same level.',
      syntax: 'h2 + p { margin-top: 50px; }',
      html: `<h2>Title</h2>\n<p>Styled (comes immediately after h2)</p>\n<p>Unstyled</p>`
    },
    {
      title: 'General Sibling (~)',
      icon: Layers,
      color: 'text-orange-600',
      description: 'Selects all elements that are **siblings** (at the same level) after the first specified element.',
      syntax: 'h2 ~ p { border-bottom: 1px solid gray; }',
      html: `<h2>Title</h2>\n<p>Styled</p>\n<div>Not a paragraph</div>\n<p>Styled</p>`
    }
  ];

  // Data for Attribute Selectors
  const attributeSelectors = [
    {
      title: 'Basic Attribute ([attr])',
      icon: Anchor,
      color: 'text-blue-600',
      description: 'Targets elements that **have a specific attribute**, regardless of its value.',
      syntax: 'a[target] { color: purple; }',
      code: `a[href] {\n  text-decoration: none;\n}`
    },
    {
      title: 'Value Attribute ([attr="val"])',
      icon: Key,
      color: 'text-red-600',
      description: 'Targets elements where the attribute **exactly equals** the specified value.',
      syntax: 'input[type="submit"] { background: green; }',
      code: `input[type="text"] {\n  border: 1px solid #ccc;\n}`
    },
    {
      title: 'Starts With ([attr^="val"])',
      icon: AlignLeft,
      color: 'text-green-600',
      description: 'Targets elements where the attribute value **starts with** the given string.',
      syntax: 'a[href^="https"] { font-weight: bold; }',
      code: `div[class^="col-"] {\n  width: 50%;\n}`
    },
    {
      title: 'Contains ([attr*="val"])',
      icon: Settings,
      color: 'text-purple-600',
      description: 'Targets elements where the attribute value **contains** the given substring anywhere.',
      syntax: 'p[class*="error"] { color: red; }',
      code: `a[title*="external"] {\n  opacity: 0.8;\n}`
    }
  ];

  // Data for Pseudo-Classes and Elements
  const pseudoSelectors = [
    {
      title: 'User Action (:hover, :focus)',
      icon: MousePointer,
      color: 'text-pink-600',
      description: 'Targets elements based on user interaction, crucial for **interactivity** and **accessibility**.',
      code: `button:hover {\n  background-color: #f1f1f1;\n  transition: 0.3s;\n}\n\ninput:focus {\n  border-color: blue;\n  outline: none;\n}`
    },
    {
      title: 'Structural (:nth-child)',
      icon: ListOrdered,
      color: 'text-teal-600',
      description: 'Targets elements based on their position within their parent container (e.g., **every 3rd** item, **odd** items).',
      code: `li:nth-child(odd) {\n  background-color: #eee;\n}\n\nli:nth-child(3n) {\n  font-weight: bold;\n}`
    },
    {
      title: 'Pseudo-Elements (::before, ::after)',
      icon: Slash,
      color: 'text-violet-600',
      description: 'Allows you to style **parts of an element** or **insert decorative content** before/after the element\'s main content.',
      code: `h2::before {\n  content: "✨";\n  margin-right: 10px;\n}\n\n.tooltip::after {\n  content: "Help";\n  position: absolute;\n}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-2xl mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            CSS Selectors: Precision Targeting
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master the rules for selecting any element on a page—from simple types to complex positional logic.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">High Specificity</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Efficient Styling</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Basic Selectors (Review) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Tag className="w-8 h-8 mr-4 text-red-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Basic Selectors
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            These are the simplest and most common ways to select elements, providing the foundation for all CSS targeting.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <TopicCard
              title="Type Selector (h1, p)"
              icon={Tag}
              color="text-red-500"
              description="Targets **all instances** of a specific HTML element type (e.g., all `<div>` or `<h1>` tags)."
              code={`p {\n  font-size: 16px;\n}`}
            />
            <TopicCard
              title="Class Selector (.class)"
              icon={Hash}
              color="text-blue-500"
              badge="REUSABLE"
              description="Targets elements based on their **class attribute**. Best practice for applying styles repeatedly across different elements."
              code={`.card-title {\n  font-weight: bold;\n}`}
            />
            <TopicCard
              title="ID Selector (#id)"
              icon={Key}
              color="text-green-500"
              badge="UNIQUE"
              description="Targets a **single, unique element** using its ID attribute. IDs should only be used once per page."
              code={`#main-nav {\n  border-bottom: 2px solid #333;\n}`}
            />
          </div>
        </section>

        {/* Section 2: Combinator Selectors */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <LayoutGrid className="w-8 h-8 mr-4 text-pink-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Combinator Selectors
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Combinators define the **relationship** between two or more selectors, allowing you to target elements based on their family tree or proximity.
          </p>

          <div className="space-y-12">
            {combinatorSelectors.map((c, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-10 p-6 lg:p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-current/10 ${c.color} mr-4`}>
                                <c.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{c.description}</p>
                        <InteractiveCodeBlock code={c.syntax} title="CSS Syntax" style={{marginBottom: '20px'}} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Example HTML & Target</h4>
                        <InteractiveCodeBlock code={c.html} language="html" title="HTML Structure" />
                        <p className={`mt-2 text-sm ${c.color} font-semibold`}>
                          *Elements matching the selector are **Styled** in the HTML.
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </section>


        {/* Section 3: Attribute Selectors */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Anchor className="w-8 h-8 mr-4 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Attribute Selectors
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Target elements based on the **presence or value** of any HTML attribute using square brackets `[]`.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {attributeSelectors.map((a, index) => (
                <TopicCard key={index} {...a} />
            ))}
          </div>
        </section>

        {/* Section 4: Pseudo-Classes and Elements */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 4: Pseudo-Classes (:) & Pseudo-Elements (::)
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Pseudo-classes (`:`) select elements based on a **state** (e.g., being hovered). Pseudo-elements (`::`) style a **specific part** of an element.
          </p>

          <div className="space-y-12">
            {pseudoSelectors.map((p, index) => (
                <div key={index} className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-current/10 ${p.color} flex items-center justify-center mr-4`}>
                            <p.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{p.description}</p>
                    <InteractiveCodeBlock code={p.code} />
                </div>
            ))}
          </div>
        </section>

        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Selectors Mastery Complete! 🎉
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the tools to precisely target any element on your page. Next, we'll dive into how styles inherit and how the browser resolves conflicts.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssSelectors;
