import React, { useState } from 'react';
import { Database, Terminal, Copy, Check, Table2, ArrowRight, Zap, Target, LayoutTemplate, Briefcase, Server, CheckCircle, HelpCircle, AlertTriangle, AlertOctagon, Link2, BoxSelect, Filter, DatabaseZap, Clock, Hash, Smartphone, Image as ImageIcon, Banknote, ShieldAlert, Cpu } from 'lucide-react';

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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-violet-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-violet-300 leading-relaxed border-t-0 border border-gray-800 rounded-b-xl">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

const SqlDataTypes: React.FC = () => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<'numeric' | 'string' | 'datetime' | 'boolean' | 'binary'>('numeric');

  // Interactive Platform DB Setup Lab Configurations
  const getCategoryContent = () => {
    switch (activeCategoryTab) {
      case 'numeric':
        return {
          title: "Numeric Types",
          icon: <Hash className="w-5 h-5 mr-2 text-blue-500" />,
          desc: "Mathable values ranging from extremely tiny logic-counts to massive global transactional amounts.",
          types: [
            { name: "INT", desc: "Standard whole numbers.", rules: "-2 billion to +2 billion", useCase: "age INT" },
            { name: "BIGINT", desc: "Massively large integers.", rules: "Trillions of digits limit", useCase: "transaction_id BIGINT" },
            { name: "DECIMAL(p,s)", desc: "Absolute exact math locking precise leading & trailing zeros.", rules: "p = total digits, s = decimal spaces", useCase: "salary DECIMAL(10,2)" },
            { name: "FLOAT / DOUBLE", desc: "Imprecise floating calculation mapping.", rules: "Never use for financial data", useCase: "physics_vectors FLOAT" }
          ],
          highlight: "blue"
        };
      case 'string':
        return {
          title: "String Types",
          icon: <LayoutTemplate className="w-5 h-5 mr-2 text-emerald-500" />,
          desc: "Alphanumerical structures allocated to hold sentences, identifiers, or extreme blog structures.",
          types: [
            { name: "VARCHAR(n)", desc: "Calculates variable bounding length based precisely on what is written.", rules: "Saves maximum space. Highly recommended.", useCase: "name VARCHAR(100)" },
            { name: "CHAR(n)", desc: "Strictly reserves sequential memory length padding blank characters to match limits.", rules: "Significantly faster for identical data (like country codes).", useCase: "country_code CHAR(2)" },
            { name: "TEXT", desc: "Extremely heavy multi-kilobyte text array chunks.", rules: "Slow querying. Use for long bodies.", useCase: "description TEXT" }
          ],
          highlight: "emerald"
        };
      case 'datetime':
        return {
          title: "Date & Time",
          icon: <Clock className="w-5 h-5 mr-2 text-purple-500" />,
          desc: "Standardized chronologies stored efficiently for sorting rather than treating dates as dumb strings.",
          types: [
            { name: "DATE", desc: "Day identifiers without hourly scopes.", rules: "YYYY-MM-DD", useCase: "birth_date DATE" },
            { name: "DATETIME", desc: "Dates mathematically fused alongside exact chronometers.", rules: "YYYY-MM-DD HH:MM:SS", useCase: "created_at DATETIME" },
            { name: "TIME", desc: "Independent hour markers.", rules: "HH:MM:SS", useCase: "login_time TIME" }
          ],
          highlight: "purple"
        };
      case 'boolean':
        return {
          title: "Boolean States",
          icon: <Target className="w-5 h-5 mr-2 text-rose-500" />,
          desc: "Absolute binary flags mapping True/False. Under the hood, MySQL often builds these using tiny integer limits of just 0 or 1.",
          types: [
            { name: "BOOLEAN", desc: "Native logic handling.", rules: "FALSE / TRUE", useCase: "is_active BOOLEAN" }
          ],
          highlight: "rose"
        };
      case 'binary':
        return {
          title: "Binary Sequences",
          icon: <ImageIcon className="w-5 h-5 mr-2 text-amber-500" />,
          desc: "Storing raw physical documents inside tables rather than mapping paths to AWS buckets.",
          types: [
            { name: "BLOB", desc: "Binary Large Object.", rules: "Gigabyte image mapping", useCase: "profile_image BLOB" }
          ],
          highlight: "amber"
        };
    }
  };

  const category = getCategoryContent();

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-violet-900/10 min-h-screen font-sans">

      {/* Header Splash */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:-rotate-3 transition-transform cursor-default">
          <Cpu className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight flex items-center justify-center">
          SQL DATA TYPES
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The memory architecture of databases. Declaring the exact allowed inputs and explicit disk sizes for constructing highly-efficient tables.
        </p>
      </header>

      {/* Intro Definition Box */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-4">
            <BoxSelect className="w-6 h-6 mr-3 text-violet-500" /> Defining A Record
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 text-sm">
            Datatypes lock down table matrices exactly. They command the compiler to allocate precise disk sizes and absolutely forbid invalid character uploads (e.g. attempting to drop the text "Ten" into an <code>INT</code> slot throws a hard fault).
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold">
            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-3 rounded-xl border border-blue-200 dark:border-blue-900/40">age INT</div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/40">name VARCHAR(50)</div>
            <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 p-3 rounded-xl border border-amber-200 dark:border-amber-900/40">salary DECIMAL(10,2)</div>
          </div>
        </div>

        {/* Destructive Warning */}
        <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-rose-950/20 dark:to-black p-8 rounded-3xl shadow-sm border border-red-200 dark:border-red-900/30 flex flex-col h-full relative overflow-hidden justify-center hover:border-red-500 transition-colors">
          <h2 className="text-2xl font-bold flex items-center text-red-900 dark:text-red-400 mb-4 relative z-10">
            <AlertOctagon className="w-6 h-6 mr-3 text-red-500" /> Catastrophic Repercussions
          </h2>
          <p className="text-red-800 dark:text-red-300 font-medium mb-6 text-sm relative z-10 font-bold uppercase tracking-wide">
            Choosing the wrong Datatype invokes:
          </p>
          <div className="space-y-2 relative z-10 text-sm font-medium text-red-900 dark:text-red-200">
            <div className="flex items-center"><Target className="w-4 h-4 mr-2 text-red-500" /> Extremely slow table search queries.</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-2 text-red-500" /> Terabytes of utterly wasted disk space.</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-2 text-red-500" /> Silent string truncations destroying information limits.</div>
            <div className="flex items-center"><Target className="w-4 h-4 mr-2 text-red-500" /> Fatal Integer Overflow compiler errors.</div>
          </div>
        </div>
      </section>

      {/* Advanced Typings Interactive Matrix */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
          <Filter className="w-8 h-8 mr-3 text-violet-500" /> Interactive Memory Directory
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">

          {/* Nav Toolbar */}
          <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex flex-nowrap overflow-x-auto shadow-inner custom-scrollbar">
            {[
              { id: 'numeric', label: 'Numeric', icon: <Hash className="w-4 h-4 mr-2" />, color: 'blue' },
              { id: 'string', label: 'String', icon: <LayoutTemplate className="w-4 h-4 mr-2" />, color: 'emerald' },
              { id: 'datetime', label: 'Date/Time', icon: <Clock className="w-4 h-4 mr-2" />, color: 'purple' },
              { id: 'boolean', label: 'Boolean', icon: <Target className="w-4 h-4 mr-2" />, color: 'rose' },
              { id: 'binary', label: 'Binary Documents', icon: <ImageIcon className="w-4 h-4 mr-2" />, color: 'amber' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id as any)}
                className={`flex-shrink-0 px-6 sm:px-8 py-4 font-bold text-sm tracking-wide transition-colors flex justify-center items-center border-b-2 ${activeCategoryTab === tab.id ? `border-${tab.color}-500 text-${tab.color}-600 dark:text-${tab.color}-400 bg-white dark:bg-gray-800` : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content Lab */}
          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                {category.icon} {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {category.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.types.map((t, idx) => (
                <div key={idx} className={`bg-${category.highlight}-50 dark:bg-${category.highlight}-900/10 p-6 rounded-2xl border border-${category.highlight}-200 dark:border-${category.highlight}-900/40 relative overflow-hidden transition-transform hover:-translate-y-1`}>
                  <div className={`absolute top-0 right-0 p-2 bg-${category.highlight}-100 dark:bg-${category.highlight}-900/50 rounded-bl-xl text-xs font-bold text-${category.highlight}-700 dark:text-${category.highlight}-300`}>
                    {t.rules}
                  </div>
                  <h4 className={`text-lg font-black text-${category.highlight}-700 dark:text-${category.highlight}-400 mb-2`}>{t.name}</h4>
                  <p className={`text-sm text-${category.highlight}-900 dark:text-${category.highlight}-200 font-medium mb-4 pr-32`}>{t.desc}</p>
                  <code className={`block bg-white dark:bg-black/50 p-2 rounded-lg text-xs font-mono font-bold text-gray-700 dark:text-gray-300 border border-${category.highlight}-200 dark:border-${category.highlight}-800/50 w-fit`}>
                    {t.useCase}
                  </code>
                </div>
              ))}
            </div>

            {/* Float Warning inside Numerics specifically */}
            {activeCategoryTab === 'numeric' && (
              <div className="mt-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 p-4 rounded-xl flex items-center">
                <Banknote className="w-8 h-8 text-red-500 mr-4 shrink-0" />
                <div>
                  <p className="text-red-800 dark:text-red-400 font-bold text-sm uppercase tracking-widest mb-1">Financial Precision Law</p>
                  <p className="text-red-900 dark:text-red-200 text-xs font-medium">Never map banking or e-commerce logic to <code>FLOAT</code> classes. They approximate fractional points causing cascading cent errors. Deploy <code>DECIMAL(10,2)</code> natively.</p>
                </div>
              </div>
            )}

            {/* BLOB Warning inside Binaries specifically */}
            {activeCategoryTab === 'binary' && (
              <div className="mt-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-4 rounded-xl flex items-center">
                <ShieldAlert className="w-8 h-8 text-amber-500 mr-4 shrink-0" />
                <div>
                  <p className="text-amber-800 dark:text-amber-400 font-bold text-sm uppercase tracking-widest mb-1">DevOps Pipeline Standard</p>
                  <p className="text-amber-900 dark:text-amber-200 text-xs font-medium">Never push raw Megabyte UI file uploads directly into relational databases via <code>BLOB</code> rows. You will run out of expensive DB SSD ram. Instead, dump the image onto an S3 filesystem bucket securely, and strictly map only its URL back to a standard <code>VARCHAR</code> pointer logic.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Database Compilation Rules grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
          <Zap className="w-6 h-6 mr-3 text-violet-500" /> Platform Under-The-Hood Compilers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-cyan-500 transition-colors">
            <Database className="w-8 h-8 mb-4 text-cyan-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">MySQL Interpretations</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Target className="w-4 h-4 inline mr-2 text-cyan-400" /> Maps BOOLEAN invisibly behind the scenes exactly into a numeric <code className="text-cyan-400 bg-gray-800 px-1 rounded">TINYINT(1)</code> space.</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-rose-500 transition-colors">
            <Server className="w-8 h-8 mb-4 text-rose-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">SQL Server T-SQL Arrays</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Target className="w-4 h-4 inline mr-2 text-rose-400" /> Replaces variables fully implementing powerful <code className="text-rose-400 bg-gray-800 px-1 rounded">NVARCHAR</code> structures for dynamic mapping.</li>
              <li><Target className="w-4 h-4 inline mr-2 text-rose-400" /> Shrinks down Booleans onto strict localized <code className="text-rose-400 bg-gray-800 px-1 rounded">BIT</code> fields.</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-sm relative text-white hover:border-indigo-500 transition-colors">
            <DatabaseZap className="w-8 h-8 mb-4 text-indigo-500" />
            <h3 className="text-xl font-bold mb-3 border-b border-gray-700 pb-2">PostgreSQL Rigidity</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Target className="w-4 h-4 inline mr-2 text-indigo-400" /> Establishes explicitly strict type enforcement algorithms natively.</li>
              <li><Target className="w-4 h-4 inline mr-2 text-indigo-400" /> Utilizes highly dedicated explicit Native Booleans inside compilers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Production Blueprint Layout */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Senior Architect Layout */}
          <div className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center relative z-10">
              <Briefcase className="w-7 h-7 mr-3 text-violet-500" />
              15+ Years Performance Pipeline
            </h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 relative z-10">Real-World Execution Optimizations</p>

            <div className="space-y-6 relative z-10 text-sm font-medium">

              {/* Concept 1 */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 1. Deploy The Smallest Valid Byte Array</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed">
                  Massive bloat occurs when developers use <code className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-1 rounded">BIGINT</code> purely for a column tracking human Age. If your maximum projected capacity is 0 to 120, implement an exact <code className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-1 rounded">TINYINT</code> byte boundary constraint.
                </p>
              </div>

              {/* Concept 2 */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center text-lg"><span className="text-xl mr-2">🔥</span> 2. Aggressive Foreign Key Indexing</h3>
                <p className="text-gray-600 dark:text-gray-400 pl-7 leading-relaxed mb-4">Relational databases compute integer-logic massively faster than attempting to compare string loops.</p>
                <div className="bg-violet-50 dark:bg-violet-900/10 p-4 rounded-xl border border-violet-100 dark:border-violet-900/30 ml-7">
                  <p className="text-violet-800 dark:text-violet-400 font-bold mb-2">When establishing JOIN bridges:</p>
                  <code className="text-xs bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 font-bold flex justify-between">
                    <span>ON Users.id_string = Orders.user_id_string</span>
                    <span className="text-red-500">🐌 Terribly Slow</span>
                  </code>
                  <code className="text-xs bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700 font-bold flex justify-between mt-2">
                    <span>ON Users.id_int = Orders.user_id_int</span>
                    <span className="text-emerald-500">⚡ Lightning Fast</span>
                  </code>
                </div>
              </div>

            </div>
          </div>

          {/* Interview Cards Right */}
          <div className="lg:col-span-4 flex flex-col space-y-4 text-sm font-medium">
            <h3 className="text-gray-900 dark:text-white font-extrabold text-xl mb-2 flex items-center">
              <HelpCircle className="w-6 h-6 mr-3 text-gray-500" />
              Interview Logic Matrix
            </h3>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-500 transition-colors group cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-4 flex items-center">
                <Smartphone className="w-4 h-4 mr-2" /> Phone Number Arrays?
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-xs">
                <strong className="text-emerald-500">✔ String (VARCHAR) setup.</strong>
                <br /><br />
                Never attach phone logic down into integers. Integers will silently strip the leading `0` and instantly crash when processing the `+` location symbol. We never do math on dialer addresses.
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-violet-500 transition-colors group cursor-default">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-3">
                CHAR Matrix vs VARCHAR Matrix
              </p>
              <div className="text-gray-600 dark:text-gray-400 text-xs">
                <strong className="text-cyan-500 block mb-1">CHAR Matrix</strong>
                Allocates absolute locked sizes dynamically. If unused, blocks are blindly padded with ghost whitespace.
                <strong className="text-rose-500 block mt-3 mb-1">VARCHAR Matrix</strong>
                Morphs identically to matched injected byte arrays saving massive disk limits on unused trailing bounds.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Production Synthesis */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>

          <div className="flex-1 text-center lg:text-left relative z-10">
            <h3 className="text-2xl font-bold flex items-center text-white justify-center lg:justify-start mb-4">
              <Terminal className="w-6 h-6 mr-3 text-violet-500" /> Final Production Ready Output
            </h3>
            <p className="text-gray-400 text-sm font-medium mb-6 lg:mb-0">
              When compiling a real-world table schema, you will fuse these precise Datatype classes intrinsically alongside absolute database Architecture Constraints (Primary Hooks, Defaults, and Structural Laws).
            </p>
          </div>

          <div className="flex-1 w-full shadow-2xl relative z-10">
            <CodeSnippetBlock codeSnippet="CREATE TABLE Users (&#10;    user_id BIGINT PRIMARY KEY,&#10;    name VARCHAR(100) NOT NULL,&#10;    email VARCHAR(150) UNIQUE,&#10;    salary DECIMAL(10,2),&#10;    is_active BOOLEAN DEFAULT TRUE,&#10;    created_at DATETIME&#10;);" title="Industry Standard Architecture Payload" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default SqlDataTypes;