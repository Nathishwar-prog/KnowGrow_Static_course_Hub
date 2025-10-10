import React, { useState } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, MessageSquare, Layers, FileText, Zap, Minus, AlignLeft, Tag } from 'lucide-react';

const CssComments = () => {
  const [activeTab, setActiveTab] = useState(0);

  // --- Helper Components adapted for visual consistency ---

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
                {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*])/g).map((part, j) => {
                  // Enhanced Syntax Highlighting, with special emphasis on comments
                  if (part.includes('/*') || part.includes('*/')) {
                    return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>; // Comments are muted/italic
                  }
                  if (part.match(/^(p|h1|div|\.[\w-]+|#[\w-]+|\*)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors
                  }
                  if (part.match(/^(color|font-size|background-color|margin|padding|width|transition|link|rel|href|style)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/Attributes
                  }
                  if (['{', '}', ':', ';', '>', '+', '~', '[', ']', '=', '^', '|', '*', '$'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|\d+px|red|white|bold|none|absolute|block|0.3s|'NEW'|stylesheet)$/)) {
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

  // General How-To Card Component (Highly Stylized)
  const CommentCard = ({ title, icon: Icon, color, description, code, language = 'css', badge }) => (
    <div className="group relative">
      {badge && (
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
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
        {code && <InteractiveCodeBlock code={code} language={language} />}
      </div>
    </div>
  );
  
  // --- End Helper Components ---

  // Data for Core Concepts
  const coreConcepts = [
    {
      title: 'The Purpose of Comments',
      icon: AlignLeft,
      color: 'text-indigo-600',
      description: 'Comments are ignored by the browser but are crucial for **human readability**. They help organize large files, explain complex logic to collaborators (or your future self), and improve code maintenance.',
      code: `/* \n This entire block of CSS is for the navigation bar.\n It ensures proper stacking order on mobile screens.\n */`
    },
    {
      title: 'The Single CSS Syntax',
      icon: Tag,
      color: 'text-pink-600',
      description: 'CSS uses only one comment style: the **C-style block comment** (`/* ... */`). This format can span multiple lines and can be used to comment out properties or entire rule blocks.',
      code: `/* Single Line Comment */\n\n.card {\n  background-color: white; /* Comment on a single line */\n  border: 1px solid gray;\n}`
    },
    {
      title: 'The Difference from HTML',
      icon: FileText,
      color: 'text-orange-600',
      badge: 'IMPORTANT',
      description: 'Do not use the HTML comment syntax (`<!-- Comment -->`) inside a CSS file. CSS only recognizes **`/* ... */`**. Using the wrong syntax will lead to parsing errors and broken styles.',
      code: `/* Correct CSS Comment */\n.sidebar { width: 300px; }\n\n<!-- Incorrect (Breaks CSS) -->\n/* .sidebar { width: 300px; } */`
    }
  ];

  // Data for Best Practices
  const bestPractices = [
    {
      title: 'Organize with Section Headers',
      icon: Layers,
      color: 'text-teal-600',
      description: 'Use large, multi-line comments to create clear, scannable **section headers** at the start of your stylesheet, separating major components (Layout, Typography, Components).',
      code: `/*\n=========================\n  SECTION: LAYOUT & GRID\n=========================\n*/\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}`
    },
    {
      title: 'Explain Complex Logic',
      icon: MessageSquare,
      color: 'text-purple-600',
      description: 'When using complex selectors, vendor prefixes, or performance hacks, always add a **brief comment** explaining the *why*, not just the *what*.',
      code: `/* Ensures GPU acceleration for smooth animation performance */\n.element {\n  transform: translateZ(0);\n  transition: transform 0.3s ease;\n}`
    },
    {
      title: 'Debugging: Temporary Disabling',
      icon: Zap,
      color: 'text-red-600',
      description: 'Comments are your **debugging best friend**. Temporarily wrap entire properties or rule sets in `/* ... */` to isolate a bug without deleting the code.',
      code: `.button {\n  padding: 10px 20px;\n  background: blue;\n  /* color: white; */\n  border-radius: 5px;\n}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-2xl mb-8">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            CSS Comments: Documentation & Debugging
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Writing clean, maintainable code starts with effective documentation.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Maintainability Focus</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Organized Code</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Concepts and Syntax */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Syntax and Foundational Rules
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Unlike many programming languages, CSS only provides a single method for commenting out code.
          </p>

          <div className="space-y-12">
            {coreConcepts.map((concept, index) => (
              <CommentCard
                key={index}
                title={concept.title}
                icon={concept.icon}
                color={concept.color}
                description={concept.description}
                code={concept.code}
                badge={concept.badge}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Professional Best Practices */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Layers className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Professional Practices for Commenting
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Learn the best ways to structure comments to make your stylesheets scalable and easy to navigate for any developer.
          </p>

          <div className="space-y-12">
            {bestPractices.map((practice, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-10 p-6 lg:p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-current/10 ${practice.color} mr-4`}>
                                <practice.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{practice.title}</h3>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{practice.description}</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Code Example</h4>
                        <InteractiveCodeBlock code={practice.code} title="CSS Code" />
                    </div>
                </div>
            ))}
            
            {/* Extended Best Practice: When NOT to Comment */}
            <div className="p-8 bg-red-50 dark:bg-red-900/40 rounded-3xl border border-red-300 dark:border-red-700 shadow-lg flex items-start space-x-6">
                <Minus className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-3">
                        When NOT to Comment (Self-Documenting Code)
                    </h3>
                    <p className="text-lg text-red-700 dark:text-red-400 leading-relaxed">
                        Avoid commenting on code that is **self-explanatory**. For example, do not write `/* Sets the color to blue */` above `color: blue;`. 
                        Focus on commenting the *why* (the intention or the solution), not the *what* (the syntax itself).
                    </p>
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
              Lesson Complete: Clean Code Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to document your stylesheets like a pro. Next, let's learn how to apply those styles with precision by mastering **CSS Selectors**.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssComments;
