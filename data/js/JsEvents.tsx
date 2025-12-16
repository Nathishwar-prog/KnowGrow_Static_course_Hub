import React, { useState, useEffect } from 'react';
import { MousePointer, Keyboard, Send, Check, Copy, Terminal, Zap, Eye, Hand } from 'lucide-react';

// --- Utility Components ---

const CodeSnippetBlock = ({ codeSnippet, language = 'javascript', title }) => {
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

const JsEvents = () => {
  const [activeTab, setActiveTab] = useState('mouse'); // mouse, keyboard, form
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [hoverState, setHoverState] = useState(false);
  const [keyPress, setKeyPress] = useState('');
  const [formValue, setFormValue] = useState('');

  const logEvent = (message) => {
    setConsoleOutput(prev => [`> ${message}`, ...prev].slice(0, 5));
  };

  const getEventData = () => {
    switch (activeTab) {
      case 'mouse':
        return {
          title: 'Mouse Events',
          description: 'Triggered by mouse actions like click, hover, and movement.',
          code: `const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button Clicked!");
});

btn.addEventListener("mouseover", () => {
  console.log("Mouse Over!");
});`
        };
      case 'keyboard':
        return {
          title: 'Keyboard Events',
          description: 'Triggered when keys are pressed or released.',
          code: `const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  console.log("Key pressed: " + event.key);
});`
        };
      case 'form':
        return {
          title: 'Form Events',
          description: 'Triggered by form interactions like submit or change.',
          code: `const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop reload
  console.log("Form Submitted!");
});`
        };
      default:
        return {};
    }
  };

  const data = getEventData();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Events
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Make your web pages come alive. React to clicks, key presses, and user interactions.
        </p>
      </header>

      {/* Interactive Event Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Event Lab
          </h2>
          <button
            onClick={() => setConsoleOutput([])}
            className="px-3 py-1 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Clear Console
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Event Types
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab('mouse')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'mouse'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'mouse' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <MousePointer className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Mouse Events</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Click, Hover</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('keyboard')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'keyboard'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'keyboard' ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Keyboard className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Keyboard Events</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Keydown, Keyup</div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('form')}
                  className={`w-full flex items-center p-4 rounded-xl border-2 transition-all duration-200 ${activeTab === 'form'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-4 ${activeTab === 'form' ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                    <Send className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 dark:text-white">Form Events</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Submit, Change</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col items-center justify-center">

                {/* Mouse Demo */}
                {activeTab === 'mouse' && (
                  <div
                    className={`p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform ${hoverState
                        ? 'bg-blue-600 scale-110 shadow-blue-500/50'
                        : 'bg-white dark:bg-gray-800 scale-100'
                      }`}
                    onClick={() => logEvent('Event: click')}
                    onMouseEnter={() => { setHoverState(true); logEvent('Event: mouseover'); }}
                    onMouseLeave={() => { setHoverState(false); logEvent('Event: mouseout'); }}
                  >
                    <div className={`text-center font-bold text-xl ${hoverState ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                      {hoverState ? 'Mouse Over!' : 'Hover or Click Me'}
                    </div>
                  </div>
                )}

                {/* Keyboard Demo */}
                {activeTab === 'keyboard' && (
                  <div className="w-full max-w-md">
                    <input
                      type="text"
                      placeholder="Type something here..."
                      className="w-full p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-lg focus:outline-none focus:border-purple-500 transition-colors"
                      onKeyDown={(e) => { setKeyPress(e.key); logEvent(`Event: keydown (${e.key})`); }}
                      onKeyUp={(e) => logEvent(`Event: keyup (${e.key})`)}
                    />
                    <div className="mt-4 text-center text-gray-500 dark:text-gray-400 font-mono">
                      Last Key Pressed: <span className="font-bold text-purple-500">{keyPress || 'None'}</span>
                    </div>
                  </div>
                )}

                {/* Form Demo */}
                {activeTab === 'form' && (
                  <form
                    className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    onSubmit={(e) => { e.preventDefault(); logEvent(`Event: submit (Value: ${formValue})`); }}
                  >
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Enter Name</label>
                    <input
                      type="text"
                      required
                      value={formValue}
                      onChange={(e) => setFormValue(e.target.value)}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 mb-4"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                      Submit Form
                    </button>
                  </form>
                )}

                {/* Console Output Simulator */}
                <div className="mt-8 bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-32 overflow-y-auto shadow-inner w-full max-w-lg">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Event Log</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Waiting for events...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className="mb-1 text-green-400 animate-fade-in">
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <CodeSnippetBlock codeSnippet={data.code} title={`${data.title} Example`} />
          </div>
        </div>
      </section>

      {/* Common Events Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Common Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Mouse */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <MousePointer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Mouse</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">click</code> - Mouse click</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">dblclick</code> - Double click</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">mouseover</code> - Hover over</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">mouseout</code> - Hover out</li>
            </ul>
          </div>

          {/* Keyboard */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <Keyboard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Keyboard</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">keydown</code> - Key pressed</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">keyup</code> - Key released</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">keypress</code> - Character typed</li>
            </ul>
          </div>

          {/* Form/Window */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Form & Window</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">submit</code> - Form submitted</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">change</code> - Input changed</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">load</code> - Page loaded</li>
              <li><code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">focus</code> - Element focused</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsEvents;