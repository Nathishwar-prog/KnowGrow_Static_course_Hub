import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Box, Text, Combine, Puzzle, AlertTriangle
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

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
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|\.[\w-]+|#[\w-]+|span)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(display|width|height|padding|margin|background-color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|block|inline|inline-block|\d+px?)$/)) {
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

const LessonPropertyCard = ({ title, icon: Icon, color, description, syntaxCode }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          'from-purple-500/20 to-purple-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
    </div>
  );
// --- End Reusable Components ---

const CssInlineBlock = () => {
  const [displayValue, setDisplayValue] = useState('inline-block');

  const displayProperties = [
    {
      title: 'display: block',
      icon: Box,
      color: 'text-blue-600',
      description: 'Elements start on a new line and take up the full width available. They respect `width`, `height`, `margin`, and `padding`.',
      syntaxCode: `div {\n  display: block;\n}`,
    },
    {
      title: 'display: inline',
      icon: Text,
      color: 'text-green-600',
      description: 'Elements do NOT start on a new line and only take up as much width as necessary. They do not respect vertical `margin`, `padding`, `width`, or `height`.',
      syntaxCode: `span {\n  display: inline;\n}`,
    },
    {
      title: 'display: inline-block',
      icon: Combine,
      color: 'text-purple-600',
      description: 'The perfect hybrid: elements flow like `inline` elements (do not force a new line), but they respect `width`, `height`, `margin`, and `padding` like `block` elements.',
      syntaxCode: `.button {\n  display: inline-block;\n}`,
    },
  ];

  const demoBoxStyle = {
    width: '100px',
    height: '100px',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50 dark:from-slate-900 dark:via-green-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-600 shadow-2xl mb-8">
            <Combine className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 mb-6 leading-tight">
            CSS Inline-Block
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Combining the flow of inline elements with the spacing control of block elements.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Three Core Display Types
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {displayProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Display Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Select Display Value:</label>
                      <div className="flex space-x-3">
                        {['block', 'inline', 'inline-block'].map(val => (
                          <button key={val} onClick={() => setDisplayValue(val)} className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 w-full ${ displayValue === val ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600' }`}>
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 pt-4">Observe how `inline` elements ignore vertical margins and `width`/`height`, while `block` elements force a new line. `inline-block` gets the best of both.</p>

                    <InteractiveCodeBlock 
                        code={`.box {\n  display: ${displayValue};\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n  padding: 10px;\n}`}
                        title="Live CSS Output"
                    />
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <div className="font-mono text-sm text-center">
                        <div style={{...demoBoxStyle, display: displayValue}} className="bg-red-500 text-white flex items-center justify-center">Box 1</div>
                        <div style={{...demoBoxStyle, display: displayValue}} className="bg-blue-500 text-white flex items-center justify-center">Box 2</div>
                        <div style={{...demoBoxStyle, display: displayValue}} className="bg-green-500 text-white flex items-center justify-center">Box 3</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
                <Puzzle className="w-8 h-8 mr-4 text-orange-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                    Section 3: Use Cases & A Common "Gotcha"
                </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                 <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Use Cases</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                        <li>Creating navigation bars with buttons that have proper spacing.</li>
                        <li>Placing icons next to text labels.</li>
                        <li>Building multi-column card layouts without using Flexbox or Grid.</li>
                        <li>Controlling the size and spacing of form elements.</li>
                    </ul>
                 </div>
                 <div className="p-8 bg-amber-50 dark:bg-amber-900/40 rounded-2xl shadow-lg border-l-4 border-amber-500">
                    <div className="flex items-start">
                        <AlertTriangle className="w-6 h-6 mr-4 text-amber-600 flex-shrink-0"/>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Whitespace "Gotcha"</h4>
                            <p className="text-slate-600 dark:text-slate-300">
                                Because `inline-block` elements flow like text, any whitespace (spaces, tabs, newlines) in your HTML between them will create a visible gap in the browser. This can be fixed by removing the space in the HTML, setting `font-size: 0` on the parent, or using Flexbox instead.
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Inline-Block Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to create flexible, space-respecting layouts, a key step before mastering modern systems like Flexbox.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next: Flexbox Layouts
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssInlineBlock;

