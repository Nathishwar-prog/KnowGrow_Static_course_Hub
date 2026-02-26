import React, { useState } from 'react';
import { MessageSquare, Code, Eye, MousePointer, Layout, Check, Copy, Zap, Keyboard, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

// --- Utility Components ---

const ControlSelect = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:text-white transition-colors"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const ControlToggle = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between mb-4 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700">
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${checked ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-600'
        }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'
          }`}
      />
    </button>
  </div>
);

const CodeSnippetBlock = ({ codeSnippet, language = 'css', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-gray-900">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

// --- Main Component ---

const CssTooltips = () => {
  // Sandbox State
  const [position, setPosition] = useState('top');
  const [showArrow, setShowArrow] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [animation, setAnimation] = useState(true);

  // Generate dynamic CSS for the sandbox
  const getTooltipCss = () => {
    let posCss = '';
    let arrowCss = '';

    switch (position) {
      case 'top':
        posCss = `  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);`;
        arrowCss = `  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-color: ${theme === 'dark' ? 'black' : 'white'} transparent transparent transparent;`;
        break;
      case 'bottom':
        posCss = `  top: 125%;\n  left: 50%;\n  transform: translateX(-50%);`;
        arrowCss = `  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-color: transparent transparent ${theme === 'dark' ? 'black' : 'white'} transparent;`;
        break;
      case 'left':
        posCss = `  top: 50%;\n  right: 105%;\n  transform: translateY(-50%);`;
        arrowCss = `  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  border-color: transparent transparent transparent ${theme === 'dark' ? 'black' : 'white'};`;
        break;
      case 'right':
        posCss = `  top: 50%;\n  left: 105%;\n  transform: translateY(-50%);`;
        arrowCss = `  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-color: transparent ${theme === 'dark' ? 'black' : 'white'} transparent transparent;`;
        break;
    }

    return `.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: ${theme === 'dark' ? 'black' : 'white'};
  color: ${theme === 'dark' ? 'white' : 'black'};
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  ${theme === 'light' ? 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);' : ''}
${posCss}
  opacity: 0;
  transition: opacity ${animation ? '0.3s' : '0s'};
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
${showArrow ? `
.tooltip-text::after {
  content: "";
  position: absolute;
  border-width: 5px;
  border-style: solid;
${arrowCss}
}` : ''}`;
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Tooltips
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create elegant, informative pop-ups using only CSS. No JavaScript required.
        </p>
      </header>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Eye className="w-6 h-6 mr-2 text-indigo-500" />
            What is a Tooltip?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            A tooltip is a small pop-up box that appears when a user hovers over or focuses on an element. They are essential for providing context, hints, or descriptions without cluttering the main user interface.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Hover & Focus', desc: 'Triggers on interaction', icon: MousePointer },
              { title: 'CSS Only', desc: 'Lightweight & fast', icon: Zap },
              { title: 'UX Friendly', desc: 'Reduces visual clutter', icon: Layout },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-2">
                  <item.icon className="w-4 h-4 text-indigo-500 mr-2" />
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Tooltip Sandbox
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              Configuration
            </h3>

            <ControlSelect
              label="Position"
              value={position}
              onChange={setPosition}
              options={[
                { label: 'Top', value: 'top' },
                { label: 'Bottom', value: 'bottom' },
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ]}
            />

            <ControlSelect
              label="Theme"
              value={theme}
              onChange={setTheme}
              options={[
                { label: 'Dark', value: 'dark' },
                { label: 'Light', value: 'light' },
              ]}
            />

            <ControlToggle label="Show Arrow" checked={showArrow} onChange={setShowArrow} />
            <ControlToggle label="Fade Animation" checked={animation} onChange={setAnimation} />
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-12 border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center justify-center relative">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Tooltip Element */}
              <div className="relative group inline-block z-10">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Hover Me!
                </button>

                {/* Dynamic Tooltip */}
                <div className={`absolute w-32 p-2 rounded-md text-sm text-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none
                  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900 shadow-xl'}
                  ${position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' : ''}
                  ${position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' : ''}
                  ${position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' : ''}
                  ${position === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2' : ''}
                `}>
                  I am a CSS Tooltip!

                  {/* Dynamic Arrow */}
                  {showArrow && (
                    <div className={`absolute w-0 h-0 border-4 border-solid
                      ${position === 'top' ? `top-full left-1/2 -ml-1 border-t-${theme === 'dark' ? 'black' : 'white'} border-r-transparent border-b-transparent border-l-transparent` : ''}
                      ${position === 'bottom' ? `bottom-full left-1/2 -ml-1 border-b-${theme === 'dark' ? 'black' : 'white'} border-r-transparent border-t-transparent border-l-transparent` : ''}
                      ${position === 'left' ? `left-full top-1/2 -mt-1 border-l-${theme === 'dark' ? 'black' : 'white'} border-t-transparent border-b-transparent border-r-transparent` : ''}
                      ${position === 'right' ? `right-full top-1/2 -mt-1 border-r-${theme === 'dark' ? 'black' : 'white'} border-t-transparent border-b-transparent border-l-transparent` : ''}
                    `}></div>
                  )}
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getTooltipCss()} title="Generated CSS" />
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
          How It Works
        </h2>

        {/* Step 1 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg border border-indigo-200 dark:border-indigo-700">1</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Container</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The parent element must have <code className="text-indigo-600 dark:text-indigo-400 font-mono">position: relative</code>. This creates a positioning context for the tooltip, ensuring it stays attached to the parent.
            </p>
            <CodeSnippetBlock
              title="HTML Structure"
              language="html"
              codeSnippet={`<div class="tooltip-container">
  Hover me
  <span class="tooltip-text">Tooltip Content</span>
</div>`}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg border border-indigo-200 dark:border-indigo-700">2</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Hidden Tooltip</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The tooltip text is absolutely positioned relative to the container. We hide it initially using <code className="text-indigo-600 dark:text-indigo-400 font-mono">visibility: hidden</code> and <code className="text-indigo-600 dark:text-indigo-400 font-mono">opacity: 0</code>.
            </p>
            <CodeSnippetBlock
              title="Base CSS"
              codeSnippet={`.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  
  /* Styling */
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
}`}
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg border border-indigo-200 dark:border-indigo-700">3</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Trigger</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the <code className="text-indigo-600 dark:text-indigo-400 font-mono">:hover</code> pseudo-class on the container to reveal the tooltip. For accessibility, we also include <code className="text-indigo-600 dark:text-indigo-400 font-mono">:focus-within</code> or <code className="text-indigo-600 dark:text-indigo-400 font-mono">:focus</code>.
            </p>
            <CodeSnippetBlock
              title="Interaction CSS"
              codeSnippet={`.tooltip-container:hover .tooltip-text,
.tooltip-container:focus-within .tooltip-text {
  visibility: visible;
  opacity: 1;
}`}
            />
          </div>
        </div>
      </section>

      {/* Accessibility Note */}
      <section className="max-w-4xl mx-auto mt-16 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
        <div className="flex items-start">
          <Keyboard className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Accessibility Matters</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Always ensure your tooltips are accessible to keyboard users. Using <code className="font-mono bg-white dark:bg-gray-800 px-1 rounded">tabindex="0"</code> on the parent element allows it to receive focus, and adding the <code className="font-mono bg-white dark:bg-gray-800 px-1 rounded">:focus</code> selector in your CSS ensures the tooltip appears when navigating via keyboard.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CssTooltips;