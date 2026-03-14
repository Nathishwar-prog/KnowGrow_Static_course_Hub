import React, { useState } from 'react';
import {
  FormInput, ShieldCheck, Mail, Lock, User, 
  FileCheck, Info, Activity, Layout, Check, 
  Copy, Settings, Terminal, Box, PlayCircle,
  AlertCircle, Save, Database, ArrowRight, UserPlus
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
    <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</span>
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400/80"></div>
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-slate-800 text-slate-400 hover:bg-indigo-500 hover:text-white transition-colors border border-slate-700"
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono bg-slate-900 text-sky-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const DomForms: React.FC = () => {
  // Section 5: Validation Lab
  const [valName, setValName] = useState("");
  const [valError, setValError] = useState("");

  const handleValSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valName.trim() === "") {
      setValError("Name is required!");
    } else {
      setValError("");
      alert("Validated: " + valName);
    }
  };

  // Section 6-7: auto-fill
  const [autoUser, setAutoUser] = useState("");
  const [showDataResult, setShowDataResult] = useState<{name: string, email: string} | null>(null);

  // Section 9: Registration Form
  const [regState, setRegState] = useState({ name: "", email: "", password: "" });
  const [regMsg, setRegMsg] = useState({ text: "", type: "none" as "none" | "error" | "success" });

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password } = regState;
    if (name === "" || email === "" || password === "") {
      setRegMsg({ text: "All fields required!", type: "error" });
    } else {
      setRegMsg({ text: "Registration Successful!", type: "success" });
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900/10 min-h-screen font-sans">
      
      {/* ── Hero Header ── */}
      <header className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 transition-transform cursor-pointer">
          <FormInput className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          DOM Forms
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
          The bridges between users and data. Learn to capture, validate, and manipulate HTML form state with JavaScript.
        </p>
      </header>

      {/* ── Section 1-2: Introduction ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
          <h2 className="text-3xl font-black flex items-center text-slate-900 dark:text-white mb-6">
            <Info className="w-8 h-8 mr-3 text-indigo-500" /> Introduction
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
            A DOM Form refers to accessing and manipulating HTML forms using the Document Object Model (DOM) with JavaScript.
          </p>
          <div className="space-y-4">
             <div className="flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
                <Database className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">Data Hubs</h4>
                  <p className="text-xs text-slate-500 leading-tight">Forms collect login info, feedback, payment data, and search queries.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-2xl border border-sky-100 dark:border-sky-800">
                <ShieldCheck className="w-6 h-6 text-sky-600 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">Validation Control</h4>
                  <p className="text-xs text-slate-500 leading-tight">DOM allows you to validate input, prevent incorrect submissions, and handle errors.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 flex flex-col">
           <div className="flex items-center gap-2 mb-6 text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">
             <Layout size={14} /> Basic Structure
           </div>
           <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-white/5 mb-6">
              <div className="space-y-4 max-w-xs mx-auto">
                 <div className="space-y-1">
                   <div className="text-[10px] text-slate-500 font-bold">Username</div>
                   <div className="h-10 bg-slate-700 rounded-lg border border-white/10"></div>
                 </div>
                 <div className="space-y-1 text-right">
                   <div className="inline-block px-8 py-2.5 bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/20 text-[10px] font-black text-white uppercase tracking-widest">Login</div>
                 </div>
              </div>
           </div>
           <CodeBlock 
             title="Access via forms collection"
             code={`// Method 1: Using Name\nvar form = document.forms["loginForm"];\n\n// Method 2: Using Index\nvar form = document.forms[0];`} 
           />
        </div>
      </section>

      {/* ── Section 3-4: Accessing Elements Lab ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 lg:p-16 shadow-sm border border-slate-100 dark:border-slate-700">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Query Explorer</h2>
                 <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">
                   Accessing form fields individually allows you to read and update specific user data programmatically.
                 </p>
                 <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <p className="text-[10px] font-black text-indigo-500 uppercase mb-2">Internal Representation</p>
                       <div className="font-mono text-sm text-slate-400 bg-slate-900 p-3 rounded-xl border border-white/5">
                          <span className="text-sky-300">document</span>.<span className="text-indigo-300">forms</span>[<span className="text-amber-300">"myForm"</span>][<span className="text-amber-300">"fname"</span>].<span className="text-indigo-300">value</span>
                       </div>
                    </div>
                    <CodeBlock 
                      title="Direct ID Access"
                      code={`var val = document.getElementById("user").value;`} 
                    />
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-indigo-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
                 <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
                    <div className="flex items-center gap-3 mb-8">
                       <Box className="text-indigo-500 shrink-0" />
                       <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mock Container</span>
                    </div>
                    <form className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-tighter">Full Name</label>
                          <input type="text" placeholder="Karthick" disabled className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 text-sm font-bold text-indigo-500 border border-slate-200 dark:border-slate-700 outline-none" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-tighter">Age</label>
                          <input type="text" placeholder="22" disabled className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 text-sm font-bold text-indigo-500 border border-slate-200 dark:border-slate-700 outline-none" />
                       </div>
                    </form>
                    <div className="mt-8 flex justify-center">
                       <div className="px-6 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black rounded-full border border-indigo-200 dark:border-indigo-800">
                          OUTPUT: Karthick 22
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 5: Validation Lab ── */}
      <section className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-indigo-600 rounded-[3rem] p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
           <AlertCircle className="absolute top-[-10%] right-[-5%] w-64 h-64 text-white/5 -rotate-12" />
           <h2 className="text-3xl font-black mb-6 flex items-center gap-3 relative z-10">
             <ShieldCheck className="w-8 h-8" /> Validation Lab
           </h2>
           <p className="text-indigo-100 font-medium mb-8 text-lg leading-relaxed relative z-10">
             Validation ensures that users enter correct information BEFORE the form reaches the server.
           </p>
           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative z-10">
              <CodeBlock 
                title="preventDefault Strategy"
                code={`form.addEventListener("submit", (e) => {\n  if(name === "") {\n    e.preventDefault();\n    error.innerHTML = "Required!";\n  }\n});`} 
              />
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-700 flex flex-col shadow-sm">
           <div className="flex items-center gap-2 mb-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
             <PlayCircle size={14}/> Live Interactive Lab
           </div>
           
           <form onSubmit={handleValSubmit} className="space-y-6 flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                 <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">Enter Name</label>
                 <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      type="text" 
                      value={valName}
                      onChange={(e) => setValName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl pl-12 pr-4 border-2 border-slate-100 dark:border-slate-800 transition-all focus:border-indigo-500 outline-none font-bold"
                    />
                 </div>
                 {valError && (
                   <div className="flex items-center gap-2 text-rose-500 text-xs font-black animate-in slide-in-from-top-1">
                      <AlertCircle size={14} /> {valError}
                   </div>
                 )}
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                 <Save size={20} /> Submit
              </button>
           </form>
           
           <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-loose">
                 Try submitting with an empty field to trigger the validation guard.
              </p>
           </div>
        </div>
      </section>

      {/* ── Section 6-7: Reading & Changing ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 text-indigo-500 animate-pulse">
              <Settings size={200} />
           </div>
           
           <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
              <Terminal className="text-indigo-400" /> Read/Write Operations
           </h2>

           <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h3 className="text-lg font-black text-indigo-300 mb-6 uppercase tracking-tighter">Value Injection (Write)</h3>
                    <div className="space-y-6">
                       <input 
                         type="text" 
                         value={autoUser}
                         onChange={(e) => setAutoUser(e.target.value)}
                         placeholder="Target Input"
                         className="w-full h-14 bg-slate-800 border border-slate-700 rounded-xl px-4 text-white font-mono outline-none"
                       />
                       <button 
                         onClick={() => setAutoUser("Guest User")}
                         className="px-8 py-3 bg-white text-slate-900 rounded-xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
                       >
                          Auto Fill Sample
                       </button>
                    </div>
                 </div>
                 <CodeBlock 
                   title="Value Manipulation"
                   code={`function setValue(){\n  document.getElementById("user").value = "Guest User";\n}`} 
                 />
              </div>

              <div className="space-y-8">
                 <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                    <h3 className="text-lg font-black text-indigo-300 mb-6 uppercase tracking-tighter">Data Extraction (Read)</h3>
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                       <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
                          <Activity size={32} />
                       </div>
                       <p className="text-slate-400 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
                          Extracting form data is critical for storage or transmission to an API.
                       </p>
                       <button 
                         onClick={() => alert(`Reading Logic: value = "${autoUser || 'empty'}"`)}
                         className="w-full py-4 border-2 border-white/10 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:border-indigo-500 hover:text-indigo-400 transition-colors"
                       >
                          Trigger Read Simulation
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 8: Form Submit Event ── */}
      <section className="max-w-6xl mx-auto mb-16 h-[200px] flex items-center justify-center">
         <div className="text-center">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 italic">Intercepting Submission</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">
               Using addEventListener("submit") and preventDefault()
            </p>
            <div className="mt-8 flex justify-center gap-4">
               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping delay-150"></div>
               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping delay-300"></div>
            </div>
         </div>
      </section>

      {/* ── Section 9: Real-World Example (Registration) ── */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden group">
           <UserPlus className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] text-white/5 rotate-12" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-black mb-8">Production Pattern: Registration</h2>
                 <p className="text-indigo-100 font-medium mb-12 text-lg leading-relaxed">
                   A complete implementation combining DOM access, event handling, preventing reload, and dynamic feedback.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <Check className="w-6 h-6 text-green-300 shrink-0" />
                       <span className="text-sm font-bold">Prevents full page refresh</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <Check className="w-6 h-6 text-green-300 shrink-0" />
                       <span className="text-sm font-bold">Validates all fields simultaneously</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <Check className="w-6 h-6 text-green-300 shrink-0" />
                       <span className="text-sm font-bold">Dynamic UI status updates</span>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-3xl text-slate-900 border border-white">
                 <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                    <Save className="text-indigo-600" /> Member Signup
                 </h3>
                 <form onSubmit={handleRegSubmit} className="space-y-6">
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Display Name</label>
                       <div className="relative group">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-indigo-500" />
                          <input 
                            type="text" 
                            placeholder="John Smith" 
                            value={regState.name}
                            onChange={(e) => setRegState({...regState, name: e.target.value})}
                            className="w-full h-12 bg-slate-50 rounded-xl pl-12 pr-4 text-sm font-bold border border-slate-100 outline-none focus:border-indigo-500 transition-colors"
                          />
                       </div>
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                       <div className="relative group">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-indigo-500" />
                          <input 
                            type="email" 
                            placeholder="john@example.com" 
                            value={regState.email}
                            onChange={(e) => setRegState({...regState, email: e.target.value})}
                            className="w-full h-12 bg-slate-50 rounded-xl pl-12 pr-4 text-sm font-bold border border-slate-100 outline-none focus:border-indigo-500 transition-colors"
                          />
                       </div>
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Set Password</label>
                       <div className="relative group">
                          <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-indigo-500" />
                          <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={regState.password}
                            onChange={(e) => setRegState({...regState, password: e.target.value})}
                            className="w-full h-12 bg-slate-50 rounded-xl pl-12 pr-4 text-sm font-bold border border-slate-100 outline-none focus:border-indigo-500 transition-colors"
                          />
                       </div>
                    </div>

                    <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-indigo-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group">
                       Create Account <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {regMsg.type !== "none" && (
                      <div className={`p-4 rounded-xl text-xs font-black text-center animate-in zoom-in slide-in-from-bottom-2 ${
                        regMsg.type === "success" ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-rose-50 text-rose-600 border border-rose-100'
                      }`}>
                         {regMsg.text}
                      </div>
                    )}
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="max-w-4xl mx-auto text-center py-20 opacity-40">
        <div className="flex items-center justify-center gap-3 mb-4 font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter text-3xl">
          <FormInput className="w-8 h-8 opacity-50" />
          KNOWGROW Hub
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent mx-auto mb-4"></div>
        <p className="text-base font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase">Form Interface & Data Specialist</p>
      </footer>

    </div>
  );
};

export default DomForms;