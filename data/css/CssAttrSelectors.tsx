import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Target, FileText, ExternalLink, Link as LinkIcon
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg-text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                 if (part.match(/^(class|href|id|src|alt|target|title|data-filetype)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|a|div|span|\[|\])$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
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

const LessonPropertyCard = ({ title, icon: Icon, color, description, syntax, useCase }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="space-y-4">
        <InteractiveCodeBlock code={syntax} title="CSS Syntax" language="css" />
        <div className="p-3 bg-teal-50 dark:bg-teal-900/40 rounded-xl border-l-4 border-teal-500">
            <p className="text-sm font-semibold text-teal-800 dark:text-teal-300">
                <strong>Best For:</strong> {useCase}
            </p>
        </div>
      </div>
    </div>
  );
// --- End Reusable Components ---

const CssAttrSelectors = () => {
  const [selector, setSelector] = useState('a[target]');
  const [sandboxStyles, setSandboxStyles] = useState('');

  const handleSelectorChange = (e) => {
    const newSelector = e.target.value;
    setSelector(newSelector);
    try {
      // Basic validation to prevent crashing on totally invalid syntax
      document.querySelector(newSelector); 
      setSandboxStyles(`
        #sandbox-container ${newSelector} {
          background-color: #F59E0B; /* Amber-500 */
          color: #111827;
          outline: 4px solid #F59E0B;
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `);
    } catch (err) {
      setSandboxStyles(''); // Clear styles if selector is invalid
    }
  };

  const attributeSelectors = [
    { title: '[attribute]', description: 'Selects all elements that have the specified attribute, regardless of its value.', syntax: 'a[target] { ... }', useCase: 'Finding all images with an `alt` attribute or all links with a `target` attribute.' },
    { title: '[attribute="value"]', description: 'Selects all elements where the attribute has an exact, case-sensitive value.', syntax: 'a[target="_blank"] { ... }', useCase: 'Styling only external links that open in a new tab.' },
    { title: '[attribute~="value"]', description: 'Selects elements where the attribute contains a specific word within a space-separated list.', syntax: 'p[class~="highlight"] { ... }', useCase: 'Targeting an element with `class="item highlight featured"` but not `class="highlight-item"`.' },
    { title: '[attribute^="value"]', description: 'Selects elements where the attribute value begins with the specified string.', syntax: 'a[href^="https://"] { ... }', useCase: 'Styling all secure, external links.' },
    { title: '[attribute$="value"]', description: 'Selects elements where the attribute value ends with the specified string.', syntax: 'a[href$=".pdf"] { ... }', useCase: 'Adding a PDF icon next to links that point to a PDF file.' },
    { title: '[attribute*="value"]', description: 'Selects elements where the attribute value contains the specified substring anywhere.', syntax: 'a[href*="google"] { ... }', useCase: 'Highlighting all links that direct to any "google.com" subdomain.' },
  ];

  const presetSelectors = [
    'a[target]',
    'a[target="_blank"]',
    'a[href^="https://"]',
    'a[href$=".pdf"]',
    'a[href*="example"]',
    'div[data-filetype~="image"]',
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-50 dark:from-slate-900 dark:via-teal-900/10 dark:to-slate-900">
      <style>{sandboxStyles}</style>
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-2xl mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500 mb-6 leading-tight">
            CSS Attribute Selectors
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Target elements with precision based on their HTML attributes and values.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Attribute Selectors
            </h2>
          </div>
          <div className="space-y-12">
            {attributeSelectors.map((attr, index) => (
                <LessonPropertyCard
                    key={index}
                    title={attr.title}
                    icon={Target}
                    color="text-teal-500"
                    description={attr.description}
                    syntax={attr.syntax}
                    useCase={attr.useCase}
                />
            ))}
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Live Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="selector-input" className="text-lg font-semibold text-slate-700 dark:text-slate-300 block mb-2">Enter a selector:</label>
                    <input
                        id="selector-input"
                        type="text"
                        value={selector}
                        onChange={handleSelectorChange}
                        className="w-full p-4 border-2 border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono text-lg focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition"
                    />
                    <div className="mt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Or try a preset:</p>
                      <div className="flex flex-wrap gap-2">
                        {presetSelectors.map(s => (
                          <button key={s} onClick={() => handleSelectorChange({target: {value: s}})} className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-mono rounded-full hover:bg-teal-500 hover:text-white transition-colors">{s}</button>
                        ))}
                      </div>
                    </div>
                </div>
                <div id="sandbox-container" className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 space-y-3">
                    {/* These elements will be targeted by the live selector */}
                    <a href="https://example.com" target="_blank" className="block p-2 border rounded transition-all duration-300">Link 1 (target="_blank")</a>
                    <a href="/internal-page" className="block p-2 border rounded transition-all duration-300">Link 2 (no target)</a>
                    <a href="https://test.com" target="_self" className="block p-2 border rounded transition-all duration-300">Link 3 (target="_self")</a>
                    <a href="/files/document.pdf" className="block p-2 border rounded transition-all duration-300">Report.pdf</a>
                    <div data-filetype="document image" className="block p-2 border rounded transition-all duration-300">Data Attribute Div</div>
                </div>
            </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
                <LinkIcon className="w-8 h-8 mr-4 text-blue-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                  Section 3: Practical Examples
                </h2>
            </div>
             <div className="space-y-8">
                 <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Styling External Links</h3>
                    <p className="mb-4">Automatically add an "external" icon to any link that opens in a new tab.</p>
                    <InteractiveCodeBlock title="CSS" code={`a[target="_blank"]::after {\n  content: ' ↗';\n  font-size: 0.8em;\n  display: inline-block;\n  margin-left: 4px;\n}`} />
                    <div className="mt-4 p-4 border rounded-lg">
                      <a href="#" className="text-blue-500 hover:underline">An internal link</a><br/>
                      <a href="#" target="_blank" className="text-blue-500 hover:underline">An external link<span className="text-xs inline-block ml-1"> ↗</span></a>
                    </div>
                 </div>
                 <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Styling File Type Links</h3>
                    <p className="mb-4">Show a file icon next to any link that points to a PDF.</p>
                    <InteractiveCodeBlock title="CSS" code={`a[href$=".pdf"]::before {\n  content: '📄 ';\n}`} />
                    <div className="mt-4 p-4 border rounded-lg">
                      <a href="/page" className="text-blue-500 hover:underline">Link to a webpage</a><br/>
                      <a href="/file.pdf" className="text-blue-500 hover:underline"><span className="mr-1">📄</span>Link to a PDF document</a>
                    </div>
                 </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Attribute Selectors Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now target elements with surgical precision, creating smarter, more maintainable CSS without extra classes or IDs.
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

export default CssAttrSelectors;
