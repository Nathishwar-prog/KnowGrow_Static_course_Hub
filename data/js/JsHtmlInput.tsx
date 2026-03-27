import React, { useState } from 'react';
import {
  Zap,
  Check,
  Copy,
  Info,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  Box,
  Layout,
  Database,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package,
  RefreshCw,
  Eye,
  Target,
  CloudLightning,
  ShieldCheck,
  List,
  FormInput,
  Keyboard,
  ToggleRight,
  MousePointerClick,
  MonitorPlay,
  Settings2,
  SearchCode,
  ShieldAlert,
  Send,
  AlignLeft,
  CheckSquare,
  Circle
} from 'lucide-react';

// ─── Shared Components ────────────────────────────────────────────────────────

const CodeBlock = ({ code, title, language = 'javascript' }: { code: string; title?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg relative group w-full bg-[#1e1e1e]">
      {title && (
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-sky-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color}`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsHtmlInput: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020817] min-h-screen font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-900 text-sky-600 dark:text-sky-400 text-[10px] font-black mb-8 border border-sky-100 dark:border-sky-900/50 shadow-xl shadow-sky-500/5 hover:scale-105 transition-transform tracking-[0.2em]">
          <Keyboard size={14} className="fill-current" /> GATHERING DATA
        </div>
        <h1 className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
          JavaScript <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 drop-shadow-2xl">
            HTML Input
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Learn how to read, validate, and manipulate user data from <span className="text-gray-900 dark:text-white font-bold underline decoration-sky-500 underline-offset-4 tracking-tight">text fields, checkboxes, and forms</span>.
        </p>
      </header>

      {/* ── Section 1: What is HTML Input ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-xl relative group overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-700"></div>
             <div className="flex flex-col gap-6 relative z-10 h-full">
               <div className="p-4 bg-sky-50 dark:bg-sky-500/10 rounded-2xl text-sky-500 w-max border border-sky-100 dark:border-sky-500/20 shadow-lg">
                 <FormInput size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">1. What is HTML Input?</h3>
                 <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                   👉 HTML Input allows users to enter data into a webpage, and JavaScript is used to <span className="text-sky-500 font-bold">read, validate, and manipulate</span> that data.
                 </p>
                 <div className="space-y-2 bg-sky-50 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-100 dark:border-sky-500/20">
                    <p className="font-bold text-gray-800 dark:text-sky-300 flex items-center gap-2 mb-3">
                       <Info size={18}/> Example Inputs:
                    </p>
                    <ul className="text-sm font-bold text-gray-600 dark:text-gray-400 ml-2 grid grid-cols-2 gap-2">
                       <li className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg"><AlignLeft size={14}/> Text field</li>
                       <li className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg"><Info size={14}/> Email field</li>
                       <li className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg"><ShieldCheck size={14}/> Password field</li>
                       <li className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg"><CheckSquare size={14}/> Checkbox</li>
                       <li className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg col-span-2"><Circle size={14}/> Radio button</li>
                    </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
           <div className="bg-[#0b1120] p-8 rounded-[2.5rem] border border-sky-500/20 shadow-2xl relative overflow-hidden">
               <div className="absolute right-0 top-0 opacity-10 p-6"><Code2 size={100} className="text-sky-500"/></div>
               <SectionHeader icon={Code2} title="2. Basic Input Syntax" subtitle="The foundation." color="text-sky-400" />
               <CodeBlock language="html" code={`<input type="text"\n       id="username"\n       placeholder="Enter your name">`} />
               <p className="font-bold text-gray-300 mt-4 bg-sky-500/10 p-4 rounded-xl border border-sky-500/20">
                  👉 This creates a standard text input box.
               </p>
           </div>
        </div>
      </section>

      {/* ── Section 3 & 4: Accessing & Button Cliks ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
             <SectionHeader icon={SearchCode} title="3. Accessing Input Value" subtitle="Using pure JavaScript." color="text-blue-500" />
             <div className="flex-1 mt-4 space-y-6">
                <CodeBlock code={`const input = document.getElementById("username");\n\nconsole.log(input.value);`} />
                <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 p-5 rounded-2xl">
                   <p className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 text-lg">
                      👉 <code className="bg-white/50 dark:bg-black/20 px-2 py-1 rounded">.value</code>
                   </p>
                   <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">is the most important property. It retrieves whatever the user typed.</p>
                </div>
             </div>
         </div>

         <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-10 rounded-[3rem] shadow-2xl border border-indigo-500/20 h-full flex flex-col relative overflow-hidden">
             <div className="absolute bottom-0 right-0 opacity-10 p-6"><MousePointerClick size={120} className="text-indigo-400"/></div>
             <SectionHeader icon={MousePointerClick} title="4. On Button Click" subtitle="The classic submit action." color="text-indigo-400" />
             <div className="flex-1 mt-4 relative z-10">
                <CodeBlock language="html" code={`<input type="text" id="name">\n<button onclick="getValue()">Submit</button>`} />
                <CodeBlock code={`function getValue() {\n    let value = document.getElementById("name").value;\n    alert(value);\n}`} />
             </div>
         </div>
      </section>

      {/* ── Section 5: Input Events ── */}
      <section className="max-w-6xl mx-auto mb-32">
         <SectionHeader icon={Activity} title="5. Input Events" subtitle="(Very Important)" color="text-teal-500" />
         
         <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
               <table className="w-full text-left text-sm">
                  <thead>
                     <tr className="bg-gray-50 dark:bg-gray-900/50">
                        <th className="p-6 font-black text-teal-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">Event</th>
                        <th className="p-6 font-black text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 border-l">Description</th>
                     </tr>
                  </thead>
                  <tbody className="font-medium text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-mono text-teal-600 dark:text-teal-400 font-bold">oninput</td><td className="p-6 border-l">Fires while typing</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-mono text-teal-600 dark:text-teal-400 font-bold">onchange</td><td className="p-6 border-l">Fires after change/blur</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-mono text-teal-600 dark:text-teal-400 font-bold">onfocus</td><td className="p-6 border-l">Input is clicked/focused</td>
                     </tr>
                     <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="p-6 font-mono text-teal-600 dark:text-teal-400 font-bold">onblur</td><td className="p-6 border-l">Input loses focus</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div className="bg-[#0b1120] border border-teal-500/20 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10"><RefreshCw size={100} className="text-teal-400"/></div>
               <h4 className="text-teal-400 font-black text-2xl flex items-center gap-3 mb-6 relative z-10">
                  <MonitorPlay size={28}/> Example: Live Typing
               </h4>
               <div className="relative z-10 space-y-6">
                  <CodeBlock code={`document.getElementById("name").addEventListener("input", (e) => {\n    console.log(e.target.value);\n});`} />
                  <p className="font-bold text-teal-300 bg-teal-500/10 p-4 rounded-xl border border-teal-500/30">
                     👉 Updates in real-time as the user types every single keystroke.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 6 & 7: Validation ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-rose-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={ShieldAlert} title="6. Input Validation" subtitle="(Core Concept)" color="text-rose-500" />
            <div className="flex-1 mt-4 space-y-8">
               <div>
                  <h4 className="text-gray-900 dark:text-white font-black flex items-center gap-2 mb-3"><CheckCircle size={18} className="text-emerald-500"/> Required Field</h4>
                  <CodeBlock code={`function validate() {\n    let name = document.getElementById("name").value;\n\n    if (name === "") {\n        alert("Name is required!");\n    }\n}`} />
               </div>
               <div>
                  <h4 className="text-gray-900 dark:text-white font-black flex items-center gap-2 mb-3"><CheckCircle size={18} className="text-emerald-500"/> Email Validation Example</h4>
                  <CodeBlock code={`function validateEmail() {\n    let email = document.getElementById("email").value;\n\n    if (!email.includes("@")) {\n        alert("Invalid email!");\n    }\n}`} />
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-gray-800 border border-t-4 border-t-indigo-500 border-gray-100 dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl flex flex-col h-full">
            <SectionHeader icon={Target} title="7. Real-Time Validation" subtitle="(Best Practice)" color="text-indigo-500" />
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">Provides instant visual feedback to the user while they are typing.</p>
            <div className="flex-1">
               <CodeBlock code={`document.getElementById("email").addEventListener("input", function(e) {\n    if (!e.target.value.includes("@")) {\n        this.style.border = "2px solid red";\n    } else {\n        this.style.border = "2px solid green";\n    }\n});`} />
               <div className="mt-8 flex gap-4">
                  <div className="flex-1 p-3 border-2 border-red-500 rounded-lg text-center font-mono text-gray-500 opacity-50">john.doe</div>
                  <div className="flex-1 p-3 border-2 border-green-500 rounded-lg text-center font-mono text-gray-800 dark:text-gray-200 shadow-[0_0_15px_rgba(34,197,94,0.3)]">john@doe.com</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 8: Different Input Types ── */}
      <section className="max-w-4xl mx-auto mb-32">
         <div className="bg-gradient-to-r from-sky-900/20 to-indigo-900/20 border border-sky-500/20 p-10 md:p-16 rounded-[4rem] shadow-xl">
            <SectionHeader icon={ToggleRight} title="8. Different Input Types" subtitle="Beyond text fields." color="text-sky-400" />
            
            <div className="space-y-12 relative z-10 mt-10">
               <div>
                  <h4 className="text-white font-black text-xl flex items-center gap-2 mb-4"><CheckSquare className="text-emerald-400"/> Checkbox</h4>
                  <div className="bg-[#0b1120] border border-white/10 p-6 rounded-2xl">
                     <CodeBlock language="html" code={`<input type="checkbox" id="agree">`} />
                     <CodeBlock code={`let checked = document.getElementById("agree").checked;`} />
                     <p className="text-sm font-bold text-gray-400 mt-2 text-right">Use <code>.checked</code> instead of <code>.value</code> for booleans.</p>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-white font-black text-xl flex items-center gap-2 mb-4"><Circle className="text-blue-400"/> Radio Buttons</h4>
                  <div className="bg-[#0b1120] border border-white/10 p-6 rounded-2xl">
                     <CodeBlock language="html" code={`<input type="radio" name="gender" value="male">\n<input type="radio" name="gender" value="female">`} />
                     <CodeBlock code={`let gender = document.querySelector('input[name="gender"]:checked').value;`} />
                     <p className="text-sm font-bold text-gray-400 mt-2 text-right">Uses CSS selector logic to find the active option.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 9 & 10: Submit & Placeholder ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-5 gap-8">
         <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <SectionHeader icon={Send} title="9. Form Submission Handling" subtitle="Bringing it all together." color="text-purple-500" />
            <div className="space-y-6 mt-8">
               <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">HTML Form</h4>
               <CodeBlock language="html" code={`<form id="form">\n  <input type="text" id="name">\n  <button type="submit">Submit</button>\n</form>`} />
               <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mt-8">JavaScript Listener</h4>
               <CodeBlock code={`document.getElementById("form").addEventListener("submit", function(e) {\n    e.preventDefault(); // crucial step\n    \n    let name = document.getElementById("name").value;\n    console.log(name);\n});`} />
            </div>
         </div>

         <div className="lg:col-span-2 bg-[#0b1120] border border-sky-500/20 p-10 rounded-[3rem] shadow-xl flex flex-col items-center text-center">
            <Settings2 size={64} className="text-sky-400 mb-6"/>
            <h3 className="text-2xl font-black text-white mb-8">💡 10. Placeholder <br/><span className="text-gray-500">vs</span> Value</h3>
            
            <div className="w-full space-y-4">
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full">
                  <div className="text-blue-400 font-mono font-bold mb-2">placeholder</div>
                  <div className="text-gray-300 font-medium">Hint text</div>
                  <div className="mt-4 p-3 border border-gray-600 rounded bg-transparent text-gray-500 text-left font-mono">Enter your email...</div>
               </div>
               
               <div className="bg-sky-500/10 border border-sky-500/30 p-6 rounded-2xl w-full">
                  <div className="text-sky-400 font-mono font-bold mb-2">value</div>
                  <div className="text-gray-300 font-medium">Actual input data</div>
                  <div className="mt-4 p-3 border border-sky-500 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-left font-mono">user@example.com</div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-10"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em]">
          DATA CAPTURED
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose italic max-w-2xl mx-auto underline decoration-sky-500/10 decoration-2">
          "From basic text fields to complex form validation, understanding JavaScript input manipulation is core to every interactive web app."
        </p>
      </footer>

    </div>
  );
};

export default JsHtmlInput;