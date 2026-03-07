import React, { useState } from 'react';
import {
  Code, BookOpen, Star, RefreshCw, Box, MonitorPlay,
  FileCode, Cpu, AlertTriangle, Database, FastForward, CheckCircle2,
  Terminal, Check, Copy, Link, Server, FileText, ChevronRight, Play,
  Globe, ArrowRight, Shield, Layers
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title }: { codeSnippet: string, title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm w-full">
      {title && (
        <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
        </div>
      )}
      <div className="relative group bg-slate-900 border-t border-slate-800">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};

const PythonJSON: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runDemo = (action: string) => {
    setConsoleOutput([]);
    let output: string[] = [];

    switch (action) {
      case 'loads':
        output = [
          ">>> import json",
          ">>> json_data = '{\"name\":\"Issac\",\"age\":19}'",
          ">>> data = json.loads(json_data)",
          ">>> print(data[\"name\"])",
          "Issac"
        ];
        break;
      case 'dumps':
        output = [
          ">>> import json",
          ">>> data = {\"name\": \"Issac\", \"age\": 19}",
          ">>> json_data = json.dumps(data)",
          ">>> print(json_data)",
          "{\"name\": \"Issac\", \"age\": 19}"
        ];
        break;
      case 'format':
        output = [
          ">>> import json",
          ">>> data = {\"name\": \"Issac\", \"skills\": [\"Python\", \"Data Science\"]}",
          ">>> print(json.dumps(data, indent=4))",
          "{",
          "    \"name\": \"Issac\",",
          "    \"skills\": [",
          "        \"Python\",",
          "        \"Data Science\"",
          "    ]",
          "}"
        ];
        break;
      case 'sort':
        output = [
          ">>> import json",
          ">>> data = {\"b\":1, \"a\":2, \"c\":3}",
          ">>> print(json.dumps(data, sort_keys=True))",
          "{\"a\": 2, \"b\": 1, \"c\": 3}"
        ];
        break;
      case 'clear':
        output = [];
        break;
      default:
        break;
    }
    setConsoleOutput(output);
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl mb-6 shadow-sm border border-teal-200 dark:border-teal-800/50">
          <FileCode className="w-10 h-10 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python JSON
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data between systems.
        </p>
      </header>

      {/* 1. What is JSON & 2. Why JSON */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-teal-500 mr-3" />
            <h2 className="text-2xl font-bold">1. Introduction to JSON</h2>
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-300">
            JSON is widely used in Web APIs, Web applications, Data storage, and Configuration files. Python provides a built-in module called <code className="bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-1 rounded font-bold">json</code> to work with JSON data easily.
          </p>
          <CodeSnippetBlock 
            title="Example JSON Data"
            codeSnippet={`{\n  "name": "Issac",\n  "age": 19,\n  "course": "Python Programming"\n}`} 
          />
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold">2. Why JSON is Important</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            JSON is commonly used when data needs to be transferred between a server and a client.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mb-6 font-mono text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <div className="flex items-center"><Server className="w-4 h-4 mr-2 text-indigo-400"/> Web browser &harr; server communication</div>
            <div className="flex items-center"><MonitorPlay className="w-4 h-4 mr-2 text-indigo-400"/> Mobile apps &harr; backend systems</div>
            <div className="flex items-center"><Link className="w-4 h-4 mr-2 text-indigo-400"/> APIs sending data responses</div>
          </div>

          <h3 className="font-bold mb-3 text-slate-800 dark:text-slate-200">Advantages of JSON:</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="font-medium text-sm text-emerald-900 dark:text-emerald-300">Lightweight</span>
            </div>
            <div className="flex items-center p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="font-medium text-sm text-emerald-900 dark:text-emerald-300">Human-readable</span>
            </div>
            <div className="flex items-center p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="font-medium text-sm text-emerald-900 dark:text-emerald-300">Easy to parse</span>
            </div>
            <div className="flex items-center p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="font-medium text-sm text-emerald-900 dark:text-emerald-300">Language-independent</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JSON vs Dictionary & 10. Real World Example (API) */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex items-center mb-6">
            <Box className="w-8 h-8 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-indigo-100">3. JSON vs Python Dictionary</h2>
          </div>
          <p className="mb-6 text-indigo-900 dark:text-indigo-200">
            JSON data is structurally very similar to Python dictionaries, but they map to specific data types.
          </p>
          
          <table className="w-full mb-6 border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-100 dark:bg-indigo-900/50">
                <th className="p-3 text-left border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold">JSON</th>
                <th className="p-3 text-left border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold">Python</th>
              </tr>
            </thead>
            <tbody>
               <tr>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">Object</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300">Dictionary</td>
               </tr>
               <tr className="bg-indigo-100/30 dark:bg-indigo-900/20">
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">Array</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300">List</td>
               </tr>
               <tr>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">String</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300">String</td>
               </tr>
               <tr className="bg-indigo-100/30 dark:bg-indigo-900/20">
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">Number</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300">int / float</td>
               </tr>
               <tr>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">true / false</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">True / False</td>
               </tr>
               <tr className="bg-indigo-100/30 dark:bg-indigo-900/20">
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">null</td>
                 <td className="p-2 border border-indigo-100 dark:border-indigo-800/50 text-indigo-800 dark:text-indigo-300 font-mono">None</td>
               </tr>
            </tbody>
          </table>
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="flex-1">
               <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm mb-2">JSON:</h4>
               <pre className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-xs border border-indigo-200 dark:border-indigo-700">{`{\n "name": "John",\n "age": 25\n}`}</pre>
             </div>
             <div className="flex-1">
               <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm mb-2">Python Dictionary:</h4>
               <pre className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-xs border border-indigo-200 dark:border-indigo-700">{`data = {\n "name": "John",\n "age": 25\n}`}</pre>
             </div>
          </div>
         </div>

         <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
             <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">10. Real-World API Example</h2>
            </div>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
               Many web APIs return JSON data. Here is an example extracting weather data fetched from an API:
            </p>
            <CodeSnippetBlock 
               title="parsing JSON from an API Response"
               codeSnippet={`import json\n\n# Mock API Response String\nresponse = '{"city":"Chennai","temperature":32,"weather":"Sunny"}'\n\ndata = json.loads(response)\n\nprint("City:", data["city"])\nprint("Temperature:", data["temperature"])`}
            />
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
               <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                  <Terminal className="w-4 h-4 mr-2" /> Output
               </div>
               <div className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                  City: Chennai<br/>Temperature: 32
               </div>
            </div>
         </div>
      </section>

      {/* 4. Parsing, 5. Encoding, 8. Formatting, 9. Sorting */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-teal-500 mr-3" />
            Working with JSON in Python
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Essential functions for converting between JSON strings and Python dictionaries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {/* Loads */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-[100px] -z-0"></div>
               <h3 className="text-xl font-bold mb-2 relative z-10">4. Parse JSON (<code className="text-blue-600 dark:text-blue-400">loads</code>)</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 relative z-10">Convert JSON string <ArrowRight className="inline w-4 h-4"/> Python dictionary</p>
               <CodeSnippetBlock codeSnippet={`import json\n\njson_data = '{"name":"Issac","age":19}'\n\ndata = json.loads(json_data)\nprint(data["name"]) # Issac`} />
           </div>

           {/* Dumps */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-bl-[100px] -z-0"></div>
               <h3 className="text-xl font-bold mb-2 relative z-10">5. Stringify to JSON (<code className="text-purple-600 dark:text-purple-400">dumps</code>)</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 relative z-10">Convert Python dictionary <ArrowRight className="inline w-4 h-4"/> JSON string</p>
               <CodeSnippetBlock codeSnippet={`import json\n\ndata = {"name": "Issac", "age": 19}\n\njson_data = json.dumps(data)\nprint(json_data) # {"name": "Issac", "age": 19}`} />
           </div>

           {/* Formatting */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
               <h3 className="text-xl font-bold mb-2">8. Formatting JSON Output</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">JSON can be formatted for better readability using the <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">indent</code> parameter.</p>
               <CodeSnippetBlock 
                 title="Pretty Print JSON"
                 codeSnippet={`import json\ndata = {"name": "Issac", "skills": ["Python"]}\n\nprint(json.dumps(data, indent=4))`} 
               />
               <div className="bg-slate-900 p-3 rounded font-mono text-xs text-blue-300 border border-slate-700">
{`{
    "name": "Issac",
    "skills": [
        "Python"
    ]
}`}
               </div>
           </div>

           {/* Sorting */}
           <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
               <h3 className="text-xl font-bold mb-2">9. Sorting JSON Keys</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">You can force the resulting JSON object keys to be sorted alphabetically using <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">sort_keys</code>.</p>
               <CodeSnippetBlock 
                 title="Automatically Sort Keys"
                 codeSnippet={`import json\n\ndata = {"b":1, "a":2, "c":3}\n\nprint(json.dumps(data, sort_keys=True))`} 
               />
               <div className="bg-slate-900 p-3 rounded font-mono text-xs text-blue-300 border border-slate-700">
                 {"{\"a\": 2, \"b\": 1, \"c\": 3}"}
               </div>
           </div>
        </div>
      </section>

      {/* Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Python JSON Lab</h2>
                <p className="text-slate-500 text-sm">Test dict-JSON conversions in real-time</p>
              </div>
            </div>
            <button
              onClick={() => runDemo('clear')}
              className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Clear Console
            </button>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4">Run Code Snippets:</h3>
              <button onClick={() => runDemo('loads')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-1">1. json.loads()</div>
                <div className="text-xs text-slate-500">Parse a JSON string to a Dict.</div>
              </button>
              <button onClick={() => runDemo('dumps')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">2. json.dumps()</div>
                <div className="text-xs text-slate-500">Stringify a Dict to a JSON string.</div>
              </button>
              <button onClick={() => runDemo('format')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 mb-1">3. Formatted Print</div>
                <div className="text-xs text-slate-500">Add indentation for readability.</div>
              </button>
              <button onClick={() => runDemo('sort')} className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-400 bg-slate-50 dark:bg-slate-900/50 transition-colors group">
                <div className="font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 mb-1">4. Sorted Keys</div>
                <div className="text-xs text-slate-500">Ensure chronological key sorting.</div>
              </button>
            </div>

            <div className="bg-slate-900 p-6 min-h-[300px] flex flex-col font-mono relative">
              <div className="text-xs font-bold text-slate-500 mb-4 border-b border-slate-800 pb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2" /> Python Interactive Console
              </div>
              <div className="flex-1 overflow-y-auto whitespace-pre">
                {consoleOutput.length === 0 ? (
                  <div className="mt-20 text-center text-slate-600 animate-pulse">Select an example to run...</div>
                ) : (
                  consoleOutput.map((line, idx) => (
                    <div key={idx} className={`text-sm mb-1 ${line.startsWith('>>>') ? 'text-blue-400' : 'text-emerald-400 font-bold'}`}>
                      {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reading from file & 7. Writing to file */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
         <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-800/30">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold dark:text-amber-100">6. Reading JSON from a File</h2>
          </div>
          <p className="mb-6 text-amber-900 dark:text-amber-200">
            For working with external physical JSON files (e.g. <code className="font-bold">data.json</code>), we use <code className="bg-amber-200 dark:bg-amber-800 px-1 rounded">json.load()</code> (Notice there's no "s").
          </p>
          <CodeSnippetBlock 
            title="Read from file structure"
            codeSnippet={`import json\n\nwith open("data.json") as file:\n    data = json.load(file)\n\nprint(data["name"])`}
          />
         </div>

         <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-2xl shadow-sm border border-rose-200 dark:border-rose-800/30 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold dark:text-rose-100">7. Writing JSON to a File</h2>
            </div>
            <p className="mb-6 text-rose-900 dark:text-rose-200">
              To save data persistently for later use, we use <code className="bg-rose-200 dark:bg-rose-800 px-1 rounded">json.dump()</code> to insert data into a physical file.
            </p>
            <CodeSnippetBlock 
              title="Save to file structure"
              codeSnippet={`import json\n\ndata = {\n    "name": "Issac",\n    "age": 19\n}\n\nwith open("data.json", "w") as file:\n    json.dump(data, file)`}
            />
         </div>
      </section>

      {/* 11. Execution Flow */}
      <section className="max-w-4xl mx-auto mb-16 bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl overflow-hidden relative">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
               <h3 className="text-2xl font-bold text-white mb-2">11. Execution Flow</h3>
               <p className="text-slate-400 text-sm">Translating back and forth between Dictionary and String</p>
            </div>
            
            <div className="flex-1 flex flex-col gap-6 w-full mt-6 md:mt-0 font-mono text-sm">
               {/* Parse Line */}
               <div className="flex items-center justify-between border border-blue-500/30 bg-blue-900/40 p-3 rounded-xl shadow-sm">
                 <div className="text-blue-200 font-bold bg-slate-800 p-2 rounded">JSON Data</div>
                 <div className="flex flex-col items-center flex-1 mx-2 relative group">
                    <div className="absolute inset-x-0 h-0.5 bg-blue-500 top-1/2 -translate-y-1/2 group-hover:bg-blue-400 transition-colors"></div>
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs relative z-10 font-bold tracking-wider">json.loads() &rarr;</div>
                 </div>
                 <div className="text-emerald-300 font-bold bg-slate-800 p-2 rounded">Dictionary</div>
               </div>

               {/* Stringify Line */}
               <div className="flex items-center justify-between border border-purple-500/30 bg-purple-900/40 p-3 rounded-xl shadow-sm">
                 <div className="text-emerald-300 font-bold bg-slate-800 p-2 rounded">Dictionary</div>
                 <div className="flex flex-col items-center flex-1 mx-2 relative group">
                    <div className="absolute inset-x-0 h-0.5 bg-purple-500 top-1/2 -translate-y-1/2 group-hover:bg-purple-400 transition-colors"></div>
                    <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs relative z-10 font-bold tracking-wider">json.dumps() &rarr;</div>
                 </div>
                 <div className="text-blue-200 font-bold bg-slate-800 p-2 rounded">JSON Data</div>
               </div>
            </div>
         </div>
      </section>

      {/* 12. Mistakes & 13. Dev Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 p-8 opacity-20"><Database className="w-48 h-48 text-white" /></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-4 flex items-center relative z-10">
            <Star className="w-8 h-8 mr-3 text-yellow-300 fill-yellow-300" />
            13. Personal Developer Tips
          </h2>
          <p className="text-teal-100 mb-10 font-medium italic relative z-10 text-lg border-b border-teal-400/30 pb-4 inline-block">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Server className="text-yellow-300 mr-2" /> Tip 1 — Exchange</h3>
              <p className="text-sm text-teal-50 mb-4">JSON is the absolute standard format for APIs and web services. Most modern systems communicate purely using JSON data formatting.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><Shield className="text-blue-300 mr-2" /> Tip 2 — Validate</h3>
              <p className="text-sm text-teal-50 mb-4">External JSON data may contain errors or malicious payloads. Always validate data schemas before blindly processing them into your servers.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-4 flex items-center"><MonitorPlay className="text-emerald-300 mr-2" /> Tip 3 — Formatting</h3>
              <p className="text-sm text-teal-50 mb-4">Use Pretty Printing heavily during system debugging:</p>
              <div className="bg-black/30 p-2 rounded-lg font-mono text-xs overflow-x-auto">
                 json.dumps(data, indent=4)
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 dark:border-slate-700 pb-4 flex items-center">
          <AlertTriangle className="w-8 h-8 text-rose-500 mr-3" />
          12. Common Beginner Mistakes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 1</span> 
              Using Single Quotes in JSON
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong JSON ❌</span>
                {'{\'name\':\'Issac\'}'}
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct JSON ✔</span>
                {'{"name":"Issac"}'}
              </div>
              <p className="text-slate-500 text-xs italic font-sans mt-2">Note: Valid JSON string rules require double quotes strictly.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-lg mb-4 flex items-center text-slate-800 dark:text-slate-200">
              <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs mr-3">Mistake 2</span> 
              Forgetting to Import JSON Module
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300">
                <span className="font-bold uppercase text-xs block mb-2">Wrong ❌</span>
                data = json.loads(text) <br/>
                <span className="text-red-500/70 block mt-1"># NameError: name 'json' is not defined</span>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold uppercase text-xs block mb-2">Correct ✔</span>
                import json<br/><br/>
                data = json.loads(text)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Practice Exercises */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
         <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <Layers className="w-8 h-8 text-teal-500 mr-3" />
            14. Practice Exercises
         </h2>
         <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to test your knowledge? Try these hands-on challenges.</p>
         
         <div className="space-y-4 text-left">
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">1</span> 
                 Exercise 1
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Convert the following JSON string into a Python dictionary: <br/><code className="font-mono bg-teal-100 dark:bg-teal-900/50 px-2 py-1 rounded inline-block mt-2">{'{"name":"Alice","age":22}'}</code></p>
            </div>
            
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">2</span> 
                 Exercise 2
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a Python dictionary containing your info and securely convert it to a JSON string.</p>
            </div>
            
            <div className="border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm">
               <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-2 flex items-center">
                 <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-3">3</span> 
                 Exercise 3
               </h3>
               <p className="text-slate-700 dark:text-slate-300">Create a dummy JSON file and successfully read its mapped dictionary data using Python file I/O operations.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PythonJSON;