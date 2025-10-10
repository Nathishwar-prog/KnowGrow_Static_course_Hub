import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Zap, LayoutGrid, Layers, Ruler, Palette, Monitor, BoxSelect, Square, MinusCircle
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
                if (part.match(/^(div|span|a|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML elements / Selectors
                }
                if (part.match(/^(display|width|height|padding|margin|color|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')', '%'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(block|inline|inline-block|flex|grid|none|#[0-9a-fA-F]+|\d+px|0|auto)$/)) {
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
function CssDisplay() {
  const [displayType, setDisplayType] = useState('block');

  const coreProperties = [
    {
      title: 'block',
      icon: Square,
      color: 'text-red-600',
      description: 'Takes up the **full width** available, forces a new line before and after, and respects `width` and `height`. Default for `<div>`, `<p>`, `<h1>` to `<h6>`.',
      syntaxCode: `div {\n  display: block;\n  width: 50%; /* Respected */\n}`,
      keyBenefit: 'Best for major structural elements like containers, headers, and footers.',
    },
    {
      title: 'inline',
      icon: Code,
      color: 'text-green-600',
      description: 'Takes up **only the necessary width** for its content, does **NOT** force a new line, and **ignores `width` and `height`**. Default for `<span>`, `<a>`, `<strong>`.',
      syntaxCode: `span {\n  display: inline;\n  width: 200px; /* Ignored */\n}`,
      keyBenefit: 'Ideal for formatting text within a paragraph without disrupting the flow of the content.',
    },
    {
      title: 'inline-block',
      icon: BoxSelect,
      color: 'text-blue-600',
      description: 'A hybrid that flows **inline** (does not force a new line) but respects **`width` and `height`** like a block element.',
      syntaxCode: `.icon {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}`,
      keyBenefit: 'Often used for spacing navigation links or icons that need fixed dimensions but must sit on the same line.',
    },
  ];
  
  const modernProperties = [
    {
      title: 'flex',
      icon: Zap,
      color: 'text-purple-600',
      description: 'Turns the element into a **flex container**, enabling **Flexbox**. Allows one-dimensional (row or column) alignment and distribution of space.',
      syntaxCode: `.container {\n  display: flex;\n  justify-content: space-between;\n}`,
      keyBenefit: 'The best method for component alignment, navigation, and spacing elements in a single row or column.',
    },
    {
      title: 'grid',
      icon: LayoutGrid,
      color: 'text-teal-600',
      description: 'Turns the element into a **grid container**, enabling **CSS Grid**. Ideal for complex two-dimensional (rows AND columns) layouts.',
      syntaxCode: `.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}`,
      keyBenefit: 'Perfect for overall page layout, defining main content areas, sidebars, and dashboards.',
    },
    {
      title: 'none',
      icon: MinusCircle,
      color: 'text-gray-600',
      description: 'Completely **removes the element** from the document flow and the rendering tree. It takes up **zero space**.',
      syntaxCode: `.hidden {\n  display: none;\n}`,
      keyBenefit: 'Used frequently in JavaScript or media queries to conditionally hide and show content.',
    },
  ];

  const flowBoxes = [
    { id: 1, content: 'Element A' },
    { id: 2, content: 'Element B' },
    { id: 3, content: 'Element C' },
  ];

  const getFlowStyle = () => {
    if (displayType === 'block') {
      return 'space-y-2';
    }
    if (displayType === 'inline') {
      return 'space-x-2 flex flex-wrap';
    }
    if (displayType === 'inline-block') {
      return 'space-x-2 flex flex-wrap';
    }
    return 'space-x-2 flex'; // Default for flex/grid to visually demonstrate inline flow
  };

  const getBoxClasses = (id) => {
    let base = "p-3 font-semibold text-white shadow-md rounded-lg transition-all duration-300";
    let color = id === 1 ? 'bg-red-500' : id === 2 ? 'bg-blue-500' : 'bg-green-500';

    if (displayType === 'block') {
      base += ' w-full';
    } else if (displayType === 'inline-block') {
      base += ' w-24 h-12 text-center flex items-center justify-center';
    } else if (displayType === 'inline') {
      base += ' w-auto h-auto px-4';
    }
    
    // Add display property for visualization only
    if (displayType === 'inline-block') {
      base += ' inline-block';
    } else if (displayType === 'block') {
      base += ' block';
    }

    return `${base} ${color}`;
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS `display` Property
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The core property that defines an element's **behavior**, **flow**, and **layout context**.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Classic Display Types */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Classic Three Types
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Every element starts with a default `display` value. Understanding these three is the foundation of layout control.
          </p>
          <div className="space-y-8">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Live Display Sandbox
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Control</h4>
                
                {/* Display Type Control */}
                <div className="space-y-2 pt-4">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                        Current Display Type: <span className="text-violet-600 font-extrabold">{displayType}</span>
                    </label>
                    <select
                        value={displayType}
                        onChange={(e) => setDisplayType(e.target.value)}
                        className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                        <option value="block">block</option>
                        <option value="inline">inline</option>
                        <option value="inline-block">inline-block</option>
                    </select>
                </div>

                <InteractiveCodeBlock 
                    code={`.element {\n  display: ${displayType};\n  width: 100px; /* Test width effect */\n  height: 40px; /* Test height effect */\n}`}
                    title="Live CSS Output"
                />
            </div>
            
            {/* Visualization Column */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Element Flow Preview</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 h-48 flex flex-col items-start justify-start">
                    <div className={getFlowStyle()}>
                        {flowBoxes.map(box => (
                          <div 
                            key={box.id} 
                            className={getBoxClasses(box.id)}
                            style={{
                                width: (displayType === 'inline' ? 'auto' : '100px'), 
                                height: (displayType === 'block' || displayType === 'inline-block' ? '40px' : 'auto'),
                                padding: displayType === 'inline' ? '4px 8px' : '12px'
                            }}
                          >
                            {box.content}
                          </div>
                        ))}
                    </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <p className='text-red-500'>**Block:** Forces new line. Respects width/height.</p>
                    <p className='text-green-500'>**Inline:** Stays on same line. Ignores set width/height.</p>
                    <p className='text-blue-500'>**Inline-Block:** Stays on same line. Respects set width/height.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Section 3: Modern Layout Properties */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <LayoutGrid className="w-8 h-8 mr-4 text-purple-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Modern Layout (Context Providers)
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Setting `display` to `flex` or `grid` turns the element into a **container** that can organize its children in powerful ways.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {modernProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>


        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Display Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the fundamental knowledge to control the behavior and flow of every element in your layout.
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

export default CssDisplay;
