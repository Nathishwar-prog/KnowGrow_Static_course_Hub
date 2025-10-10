import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Newspaper, MoveRight, MoveLeft, Eraser, Anchor, XCircle
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
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#::])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|\.[\w-]+|#[\w-]+|::after)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(float|clear|content|display|border)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|left|right|none|both|block|\d+px|solid)$/)) {
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
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          color.includes('purple') ? 'from-purple-500/20 to-purple-600/20' :
          'from-green-500/20 to-green-600/20'
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

const CssFloat = () => {
  const [floatValue, setFloatValue] = useState('none');
  const [applyClearfix, setApplyClearfix] = useState(false);

  const floatProperties = [
    {
      title: 'float: left',
      icon: MoveLeft,
      color: 'text-blue-600',
      description: 'Takes the element out of the normal flow and shifts it as far left as possible in its container. Inline content wraps around its right side.',
      syntaxCode: `img {\n  float: left;\n}`,
    },
    {
      title: 'float: right',
      icon: MoveRight,
      color: 'text-blue-600',
      description: 'Takes the element out of the normal flow and shifts it as far right as possible. Inline content wraps around its left side.',
      syntaxCode: `img {\n  float: right;\n}`,
    },
    {
      title: 'float: none',
      icon: XCircle,
      color: 'text-red-600',
      description: 'The default value. The element renders in the normal document flow and is not floated.',
      syntaxCode: `img {\n  float: none;\n}`,
    },
  ];

  const clearProperties = [
      {
      title: 'clear: both',
      icon: Eraser,
      color: 'text-purple-600',
      description: 'The most common value. The element is moved down to clear past all floated elements from both the left and right sides.',
      syntaxCode: `.footer {\n  clear: both;\n}`,
    },
  ];

  const clearfixCode = `.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;\n}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 dark:from-slate-900 dark:via-orange-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl mb-8">
            <Newspaper className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 mb-6 leading-tight">
            CSS Float & Clear
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The legacy property for wrapping text around images and creating column layouts.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The `float` Property
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floatProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
                <Anchor className="w-8 h-8 mr-4 text-red-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Containing Floats with `clear`
                </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        When an element is floated, its parent container no longer "sees" its height. This causes the parent to collapse, which can break your layout. To fix this, we use the <strong>`clear`</strong> property on a subsequent element, or more commonly, a "clearfix" pseudo-element on the parent.
                    </p>
                    <LessonPropertyCard {...clearProperties[0]} />
                </div>
                 <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">The Modern "Clearfix" Solution</h4>
                    <p className="text-lg text-slate-600 dark:text-slate-300">This is the standard way to solve the collapsing container problem. By adding a pseudo-element after the parent's content, we can clear the float without adding extra HTML.</p>
                    <InteractiveCodeBlock code={clearfixCode} title="Standard Clearfix Hack"/>
                 </div>
            </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 3: Interactive Float Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Float Value:</label>
                      <div className="flex space-x-3">
                        {['none', 'left', 'right'].map(val => (
                          <button key={val} onClick={() => setFloatValue(val)} className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 w-full ${ floatValue === val ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600' }`}>
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Fix Collapsed Parent:</label>
                       <button onClick={() => setApplyClearfix(!applyClearfix)} className={`w-full p-3 rounded-xl font-bold transition-all ${ applyClearfix ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
                        {applyClearfix ? 'Clearfix Applied' : 'Apply Clearfix'}
                      </button>
                    </div>

                    <InteractiveCodeBlock 
                        code={`.image { float: ${floatValue}; }\n${applyClearfix ? `.container {\n  border: 2px solid green;\n}\n.container::after {\n  content: "";\n  display: block;\n  clear: both;\n}` : ".container {\n  border: 2px solid red;\n}"}`}
                        title="Live CSS Output"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <div 
                        className={`transition-all duration-300 p-4 ${applyClearfix ? 'clearfix border-2 border-green-500 bg-green-500/10' : 'border-2 border-red-500 bg-red-500/10'} rounded-xl`}
                        style={{'--clearfix-display': applyClearfix ? 'block' : 'none' }}
                    >
                        <style>{`.clearfix::after { content: ""; display: var(--clearfix-display); clear: both; }`}</style>
                        <img 
                          src="https://placehold.co/100x100/f97316/white?text=IMG" 
                          alt="placeholder" 
                          className="rounded-lg shadow-md transition-all duration-300"
                          style={{ float: floatValue }}
                        />
                        <p className="text-slate-700 dark:text-slate-300">
                          This is the text content of the container. When the image is floated, this text will wrap around it. Notice how the parent container's border is red, indicating it has collapsed. Apply the clearfix to see the container expand to properly wrap the floated image, turning the border green.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Legacy Layouts Understood!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              While Flexbox and Grid are modern standards, you now understand the `float` and `clear` properties you'll encounter in older codebases.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue to Modern Layouts
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssFloat;

