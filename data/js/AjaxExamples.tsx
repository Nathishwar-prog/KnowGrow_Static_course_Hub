import React, { useState } from 'react';
import {
  Code2, Copy, Check, Zap, Globe, FileText,
  Search, Database, FileJson, RefreshCw,
  CheckCircle, Terminal, MessageSquare, Send,
  ArrowRight, Table2, LayoutDashboard
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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-indigo-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Example Section Card ─────────────────────────────────────────────────────
const ExampleCard = ({
  icon: Icon, number, title, color, bgColor, borderColor, accent, children
}: {
  icon: React.ElementType; number: string; title: string;
  color: string; bgColor: string; borderColor: string; accent: string; children: React.ReactNode;
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border-2 ${borderColor} relative overflow-hidden`}>
    <div className={`absolute top-4 right-4 text-8xl font-black opacity-5 ${accent}`}>{number}</div>
    <div className="flex items-center mb-6">
      <div className={`p-2.5 rounded-xl ${bgColor} mr-4`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <h2 className="text-2xl font-black text-gray-900 dark:text-white">{number}. {title}</h2>
    </div>
    {children}
  </div>
);

// ─── Output Panel ─────────────────────────────────────────────────────────────
const OutputPanel = ({ label = 'Output Visualization', children }: { label?: string; children: React.ReactNode }) => (
  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800">{children}</div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AjaxExamples: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Examples
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Hands-on examples covering text loading, Fetch API, forms, live search, databases, JSON, and auto-refresh.
        </p>
        {/* Quick Nav Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['Text File', 'Fetch API', 'Form Submit', 'Live Search', 'Database', 'JSON', 'Auto Refresh', 'Real World'].map((t, i) => (
            <span key={i} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* ── Example 1: Basic AJAX / Text File ── */}
        <ExampleCard
          icon={FileText} number="1" title="Basic AJAX — Loading Text File"
          color="text-slate-600" bgColor="bg-slate-100 dark:bg-slate-900/40"
          borderColor="border-slate-200 dark:border-slate-700" accent="text-slate-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">The simplest AJAX example where data is fetched from a server file.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <CodeBlock title="HTML" code={`<!DOCTYPE html>
<html>
<head>
  <title>Basic AJAX Example</title>
</head>
<body>

<h2>Load Data Using AJAX</h2>

<button onclick="loadData()">Load Content</button>

<div id="result"></div>

<script>

function loadData(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","data.txt",true);

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
              <CodeBlock title="data.txt" code={`Welcome! This content was loaded using AJAX.`} />
            </div>
            <div>
              <OutputPanel>
                <div className="space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Before clicking</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Data Using AJAX</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">Load Content</button>
                  </div>
                  <div className="border border-dashed border-indigo-300 dark:border-indigo-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-indigo-500 uppercase mb-3">After clicking</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Data Using AJAX</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">Load Content</button>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded text-sm text-indigo-800 dark:text-indigo-300 font-medium">
                      Welcome! This content was loaded using AJAX.
                    </div>
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 2: Fetch API ── */}
        <ExampleCard
          icon={Globe} number="2" title="AJAX — Fetch API"
          color="text-sky-600" bgColor="bg-sky-100 dark:bg-sky-900/30"
          borderColor="border-sky-200 dark:border-sky-800" accent="text-sky-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Modern JavaScript uses the <code className="text-sky-600 dark:text-sky-400 font-bold">Fetch API</code> instead of XMLHttpRequest.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <CodeBlock title="JavaScript" code={`function loadPosts(){

  fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())

    .then(data => {

      let output="";

      data.slice(0,5).forEach(post => {

        output += \`
<h3>\${post.title}</h3>
<p>\${post.body}</p>
<hr>
\`;

      });

      document.getElementById("posts")
        .innerHTML = output;

    });

}`} />
              <CodeBlock title="HTML" code={`<button onclick="loadPosts()">Load Posts</button>

<div id="posts"></div>`} />
            </div>
            <div>
              <OutputPanel label="Output Example">
                <div className="space-y-3">
                  {[
                    { title: 'Post Title 1', body: 'Lorem ipsum content for first post...' },
                    { title: 'Post Title 2', body: 'Lorem ipsum content for second post...' },
                  ].map((p, i) => (
                    <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0">
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm">{p.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{p.body}</p>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Data loads without refreshing the page.
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 3: Form Submission ── */}
        <ExampleCard
          icon={Send} number="3" title="AJAX Form Submission"
          color="text-emerald-600" bgColor="bg-emerald-100 dark:bg-emerald-900/30"
          borderColor="border-emerald-200 dark:border-emerald-800" accent="text-emerald-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">AJAX allows forms to be submitted <strong>without page reload</strong>.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <CodeBlock title="HTML" code={`<form id="contactForm">

  Name:
  <input type="text" id="name">

  <button type="button"
    onclick="submitForm()">Submit</button>

</form>

<div id="message"></div>`} />
              <CodeBlock title="JavaScript" code={`function submitForm(){

  let name = document.getElementById("name").value;

  var xhr = new XMLHttpRequest();

  xhr.open("POST","submit.asp",true);

  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );

  xhr.onload = function(){

    document.getElementById("message")
      .innerHTML = "Form submitted successfully!";

  };

  xhr.send("name="+name);

}`} />
            </div>
            <div>
              <OutputPanel>
                <div className="space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Form</p>
                    <label className="text-xs text-gray-600 dark:text-gray-400 font-semibold block mb-1">Name:</label>
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 px-3 text-xs flex items-center text-gray-400">Karthick</div>
                      <button className="px-3 py-1.5 bg-emerald-500 text-white text-xs rounded font-bold cursor-default">Submit</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Form submitted successfully!</span>
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 4: Live Search ── */}
        <ExampleCard
          icon={Search} number="4" title="AJAX Live Search"
          color="text-amber-600" bgColor="bg-amber-100 dark:bg-amber-900/30"
          borderColor="border-amber-200 dark:border-amber-800" accent="text-amber-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Live search is one of the most common AJAX applications.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
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
            </div>
            <div>
              <OutputPanel label="Output Example">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Typing:</p>
                  <div className="space-y-1 mb-4">
                    {['ja', 'jav', 'java'].map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-amber-500" />
                        <span className="font-mono text-sm text-gray-700 dark:text-gray-200">{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Results appear instantly:</p>
                  {['Java Programming', 'JavaScript Basics', 'Java Developer'].map((r, i) => (
                    <div key={i} className="px-3 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-300 font-medium">
                      {r}
                    </div>
                  ))}
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 5: Database ── */}
        <ExampleCard
          icon={Database} number="5" title="AJAX Database Example"
          color="text-cyan-600" bgColor="bg-cyan-100 dark:bg-cyan-900/30"
          borderColor="border-cyan-200 dark:border-cyan-800" accent="text-cyan-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">AJAX can retrieve records from a database.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <CodeBlock title="JavaScript" code={`function loadUsers(){

  fetch("users.asp")

    .then(response => response.text())

    .then(data => {

      document.getElementById("users")
        .innerHTML = data;

    });

}`} />
              <CodeBlock title="HTML" code={`<button onclick="loadUsers()">Show Users</button>

<div id="users"></div>`} />
            </div>
            <div>
              <OutputPanel label="Output Example">
                <div className="space-y-2">
                  {[
                    { name: 'John', email: 'john@email.com' },
                    { name: 'David', email: 'david@email.com' },
                    { name: 'Smith', email: 'smith@email.com' },
                  ].map((u, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-sm px-3 py-2 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-900/40 rounded-lg">
                      <span className="font-bold text-cyan-700 dark:text-cyan-300">{u.name}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-600 dark:text-gray-300">{u.email}</span>
                    </div>
                  ))}
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 6: JSON ── */}
        <ExampleCard
          icon={FileJson} number="6" title="AJAX JSON Example"
          color="text-violet-600" bgColor="bg-violet-100 dark:bg-violet-900/30"
          borderColor="border-violet-200 dark:border-violet-800" accent="text-violet-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">AJAX commonly works with <strong>JSON data format</strong>.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            <CodeBlock title="JSON File — users.json" code={`[
  {"name":"Karthick","city":"Erode"},
  {"name":"Arjun","city":"Chennai"},
  {"name":"Ravi","city":"Coimbatore"}
]`} />
            <CodeBlock title="JavaScript" code={`fetch("users.json")
  .then(response => response.json())
  .then(data => {

    let output="";

    data.forEach(user=>{
      output += \`<p>\${user.name} - \${user.city}</p>\`;
    });

    document.getElementById("result")
      .innerHTML = output;

  });`} />
            <div>
              <OutputPanel label="Output">
                <div className="space-y-2">
                  {[
                    { name: 'Karthick', city: 'Erode' },
                    { name: 'Arjun', city: 'Chennai' },
                    { name: 'Ravi', city: 'Coimbatore' },
                  ].map((u, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-sm px-3 py-2 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-900/40 rounded-lg">
                      <span className="font-bold text-violet-700 dark:text-violet-300">{u.name}</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-600 dark:text-gray-300">{u.city}</span>
                    </div>
                  ))}
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Example 7: Auto Refresh ── */}
        <ExampleCard
          icon={RefreshCw} number="7" title="AJAX Auto Refresh"
          color="text-rose-600" bgColor="bg-rose-100 dark:bg-rose-900/30"
          borderColor="border-rose-200 dark:border-rose-800" accent="text-rose-500"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Used in chat systems or dashboards.</p>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <CodeBlock title="JavaScript" code={`setInterval(loadMessages, 5000);

function loadMessages(){

  fetch("messages.asp")

    .then(res => res.text())

    .then(data => {

      document.getElementById("chat")
        .innerHTML = data;

    });

}`} />
            </div>
            <div>
              <OutputPanel label="Output — Chat updates every 5 seconds">
                <div className="space-y-2 mb-4">
                  {[
                    { user: 'User1', msg: 'Hello', dir: 'left' },
                    { user: 'User2', msg: 'Hi!', dir: 'right' },
                    { user: 'User1', msg: 'How are you?', dir: 'left' },
                  ].map((c, i) => (
                    <div key={i} className={`flex ${c.dir === 'right' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-xl px-3 py-2 text-xs font-semibold max-w-[75%] ${c.dir === 'right' ? 'bg-rose-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                        <span className="opacity-60 text-[10px] block">{c.user}</span>
                        {c.msg}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg">
                  <RefreshCw className="w-3.5 h-3.5 text-rose-500 animate-spin" />
                  <span className="text-xs text-rose-700 dark:text-rose-300 font-bold">Updates every 5 seconds automatically.</span>
                </div>
              </OutputPanel>
            </div>
          </div>
        </ExampleCard>

        {/* ── Section 8: Real World ── */}
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500">
            <Code2 className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <LayoutDashboard className="w-8 h-8 mr-3 text-indigo-400" /> 8. Real-World AJAX Applications
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            AJAX is used in many modern websites.
          </p>

          {/* Table */}
          <div className="overflow-x-auto ring-1 ring-white/10 rounded-xl relative z-10 mb-8">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-indigo-300 uppercase font-bold text-xs">
                <tr>
                  <th className="px-5 py-3 border-b border-white/10">Application</th>
                  <th className="px-5 py-3 border-b border-white/10">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { app: 'Search suggestions', example: 'Google search', icon: Search, color: 'text-sky-400' },
                  { app: 'Chat applications', example: 'WhatsApp Web', icon: MessageSquare, color: 'text-emerald-400' },
                  { app: 'Infinite scrolling', example: 'Instagram', icon: RefreshCw, color: 'text-rose-400' },
                  { app: 'Form validation', example: 'Login pages', icon: CheckCircle, color: 'text-amber-400' },
                  { app: 'Dashboards', example: 'Admin panels', icon: LayoutDashboard, color: 'text-violet-400' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <row.icon className={`w-4 h-4 ${row.color}`} />
                        <span className={`font-bold ${row.color}`}>{row.app}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-300 font-medium">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Pills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              { icon: Zap, label: 'No page reload', color: 'text-yellow-400' },
              { icon: Globe, label: 'Server communication', color: 'text-sky-400' },
              { icon: Table2, label: 'Database integration', color: 'text-teal-400' },
              { icon: Terminal, label: 'Fetch & XHR support', color: 'text-indigo-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AjaxExamples;