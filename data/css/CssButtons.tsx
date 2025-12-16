import React, { useState } from 'react';
import { MousePointer, Layout, Zap, Code, Check, Copy, Box, Type, Palette, ArrowRight, Search } from 'lucide-react';

// --- Utility Components ---

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

const ButtonVariant = ({ title, description, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${active
        ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 ring-1 ring-indigo-500'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md'
      }`}
  >
    <div className="flex items-center mb-2">
      <div className={`p-2 rounded-lg mr-3 ${active ? 'bg-indigo-200 dark:bg-indigo-800' : 'bg-gray-100 dark:bg-gray-700'}`}>
        <Icon className={`w-5 h-5 ${active ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'}`} />
      </div>
      <h3 className={`font-bold ${active ? 'text-indigo-900 dark:text-indigo-100' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 ml-12">
      {description}
    </p>
  </button>
);

// --- Main Component ---

const CssButtons = () => {
  const [activeVariant, setActiveVariant] = useState('solid');

  const variants = {
    solid: {
      title: 'Solid Button',
      icon: Box,
      description: 'The standard primary button style.',
      className: 'px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors',
      code: `.btn {
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #4338ca;
}`
    },
    outline: {
      title: 'Outline Button',
      icon: Layout,
      description: 'Transparent background with a border.',
      className: 'px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300',
      code: `.btn-outline {
  padding: 12px 24px;
  background-color: transparent;
  border: 2px solid #4f46e5;
  color: #4f46e5;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: #4f46e5;
  color: white;
}`
    },
    gradient: {
      title: 'Gradient Button',
      icon: Palette,
      description: 'Modern, vibrant gradient background.',
      className: 'px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200',
      code: `.btn-gradient {
  padding: 12px 24px;
  background: linear-gradient(to right, #ec4899, #f97316);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-gradient:hover {
  transform: translateY(-2px);
}`
    },
    icon: {
      title: 'Icon Button',
      icon: Search,
      description: 'Button with text and an icon.',
      className: 'px-6 py-3 bg-gray-800 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors',
      code: `.btn-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #1f2937;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`
    },
    animated: {
      title: 'Animated Button',
      icon: Zap,
      description: 'Interactive hover effects.',
      className: 'px-8 py-3 bg-indigo-600 text-white font-bold rounded overflow-hidden relative group transition-all hover:bg-indigo-700',
      code: `.btn-animated {
  padding: 12px 32px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-animated:active {
  transform: scale(0.95);
}`
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <MousePointer className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Buttons
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From simple clicks to complex interactions. Master the art of styling the most important element on the web.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Button Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-3">
            {Object.entries(variants).map(([key, variant]) => (
              <ButtonVariant
                key={key}
                title={variant.title}
                description={variant.description}
                icon={variant.icon}
                active={activeVariant === key}
                onClick={() => setActiveVariant(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-12 border border-gray-200 dark:border-gray-700 min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <button className={variants[activeVariant].className}>
                {activeVariant === 'icon' ? (
                  <>
                    <Search size={18} />
                    Search Now
                  </>
                ) : (
                  'Click Me'
                )}
              </button>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={variants[activeVariant].code}
              title={`CSS for ${variants[activeVariant].title}`}
            />
          </div>
        </div>
      </section>

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Button States & Types
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Pseudo-classes */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Interactive States</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">:hover, :active, :disabled</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-not-allowed opacity-50" disabled>Disabled</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition-all">Active</button>
            </div>

            <CodeSnippetBlock codeSnippet={`.btn:hover {
  background-color: darkblue;
}

.btn:active {
  transform: scale(0.95);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}`} />
          </div>

          {/* Block Buttons */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Width Buttons</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Great for mobile layouts</p>
              </div>
            </div>

            <div className="mb-6">
              <button className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-sm">
                Submit Order
              </button>
            </div>

            <CodeSnippetBlock codeSnippet={`.btn-block {
  display: block;
  width: 100%;
  padding: 15px;
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssButtons;