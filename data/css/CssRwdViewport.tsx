import React, { useState } from 'react';
import { Smartphone, Monitor, Code, Check, Copy, ZoomIn, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

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

const CssRwdViewport = () => {
  const [hasViewportTag, setHasViewportTag] = useState(true);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Eye className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          The Viewport Meta Tag
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The single most important line of code for mobile responsiveness. Without it, your media queries are useless.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Smartphone className="w-6 h-6 mr-2 text-indigo-500" />
            Mobile Simulator
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
                Configuration
              </h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Meta Tag?</span>
                <button
                  onClick={() => setHasViewportTag(!hasViewportTag)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${hasViewportTag ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${hasViewportTag ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>

              <div className={`p-4 rounded-lg border ${hasViewportTag ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
                <div className="flex items-start">
                  {hasViewportTag ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className={`text-sm font-bold ${hasViewportTag ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                      {hasViewportTag ? 'Responsive Mode' : 'Desktop Mode (Zoomed Out)'}
                    </h4>
                    <p className={`text-xs mt-1 ${hasViewportTag ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                      {hasViewportTag
                        ? "The browser matches the screen width (375px). Text is readable."
                        : "The browser pretends to be a desktop (980px) and shrinks everything to fit."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Simulated Mobile Device */}
              <div
                className="bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800 relative"
                style={{ width: '320px', height: '600px' }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

                {/* Screen Content */}
                <div className="bg-white dark:bg-gray-800 w-full h-full rounded-[2rem] overflow-hidden relative flex flex-col">

                  {/* Browser Bar */}
                  <div className="bg-gray-100 dark:bg-gray-900 p-3 pt-8 border-b border-gray-200 dark:border-gray-700 flex items-center justify-center text-xs text-gray-500">
                    example.com
                  </div>

                  {/* Webpage Content */}
                  <div
                    className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 transition-all duration-500 origin-top-left"
                    style={{
                      // Simulate the scaling effect of missing viewport tag
                      transform: hasViewportTag ? 'none' : 'scale(0.38)', // 375 / 980 ≈ 0.38
                      width: hasViewportTag ? '100%' : '980px', // Desktop width simulation
                      height: hasViewportTag ? 'auto' : '1570px', // Compensate height for scaling
                    }}
                  >
                    <div className="p-4">
                      <header className="bg-indigo-600 text-white p-6 mb-6 text-center">
                        <h1 className="text-2xl font-bold mb-2">My Website</h1>
                        <p>Welcome to the future</p>
                      </header>

                      <div className="grid gap-4">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Article 1</h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Article 2</h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">
                            Call to Action
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              title="The Essential Tag"
              codeSnippet={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Understanding the Attributes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Width */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">width=device-width</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Tells the browser to set the width of the page to follow the screen-width of the device (which will vary depending on the device).
            </p>
          </div>

          {/* Initial Scale */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ZoomIn className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">initial-scale=1.0</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sets the initial zoom level when the page is first loaded by the browser. 1.0 means "no zoom".
            </p>
          </div>

          {/* User Scalable */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">user-scalable</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Optional. Can be set to 'no' to prevent users from zooming. Generally recommended to leave enabled for accessibility.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdViewport;