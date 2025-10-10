import React, { useState } from 'react';
import { BookOpen, Code, CheckCircle, ArrowRight, Bug, ZapOff, Layers, AlertTriangle, Maximize, Minus, Tag, MessageSquare } from 'lucide-react';

const CssErrors = () => {
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
                  // Enhanced Syntax Highlighting, with emphasis on common error spots
                  if (part.includes('/*') || part.includes('*/')) {
                    return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>; // Comments
                  }
                  if (part.match(/^(p|h1|div|\.[\w-]+|#[\w-]+|\*|color|font-size|background-color|margin|padding|width|transition|link|rel|href|style)$/)) {
                    return <span key={j} className="text-cyan-400 font-semibold">{part}</span>; // Selectors/Properties
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|\d+px|red|white|bold|none|absolute|block|0.3s|'NEW'|stylesheet|1.5rem|auto|center)$/)) {
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

  // General Error Card Component (Highly Stylized, designed for vertical stack)
  const ErrorCard = ({ title, icon: Icon, color, description, problemCode, fixedCode, badge }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 h-full">
      {badge && (
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
          {badge}
        </div>
      )}
      
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
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

      {/* Code Comparison Block */}
      <div className="grid lg:grid-cols-2 gap-4 mt-6">
          <div>
              <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2 flex items-center"><Minus className="w-4 h-4 mr-2"/> Problem Code</h4>
              <InteractiveCodeBlock code={problemCode} title="INCORRECT" style={{ border: '2px solid #ef4444' }}/>
          </div>
          <div>
              <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2 flex items-center"><CheckCircle className="w-4 h-4 mr-2"/> Fixed Code</h4>
              <InteractiveCodeBlock code={fixedCode} title="CORRECT" style={{ border: '2px solid #10b981' }}/>
          </div>
      </div>
    </div>
  );
  
  // --- End Helper Components ---

  // Data for Common Errors
  const commonErrors = [
    {
      title: 'Missing Punctuation',
      icon: Minus,
      color: 'text-red-600',
      description: 'The most common error! Forgetting a **semicolon (;) at the end of a declaration** will break the *next* declaration. Forgetting the closing **curly brace (})** breaks the rest of the stylesheet.',
      problemCode: `.nav {\n  width: 100%\n  background-color: blue;\n}`,
      fixedCode: `.nav {\n  width: 100%;\n  background-color: blue;\n}`
    },
    {
      title: 'Invalid or Misspelled Property/Value',
      icon: AlertTriangle,
      color: 'text-orange-600',
      description: 'Using an **incorrect property name** (e.g., `backgorund-color`) or an **invalid value** (e.g., `font-size: big`) causes the browser to ignore the rule entirely. Always check MDN documentation for correct syntax.',
      problemCode: `.header {\n  bakground: red;\n  padding-left: 20;\n}`,
      fixedCode: `.header {\n  background: red;\n  padding-left: 20px;\n}`
    },
    {
      title: 'Specificity & Cascade Issues',
      icon: Tag,
      color: 'text-purple-600',
      description: 'Your styles appear to be ignored even when syntax is correct. This is usually due to a **higher-specificity selector** (e.g., an ID or a nested class) overriding your rule. Debugging requires checking the **Cascade** order.',
      problemCode: `/* Low Specifity */\np { color: red; }\n\n/* Higher Specifity Takes Precedence */\n#main-content p { color: blue; }`,
      fixedCode: `/* You must match the specificity to override */\n#main-content p { color: green; }`
    },
  ];

  // Data for Debugging Tools
  const debuggingTools = [
    {
      title: 'The Inspector Tab (Styles Panel)',
      icon: Maximize,
      color: 'text-indigo-600',
      description: 'The primary tool. Select any element to see the **Box Model** and all applied styles. Rules that are being **overridden** are shown with a strikethrough, immediately revealing specificity conflicts.',
    },
    {
      title: 'The Console Tab',
      icon: MessageSquare,
      color: 'text-teal-600',
      description: 'Sometimes the console will explicitly report errors like **"Failed to load resource"** (e.g., if an external CSS file link is broken) or warnings about unsupported properties, which helps quickly pinpoint linking issues.',
    },
    {
      title: 'The Computed Tab',
      icon: ZapOff,
      color: 'text-red-600',
      description: 'Shows the final, **computed value** for every CSS property after the browser has resolved all cascading and inheritance issues. This is essential for verifying sizes and colors that might be inherited or calculated.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 shadow-2xl mb-8">
            <Bug className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 mb-6 leading-tight">
            CSS Errors: Debugging & Prevention
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Every error is a lesson. Learn to quickly find out why your styles aren't working and fix them like a pro.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <ZapOff className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Fast Diagnostics</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Syntax Integrity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Common Errors & Fixes (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <AlertTriangle className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Most Common CSS Errors
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Almost all CSS issues fall into one of these three categories. Knowing the problem type is the first step to the solution.
          </p>

          <div className="space-y-12">
            {commonErrors.map((error, index) => (
              <ErrorCard
                key={index}
                title={error.title}
                icon={error.icon}
                color={error.color}
                description={error.description}
                problemCode={error.problemCode}
                fixedCode={error.fixedCode}
                badge={error.title.includes('Specificity') ? 'ADVANCED' : undefined}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Debugging Strategy (Grid Layout) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Layers className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: The Debugging Strategy
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Never guess! Use the **Browser Developer Tools** (F12 or Ctrl+Shift+I) as your diagnostic workstation to find the true source of the problem.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {debuggingTools.map((tool, index) => (
                <div key={index} className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border-t-4 border-indigo-400 hover:border-indigo-600 transition-all duration-300">
                    <tool.icon className={`w-10 h-10 ${tool.color} mb-4`} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{tool.title}</h3>
                    <p className="text-base text-slate-600 dark:text-slate-300">{tool.description}</p>
                </div>
            ))}
          </div>
        </section>
        
        {/* Error Prevention Best Practice */}
        <div className="p-8 bg-green-50 dark:bg-green-900/40 rounded-3xl border border-green-300 dark:border-green-700 shadow-lg flex items-start space-x-6 mb-20">
            <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
            <div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">
                    Error Prevention: Validation and Linting
                </h3>
                <p className="text-lg text-green-700 dark:text-green-400 leading-relaxed">
                    The best error is the one you never make. Use modern **code editors (VS Code, etc.)** which include built-in **linters** to check your CSS syntax *as you type*. This instantly highlights missing semicolons, unknown properties, and formatting issues before the browser even sees the code.
                </p>
            </div>
        </div>

        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Code Debugging Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the knowledge to fix any issue, from simple typos to complex cascade conflicts.
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

export default CssErrors;
