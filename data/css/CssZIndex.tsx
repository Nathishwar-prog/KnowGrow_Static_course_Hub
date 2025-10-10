import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Layers, Lightbulb, SortAsc, Eye, AlertTriangle, HelpCircle
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

// Interactive Code Preview Component (Syntax Highlighting)
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
                if (part.match(/^(div|\.[\w-]+|#[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                if (part.match(/^(z-index|position|background-color|top|left|transform)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                if (['{', '}', ':', ';'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                if (part.match(/^(#[0-9a-fA-F]+|absolute|relative|static|\d+px?|[\d\.]+(em|rem)?)$/)) {
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

// Lesson Property Card Component - Refactored to avoid syntax error
const LessonPropertyCard = (props) => {
  const { title, icon, color, description, syntaxCode, keyBenefit } = props;
  const Icon = icon; // Assign to a capitalized variable for JSX

  return (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          'from-purple-500/20 to-purple-600/20'
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

      <div className="mt-6 space-y-4">
        {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                **Key Tip:** {keyBenefit}
            </p>
        </div>
      </div>
    </div>
  );
};
// --- End Reusable Components ---

const CssZIndex = () => {
  const [redZ, setRedZ] = useState(1);
  const [blueZ, setBlueZ] = useState(2);
  const [greenZ, setGreenZ] = useState(3);
  const [usePositioning, setUsePositioning] = useState(true);

  const coreProperties = [
    {
      title: 'z-index Property',
      icon: SortAsc,
      color: 'text-green-600',
      description: 'Specifies the **stack order** of an element. An element with a greater stack order is always in front of an element with a lower stack order.',
      syntaxCode: `div {\n  z-index: 10;\n}`,
      keyBenefit: '`z-index` only works on elements that have a `position` value other than `static` (the default).',
    },
    {
      title: 'Stacking Context',
      icon: Layers,
      color: 'text-red-600',
      description: 'A "stacking context" is a three-dimensional conceptualization of HTML elements along an imaginary **z-axis**. It is formed on any element with a `position` value (`relative`, `absolute`, `fixed`, `sticky`) and a `z-index` value other than `auto`.',
      syntaxCode: `.parent {\n  position: relative;\n  z-index: 1; /* Creates a new stacking context */\n}`,
      keyBenefit: 'Child elements inside a stacking context are stacked relative to that parent, not the global page.',
    },
  ];

  const getFeedbackMessage = () => {
    if (!usePositioning) {
      return "Without positioning, `z-index` is ignored. Elements stack in their default DOM order (Green > Blue > Red).";
    }
    
    const sorted = [
      { name: 'Red', z: redZ },
      { name: 'Blue', z: blueZ },
      { name: 'Green', z: greenZ },
    ].sort((a, b) => a.z - b.z);

    const order = sorted.map(item => item.name).join(' < ');
    return `Stacking Order: The element with the highest \`z-index\` is on top. Current order (bottom to top): ${order}.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-indigo-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl mb-8">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Z-Index
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Mastering the third dimension of web design: the stacking order of elements.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Concepts */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Stacking Context
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard
                key={index}
                title={prop.title}
                icon={prop.icon}
                color={prop.color}
                description={prop.description}
                syntaxCode={prop.syntaxCode}
                keyBenefit={prop.keyBenefit}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-12">
              <Eye className="w-8 h-8 mr-4 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Stacking Sandbox
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Controls */}
                <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Element Controls</h4>
                    
                    <div className="space-y-4 pt-4">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Red Box (z-index: {redZ})</label>
                        <input type="range" min="0" max="10" value={redZ} onChange={e => setRedZ(parseInt(e.target.value))} className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-red-900/50" />
                        
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Blue Box (z-index: {blueZ})</label>
                        <input type="range" min="0" max="10" value={blueZ} onChange={e => setBlueZ(parseInt(e.target.value))} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-blue-900/50" />

                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Green Box (z-index: {greenZ})</label>
                        <input type="range" min="0" max="10" value={greenZ} onChange={e => setGreenZ(parseInt(e.target.value))} className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-green-900/50" />
                    </div>

                    <div className="flex items-center space-x-3 pt-4">
                        <input type="checkbox" id="positioning" checked={usePositioning} onChange={() => setUsePositioning(!usePositioning)} className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                        <label htmlFor="positioning" className="font-semibold text-slate-700 dark:text-slate-300">Enable Positioning (`position: absolute`)</label>
                    </div>

                    <InteractiveCodeBlock 
                        code={`.red   { z-index: ${redZ}; }\n.blue  { z-index: ${blueZ}; }\n.green { z-index: ${greenZ}; }`}
                        title="Live CSS Output"
                    />
                </div>

                {/* Live Visualization */}
                <div className="flex flex-col">
                    <div className="relative w-full h-72 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center p-4">
                        {/* Red Box */}
                        <div className="w-40 h-40 bg-red-500 rounded-lg text-white font-bold flex items-center justify-center shadow-lg transform transition-all" style={{ position: usePositioning ? 'absolute' : 'static', zIndex: redZ, top: 40, left: 40 }}>Red</div>
                        {/* Blue Box */}
                        <div className="w-40 h-40 bg-blue-500 rounded-lg text-white font-bold flex items-center justify-center shadow-lg transform transition-all" style={{ position: usePositioning ? 'absolute' : 'static', zIndex: blueZ, top: 80, left: 80 }}>Blue</div>
                        {/* Green Box */}
                        <div className="w-40 h-40 bg-green-500 rounded-lg text-white font-bold flex items-center justify-center shadow-lg transform transition-all" style={{ position: usePositioning ? 'absolute' : 'static', zIndex: greenZ, top: 120, left: 120 }}>Green</div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/40 rounded-xl text-center font-semibold text-yellow-800 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700">
                        <p>{getFeedbackMessage().replace(/ > /g, ' &gt; ')}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Stacking Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand how to control element depth and create complex, layered interfaces.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssZIndex;

