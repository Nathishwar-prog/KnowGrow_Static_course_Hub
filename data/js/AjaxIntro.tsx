import React, { useState } from 'react';
import {
  Wifi, Copy, Check, Zap, Globe, ArrowDown,
  Search, CheckCircle, Terminal, MessageSquare,
  FileText, Activity, Layers, Code2
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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-cyan-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Flow Column ──────────────────────────────────────────────────────────────
const FlowColumn = ({ title, steps, color }: { title: string; steps: string[]; color: string }) => (
  <div className="flex-1">
    <p className={`text-xs font-black uppercase tracking-widest mb-4 ${color}`}>{title}</p>
    <div className="space-y-0 flex flex-col items-start">
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col items-start w-full">
          <div className={`px-4 py-2.5 rounded-xl border font-semibold text-sm w-full text-center ${color === 'text-red-400' ? 'bg-red-950/40 border-red-800/40 text-red-300' : 'bg-cyan-950/40 border-cyan-800/40 text-cyan-200'}`}>
            {s}
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center w-full py-1">
              <ArrowDown className="w-4 h-4 text-gray-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AjaxIntro: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-cyan-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Wifi className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Introduction
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Update parts of a webpage dynamically — without ever refreshing the entire page.
        </p>
      </header>

      {/* ── Section 1: What is AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Acronym Breakdown */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Wifi className="w-6 h-6 mr-3 text-cyan-500" /> What is AJAX?
          </h2>

          {/* Acronym cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { letter: 'A', word: 'Asynchronous', color: 'bg-cyan-500' },
              { letter: 'J', word: 'JavaScript', color: 'bg-blue-500' },
              { letter: 'A', word: 'And', color: 'bg-indigo-500' },
              { letter: 'X', word: 'XML', color: 'bg-violet-500' },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg shadow ${a.color}`}>
                  {a.letter}
                </div>
                <span className="font-bold text-gray-700 dark:text-gray-200 text-sm">{a.word}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-900/30 rounded-xl mb-4">
            <p className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">
              AJAX is a web development technique that uses JavaScript to <strong>send and receive data from a server asynchronously</strong>, allowing web pages to update dynamically without refreshing the entire page.
            </p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              <span className="font-black">Simple Definition:</span> AJAX allows a webpage to communicate with a server <em>in the background</em> and update parts of the page dynamically.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-cyan-800/50">
          <div className="absolute top-0 right-0 -m-6 text-cyan-500/10">
            <Zap className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-2 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Key Features of AJAX
          </h2>
          <p className="text-cyan-300 text-sm mb-6 relative z-10">What makes AJAX stand out from traditional web requests.</p>
          <div className="overflow-x-auto ring-1 ring-white/10 rounded-xl relative z-10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-cyan-300 uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-white/10">Feature</th>
                  <th className="px-4 py-3 border-b border-white/10">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: 'Asynchronous communication', desc: 'Server requests run in background', color: 'text-cyan-400' },
                  { feat: 'No full page reload', desc: 'Only specific parts update', color: 'text-blue-400' },
                  { feat: 'Faster performance', desc: 'Less data transfer', color: 'text-emerald-400' },
                  { feat: 'Better user experience', desc: 'Smooth interaction', color: 'text-amber-400' },
                  { feat: 'Dynamic content', desc: 'Data loads instantly', color: 'text-violet-400' },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className={`px-4 py-2.5 font-bold ${r.color}`}>{r.feat}</td>
                    <td className="px-4 py-2.5 text-gray-300 font-medium">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 2 & 3: Why AJAX + Comparison ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-blue-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Activity className="w-72 h-72" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-blue-400" /> Why AJAX is Important
          </h2>
          <p className="text-blue-200 font-semibold mb-10 border-b border-white/10 pb-4 relative z-10">
            Traditional websites reload the entire page whenever data changes. AJAX solves this problem by loading only the required data.
          </p>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <FlowColumn
              title="Traditional Web Request"
              color="text-red-400"
              steps={['User Request', 'Server Processing', 'Entire Page Reload']}
            />
            <FlowColumn
              title="AJAX Request"
              color="text-cyan-400"
              steps={['User Action', 'AJAX Request', 'Server Response', 'Partial Page Update']}
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <p className="text-emerald-300 font-bold text-base">This makes web applications faster and more responsive.</p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Technologies Behind AJAX ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Layers className="text-cyan-500 w-8 h-8 mr-3" /> Technologies Used in AJAX
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">
            AJAX is <strong className="text-gray-700 dark:text-gray-200">not a single technology</strong> — it is a combination of several technologies.
          </p>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Technology</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Role</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { tech: 'HTML', role: 'Structure of the webpage', color: 'text-orange-500' },
                  { tech: 'CSS', role: 'Styling and layout', color: 'text-blue-500' },
                  { tech: 'JavaScript', role: 'Controls AJAX requests', color: 'text-yellow-500' },
                  { tech: 'XMLHttpRequest / Fetch API', role: 'Communication with server', color: 'text-cyan-500' },
                  { tech: 'JSON / XML', role: 'Data format', color: 'text-emerald-500' },
                  { tech: 'DOM', role: 'Updates webpage content', color: 'text-purple-500' },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className={`px-4 py-3 font-bold ${r.color}`}>{r.tech}</td>
                    <td className="px-4 py-3">{r.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section 5: How AJAX Works ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* Steps */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Code2 className="w-6 h-6 mr-3 text-cyan-500" /> How AJAX Works
          </h2>
          <div className="space-y-3">
            {[
              { n: '01', label: 'User performs an action (click, type, scroll)', color: 'bg-cyan-500' },
              { n: '02', label: 'JavaScript sends an AJAX request to the server', color: 'bg-blue-500' },
              { n: '03', label: 'Server processes the request', color: 'bg-indigo-500' },
              { n: '04', label: 'Server returns data (usually JSON)', color: 'bg-violet-500' },
              { n: '05', label: 'JavaScript updates the webpage dynamically', color: 'bg-emerald-500' },
            ].map((s) => (
              <div key={s.n} className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-xs shadow flex-shrink-0 mt-0.5 ${s.color}`}>{s.n}</div>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-snug pt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl border border-indigo-800/40 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Globe className="w-48 h-48" />
          </div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Activity className="w-6 h-6 mr-3 text-indigo-400" /> AJAX Workflow
          </h2>
          <div className="bg-black/40 rounded-xl border border-indigo-800/40 p-6 font-mono text-sm space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            {[
              { text: 'User Action', color: 'text-cyan-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'JavaScript AJAX Request', color: 'text-blue-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Processing', color: 'text-indigo-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Response', color: 'text-violet-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'DOM Update', color: 'text-emerald-300' },
            ].map((line, i) => (
              <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-6' : ''}`}>{line.text}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Simple AJAX Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-cyan-500 w-8 h-8 mr-3" /> Simple AJAX Example
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CodeBlock title="HTML" code={`<!DOCTYPE html>
<html>
<head>
  <title>AJAX Intro Example</title>
</head>
<body>

<h2>AJAX Introduction Example</h2>

<button onclick="loadData()">Load Message</button>

<div id="result"></div>

<script src="script.js"></script>

</body>
</html>`} />
              <CodeBlock title="message.txt" code={`Hello! This message was loaded using AJAX without refreshing the page.`} />
            </div>
            <div className="space-y-4">
              <CodeBlock title="JavaScript — script.js" code={`function loadData(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","message.txt",true);

  xhr.onload = function(){

    if(xhr.status==200){
      document.getElementById("result")
        .innerHTML = xhr.responseText;
    }

  };

  xhr.send();

}`} />
              {/* Output */}
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Output</span>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Before clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX Introduction Example</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">Load Message</button>
                  </div>
                  <div className="border border-dashed border-cyan-300 dark:border-cyan-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-cyan-500 uppercase mb-2">After clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">AJAX Introduction Example</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">Load Message</button>
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded text-sm text-cyan-800 dark:text-cyan-300 font-medium">
                      Hello! This message was loaded using AJAX without refreshing the page.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Only the content section updates, not the whole page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Real-World Examples ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-500">
            <Wifi className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-cyan-400" /> Real-World Examples of AJAX
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            AJAX is used in many popular web applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {/* 1. Google Search */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-sky-900/50">
                  <Search className="w-4 h-4 text-sky-400" />
                </div>
                <h4 className="font-bold text-gray-100 text-sm">1. Google Search Suggestions</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">When typing:</p>
              {['jav', 'java', 'javascript'].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 mb-1">
                  <span className="text-sky-400 text-xs">→</span>
                  <span className="font-mono text-xs text-gray-300">{t}</span>
                </div>
              ))}
              <p className="text-emerald-400 text-xs font-semibold mt-2">Search suggestions appear instantly.</p>
            </div>

            {/* 2. Social Media */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-900/50">
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="font-bold text-gray-100 text-sm">2. Social Media Feeds</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Platforms load new posts dynamically while scrolling.</p>
              {['Post 1 loaded ✓', 'Post 2 loaded ✓', 'Loading more...'].map((p, i) => (
                <div key={i} className={`text-xs py-1 font-mono ${i < 2 ? 'text-emerald-400' : 'text-amber-400'}`}>{p}</div>
              ))}
            </div>

            {/* 3. Online Forms */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-900/50">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="font-bold text-gray-100 text-sm">3. Online Forms</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Forms submitted without refreshing the page. Example response:</p>
              <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 rounded-lg px-3 py-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 text-xs font-semibold">Your form has been submitted successfully.</span>
              </div>
            </div>

            {/* 4. Live Chat */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-violet-900/50">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                </div>
                <h4 className="font-bold text-gray-100 text-sm">4. Live Chat Applications</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Messages appear instantly without reloading.</p>
              {[
                { msg: 'Hello!', dir: 'left' },
                { msg: 'Hi there!', dir: 'right' },
                { msg: 'How can I help?', dir: 'left' },
              ].map((c, i) => (
                <div key={i} className={`flex mb-1 ${c.dir === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${c.dir === 'right' ? 'bg-violet-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    {c.msg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxIntro;