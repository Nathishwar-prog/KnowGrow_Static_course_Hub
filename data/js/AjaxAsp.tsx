import React, { useState } from 'react';
import {
  Server, Copy, Check, Zap, Globe, ArrowDown,
  Search, CheckCircle, Terminal, Database,
  Activity, Code2, ShieldCheck, FileInput, Layers
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title }: { code: string; title?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-orange-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Flow Step ───────────────────────────────────────────────────────────────
const FlowStep = ({ step, label, color, last = false }: { step: number; label: string; color: string; last?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg ${color}`}>
      {step}
    </div>
    <div className="mt-2 text-xs font-bold text-center text-gray-200 max-w-[100px]">{label}</div>
    {!last && <div className="mt-2"><ArrowDown className="w-4 h-4 text-gray-500" /></div>}
  </div>
);

// ─── Real World App Card ──────────────────────────────────────────────────────
const AppCard = ({
  icon: Icon, number, title, color, bgColor, borderColor, children
}: {
  icon: React.ElementType; number: string; title: string; color: string; bgColor: string; borderColor: string; children: React.ReactNode;
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${borderColor} shadow-sm hover:shadow-md transition-all`}>
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-xl ${bgColor} mr-3`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number}. {title}</h3>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700 font-mono text-xs">
      {children}
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const AjaxAsp: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-orange-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-red-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Server className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX with ASP
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Combine client-side JavaScript with server-side ASP for seamless, dynamic web applications.
        </p>
      </header>

      {/* ── Section 1 & 2: What is ASP + What is AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* ASP Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Server className="w-6 h-6 mr-3 text-orange-500" /> What is ASP?
          </h2>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl mb-6">
            <span className="font-bold text-orange-800 dark:text-orange-400 text-lg">
              ASP = Active Server Pages
            </span>
            <p className="mt-2 text-sm text-orange-700 dark:text-orange-300">
              A server-side scripting technology developed by <strong>Microsoft</strong> used to create dynamic web pages. ASP scripts run on the web server (IIS) and generate HTML that is sent to the browser.
            </p>
          </div>

          {/* Key Features Table */}
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-5">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Feature</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { feat: 'Server-side scripting', desc: 'Code runs on the server', color: 'text-orange-500' },
                  { feat: 'Database connectivity', desc: 'Can connect to databases', color: 'text-blue-500' },
                  { feat: 'Dynamic content', desc: 'Generates dynamic HTML', color: 'text-emerald-500' },
                  { feat: 'Integration', desc: 'Works with IIS server', color: 'text-purple-500' },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className={`px-4 py-2.5 font-bold ${r.color}`}>{r.feat}</td>
                    <td className="px-4 py-2.5">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Example ASP Code</p>
            <CodeBlock code={`<%\nResponse.Write("Welcome to ASP Web Application")\n%>`} />
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Output</span>
              <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">Welcome to ASP Web Application</span>
            </div>
          </div>
        </div>

        {/* AJAX + Why Combine */}
        <div className="bg-gradient-to-br from-red-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-red-800/50">
          <div className="absolute top-0 right-0 -m-6 text-red-500/10">
            <Globe className="w-48 h-48" />
          </div>

          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Globe className="w-6 h-6 mr-3 text-orange-400" /> What is AJAX?
          </h2>
          <p className="text-red-200 text-sm mb-4 relative z-10">
            AJAX (Asynchronous JavaScript and XML) allows a webpage to send and receive data from the server <strong>asynchronously without refreshing the page</strong>. Mainly implemented using:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-8 relative z-10">
            {['JavaScript', 'XMLHttpRequest', 'Fetch API', 'JSON / XML'].map((t, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-orange-100">{t}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold flex items-center text-white mb-3 relative z-10 border-t border-white/10 pt-6">
            <Zap className="w-5 h-5 mr-3 text-yellow-400" /> Why Combine AJAX with ASP?
          </h2>
          <p className="text-red-200 text-sm mb-4 relative z-10">When AJAX communicates with ASP pages, the ASP server processes the request and sends data back to the browser dynamically.</p>
          <div className="space-y-2 relative z-10">
            {['Faster applications', 'No page reload', 'Better user experience', 'Reduced server traffic', 'Dynamic content loading'].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-orange-100">
                <span className="text-emerald-400">✔</span> {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Architecture / Workflow ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-orange-950 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-orange-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Activity className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Layers className="w-8 h-8 mr-3 text-orange-400" /> AJAX + ASP Architecture
          </h2>
          <p className="text-orange-200 font-bold text-sm uppercase tracking-widest mb-10 border-b border-white/10 pb-4 relative z-10">Client-Server Communication Model</p>

          <div className="grid lg:grid-cols-2 gap-10 relative z-10">
            {/* Workflow Steps */}
            <div>
              <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-5">Workflow</p>
              <div className="space-y-3">
                {[
                  { n: '01', label: 'User performs an action (button click, typing search)', color: 'bg-orange-500' },
                  { n: '02', label: 'JavaScript sends an AJAX request', color: 'bg-amber-500' },
                  { n: '03', label: 'Request goes to ASP page on the server', color: 'bg-red-500' },
                  { n: '04', label: 'ASP processes the request', color: 'bg-rose-500' },
                  { n: '05', label: 'Server returns data', color: 'bg-purple-500' },
                  { n: '06', label: 'JavaScript updates the webpage', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-xs shadow flex-shrink-0 mt-0.5 ${s.color}`}>{s.n}</div>
                    <p className="text-sm text-gray-200 font-medium leading-snug pt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Diagram */}
            <div>
              <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-5">Flow Diagram</p>
              <div className="bg-black/40 rounded-xl border border-orange-800/40 p-5 font-mono text-sm space-y-1">
                {[
                  { text: 'User Action', color: 'text-orange-300' },
                  { text: '↓', color: 'text-gray-500' },
                  { text: 'JavaScript AJAX Request', color: 'text-amber-300' },
                  { text: '↓', color: 'text-gray-500' },
                  { text: 'ASP Server Processing', color: 'text-red-300' },
                  { text: '↓', color: 'text-gray-500' },
                  { text: 'Database (optional)', color: 'text-blue-300' },
                  { text: '↓', color: 'text-gray-500' },
                  { text: 'Response Sent Back', color: 'text-purple-300' },
                  { text: '↓', color: 'text-gray-500' },
                  { text: 'Update Web Page (DOM)', color: 'text-emerald-300' },
                ].map((line, i) => (
                  <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-4' : ''}`}>{line.text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Simple AJAX + ASP Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-orange-500 w-8 h-8 mr-3" /> Simple AJAX + ASP Example
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">This example loads server data using AJAX without refreshing the page.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <CodeBlock title="Step 1 — HTML Page" code={`<!DOCTYPE html>
<html>
<head>
  <title>AJAX with ASP Example</title>
</head>
<body>

<h2>AJAX ASP Demo</h2>

<button onclick="loadData()">Load Message</button>

<div id="result"></div>

<script>

function loadData(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","message.asp",true);

  xhr.onreadystatechange = function(){

    if(xhr.readyState==4 && xhr.status==200){

      document.getElementById("result")
        .innerHTML = xhr.responseText;

    }

  };

  xhr.send();

}

</script>
</body>
</html>`} />
            </div>

            <div className="space-y-4">
              <CodeBlock title="Step 2 — ASP File (message.asp)" code={`<%

Response.Write("Hello! Data loaded from ASP server using AJAX.")

%>`} />

              {/* Output Visualization */}
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Output Visualization</span>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
                  {/* Before */}
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Before Clicking Button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX ASP Demo</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">
                      Load Message
                    </button>
                  </div>
                  {/* After */}
                  <div className="border border-dashed border-emerald-300 dark:border-emerald-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-emerald-500 uppercase mb-3">After Clicking Button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX ASP Demo</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">
                      Load Message
                    </button>
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                      Hello! Data loaded from ASP server using AJAX.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Notice that only the result section changes, not the entire page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: AJAX ASP with Database ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-blue-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Database className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <Database className="w-8 h-8 mr-3 text-blue-400" /> AJAX + ASP with Database
          </h2>
          <p className="text-blue-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            Create a dynamic AJAX application that loads data from a database.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4">
              <CodeBlock title="ASP File — users.asp" code={`<%

Set conn = Server.CreateObject("ADODB.Connection")
conn.Open "DSN=mydatabase"

Set rs = conn.Execute("SELECT name,email FROM users")

Do While Not rs.EOF

  Response.Write("<p>" & rs("name") & _
    " - " & rs("email") & "</p>")

  rs.MoveNext

Loop

rs.Close
conn.Close

%>`} />
              <CodeBlock title="HTML" code={`<button onclick="loadUsers()">Show Users</button>

<div id="users"></div>`} />
            </div>

            <div className="space-y-4">
              <CodeBlock title="JavaScript AJAX Request" code={`function loadUsers(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","users.asp",true);

  xhr.onload = function(){

    document.getElementById("users")
      .innerHTML = xhr.responseText;

  }

  xhr.send();

}`} />

              {/* Output Visualization */}
              <div className="rounded-xl overflow-hidden border border-blue-800/50">
                <div className="bg-blue-950/60 px-4 py-2 border-b border-blue-800/50">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Output Example</span>
                </div>
                <div className="p-4 bg-blue-950/30 space-y-2">
                  {[
                    { name: 'John', email: 'john@email.com' },
                    { name: 'Smith', email: 'smith@email.com' },
                    { name: 'David', email: 'david@email.com' },
                  ].map((u, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-sm">
                      <span className="text-blue-300 font-bold">{u.name}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-300">{u.email}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-2 border-t border-blue-800/40 text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Data is loaded dynamically from the server.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Real-World Applications ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-4">
          Real-World AJAX ASP Applications
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-medium">AJAX + ASP is commonly used in many applications.</p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* 1. Live Search */}
          <AppCard
            icon={Search}
            number="1"
            title="Live Search System"
            color="text-orange-600"
            bgColor="bg-orange-100 dark:bg-orange-900/30"
            borderColor="border-orange-200 dark:border-orange-800"
          >
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400 mb-3 not-italic">User types and server returns suggestions instantly.</p>
              {['ja', 'jav', 'java'].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">&gt;</span>
                  <span className="text-gray-700 dark:text-gray-200 font-mono">{t}</span>
                </div>
              ))}
              <div className="mt-3 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                ↳ Server returns search suggestions instantly.
              </div>
            </div>
          </AppCard>

          {/* 2. Login Validation */}
          <AppCard
            icon={ShieldCheck}
            number="2"
            title="Login Validation"
            color="text-emerald-600"
            bgColor="bg-emerald-100 dark:bg-emerald-900/30"
            borderColor="border-emerald-200 dark:border-emerald-800"
          >
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400 mb-3 not-italic">AJAX sends username/password to ASP server:</p>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold">
                <Code2 className="w-3.5 h-3.5" />
                Checking user credentials...
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-700 dark:text-emerald-300 text-xs font-bold">Login successful</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">Without refreshing the page.</p>
            </div>
          </AppCard>

          {/* 3. Auto Suggest */}
          <AppCard
            icon={Activity}
            number="3"
            title="Auto Suggest"
            color="text-violet-600"
            bgColor="bg-violet-100 dark:bg-violet-900/30"
            borderColor="border-violet-200 dark:border-violet-800"
          >
            <div className="space-y-3">
              <p className="text-gray-500 dark:text-gray-400 mb-2 not-italic">Example:</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-500 text-xs">Search Course:</span>
                <span className="border border-violet-300 dark:border-violet-700 rounded px-2 py-0.5 font-mono text-violet-700 dark:text-violet-300 text-xs bg-white dark:bg-gray-800">jav</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Suggestions</p>
                {['Java', 'JavaScript', 'Java Spring'].map((s, i) => (
                  <div key={i} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 text-xs font-medium hover:bg-violet-50 dark:hover:bg-violet-900/20 cursor-default transition-colors">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </AppCard>

          {/* 4. Online Forms */}
          <AppCard
            icon={FileInput}
            number="4"
            title="Online Forms"
            color="text-blue-600"
            bgColor="bg-blue-100 dark:bg-blue-900/30"
            borderColor="border-blue-200 dark:border-blue-800"
          >
            <div className="space-y-3">
              <p className="text-gray-500 dark:text-gray-400 mb-2 not-italic">Submitting forms using AJAX:</p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
                <button className="w-full px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg font-bold cursor-default">
                  Submit
                </button>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2 mt-1">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-emerald-700 dark:text-emerald-300 text-xs font-bold">Form submitted successfully!</span>
              </div>
            </div>
          </AppCard>

        </div>
      </section>

      {/* ── Summary Banner ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-orange-500">
            <Server className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-orange-400" /> AJAX ASP — Quick Summary
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">Key Takeaways</p>
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { title: 'ASP is server-side', body: 'Active Server Pages run on IIS and generate dynamic HTML delivered to the browser.', color: 'text-orange-400' },
              { title: 'AJAX is client-side', body: 'JavaScript uses XMLHttpRequest or Fetch API to request data without page refresh.', color: 'text-blue-400' },
              { title: 'Together they shine', body: 'AJAX sends requests to ASP, which processes data/database queries and returns responses.', color: 'text-violet-400' },
              { title: 'Used everywhere', body: 'Live search, login validation, auto-suggest, and form submission all use AJAX + ASP.', color: 'text-emerald-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
                <div>
                  <h4 className="font-bold text-gray-100 text-base mb-1">{item.title}</h4>
                  <p className="text-gray-400 font-medium text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxAsp;