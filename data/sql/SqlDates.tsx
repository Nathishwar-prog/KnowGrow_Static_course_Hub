import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu, Calendar, CalendarClock, History, MonitorPlay } from 'lucide-react';

const CodeSnippetBlock = ({ codeSnippet, title, language = 'sql' }: { codeSnippet: string, title?: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
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
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-orange-200 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlDates: React.FC = () => {
  const [activeDateTab, setActiveDateTab] = useState<'date' | 'datetime' | 'timestamp'>('datetime');

  // Interactive Platform DB Setup Lab Configurations
  const getDateContent = () => {
    switch (activeDateTab) {
      case 'date':
        return {
          title: "DATE Concept",
          icon: <Calendar className="w-5 h-5 mr-2 text-rose-500" />,
          desc: "Chronological tracking restricted purely to the Year, Month, and Day. Completely drops the hour.",
          rules: "YYYY-MM-DD",
          useCase: "birth_date DATE\n2026-03-01",
          highlight: "rose"
        };
      case 'datetime':
        return {
          title: "DATETIME Engine",
          icon: <CalendarClock className="w-5 h-5 mr-2 text-orange-500" />,
          desc: "Fuses Date and Time. Useful for mapping explicit user interactions where both context points matter.",
          rules: "YYYY-MM-DD HH:MM:SS",
          useCase: "created_at DATETIME\n2026-03-01 14:30:00",
          highlight: "orange"
        };
      case 'timestamp':
        return {
          title: "TIMESTAMP Auto-Tracking",
          icon: <History className="w-5 h-5 mr-2 text-amber-500" />,
          desc: "Identical to Datetime functionally, but triggers compiler auto-fill behaviors (e.g. tracking precise creation audits under the hood without code).",
          rules: "Automatic Audit Log",
          useCase: "created_at TIMESTAMP\nDEFAULT CURRENT_TIMESTAMP",
          highlight: "amber"
        };
    }
  };

  const currentTab = getDateContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-orange-50 to-rose-50 dark:from-gray-900 dark:to-orange-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl mb-6 shadow-xl transform hover:scale-105 transition-transform cursor-default">
          <CalendarClock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL DATES
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate engine clock tracking historical states. Master how to structurally inject chronologies and precisely calculate time differentials.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <History className="w-6 h-6 mr-3 text-orange-500" /> Tracking State
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-sm">
            Databases natively parse dates not as simple text strings, but as deeply mathematical representations making subtraction, filtering, and expiry logic lightening fast.
          </p>
          <div className="flex-grow shadow-2xl">
            <CodeSnippetBlock codeSnippet="CREATE TABLE Orders (&#10;    order_id INT PRIMARY KEY,&#10;    order_date DATE,&#10;    created_at DATETIME&#10;);&#10;&#10;INSERT INTO Orders VALUES&#10;(1, '2026-03-01', '2026-03-01 10:30:00');" title="Creation and Payload Injection Flow" />
          </div>
          <p className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-3 mt-4 text-xs font-bold text-orange-800 dark:text-orange-400 font-mono tracking-widest uppercase">
            Standard Default: YYYY-MM-DD
          </p>
        </div>

        {/* Advanced Projection */}
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl text-orange-500"></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-orange-400" /> Auto Generators
          </h2>
          <p className="text-gray-400 font-medium mb-6 text-sm relative z-10">
            Dialects supply intrinsic functions that grab the exact moment an operation drops from the hardware processor.
          </p>
          <ul className="space-y-4 relative z-10 text-sm font-bold flex-grow">
            <li className="flex justify-between items-center bg-gray-800/80 p-4 rounded-xl border border-gray-700">
              <span className="text-blue-400 flex items-center"><Database className="w-4 h-4 mr-2" /> MySQL Matrix</span>
              <div className="text-right">
                <code className="block text-gray-300">SELECT CURDATE();</code>
                <code className="block text-gray-300 mt-1">SELECT NOW();</code>
              </div>
            </li>
            <li className="flex justify-between items-center bg-gray-800/80 p-4 rounded-xl border border-gray-700">
              <span className="text-rose-400 flex items-center"><Server className="w-4 h-4 mr-2" /> SQL Server Set</span>
              <div className="text-right">
                <code className="block text-gray-300">SELECT GETDATE();</code>
              </div>
            </li>
            <li className="flex justify-between items-center bg-gray-800/80 p-4 rounded-xl border border-gray-700">
              <span className="text-indigo-400 flex items-center"><DatabaseZap className="w-4 h-4 mr-2" /> Postgres Rules</span>
              <div className="text-right">
                <code className="block text-gray-300">CURRENT_DATE</code>
                <code className="block text-gray-300 mt-1">CURRENT_TIMESTAMP</code>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Advanced Typings Interactive Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Clock className="w-8 h-8 mr-3 text-orange-500" /> Active Chrono Dialects
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'date', label: 'DATE', icon: <Calendar className="w-4 h-4 mr-2" />, color: 'rose' },
              { id: 'datetime', label: 'DATETIME', icon: <CalendarClock className="w-4 h-4 mr-2" />, color: 'orange' },
              { id: 'timestamp', label: 'TIMESTAMP', icon: <History className="w-4 h-4 mr-2" />, color: 'amber' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDateTab(tab.id as any)}
                className={`flex-shrink-0 px-8 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activeDateTab === tab.id ? `border-${tab.color}-500 text-${tab.color}-600 dark:text-${tab.color}-400 bg-white dark:bg-gray-800` : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content Lab */}
          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
            <div className={`flex-1 bg-${currentTab.highlight}-50 dark:bg-${currentTab.highlight}-900/10 p-6 rounded-2xl border border-${currentTab.highlight}-200 dark:border-${currentTab.highlight}-900/40 relative overflow-hidden transition-all duration-300`}>
              <div className={`absolute top-0 right-0 p-2 bg-${currentTab.highlight}-100 dark:bg-${currentTab.highlight}-900/50 rounded-bl-xl text-xs font-bold text-${currentTab.highlight}-700 dark:text-${currentTab.highlight}-300`}>
                {currentTab.rules}
              </div>
              <h4 className={`text-xl font-black text-${currentTab.highlight}-700 dark:text-${currentTab.highlight}-400 mb-2 flex items-center`}>{currentTab.icon} {currentTab.title}</h4>
              <p className={`text-sm text-${currentTab.highlight}-900 dark:text-${currentTab.highlight}-200 font-medium mb-6`}>{currentTab.desc}</p>

              <p className={`text-xs uppercase tracking-widest font-bold text-${currentTab.highlight}-500 mb-2`}>Injection Formatter</p>
              <div className={`bg-white dark:bg-black/50 p-4 rounded-xl border border-${currentTab.highlight}-200 dark:border-${currentTab.highlight}-800/50`}>
                {currentTab.useCase.split('\n').map((line, i) => (
                  <div key={i} className={`font-mono text-sm font-bold ${i === 0 ? `text-gray-700 dark:text-gray-300 mb-2` : `text-${currentTab.highlight}-600 dark:text-${currentTab.highlight}-400`} `}>{line}</div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-4">
              {activeDateTab === 'date' && (
                <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900/30 p-4 rounded-xl flex items-center shadow-sm">
                  <Target className="w-6 h-6 text-rose-500 mr-3 shrink-0" />
                  <p className="text-xs text-rose-800 dark:text-rose-300 font-bold">Standardized explicitly dropping milliseconds resulting in highly efficient memory payloads mapped purely for day identifiers.</p>
                </div>
              )}
              {activeDateTab === 'datetime' && (
                <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-4 rounded-xl flex items-center shadow-sm">
                  <Target className="w-6 h-6 text-orange-500 mr-3 shrink-0" />
                  <p className="text-xs text-orange-800 dark:text-orange-300 font-bold">Combines absolute math across calendars and clocks. Warning: `DATETIME` fails if not handled correctly mapping localized timezone queries.</p>
                </div>
              )}
              {activeDateTab === 'timestamp' && (
                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-xl flex items-center shadow-sm">
                  <Target className="w-6 h-6 text-amber-500 mr-3 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-bold">Highly professional attribute automatically executing standard clocks directly out of memory, writing audits whenever records insert natively.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Calculations Section */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden p-8">
          <h3 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-2"><BoxSelect className="w-6 h-6 mr-3 text-orange-500" /> Subtractions & Addition</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-6">Dialects hold deep internal math processors to calculate forward predictions or reverse historical deltas without explicit JS handling.</p>
          <div className="space-y-4 shadow-sm flex-grow">
            <CodeSnippetBlock
              title="MySQL Delta Modulations"
              codeSnippet="-- Pushing Date Forward 7 Days&#10;SELECT DATE_ADD(order_date, INTERVAL 7 DAY);&#10;&#10;-- Retreating 7 Days Backward&#10;SELECT DATE_SUB(order_date, INTERVAL 7 DAY);&#10;&#10;-- Math Subtraction (End minus Start)&#10;SELECT DATEDIFF('2026-03-10', '2026-03-01');&#10;-- Result Drops: 9"
            />
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 border border-rose-200 dark:border-rose-900/30 rounded-xl">
              <span className="text-xs tracking-widest uppercase font-bold text-rose-500 mb-1 flex items-center"><Server className="w-3 h-3 mr-1" /> SQL Server Contrast</span>
              <code className="text-[10px] text-rose-800 dark:text-rose-300 bg-white dark:bg-rose-950 px-2 py-1 border border-rose-200 dark:border-rose-800/40 rounded font-mono block w-fit">SELECT DATEDIFF(DAY, '2026-03-01', '2026-03-10');</code>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full bg-gray-900 rounded-3xl border border-gray-800 shadow-xl overflow-hidden p-8 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-bold flex items-center mb-2"><Target className="w-6 h-6 mr-3 text-orange-400" /> Chronometer Extractions</h3>
          <p className="text-gray-400 text-sm font-medium mb-6">Compiler functions break standard stamps entirely apart to explicitly filter specific scopes seamlessly down the pipeline.</p>
          <div className="space-y-4 shadow-2xl flex-grow">
            <CodeSnippetBlock
              title="Extraction Logic Syntax"
              codeSnippet="SELECT YEAR(order_date);&#10;SELECT MONTH(order_date);&#10;SELECT DAY(order_date);"
            />
            <CodeSnippetBlock
              title="Warning: Query Filter Risk"
              codeSnippet="SELECT *&#10;FROM Orders&#10;WHERE YEAR(order_date) = 2026;"
            />
            <div className="bg-red-900/20 p-3 rounded-xl border border-red-900/50 text-red-400 text-xs font-bold tracking-wide flex items-center">
              <ShieldAlert className="w-6 h-6 mr-3 shrink-0" />
              Do not execute the above filter in absolute production. It entirely disables Database Indexing. Read below.
            </div>
          </div>
        </div>
      </section>

      {/* Production Blueprint Layout */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center relative z-10">
              <AlertTriangle className="w-7 h-7 mr-3 text-orange-500" />
              15+ Years Architecture Warning
            </h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 relative z-10">Real-World Filtering Disasters</p>

            <div className="space-y-8 relative z-10 text-sm font-medium">

              {/* Concept 1 */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 1. Disabling Index Trees</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed mb-4">
                  Juniors deploy <code>WHERE YEAR(order_date) = 2026</code> causing total catastrophic slowdown. Wrapping the Indexed column strictly *inside* a function forces a full-scan parsing loop down every row ignoring your massive server indices!
                </p>
                <div className="grid sm:grid-cols-2 gap-4 ml-7">
                  <div className="bg-red-50 dark:bg-rose-900/10 border border-red-200 dark:border-rose-900/30 p-4 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 font-bold mb-2 uppercase tracking-wide text-xs">❌ Never Invoke Math First</p>
                    <code className="text-[10px] text-red-800 dark:text-red-300 bg-white dark:bg-rose-950 p-2 border border-red-200 dark:border-rose-800/40 rounded font-mono block">WHERE YEAR(order_date) = 2026</code>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-900/30 p-4 rounded-xl">
                    <p className="text-emerald-700 dark:text-emerald-400 font-bold mb-2 uppercase tracking-wide text-xs">✅ Keep Columns Naked</p>
                    <code className="text-[10px] text-emerald-800 dark:text-emerald-300 bg-white dark:bg-emerald-950 p-2 border border-emerald-200 dark:border-emerald-800/40 rounded font-mono block">
                      WHERE order_date &gt;= '2026-01-01'<br />AND order_date &lt; '2027-01-01'
                    </code>
                  </div>
                </div>
              </div>

              {/* Concept 2 */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 2. Unsafe Datetime Filter Math</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed mb-4">You cannot trust `BETWEEN` operations purely relying on `DATETIME` formats. They naturally zero-out the missing hours blocking evening transactions.</p>
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-200 dark:border-amber-900/30 ml-7 space-y-2">
                  <p className="text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-widest"><ShieldAlert className="w-3 h-3 inline pb-0.5 mr-1" /> Example</p>
                  <code className="text-[10px] text-gray-700 dark:text-gray-300 block font-mono">WHERE created_at BETWEEN '2026-01-01' AND '2026-12-31'</code>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">This totally blocks anyone checking out at <code className="font-bold text-amber-600 dark:text-amber-500">2026-12-31 15:00:00</code> from being recorded because it assumes the strict `00:00:00` baseline implicitly. Deploy exact Naked <code>&lt; / &gt;=</code> flags listed previously.</p>
                </div>
              </div>

              {/* Concept 3 */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 3. Timezone Agnostic Clusters</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed flex items-center">
                  Always deploy the database to map explicitly towards absolute UTC Server Clocks. Rely exclusively on the Native Application logic (Javascript) to mutate the clock towards local regional hours parsing across user screens.
                </p>
              </div>

            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-sm font-medium">
            <h3 className="text-gray-900 dark:text-white font-extrabold text-xl mb-2 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-gray-500" />
              Interview Logic Matrix
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors group cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-4 flex items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                <MonitorPlay className="w-4 h-4 mr-2" /> What is TIMESTAMP used for?
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-xs">
                Explicit auto-time execution. When new row payloads initialize natively inside the table block, the clock instantly maps the explicit audit boundary locking the creation timeline forever.
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors group cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                Calculating Extreme Age?
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-xs text-center border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-2 rounded-lg font-mono tracking-tighter">
                TIMESTAMPDIFF(YEAR, birth_date, CURDATE())
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors group cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                Sector Scopes
              </p>
              <ul className="text-gray-600 dark:text-gray-400 text-xs font-bold space-y-2 uppercase tracking-wide">
                <li className="flex items-center text-blue-500"><Banknote className="w-4 h-4 mr-2" /> Banking: Interest Rates</li>
                <li className="flex items-center text-rose-500"><ShieldAlert className="w-4 h-4 mr-2" /> Medicine: Vitals Expired</li>
                <li className="flex items-center text-emerald-500"><MonitorPlay className="w-4 h-4 mr-2" /> Commerce: Revenue Dips</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SqlDates;