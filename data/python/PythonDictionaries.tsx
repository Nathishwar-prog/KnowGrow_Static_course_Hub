import React, { useState } from 'react';
import { 
  BookOpen, Terminal, RefreshCw, Check, Copy, 
  Lightbulb, Play, ArrowRight, CheckCircle2, 
  Database, Key, Hash, FileJson, 
  Network, Code2, Target, AlertCircle
} from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, highlightLines = [] }: { codeSnippet: string, title?: string, highlightLines?: number[] }) => {
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
            className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-neutral-600 hover:text-white transition-colors border border-slate-700"
            title="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm font-mono text-neutral-300 leading-relaxed">
          <code>
            {codeSnippet.split('\n').map((line, index) => {
              const isComment = line.trim().startsWith('#');
              return (
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-amber-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('def ') || line.includes('return ') ? 'text-rose-400 font-bold' : 
                    line.includes('for ') || line.includes('in ') || line.includes('del ') ? 'text-fuchsia-400 font-bold' :
                    line.includes('print') || line.includes('dict') ? 'text-blue-400' : 
                    line.includes('"') || line.includes("'") ? 'text-emerald-400' :
                    line.includes('{') || line.includes('}') ? 'text-amber-400 font-bold' :
                    line.includes('=') || line.includes(':') ? 'text-neutral-300' : 'text-neutral-200'}>
                    {line}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};

const PythonDictionaries: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'modify' | 'loops' | 'methods'>('basics');

  // Interactive mock state of a dictionary
  const [mockDict, setMockDict] = useState<{ [key: string]: any }>({
    name: "Issac",
    age: 19,
    course: "Python"
  });

  const formatDictStr = (d: { [key: string]: any }) => {
    const pairs = Object.entries(d).map(([k, v]) => `'${k}': ${typeof v === 'string' ? `'${v}'` : v}`);
    return `{${pairs.join(', ')}}`;
  };

  const runDemo = (action: string) => {
    let codeStr = '';
    const newDict = { ...mockDict };

    switch (action) {
      case 'create':
        codeStr = `>>> student = {\n...     "name": "Issac",\n...     "age": 19,\n...     "course": "Python"\n... }\n>>> print(student)\n${formatDictStr(newDict)}`;
        break;
      case 'access':
        codeStr = `>>> print(student["name"])\n${newDict.name || 'KeyError: "name"'}\n>>> print(student["age"])\n${newDict.age || 'KeyError: "age"'}`;
        break;
      case 'get':
        codeStr = `>>> print(student.get("name"))\n${newDict.name || 'None'}\n>>> print(student.get("missing_key"))\nNone`;
        break;
      case 'add':
        newDict.city = "Chennai";
        codeStr = `>>> student["city"] = "Chennai"\n>>> print(student)\n${formatDictStr(newDict)}`;
        break;
      case 'update':
        if (newDict.age !== undefined) {
            newDict.age = 20;
        }
        codeStr = `>>> student["age"] = 20\n>>> print(student)\n${formatDictStr(newDict)}`;
        break;
      case 'remove_pop':
        if (newDict.age !== undefined) {
            delete newDict.age;
        }
        codeStr = `>>> student.pop("age")\n19\n>>> print(student)\n${formatDictStr(newDict)}`;
        break;
      case 'remove_del':
         if (newDict.name !== undefined) {
            delete newDict.name;
        }
        codeStr = `>>> del student["name"]\n>>> print(student)\n${formatDictStr(newDict)}`;
        break;
      case 'remove_clear':
        for (const key in newDict) delete newDict[key];
        codeStr = `>>> student.clear()\n>>> print(student)\n{}`;
        break;
      case 'loop_keys':
        const keysOut = Object.keys(newDict).join("\n");
        codeStr = `>>> for key in student:\n...     print(key)\n${keysOut || '# (empty dictionary)'}`;
        break;
      case 'loop_vals':
        const valsOut = Object.values(newDict).map(v => typeof v === 'string' ? v : String(v)).join("\n");
        codeStr = `>>> for value in student.values():\n...     print(value)\n${valsOut || '# (empty dictionary)'}`;
        break;
      case 'loop_items':
        const itemsOut = Object.entries(newDict).map(([k, v]) => `${k} ${v}`).join("\n");
        codeStr = `>>> for key, value in student.items():\n...     print(key, value)\n${itemsOut || '# (empty dictionary)'}`;
        break;
      case 'realworld':
        codeStr = `>>> user = {\n...     "username": "issac123",\n...     "email": "issac@email.com",\n...     "is_logged_in": True\n... }\n>>> print("Username:", user["username"])\nUsername: issac123\n>>> print("Email:", user["email"])\nEmail: issac@email.com`;
        break;
    }

    setMockDict(newDict);
    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => {
    setConsoleOutput([]);
    setMockDict({
      name: "Issac",
      age: 19,
      course: "Python"
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-6 shadow-sm border border-amber-200 dark:border-amber-800/50">
          <FileJson className="w-10 h-10 text-amber-600 dark:text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Dictionaries
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master key-value structured data storage. Learn to map identifiers to values using <code className="font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border text-amber-500 border-amber-200 dark:border-amber-800 font-bold">&#123; &#125;</code> dictionaries, the backbone of JSON APIs and web applications.
        </p>
      </header>

      {/* 2. What is & Visualizer */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-amber-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What is a Dictionary?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A dictionary is a collection of <strong className="text-amber-600 dark:text-amber-400">key–value pairs</strong> used to store structured data. Values are accessed using their unique identifying key rather than a numerical index.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/50 p-4 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-20"><Key className="w-10 h-10 text-amber-500"/></div>
               <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Key</h4>
               <p className="text-xs text-slate-500">The unique identifier (must be a string, number, or tuple).</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 p-4 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-20"><Database className="w-10 h-10 text-emerald-500"/></div>
               <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Value</h4>
               <p className="text-xs text-slate-500">The actual stored data (can be strings, ints, lists, or other dicts).</p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm border border-slate-800 shadow-inner">
             <div className="flex items-center text-amber-400 mb-2"><Code2 className="w-4 h-4 mr-2"/> Python Syntax:</div>
             <div>dictionary_name = &#123;</div>
             <div className="ml-4"><span className="text-amber-300">key</span>: <span className="text-emerald-300">value</span>,</div>
             <div className="ml-4"><span className="text-amber-300">key</span>: <span className="text-emerald-300">value</span></div>
             <div>&#125;</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Network className="w-48 h-48 text-white" />
          </div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4 flex items-center justify-center">
              <Hash className="w-5 h-5 mr-2 text-amber-400" />
              3️⃣ Data Structure Visualization
            </h2>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700 mx-auto max-w-sm">
                <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 flex justify-between font-bold text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <span className="flex items-center"><Key className="w-3 h-3 mr-1"/> Key</span>
                    <span className="flex items-center"><Database className="w-3 h-3 mr-1"/> Value</span>
                </div>
                <div className="px-4 py-3 flex justify-between border-b border-slate-100 dark:border-slate-700 font-mono text-sm">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">"name"</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"Issac"</span>
                </div>
                <div className="px-4 py-3 flex justify-between border-b border-slate-100 dark:border-slate-700 font-mono text-sm">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">"age"</span>
                    <span className="text-blue-600 dark:text-blue-400">19</span>
                </div>
                <div className="px-4 py-3 flex justify-between font-mono text-sm">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">"course"</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"Python"</span>
                </div>
            </div>

            <div className="text-center mt-6">
               <p className="text-slate-400 font-mono text-xs"><span className="text-amber-400 font-bold">Key</span> <ArrowRight className="w-3 h-3 text-slate-500 inline mx-2" /> Lookup <ArrowRight className="w-3 h-3 text-slate-500 inline mx-2" /> <span className="text-emerald-400 font-bold">Value</span> returned</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Terminal className="w-8 h-8 mr-3 text-amber-500" />
            Interactive Dictionary Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Access
            </button>
            <button
              onClick={() => setActiveTab('modify')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'modify' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Modify
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'methods' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Remove
            </button>
            <button
              onClick={() => setActiveTab('loops')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'loops' ? 'bg-amber-500 text-white shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Loops
            </button>
            
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2 group"
              title="Reset state"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[550px] overflow-y-auto">
              
              <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg mb-6 shadow-inner font-mono text-xs flex flex-wrap items-center text-slate-300">
                  <span className="text-slate-500 mr-2 flex items-center font-bold tracking-widest uppercase"><Database className="w-3 h-3 mr-1" /> Memory State:</span> 
                  <span className="text-fuchsia-400">student = </span>
                  <span className="text-amber-400 pl-1">&#123;</span>
                  {Object.entries(mockDict).map(([k, v], i) => (
                    <React.Fragment key={k}>
                      <span className="text-rose-300 px-1">'{k}'</span>: 
                      <span className={typeof v === 'string' ? "text-emerald-300 px-1" : "text-blue-300 px-1"}>{typeof v === 'string' ? `'${v}'` : v}</span>
                      {i < Object.entries(mockDict).length - 1 && <span className="text-slate-500 font-bold">, </span>}
                    </React.Fragment>
                  ))}
                  <span className="text-amber-400">&#125;</span>
              </div>

              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  <button onClick={() => runDemo('create')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">2️⃣ Create & Print</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('access')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1 flex items-center">4️⃣ Accessing Bracket Syntax <code className="mx-2 text-rose-500 font-mono bg-rose-50 dark:bg-rose-900/30 px-1 rounded">["key"]</code></h4>
                      <p className="text-xs text-slate-500 mb-2">Accessing keys directly throws an error if missing!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-blue-500">print</span>(student[<span className="text-emerald-500">"name"</span>])<br/>
<span className="text-blue-500">print</span>(student[<span className="text-emerald-500">"age"</span>])
                      </pre>
                    </div>
                  </button>
                  
                  <button onClick={() => runDemo('get')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-200 dark:border-emerald-800/40 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center">5️⃣ Safely Accessing via <code className="mx-2 font-mono bg-white/50 px-1 rounded text-emerald-600">.get()</code></h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500/80 mb-2">Returns <span className="font-bold">None</span> instead of crashing your program if the key doesn't exist.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
<span className="text-blue-500">print</span>(student.get(<span className="text-emerald-500">"name"</span>))<br/>
<span className="text-blue-500">print</span>(student.get(<span className="text-emerald-500">"missing_key"</span>))
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'modify' && (
                <div className="animate-fade-in space-y-6">

                  <button onClick={() => runDemo('add')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center">6️⃣ Adding Items</h4>
                      <p className="text-xs text-slate-500 mb-3">Just assign a value to a new key.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
student[<span className="text-emerald-500">"city"</span>] = <span className="text-emerald-500">"Chennai"</span><br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('update')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center">7️⃣ Updating Values</h4>
                      <p className="text-xs text-slate-500 mb-3">If the key exists, assigning a value overwrites it.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
student[<span className="text-emerald-500">"age"</span>] = <span className="text-blue-500">20</span><br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>

                </div>
              )}

              {activeTab === 'methods' && (
                <div className="animate-fade-in space-y-6">
                  
                  <div className="bg-rose-50 dark:bg-rose-900/10 p-3 rounded-xl border border-rose-200 dark:border-rose-800/50 mb-4 text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-widest flex items-center justify-center">
                    8️⃣ Removing items Methods
                  </div>

                  <button onClick={() => runDemo('remove_pop')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-rose-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 mb-1"><code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-rose-500 font-mono">pop()</code> Method</h4>
                      <p className="text-xs text-slate-500 mb-2">Removes key and <strong className="font-bold">returns its value</strong>.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
student.<span className="text-blue-500 font-bold">pop</span>(<span className="text-emerald-500">"age"</span>)<br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('remove_del')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-red-300 dark:hover:border-red-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-red-600 dark:text-red-400 mb-1"><code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-red-500 font-mono">del</code> Keyword</h4>
                      <p className="text-xs text-slate-500 mb-2">Strictly destroys the key from memory.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-fuchsia-500 font-bold">del</span> student[<span className="text-emerald-500">"name"</span>]<br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('remove_clear')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-orange-600 dark:text-orange-400 mb-1"><code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-orange-500 font-mono">clear()</code> Method</h4>
                      <p className="text-xs text-slate-500 mb-2">Removes ALL items, emptying the dictionary.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
student.<span className="text-blue-500 font-bold">clear</span>()<br/>
<span className="text-blue-500">print</span>(student)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'loops' && (
                <div className="animate-fade-in space-y-6">

                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-700 mb-2 text-xs text-slate-600 dark:text-slate-400 text-center">
                    Dictionaries are iterable. You can loop over just the keys, just the values, or both!
                  </div>

                  <button onClick={() => runDemo('loop_keys')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-600 dark:text-amber-400 mb-1 flex items-center">Loop Keys (Default)</h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">for</span> key <span className="text-fuchsia-500 font-bold">in</span> student:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(key)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('loop_vals')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1 flex items-center">Loop Values <code className="mx-2 font-mono text-emerald-500 bg-white dark:bg-slate-800 px-1 rounded">.values()</code></h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-2">
<span className="text-fuchsia-500 font-bold">for</span> value <span className="text-fuchsia-500 font-bold">in</span> student.<span className="text-blue-500 font-bold">values</span>():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(value)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('loop_items')} className="w-full text-left group">
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 border-2 border-indigo-200 dark:border-indigo-800/30 rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 mb-1 flex items-center">Both Key & Value <code className="mx-2 font-mono text-indigo-500 bg-white/50 px-1 rounded">.items()</code></h4>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30 mt-2">
<span className="text-fuchsia-500 font-bold">for</span> key, value <span className="text-fuchsia-500 font-bold">in</span> student.<span className="text-blue-500 font-bold">items</span>():<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(key, value)
                      </pre>
                    </div>
                  </button>
                  
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Python Shell Output
                  </h3>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                </div>

                <div className="font-mono text-sm flex flex-col flex-1">
                  {consoleOutput.length === 0 ? (
                    <div className="text-slate-500 animate-pulse flex flex-col items-center justify-center mt-32">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <span>Execute a snippet to alter the dictionary...</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                    {consoleOutput.map((line, i) => {
                      let colorClass = "text-slate-300"; 
                      if (line.startsWith('>>>') || line.startsWith('...')) colorClass = "text-blue-400 font-bold opacity-75";
                      else if (line.startsWith('{')) colorClass = "text-amber-300";
                      else if (line.includes('Error')) colorClass = "text-rose-400 font-bold";
                      else if (line === 'None') colorClass = "text-slate-500 italic";
                      else if (!line.startsWith('#')) colorClass = "text-emerald-300 font-bold";
                      else colorClass = "text-slate-500 italic font-medium";
                      
                      return (
                      <div key={i} className={`animate-fade-in ${colorClass}`}>
                        {line}
                      </div>
                    )})}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Recommendations */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-700 rounded-3xl p-8 text-black shadow-xl relative overflow-hidden mb-12 border border-amber-500/50">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10 text-amber-950">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300 fill-amber-300" />
            Developer Recommendations
          </h2>
          <p className="text-amber-900 mb-8 font-bold italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-amber-300/50 hover:bg-white/50 transition-colors">
              <h3 className="font-bold text-xl mb-3 flex items-center text-amber-950">1️⃣ Structured Data</h3>
              <p className="text-sm text-amber-950 mb-3 font-medium">Anytime you have a singular Entity (User, Product, API Response), pack its variables into a Dictionary. Do not use floating variables.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-amber-300/50 hover:bg-white/50 transition-colors">
              <h3 className="font-bold text-xl mb-3 text-amber-950">2️⃣ Descriptive Keys</h3>
              <p className="text-sm text-amber-950 mb-3 font-medium">Never make keys acronyms. <code className="bg-amber-900/10 font-bold px-1 rounded">"user_name"</code> is exponentially better than <code className="bg-amber-900/10 text-red-700 line-through px-1 rounded">"un"</code> or <code className="bg-amber-900/10 text-red-700 line-through px-1 rounded">"u"</code>.</p>
            </div>
            <div className="bg-amber-900/90 backdrop-blur-md p-6 rounded-2xl border border-amber-700 hover:bg-black transition-colors text-white shadow-xl shadow-black/20 transform scale-105 z-20">
              <h3 className="font-bold text-xl mb-3 flex items-center text-amber-400"><AlertCircle className="w-5 h-5 mr-2 text-rose-400"/>3️⃣ ALWAYS Use get()</h3>
              <p className="text-sm text-amber-100/90 mb-3"><code className="font-mono text-xs block mb-2 bg-black/50 p-1.5 rounded text-fuchsia-300 border border-fuchsia-900/50">user.get("phone", "N/A")</code>The `get()` method allows you to define a fallback default value (like "N/A") to prevent program crashes if data is magically missing from the dictionary.</p>
            </div>
          </div>
        </div>

        {/* Tricks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2 ext-sm">Trick 1: Key Exists?</h4>
             <pre className="font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-fuchsia-500">if</span> <span className="text-emerald-500">"name"</span> <span className="text-fuchsia-500">in</span> student:<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">print</span>(<span className="text-emerald-500">"Exists!"</span>)</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2 text-sm">Trick 2: Only Keys</h4>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto">student.<span className="text-blue-500 font-bold">keys</span>()</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2 text-sm">Trick 3: Only Vals</h4>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto">student.<span className="text-blue-500 font-bold">values</span>()</pre>
           </div>
           <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
             <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2 text-sm">Trick 4: Dict to List</h4>
             <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg mt-auto"><span className="text-amber-500 font-bold">list</span>(student.<span className="text-blue-500 font-bold">keys</span>())</pre>
           </div>
        </div>
      </section>

      {/* 5. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-amber-100 dark:from-indigo-900/30 dark:to-amber-900/20 p-8 rounded-3xl border border-indigo-200 dark:border-amber-800/30 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Create a dictionary called <code className="font-bold bg-white/50 px-1 rounded">car</code> containing a `brand`, `model`, and `year`. Then print each property out elegantly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Target Output</h4>
              <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner leading-relaxed">
                Brand: Tesla<br/>
                Model: Model S<br/>
                Year: 2023
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-amber-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Solution</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
car = &#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"brand"</span>: <span className="text-emerald-500">"Tesla"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"model"</span>: <span className="text-emerald-500">"Model S"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-500">"year"</span>: 2023<br/>
&#125;<br/><br/>
print(<span className="text-emerald-500">"Brand:"</span>, car[<span className="text-emerald-500">"brand"</span>])<br/>
print(<span className="text-emerald-500">"Model:"</span>, car[<span className="text-emerald-500">"model"</span>])<br/>
print(<span className="text-emerald-500">"Year:"</span>, car[<span className="text-emerald-500">"year"</span>])
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonDictionaries;