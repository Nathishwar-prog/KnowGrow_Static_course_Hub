import React, { useState } from 'react';
import {
  Inbox, Copy, Check, Zap, Globe, ArrowDown,
  Search, CheckCircle, Terminal, MessageSquare,
  LayoutDashboard, FileJson, FileText, Code2, Activity
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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-green-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

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
const AjaxResponse: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-green-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Inbox className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Response
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Understand how servers reply to AJAX requests and how JavaScript processes those responses to update pages dynamically.
        </p>
      </header>

      {/* ── Section 1 & 2: What + Flow ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* What is AJAX Response */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Inbox className="w-6 h-6 mr-3 text-green-500" /> What is an AJAX Response?
          </h2>
          <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-xl mb-5">
            <span className="font-bold text-green-800 dark:text-green-400 text-lg">AJAX Response = Server's Reply</span>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              The server's reply to an AJAX request. When JavaScript sends a request, the server processes it and sends back data. JavaScript then uses this data to <strong>update the webpage</strong>.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="font-black">Simple Definition:</span> An AJAX response is the <em>data returned from the server</em> after processing an AJAX request.
            </p>
          </div>
        </div>

        {/* Request–Response Flow */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-emerald-800/50">
          <div className="absolute top-0 right-0 -m-6 text-emerald-500/10"><Activity className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-6 relative z-10">
            <Activity className="w-6 h-6 mr-3 text-emerald-300" /> AJAX Request–Response Flow
          </h2>
          <div className="bg-black/40 rounded-xl border border-emerald-800/40 p-5 font-mono text-sm space-y-1 relative z-10">
            {[
              { text: 'User Action', color: 'text-green-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'AJAX Request Sent', color: 'text-emerald-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Processes Request', color: 'text-teal-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Sends Response', color: 'text-cyan-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'JavaScript Handles Response', color: 'text-blue-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Webpage Updates Dynamically', color: 'text-violet-300' },
            ].map((line, i) => (
              <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-6' : ''}`}>{line.text}</div>
            ))}
          </div>
          <p className="text-emerald-200/70 text-xs mt-4 relative z-10 italic">
            This process happens without refreshing the entire page.
          </p>
        </div>
      </section>

      {/* ── Section 3: Types of AJAX Responses ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <FileText className="text-green-500 w-8 h-8 mr-3" /> Types of AJAX Responses
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">
            Servers can send different types of responses depending on the application.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: 'Text', desc: 'Simple plain text data', icon: FileText, color: 'text-slate-600', bgColor: 'bg-slate-100 dark:bg-slate-900/40', borderColor: 'border-slate-200 dark:border-slate-700', ex: '"Hello World"' },
              { type: 'HTML', desc: 'HTML content for dynamic display', icon: Code2, color: 'text-orange-600', bgColor: 'bg-orange-100 dark:bg-orange-900/30', borderColor: 'border-orange-200 dark:border-orange-800', ex: '<p>Hello</p>' },
              { type: 'JSON', desc: 'Structured data format', icon: FileJson, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30', borderColor: 'border-blue-200 dark:border-blue-800', ex: '{"name":"Karthick"}' },
              { type: 'XML', desc: 'Data format used in older AJAX systems', icon: Globe, color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900/30', borderColor: 'border-purple-200 dark:border-purple-800', ex: '<user><name>K</name></user>' },
            ].map((r, i) => (
              <div key={i} className={`rounded-2xl border-2 ${r.borderColor} p-5 flex flex-col`}>
                <div className={`p-2.5 rounded-xl ${r.bgColor} w-fit mb-3`}>
                  <r.icon className={`w-5 h-5 ${r.color}`} />
                </div>
                <h3 className={`text-lg font-black mb-1 ${r.color}`}>{r.type}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3 flex-1">{r.desc}</p>
                <div className="font-mono text-xs bg-gray-900 text-gray-300 px-3 py-2 rounded-lg">
                  {r.ex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: XMLHttpRequest Response ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-green-500 w-8 h-8 mr-3" /> Accessing AJAX Response — XMLHttpRequest
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
            The response is accessed using the <code className="text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/10 px-1.5 rounded">responseText</code> property.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CodeBlock title="JavaScript — loadData()" code={`function loadData(){

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
              <CodeBlock title="HTML" code={`<button onclick="loadData()">Load Message</button>\n\n<div id="result"></div>`} />
              <CodeBlock title="Server File — message.txt" code={`Hello! This message is returned from the server as an AJAX response.`} />
            </div>
            <div>
              <OutputPanel label="Output">
                <div className="space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Before clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Message</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">[Button]</button>
                  </div>
                  <div className="border border-dashed border-green-300 dark:border-green-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-green-500 uppercase mb-2">After clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Message</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">[Button]</button>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-sm text-green-800 dark:text-green-300 font-medium">
                      Hello! This message is returned from the server as an AJAX response.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Only the result area updates.</p>
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: JSON Response ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-blue-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><FileJson className="w-72 h-72" /></div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <FileJson className="w-8 h-8 mr-3 text-blue-400" /> AJAX Response with JSON
          </h2>
          <p className="text-blue-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            Most modern web applications return <strong>JSON data</strong> — lightweight and easy to process.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <CodeBlock title="Example JSON Response" code={`{\n  "name": "Karthick",\n  "city": "Erode"\n}`} />
            <CodeBlock title="JavaScript — Fetch + Parse" code={`fetch("user.json")

  .then(response => response.json())

  .then(data => {

    document.getElementById("result")
      .innerHTML =
        data.name + " - " + data.city;

  });`} />
            <div>
              <div className="rounded-xl overflow-hidden border border-blue-800/50">
                <div className="bg-blue-950/60 px-4 py-2 border-b border-blue-800/50">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Output</span>
                </div>
                <div className="p-4 bg-blue-950/30">
                  <div className="font-mono text-sm text-blue-200 font-semibold">Karthick - Erode</div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Data parsed and displayed instantly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6 & 7: Properties + Status Codes ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Response Properties */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Code2 className="w-6 h-6 mr-3 text-green-500" /> AJAX Response Properties
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 font-medium">
            When using XMLHttpRequest, several properties are used to check the response.
          </p>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Property</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { prop: 'responseText', desc: 'Returns response as text', color: 'text-green-600 dark:text-green-400' },
                  { prop: 'responseXML', desc: 'Returns response as XML', color: 'text-purple-600 dark:text-purple-400' },
                  { prop: 'status', desc: 'HTTP status code', color: 'text-blue-600 dark:text-blue-400' },
                  { prop: 'readyState', desc: 'Request state', color: 'text-amber-600 dark:text-amber-400' },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className={`px-4 py-3 font-mono font-bold text-xs ${r.color}`}>{r.prop}</td>
                    <td className="px-4 py-3 text-sm">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Status Codes */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Zap className="w-6 h-6 mr-3 text-amber-500" /> AJAX Response Status Codes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 font-medium">
            Servers send HTTP status codes with responses.
          </p>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-5">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Status Code</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Meaning</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { code: '200', meaning: 'Successful request', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' },
                  { code: '404', meaning: 'File not found', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' },
                  { code: '500', meaning: 'Server error', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
                  { code: '403', meaning: 'Access denied', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-lg font-black text-xs ${r.color}`}>{r.code}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Example check:</p>
          <CodeBlock code={`if(xhr.status == 200){\n  console.log("Success");\n}`} />
        </div>
      </section>

      {/* ── Section 8: Real World ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-green-500"><Inbox className="w-64 h-64" /></div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-green-400" /> Real-World AJAX Response Examples
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            AJAX responses are used in many modern applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">

            {/* Search */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-sky-900/50"><Search className="w-4 h-4 text-sky-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">1. Search Suggestions</h4>
              </div>
              <p className="text-gray-400 text-xs mb-2">User types:</p>
              {['jav', 'java'].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 mb-1">
                  <span className="text-sky-400 text-xs">→</span>
                  <span className="font-mono text-xs text-gray-300">{t}</span>
                </div>
              ))}
              <p className="text-gray-400 text-xs mt-3 mb-2">Server response:</p>
              {['Java Programming', 'JavaScript Basics', 'Java Developer'].map((r, i) => (
                <div key={i} className="text-xs text-green-400 font-semibold mb-0.5">{r}</div>
              ))}
            </div>

            {/* Form */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-900/50"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">2. Form Submission</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Server response:</p>
              <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 text-xs font-semibold">Your form was submitted successfully</span>
              </div>
            </div>

            {/* Chat */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-violet-900/50"><MessageSquare className="w-4 h-4 text-violet-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">3. Chat Applications</h4>
              </div>
              <p className="text-gray-400 text-xs mb-2">Server response:</p>
              {[
                { user: 'User1', msg: 'Hello', dir: 'left' },
                { user: 'User2', msg: 'Hi!', dir: 'right' },
              ].map((c, i) => (
                <div key={i} className={`flex mb-1.5 ${c.dir === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${c.dir === 'right' ? 'bg-violet-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    {c.user}: {c.msg}
                  </div>
                </div>
              ))}
              <p className="text-violet-400 text-xs font-semibold mt-2">Messages appear instantly.</p>
            </div>

            {/* Dashboard */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-amber-900/50"><LayoutDashboard className="w-4 h-4 text-amber-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">4. Dashboard Data</h4>
              </div>
              <p className="text-gray-400 text-xs mb-2">Server response (JSON):</p>
              <div className="bg-black/50 border border-gray-700 rounded-lg p-3 font-mono text-xs mb-2 space-y-0.5">
                <div className="text-gray-400">{'{'}</div>
                <div className="pl-3"><span className="text-blue-400">"users"</span><span className="text-gray-400">:</span><span className="text-amber-400">120</span><span className="text-gray-400">,</span></div>
                <div className="pl-3"><span className="text-blue-400">"orders"</span><span className="text-gray-400">:</span><span className="text-amber-400">56</span><span className="text-gray-400">,</span></div>
                <div className="pl-3"><span className="text-blue-400">"revenue"</span><span className="text-gray-400">:</span><span className="text-amber-400">4500</span></div>
                <div className="text-gray-400">{'}'}</div>
              </div>
              <p className="text-amber-400 text-xs font-semibold">Dashboard updates dynamically.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxResponse;