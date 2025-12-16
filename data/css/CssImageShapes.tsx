import React, { useState } from 'react';
import { Hexagon, Circle, Square, Triangle, Scissors, Type, Layers, Code, Check, Copy, MousePointer, Layout } from 'lucide-react';

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

const ShapeCard = ({ title, description, icon: Icon, active, onClick }) => (
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

const CssImageShapes = () => {
  const [activeShape, setActiveShape] = useState('circle');

  const shapes = {
    circle: {
      title: 'Circle',
      icon: Circle,
      description: 'Perfect for avatars and profile pictures.',
      style: { borderRadius: '50%' },
      code: `img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}`
    },
    rounded: {
      title: 'Rounded Rect',
      icon: Square,
      description: 'Softens the corners of standard images.',
      style: { borderRadius: '24px' },
      code: `img {
  border-radius: 24px;
}`
    },
    triangle: {
      title: 'Triangle',
      icon: Triangle,
      description: 'Created using the polygon clip-path.',
      style: { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
      code: `img {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`
    },
    hexagon: {
      title: 'Hexagon',
      icon: Hexagon,
      description: 'A complex 6-sided polygon shape.',
      style: { clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' },
      code: `img {
  clip-path: polygon(
    25% 0%, 75% 0%,
    100% 50%, 75% 100%,
    25% 100%, 0% 50%
  );
}`
    },
    ellipse: {
      title: 'Ellipse',
      icon: Circle,
      description: 'An oval shape using clip-path ellipse.',
      style: { clipPath: 'ellipse(50% 40% at 50% 50%)' },
      code: `img {
  clip-path: ellipse(50% 40% at 50% 50%);
}`
    },
    inset: {
      title: 'Inset Frame',
      icon: Layout,
      description: 'Crops the image from the sides.',
      style: { clipPath: 'inset(20px 30px)' },
      code: `img {
  clip-path: inset(20px 30px);
}`
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-4">
          <Scissors className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          CSS Image Shapes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Break free from the box. Sculpt your images into circles, polygons, and custom forms using pure CSS.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Layers className="w-6 h-6 mr-2 text-indigo-500" />
            Shape Studio
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-3">
            {Object.entries(shapes).map(([key, shape]) => (
              <ShapeCard
                key={key}
                title={shape.title}
                description={shape.description}
                icon={shape.icon}
                active={activeShape === key}
                onClick={() => setActiveShape(key)}
              />
            ))}
          </div>

          {/* Preview & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                  alt="Sneaker"
                  className="w-64 h-64 object-cover shadow-2xl transition-all duration-500"
                  style={shapes[activeShape].style}
                />

                {/* Hover Hint */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {shapes[activeShape].title} Shape
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock
              codeSnippet={shapes[activeShape].code}
              title={`CSS for ${shapes[activeShape].title}`}
            />
          </div>
        </div>
      </section>

      {/* Advanced Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Shape Outside */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg mr-3">
                <Type className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Text Wrapping</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Using shape-outside</p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <div className="float-left w-24 h-24 bg-indigo-500 mr-4 mb-2 shape-circle" style={{ shapeOutside: 'circle(50%)', clipPath: 'circle(50%)' }}></div>
              <p>
                The <code className="text-indigo-500 font-mono">shape-outside</code> property allows text to wrap around the contours of a floated image, rather than just its rectangular bounding box. This creates a much more organic and magazine-like layout style. Notice how this text curves around the circle on the left.
              </p>
            </div>

            <CodeSnippetBlock codeSnippet={`.shape-img {
  float: left;
  width: 150px;
  height: 150px;
  shape-outside: circle(50%);
  clip-path: circle(50%);
}`} />
          </div>

          {/* Hover Transformation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <MousePointer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hover Morphing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Interactive shape changes</p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 transition-all duration-500 ease-in-out hover:rounded-full cursor-pointer flex items-center justify-center text-white font-bold shadow-lg">
                Hover Me
              </div>
            </div>

            <CodeSnippetBlock codeSnippet={`div {
  border-radius: 0;
  transition: border-radius 0.5s;
}

div:hover {
  border-radius: 50%;
}`} />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssImageShapes;