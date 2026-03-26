import React, { useState } from 'react';
import {
  Wifi, Copy, Check, Zap, Globe, RefreshCw, ArrowRight,
  Search, MessageSquare, ScrollText, Save, Users,
  CircleCheck, Terminal, Layers, Server, CodeXml, Activity
} from 'lucide-react';

// ─── Code Block with Copy ────────────────────────────────────────────────────
const CodeBlock = ({ code, title, language = 'js' }: { code: string; title?: string; language?: string }) => {
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
        <button onClick={handleCopy} className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors border border-gray-700" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-sky-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Flow Step ───────────────────────────────────────────────────────────────
<<<<<<< HEAD
const FlowStep = ({ step, label, color }: { step: number; label: string; color: string }) => (
  <div className="flex flex-col items-center relative w-full">
=======
const FlowStep: React.FC<{ step: number; label: string; color: string }> = ({ step, label, color }) => (
  <div className="flex flex-col items-center">
>>>>>>> 8b9c195c511ebe8b36b1580f4c6e13381064afe4
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg ${color}`}>
      {step}
    </div>
    <div className="mt-2 text-xs font-bold text-center text-gray-700 dark:text-gray-300 max-w-[90px]">{label}</div>
    {step < 5 && (
      <div className="hidden lg:flex absolute top-5 -right-6 transform -translate-y-1/2">
        <ArrowRight className="w-5 h-5 text-gray-400 opacity-50" />
      </div>
    )}
  </div>
);

// ─── Real World App Card ─────────────────────────────────────────────────────
const AppCard: React.FC<{
  icon: React.ElementType; title: string; color: string; bgColor: string; borderColor: string; preview: React.ReactNode;
}> = ({
  icon: Icon, title, color, bgColor, borderColor, preview
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${borderColor} shadow-sm hover:shadow-md transition-all`}>
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-xl ${bgColor} mr-3`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 border border-gray-100 dark:border-gray-700 font-mono text-xs">
      {preview}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AjaxApplications: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-sky-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Wifi className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Applications
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Asynchronous JavaScript and XML — communicate with the server without reloading the page.
        </p>
      </header>

      {/* ── Section 1: What is AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Globe className="w-6 h-6 mr-3 text-sky-500" /> What is AJAX?
          </h2>
          <div className="p-4 bg-sky-50 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 rounded-xl mb-6">
            <span className="font-bold text-sky-800 dark:text-sky-400 text-lg">
              AJAX = Asynchronous JavaScript and XML
            </span>
            <p className="mt-2 text-sm text-sky-700 dark:text-sky-300">
              A technique used in web development to send and receive data from a server <strong>without reloading the entire webpage</strong>. It allows web pages to update content dynamically in the background.
            </p>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl mb-4">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              <span className="font-black">Simple Definition:</span> AJAX allows a webpage to communicate with the server <em>asynchronously</em>, updating only specific parts of the page instead of refreshing the entire page.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
            <CircleCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
              <strong>Real Life Example:</strong> When you type in Google Search, the suggestions appear instantly without refreshing the page — this is done using AJAX.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 -m-6 text-indigo-500/10">
            <Zap className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Why AJAX is Used
          </h2>
          <p className="text-indigo-200 text-sm mb-6 relative z-10">AJAX improves the user experience and performance of web applications.</p>
          <div className="grid grid-cols-1 gap-3 relative z-10">
            {[
              { icon: '⚡', label: 'Faster web applications' },
              { icon: '🔄', label: 'No full page reload' },
              { icon: '😊', label: 'Better user experience' },
              { icon: '📉', label: 'Reduced server load' },
              { icon: '🔃', label: 'Dynamic content updates' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                <span className="text-lg">{b.icon}</span>
                <span className="text-sm font-semibold text-indigo-100">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Technologies Behind AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Layers className="text-sky-500 w-8 h-8 mr-3" /> Technologies Behind AJAX
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">AJAX is not a single technology. It combines multiple technologies:</p>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Technology</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { tech: 'HTML', purpose: 'Structure of the page', color: 'text-orange-500' },
                  { tech: 'CSS', purpose: 'Styling', color: 'text-blue-500' },
                  { tech: 'JavaScript', purpose: 'Logic and interaction', color: 'text-yellow-500' },
                  { tech: 'XMLHttpRequest / Fetch API', purpose: 'Server communication', color: 'text-sky-500' },
                  { tech: 'JSON / XML', purpose: 'Data format', color: 'text-emerald-500' },
                  { tech: 'DOM', purpose: 'Update webpage content', color: 'text-purple-500' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50">
                    <td className={`px-4 py-3 font-bold ${row.color}`}>{row.tech}</td>
                    <td className="px-4 py-3">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 4: How AJAX Works ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-sky-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-400">
            <Activity className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Server className="w-8 h-8 mr-3 text-sky-400" /> How AJAX Works
          </h2>
          <p className="text-sky-200 font-bold text-sm uppercase tracking-widest mb-10 border-b border-white/10 pb-4 relative z-10">Step-by-Step Flow</p>

          <div className="grid grid-cols-5 gap-2 mb-10 relative z-10">
            {[
              { step: 1, label: 'User Action', color: 'bg-sky-500' },
              { step: 2, label: 'JS AJAX Request', color: 'bg-indigo-500' },
              { step: 3, label: 'Server Processing', color: 'bg-violet-500' },
              { step: 4, label: 'Server Response (JSON/XML)', color: 'bg-purple-500' },
              { step: 5, label: 'Update DOM', color: 'bg-emerald-500' },
            ].map((s) => (
              <FlowStep key={s.step} step={s.step} label={s.label} color={s.color} />
            ))}
          </div>

          <div className="bg-black/40 rounded-xl border border-sky-800/40 p-5 font-mono text-sm text-sky-200 relative z-10 space-y-1">
            <div className="text-sky-400 font-bold">Flow Diagram</div>
            {[
              'User Action',
              '↓',
              'JavaScript AJAX Request',
              '↓',
              'Server Processing',
              '↓',
              'Server Response (JSON/XML)',
              '↓',
              'Update Web Page (DOM)',
            ].map((line, i) => (
              <div key={i} className={line === '↓' ? 'text-gray-500 pl-4' : 'text-sky-200'}>{line}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Basic AJAX using XMLHttpRequest ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-sky-500 w-8 h-8 mr-3" /> Basic AJAX — XMLHttpRequest
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <CodeBlock title="HTML" language="html" code={`<!DOCTYPE html>
<html>
<head>
  <title>AJAX Example</title>
</head>
<body>

<h2>AJAX Demo</h2>

<button onclick="loadData()">Load Data</button>

<div id="result"></div>

<script src="script.js"></script>

</body>
</html>`} />
              <CodeBlock title="data.txt" language="text" code={`Hello! This data was loaded using AJAX without refreshing the page.`} />
            </div>
            <div className="space-y-4">
              <CodeBlock title="JavaScript — script.js" language="js" code={`function loadData() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    xhr.onload = function() {

        if (xhr.status === 200) {
            document.getElementById("result")
              .innerHTML = xhr.responseText;
        }

    };

    xhr.send();

}`} />
              {/* Output Visualization */}
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Output Visualization</span>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Initial Page</p>
                    <p className="font-bold text-gray-800 dark:text-white">AJAX Demo</p>
                    <button className="mt-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-sm rounded text-gray-700 dark:text-gray-300 cursor-default">Load Data</button>
                  </div>
                  <div className="border border-dashed border-emerald-300 dark:border-emerald-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-emerald-500 uppercase mb-2">After clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white">AJAX Demo</p>
                    <button className="mt-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-sm rounded text-gray-700 dark:text-gray-300 cursor-default">Load Data</button>
                    <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                      Hello! This data was loaded using AJAX without refreshing the page.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Only the result section updates, not the entire page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Modern Fetch API ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-violet-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-violet-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <CodeXml className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <RefreshCw className="w-8 h-8 mr-3 text-violet-400" /> Modern AJAX — Fetch API
          </h2>
          <p className="text-violet-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">Today developers prefer <code className="bg-white/10 px-2 py-0.5 rounded text-violet-300 font-mono">Fetch API</code> instead of XMLHttpRequest.</p>

          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div>
              <CodeBlock title="JavaScript — Fetch API" language="js" code={`function loadUsers() {

  fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(data => {

      let output = "";

      data.forEach(user => {

        output += \`
<div style="border:1px solid #ccc;
     padding:10px; margin:10px;">
  <h3>\${user.name}</h3>
  <p>Email: \${user.email}</p>
  <p>City: \${user.address.city}</p>
</div>\`;

      });

      document.getElementById("users")
        .innerHTML = output;

    });

}`} />
              <CodeBlock title="HTML" language="html" code={`<button onclick="loadUsers()">Load Users</button>

<div id="users"></div>`} />
            </div>

            {/* Output Visualization */}
            <div>
              <div className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-3">Output Visualization</div>
              <div className="space-y-3">
                {[
                  { name: 'John Doe', email: 'john@example.com', city: 'New York' },
                  { name: 'Jane Smith', email: 'jane@example.com', city: 'London' },
                ].map((user, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="font-bold text-white">{user.name}</h4>
                    <p className="text-sm text-gray-300">Email: {user.email}</p>
                    <p className="text-sm text-gray-300">City: {user.city}</p>
                  </div>
                ))}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 opacity-60">
                  <h4 className="font-bold text-white">...</h4>
                  <p className="text-sm text-gray-400">More users loaded dynamically</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-violet-300 font-medium">
                  <CircleCheck className="w-4 h-4 text-emerald-400" />
                  Data appears dynamically without page reload.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Real-World AJAX Applications ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-4">
          Real-World AJAX Applications
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-medium">AJAX is widely used in modern websites.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Live Search */}
          <AppCard
            icon={Search}
            title="1. Live Search"
            color="text-sky-600"
            bgColor="bg-sky-100 dark:bg-sky-900/30"
            borderColor="border-sky-200 dark:border-sky-800"
            preview={
              <div className="space-y-2">
                <p className="text-gray-400 mb-2">Example: Google search suggestions.</p>
                <p className="text-gray-500 text-xs mb-3">When a user types:</p>
                {['Ja', 'Jav', 'Java'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-sky-500 font-bold">&gt;</span>
                    <span className="text-gray-700 dark:text-gray-200">{t}</span>
                  </div>
                ))}
                <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">↳ AJAX sends requests to fetch suggestions dynamically.</div>
              </div>
            }
          />

          {/* 2. Form Submission */}
          <AppCard
            icon={CircleCheck}
            title="2. Form Submission Without Reload"
            color="text-emerald-600"
            bgColor="bg-emerald-100 dark:bg-emerald-900/30"
            borderColor="border-emerald-200 dark:border-emerald-800"
            preview={
              <div className="space-y-2">
                <p className="text-gray-400 mb-2">Example: Contact forms.</p>
                <p className="text-gray-500 text-xs mb-3">Instead of refreshing after submitting, AJAX shows:</p>
                <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2">
                  <CircleCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold">Your message has been sent successfully!</span>
                </div>
              </div>
            }
          />

          {/* 3. Chat Applications */}
          <AppCard
            icon={MessageSquare}
            title="3. Chat Applications"
            color="text-violet-600"
            bgColor="bg-violet-100 dark:bg-violet-900/30"
            borderColor="border-violet-200 dark:border-violet-800"
            preview={
              <div className="space-y-2">
                <p className="text-gray-400 mb-2 text-xs">Real-time chat systems use AJAX to update messages without refreshing.</p>
                {[
                  { user: 'User1', msg: 'Hello', align: 'left' },
                  { user: 'User2', msg: 'Hi!', align: 'right' },
                  { user: 'User1', msg: 'How are you?', align: 'left' },
                ].map((c, i) => (
                  <div key={i} className={`flex ${c.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold max-w-[80%] ${c.align === 'right' ? 'bg-violet-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                      <span className="text-[10px] opacity-70">{c.user}: </span>{c.msg}
                    </div>
                  </div>
                ))}
              </div>
            }
          />

          {/* 4. Infinite Scrolling */}
          <AppCard
            icon={ScrollText}
            title="4. Infinite Scrolling"
            color="text-amber-600"
            bgColor="bg-amber-100 dark:bg-amber-900/30"
            borderColor="border-amber-200 dark:border-amber-800"
            preview={
              <div className="space-y-2">
                <p className="text-gray-400 text-xs mb-2">Used by social media platforms. When scrolling down:</p>
                {['Post 1', 'Post 2', 'Post 3'].map((p, i) => (
                  <div key={i} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium">{p}</div>
                ))}
                <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold py-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  Loading more posts...
                </div>
                <p className="text-[10px] text-gray-400">New content loads automatically using AJAX.</p>
              </div>
            }
          />

          {/* 5. Auto Save */}
          <AppCard
            icon={Save}
            title="5. Auto Save Feature"
            color="text-rose-600"
            bgColor="bg-rose-100 dark:bg-rose-900/30"
            borderColor="border-rose-200 dark:border-rose-800"
            preview={
              <div className="space-y-2">
                <p className="text-gray-400 text-xs mb-2">Used in Google Docs or Notion. Every few seconds:</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Saving...
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    <CircleCheck className="w-3 h-3" />
                    Saved
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">AJAX sends the data silently to the server.</p>
              </div>
            }
          />

          {/* Summary card */}
          <div className="bg-gradient-to-br from-sky-900 to-indigo-900 rounded-2xl p-6 border-2 border-sky-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-xl bg-white/10 mr-3">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Why It Matters</h3>
            </div>
            <p className="text-sky-200 text-sm font-medium leading-relaxed">
              All modern web apps — Google, Facebook, Twitter, Gmail, Notion — rely on AJAX to deliver fast, seamless, and interactive user experiences without disruptive page reloads.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {['Google', 'Gmail', 'Twitter', 'Notion'].map((app) => (
                <div key={app} className="bg-white/10 rounded-lg px-3 py-1.5 text-center text-xs font-bold text-white/80">{app}</div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Summary Banner ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-500">
            <Wifi className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-sky-400" /> AJAX — Quick Summary
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            Key Takeaways
          </p>
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {[
              { title: 'AJAX stands for', body: 'Asynchronous JavaScript and XML — sends & receives data without a full page reload.', color: 'text-sky-400' },
              { title: 'Core technologies', body: 'HTML, CSS, JavaScript, XMLHttpRequest/Fetch API, JSON/XML, and DOM work together.', color: 'text-indigo-400' },
              { title: 'Preferred method', body: 'Fetch API is the modern and recommended way to make AJAX requests in JavaScript.', color: 'text-violet-400' },
              { title: 'Used everywhere', body: 'Live search, chat apps, auto-save, infinite scroll, and form submission all use AJAX.', color: 'text-emerald-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <CircleCheck className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
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

export default AjaxApplications;