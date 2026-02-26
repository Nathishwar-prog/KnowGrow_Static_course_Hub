import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layout, MousePointer, Code, Check, Copy, Circle, Square, ArrowLeft, ArrowRight } from 'lucide-react';

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

const StyleOption = ({ title, description, icon: Icon, active, onClick }) => (
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

const CssPagination = () => {
  const [activeStyle, setActiveStyle] = useState('basic');
  const [currentPage, setCurrentPage] = useState(2);

  const styles = {
    basic: {
      title: 'Basic Bordered',
      icon: Square,
      description: 'Standard square buttons with borders.',
      containerClass: 'flex gap-1',
      itemClass: 'px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors',
      activeClass: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700',
      code: `.pagination a {
  padding: 8px 16px;
  border: 1px solid #ddd;
  color: black;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.pagination a:hover:not(.active) {
  background-color: #f3f4f6;
}`
    },
    rounded: {
      title: 'Rounded',
      icon: Circle,
      description: 'Soft corners for a modern look.',
      containerClass: 'flex gap-2',
      itemClass: 'px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors',
      activeClass: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700',
      code: `.pagination a {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: black;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4f46e5;
  color: white;
  border-color: #4f46e5;
}`
    },
    circle: {
      title: 'Circular',
      icon: Circle,
      description: 'Perfect circles for page numbers.',
      containerClass: 'flex gap-2 items-center',
      itemClass: 'w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-200 transition-colors',
      activeClass: 'bg-indigo-600 text-white hover:bg-indigo-700 font-bold',
      code: `.pagination a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
}

.pagination a.active {
  background-color: #4f46e5;
  color: white;
}`
    },
    minimal: {
      title: 'Minimal',
      icon: Layout,
      description: 'Clean text-only links with underline active state.',
      containerClass: 'flex gap-4 items-center',
      itemClass: 'text-gray-500 hover:text-indigo-600 font-medium transition-colors relative',
      activeClass: 'text-indigo-600 font-bold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-indigo-600',
      code: `.pagination a {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.pagination a:hover,
.pagination a.active {
  color: #4f46e5;
}

.pagination a.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4f46e5;
}`
    }
  };

  const renderPagination = () => {
    const currentStyle = styles[activeStyle];
    const pages = [1, 2, 3, 4, 5];

    return (
      <div className={`flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 ${activeStyle === 'minimal' ? 'gap-6' : 'gap-2'}`}>
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className={`${currentStyle.itemClass} ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        <div className={currentStyle.containerClass}>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentStyle.itemClass} ${currentPage === page ? currentStyle.activeClass : ''}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          className={`${currentStyle.itemClass} ${currentPage === 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 5}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Layout className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Pagination
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Guide users through your content with stylish, responsive, and accessible navigation controls.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <MousePointer className="w-6 h-6 mr-2 text-indigo-500" />
            Pagination Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-3">
            {Object.entries(styles).map(([key, style]) => (
              <StyleOption
                key={key}
                title={style.title}
                description={style.description}
                icon={style.icon}
                active={activeStyle === key}
                onClick={() => setActiveStyle(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-12 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {renderPagination()}

              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Current Page: <span className="font-bold text-indigo-600 dark:text-indigo-400">{currentPage}</span>
              </p>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={styles[activeStyle].code}
              title={`CSS for ${styles[activeStyle].title}`}
            />
          </div>
        </div>
      </section>

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Core Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Active State */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Check className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Active State</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Highlighting current location</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Use a specific class (e.g., <code className="text-indigo-500 font-mono">.active</code>) to distinguish the current page from the others. This is crucial for user orientation.
            </p>

            <CodeSnippetBlock codeSnippet={`.pagination a.active {
  background-color: blue;
  color: white;
  pointer-events: none; /* Prevent clicking current page */
}`} />
          </div>

          {/* Disabled State */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <ArrowLeft className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Disabled State</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Handling edge cases</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              When on the first or last page, the "Previous" or "Next" buttons should be visually disabled to indicate no further action is possible.
            </p>

            <CodeSnippetBlock codeSnippet={`.pagination a.disabled {
  color: gray;
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssPagination;