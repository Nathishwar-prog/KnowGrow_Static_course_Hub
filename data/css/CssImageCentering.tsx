import React, { useState } from 'react';
import { AlignCenter, Layout, Grid, Move, Maximize, Circle, Image, Code, Check, Copy, Box, Layers } from 'lucide-react';

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

const MethodCard = ({ title, description, icon: Icon, code, active, onClick }) => (
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
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 ml-12">
      {description}
    </p>
  </button>
);

// --- Main Component ---

const CssImageCentering = () => {
  const [activeMethod, setActiveMethod] = useState('flexbox');

  const methods = {
    flexbox: {
      title: 'Flexbox',
      icon: Layout,
      description: 'The modern standard. Centers horizontally and vertically with ease.',
      containerStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
      imageStyle: {},
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`
    },
    grid: {
      title: 'CSS Grid',
      icon: Grid,
      description: 'The shortest code solution. One line to rule them all.',
      containerStyle: { display: 'grid', placeItems: 'center' },
      imageStyle: {},
      code: `.container {
  display: grid;
  place-items: center;
}`
    },
    margin: {
      title: 'Margin Auto',
      icon: AlignCenter,
      description: 'Classic horizontal centering for block elements.',
      containerStyle: { display: 'block' }, // Reset flex/grid
      imageStyle: { display: 'block', margin: '0 auto' }, // Needs vertical centering help usually, but good for horizontal
      code: `img {
  display: block;
  margin: 0 auto;
}`
    },
    absolute: {
      title: 'Absolute Position',
      icon: Move,
      description: 'Precise control using transform translate.',
      containerStyle: { position: 'relative' },
      imageStyle: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      code: `.container { position: relative; }

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`
    },
    textalign: {
      title: 'Text Align',
      icon: AlignCenter,
      description: 'For inline or inline-block images.',
      containerStyle: { textAlign: 'center', display: 'block', lineHeight: '300px' }, // lineHeight hack for vertical center demo
      imageStyle: { display: 'inline-block', verticalAlign: 'middle' },
      code: `.container {
  text-align: center;
}
/* Image is inline by default */`
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <AlignCenter className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Image Centering
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stop struggling with alignment. Master the 5 best techniques to center images perfectly in any situation.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layers className="w-6 h-6 mr-2 text-indigo-500" />
            Centering Playground
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-4">
            {Object.entries(methods).map(([key, method]) => (
              <MethodCard
                key={key}
                title={method.title}
                description={method.description}
                icon={method.icon}
                active={activeMethod === key}
                onClick={() => setActiveMethod(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="flex-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-dashed border-indigo-300 dark:border-indigo-700 relative transition-all duration-300"
                style={{ height: '300px', ...methods[activeMethod].containerStyle }}>

                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=300&q=80"
                  alt="Dog"
                  className="w-32 h-32 object-cover rounded-lg shadow-lg transition-all duration-300"
                  style={methods[activeMethod].imageStyle}
                />

                {/* Helper lines for visual reference */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-red-500"></div>
                  <div className="absolute left-1/2 top-0 h-full w-px bg-red-500"></div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Container Area (300px height)
                </p>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={methods[activeMethod].code}
              title={`CSS for ${methods[activeMethod].title}`}
            />
          </div>
        </div>
      </section>

      {/* Additional Techniques Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Special Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Responsive Centering */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Maximize className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Responsive Centering</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ensures the image remains centered and scaled correctly on all screen sizes.
            </p>
            <CodeSnippetBlock codeSnippet={`img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}`} />
          </div>

          {/* Background Image Centering */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Image className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Background Image</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Perfect for hero sections or container backgrounds.
            </p>
            <CodeSnippetBlock codeSnippet={`.container {
  background-image: url("img.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}`} />
          </div>

          {/* Circular Image */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg mr-3">
                <Circle className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Circular Avatar</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Commonly used for profile pictures.
            </p>
            <CodeSnippetBlock codeSnippet={`img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}`} />
          </div>

          {/* Inline Style */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Box className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Inline Style (Quick Fix)</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Useful for quick demos or emails, but avoid in production.
            </p>
            <CodeSnippetBlock language="html" codeSnippet={`<img src="img.jpg" style="display:block; margin:auto;">`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssImageCentering;