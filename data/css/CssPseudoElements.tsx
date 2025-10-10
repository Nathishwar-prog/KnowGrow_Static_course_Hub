import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Sparkles, PlusCircle, CircleDot, Type, Highlighter
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
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(div|p|::[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(content|position|top|left|width|height|background-color|color|font-size|font-weight)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';', '"'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|absolute|bold|\d+px?)$/)) {
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

const CssPseudoElements = () => {
    const [beforeContent, setBeforeContent] = useState('"Prefix: "');
    const [afterContent, setAfterContent] = useState('"—Suffix"');

    const pseudoElements = [
        {
            id: 'before',
            title: '::before',
            icon: PlusCircle,
            color: 'text-blue-600',
            description: 'Creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content, like an icon or a text prefix.',
            syntaxCode: `p::before {\n  content: "Note: ";\n  font-weight: bold;\n}`,
        },
        {
            id: 'after',
            title: '::after',
            icon: CircleDot,
            color: 'text-green-600',
            description: 'Creates a pseudo-element that is the last child of the selected element. Perfect for adding decorative elements, tooltips, or a text suffix.',
            syntaxCode: `a::after {\n  content: " ↗";\n}`,
        },
        {
            id: 'first-letter',
            title: '::first-letter',
            icon: Type,
            color: 'text-red-600',
            description: 'Selects the first letter of the first line of a block-level element. Ideal for creating decorative drop caps.',
            syntaxCode: `p::first-letter {\n  font-size: 200%;\n  color: #8b5cf6;\n}`,
        },
        {
            id: 'selection',
            title: '::selection',
            icon: Highlighter,
            color: 'text-orange-600',
            description: 'Applies styles to the part of a document that has been highlighted by the user (e.g., by clicking and dragging the mouse across text).',
            syntaxCode: `::selection {\n  background-color: #fde047;\n  color: black;\n}`,
        },
    ];

    const styleTag = `
      .demo-box::before {
        content: ${beforeContent || '""'};
        position: absolute;
        top: -10px;
        left: -10px;
        background-color: #38bdf8;
        color: white;
        padding: 2px 8px;
        border-radius: 99px;
        font-size: 12px;
        font-weight: bold;
      }
      .demo-box::after {
        content: ${afterContent || '""'};
        position: absolute;
        bottom: -10px;
        right: -10px;
        background-color: #4ade80;
        color: white;
        padding: 2px 8px;
        border-radius: 99px;
        font-size: 12px;
        font-weight: bold;
      }
      .selection-demo::selection {
        background-color: #fde047;
        color: #1e293b;
      }
    `;
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 dark:from-slate-900 dark:via-teal-900/10 dark:to-slate-900">
      <style>{styleTag}</style>
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 mb-6 leading-tight">
            CSS Pseudo-elements
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Styling virtual parts of an element that aren't in the HTML, like prefixes, suffixes, and text selections.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Four Key Pseudo-elements
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {pseudoElements.map((item) => (
              <LessonPropertyCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">::before & ::after Controls</h4>
                    
                    <div className="space-y-2">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">`::before` content:</label>
                        <input type="text" value={beforeContent} onChange={(e) => setBeforeContent(e.target.value)} placeholder='"Quote: "' className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 outline-none font-mono" />
                    </div>
                     <div className="space-y-2">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">`::after` content:</label>
                        <input type="text" value={afterContent} onChange={(e) => setAfterContent(e.target.value)} placeholder='"—Author"' className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-500/50 focus:border-green-500 outline-none font-mono" />
                    </div>
                    
                    <InteractiveCodeBlock 
                        code={`/* Live CSS Output */\n.demo-box::before {\n  content: ${beforeContent || '""'};\n}\n.demo-box::after {\n  content: ${afterContent || '""'};\n}`}
                        title="Live CSS Output"
                    />
                </div>

                <div className="space-y-8">
                    <div className="relative p-4 h-48 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                        <div className="demo-box relative bg-indigo-600 text-white p-6 rounded-lg shadow-lg font-semibold text-center w-48">
                            Main Element
                        </div>
                    </div>
                     <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">::selection Demo</h4>
                        <p className="selection-demo p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl text-slate-700 dark:text-slate-300">
                            Highlight this text with your mouse to see the custom `::selection` style. The background and text color will change only for the part you select.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Pseudo-elements Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now add decorative and meaningful content to your pages without touching the HTML, keeping your code clean and powerful.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssPseudoElements;
