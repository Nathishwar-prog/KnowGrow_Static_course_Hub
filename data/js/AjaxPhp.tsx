import React, { useState } from 'react';
import {
  Server, Copy, Check, Zap, Globe, ArrowDown,
  Search, CheckCircle, Terminal, Database,
  Code2, Table2, Send, Activity
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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-purple-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-purple-300 leading-relaxed rounded-b-xl">
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
        <tr>{headers.map((h, i) => <th key={i} className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">{h}</th>)}</tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
            {row.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ─── Output Panel ─────────────────────────────────────────────────────────────
const OutputPanel = ({ label = 'Output', children }: { label?: string; children: React.ReactNode }) => (
  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800">{children}</div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AjaxPhp: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-purple-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Server className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX with PHP
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Combine JavaScript's async power with PHP's server-side scripting for seamless, dynamic web apps.
        </p>
      </header>

      {/* ── Section 1 & 2: What is PHP + What is AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* PHP Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Server className="w-6 h-6 mr-3 text-purple-500" /> What is PHP?
          </h2>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 rounded-xl mb-5">
            <span className="font-bold text-purple-800 dark:text-purple-400 text-lg">PHP = Hypertext Preprocessor</span>
            <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">
              A <strong>server-side scripting language</strong> mainly used to develop dynamic web applications. PHP runs on the server, processes requests, and sends the result back to the browser as HTML, JSON, or text.
            </p>
          </div>
          <div className="space-y-3">
            <CodeBlock title="Example PHP Code" code={`<?php\necho "Welcome to PHP Programming";\n?>`} />
            <OutputPanel label="Output">
              <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">Welcome to PHP Programming</span>
            </OutputPanel>
          </div>
        </div>

        {/* AJAX + Why Combine */}
        <div className="bg-gradient-to-br from-fuchsia-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-fuchsia-800/50">
          <div className="absolute top-0 right-0 -m-6 text-fuchsia-500/10"><Globe className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Globe className="w-6 h-6 mr-3 text-fuchsia-300" /> What is AJAX?
          </h2>
          <p className="text-fuchsia-200 text-sm mb-6 relative z-10">
            AJAX (Asynchronous JavaScript and XML) allows web pages to communicate with the server asynchronously — the browser can request data and update the page <strong>without reloading the entire page</strong>.
          </p>
          <h2 className="text-xl font-bold flex items-center text-white mb-3 relative z-10 border-t border-white/10 pt-6">
            <Zap className="w-5 h-5 mr-3 text-yellow-400" /> Why Use AJAX with PHP?
          </h2>
          <p className="text-fuchsia-200 text-sm mb-4 relative z-10">AJAX sends requests to PHP scripts. PHP processes them and returns the data.</p>
          <div className="overflow-x-auto ring-1 ring-white/10 rounded-xl relative z-10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-fuchsia-300 uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-white/10">Benefit</th>
                  <th className="px-4 py-3 border-b border-white/10">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { b: 'Faster applications', d: 'Only required data is loaded', c: 'text-purple-400' },
                  { b: 'No page refresh', d: 'Smooth user experience', c: 'text-fuchsia-400' },
                  { b: 'Dynamic content', d: 'Updates page instantly', c: 'text-pink-400' },
                  { b: 'Reduced server load', d: 'Smaller requests', c: 'text-rose-400' },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className={`px-4 py-2.5 font-bold ${r.c}`}>{r.b}</td>
                    <td className="px-4 py-2.5 text-gray-300 font-medium">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: Architecture ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-purple-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="w-72 h-72" /></div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Code2 className="w-8 h-8 mr-3 text-purple-400" /> AJAX + PHP Architecture
          </h2>
          <p className="text-purple-200 font-bold text-sm uppercase tracking-widest mb-10 border-b border-white/10 pb-4 relative z-10">Client-Server Model</p>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {/* Client Side */}
            <div className="bg-white/5 border border-purple-800/30 rounded-2xl p-6">
              <h3 className="font-bold text-purple-300 mb-4 flex items-center gap-2"><Globe className="w-4 h-4" /> Client Side</h3>
              {['HTML', 'CSS', 'JavaScript', 'AJAX'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-200 font-medium py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>{t}
                </div>
              ))}
            </div>
            {/* Server Side */}
            <div className="bg-white/5 border border-fuchsia-800/30 rounded-2xl p-6">
              <h3 className="font-bold text-fuchsia-300 mb-4 flex items-center gap-2"><Server className="w-4 h-4" /> Server Side</h3>
              {['PHP', 'Database (Optional)'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-200 font-medium py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>{t}
                </div>
              ))}
            </div>
            {/* Database */}
            <div className="bg-white/5 border border-pink-800/30 rounded-2xl p-6">
              <h3 className="font-bold text-pink-300 mb-4 flex items-center gap-2"><Database className="w-4 h-4" /> Database</h3>
              {['MySQL', 'PostgreSQL', 'MariaDB'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-200 font-medium py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>{t}
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="mt-8 relative z-10">
            <p className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-5">Workflow</p>
            <div className="bg-black/40 rounded-xl border border-purple-800/40 p-6 font-mono text-sm space-y-1 max-w-xs">
              {[
                { text: 'User Action', color: 'text-purple-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'JavaScript AJAX Request', color: 'text-fuchsia-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'PHP Server Script', color: 'text-pink-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Database Query (optional)', color: 'text-blue-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Server Response', color: 'text-orange-300' },
                { text: '↓', color: 'text-gray-500' },
                { text: 'Webpage Update', color: 'text-emerald-300' },
              ].map((line, i) => (
                <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-6' : ''}`}>{line.text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Simple Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-purple-500 w-8 h-8 mr-3" /> Simple AJAX + PHP Example
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">Loads data from a PHP file without refreshing the page.</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CodeBlock title="Step 1 — HTML Page" code={`<!DOCTYPE html>
<html>
<head>
  <title>AJAX PHP Example</title>
</head>
<body>

<h2>AJAX PHP Demo</h2>

<button onclick="loadData()">Load Data</button>

<div id="result"></div>

<script>

function loadData(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","message.php",true);

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
              <CodeBlock title="Step 2 — PHP File (message.php)" code={`<?php

echo "Hello! This message is loaded from the PHP server using AJAX.";

?>`} />
            </div>
            <div>
              <OutputPanel label="Output">
                <div className="space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Before clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX PHP Demo</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">Load Data</button>
                  </div>
                  <div className="border border-dashed border-purple-300 dark:border-purple-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-purple-500 uppercase mb-2">After clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX PHP Demo</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">Load Data</button>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded text-sm text-purple-800 dark:text-purple-300 font-medium">
                      Hello! This message is loaded from the PHP server using AJAX.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Only the result section updates.</p>
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Form Submission ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-pink-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Send className="w-72 h-72" /></div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <Send className="w-8 h-8 mr-3 text-pink-400" /> AJAX PHP Form Submission
          </h2>
          <p className="text-pink-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            AJAX can submit forms <strong>without reloading the page</strong>.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <CodeBlock title="HTML" code={`<form id="userForm">

  Name:
  <input type="text" id="name">

  <button type="button"
    onclick="submitForm()">Submit</button>

</form>

<div id="message"></div>`} />
            <CodeBlock title="JavaScript" code={`function submitForm(){

  let name = document.getElementById("name").value;

  var xhr = new XMLHttpRequest();

  xhr.open("POST","submit.php",true);

  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );

  xhr.onload = function(){

    document.getElementById("message")
      .innerHTML = xhr.responseText;

  };

  xhr.send("name="+name);

}`} />
            <div className="space-y-4">
              <CodeBlock title="PHP — submit.php" code={`<?php

$name = $_POST['name'];

echo "Hello ".$name.",
  your form was submitted successfully.";

?>`} />
              <div className="rounded-xl overflow-hidden border border-pink-800/50">
                <div className="bg-pink-950/60 px-4 py-2 border-b border-pink-800/50">
                  <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">Output</span>
                </div>
                <div className="p-4 bg-pink-950/30">
                  <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 rounded-lg px-3 py-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-emerald-300 text-sm font-semibold">Hello Karthick, your form was submitted successfully.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Database Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Database className="text-purple-500 w-8 h-8 mr-3" /> AJAX PHP Database Example
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">AJAX can retrieve data from a database using PHP.</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Table2 className="w-4 h-4 text-purple-500" /> Database Table — users
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
              <CodeBlock title="HTML" code={`<button onclick="loadUsers()">Show Users</button>\n\n<div id="users"></div>`} />
              <CodeBlock title="JavaScript" code={`function loadUsers(){

  fetch("users.php")

    .then(response => response.text())

    .then(data => {

      document.getElementById("users")
        .innerHTML = data;

    });

}`} />
            </div>
            <div className="space-y-4">
              <CodeBlock title="PHP — users.php" code={`<?php

$conn = mysqli_connect(
  "localhost","root","","testdb");

$sql = "SELECT name,email FROM users";

$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($result)){

  echo "<p>".$row['name']." - "
      .$row['email']."</p>";

}

?>`} />
              <OutputPanel label="Output">
                <div className="space-y-2">
                  {['John - john@email.com', 'Smith - smith@email.com', 'David - david@email.com'].map((u, i) => (
                    <div key={i} className="font-mono text-sm px-3 py-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/40 rounded-lg text-purple-800 dark:text-purple-300 font-medium">{u}</div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Data loads without refreshing the page.
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Live Search ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-violet-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Search className="w-72 h-72" /></div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <Search className="w-8 h-8 mr-3 text-violet-400" /> AJAX PHP Live Search
          </h2>
          <p className="text-violet-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            Live search is commonly used in web applications.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <CodeBlock title="HTML" code={`<input type="text"
  onkeyup="searchUser(this.value)"
  placeholder="Search user">

<div id="result"></div>`} />
            <CodeBlock title="JavaScript" code={`function searchUser(name){

  var xhr = new XMLHttpRequest();

  xhr.open("GET",
    "search.php?name="+name,true);

  xhr.onload = function(){

    document.getElementById("result")
      .innerHTML = xhr.responseText;

  }

  xhr.send();

}`} />
            <CodeBlock title="PHP — search.php" code={`<?php

$name = $_GET['name'];

$conn = mysqli_connect(
  "localhost","root","","testdb");

$sql = "SELECT name,email FROM users
  WHERE name LIKE '%$name%'";

$result = mysqli_query($conn,$sql);

while($row = mysqli_fetch_assoc($result)){

  echo "<p>".$row['name']." - "
      .$row['email']."</p>";

}

?>`} />
          </div>

          {/* Live Search Output */}
          <div className="mt-8 relative z-10">
            <p className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-4">Output</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
              <div className="bg-black/40 rounded-xl border border-violet-800/40 p-5">
                <p className="text-gray-400 text-xs mb-3">User types:</p>
                {['jo', 'john'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <span className="text-violet-400">→</span>
                    <span className="font-mono text-sm text-gray-200">{t}</span>
                  </div>
                ))}
              </div>
              <div className="bg-black/40 rounded-xl border border-violet-800/40 p-5">
                <p className="text-gray-400 text-xs mb-3">Results appear instantly:</p>
                {['John - john@email.com', 'Johnny - johnny@email.com'].map((r, i) => (
                  <p key={i} className="font-mono text-sm text-violet-300 mb-1">{r}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxPhp;