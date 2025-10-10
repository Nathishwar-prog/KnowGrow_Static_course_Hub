import React, { useState } from 'react';
import { BookOpen, Target, Code, Key, LayoutGrid, Zap, AlignLeft, FileText, Globe, Tag, Hash, Minus, CheckCircle, ArrowRight, Sparkles, Layers, Palette } from 'lucide-react';

const CssSyntax = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Interactive Code Preview Component
  const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
    <div className="relative group">
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
                {line.split(/(\s+|[{}():;])/g).map((part, j) => {
                  if (part.match(/^(p|h1|div|\.[\w-]+|#[\w-]+|body|html)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                  }
                  if (part.match(/^(color|font-size|background-color|margin|padding|width|height|border|font-weight)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>;
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|\d+px|red|white|bold|none)$/)) {
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

  // Enhanced Card Component with Animations
  const FeatureCard = ({ title, icon: Icon, color, children, index, isHovered }) => (
    <div
      className={`relative p-8 rounded-3xl bg-white dark:bg-slate-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform transition-all duration-500 border-2 ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      } ${color.replace('text-', 'border-')}/20 hover:${color.replace('text-', 'border-')}/40`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-full blur-2xl" />
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${
        color.includes('indigo') ? 'from-indigo-500/20 to-indigo-600/20' :
        color.includes('teal') ? 'from-teal-500/20 to-teal-600/20' :
        color.includes('purple') ? 'from-purple-500/20 to-purple-600/20' :
        'from-violet-500/20 to-purple-600/20'
      } mb-6`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
      <div className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );

  // Syntax Part Component with Visual Enhancement
  const SyntaxPart = ({ title, icon: Icon, description, color, delay }) => (
    <div 
      className="group relative p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
            color.includes('green') ? 'from-green-500/20 to-green-600/20' :
            color.includes('teal') ? 'from-teal-500/20 to-teal-600/20' :
            color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
            color.includes('purple') ? 'from-purple-500/20 to-purple-600/20' :
            color.includes('red') ? 'from-red-500/20 to-red-600/20' :
            'from-orange-500/20 to-orange-600/20'
          } flex items-center justify-center mr-4`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
        </div>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );

  // Selector Type Card with Enhanced Visuals
  const SelectorCard = ({ title, icon: Icon, color, description, code, badge }) => (
    <div className="group relative">
      {badge && (
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
          {badge}
        </div>
      )}
      <div className="p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500 h-full">
        <div className="flex items-center mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
            color.includes('red') ? 'from-red-500/20 to-red-600/20' :
            color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
            'from-green-500/20 to-green-600/20'
          } flex items-center justify-center mr-4`}>
            <Icon className={`w-7 h-7 ${color}`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{description}</p>
        {code && <InteractiveCodeBlock code={code} />}
      </div>
    </div>
  );

  // Tab Navigation Component
  const TabButton = ({ label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-105' 
          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm lg:text-base">{label}</span>
    </button>
  );

  const syntaxParts = [
    { title: "Selector", icon: Tag, color: "text-green-600", description: "Targets the HTML element(s) you want to style (e.g., h1, .button, #logo)" },
    { title: "Declaration Block", icon: Layers, color: "text-teal-600", description: "Contains style rules, wrapped in curly braces {}" },
    { title: "Property", icon: Key, color: "text-blue-600", description: "The style characteristic to change (e.g., color, font-size)" },
    { title: "Value", icon: Palette, color: "text-purple-600", description: "How the property should be changed (e.g., red, 24px)" },
    { title: "Punctuation", icon: Minus, color: "text-red-600", description: "Colon (:) separates property from value, semicolon (;) ends declaration" },
    { title: "Comments", icon: FileText, color: "text-orange-600", description: "/* Explanatory text */ ignored by browsers" }
  ];

  const implementationMethods = [
    { 
      title: "External CSS", 
      icon: FileText, 
      color: "text-teal-500",
      badge: "RECOMMENDED",
      description: "Separate .css file linked in HTML - keeps code clean and reusable",
      code: `<!-- In your HTML file -->\n<link rel="stylesheet" href="styles.css">`
    },
    { 
      title: "Internal CSS", 
      icon: Code, 
      color: "text-pink-500",
      description: "Styles in <style> tag within HTML <head> - good for single pages",
      code: `<style>\n  body {\n    margin: 0;\n    padding: 0;\n  }\n</style>`
    },
    { 
      title: "Inline CSS", 
      icon: Minus, 
      color: "text-orange-500",
      description: "Direct styling on elements - avoid when possible",
      code: `<p style="color: red;">Hello!</p>`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-pink-600/10 animate-pulse" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-2xl mb-8">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            CSS Syntax Mastery
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Learn the fundamental structure that powers every stylesheet
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Interactive Learning</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Core Anatomy Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              The Anatomy of CSS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard 
              title="Understanding CSS Rules" 
              icon={Code} 
              color="text-indigo-600"
              index={0}
              isHovered={hoveredCard === 0}
            >
              <p>A CSS rule is the foundation of styling. It connects HTML elements with visual properties through a simple yet powerful syntax.</p>
              <div className="mt-6 p-4 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl">
                <p className="font-mono text-lg font-bold text-violet-700 dark:text-violet-300">
                  selector {"{"} property: value; {"}"}
                </p>
              </div>
            </FeatureCard>

            <FeatureCard 
              title="Live Example" 
              icon={LayoutGrid} 
              color="text-teal-600"
              index={1}
              isHovered={hoveredCard === 1}
            >
              <p>See how a real CSS rule targets and styles paragraph elements:</p>
              <InteractiveCodeBlock 
                code={`p {\n  color: #333;\n  font-size: 18px;\n  line-height: 1.6;\n}`} 
                title="Basic Rule"
              />
            </FeatureCard>
          </div>

          {/* Syntax Parts Grid */}
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <Layers className="w-7 h-7 mr-3 text-violet-600" />
            The Six Essential Parts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syntaxParts.map((part, index) => (
              <SyntaxPart key={index} {...part} delay={index * 100} />
            ))}
          </div>
        </section>

        {/* Selectors Section with Tab Navigation */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Target className="w-8 h-8 mr-4 text-yellow-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Mastering Selectors
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <SelectorCard
              title="Type Selector"
              icon={Tag}
              color="text-red-500"
              description="Targets all instances of an HTML element"
              code={`h1 {\n  font-size: 2.5rem;\n  font-weight: bold;\n}`}
            />
            <SelectorCard
              title="Class Selector"
              icon={Hash}
              color="text-blue-500"
              badge="MOST USED"
              description="Targets elements with a specific class attribute (.className)"
              code={`.button {\n  padding: 12px 24px;\n  background: #6366f1;\n  color: white;\n}`}
            />
            <SelectorCard
              title="ID Selector"
              icon={Hash}
              color="text-green-500"
              description="Targets a single unique element (#idName)"
              code={`#header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}`}
            />
          </div>
        </section>

        {/* Implementation Methods with Tabs */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Globe className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Implementation Methods
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {implementationMethods.map((method, index) => (
              <TabButton
                key={index}
                label={method.title}
                icon={method.icon}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-6">
              {implementationMethods[activeTab].badge && (
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full mr-4">
                  {implementationMethods[activeTab].badge}
                </span>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {implementationMethods[activeTab].title}
              </h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {implementationMethods[activeTab].description}
            </p>
            <InteractiveCodeBlock 
              code={implementationMethods[activeTab].code} 
              language="html"
              title="Example Code"
            />
          </div>
        </section>

        {/* Success Message */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Foundation Complete! 🎉
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've mastered CSS syntax fundamentals. Ready to explore the Box Model and advanced styling techniques!
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssSyntax;