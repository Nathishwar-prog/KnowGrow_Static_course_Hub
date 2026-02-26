import React, { useState } from 'react';
import { Code, Check, Copy, Layers, Box, Zap, Repeat, GitBranch, Terminal } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'scss', title }) => {
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

const CssSassTutorial = () => {
  const [activeFeature, setActiveFeature] = useState('variables'); // variables, nesting, mixins, functions

  const getFeatureData = () => {
    switch (activeFeature) {
      case 'variables':
        return {
          title: 'Variables',
          description: 'Store reusable values like colors and fonts. Change once, update everywhere.',
          scss: `$primary-color: #6366f1;
$border-radius: 8px;

.card {
  background-color: $primary-color;
  border-radius: $border-radius;
}`,
          css: `.card {
  background-color: #6366f1;
  border-radius: 8px;
}`
        };
      case 'nesting':
        return {
          title: 'Nesting',
          description: 'Write CSS that mimics your HTML hierarchy. Cleaner and more readable.',
          scss: `nav {
  background: #333;
  
  ul {
    margin: 0;
    
    li { display: inline-block; }
  }
  
  a { color: white; }
}`,
          css: `nav { background: #333; }
nav ul { margin: 0; }
nav ul li { display: inline-block; }
nav a { color: white; }`
        };
      case 'mixins':
        return {
          title: 'Mixins',
          description: 'Reusable blocks of styles. Pass arguments to generate dynamic CSS.',
          scss: `@mixin button($bg-color) {
  padding: 10px 20px;
  background: $bg-color;
  color: white;
}

.btn-primary {
  @include button(blue);
}
.btn-danger {
  @include button(red);
}`,
          css: `.btn-primary {
  padding: 10px 20px;
  background: blue;
  color: white;
}
.btn-danger {
  padding: 10px 20px;
  background: red;
  color: white;
}`
        };
      case 'functions':
        return {
          title: 'Functions',
          description: 'Perform calculations and return values directly in your stylesheet.',
          scss: `@function rem($px) {
  @return $px / 16 * 1rem;
}

.title {
  font-size: rem(32);
}`,
          css: `.title {
  font-size: 2rem;
}`
        };
      default:
        return {};
    }
  };

  const data = getFeatureData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900/30 rounded-2xl mb-4">
          <Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          SASS / SCSS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          CSS with superpowers. Variables, nesting, mixins, and more to supercharge your workflow.
        </p>
      </header>

      {/* Interactive Compiler */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-pink-500" />
            Live Compiler
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Interactive
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Features</h3>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'variables', label: 'Variables', icon: Box },
                  { id: 'nesting', label: 'Nesting', icon: GitBranch },
                  { id: 'mixins', label: 'Mixins', icon: Layers },
                  { id: 'functions', label: 'Functions', icon: Code }
                ].map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`flex items-center p-3 rounded-lg transition-all text-sm font-bold ${activeFeature === feature.id
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/30'
                      }`}
                  >
                    <feature.icon className="w-4 h-4 mr-3" />
                    {feature.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl border border-pink-100 dark:border-pink-800/30">
              <p className="text-sm text-pink-800 dark:text-pink-300">
                <strong>{data.title}:</strong> {data.description}
              </p>
            </div>
          </div>

          {/* Code Comparison */}
          <div className="lg:col-span-9 grid md:grid-cols-2 gap-6">
            {/* SCSS Input */}
            <div className="flex flex-col">
              <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-t-xl text-xs font-bold uppercase flex justify-between items-center border-b border-gray-700">
                <span>Input (SCSS)</span>
                <span className="text-pink-400">style.scss</span>
              </div>
              <div className="flex-1 bg-gray-900 rounded-b-xl overflow-hidden border border-gray-700 shadow-inner">
                <pre className="p-4 text-sm font-mono text-pink-300 leading-relaxed h-full">
                  <code>{data.scss}</code>
                </pre>
              </div>
            </div>

            {/* CSS Output */}
            <div className="flex flex-col">
              <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-t-xl text-xs font-bold uppercase flex justify-between items-center border-b border-gray-700">
                <span>Output (CSS)</span>
                <span className="text-blue-400">style.css</span>
              </div>
              <div className="flex-1 bg-gray-900 rounded-b-xl overflow-hidden border border-gray-700 shadow-inner relative">
                <div className="absolute top-4 right-4 text-gray-600">
                  <Repeat className="w-6 h-6 animate-pulse" />
                </div>
                <pre className="p-4 text-sm font-mono text-blue-300 leading-relaxed h-full">
                  <code>{data.css}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Advanced Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Control Directives */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Repeat className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Control Directives</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Logic in CSS</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Use <code className="text-pink-500 font-mono">@if</code>, <code className="text-pink-500 font-mono">@else</code>, <code className="text-pink-500 font-mono">@for</code>, and <code className="text-pink-500 font-mono">@each</code> to write dynamic styles.
            </p>

            <CodeSnippetBlock
              language="scss"
              codeSnippet={`@for $i from 1 through 3 {
  .col-#{$i} { width: 100% / $i; }
}`}
            />
          </div>

          {/* Partials & Modules */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Partials & Modules</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Organization</p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Split your CSS into small, manageable files (partials) starting with an underscore (e.g., <code className="text-pink-500 font-mono">_variables.scss</code>) and import them.
            </p>

            <CodeSnippetBlock
              language="scss"
              codeSnippet={`@use 'variables';
@use 'mixins';

body {
  color: variables.$primary-color;
}`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default CssSassTutorial;