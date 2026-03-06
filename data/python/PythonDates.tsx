import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, CalendarDays, Watch, 
  Terminal, Target, RefreshCw, Check, Copy, 
  Lightbulb, BookOpen, AlertCircle, Play, 
  ArrowRight, CalendarClock, Settings, LayoutTemplate, CheckCircle2
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
                <div key={index} className={`${highlightLines.includes(index) ? 'bg-neutral-800/80 -mx-4 px-4 py-0.5 border-l-2 border-rose-500' : ''}`}>
                  <span className={isComment ? 'text-neutral-500 italic' : 
                    line.includes('import ') ? 'text-rose-400 font-bold' : 
                    line.includes('print') ? 'text-blue-400' : 
                    line.includes('datetime') ? 'text-amber-300' :
                    line.includes('%') || line.includes('"') ? 'text-emerald-400' :
                    line.includes('=') ? 'text-neutral-300' : 'text-neutral-200'}>
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

const PythonDates: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'basics' | 'parts' | 'format'>('basics');
  const [currentTimeStr, setCurrentTimeStr] = useState("2026-03-06 19:42:30.123456");

  // Keep simulated time ticking slightly for effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Fake python format 2026-03-06 HH:MM:SS.mmmmmm
      const yyyy = "2026";
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      const time = now.toTimeString().split(' ')[0];
      const ms = String(now.getMilliseconds()).padStart(3, '0') + Math.floor(Math.random() * 999).toString().padStart(3, '0');
      setCurrentTimeStr(`${yyyy}-${mm}-${dd} ${time}.${ms}`);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const runDemo = (action: string) => {
    let codeStr = '';
    const now = new Date();
    const curYear = "2026"
    const curMonth = "03"
    const curMonthInt = "3"
    const curDay = "06"
    const curDayInt = "6"
    const curTime = now.toTimeString().split(' ')[0]

    switch (action) {
      case 'now':
        codeStr = `>>> import datetime\n>>> current_time = datetime.datetime.now()\n>>> print(current_time)\n${currentTimeStr}`;
        break;
      case 'parts':
        codeStr = `>>> import datetime\n>>> now = datetime.datetime.now()\n>>> print(now.year)\n${curYear}\n>>> print(now.month)\n${curMonthInt}\n>>> print(now.day)\n${curDayInt}`;
        break;
      case 'create':
        codeStr = `>>> import datetime\n>>> x = datetime.datetime(2025, 12, 25)\n>>> print(x)\n2025-12-25 00:00:00`;
        break;
      case 'format_year':
        codeStr = `>>> import datetime\n>>> now = datetime.datetime.now()\n>>> print(now.strftime("%Y"))\n${curYear}`;
        break;
      case 'format_weekday':
        codeStr = `>>> import datetime\n>>> now = datetime.datetime.now()\n>>> print(now.strftime("%A"))\nFriday`;
        break;
      case 'format_custom':
        codeStr = `>>> import datetime\n>>> now = datetime.datetime.now()\n>>> formatted_date = now.strftime("%d-%m-%Y")\n>>> print(formatted_date)\n${curDay}-${curMonth}-${curYear}`;
        break;
      case 'date_only':
        codeStr = `>>> import datetime\n>>> today = datetime.date.today()\n>>> print(today)\n${curYear}-${curMonth}-${curDay}`;
        break;
      case 'age_calc':
        codeStr = `>>> import datetime\n>>> birth_year = 2006\n>>> current_year = datetime.datetime.now().year\n>>> age = current_year - birth_year\n>>> print("Age:", age)\nAge: 20`;
        break;
    }

    setConsoleOutput(codeStr.split('\n'));
  };

  const resetConsole = () => setConsoleOutput([]);

  return (
    <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
      
      {/* 1. Header Area */}
      <header className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl mb-6 shadow-sm border border-rose-200 dark:border-rose-800/50">
          <CalendarClock className="w-10 h-10 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Python Dates & Time
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Master the `datetime` module. Learn how to create, manipulate, extract, and nicely format dates and times in your Python applications.
        </p>
      </header>

      {/* 2. What are Dates? */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-rose-500 mr-3" />
            <h2 className="text-2xl font-bold">1️⃣ What are Dates?</h2>
          </div>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            A date represents a specific point in time. Python <strong className="text-rose-600 dark:text-rose-400">does not have a built-in date generic data type</strong> by default. Instead, it provides a powerful module.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {['Year', 'Month', 'Day', 'Hour', 'Minute', 'Second'].map((unit, i) => (
              <div key={i} className="flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-400">
                {unit}
              </div>
            ))}
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-5 rounded-xl border border-rose-100 dark:border-rose-800/30 flex items-start">
            <Settings className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-3 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-rose-900 dark:text-rose-300 mb-1">The <code className="font-mono text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-900 px-1 rounded">datetime</code> Module</h4>
              <p className="text-sm text-rose-800 dark:text-rose-200">
                You must <code className="font-mono font-bold">import datetime</code> before you can write any code that manipulates or formatting dates and times!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold">2️⃣ Importing & Usage</h2>
            </div>
            
            <CodeSnippetBlock 
              codeSnippet={`import datetime\n\nprint(datetime.datetime.now())`} 
              highlightLines={[0]}
            />
            
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-inner mt-4">
              <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-2">Example Output Breakdown</h4>
              <div className="font-mono text-lg text-emerald-400 text-center mb-4 font-bold tracking-wider">
                2026-03-06 19:42:30.123456
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center text-xs gap-2 sm:gap-4 font-mono text-slate-400 text-center">
                <span>YEAR-MONTH-DAY</span>
                <span className="hidden sm:inline">|</span>
                <span>HOUR:MINUTE:SECOND</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Datetime Lab */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
            <Calendar className="w-8 h-8 mr-3 text-rose-500" />
            Interactive Datetime Lab
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('basics')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'basics' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Basics & Creation
            </button>
            <button
              onClick={() => setActiveTab('parts')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'parts' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Extraction
            </button>
            <button
              onClick={() => setActiveTab('format')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeTab === 'format' ? 'bg-rose-600 text-white shadow-rose-500/20' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
            >
              Formatting (strftime)
            </button>
            <button
              onClick={resetConsole}
              className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm ml-2"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-y-auto">
              
              {activeTab === 'basics' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">3️⃣ & 5️⃣ Core Operations</h3>
                  
                  <button onClick={() => runDemo('now')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 mb-1 flex items-center"><Clock className="w-4 h-4 mr-1.5" /> Current Date/Time</h4>
                      <p className="text-xs text-slate-500 mb-3">Grabs the exact millisecond time from your computer clock via <code className="font-bold">now()</code>.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> datetime<br/><br/>
current_time = datetime.<span className="text-amber-500">datetime</span>.<span className="text-blue-500 font-bold">now</span>()<br/>
<span className="text-blue-500">print</span>(current_time)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('create')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center"><CalendarDays className="w-4 h-4 mr-1.5" /> Create Specific Date</h4>
                      <p className="text-xs text-slate-500 mb-3">Pass (Year, Month, Day) manually into datetime.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> datetime<br/><br/>
x = datetime.<span className="text-amber-500">datetime</span>(<span className="text-emerald-500">2025, 12, 25</span>)<br/>
<span className="text-blue-500">print</span>(x)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('date_only')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-1 flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> Date Only (No Time)</h4>
                      <p className="text-xs text-slate-500 mb-3">When you only need the calendar date.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> datetime<br/><br/>
today = datetime.<span className="text-amber-500">date</span>.<span className="text-blue-500 font-bold">today</span>()<br/>
<span className="text-blue-500">print</span>(today)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'parts' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center">
                    4️⃣ Object Hierarchy & Extraction
                  </h3>

                  <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex justify-center mb-6">
                    <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-rose-400/50 p-5 rounded-xl w-full max-w-sm">
                      <h4 className="text-center font-bold text-rose-500 mb-3 text-xs uppercase tracking-widest bg-rose-50 dark:bg-rose-900/30 py-1 rounded">Date Object anatomy</h4>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                          <span className="text-slate-500">Year  →</span> <span className="font-bold text-emerald-400">2026</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                          <span className="text-slate-500">Month →</span> <span className="font-bold text-amber-400">3</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                          <span className="text-slate-500">Day   →</span> <span className="font-bold text-blue-400">6</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-2">
                          <span>...etc (`hour`, `minute`, `second`)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button onClick={() => runDemo('parts')} className="w-full text-left group">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-colors relative mb-4">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-fuchsia-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-fuchsia-600 dark:text-fuchsia-400 mb-1">Accessing Individual Date Components</h4>
                      <p className="text-xs text-slate-500 mb-3">You can pull out single pieces of the date as numbers (Ints).</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
<span className="text-rose-500 font-bold">import</span> datetime<br/><br/>
now = datetime.<span className="text-amber-500">datetime</span>.now()<br/><br/>
<span className="text-blue-500">print</span>(now.<span className="text-fuchsia-500 font-bold">year</span>)<br/>
<span className="text-blue-500">print</span>(now.<span className="text-fuchsia-500 font-bold">month</span>)<br/>
<span className="text-blue-500">print</span>(now.<span className="text-fuchsia-500 font-bold">day</span>)
                      </pre>
                    </div>
                  </button>

                  <button onClick={() => runDemo('age_calc')} className="w-full text-left group mb-12">
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors relative">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400 mb-1 flex items-center">🔟 Real-World Age Calculator</h4>
                      <p className="text-xs text-amber-600 dark:text-amber-500/80 mb-3">Extracting the current year to do math logic!</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-950/50 p-3 rounded-lg border border-amber-100 dark:border-amber-800/30">
<span className="text-rose-500 font-bold">import</span> datetime<br/><br/>
birth_year = <span className="text-emerald-500">2006</span><br/>
current_year = datetime.datetime.now().<span className="text-fuchsia-500 font-bold">year</span><br/>
age = current_year - birth_year<br/><br/>
<span className="text-blue-500">print</span>(<span className="text-orange-500">"Age:"</span>, age)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

              {activeTab === 'format' && (
                <div className="animate-fade-in space-y-6">
                  <h3 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2 flex justify-between items-center">
                    <span>6️⃣ & 8️⃣ String Formatting (`strftime`)</span>
                  </h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Python uses the <code className="font-bold bg-white/50 dark:bg-black/30 px-1 rounded">strftime()</code> method to convert a datetime object into readable string text.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => runDemo('format_year')} className="flex-1 text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative h-full">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">Year Code `%Y`</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
print(now.strftime(<span className="text-emerald-500">"%Y"</span>))
                        </pre>
                      </div>
                    </button>

                    <button onClick={() => runDemo('format_weekday')} className="flex-1 text-left group">
                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-slate-400 dark:hover:border-slate-600 transition-colors relative h-full">
                        <Play className="absolute top-4 right-4 w-5 h-5 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400 mb-2">Day Code `%A`</h4>
                        <pre className="font-mono text-xs text-slate-700 dark:text-slate-300">
print(now.strftime(<span className="text-emerald-500">"%A"</span>))
                        </pre>
                      </div>
                    </button>
                  </div>

                  <button onClick={() => runDemo('format_custom')} className="w-full text-left group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors relative shadow-sm">
                      <Play className="absolute top-4 right-4 w-5 h-5 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1 flex items-center">Custom Structure Example</h4>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500/80 mb-3">Combining codes with hyphens or slashes.</p>
                      <pre className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-950/50 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
<span className="text-rose-500 font-bold">import</span> datetime<br/>
now = datetime.datetime.now()<br/><br/>
<span className="text-slate-400 italic"># Format: DD-MM-YYYY</span><br/>
formatted_date = now.strftime(<span className="text-emerald-500 font-bold">"%d-%m-%Y"</span>)<br/><br/>
<span className="text-blue-500">print</span>(formatted_date)
                      </pre>
                    </div>
                  </button>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-full min-h-[500px] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f43f5e 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
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
                      <span>Execute a snippet on the left...</span>
                    </div>
                  ) : (
                    consoleOutput.map((line, i) => (
                      <div key={i} className={`mb-1.5 animate-fade-in ${
                          line.startsWith('>>>') ? 'text-blue-400 font-bold' :
                          line.startsWith('Age') ? 'text-amber-300 font-bold' :
                          'text-emerald-300 font-bold'
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

      {/* 4. Format Codes Ref Table */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-4">
            <LayoutTemplate className="w-6 h-6 text-indigo-500 mr-3" />
            7️⃣ Common Format Codes Cheat Sheet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm uppercase text-slate-500 mb-3 tracking-wider">Date Codes</h4>
              <div className="space-y-2">
                {[
                  {code: '%Y', meaning: 'Year (4 digit)', ex: '2026'},
                  {code: '%y', meaning: 'Short year', ex: '26'},
                  {code: '%m', meaning: 'Month number', ex: '03'},
                  {code: '%B', meaning: 'Full month name', ex: 'March'},
                  {code: '%d', meaning: 'Day of month', ex: '06'},
                  {code: '%A', meaning: 'Weekday', ex: 'Friday'},
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center">
                      <span className="font-mono font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded mr-3">{item.code}</span>
                      <span className="text-sm font-medium">{item.meaning}</span>
                    </div>
                    <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold">{item.ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase text-slate-500 mb-3 tracking-wider">Time Codes</h4>
              <div className="space-y-2">
                {[
                  {code: '%H', meaning: 'Hour (24h clock)', ex: '19'},
                  {code: '%M', meaning: 'Minute', ex: '45'},
                  {code: '%S', meaning: 'Second', ex: '10'}
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center">
                      <span className="font-mono font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded mr-3">{item.code}</span>
                      <span className="text-sm font-medium">{item.meaning}</span>
                    </div>
                    <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400 font-bold">{item.ex}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase tracking-wide">💡 Pro Trick 3: Verbose Structure</p>
                <code className="font-mono text-xs block text-slate-700 dark:text-slate-300 whitespace-pre-wrap">now.strftime("%d %B %Y") <ArrowRight className="inline w-3 h-3 text-emerald-500" /> "06 March 2026"</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Developer Recommendations & Tips */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-rose-700 to-indigo-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center relative z-10">
            <Lightbulb className="w-8 h-8 mr-3 text-yellow-300" />
            💡 Developer Recommendations
          </h2>
          <p className="text-rose-100 mb-8 font-medium italic relative z-10 text-lg">From a Developer with 15+ years of Python experience:</p>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 flex items-center">1️⃣ Never Manually Calc</h3>
              <p className="text-sm text-rose-100 mb-3">Avoid doing manual math for time. Leap years and days in months will break your code.</p>
              <code className="bg-rose-900/50 p-2 rounded text-xs block font-mono border border-rose-500/30 line-through text-rose-300 mb-2">days = 30 * months</code>
              <code className="bg-emerald-900/50 p-2 rounded text-xs block font-mono border border-emerald-500/30 text-emerald-300">datetime.timedelta()</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">2️⃣ Use ISO Format internally</h3>
              <p className="text-sm text-rose-100 mb-3">Professional systems and databases ALWAYS use <code className="font-bold">YYYY-MM-DD</code>. This avoids US vs International date confusion.</p>
              <code className="bg-black/30 p-2 rounded text-sm text-center font-bold block font-mono">2026-03-06</code>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="font-bold text-xl mb-3">3️⃣ UI vs Database formatting</h3>
              <p className="text-sm text-rose-100 mb-3">Use raw ISO strings for storage, but translate it to pretty readable text using <code className="font-mono text-amber-300 text-xs bg-black/40 px-1">strftime()</code> right before displaying to users.</p>
              <div className="text-xs space-y-1">UI: <span className="font-bold">Friday, March 6</span></div>
              <div className="text-xs">DB: <span className="font-bold font-mono bg-black/30 px-1 rounded">2026-03-06</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Practice */}
      <section className="max-w-4xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 p-8 rounded-3xl border border-indigo-200 dark:border-indigo-700 shadow-lg relative">
          <Target className="absolute top-6 right-6 w-12 h-12 text-indigo-500/30" />
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-400 mb-4 flex items-center">
            🧩 Practice Exercise (For Students)
          </h2>
          <p className="mb-4 text-indigo-800 dark:text-indigo-300 font-medium tracking-wide">
            Task: Create a program using formatting codes that prints the current date details elegantly line by line.
          </p>
          <div className="bg-indigo-500/10 dark:bg-indigo-900/40 p-3 rounded-lg border border-indigo-500/30 max-w-sm mb-6 flex items-start">
             <AlertCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 shrink-0 mt-0.5"/>
             <span className="text-sm font-bold text-indigo-800 dark:text-indigo-300">Hint: Remember `datetime.datetime.now()`</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-slate-900 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-400 mb-3">Target Output</h4>
              <div className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/30 rounded p-4 shadow-inner leading-relaxed">
                Year: 2026<br/>
                Month: 3<br/>
                Day: 6<br/>
                Weekday: Friday
              </div>
            </div>

            <div className="bg-white/60 dark:bg-black/40 p-5 rounded-xl backdrop-blur-sm border border-white/50 dark:border-white/10 group relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 cursor-pointer">
                <span className="text-white font-bold flex items-center bg-indigo-600 px-4 py-2 rounded-lg"><Lightbulb className="w-4 h-4 mr-2" /> Hover for Idea</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" /> Example Solution Code</h4>
              <pre className="font-mono text-xs text-slate-800 dark:text-slate-300">
import datetime<br/><br/>
now = datetime.datetime.now()<br/><br/>
print("Year:", now.strftime("%Y"))<br/>
print("Month:", now.month) <span className="text-slate-500 italic"># or %m</span><br/>
print("Day:", now.day) <span className="text-slate-500 italic"># or %d</span><br/>
print("Weekday:", now.strftime("%A"))
              </pre>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PythonDates;