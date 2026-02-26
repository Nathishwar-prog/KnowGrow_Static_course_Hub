import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Code, Copy, Check, Info, ShieldCheck, AlertTriangle } from 'lucide-react';

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

// --- Main Component ---

const CssSupports = () => {
  const [supportCheck, setSupportCheck] = useState({
    grid: false,
    flex: false,
    backdropFilter: false,
    hasSelector: false,
    containerQueries: false
  });

  // Check for browser support on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.CSS && window.CSS.supports) {
      setSupportCheck({
        grid: CSS.supports('display: grid'),
        flex: CSS.supports('display: flex'),
        backdropFilter: CSS.supports('backdrop-filter: blur(10px)') || CSS.supports('-webkit-backdrop-filter: blur(10px)'),
        hasSelector: CSS.supports('selector(:has(*))'),
        containerQueries: CSS.supports('container-type: inline-size')
      });
    }
  }, []);

  const [simulatedSupport, setSimulatedSupport] = useState(true);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <ShieldCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS @supports
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Feature queries allow you to test browser support for CSS pairs and apply styles conditionally. It's progressive enhancement made easy.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-indigo-500" />
            Browser Capability Lab
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                Your Browser Supports:
              </h3>
              <ul className="space-y-3">
                {Object.entries(supportCheck).map(([key, supported]) => (
                  <li key={key} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {supported ? (
                      <span className="flex items-center text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        <Check size={12} className="mr-1" /> Supported
                      </span>
                    ) : (
                      <span className="flex items-center text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">
                        <AlertTriangle size={12} className="mr-1" /> Unsupported
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Simulation Mode</h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-4">
                Toggle this switch to simulate a browser that {simulatedSupport ? 'SUPPORTS' : 'DOES NOT SUPPORT'} <code className="font-mono bg-white/50 dark:bg-black/20 px-1 rounded">backdrop-filter</code>.
              </p>
              <button
                onClick={() => setSimulatedSupport(!simulatedSupport)}
                className={`w-full py-2 rounded-lg font-bold transition-all ${simulatedSupport
                    ? 'bg-green-500 text-white shadow-md hover:bg-green-600'
                    : 'bg-red-500 text-white shadow-md hover:bg-red-600'
                  }`}
              >
                {simulatedSupport ? 'Simulate: Supported' : 'Simulate: Not Supported'}
              </button>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>

              {/* The Element */}
              <div
                className={`
                  relative z-10 p-8 rounded-2xl max-w-md text-center transition-all duration-500
                  ${simulatedSupport
                    ? 'bg-white/30 backdrop-blur-md border border-white/50 shadow-2xl text-white'
                    : 'bg-gray-900 border-4 border-gray-800 shadow-xl text-gray-100'}
                `}
              >
                <h3 className="text-2xl font-bold mb-2">
                  {simulatedSupport ? 'Glassmorphism Active' : 'Fallback Design'}
                </h3>
                <p className="mb-4 opacity-90">
                  {simulatedSupport
                    ? 'This beautiful glass effect is applied because the browser supports backdrop-filter.'
                    : 'This solid background is a safe fallback because the feature is not supported.'}
                </p>
                <div className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${simulatedSupport ? 'bg-white/20' : 'bg-gray-700'}`}>
                  {simulatedSupport ? '@supports (backdrop-filter: blur(10px))' : 'Fallback Rules'}
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              title="Conditional CSS Logic"
              codeSnippet={`/* Default / Fallback Styles */
.card {
  background-color: #111827; /* Solid dark background */
  color: #f3f4f6;
  border: 4px solid #1f2937;
}

/* Enhanced Styles (Progressive Enhancement) */
@supports (backdrop-filter: blur(10px)) {
  .card {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px); /* The modern feature */
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
  }
}`}
            />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Logic Gates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* NOT Logic */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">not</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Apply styles only if a feature is <strong>not</strong> supported.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`@supports not (display: grid) {
  .container { float: left; }
}`}
            />
          </div>

          {/* AND Logic */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">and</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Both conditions must be true.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`@supports (display: flex) and (gap: 10px) { ... }`}
            />
          </div>

          {/* OR Logic */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Info className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">or</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              At least one condition must be true.
            </p>
            <CodeSnippetBlock
              language="css"
              codeSnippet={`@supports (display: grid) or (display: flex) { ... }`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssSupports;