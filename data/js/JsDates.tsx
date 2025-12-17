import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Settings, Play, Check, Copy, Terminal, RefreshCw, ArrowRight, Globe } from 'lucide-react';

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

const JsDates = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [activeTab, setActiveTab] = useState('get'); // get, set, format

  // Setter inputs
  const [setYear, setSetYear] = useState(2025);
  const [setMonth, setSetMonth] = useState(0); // 0-11
  const [setDay, setSetDay] = useState(15);

  // Update live clock if not manually modified
  useEffect(() => {
    const timer = setInterval(() => {
      // Only update if user hasn't messed with it too much (optional, but let's keep it simple for now and just let them play with a static instance for setters)
      // Actually, for a lab, it's better to have a static "lab date" that doesn't tick, so they can see changes clearly.
      // So we won't auto-tick the lab date.
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const runDemo = (action, param) => {
    setConsoleOutput([]);
    let code;
    let result;
    let newDate = new Date(currentDate); // Clone

    switch (action) {
      case 'reset':
        const now = new Date();
        setCurrentDate(now);
        code = `> let d = new Date();\n> console.log(d);\n> ${now.toString()}`;
        break;

      // Getters
      case 'getFullYear':
        result = newDate.getFullYear();
        code = `> console.log(d.getFullYear());\n> ${result}`;
        break;
      case 'getMonth':
        result = newDate.getMonth();
        code = `> console.log(d.getMonth());\n> ${result} (0-11)`;
        break;
      case 'getDate':
        result = newDate.getDate();
        code = `> console.log(d.getDate());\n> ${result}`;
        break;
      case 'getDay':
        result = newDate.getDay();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        code = `> console.log(d.getDay());\n> ${result} (${days[result]})`;
        break;
      case 'getTime':
        result = newDate.getTime();
        code = `> console.log(d.getTime());\n> ${result} (ms since 1970)`;
        break;

      // Setters
      case 'setFullYear':
        newDate.setFullYear(param);
        setCurrentDate(newDate);
        code = `> d.setFullYear(${param});\n> console.log(d);\n> ${newDate.toString()}`;
        break;
      case 'setMonth':
        newDate.setMonth(param);
        setCurrentDate(newDate);
        code = `> d.setMonth(${param});\n> console.log(d);\n> ${newDate.toString()}`;
        break;
      case 'setDate':
        newDate.setDate(param);
        setCurrentDate(newDate);
        code = `> d.setDate(${param});\n> console.log(d);\n> ${newDate.toString()}`;
        break;

      // Formats
      case 'toString':
        result = newDate.toString();
        code = `> console.log(d.toString());\n> "${result}"`;
        break;
      case 'toDateString':
        result = newDate.toDateString();
        code = `> console.log(d.toDateString());\n> "${result}"`;
        break;
      case 'toISOString':
        result = newDate.toISOString();
        code = `> console.log(d.toISOString());\n> "${result}"`;
        break;
      case 'toLocaleDateString':
        result = newDate.toLocaleDateString();
        code = `> console.log(d.toLocaleDateString());\n> "${result}"`;
        break;

      default:
        return;
    }

    setConsoleOutput(code.split('\n'));
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-gray-900 min-h-screen font-sans">

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
          <Calendar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          JavaScript Dates
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master time travel in JavaScript. Create, modify, and format dates with the Date object.
        </p>
      </header>

      {/* Interactive Date Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-500" />
            Date Lab
          </h2>
          <button
            onClick={() => runDemo('reset')}
            className="flex items-center px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          >
            <RefreshCw className="w-3 h-3 mr-1" /> Reset to Now
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Manipulate Date
              </h3>

              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                <button onClick={() => setActiveTab('get')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'get' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Get</button>
                <button onClick={() => setActiveTab('set')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'set' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Set</button>
                <button onClick={() => setActiveTab('format')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'format' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>Format</button>
              </div>

              {/* Dynamic Controls */}
              <div className="space-y-4 min-h-[200px]">
                {activeTab === 'get' && (
                  <div className="grid grid-cols-2 gap-3 animate-fade-in">
                    <button onClick={() => runDemo('getFullYear')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">getFullYear()</button>
                    <button onClick={() => runDemo('getMonth')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">getMonth()</button>
                    <button onClick={() => runDemo('getDate')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">getDate()</button>
                    <button onClick={() => runDemo('getDay')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">getDay()</button>
                    <button onClick={() => runDemo('getTime')} className="col-span-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">getTime() (Timestamp)</button>
                  </div>
                )}

                {activeTab === 'set' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center space-x-2">
                      <input type="number" value={setYear} onChange={(e) => setSetYear(Number(e.target.value))} className="w-20 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm" placeholder="Year" />
                      <button onClick={() => runDemo('setFullYear', setYear)} className="flex-1 p-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 text-sm font-bold">setFullYear()</button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="number" value={setMonth} onChange={(e) => setSetMonth(Number(e.target.value))} className="w-20 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm" placeholder="Month (0-11)" />
                      <button onClick={() => runDemo('setMonth', setMonth)} className="flex-1 p-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 text-sm font-bold">setMonth()</button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="number" value={setDay} onChange={(e) => setSetDay(Number(e.target.value))} className="w-20 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm" placeholder="Day" />
                      <button onClick={() => runDemo('setDate', setDay)} className="flex-1 p-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 text-sm font-bold">setDate()</button>
                    </div>
                    <p className="text-xs text-gray-500 italic mt-2">*Month is 0-indexed (0=Jan, 11=Dec)</p>
                  </div>
                )}

                {activeTab === 'format' && (
                  <div className="grid grid-cols-1 gap-3 animate-fade-in">
                    <button onClick={() => runDemo('toString')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">toString() (Full)</button>
                    <button onClick={() => runDemo('toDateString')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">toDateString() (Readable)</button>
                    <button onClick={() => runDemo('toISOString')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">toISOString() (Standard)</button>
                    <button onClick={() => runDemo('toLocaleDateString')} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-200 dark:border-gray-600 text-sm font-semibold text-left">toLocaleDateString() (Local)</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Visualization & Code */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Preview Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-wider">Current Date Object</h3>
                  <div className="flex items-center text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full text-xs font-bold">
                    <Clock className="w-3 h-3 mr-1" /> Live Instance
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 text-center">
                  <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                    {currentDate.toLocaleTimeString()}
                  </div>
                  <div className="text-lg text-gray-500 dark:text-gray-400">
                    {currentDate.toDateString()}
                  </div>
                </div>

                {/* Console Output Simulator */}
                <div className="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-40 overflow-y-auto shadow-inner w-full flex-1">
                  <div className="text-gray-500 border-b border-gray-800 pb-1 mb-2">Console</div>
                  {consoleOutput.length === 0 ? (
                    <span className="text-gray-600 italic">Select an operation...</span>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1 animate-fade-in ${line.startsWith('>') && !line.includes('console') ? 'text-green-400 font-bold' :
                          line.includes('console') ? 'text-blue-300' :
                            'text-yellow-300'
                        }`}>
                        {line}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          Date Concepts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Creating Dates */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Creating Dates</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Create with <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">new Date()</code>.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let now = new Date();
let specific = new Date("2025-01-15");`}
            />
          </div>

          {/* Month Index */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <Settings className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Zero-Indexed Months</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Months count from 0 (Jan) to 11 (Dec).
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let d = new Date(2025, 0, 15);
// Jan 15, 2025`}
            />
          </div>

          {/* Comparing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Comparing Dates</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Compare using standard operators.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`if (date1 > date2) {
  console.log("date1 is later");
}`}
            />
          </div>

          {/* Formats */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">ISO Format</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The standard format for dates.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let d = new Date("2025-01-15T10:30:00");`}
            />
          </div>

          {/* Timestamp */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Timestamp</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Milliseconds since Jan 1, 1970.
            </p>
            <CodeSnippetBlock
              title="Example"
              codeSnippet={`let ms = Date.now();
console.log(ms);`}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default JsDates;