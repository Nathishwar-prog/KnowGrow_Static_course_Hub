import React, { useState } from 'react';
import { Target, Code, CheckCircle, ArrowRight, FileText, Globe, Code as CodeIcon, Tag, Palette, Minus, Users, Layers, BookOpen, Box, Maximize } from 'lucide-react';

const CssHowTo = () => {
  const [activeTab, setActiveTab] = useState(0);

  // --- Helper Components copied from reference for visual consistency ---

  // Interactive Code Preview Component (Adapted for HTML/CSS)
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
                  // Enhanced Syntax Highlighting
                  if (part.match(/^(p|h1|div|ul|a|input|body|html|\.[\w-]+|#[\w-]+|\*|::before|::after|:root|--main-color|box-sizing|border-box)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // Selectors/Variables/Box Model Properties
                  }
                  if (part.match(/^(color|font-size|background-color|margin|padding|width|content|display|transition|link|rel|href|style|var|:root)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // Properties/HTML Attributes
                  }
                  if (['{', '}', ':', ';', '>', '+', '~', '[', ']', '=', '^', '|', '*', '$'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation/Combinators/Attribute symbols
                  }
                   if (part.includes('/*') || part.includes('*/')) {
                    return <span key={j} className="text-slate-500 italic">{part}</span>; // Comments
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
  const HowToCard = ({ title, icon: Icon, color, description, code, language = 'css', badge }) => (
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
  
  // Custom Box Model Layer Component
  const BoxModelLayer = ({ title, description, color, size }) => (
    <div className={`p-4 rounded-lg border-2 ${color} mb-3`} style={{ width: size }}>
      <p className={`text-lg font-bold ${color} mb-1`}>{title}</p>
      <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );

  // --- End Helper Components ---

  // Data for Implementation Methods
  const implementationMethods = [
    { 
      title: "External CSS (Best Practice)", 
      icon: Globe, 
      color: "text-green-600",
      description: "Styles are stored in a separate **.css file** and linked in the HTML `<head>`. This is highly recommended for **organization and caching**.",
      code: `<!-- In your HTML file -->\n<link rel="stylesheet" href="styles.css">`,
      language: 'html'
    },
    { 
      title: "Internal CSS", 
      icon: FileText, 
      color: "text-purple-600",
      description: "Styles are placed inside a **<style> tag** within the HTML `<head>`. Useful for small, single-page documents or specific page styling.",
      code: `<style>\n  body {\n    margin: 0;\n    font-family: sans-serif;\n  }\n</style>`,
      language: 'html'
    },
    { 
      title: "Inline CSS (Avoid When Possible)", 
      icon: Minus, 
      color: "text-red-600",
      description: "Styles applied directly to an element using the **style attribute**. Highly discouraged as it sacrifices **readability and maintenance**.",
      code: `<p style="color: blue; font-size: 16px;">Hello World</p>`,
      language: 'html'
    }
  ];

  // Data for Essential Practices
  const essentialPractices = [
    {
      title: 'How to Comment',
      icon: CodeIcon,
      color: 'text-teal-600',
      description: 'Use comments to explain complex code, debug, or temporarily disable rules. Comments start with **`/*` and end with `*/`**.',
      code: `/* \n This is a multi-line comment.\n It explains the main section styling.\n */\n\n.section {\n  /* Single-line comment */\n  padding: 40px;\n}`
    },
    {
      title: 'How to Structure a Rule',
      icon: Tag,
      color: 'text-orange-600',
      description: 'A rule consists of a **Selector** (what to target), a **Property** (what to change), and a **Value** (how to change it).',
      code: `selector { \n  property: value; \n  property-two: value-two; \n}`
    },
    {
      title: 'How to Use Variables (Custom Properties)',
      icon: Palette,
      color: 'text-pink-600',
      description: 'Define reusable global values using **Custom Properties** (prefixed with `--`). They are essential for modern theming and consistency.',
      code: `:root {\n  --primary-color: #6366f1;\n}\n\n.button {\n  background-color: var(--primary-color);\n}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-2xl mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            CSS How-To: Practical Implementation
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A quick reference guide for setting up, structuring, and maintaining clean CSS code.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Quick Reference</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-700/80 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Best Practices</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: How to Apply CSS (Linking Methods) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Globe className="w-8 h-8 mr-4 text-green-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: How to Apply CSS to HTML
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            There are three ways to link styles to your document. Understanding the trade-offs is key to writing scalable code.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {implementationMethods.map((method, index) => (
              <HowToCard
                key={index}
                title={method.title}
                icon={method.icon}
                color={method.color}
                description={method.description}
                code={method.code}
                language={method.language}
                badge={method.title.includes('External') ? 'RECOMMENDED' : undefined}
              />
            ))}
          </div>
        </section>

        {/* Section 2: Essential Code Practices */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Layers className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Essential Code Practices
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Effective styling relies on clean, documented code and modern features like custom properties.
          </p>

          <div className="space-y-12">
            {essentialPractices.map((practice, index) => (
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
          </div>
        </section>
        
        {/* --- NEW Section 3: The Box Model --- */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Box className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: The Box Model: Foundation of All Layouts
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Every single HTML element on a webpage is a rectangular box. Understanding the **four layered components** of this model is critical for accurate spacing and sizing.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
            {/* Box Model Visual Breakdown (Conceptual) */}
            <div className="p-8 bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-inner flex flex-col items-center">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Four Layers (Outside-In)</h4>
              <div className="w-full max-w-sm flex flex-col items-center border border-dashed border-slate-400 p-2">
                <BoxModelLayer 
                  title="Margin"
                  description="The transparent outer spacing that separates the box from adjacent elements (doesn't have a background)."
                  color="border-red-500 text-red-500"
                  size="95%"
                />
                <BoxModelLayer 
                  title="Border"
                  description="The line that visually wraps the padding and content."
                  color="border-yellow-500 text-yellow-600"
                  size="85%"
                />
                <BoxModelLayer 
                  title="Padding"
                  description="Inner spacing between the border and the actual content (takes the content's background color)."
                  color="border-green-500 text-green-600"
                  size="75%"
                />
                <BoxModelLayer 
                  title="Content"
                  description="The area where your actual text, images, or media resides (controlled by width/height)."
                  color="border-blue-500 text-blue-600"
                  size="65%"
                />
              </div>
            </div>

            {/* Box-Sizing and Code Example */}
            <div className="space-y-6">
              <HowToCard
                title="The Box-Sizing Solution"
                icon={Maximize}
                color="text-indigo-600"
                badge="CRITICAL"
                description="By default, `width` and `height` only measure the **Content** area. This often leads to layout breaking when you add padding or borders. The property **`box-sizing: border-box`** changes this: `width` now includes padding and border, making layout prediction easy and intuitive. This should be a global setting for all modern projects."
                code={`/* Best Practice for all projects */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}`}
              />
            </div>
          </div>
        </section>

        {/* Success Message (Updated) */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Foundation Complete! 🎉
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've now mastered CSS implementation and the fundamental **Box Model**. You're ready for advanced layout systems like Flexbox and Grid!
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

export default CssHowTo;
