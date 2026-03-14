import React, { useState } from 'react';
import {
  Send, Copy, Check, Zap, Globe, ArrowDown,
  Search, CheckCircle, Terminal, MessageSquare,
  LayoutDashboard, Activity, Code2, RefreshCw
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
          className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-rose-500 hover:text-white transition-colors border border-gray-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-gray-900 text-rose-300 leading-relaxed rounded-b-xl">
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
const AjaxRequest: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-rose-900/10 min-h-screen font-sans">

      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX Request
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Learn how JavaScript sends requests to servers using XMLHttpRequest and Fetch API to update pages dynamically.
        </p>
      </header>

      {/* ── Section 1 & 2: What + Why ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* What */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-center">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Send className="w-6 h-6 mr-3 text-rose-500" /> What is an AJAX Request?
          </h2>
          <div className="p-4 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-xl mb-5">
            <span className="font-bold text-rose-800 dark:text-rose-400 text-lg">AJAX Request = Background Communication</span>
            <p className="mt-2 text-sm text-rose-700 dark:text-rose-300">
              A request sent by JavaScript to a web server using technologies like <strong>XMLHttpRequest</strong> or <strong>Fetch API</strong>. The server processes it and sends back a response, which JavaScript uses to update the webpage.
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl">
            <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">
              <span className="font-black">Simple Definition:</span> An AJAX request allows a webpage to communicate with the server <em>in the background</em> and update parts of the page dynamically.
            </p>
          </div>
        </div>

        {/* Why */}
        <div className="bg-gradient-to-br from-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden border border-rose-800/50">
          <div className="absolute top-0 right-0 -m-6 text-rose-500/10"><Zap className="w-48 h-48" /></div>
          <h2 className="text-2xl font-bold flex items-center text-white mb-4 relative z-10">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Why AJAX Requests Are Used
          </h2>
          <p className="text-rose-200 text-sm mb-6 relative z-10">
            Traditional web pages reload completely when data is requested. AJAX allows <strong>partial page updates</strong>, improving performance.
          </p>
          <div className="overflow-x-auto ring-1 ring-white/10 rounded-xl relative z-10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-rose-300 uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-white/10">Benefit</th>
                  <th className="px-4 py-3 border-b border-white/10">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { b: 'Faster response', d: 'Only required data is fetched', c: 'text-rose-400' },
                  { b: 'No page reload', d: 'Smooth user experience', c: 'text-orange-400' },
                  { b: 'Dynamic content', d: 'Updates instantly', c: 'text-amber-400' },
                  { b: 'Reduced bandwidth', d: 'Smaller data transfer', c: 'text-emerald-400' },
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

      {/* ── Section 3 & 4: Architecture + HTTP Methods ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">

        {/* Request Flow */}
        <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white p-8 rounded-3xl shadow-xl border border-rose-800/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Activity className="w-56 h-56" /></div>
          <h2 className="text-2xl font-bold text-white mb-2 relative z-10 flex items-center">
            <Activity className="w-6 h-6 mr-3 text-rose-400" /> AJAX Request Architecture
          </h2>
          <p className="text-rose-200 text-sm mb-6 border-b border-white/10 pb-4 relative z-10">Request Flow — Client-Server Communication Model</p>
          <div className="bg-black/40 rounded-xl border border-rose-800/40 p-5 font-mono text-sm space-y-1 relative z-10">
            {[
              { text: 'User Action', color: 'text-rose-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'JavaScript AJAX Request', color: 'text-orange-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Processing', color: 'text-amber-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'Server Response', color: 'text-yellow-300' },
              { text: '↓', color: 'text-gray-500' },
              { text: 'DOM Update', color: 'text-emerald-300' },
            ].map((line, i) => (
              <div key={i} className={`${line.color} ${line.text === '↓' ? 'pl-6' : ''}`}>{line.text}</div>
            ))}
          </div>
          <p className="text-rose-200/70 text-xs mt-4 relative z-10 italic">The browser sends the request, the server processes it, and the webpage updates dynamically.</p>
        </div>

        {/* HTTP Methods */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Globe className="w-6 h-6 mr-3 text-orange-500" /> Types of AJAX Requests
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 font-medium">AJAX supports different HTTP methods.</p>
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-xl mb-5">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900/80 text-gray-900 dark:text-white uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Method</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { method: 'GET', purpose: 'Retrieve data from server', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400' },
                  { method: 'POST', purpose: 'Send data to server', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400' },
                  { method: 'PUT', purpose: 'Update data', color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400' },
                  { method: 'DELETE', purpose: 'Remove data', color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400' },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-lg font-black text-xs ${r.color}`}>{r.method}</span>
                    </td>
                    <td className="px-4 py-3">{r.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Example:</p>
          <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm space-y-1">
            <div className="text-emerald-400">GET /users</div>
            <div className="text-blue-400">POST /login</div>
          </div>
        </div>
      </section>

      {/* ── Section 5: XMLHttpRequest ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-rose-500 w-8 h-8 mr-3" /> AJAX Request — XMLHttpRequest
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
            <code className="text-rose-600 dark:text-rose-400 font-bold">XMLHttpRequest</code> is the <strong>traditional way</strong> to create AJAX requests.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CodeBlock title="JavaScript — loadData()" code={`function loadData(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","data.txt",true);

  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4 && xhr.status == 200){

      document.getElementById("result")
        .innerHTML = xhr.responseText;

    }

  };

  xhr.send();

}`} />
              <CodeBlock title="HTML" code={`<button onclick="loadData()">Load Data</button>\n\n<div id="result"></div>`} />
              <CodeBlock title="data.txt" code={`This data was loaded using an AJAX request.`} />
            </div>
            <div>
              <OutputPanel label="Output Visualization">
                <div className="space-y-4">
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Before clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Data</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default">[Button]</button>
                  </div>
                  <div className="border border-dashed border-rose-300 dark:border-rose-700 rounded-lg p-4">
                    <p className="text-xs font-bold text-rose-500 uppercase mb-3">After clicking button</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm mb-2">Load Data</p>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-xs rounded text-gray-700 dark:text-gray-300 cursor-default mb-3">[Button]</button>
                    <div className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded text-sm text-rose-800 dark:text-rose-300 font-medium">
                      This data was loaded using an AJAX request.
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">Only the result section updates.</p>
                  </div>
                </div>
              </OutputPanel>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Fetch API ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-orange-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl border border-orange-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Code2 className="w-72 h-72" /></div>
          <h2 className="text-3xl font-black text-white mb-2 flex items-center relative z-10">
            <RefreshCw className="w-8 h-8 mr-3 text-orange-400" /> AJAX Request — Fetch API
          </h2>
          <p className="text-orange-200 font-semibold mb-8 border-b border-white/10 pb-4 relative z-10">
            Modern JavaScript applications use the <code className="bg-white/10 px-2 py-0.5 rounded text-orange-300 font-mono">Fetch API</code> — cleaner and promise-based.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 relative z-10">
            <CodeBlock title="JavaScript" code={`function loadUsers(){

  fetch("users.json")

    .then(response => response.json())

    .then(data => {

      let output="";

      data.forEach(user => {

        output += \`<p>\${user.name}</p>\`;

      });

      document.getElementById("users")
        .innerHTML = output;

    });

}`} />
            <CodeBlock title="HTML" code={`<button onclick="loadUsers()">
  Show Users
</button>

<div id="users"></div>`} />
            <div className="space-y-4">
              <CodeBlock title="JSON File — users.json" code={`[\n  {"name":"Karthick"},\n  {"name":"Arjun"},\n  {"name":"Ravi"}\n]`} />
              <div className="rounded-xl overflow-hidden border border-orange-800/50">
                <div className="bg-orange-950/60 px-4 py-2 border-b border-orange-800/50">
                  <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">Output</span>
                </div>
                <div className="p-4 bg-orange-950/30 space-y-2">
                  {['Karthick', 'Arjun', 'Ravi'].map((name, i) => (
                    <div key={i} className="font-mono text-sm text-orange-200 font-medium">{name}</div>
                  ))}
                  <div className="flex items-center gap-1.5 pt-2 border-t border-orange-800/40 text-xs text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Data loads dynamically.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: POST Request ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Send className="text-rose-500 w-8 h-8 mr-3" /> AJAX POST Request Example
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">AJAX can also <strong>send data</strong> to the server.</p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <CodeBlock title="JavaScript — sendData()" code={`function sendData(){

  var xhr = new XMLHttpRequest();

  xhr.open("POST","submit.php",true);

  xhr.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );

  xhr.send("name=Karthick");

}`} />
            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg font-black text-xs">POST</span>
                <span className="font-mono text-sm text-gray-600 dark:text-gray-300">submit.php</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 font-medium leading-relaxed">
                This sends <code className="font-bold bg-blue-100 dark:bg-blue-900/30 px-1 rounded">name=Karthick</code> to the server without reloading the page.
              </p>
              <div className="mt-5 flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Data sent without reloading the page.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Real World ── */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500"><Send className="w-64 h-64" /></div>
          <h2 className="text-3xl font-black text-white mb-2 relative z-10 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-rose-400" /> Real-World AJAX Request Examples
          </h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-8 border-b border-gray-800 pb-4 relative z-10">
            AJAX requests are used in many modern applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">

            {/* Search */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-sky-900/50"><Search className="w-4 h-4 text-sky-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">1. Search Suggestions</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Typing:</p>
              {['jav', 'java', 'javascript'].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 mb-1">
                  <span className="text-sky-400 text-xs">→</span>
                  <span className="font-mono text-xs text-gray-300">{t}</span>
                </div>
              ))}
              <p className="text-emerald-400 text-xs font-semibold mt-2">Suggestions appear instantly.</p>
            </div>

            {/* Form */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-900/50"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">2. Form Submission</h4>
              </div>
              <div className="flex items-center gap-2 mt-4 bg-emerald-950/50 border border-emerald-800/40 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 text-xs font-semibold">Form submitted successfully</span>
              </div>
              <p className="text-gray-400 text-xs mt-3">Without page reload.</p>
            </div>

            {/* Chat */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-violet-900/50"><MessageSquare className="w-4 h-4 text-violet-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">3. Chat Applications</h4>
              </div>
              {[
                { user: 'User1', msg: 'Hello', dir: 'left' },
                { user: 'User2', msg: 'Hi', dir: 'right' },
              ].map((c, i) => (
                <div key={i} className={`flex mb-1.5 ${c.dir === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${c.dir === 'right' ? 'bg-violet-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    {c.user}: {c.msg}
                  </div>
                </div>
              ))}
              <p className="text-violet-400 text-xs font-semibold mt-2">Messages update dynamically.</p>
            </div>

            {/* Dashboard */}
            <div className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-amber-900/50"><LayoutDashboard className="w-4 h-4 text-amber-400" /></div>
                <h4 className="font-bold text-gray-100 text-sm">4. Dashboard Updates</h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">Admin dashboards load data using AJAX requests.</p>
              {[
                { label: 'Users', value: '1,240', color: 'text-sky-400' },
                { label: 'Orders', value: '87', color: 'text-emerald-400' },
                { label: 'Revenue', value: '₹42K', color: 'text-amber-400' },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center py-1 border-b border-gray-700/50 last:border-0">
                  <span className="text-gray-400 text-xs">{s.label}</span>
                  <span className={`font-bold text-xs ${s.color}`}>{s.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AjaxRequest;