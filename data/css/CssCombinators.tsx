import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  CornerDownRight, ChevronRight, Plus, Waves
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
                if (part.match(/^(div|p|\.[\w-]+|#[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(background-color|color)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', '>', '+', '~'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|yellow|white)$/)) {
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

const CssCombinators = () => {
    const [activeCombinator, setActiveCombinator] = useState('descendant');

    const combinators = [
        {
            id: 'descendant',
            title: 'Descendant Selector (space)',
            icon: CornerDownRight,
            color: 'text-blue-600',
            description: 'Selects all elements that are descendants of a specified element, no matter how deeply nested they are.',
            syntaxCode: `div p {\n  background-color: yellow;\n}`,
        },
        {
            id: 'child',
            title: 'Child Selector (>)',
            icon: ChevronRight,
            color: 'text-green-600',
            description: 'Selects all elements that are the direct children of a specified element. It does not target deeper, nested elements.',
            syntaxCode: `div > p {\n  background-color: yellow;\n}`,
        },
        {
            id: 'adjacent',
            title: 'Adjacent Sibling Selector (+)',
            icon: Plus,
            color: 'text-red-600',
            description: 'Selects the element that is immediately preceded by the former element. Both elements must have the same parent.',
            syntaxCode: `div + p {\n  background-color: yellow;\n}`,
        },
        {
            id: 'general',
            title: 'General Sibling Selector (~)',
            icon: Waves,
            color: 'text-orange-600',
            description: 'Selects all elements that are siblings of a specified element, as long as they come after it and share the same parent.',
            syntaxCode: `div ~ p {\n  background-color: yellow;\n}`,
        },
    ];
    
    const activeData = combinators.find(c => c.id === activeCombinator) || combinators[0];

    const isTargeted = (id) => {
        switch (activeCombinator) {
            case 'descendant': return ['p1', 'p2', 'p3'].includes(id);
            case 'child': return ['p1', 'p2'].includes(id);
            case 'adjacent': return ['p4'].includes(id);
            case 'general': return ['p4', 'p5'].includes(id);
            default: return false;
        }
    };
    
    const DemoElement = ({ id, tag, children, className }) => {
        const targetedClass = isTargeted(id) ? 'bg-yellow-400 text-black scale-105 shadow-2xl' : 'bg-slate-600 text-white';
        return (
            <div className={`p-3 rounded-lg border border-slate-500 transition-all duration-300 ${targetedClass} ${className}`}>
                <span className="font-mono text-sm font-bold">&lt;{tag}&gt;</span>
                {children}
                <span className="font-mono text-sm font-bold">&lt;/{tag}&gt;</span>
            </div>
        );
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-50 dark:from-slate-900 dark:via-red-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 shadow-2xl mb-8">
            <Waves className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 mb-6 leading-tight">
            CSS Combinators
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Creating powerful and precise selectors by defining relationships between elements.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Relationship Types
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {combinators.map((combinator) => (
              <LessonPropertyCard key={combinator.id} {...combinator} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Combinator Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Select Combinator:</label>
                      <div className="grid grid-cols-2 gap-3">
                        {combinators.map(c => (
                          <button key={c.id} onClick={() => setActiveCombinator(c.id)} className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 text-center flex items-center justify-center ${ activeCombinator === c.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600' }`}>
                            <c.icon className={`w-5 h-5 mr-2 ${c.color}`} /> {c.title.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <InteractiveCodeBlock 
                        code={activeData.syntaxCode}
                        title="Live CSS Selector"
                    />
                </div>

                <div className="p-4 bg-slate-800 rounded-xl shadow-inner border border-slate-700 space-y-3">
                    <DemoElement id="p0" tag="p" />
                    <DemoElement id="div" tag="div" className="p-4 border-dashed border-slate-500 space-y-3">
                        <DemoElement id="p1" tag="p" />
                        <DemoElement id="span" tag="span" className="p-4 border-dashed border-slate-500 space-y-3">
                            <DemoElement id="p3" tag="p" />
                        </DemoElement>
                        <DemoElement id="p2" tag="p" />
                    </DemoElement>
                    <DemoElement id="p4" tag="p" />
                    <DemoElement id="p5" tag="p" />
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-orange-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Combinators Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now write highly specific CSS rules by targeting elements based on their exact position in the document structure.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssCombinators;
