import React, { useState } from 'react';
import {
  Settings, Terminal, RefreshCw, Activity, Layers, ArrowDown,
  Copy, Check, Info, Layout, Database, Zap, Globe, CheckCircle,
  FileText, Send, Lock, Search
} from 'lucide-react';

// ─── Code Block Component ─────────────────────────────────────────────────────
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

const AjaxXmlHttp: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <Settings className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX XMLHttpRequest
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          The engine behind asynchronous web apps. Fetch data from a server without ever reloading the page.
        </p>
      </header>

      {/* ── Section 1: What is XMLHttpRequest? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-blue-500" /> What is XMLHttpRequest?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
            <strong className="text-blue-600 dark:text-blue-400 font-black tracking-tight">XMLHttpRequest</strong> is a built-in JavaScript object that allows web browsers to exchange data with a server in the background.
          </p>
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-2xl">
            <h4 className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-2">Simple Definition</h4>
            <p className="text-gray-800 dark:text-gray-200 font-bold leading-snug">
              A JavaScript object used to send requests to a server and retrieve data without refreshing the webpage.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden flex flex-col justify-center min-h-[300px]">
          <div className="absolute top-0 right-0 -m-8 opacity-10">
            <Layers className="w-64 h-64" />
          </div>
          <h3 className="text-2xl font-black mb-4 relative z-10 flex items-center">
            <RefreshCw className="w-6 h-6 mr-2 animate-spin-slow" /> Background Sync
          </h3>
          <p className="text-blue-100 font-medium mb-6 relative z-10 leading-relaxed">
            AJAX communication happens entirely behind the scenes. This object handles the heavy lifting of talking to the server while the user stays on the page.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl self-start relative z-10 border border-white/10">
            <Globe className="w-4 h-4 text-blue-300" />
            <span className="text-xs font-bold uppercase tracking-wider">Client-Server Bridge</span>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why it's Used ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
            <Zap className="text-orange-500 w-8 h-8 mr-4" /> Why XMLHttpRequest is Used
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 border-b border-gray-100 dark:border-gray-700 pb-6 max-w-3xl">
            Traditional web pages reload completely when communicating with the server. XMLHttpRequest enables asynchronous communication, improving performance.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Asynchronous", desc: "Server requests run in background", icon: <RefreshCw className="text-blue-500" /> },
              { title: "No Page Refresh", desc: "Dynamic updates instantly", icon: <Layout className="text-emerald-500" /> },
              { title: "Faster Apps", desc: "Only required data loads", icon: <Zap className="text-amber-500" /> },
              { title: "Better UX", desc: "Smooth user interaction", icon: <CheckCircle className="text-indigo-500" /> }
            ].map((benefit, i) => (
              <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-700 transition-all hover:scale-105 hover:shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-black text-gray-900 dark:text-white mb-2 tracking-tight">{benefit.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-normal">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Workflow Diagram ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <h2 className="text-3xl font-black text-white mb-12 flex items-center justify-center">
            <Activity className="w-8 h-8 mr-4 text-blue-400" /> AJAX XMLHttpRequest Workflow
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 hidden sm:block"></div>
            
            <div className="space-y-8 relative z-10">
              {[
                { label: "User Action", icon: <Activity />, color: "bg-blue-500", shadow: "shadow-blue-500/20" },
                { label: "JavaScript Creates XMLHttpRequest Object", icon: <Settings />, color: "bg-indigo-500", shadow: "shadow-indigo-500/20" },
                { label: "Request Sent to Server", icon: <Send />, color: "bg-violet-500", shadow: "shadow-violet-500/20" },
                { label: "Server Processes Request", icon: <Database />, color: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
                { label: "Server Sends Response", icon: <RefreshCw />, color: "bg-teal-500", shadow: "shadow-teal-500/20" },
                { label: "JavaScript Updates Webpage", icon: <Layout />, color: "bg-emerald-500", shadow: "shadow-emerald-500/20" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} ${step.shadow} flex items-center justify-center text-white flex-shrink-0 z-20 transform transition-transform group-hover:scale-110`}>
                    {step.icon}
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 px-6 rounded-2xl flex-1 flex items-center group-hover:bg-white/10 transition-colors">
                    <span className="text-white font-bold tracking-tight">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Creation & Syntax ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
            Creating the Object
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed">
            To start using AJAX, we must first initialize the request object. This single line of code is the starting point for all asynchronous communication.
          </p>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Standard Initialization</h4>
              <p className="text-gray-900 dark:text-white font-mono font-bold">var xhr = new XMLHttpRequest();</p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 p-8 rounded-3xl shadow-xl text-indigo-200">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
             <Settings className="w-4 h-4 text-indigo-400" /> Initialization Note
          </h4>
          <p className="text-sm leading-relaxed mb-6 opacity-80">
            This object will handle all communication between the browser and the server, including setting headers, monitoring state, and receiving data.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="block text-white font-black text-xs mb-1">Modern</span>
              <span className="text-[10px] opacity-60">Handled by JS</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="block text-white font-black text-xs mb-1">Legacy</span>
              <span className="text-[10px] opacity-60">IE5/6 (ActiveX)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Basic Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
            <Terminal className="text-blue-500 w-8 h-8 mr-4" /> Basic Demonstration
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <CodeBlock 
                title="HTML Structure"
                code={`<!DOCTYPE html>
<html>
<body>
  <h2>AJAX XMLHttpRequest Demo</h2>
  <button onclick="loadData()">Load Data</button>
  <div id="result"></div>
</body>
</html>`} 
              />
              <CodeBlock 
                title="data.txt (Server File)"
                code={`This data was loaded using XMLHttpRequest.`} 
              />
            </div>
            <div className="space-y-6">
              <CodeBlock 
                title="JavaScript logic"
                code={`function loadData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  
  xhr.onload = function() {
    if (xhr.status == 200) {
      document.getElementById("result")
        .innerHTML = xhr.responseText;
    }
  };
  
  xhr.send();
}`} 
              />
              
              {/* Output Visualization */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Output Visualization</h4>
                
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1.5 mb-2">
                       Before clicking button
                    </span>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-3">AJAX XMLHttpRequest Demo</h4>
                      <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs font-bold text-gray-600 dark:text-gray-400 cursor-default">Load Data</button>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-bold text-blue-500 uppercase flex items-center gap-1.5 mb-2">
                       After clicking button
                    </span>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-900 shadow-lg shadow-blue-500/5">
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-3">AJAX XMLHttpRequest Demo</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-sm bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-100 dark:border-blue-800">
                        This data was loaded using XMLHttpRequest.
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2 italic">Only the result section updates dynamically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6 & 7: Methods and Properties ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        {/* Methods */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-blue-500" /> Key Methods
          </h2>
          <div className="space-y-3">
            {[
              { m: "open()", d: "Initializes a request (params: method, url, async)", color: "bg-blue-500" },
              { m: "send()", d: "Sends the request to the server", color: "bg-indigo-500" },
              { m: "setRequestHeader()", d: "Sets HTTP request headers (must be after open)", color: "bg-violet-500" },
              { m: "abort()", d: "Cancels the current request", color: "bg-red-500" }
            ].map((method, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-700">
                <div className={`w-8 h-8 rounded-lg ${method.color} flex items-center justify-center text-white flex-shrink-0 mt-0.5`}>
                  <Terminal size={14} />
                </div>
                <div>
                  <h4 className="font-mono font-bold text-gray-900 dark:text-white text-sm mb-1">{method.m}</h4>
                  <p className="text-xs text-gray-500 font-medium">{method.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Properties */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
            <Layout className="w-6 h-6 mr-3 text-emerald-500" /> Key Properties
          </h2>
          <div className="space-y-4">
            {[
              { p: "readyState", d: "Current state of the request (0-4)", color: "text-blue-500" },
              { p: "status", d: "HTTP status code (e.g., 200, 404)", color: "text-emerald-500" },
              { p: "responseText", d: "Response data as plain text", color: "text-amber-500" },
              { p: "responseXML", d: "Response data as XML document object", color: "text-indigo-500" }
            ].map((prop, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 dark:border-gray-700 last:border-0">
                <span className={`font-mono font-black text-sm ${prop.color}`}>{prop.p}</span>
                <span className="text-xs text-gray-500 font-bold">{prop.d}</span>
              </div>
            ))}
            <div className="pt-4">
              <CodeBlock code={`xhr.open("GET", "data.txt", true);
xhr.send();`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: readyState Values ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
            readyState Values Explained
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10">
            The <code className="text-blue-500">readyState</code> property indicates the current progress of the network request.
          </p>
          
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-3xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-black text-[11px] tracking-widest">
                <tr>
                  <th className="px-6 py-5 border-b border-gray-100 dark:border-gray-700">Value</th>
                  <th className="px-6 py-5 border-b border-gray-100 dark:border-gray-700">State</th>
                  <th className="px-6 py-5 border-b border-gray-100 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { v: "0", s: "UNSENT", d: "Request not initialized", color: "bg-slate-500" },
                  { v: "1", s: "OPENED", d: "Connection established", color: "bg-amber-500" },
                  { v: "2", s: "HEADERS_RECEIVED", d: "Request received", color: "bg-blue-500" },
                  { v: "3", s: "LOADING", d: "Processing response", color: "bg-indigo-500" },
                  { v: "4", s: "DONE", d: "Request completed", color: "bg-emerald-500" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border-b border-gray-50 dark:border-gray-700/50 last:border-0 group">
                    <td className="px-6 py-5">
                      <div className={`w-8 h-8 rounded-full ${row.color} flex items-center justify-center text-white font-black text-xs shadow-lg transform group-hover:scale-110 transition-transform`}>{row.v}</div>
                    </td>
                    <td className="px-6 py-5 font-black tracking-tight">{row.s}</td>
                    <td className="px-6 py-5 opacity-80">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-10 p-6 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/40 rounded-3xl">
            <h4 className="text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-widest text-xs mb-3">Professional Check</h4>
            <CodeBlock code={`if (xhr.readyState == 4 && xhr.status == 200) {
  // Process the successful response
}`} />
          </div>
        </div>
      </section>

      {/* ── Section 9: POST Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 p-8 lg:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Lock className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-black mb-6 relative z-10 flex items-center gap-4">
            <Send className="w-8 h-8 text-blue-400 rotate-12" /> Sending Data with POST
          </h2>
          <p className="text-indigo-200 mb-10 max-w-2xl font-medium relative z-10 leading-relaxed">
            AJAX can also send data to the server securely using the **POST** method. This is essential for submitting forms, logging in users, or saving settings without leaving the current view.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Key Requirement</h4>
                 <p className="text-sm font-medium">When using POST, you must set the <code className="text-pink-400">Content-type</code> header so the server knows how to read your data.</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                 <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Data String</h4>
                 <p className="text-sm font-medium">Parameters are sent in the <code className="text-amber-400">send()</code> method as a query string.</p>
              </div>
            </div>
            <CodeBlock 
              title="POST Request Example"
              code={`function sendData() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "submit.php", true);
  
  // Important! Set Header
  xhr.setRequestHeader(
    "Content-type", 
    "application/x-www-form-urlencoded"
  );
  
  xhr.send("name=Karthick");
}`} 
            />
          </div>
        </div>
      </section>

      {/* ── Section 10: Real-World Applications ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center justify-center">
          <Globe className="w-6 h-6 mr-3 text-blue-500" /> Real-World Applications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Search", title: "Live Search", ex: "Google suggestions", icon: <Search /> },
            { tag: "Social", title: "Chat Apps", ex: "Real-time messages", icon: <Send /> },
            { tag: "Auth", title: "Form Submission", ex: "Login systems", icon: <Lock /> },
            { tag: "Finance", title: "Dashboards", ex: "Analytics panels", icon: <Database /> }
          ].map((app, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-4">
                {app.icon}
              </div>
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 block">{app.tag}</span>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 leading-tight">{app.title}</h4>
              <p className="text-xs text-gray-500 font-medium italic opacity-70">{app.ex}</p>
            </div>
          ))}
        </div>

        {/* Live Search Interactive Logic */}
        <div className="mt-12 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-blue-500">
            <Search className="w-32 h-32" />
          </div>
          <h4 className="text-sm font-black text-gray-800 dark:text-gray-100 mb-6 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700 pb-4">Example: Typing in Search</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
               <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 font-mono text-sm rounded-xl border border-gray-200 dark:border-gray-700 w-32 shadow-inner">jav</div>
               <ArrowDown className="text-gray-300 -rotate-90" />
               <div className="flex gap-1.5">
                  {["java", "javascript"].map(s => <span key={s} className="px-2 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded text-[10px] font-bold">{s}</span>)}
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 font-mono text-sm rounded-xl border border-gray-200 dark:border-gray-700 w-32 shadow-inner">pyt</div>
               <ArrowDown className="text-gray-300 -rotate-90" />
               <div className="flex gap-1.5">
                  {["python", "pytools"].map(s => <span key={s} className="px-2 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded text-[10px] font-bold">{s}</span>)}
               </div>
            </div>
            <p className="text-emerald-500 text-xs font-bold pt-4 flex items-center gap-2">
              <CheckCircle size={14} /> Suggestions appear instantly as you type!
            </p>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-10 opacity-50">
        <div className="flex items-center justify-center gap-2 mb-2 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-2xl">
          <RefreshCw className="w-6 h-6" />
          KNOWGROW Hub
        </div>
        <p className="text-sm font-medium text-gray-400">Asynchronous Communication Mastering</p>
      </footer>

    </div>
  );
};

export default AjaxXmlHttp;