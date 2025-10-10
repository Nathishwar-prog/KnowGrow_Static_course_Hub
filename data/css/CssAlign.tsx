import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  AlignCenter, MoveHorizontal, GitCommit, Square, Grid, Box
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
                if (part.match(/^(margin|text-align|position|top|left|transform|display|justify-content|align-items|place-items)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', '%'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(auto|center|absolute|relative|translate|flex|grid|\d+px?|-?\d+)$/)) {
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
           color.includes('purple') ? 'from-purple-500/20 to-purple-600/20' :
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

const CssAlign = () => {
    const [alignMethod, setAlignMethod] = useState('flex');

    const alignMethods = [
        {
            id: 'margin',
            title: 'Horizontal Centering (Block)',
            icon: MoveHorizontal,
            color: 'text-blue-600',
            description: 'The classic method for horizontally centering a block-level element with a defined `width`. The element must have space to move within its parent.',
            syntaxCode: `.child {\n  width: 80%;\n  margin: 0 auto;\n}`,
        },
        {
            id: 'text-align',
            title: 'Horizontal Centering (Inline)',
            icon: AlignCenter,
            color: 'text-green-600',
            description: 'Used on a parent element to center its inline-level children (like text, links, or spans). This does not work on block-level elements.',
            syntaxCode: `.parent {\n  text-align: center;\n}`,
        },
        {
            id: 'absolute',
            title: 'Absolute Centering (2D)',
            icon: GitCommit,
            color: 'text-red-600',
            description: 'A powerful technique for centering an element both horizontally and vertically. Requires the parent to have a `position` other than `static`.',
            syntaxCode: `.parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}`,
        },
        {
            id: 'flex',
            title: 'Flexbox Centering',
            icon: Box,
            color: 'text-purple-600',
            description: 'The modern, standard way to align items. Flexbox provides powerful tools to align items on both the main and cross axes with simple properties.',
            syntaxCode: `.parent {\n  display: flex;\n  justify-content: center; /* Horizontal */\n  align-items: center; /* Vertical */\n}`,
        },
        {
            id: 'grid',
            title: 'Grid Centering',
            icon: Grid,
            color: 'text-orange-600',
            description: 'The simplest and most powerful method for 2D centering. A single property on the grid container can perfectly center its child.',
            syntaxCode: `.parent {\n  display: grid;\n  place-items: center;\n}`,
        },
    ];
    
    const getParentStyles = () => {
        switch (alignMethod) {
            case 'text-align': return { textAlign: 'center' };
            case 'absolute': return { position: 'relative', height: '150px' };
            case 'flex': return { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' };
            case 'grid': return { display: 'grid', placeItems: 'center', height: '150px' };
            default: return { height: '150px' };
        }
    };

    const getChildStyles = () => {
        switch (alignMethod) {
            case 'margin': return { width: '50%', margin: '0 auto' };
            case 'text-align': return { display: 'inline-block' }; // Make it behave like text
            case 'absolute': return { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
            default: return {};
        }
    };
    
    const liveCode = alignMethods.find(m => m.id === alignMethod)?.syntaxCode || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900">
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-600 shadow-2xl mb-8">
            <AlignCenter className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 mb-6 leading-tight">
            CSS Alignment
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Mastering the art of centering and aligning elements with classic and modern techniques.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Five Essential Techniques
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {alignMethods.map((method, index) => (
              <LessonPropertyCard key={index} {...method} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Alignment Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Controls</h4>
                    
                    <div className="space-y-2">
                      <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Select Alignment Method:</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {alignMethods.map(method => (
                          <button key={method.id} onClick={() => setAlignMethod(method.id)} className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 text-center ${ alignMethod === method.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600' }`}>
                            {method.title.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <InteractiveCodeBlock 
                        code={liveCode}
                        title="Live CSS Output"
                    />
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600" style={getParentStyles()}>
                    <div style={getChildStyles()} className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center p-4 rounded-lg shadow-lg font-semibold text-center w-32 h-32">
                        Centered Element
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-sky-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Alignment Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have a complete toolkit for aligning any element, anywhere on the page, with confidence and precision.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next: Modern Layouts
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssAlign;
