import React, { useState } from 'react';
import { BookOpen, Target, Code, Lightbulb, CheckCircle, ArrowRight, Sparkles, Layers, Palette, LayoutGrid, Box, Clock, Smartphone, Zap } from 'lucide-react';

const CssIntroduction = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // --- Helper Components copied and adapted from the reference design ---

  // Interactive Code Preview Component (adapted for HTML/CSS example)
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
                  // Simplified highlighting based on the CSS Syntax reference
                  if (part.match(/^(h1|p|\.container)$/)) {
                    return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML Tags/Selectors
                  }
                  if (part.match(/^(color|text-align|font-family|font-size|style)$/)) {
                    return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties/HTML Attributes
                  }
                  if (['{', '}', ':', ';'].includes(part)) {
                    return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                  }
                  if (part.match(/^(#[0-9a-fA-F]+|center|Poppins|sans-serif|\d+px|555)$/)) {
                    return <span key={j} className="text-emerald-400">{part}</span>; // Values
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

  // Enhanced Card Component with Animations (FeatureCard equivalent)
  const CourseTopicCard = ({ title, icon: Icon, color, children, index }) => (
    <div
      className={`relative p-8 rounded-3xl bg-white dark:bg-slate-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transform transition-all duration-500 border-2 ${
        color.replace('text-', 'border-')}/20 hover:${color.replace('text-', 'border-')}/40`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-full blur-2xl" />
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${
        color.includes('indigo') ? 'from-indigo-500/20 to-indigo-600/20' :
        color.includes('teal') ? 'from-teal-500/20 to-teal-600/20' :
        color.includes('red') ? 'from-red-500/20 to-red-600/20' :
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

  // Data for "What You'll Learn" section
  const learningTopics = [
    { title: "CSS Fundamentals", icon: Code, color: "text-indigo-600", desc: "Selectors, properties, values, and how CSS connects with HTML." },
    { title: "Colors, Fonts, & Text", icon: Palette, color: "text-teal-600", desc: "How to make your content visually appealing using modern color models." },
    { title: "The Box Model", icon: Box, color: "text-red-500", desc: "Mastering margins, borders, padding, and layout control for every element." },
    { title: "Positioning & Display", icon: Zap, color: "text-orange-500", desc: "Placing elements exactly where you need them using display and positioning properties." },
    { title: "Flexbox & Grid", icon: LayoutGrid, color: "text-blue-600", desc: "Modern layout systems to build complex, responsive page structures easily." },
    { title: "Transitions & Animations", icon: Clock, color: "text-purple-600", desc: "Adding life and smooth motion to your webpage using keyframes." },
    { title: "Responsive Design", icon: Smartphone, color: "text-green-600", desc: "Making your site mobile-first and adaptive across all screen sizes (Media Queries)." },
    { title: "Real-world Projects", icon: Layers, color: "text-yellow-600", desc: "You'll build mini projects along the way to practice and build your portfolio." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section - Welcome */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-pink-600/10 animate-pulse" />
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-2xl mb-8">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mb-6 leading-tight">
            Master CSS: From Basics to Advanced Styling
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Welcome to your complete guide to understanding how websites get their beautiful designs, layouts, and animations.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm shadow">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Clear, Practical, and Creative</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm shadow">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Beginner to Professional</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Why Learn CSS Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Lightbulb className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Why Learn CSS?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <CourseTopicCard 
              title="The Language of Design" 
              icon={Layers} 
              color="text-indigo-600" 
              index={100}
            >
              <p>
                <strong>CSS (Cascading Style Sheets)</strong> is the language of design on the web. It controls everything from colors and fonts to page layouts and animations.
              </p>
              <p>
                Every website—Google, Netflix, or your favorite portfolio—uses CSS to look good and function smoothly. You'll learn how to turn plain HTML pages into **stunning, responsive, and professional-looking websites**.
              </p>
            </CourseTopicCard>
            
            <CourseTopicCard 
              title="Quick Example: CSS Magic ✨" 
              icon={Zap} 
              color="text-teal-600" 
              index={101}
            >
              <p>
                Without CSS, this simple HTML looks plain: <code>&lt;h1&gt;Hello!&lt;/h1&gt;&lt;p&gt;Welcome.&lt;/p&gt;</code>
              </p>
              <p className="mb-4">
                Now, let's add the CSS magic to instantly make it modern and readable:
              </p>
              <InteractiveCodeBlock 
                code={`h1 {\n  color: #007bff;\n  text-align: center;\n}\np {\n  color: #555;\n  font-size: 18px;\n}`} 
                title="CSS Magic"
              />
            </CourseTopicCard>
          </div>
        </section>

        {/* Detailed Course Topics Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Target className="w-8 h-8 mr-4 text-pink-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              What You'll Learn: The Curriculum
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningTopics.map((topic, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center mb-3">
                  <topic.icon className={`w-6 h-6 mr-3 ${topic.color}`} />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{topic.title}</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{topic.desc.split(/(\*\*.*?\*\*)/g).map((part, i) => (
                    // Simple regex replacement for bolding concepts
                    part.startsWith('**') && part.endsWith('**') ? 
                    <strong key={i}>{part.slice(2, -2)}</strong> : 
                    <span key={i}>{part}</span>
                ))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Goals and Next Step Callout */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Course Goal: Become a Pro
            </h3>
            <div className="max-w-2xl mx-auto space-y-3 mt-6">
                <p className="text-xl text-white/90 font-semibold flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-300" /> Build responsive, professional websites from scratch.
                </p>
                <p className="text-xl text-white/90 font-semibold flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-300" /> Understand every CSS concept clearly and confidently.
                </p>
                <p className="text-xl text-white/90 font-semibold flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-300" /> Use CSS confidently for personal or client projects.
                </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssIntroduction;
