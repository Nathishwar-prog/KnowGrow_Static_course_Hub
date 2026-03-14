import React, { useState } from 'react';
import {
  Database, Copy, Check, Zap, Server, ArrowDown,
  Search, CheckCircle, Terminal, Globe, ShoppingCart,
  MessageSquare, LayoutDashboard, Users, Activity,
  Shield, Loader, Code2, Table2, RefreshCw
} from 'lucide-react';

// ─── Code Block with Copy ─────────────────────────────────────────────────────
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
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-teal-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-teal-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Result Table ─────────────────────────────────────────────────────────────
const ResultTable = ({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-4">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ─── Real World Card ──────────────────────────────────────────────────────────
const AppCard = ({
  icon: Icon, number, title, color, bgColor, borderColor, children
}: {
  icon: React.ElementType; number: string; title: string;
  color: string; bgColor: string; borderColor: string; children: React.ReactNode;
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${borderColor} shadow-sm hover:shadow-md transition-all`}>
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-xl ${bgColor} mr-3`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{number}. {title}</h3>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700 text-xs font-mono">
      {children}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AjaxDatabase: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-teal-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Database
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Send asynchronous requests to query databases and update pages dynamically — without a single page reload.
        </p>
      </header>

      {/* ── Section 1 & 2: What + Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* What is AJAX Database */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Database className="w-6 h-6 mr-3 text-teal-500" /> What is AJAX Database?
          </h2>
          <div className="p-4 bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 rounded-xl mb-5">
            <span className="font-bold text-teal-800 dark:text-teal-400 text-lg">AJAX + Database = Dynamic Data</span>
            <p className="mt-2 text-sm text-teal-700 dark:text-teal-300">
              JavaScript sends asynchronous requests to a server-side script, which communicates with a database and returns the data back to the browser.
            </p>
          </div>
          <div className="p-4 bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-900/30 rounded-xl">
            <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              <span className="font-black">Simple Definition:</span> AJAX Database communication is the process of sending and receiving database data dynamically using AJAX <em>without reloading the webpage</em>.
            </p>
          </div>
        </div>

        {/* Why Use */}
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-teal-800/50">
          <div className="absolute top-0 right-0 -m-6 text-teal-500/10">
            <Zap className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Why Use AJAX with Databases?
          </h2>
          <p className="text-teal-200 text-sm mb-6 relative z-10">
            Traditional web apps reload the page whenever database data is requested. AJAX removes this limitation.
          </p>
          <div className="overflow-x-auto ring-1 ring-white/10 rounded-xl relative z-10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-teal-300 uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-white/10">Feature</th>
                  <th className="px-4 py-3 border-b border-white/10">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {[
                  { feat: 'Faster data retrieval', desc: 'Only required data is fetched', color: 'text-teal-400' },
                  { feat: 'Better user experience', desc: 'No page refresh', color: 'text-cyan-400' },
                  { feat: 'Dynamic content', desc: 'Live updates', color: 'text-emerald-400' },
                  { feat: 'Reduced server load', desc: 'Smaller requests', color: 'text-blue-400' },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className={`px-4 py-2.5 font-bold ${r.color}`}>{r.feat}</td>
                    <td className="px-4 py-2.5 text-gray-300">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 3: Architecture ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Server className="text-teal-500 w-8 h-8 mr-3" /> AJAX Database Architecture
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">
            AJAX database applications follow a <strong className="text-gray-700 dark:text-gray-200">three-tier architecture</strong>.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: 'Client Side (Browser)',
                color: 'border-teal-400 bg-teal-50 dark:bg-teal-900/10',
                icon: Globe,
                iconColor: 'text-teal-500',
                items: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
              },
              {
                label: 'Server Side',
                color: 'border-cyan-400 bg-cyan-50 dark:bg-cyan-900/10',
                icon: Server,
                iconColor: 'text-cyan-500',
                items: ['ASP', 'PHP', 'Node.js', 'Python'],
              },
              {
                label: 'Database',
                color: 'border-blue-400 bg-blue-50 dark:bg-blue-900/10',
                icon: Database,
                iconColor: 'text-blue-500',
                items: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'],
              },
            ].map((tier, i) => (
              <div key={i} className={`rounded-2xl border-2 ${tier.color} p-6`}>
                <div className="flex items-center mb-4">
                  <tier.icon className={`w-6 h-6 mr-2 ${tier.iconColor}`} />
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">{tier.label}</h3>
                </div>
                <ul className="space-y-2">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${tier.iconColor.replace('text-', 'bg-')}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Architecture Diagram</p>
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm max-w-sm mx-auto space-y-1">
              {[
                { text: 'User Interface (Browser)', color: 'text-teal-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'JavaScript AJAX Request', color: 'text-cyan-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Server Script (ASP/PHP/Node)', color: 'text-yellow-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Database Query', color: 'text-blue-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Database Response', color: 'text-blue-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Server Sends Data', color: 'text-orange-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Web Page Updates Dynamically', color: 'text-emerald-300' },
              ].map((line, i) => (
                <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-8' : ''}`}>{line.text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How AJAX Database Works ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-teal-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Activity className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-teal-400" /> How AJAX Database Works
          </h2>
          <p className="text-teal-200 font-bold text-sm uppercase tracking-widest mb-10 border-b border-white/10 pb-4 relative z-10">Step-by-Step</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {[
              { n: '01', label: 'User performs an action (search, click, form submit)', color: 'bg-teal-500' },
              { n: '02', label: 'JavaScript sends an AJAX request to the server', color: 'bg-cyan-500' },
              { n: '03', label: 'The server-side script queries the database', color: 'bg-blue-500' },
              { n: '04', label: 'The database returns the result', color: 'bg-violet-500' },
              { n: '05', label: 'Server sends the response to the browser', color: 'bg-purple-500' },
              { n: '06', label: 'JavaScript updates the page dynamically', color: 'bg-emerald-500' },
            ].map((s) => (
              <div key={s.n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs shadow flex-shrink-0 ${s.color}`}>{s.n}</div>
                <p className="text-sm text-gray-200 font-medium leading-snug pt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Full Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-teal-500 w-8 h-8 mr-3" /> Example: AJAX Database Retrieval
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">A simple user list loader using AJAX.</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Code side */}
            <div className="space-y-4">
              <CodeBlock title="Step 1 — HTML Page" code={`<!DOCTYPE html>
<html>
<head>
  <title>AJAX Database Example</title>
</head>
<body>

<h2>User List</h2>

<button onclick="loadUsers()">Load Users</button>

<div id="result"></div>

<script>

function loadUsers(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","users.asp",true);

  xhr.onload = function(){

    if(xhr.status==200){

      document.getElementById("result")
        .innerHTML = xhr.responseText;

    }

  };

  xhr.send();

}

</script>
</body>
</html>`} />
              <CodeBlock title="Step 3 — ASP Server Script (users.asp)" code={`<%

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
            </div>

            {/* Data + Output side */}
            <div className="space-y-4">
              {/* Step 2 — DB Table */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Table2 className="w-4 h-4 text-teal-500" /> Step 2 — Database Table: users
                </p>
                <ResultTable
                  headers={['id', 'name', 'email']}
                  rows={[
                    [1, 'John', 'john@email.com'],
                    [2, 'Smith', 'smith@email.com'],
                    [3, 'David', 'david@email.com'],
                  ]}
                />
              </div>

              {/* Output Visualization */}
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Output Visualization</span>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
                  {/* Before */}
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Before Button Click</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">User List</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">
                      Load Users
                    </button>
                  </div>
                  {/* After */}
                  <div className="border border-dashed border-teal-300 dark:border-teal-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-teal-500 uppercase mb-3">After Button Click</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">User List</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">
                      Load Users
                    </button>
                    <div className="space-y-1">
                      {['John - john@email.com', 'Smith - smith@email.com', 'David - david@email.com'].map((u, i) => (
                        <p key={i} className="text-sm text-teal-700 dark:text-teal-300 font-mono font-medium">{u}</p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Notice that only the result section updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Live Search ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-blue-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Search className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <Search className="w-8 h-8 mr-3 text-blue-400" /> AJAX Database Live Search
          </h2>
          <p className="text-blue-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            Live search is one of the most common AJAX database applications.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <CodeBlock title="HTML" code={`<input type="text"
  onkeyup="searchUser(this.value)"
  placeholder="Search user">

<div id="result"></div>`} />
            <CodeBlock title="JavaScript" code={`function searchUser(name){

  var xhr = new XMLHttpRequest();

  xhr.open("GET",
    "search.asp?name="+name,true);

  xhr.onload = function(){

    document.getElementById("result")
      .innerHTML = xhr.responseText;

  }

  xhr.send();

}`} />
            <CodeBlock title="ASP — search.asp" code={`<%

name = Request.QueryString("name")

Set conn = Server.CreateObject(
  "ADODB.Connection")
conn.Open "DSN=mydatabase"

sql = "SELECT name,email FROM users" & _
      " WHERE name LIKE '%" & name & "%'"

Set rs = conn.Execute(sql)

Do While Not rs.EOF

  Response.Write("<p>" & rs("name") & _
    " - " & rs("email") & "</p>")

  rs.MoveNext

Loop

rs.Close
conn.Close

%>`} />
          </div>

          {/* Live Search Output */}
          <div className="mt-8 relative z-10">
            <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">Live Search Output</p>
            <div className="bg-black/40 rounded-xl border border-blue-800/40 p-6 max-w-md">
              <p className="text-gray-400 text-xs mb-3">User types:</p>
              <div className="space-y-1 mb-4">
                {['j', 'jo', 'john'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-blue-400">&gt;</span>
                    <span className="font-mono text-gray-200">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mb-2">Results appear instantly:</p>
              {['John - john@email.com', 'Johnny - johnny@email.com'].map((r, i) => (
                <p key={i} className="font-mono text-sm text-teal-300">{r}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CRUD Operations ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <RefreshCw className="text-teal-500 w-8 h-8 mr-3" /> AJAX CRUD Operations
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">AJAX is commonly used for CRUD operations.</p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <ResultTable
                headers={['Operation', 'Description']}
                rows={[
                  ['Create', 'Insert new data'],
                  ['Read', 'Retrieve data'],
                  ['Update', 'Modify existing data'],
                  ['Delete', 'Remove data'],
                ]}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">Example Applications</p>
              <div className="space-y-3">
                {[
                  { label: 'Student management system', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
                  { label: 'Blood bank management system', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800' },
                  { label: 'E-commerce dashboard', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
                  { label: 'Course management system', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
                ].map((app, i) => (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl border font-semibold text-sm ${app.color}`}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    {app.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Real World Applications ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-4">
          Real-World AJAX Database Applications
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-medium">AJAX database interaction powers the modern web.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          <AppCard icon={ShoppingCart} number="1" title="E-commerce Filtering"
            color="text-amber-600" bgColor="bg-amber-100 dark:bg-amber-900/30"
            borderColor="border-amber-200 dark:border-amber-800">
            <div className="space-y-2">
              <div className="text-gray-500 not-italic">
                <span className="text-gray-600 dark:text-gray-400">Category:</span>{' '}
                <span className="text-amber-600 dark:text-amber-400 font-bold">Electronics</span>
              </div>
              <div className="text-gray-500 not-italic">
                <span className="text-gray-600 dark:text-gray-400">Price:</span>{' '}
                <span className="text-amber-600 dark:text-amber-400 font-bold">&lt; ₹5000</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 text-emerald-600 dark:text-emerald-400 font-bold not-italic">
                ↳ Products update instantly.
              </div>
            </div>
          </AppCard>

          <AppCard icon={Users} number="2" title="Social Media Feed"
            color="text-blue-600" bgColor="bg-blue-100 dark:bg-blue-900/30"
            borderColor="border-blue-200 dark:border-blue-800">
            <div className="space-y-2">
              {['Post by Alice ❤️', 'Post by Bob 💬', 'Post by Carol 🔁'].map((p, i) => (
                <div key={i} className="px-3 py-2 bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700">{p}</div>
              ))}
              <div className="flex items-center gap-1.5 text-blue-500 font-bold not-italic">
                <Loader className="w-3 h-3 animate-spin" />
                Loading more posts...
              </div>
            </div>
          </AppCard>

          <AppCard icon={MessageSquare} number="3" title="Online Chat System"
            color="text-violet-600" bgColor="bg-violet-100 dark:bg-violet-900/30"
            borderColor="border-violet-200 dark:border-violet-800">
            <div className="space-y-2">
              {[
                { msg: 'Hello!', dir: 'left' },
                { msg: 'Hi there!', dir: 'right' },
                { msg: 'How are you?', dir: 'left' },
              ].map((c, i) => (
                <div key={i} className={`flex ${c.dir === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-3 py-1.5 text-xs font-semibold max-w-[80%] ${c.dir === 'right' ? 'bg-violet-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                    {c.msg}
                  </div>
                </div>
              ))}
              <p className="text-violet-400 font-bold not-italic text-center">Messages update in real time.</p>
            </div>
          </AppCard>

          <AppCard icon={LayoutDashboard} number="4" title="Admin Dashboard"
            color="text-emerald-600" bgColor="bg-emerald-100 dark:bg-emerald-900/30"
            borderColor="border-emerald-200 dark:border-emerald-800">
            <div className="space-y-2">
              {[
                { label: 'Total Users', value: '1,240' },
                { label: 'Orders Today', value: '87' },
                { label: 'Revenue', value: '₹42,000' },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">{s.label}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{s.value}</span>
                </div>
              ))}
              <p className="text-emerald-500 font-bold not-italic">Dynamic stats from the database.</p>
            </div>
          </AppCard>
        </div>
      </section>

      {/* ── Section 9: Best Practices ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-teal-500">
            <Database className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-teal-400" /> Best Practices for AJAX Database
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            Follow These for Production-Ready Applications
          </p>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">

            {/* Use JSON */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="mt-1 flex-shrink-0 text-teal-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use JSON Instead of HTML</h4>
                <p className="text-gray-400 text-xs mb-3">JSON is faster and easier to process. Example server response:</p>
                <div className="bg-black/40 border border-teal-800/40 rounded-lg p-3 font-mono text-xs text-teal-300">
                  {`{\n  "name":"Karthick",\n  "city":"Erode"\n}`}
                </div>
              </div>
            </div>

            {/* Sanitize */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="mt-1 flex-shrink-0 text-red-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Always Sanitize DB Queries</h4>
                <p className="text-gray-400 text-xs mb-3">Avoid SQL injection attacks. Use parameterized queries:</p>
                <div className="bg-black/40 border border-red-800/40 rounded-lg p-3 font-mono text-xs">
                  <div className="text-red-400 mb-1">// Unsafe</div>
                  <div className="text-red-300 mb-3 line-through opacity-60">WHERE name = '?'+input</div>
                  <div className="text-emerald-400 mb-1">// Safe</div>
                  <div className="text-emerald-300">WHERE name LIKE ?</div>
                </div>
              </div>
            </div>

            {/* Loading Indicator */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="mt-1 flex-shrink-0 text-amber-400">
                <Loader className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-100 text-base mb-2">Use Loading Indicators</h4>
                <p className="text-gray-400 text-xs mb-3">This improves user experience. Example:</p>
                <div className="bg-black/40 border border-amber-800/40 rounded-lg p-4 flex items-center gap-3">
                  <Loader className="w-4 h-4 text-amber-400 animate-spin" />
                  <span className="font-mono text-sm text-amber-300">Loading data...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxDatabase;