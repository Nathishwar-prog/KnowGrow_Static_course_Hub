import React, { useState } from 'react';
import { 
  Code2, Terminal, Lightbulb, 
  Settings, Database, Globe,
  Link, FileJson, AlertTriangle, CheckCircle2,
  Table as TableIcon, LineChart, Cpu
} from 'lucide-react';

const PdReadJson: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'sources' | 'advanced' | 'tips'>('basics');

  const runDemo = (action: string) => {
    let outLines: string[] = [];
    switch (action) {
      case 'simple_read':
        outLines = [
          '> df = pd.read_json("students.json")',
          '> print(df)',
          '    Name  Marks  Age',
          '0   John     80   18',
          '1   Sara     75   19',
          '2   Mike     90   20'
        ];
        break;
      case 'read_url':
        outLines = [
          '> url = "https://api.example.com/data.json"',
          '> df = pd.read_json(url)',
          '> print(f"Loaded {len(df)} rows from API")',
          'Loaded 150 rows from API',
          '',
          '> # Successfully fetched live JSON data over HTTP!'
        ];
        break;
      case 'read_string':
        outLines = [
          '> json_str = \'[{"Name":"John","Age":25},{"Name":"Sara","Age":30}]\'',
          '> df = pd.read_json(json_str)',
          '> print(df)',
          '   Name  Age',
          '0  John   25',
          '1  Sara   30'
        ];
        break;
      case 'read_lines':
        outLines = [
          '> # Reading Line-Delimited JSON (JSONL)',
          '> df = pd.read_json("big_data.json", lines=True)',
          '> print(df.head(2))',
          '   Name  Age',
          '0  John   25',
          '1  Sara   30',
          '',
          '> # Handled streaming format successfully.'
        ];
        break;
      case 'error_quotes':
        outLines = [
          '> bad_json = \'{Name:"John", Age:25}\'',
          '> pd.read_json(bad_json)',
          'ValueError: Expected object or value',
          '',
          '> # ❌ ERROR: JSON keys MUST be wrapped in double-quotes!'
        ];
        break;
      case 'weather_api':
        outLines = [
          '> df = pd.read_json("weather.json")',
          '> print(df.describe())',
          '       Temperature',
          'count     3.000000',
          'mean     31.000000',
          'std       3.000000',
          'min      28.000000'
        ];
        break;
      default:
        outLines = ['Action not recognized.'];
    }
    setConsoleOutput(outLines);
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-violet-100 dark:bg-violet-900/30 rounded-2xl mb-6 shadow-sm border border-violet-200 dark:border-violet-800/50">
          <FileJson className="w-10 h-10 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Pandas Modern Data <code className="text-violet-600 dark:text-violet-400 text-3xl sm:text-4xl bg-violet-50 dark:bg-violet-900/20 px-3 py-1 rounded-xl block sm:inline-block mt-2 sm:mt-0 ml-2">.read_json()</code>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The bridge to the web. <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">read_json()</code> processes API responses and modern data exchange formats instantly.
        </p>
      </header>

      {/* 2. Interactive Workspace */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center shrink-0">
            <Terminal className="w-8 h-8 mr-3 text-violet-500" />
            JSON Sandbox
          </h2>
          <div className="flex gap-2 flex-wrap xl:justify-end">
             <button
              onClick={() => setActiveTab('basics')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'basics' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Database className="w-4 h-4 mr-1.5" /> 1️⃣-5️⃣ Fundamentals
            </button>
             <button
              onClick={() => setActiveTab('sources')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'sources' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Globe className="w-4 h-4 mr-1.5" /> 6️⃣-7️⃣ Web & API
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Cpu className="w-4 h-4 mr-1.5" /> 8️⃣-1️⃣1️⃣ Parameters
            </button>
             <button
              onClick={() => setActiveTab('tips')}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center whitespace-nowrap ${activeTab === 'tips' ? 'bg-violet-600 text-white shadow-violet-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              <Lightbulb className="w-4 h-4 mr-1.5" /> 💡 1️⃣2️⃣-1️⃣3️⃣ Pro Tips
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-auto"
              title="Clear Console"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  
                  {/* Notice Box */}
                  <div className="bg-violet-50 dark:bg-violet-900/10 border-l-4 border-violet-500 p-4 rounded-r-lg shadow-sm">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          JSON (JavaScript Object Notation) is the standard for web data. <code>read_json()</code> makes it as accessible as a CSV.
                        </p>
                  </div>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center text-lg">
                      <Database className="w-5 h-5 text-violet-500 mr-2" />
                      1️⃣ What is <code className="text-violet-500 ml-2">read_json()</code>?
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-medium">
                      <strong>Definition:</strong> <code>read_json()</code> is a Pandas function used to read JSON data and convert it into a Pandas DataFrame.
                    </p>
                  </section>

                  <section>
                    <div className="bg-slate-50 dark:bg-indigo-900/10 border border-slate-200 dark:border-indigo-800/50 rounded-xl p-4 mt-4">
                       <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center">
                         <Code2 className="w-4 h-4 mr-2" />
                         Example JSON Structure
                       </h4>
                       <pre className="text-[11px] font-mono bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-violet-600 dark:text-violet-400 overflow-x-auto shadow-inner leading-relaxed">
{`[`}
{`  {"Name": "John", "Age": 25, "City": "Chennai"},`}
{`  {"Name": "Sara", "Age": 30, "City": "Delhi"},`}
{`  {"Name": "Mike", "Age": 28, "City": "Mumbai"}`}
{`]`}
                       </pre>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-6">
                      <Settings className="w-5 h-5 text-indigo-500 mr-2" />
                      2️⃣ Why it is Important
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                         {['REST APIs', 'Web services', 'Cloud storage', 'NoSQL DBs'].map((item) => (
                           <div key={item} className="p-3 bg-violet-50/50 dark:bg-violet-900/10 rounded-xl border border-violet-100 dark:border-violet-800/50 flex items-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 mr-2 shrink-0" />
                              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{item}</span>
                           </div>
                         ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <Terminal className="w-5 h-5 text-slate-500 mr-2" />
                       3️⃣ Basic Syntax
                    </h3>
                    <div className="bg-slate-900 p-4 rounded-xl mt-3 border border-slate-800">
                       <code className="text-violet-400 font-mono text-sm block">
                         {"pd.read_json(path_or_buf)"}
                       </code>
                    </div>
                  </section>

                   <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                       <TableIcon className="w-5 h-5 text-emerald-500 mr-2" />
                       5️⃣ Basic Loading Demo
                    </h3>
                    <button onClick={() => runDemo('simple_read')} className="w-full text-left group mt-4">
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl hover:border-violet-500 hover:shadow-violet-500/10 transition-all shadow-sm flex items-center bg-gradient-to-r from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
                        <div className="bg-violet-100 dark:bg-violet-900/40 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                          <FileJson className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Load students.json</p>
                          <p className="text-xs text-slate-500 italic">"Converts JSON arrays into structured rows."</p>
                        </div>
                        <code className="text-[10px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/30 px-2 py-1 rounded">EXECUTE</code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'sources' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Globe className="w-5 h-5 text-violet-500 mr-2" />
                        6️⃣ Reading JSON from URL (API Data)
                    </h3>
                    <button onClick={() => runDemo('read_url')} className="w-full text-left mt-4 p-5 bg-violet-50/20 dark:bg-violet-900/10 border border-violet-200 dark:border-violet-800/50 rounded-2xl hover:bg-violet-50 transition-all group relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-20 transition-opacity">
                          <Globe className="w-16 h-16" />
                       </div>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">Load live data directly from an API endpoint:</p>
                       <code className="text-[11px] font-bold text-violet-600 dark:text-violet-400 block bg-white dark:bg-slate-950 p-2 rounded shadow-sm border border-violet-100 dark:border-violet-900 w-fit">
                         {'df = pd.read_json("https://api.example.com/data.json")'}
                       </code>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Code2 className="w-5 h-5 text-indigo-500 mr-2" />
                        7️⃣ Reading JSON String
                    </h3>
                    <button onClick={() => runDemo('read_string')} className="w-full text-left mt-4 group">
                      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                        <p className="text-xs text-slate-400 mb-3 block italic">"Process raw JSON strings directly in your script."</p>
                        <code className="text-[11px] font-mono block whitespace-pre-wrap text-violet-400 bg-black/30 p-3 rounded border border-slate-800 leading-relaxed shadow-inner">
{`json_data = """`}
{`[`}
{` {"Name":"John","Age":25},`}
{` {"Name":"Sara","Age":30}`}
{`]`}
{`"""`}
<br />
<span className="text-indigo-400">df = pd.read_json(json_data)</span>
                        </code>
                      </div>
                    </button>
                  </section>

                </div>
              )}

              {activeTab === 'advanced' && (
                <div className="animate-fade-in space-y-6">
                  
                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <Settings className="w-5 h-5 text-violet-500 mr-2" />
                        8️⃣ Important Parameters
                    </h3>
                    <table className="w-full text-left text-[11px] sm:text-xs border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm mt-4">
                       <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                         <tr><th className="p-3 border-b border-slate-200 dark:border-slate-700">Parameter</th><th className="p-3 border-b border-slate-200 dark:border-slate-700">Description</th></tr>
                       </thead>
                       <tbody className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-violet-600">path_or_buf</td><td className="p-3">File path or raw JSON string</td></tr>
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-violet-600">orient</td><td className="p-3">JSON format orientation (split/records/etc)</td></tr>
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-violet-600">typ</td><td className="p-3">Series or DataFrame object type</td></tr>
                         <tr className="border-b border-slate-100 dark:border-slate-800"><td className="p-3 font-mono font-bold text-violet-600">lines</td><td className="p-3 font-bold text-indigo-500">Read JSON Lines format (.jsonl)</td></tr>
                       </tbody>
                    </table>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Cpu className="w-5 h-5 text-amber-500 mr-2" />
                        9️⃣ Reading JSON Lines Format
                    </h3>
                    <button onClick={() => runDemo('read_lines')} className="w-full text-left mt-4 p-5 bg-amber-50/30 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl hover:bg-amber-50 transition-all group">
                        <h4 className="font-bold text-xs text-amber-800 dark:text-amber-400 mb-2 uppercase tracking-widest">For Big Data Streaming</h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed italic">"Line-separated objects are common in streaming logs and massive datasets."</p>
                        <code className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 w-fit group-hover:border-amber-500 transition-colors">
                          {'df = pd.read_json("data.json", lines=True)'}
                        </code>
                    </button>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <LineChart className="w-5 h-5 text-emerald-500 mr-2" />
                        🔟 Visualization & 1️⃣1️⃣ Real World
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                       <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                          <code className="text-[10px] block text-emerald-400 mb-4 whitespace-pre">
{`df = pd.read_json("students.json")`}
{`df.plot(x="Name", y="Marks", kind="bar")`}
                          </code>
                          <div className="flex flex-col items-center">
                             <div className="w-[120px] h-[60px] border-b border-l border-slate-700 flex items-end justify-around pb-0.5">
                                <div className="w-[20%] bg-emerald-500/80 h-[80%]"></div>
                                <div className="w-[20%] bg-emerald-500/80 h-[70%]"></div>
                                <div className="w-[20%] bg-emerald-500/80 h-[95%]"></div>
                             </div>
                             <span className="text-[8px] text-slate-600 font-bold uppercase mt-1 tracking-tighter">John Sara Mike</span>
                          </div>
                       </div>
                       <button onClick={() => runDemo('weather_api')} className="bg-violet-900/10 border border-violet-800/30 p-4 rounded-xl text-left transition-colors hover:bg-violet-900/20">
                          <h4 className="font-bold text-violet-300 text-xs mb-2">Meteorology Case Study</h4>
                          <p className="text-[10px] text-slate-400 leading-tight">Load <b>weather.json</b> from a city API and calculate statistics instantly.</p>
                          <code className="text-[10px] bg-slate-950 p-1.5 rounded block mt-4 border border-violet-900/50 text-violet-400">df.describe()</code>
                       </button>
                    </div>
                  </section>

                </div>
              )}

              {activeTab === 'tips' && (
                <div className="animate-fade-in space-y-6 pt-2">

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2" />
                        1️⃣2️⃣ Common Beginner Mistakes
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-4 mt-4">
                       <button onClick={() => runDemo('error_quotes')} className="bg-rose-50/50 dark:bg-rose-900/10 border-l-4 border-rose-500 p-4 rounded-lg text-left group transition-all hover:bg-rose-50 dark:hover:bg-rose-900/20">
                          <p className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase mb-2 flex items-center">
                             ❌ Missing Quotes in keys
                          </p>
                          <div className="flex gap-2 mb-2">
                             <code className="text-[10px] text-rose-500 line-through">{'{Name:"John"}'}</code>
                             <code className="text-[10px] text-emerald-500 font-bold">{'{"Name":"John"}'}</code>
                          </div>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400">JSON requires **double-quotes** around both keys and string values. Single quotes or no quotes will crash the parser!</p>
                       </button>

                       <div className="bg-amber-50/50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-lg">
                          <p className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase mb-2 flex items-center">
                             ❌ Missing lines=True
                          </p>
                          <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">If your JSON file has one object per line, failing to set <code>lines=True</code> will cause a <b>ValueError</b>. Critical for big data streaming files!</p>
                       </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center mt-8">
                        <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                        1️⃣3️⃣ Tips & Tricks (Professional Advice)
                    </h3>

                    <div className="space-y-4 mt-4 text-sans">
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mr-4 text-indigo-600 font-bold shrink-0">01</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Preview data after loading</p>
                               <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 block text-indigo-600 dark:text-indigo-400 font-bold mb-1 w-fit">df.head()</code>
                               <p className="text-[11px] text-slate-500">Ensure keys and nested data parsed into columns correctly.</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group">
                            <div className="bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg mr-4 text-violet-600 font-bold shrink-0">02</div>
                            <div>
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">Check dataset health</p>
                               <code className="text-[10px] bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded border dark:border-slate-800 block text-violet-600 dark:text-violet-400 font-bold mb-1 w-fit">df.info()</code>
                               <p className="text-[11px] text-slate-500">Verify data types, especially for dates or numbers stored as strings.</p>
                            </div>
                         </div>

                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-start group relative bg-gradient-to-br from-white to-violet-50/10 dark:from-slate-900 dark:to-violet-900/5">
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg mr-4 text-pink-600 font-bold shrink-0">03</div>
                            <div className="flex-1">
                               <p className="font-extrabold text-sm text-slate-900 dark:text-white mb-1 leading-none">The 'Requests' Workflow</p>
                               <p className="text-[11px] text-slate-500 mt-2 mb-3 leading-relaxed">Most engineering workflows use the <code>requests</code> library for fine-grained API control before passing to Pandas:</p>
                               <code className="text-[10px] sm:text-[11px] bg-slate-950 p-2.5 rounded block text-emerald-400 border border-slate-800 shadow-inner">
                                 {"import requests"}
                                 <br />
                                 {"data = requests.get(url).json()"}
                                 <br />
                                 {"df = pd.DataFrame(data)"}
                               </code>
                            </div>
                         </div>
                    </div>
                  </section>

                </div>
              )}

            </div>
          </div>

          {/* Right Column - Console */}
          <div className="lg:col-span-5 h-[500px] lg:h-auto">
            <div className="bg-[#0b0b0c] rounded-2xl p-6 border border-slate-800 h-full shadow-2xl relative overflow-hidden flex flex-col mt-4 lg:mt-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-400 uppercase text-[10px] tracking-[0.2em] flex items-center">
                     <Terminal className="w-4 h-4 mr-2 text-violet-400" />
                     API / JSON Output
                  </h3>
                  <div className="flex space-x-1.5 opacity-40">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600/50"></div>
                  </div>
                  </div>

                  <div className="font-mono text-[13px] sm:text-[11px] xl:text-[13px] flex flex-col flex-1 overflow-y-auto max-h-[500px] leading-relaxed">
                  {consoleOutput.length === 0 ? (
                     <div className="text-slate-600 animate-pulse flex flex-col items-center justify-center mt-32">
                        <Globe className="w-12 h-12 mb-4 opacity-10" />
                        <span className="text-center text-[11px] px-10 font-bold uppercase tracking-widest opacity-40">Execute API Pipeline</span>
                     </div>
                  ) : (
                     consoleOutput.map((line, i) => {
                        return (
                           <div key={i} className={`animate-fade-in whitespace-pre ${
                              line.startsWith('>') || line.includes('#') ? 'text-slate-500 block text-[11px] mb-0.5' :
                              line.includes('Name') || line.includes('Age') || line.includes('City') || line.includes('Marks') || line.includes('Temperature') ? 'text-violet-300 font-bold border-b border-slate-800/40 pb-0.5 block mt-2 mb-1' :
                              line.includes('ValueError') || line.includes('ERROR') ? 'text-rose-400 font-bold bg-rose-400/5 p-1 rounded' :
                              line.includes('John') || line.includes('Sara') || line.includes('Mike') ? 'text-indigo-300' :
                              line.match(/^\s*\d+\s+/) || line.match(/^[A-Za-z]+:\s+\d/) ? 'text-emerald-300/80' :
                              'text-slate-400'
                           }`}>
                               {line}
                           </div>
                        )
                     })
                  )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PdReadJson;
