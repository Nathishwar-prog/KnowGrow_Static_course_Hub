import React, { useState } from 'react';
import { Maximize, Minimize, Expand, Layout, Image, Video, Code, Check, Copy, Move, Focus } from 'lucide-react';

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

const OptionCard = ({ title, description, icon: Icon, active, onClick }) => (
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

const CssObjectFit = () => {
  const [fitMode, setFitMode] = useState('cover');
  const [position, setPosition] = useState('center');

  const modes = {
    fill: {
      title: 'Fill',
      icon: Maximize,
      description: 'Stretches the image to fill the container. Distortion may occur.',
      code: `img {
  width: 100%;
  height: 300px;
  object-fit: fill;
}`
    },
    contain: {
      title: 'Contain',
      icon: Minimize,
      description: 'Scales image to fit within container. Aspect ratio preserved. Letterboxing may occur.',
      code: `img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}`
    },
    cover: {
      title: 'Cover',
      icon: Expand,
      description: 'Fills container completely. Aspect ratio preserved. Some cropping may occur.',
      code: `img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}`
    },
    none: {
      title: 'None',
      icon: Layout,
      description: 'Image retains original size. Cropping will occur if larger than container.',
      code: `img {
  width: 100%;
  height: 300px;
  object-fit: none;
}`
    },
    'scale-down': {
      title: 'Scale Down',
      icon: Minimize,
      description: 'Uses "none" or "contain", whichever results in a smaller image.',
      code: `img {
  width: 100%;
  height: 300px;
  object-fit: scale-down;
}`
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Image className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Object Fit
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Control how images and videos resize to fit their containers without losing their aspect ratio.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layout className="w-6 h-6 mr-2 text-indigo-500" />
            Fit Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-3">
            {Object.entries(modes).map(([key, mode]) => (
              <OptionCard
                key={key}
                title={mode.title}
                description={mode.description}
                icon={mode.icon}
                active={fitMode === key}
                onClick={() => setFitMode(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="w-full max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="relative w-full h-[300px] bg-gray-300 dark:bg-gray-700 rounded overflow-hidden border-2 border-dashed border-gray-400 dark:border-gray-600">
                  <img
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80"
                    alt="Nature"
                    className="w-full h-full transition-all duration-300"
                    style={{
                      objectFit: fitMode,
                      objectPosition: position
                    }}
                  />

                  {/* Container Label */}
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Container (Fixed Size)
                  </div>
                </div>
              </div>

              {/* Object Position Controls (Only relevant for cover/none/contain) */}
              <div className="mt-6 flex items-center space-x-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Move className="w-4 h-4 mr-2 text-indigo-500" />
                  Object Position:
                </span>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block p-1.5"
                >
                  <option value="center">Center</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="top left">Top Left</option>
                  <option value="bottom right">Bottom Right</option>
                </select>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={modes[fitMode].code.replace('}', `  object-position: ${position};\n}`)}
              title={`CSS for ${modes[fitMode].title}`}
            />
          </div>
        </div>
      </section>

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Video Support */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Video className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Video Elements</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Works exactly the same</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              <code className="text-indigo-500 font-mono">object-fit</code> is incredibly useful for background videos or video players that need to fill a specific container size without black bars.
            </p>

            <CodeSnippetBlock codeSnippet={`video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`} />
          </div>

          {/* Object Position */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Focus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Object Position</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fine-tuning the focus</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              When using <code className="text-indigo-500 font-mono">cover</code>, you might lose important parts of the image. Use <code className="text-indigo-500 font-mono">object-position</code> to anchor the image to a specific side (e.g., keeping a person's face in view).
            </p>

            <CodeSnippetBlock codeSnippet={`img {
  object-fit: cover;
  object-position: top center; 
  /* Focuses on the top part */
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssObjectFit;