import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  ChevronDown, Layers, Palette, HelpCircle, User, Settings
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title, style = {} }) => (
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
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // HTML Tags
                }
                 if (part.match(/^(class|href|id)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // HTML Attributes
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // HTML Attribute Values
                }
                if (part.match(/^(\.[\w-]+|ul|li|a|:hover|li:hover > ul)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // CSS Selectors
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

const LessonExampleCard = ({ title, icon: Icon, color, description, htmlCode, cssCode, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-green-500/20 to-green-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {htmlCode && <InteractiveCodeBlock code={htmlCode} title="HTML Structure" language="html" />}
        {cssCode && <InteractiveCodeBlock code={cssCode} title="CSS Styling" language="css" />}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Visual Example:</h4>
        <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 min-h-[120px] flex items-center justify-center">
            {children}
        </div>
      </div>
    </div>
  );
// --- End Reusable Components ---

const CssDropdowns = () => {

  // This style tag is necessary to make the live dropdown examples work via :hover
  const dropdownStyle = `
    .live-dropdown .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .live-dropdown:hover .dropdown-content {
        display: block;
    }
    .live-dropdown .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    .live-dropdown .dropdown-content a:hover {
        background-color: #f1f1f1;
    }
    /* Showcase Example B styles */
    .showcase-dropdown ul {
        transform: translateY(-10px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    .showcase-dropdown:hover ul {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      <style>{dropdownStyle}</style>
      
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl mb-8">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 mb-6 leading-tight">
            CSS Dropdowns
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Create interactive, space-saving menus that reveal options on user interaction.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <HelpCircle className="w-8 h-8 mr-4 text-green-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Why Use Dropdowns? (The Theory)
            </h2>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Dropdowns are essential UI patterns for decluttering navigation and organizing complex sets of links. By hiding secondary options until they are needed, you can:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-slate-700 dark:text-slate-200">
              <li><strong>Save Space:</strong> Keep your main navigation bar clean and concise, especially on smaller screens.</li>
              <li><strong>Improve Organization:</strong> Group related links (e.g., "Products" with sub-categories) under a single, clear heading.</li>
              <li><strong>Enhance User Experience:</strong> Prevent overwhelming users with too many choices at once, guiding them more naturally through your site.</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Dropdown Pattern
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
             <LessonExampleCard 
                title="Hover-Triggered Dropdown"
                icon={ChevronDown}
                color="text-blue-600"
                description="The classic dropdown is built by nesting a `<ul>` inside an `<li>`. The nested list is hidden by default and becomes visible when the user hovers over the parent list item. Positioning is key to make it appear correctly."
                htmlCode={`<nav>\n  <ul>\n    <li class="dropdown">\n      <a href="#">Services ▼</a>\n      <ul class="dropdown-content">\n        <li><a href="#">Web Design</a></li>\n        <li><a href="#">SEO</a></li>\n        <li><a href="#">Hosting</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>`}
                cssCode={`/* Parent must be relative */\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n/* Hide dropdown content */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  z-index: 1;\n}\n\n/* Show on hover */\n.dropdown:hover .dropdown-content {\n  display: block;\n}`}
            >
                <div className="font-sans relative inline-block text-left live-dropdown">
                  <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    Services
                    <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
                  </button>
                  <div className="dropdown-content origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Web Design</a>
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">SEO</a>
                      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">Hosting</a>
                    </div>
                  </div>
                </div>
            </LessonExampleCard>
          </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
              <Palette className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase
              </h2>
            </div>
            <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example A: Dropdown in a Horizontal Navbar</h3>
                  <div className="bg-slate-800 p-4 rounded-xl shadow-lg font-sans">
                      <nav>
                         <ul className="list-none m-0 p-0 flex items-center">
                            <li><a href="#" className="block py-3 px-5 no-underline text-white font-semibold transition-colors hover:bg-slate-700 rounded-md">Home</a></li>
                            <li className="relative group">
                                <a href="#" className="block py-3 px-5 no-underline text-white font-semibold transition-colors hover:bg-slate-700 rounded-md flex items-center">
                                    Products <ChevronDown className="w-4 h-4 ml-1"/>
                                </a>
                                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg py-1 hidden group-hover:block z-10">
                                    <li><a href="#" className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">Laptops</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">Monitors</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600">Keyboards</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="block py-3 px-5 no-underline text-white font-semibold transition-colors hover:bg-slate-700 rounded-md">About Us</a></li>
                         </ul>
                      </nav>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example B: Styled Dropdown with Icons & Transitions</h3>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg font-sans flex justify-center">
                      <div className="relative group showcase-dropdown">
                          <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
                              My Account
                              <ChevronDown className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:rotate-180"/>
                          </button>
                          <ul className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-700 rounded-xl shadow-2xl py-2 z-10">
                              <li><a href="#" className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"><User className="w-5 h-5 mr-3 text-indigo-500"/>Profile</a></li>
                              <li><a href="#" className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600"><Settings className="w-5 h-5 mr-3 text-indigo-500"/>Settings</a></li>
                              <li className="border-t border-slate-200 dark:border-slate-600 my-1"></li>
                              <li><a href="#" className="flex items-center px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/40">Logout</a></li>
                          </ul>
                      </div>
                  </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Dropdowns Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now build multi-level navigation and interactive menus, a key skill for any complex web application.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssDropdowns;

