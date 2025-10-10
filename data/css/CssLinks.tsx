import React from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Zap, Link, MousePointerClick, TrendingUp, Hand, Focus
} from 'lucide-react';

// --- Reusable UI Components ---

/**
 * A syntax-highlighted code block for displaying CSS and HTML.
 */
const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                // Comments and HTML tags are highlighted separately for combined examples
                if (part.includes('/*') || part.includes('*/') || part.match(/<!--.*?-->/)) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(a|\.[\w-]+|\&lt;a|\/a\&gt;)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML elements / Selectors
                }
                if (part.match(/^(color|text-decoration|font-weight|transition)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|none|underline|red|blue|0\.3s|ease)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // Values
                }
                return <span key={j} className="text-slate-300">{part}</span>; // Standard text
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

/**
 * A visually distinct card for explaining individual lesson properties/concepts.
 */
const LessonPropertyCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
  const Icon = icon;
  return (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-purple-500/20 to-purple-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? 
          <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
          <span key={i}>{part}</span>
        )}
      </p>

      <div className="mt-6 space-y-4">
        {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            <strong className="mr-1">Key Tip:</strong>{keyBenefit}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
function CssLinks() {

  const linkStates = [
    {
      title: ':link (Unvisited)',
      icon: Link,
      color: 'text-red-600',
      description: 'Styles the default, **unvisited** state of a hyperlink. This is the base appearance.',
      syntaxCode: `a:link {\n  color: #DC2626; /* Red */\n  text-decoration: underline;\n}`,
      keyBenefit: 'This state must be styled first to establish the default link appearance.',
    },
    {
      title: ':visited',
      icon: TrendingUp,
      color: 'text-purple-600',
      description: 'Styles links that the user has already **visited**. Browsers limit what can be styled here for privacy reasons (usually only color).',
      syntaxCode: `a:visited {\n  color: #9333EA; /* Purple */\n}`,
      keyBenefit: 'Provide a clear, subtle contrast to visited links, but keep the difference minimal for privacy.',
    },
    {
      title: ':hover',
      icon: MousePointerClick,
      color: 'text-green-600',
      description: 'Styles a link when the user’s **mouse hovers** over it. Used to provide immediate feedback.',
      syntaxCode: `a:hover {\n  color: #10B981; /* Green */\n  text-decoration: none;\n}`,
      keyBenefit: 'A change in appearance (color, removal of underline) strongly indicates interactivity.',
    },
    {
      title: ':active',
      icon: Hand,
      color: 'text-blue-600',
      description: 'Styles a link when it is **being clicked** (between mouse down and mouse up). Provides instant visual feedback.',
      syntaxCode: `a:active {\n  color: #3B82F6; /* Blue */\n  font-weight: bold;\n}`,
      keyBenefit: 'This state is very brief but confirms the click action to the user.',
    },
    {
      title: ':focus',
      icon: Focus,
      color: 'text-orange-600',
      description: 'Styles a link when it receives **keyboard focus** (e.g., via the Tab key). **CRUCIAL for accessibility.**',
      syntaxCode: `a:focus {\n  outline: 2px solid #F97316;\n  background-color: #FEF3C7;\n}`,
      keyBenefit: 'You should never remove the default focus style without replacing it with your own clear, visible style.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Link className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Link States
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Styling interactivity using the five essential link pseudo-classes.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: The Core Pseudo-Classes (L-V-H-A-F Order) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Target className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Five Link States
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Links have five distinct states that must be styled in a specific order for the styles to correctly cascade (known as the **LVHA Order** plus Focus).
          </p>
          <div className="space-y-8">
            {linkStates.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Best Practices & Implementation */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Styling Order and Transitions
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Description Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-teal-500"/> The LVHA-F Order Rule
                </h3>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    You **must** declare your link styles in the following sequence for the states to override correctly:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
                    <li><strong className="text-red-500">:link</strong> (Unvisited)</li>
                    <li><strong className="text-purple-500">:visited</strong> (Visited)</li>
                    <li><strong className="text-green-500">:hover</strong> (Mouse over)</li>
                    <li><strong className="text-blue-500">:active</strong> (Clicking)</li>
                    <li><strong className="text-orange-500">:focus</strong> (Keyboard focus)</li>
                </ol>

                <div className="p-3 bg-red-50 dark:bg-red-900/40 rounded-xl border-l-4 border-red-500 flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                        <strong className="mr-1">Why Order Matters:</strong> If `:hover` is declared before `:visited`, hovering over a visited link will show the *visited* style, not the hover style.
                    </p>
                </div>
            </div>
            
            {/* Code Block Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Full Styling Example (Best Practice)</h4>
                <InteractiveCodeBlock 
                    code={`a:link, a:visited {\n  color: #3B82F6;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\na:hover, a:focus {\n  color: #10B981; /* Changes color */\n  text-decoration: underline;\n  outline: none; /* Only remove if replaced by better focus style */\n}\n\na:active {\n  color: #DC2626;\n}`}
                    title="Complete Link Styling"
                />
                 <div className="p-3 bg-yellow-50 dark:bg-yellow-900/40 rounded-xl border-l-4 border-yellow-500 flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                        <strong className="mr-1">Pro Tip:</strong> Apply `transition` to the default `:link` state, so the animation runs smoothly on hover and focus.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Link Styling Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now understand link specificity and styling order, which is crucial for perfect navigation.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue to Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default CssLinks;
