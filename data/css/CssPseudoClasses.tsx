import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  MousePointer, Crosshair, ListChecks, Target
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
                if (part.match(/^(a|button|li|\.[\w-]+|#[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(background-color|color|text-decoration|font-weight)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|hover|focus|active|first-child|last-child|nth-child|even|odd|none|bold|\d+n?)$/)) {
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
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          'from-orange-500/20 to-orange-600/20'
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

const CssPseudoClasses = () => {
    const [activeDemo, setActiveDemo] = useState('first-child');

    const pseudoClasses = [
        {
            id: 'hover',
            title: ':hover',
            icon: MousePointer,
            color: 'text-blue-600',
            description: 'Applies styles when the user hovers their mouse pointer over an element. Essential for interactive feedback.',
            syntaxCode: `button:hover {\n  background-color: #4f46e5;\n}`,
        },
        {
            id: 'focus',
            title: ':focus',
            icon: Crosshair,
            color: 'text-green-600',
            description: 'Applies styles when an element has received focus, typically through clicking or tabbing. Crucial for accessibility.',
            syntaxCode: `input:focus {\n  border-color: #3b82f6;\n}`,
        },
        {
            id: 'first-child',
            title: ':first-child',
            icon: ListChecks,
            color: 'text-red-600',
            description: 'Selects the first element among a group of sibling elements. Useful for styling the first item in a list differently.',
            syntaxCode: `li:first-child {\n  font-weight: bold;\n}`,
        },
        {
            id: 'nth-child',
            title: ':nth-child(n)',
            icon: Target,
            color: 'text-orange-600',
            description: 'A powerful structural selector that targets elements based on their position using a number, keyword (even/odd), or formula (e.g., 2n+1).',
            syntaxCode: `/* Style every odd row */\nli:nth-child(odd) {\n  background-color: #f3f4f6;\n}`,
        },
    ];
    
    const demos = [
        { id: 'first-child', label: ':first-child' },
        { id: 'last-child', label: ':last-child' },
        { id: 'nth-child-odd', label: ':nth-child(odd)' },
        { id: 'nth-child-even', label: ':nth-child(even)' },
        { id: 'nth-child-2', label: ':nth-child(2)' },
    ];

    const getTargetedClass = (index) => {
        const totalItems = 5;
        switch (activeDemo) {
            case 'first-child': return index === 0;
            case 'last-child': return index === totalItems - 1;
            case 'nth-child-odd': return (index + 1) % 2 !== 0;
            case 'nth-child-even': return (index + 1) % 2 === 0;
            case 'nth-child-2': return index === 1;
            default: return false;
        }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-500 mb-6 leading-tight">
            CSS Pseudo-classes
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Applying styles to elements based on their state, position, and user interaction.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Key Pseudo-classes Explained
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {pseudoClasses.map((item) => (
              <LessonPropertyCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">User Action Demos</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105 active:bg-indigo-700 active:scale-95">
                           Hover & Active (:hover, :active)
                        </button>
                        <input type="text" placeholder="Focus Me (:focus)" className="px-4 py-3 bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white pt-6">Structural Selector Controls</h4>
                     <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Select a Structural Pseudo-class:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                         {demos.map(demo => (
                          <button key={demo.id} onClick={() => setActiveDemo(demo.id)} className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 text-center ${ activeDemo === demo.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600' }`}>
                            {demo.label}
                          </button>
                        ))}
                      </div>
                    </div>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <ul className="space-y-2">
                        {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((item, index) => (
                           <li key={item} className={`p-3 rounded-lg font-semibold transition-all duration-300 ${getTargetedClass(index) ? 'bg-amber-400 text-black scale-105 shadow-lg' : 'bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200'}`}>
                                {item}
                           </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Pseudo-classes Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now create dynamic, interactive, and structurally-aware styles, adding a professional touch to any project.
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

export default CssPseudoClasses;
