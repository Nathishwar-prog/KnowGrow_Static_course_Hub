import React, { useState } from 'react';
import {
  FileCode, Database, RefreshCw, Layers, Terminal, ArrowDown,
  Copy, Check, Info, Layout, Activity, Settings, Zap, Globe, CheckCircle
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

// ─── Flow Column Component ────────────────────────────────────────────────────
const FlowColumn = ({ title, steps, color }: { title: string; steps: string[]; color: string }) => (
  <div className="flex-1">
    <p className={`text-xs font-black uppercase tracking-widest mb-4 ${color}`}>{title}</p>
    <div className="space-y-0 flex flex-col items-start">
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col items-start w-full">
          <div className={`px-4 py-3 rounded-xl border font-semibold text-sm w-full text-center ${color === 'text-red-400' ? 'bg-red-950/40 border-red-800/40 text-red-300' : 'bg-cyan-950/40 border-cyan-800/40 text-cyan-200'}`}>
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

const AjaxXmlFile: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl mb-6 shadow-xl transform hover:rotate-3 transition-transform cursor-default">
          <FileCode className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          AJAX XML File
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Learn how to fetch, parse, and display structured data from XML files dynamically.
        </p>
      </header>

      {/* ── Section 1: What is XML? ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
            <Info className="w-6 h-6 mr-3 text-indigo-500" /> What is XML?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <strong className="text-indigo-600 dark:text-indigo-400">XML (eXtensible Markup Language)</strong> is a markup language used to store and transport structured data.
          </p>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 rounded-r-xl mb-6">
            <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
              Unlike HTML, XML focuses on <strong>data storage</strong> rather than presentation.
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This XML file stores information about students in a structured format.
          </p>
        </div>
        <div className="w-full">
          <CodeBlock 
            title="students.xml"
            code={`<?xml version="1.0" encoding="UTF-8"?>
<students>
  <student>
    <name>Karthick</name>
    <city>Erode</city>
  </student>
  <student>
    <name>Arjun</name>
    <city>Chennai</city>
  </student>
</students>`} 
          />
        </div>
      </section>

      {/* ── Section 2: What is AJAX XML File? ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <RefreshCw className="w-72 h-72" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 flex items-center">
              <RefreshCw className="w-8 h-8 mr-4 text-cyan-400" /> What is AJAX XML File?
            </h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-3xl">
              An AJAX XML File refers to the process where JavaScript retrieves XML data from the server and updates the webpage dynamically without a full refresh.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Settings className="w-5 h-5" />, text: "JS sends AJAX request" },
                { icon: <Database className="w-5 h-5" />, text: "Server returns XML file" },
                { icon: <FileCode className="w-5 h-5" />, text: "JS reads XML data" },
                { icon: <Layout className="w-5 h-5" />, text: "Webpage updates dynamically" }
              ].map((step, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {step.icon}
                  </div>
                  <span className="text-sm font-bold">{step.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
              <h4 className="text-cyan-400 font-bold mb-2 flex items-center uppercase tracking-wider text-xs">Simple Definition</h4>
              <p className="text-white font-medium">
                AJAX XML allows JavaScript to retrieve XML data from the server and display it on a webpage without refreshing the page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: AJAX XML Architecture ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
          <Activity className="w-8 h-8 mr-3 text-indigo-500" /> AJAX XML Architecture
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 font-medium italic">
            AJAX XML follows a client–server communication model.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              {[
                { label: "User Action", icon: <Activity className="w-5 h-5" />, color: "bg-indigo-500" },
                { label: "AJAX Request", icon: <RefreshCw className="w-5 h-5" />, color: "bg-blue-500" },
                { label: "Server Returns XML File", icon: <Database className="w-5 h-5" />, color: "bg-cyan-500" },
                { label: "JavaScript Reads XML Data", icon: <FileCode className="w-5 h-5" />, color: "bg-teal-500" },
                { label: "DOM Updates Webpage", icon: <Layout className="w-5 h-5" />, color: "bg-emerald-500" }
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`w-12 h-12 rounded-2xl ${step.color} shadow-lg flex items-center justify-center text-white flex-shrink-0 transform transition-transform hover:scale-110`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-200 shadow-sm">
                      {step.label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="py-1">
                      <ArrowDown className="text-gray-400 w-6 h-6 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Full Example ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
            <Terminal className="text-indigo-500 w-8 h-8 mr-4" /> Comprehensive Example
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-2">1</span>
                  XML File (students.xml)
                </h3>
                <CodeBlock 
                  code={`<?xml version="1.0" encoding="UTF-8"?>
<students>
  <student>
    <name>Karthick</name>
    <city>Erode</city>
  </student>
  <student>
    <name>Arjun</name>
    <city>Chennai</city>
  </student>
  <student>
    <name>Ravi</name>
    <city>Coimbatore</city>
  </student>
</students>`} 
                />
              </div>

              <div>
                <h3 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2">2</span>
                  HTML Page
                </h3>
                <CodeBlock 
                  code={`<!DOCTYPE html>
<html>
<body>
  <h2>Student List</h2>
  <button onclick="loadXML()">Load Students</button>
  <div id="result"></div>
  <script src="script.js"></script>
</body>
</html>`} 
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-black text-cyan-500 uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-2">3</span>
                  JavaScript (script.js)
                </h3>
                <CodeBlock 
                  code={`function loadXML() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "students.xml", true);
  
  xhr.onload = function() {
    if (xhr.status == 200) {
      var xml = xhr.responseXML;
      var students = xml.getElementsByTagName("student");
      var output = "";
      
      for (var i = 0; i < students.length; i++) {
        var name = students[i].getElementsByTagName("name")[0].textContent;
        var city = students[i].getElementsByTagName("city")[0].textContent;
        output += "<p>" + name + " - " + city + "</p>";
      }
      
      document.getElementById("result").innerHTML = output;
    }
  };
  
  xhr.send();
}`} 
                />
              </div>

              {/* Visualization */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-50 dark:bg-gray-900/50 p-6">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-6 flex items-center">
                  <Layout className="w-4 h-4 mr-2" /> Output Visualization
                </h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">Before Clicking Button</p>
                    <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-100">Student List</h4>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold shadow-md transition-colors">
                      Load Students
                    </button>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-indigo-200 dark:border-indigo-900/50 shadow-indigo-100 dark:shadow-none shadow-lg">
                    <p className="text-[10px] font-bold text-indigo-500 uppercase mb-3 text-right">After Clicking Button</p>
                    <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-100">Student List</h4>
                    <div className="space-y-1 font-medium text-gray-700 dark:text-gray-300">
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Karthick - Erode</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Arjun - Chennai</p>
                      <p className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Ravi - Coimbatore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Response Properties ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white flex items-center mb-6">
            <Settings className="text-cyan-500 w-8 h-8 mr-4" /> AJAX XML Response Properties
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">
            When working with XML responses, the following properties and methods are essential for retrieving the data from the `XMLHttpRequest` object.
          </p>
          
          <div className="overflow-x-auto ring-1 ring-gray-200 dark:ring-gray-700 rounded-2xl">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-black text-[11px] tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Property</th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 font-medium text-gray-700 dark:text-gray-300">
                {[
                  { prop: "responseXML", desc: "Returns the response data as an XML document object. This allows you to use DOM methods to traverse the XML.", color: "text-indigo-500" },
                  { prop: "responseText", desc: "Returns the response data as a string of plain text.", color: "text-blue-500" },
                  { prop: "status", desc: "Returns the numerical HTTP status code of the response (e.g., 200 for OK).", color: "text-cyan-500" },
                  { prop: "readyState", desc: "Returns the current state of the request (0 to 4).", color: "text-teal-500" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                    <td className={`px-6 py-4 font-mono font-bold ${row.color} whitespace-nowrap`}>{row.prop}</td>
                    <td className="px-6 py-4 leading-relaxed">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <CodeBlock 
              title="Usage Example"
              code={`var xml = xhr.responseXML; // Accessing as XML Document`}
            />
          </div>
        </div>
      </section>

      {/* ── Section 6: Accessing XML Data ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center">
            <Layers className="w-6 h-6 mr-3 text-indigo-500" /> Accessing XML Data in JavaScript
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
            Since `responseXML` returns a standard XML document object, you can use common <strong className="text-indigo-600 dark:text-indigo-400">DOM methods</strong> to extract data.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-black text-gray-500 uppercase mb-2">Get all elements by tag name</h4>
              <code className="text-indigo-600 dark:text-indigo-400 font-bold block">xml.getElementsByTagName("student")</code>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-black text-gray-500 uppercase mb-2">Get specific element text content</h4>
              <code className="text-cyan-600 dark:text-cyan-400 font-bold block">students[i].getElementsByTagName("name")[0].textContent</code>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center border border-indigo-400/20">
          <Zap className="w-12 h-12 mb-6 text-yellow-400" />
          <h3 className="text-2xl font-black mb-4 tracking-tight">Pro Tip: XML vs JSON</h3>
          <p className="text-indigo-100 font-medium mb-6 leading-relaxed opacity-90">
            While XML was the original data format for AJAX, most modern applications use <strong>JSON</strong> (JavaScript Object Notation) because it is lighter, easier to parse, and maps directly to JavaScript objects.
          </p>
          <div className="flex items-center gap-2 text-indigo-200 text-sm font-bold uppercase tracking-widest border-t border-white/10 pt-6">
            <Globe className="w-4 h-4" />
            Legacy support is key
          </div>
        </div>
      </section>

      {/* ── Section 7: Real-World Applications ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-5 text-indigo-500">
            <Globe className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4 flex items-center">
              <Globe className="w-8 h-8 mr-4 text-indigo-400" /> Real-World Applications
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">
              Although JSON is more popular today, XML is still vital in many ecosystems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="overflow-hidden ring-1 ring-white/10 rounded-2xl">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white/5 text-indigo-300 uppercase font-black text-[10px] tracking-widest">
                    <tr>
                      <th className="px-6 py-4 border-b border-white/10">Application</th>
                      <th className="px-6 py-4 border-b border-white/10">Example</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-medium">
                    {[
                      { app: "Web Services", ex: "SOAP APIs" },
                      { app: "RSS Feeds", ex: "News Websites" },
                      { app: "Config Files", ex: "System Settings" },
                      { app: "Enterprise", ex: "Legacy Apps" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-bold text-white">{row.app}</td>
                        <td className="px-6 py-4">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex flex-col justify-center">
                <h4 className="text-indigo-400 font-black uppercase tracking-widest text-xs mb-4 flex items-center">
                   Example RSS XML structure
                </h4>
                <div className="bg-black/60 p-6 rounded-2xl border border-white/10 font-mono text-sm group">
                  <pre className="text-indigo-300/80 group-hover:text-indigo-300 transition-colors">
{`<rss>
  <channel>
    <title>Tech News</title>
    <item>
      <title>AI Revolution</title>
      <link>example.com/ai</link>
    </item>
  </channel>
</rss>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-6xl mx-auto text-center py-10 opacity-50">
        <div className="flex items-center justify-center gap-2 mb-2 font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter text-2xl">
          <RefreshCw className="w-6 h-6" />
          KNOWGROW Static Hub
        </div>
        <p className="text-sm font-medium text-gray-400">Mastering Asynchronous JavaScript & XML</p>
      </footer>

    </div>
  );
};

export default AjaxXmlFile;