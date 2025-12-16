import React, { useState } from 'react';
import { MapPin, Layout, FileCode, Zap, Clock, AlertTriangle, Check, Copy, ArrowDown, ArrowRight } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'html', title }) => {
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
            className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-yellow-500 hover:text-gray-900 transition-colors border border-gray-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-yellow-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

// --- Main Component ---

const JsWhereTo = () => {
  const [activeLocation, setActiveLocation] = useState('body'); // head, body, external
  const [loadingMode, setLoadingMode] = useState('default'); // default, defer, async

  const getLocationData = () => {
    switch (activeLocation) {
      case 'head':
        return {
          title: '<head> Section',
          description: 'Scripts load before the page content. Good for tracking codes or critical config, but can block rendering.',
          code: `<!DOCTYPE html>
<html>
<head>
  <script>
    function init() {
      console.log("Loaded in Head");
    }
  </script>
</head>
<body>
  <h1>Content loads after script</h1>
</body>
</html>`
        };
      case 'body':
        return {
          title: 'End of <body>',
          description: 'The recommended spot. Ensures HTML elements are fully loaded before the script runs, improving perceived speed.',
          code: `<!DOCTYPE html>
<html>
<body>
  <h1>Content loads first</h1>
  
  <script>
    console.log("Loaded after Body");
  </script>
</body>
</html>`
        };
      case 'external':
        return {
          title: 'External File',
          description: 'Best for organization and caching. Keep your HTML clean and reuse code across pages.',
          code: `<!-- index.html -->
<script src="script.js"></script>

/* script.js */
function showMessage() {
  alert("Hello from External JS file");
}`
        };
      default:
        return {};
    }
  };

  const locationData = getLocationData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <MapPin className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Where To Place JS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Location matters. Learn how placement affects your website's performance and behavior.
        </p>
      </header>

      {/* Interactive Placement Visualizer */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-yellow-500" />
            Placement Visualizer
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Select Location
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveLocation('head')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeLocation === 'head'
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeLocation === 'head' ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">In &lt;head&gt;</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Loads First</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveLocation('body')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeLocation === 'body'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeLocation === 'body' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <ArrowDown className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">End of &lt;body&gt;</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Recommended</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveLocation('external')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeLocation === 'external'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeLocation === 'external' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <FileCode className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">External File</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Best Practice</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Document Structure Visualizer */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                {/* Head Section */}
                <div className={`p-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 ${activeLocation === 'head' ? 'bg-yellow-100 dark:bg-yellow-900/30' : ''}`}>
                  <div className="text-xs font-bold text-gray-400 mb-2">&lt;head&gt;</div>
                  {activeLocation === 'head' && (
                    <div className="bg-yellow-500 text-white text-xs p-2 rounded animate-pulse flex items-center justify-center font-bold">
                      <Zap className="w-3 h-3 mr-1" /> Script Loads Here
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-4 min-h-[100px] bg-gray-50 dark:bg-gray-900/50">
                  <div className="text-xs font-bold text-gray-400 mb-2">&lt;body&gt;</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>

                {/* End of Body */}
                <div className={`p-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 ${activeLocation === 'body' ? 'bg-green-100 dark:bg-green-900/30' : ''}`}>
                  {activeLocation === 'body' && (
                    <div className="bg-green-500 text-white text-xs p-2 rounded animate-pulse flex items-center justify-center font-bold">
                      <Check className="w-3 h-3 mr-1" /> Script Loads Here
                    </div>
                  )}
                  <div className="text-xs font-bold text-gray-400 mt-2">&lt;/body&gt;</div>
                </div>
              </div>

              <p className="text-center mt-6 text-gray-600 dark:text-gray-300 text-sm font-medium">
                {locationData.description}
              </p>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={locationData.code} title={`${locationData.title} Example`} />
          </div>
        </div>
      </section>

      {/* Loading Attributes Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Loading Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Default */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Default</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Parsing pauses while the script is fetched and executed. Can block rendering.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">&lt;script src="..."&gt;</code>
          </div>

          {/* Defer */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-2 border-green-500 dark:border-green-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl">Best</div>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Defer</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Script downloads in parallel but executes <strong>after</strong> HTML parsing is complete.
            </p>
            <code className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded">&lt;script src="..." defer&gt;</code>
          </div>

          {/* Async */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Async</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Script downloads in parallel and executes <strong>immediately</strong> when ready. Order not guaranteed.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">&lt;script src="..." async&gt;</code>
          </div>

        </div>
      </section>

      {/* Inline Warning */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800/30 flex items-start">
          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Avoid Inline JavaScript</h3>
            <p className="text-sm text-red-800 dark:text-red-200 mb-4">
              Writing JS directly in HTML attributes (like <code className="bg-red-100 dark:bg-red-900/50 px-1 rounded">onclick="..."</code>) makes code hard to maintain and debug. Always prefer external files or script blocks.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JsWhereTo;