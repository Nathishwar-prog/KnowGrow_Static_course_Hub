import React, { useState } from 'react';
import { Video, Layout, Code, Check, Copy, Maximize, Monitor, PlayCircle, Box } from 'lucide-react';

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

const ControlSlider = ({ label, value, onChange, min, max, step, unit = '' }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-500"
    />
  </div>
);

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
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// --- Main Component ---

const CssRwdVideos = () => {
  const [containerWidth, setContainerWidth] = useState(100);
  const [aspectRatio, setAspectRatio] = useState('56.25%'); // 16:9
  const [objectFit, setObjectFit] = useState('cover');
  const [activeTab, setActiveTab] = useState('aspect-ratio'); // aspect-ratio, object-fit

  const getCodeSnippet = () => {
    if (activeTab === 'aspect-ratio') {
      return `.video-container {
  position: relative;
  width: 100%;
  padding-top: ${aspectRatio}; /* Aspect Ratio Magic */
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`;
    } else {
      return `video {
  width: 100%;
  height: 300px;
  object-fit: ${objectFit};
}`;
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Video className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Responsive Videos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Keep your videos perfectly scaled and ratio-locked on any screen. No black bars, no distortion.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <PlayCircle className="w-6 h-6 mr-2 text-indigo-500" />
            Video Studio
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

            {/* Mode Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
              {[
                { id: 'aspect-ratio', label: 'Aspect Ratio Hack' },
                { id: 'object-fit', label: 'Object Fit' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${activeTab === tab.id
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <ControlSlider
                label="Container Width"
                value={containerWidth}
                onChange={setContainerWidth}
                min={30} max={100} step={1} unit="%"
              />

              {activeTab === 'aspect-ratio' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Target Ratio</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: '16:9', val: '56.25%' },
                      { label: '4:3', val: '75%' },
                      { label: '1:1', val: '100%' }
                    ].map((ratio) => (
                      <button
                        key={ratio.label}
                        onClick={() => setAspectRatio(ratio.val)}
                        className={`py-2 text-xs font-bold rounded border transition-all ${aspectRatio === ratio.val
                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                            : 'bg-white border-gray-200 text-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300'
                          }`}
                      >
                        {ratio.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'object-fit' && (
                <ControlSelect
                  label="object-fit"
                  value={objectFit}
                  onChange={setObjectFit}
                  options={['cover', 'contain', 'fill', 'none']}
                />
              )}
            </div>
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Aspect Ratio Demo */}
              {activeTab === 'aspect-ratio' && (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 border-2 border-dashed border-gray-300 dark:border-gray-600"
                  style={{ width: `${containerWidth}%`, maxWidth: '100%' }}
                >
                  <div
                    className="relative w-full bg-black rounded overflow-hidden shadow-inner"
                    style={{ paddingTop: aspectRatio }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <PlayCircle className="w-16 h-16 mx-auto mb-2 opacity-80" />
                        <span className="font-bold text-sm bg-black/50 px-2 py-1 rounded">
                          {aspectRatio === '56.25%' ? '16:9' : aspectRatio === '75%' ? '4:3' : '1:1'} Ratio
                        </span>
                      </div>
                      {/* Simulated Video Content */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-purple-900/50 -z-10"></div>
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2">Resize container to see ratio lock</p>
                </div>
              )}

              {/* Object Fit Demo */}
              {activeTab === 'object-fit' && (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 border-2 border-dashed border-gray-300 dark:border-gray-600"
                  style={{ width: `${containerWidth}%`, maxWidth: '100%' }}
                >
                  <div className="relative w-full h-[300px] bg-black rounded overflow-hidden shadow-inner border border-gray-300 dark:border-gray-600">
                    <video
                      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                      autoPlay
                      muted
                      loop
                      className="w-full h-full"
                      style={{ objectFit: objectFit }}
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      object-fit: {objectFit}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={getCodeSnippet()} title="CSS Rules" />
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Video Scaling Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* The Padding Hack */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Box className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Padding Hack</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">For iframes & embeds</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Since iframes don't maintain aspect ratio naturally, we use a wrapper with <code className="text-indigo-500 font-mono">padding-top</code> percentage.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside mb-4">
              <li>16:9 = 56.25% (9 / 16)</li>
              <li>4:3 = 75% (3 / 4)</li>
            </ul>

            <CodeSnippetBlock
              language="css"
              codeSnippet={`padding-top: 56.25%; /* 16:9 Ratio */`}
            />
          </div>

          {/* Object Fit Video */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Maximize className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Background Videos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Using object-fit</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              For HTML5 <code className="text-indigo-500 font-mono">&lt;video&gt;</code> tags, especially background videos, use <code className="text-indigo-500 font-mono">object-fit: cover</code> to fill the container without distortion.
            </p>

            <CodeSnippetBlock
              language="css"
              codeSnippet={`video { object-fit: cover; }`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssRwdVideos;