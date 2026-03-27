import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, AlertCircle, CheckCircle, Info, Terminal, CodeXml, 
  Layers, Boxes, FileCheck, ShieldAlert, FormInput, Lock, 
  CreditCard, Mail, ClipboardList, Settings, Check, Copy, 
  ArrowRight, MousePointer2, Zap, XCircle, Search, Save
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
    <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm relative group w-full">
      {title && (
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2.5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 grayscale opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-2">{title}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">{language}</span>
        </div>
      )}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button onClick={handleCopy} className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-emerald-500 hover:text-white transition-all border border-gray-700 shadow-lg" title="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono bg-[#0d1117] text-emerald-300 leading-relaxed rounded-b-xl">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Flow Step ───────────────────────────────────────────────────────────────
const FlowStep = ({ step, label, color, description }: { step: number; label: string; color: string; description: string }) => (
  <div className="flex flex-col items-center relative flex-1 text-center">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-xl transform hover:scale-110 transition-transform mb-4 ${color}`}>
      {step}
    </div>
    <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-1">{label}</h4>
    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium leading-tight max-w-[140px]">{description}</p>
    {step < 3 && (
      <div className="hidden lg:flex absolute top-7 -right-1/2 transform translate-x-1/2 w-full h-[2px] bg-dashed-border -z-10">
      </div>
    )}
  </div>
);

// ─── Interactive Validation Sandbox ──────────────────────────────────────────
const ValidationSandbox = () => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Simulated validity state for visualization
  const getValidity = (val: string, type: 'text' | 'email' | 'number') => {
    if (!val) return { missing: true, short: false, type: false, valid: false };
    if (type === 'text') return { missing: false, short: val.length < 3, type: false, valid: val.length >= 3 };
    if (type === 'email') return { missing: false, short: false, type: !val.includes('@'), valid: val.includes('@') };
    if (type === 'number') {
      const n = parseInt(val);
      return { missing: false, range: n < 1 || n > 10, valid: n >= 1 && n <= 10 };
    }
    return { valid: true };
  };

  const textV = getValidity(value, 'text');
  const emailV = getValidity(email, 'email');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 flex gap-2">
         <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3" /> Live Validator
         </div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
        <FormInput className="w-6 h-6 text-emerald-500" /> Interactive Input Sandbox
      </h3>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Text Input */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase">
               <span>Username (min: 3 chars)</span>
               {value && (textV.valid ? <span className="text-emerald-500">Valid</span> : <span className="text-rose-500">Invalid</span>)}
            </div>
            <input 
              type="text" 
              required 
              minLength={3}
              placeholder="Enter name..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full px-5 py-4 rounded-2xl border-2 outline-none transition-all font-medium ${
                !value ? 'border-gray-200 dark:border-gray-700' : 
                textV.valid ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10' : 
                'border-rose-500 bg-rose-50/50 dark:bg-rose-900/10'
              } dark:bg-gray-900 dark:text-white`}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase">
               <span>Email Address</span>
               {email && (emailV.valid ? <span className="text-emerald-500">Valid</span> : <span className="text-rose-500">Format Error</span>)}
            </div>
            <input 
              type="email" 
              required 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-5 py-4 rounded-2xl border-2 outline-none transition-all font-medium ${
                !email ? 'border-gray-200 dark:border-gray-700' : 
                emailV.valid ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10' : 
                'border-rose-500 bg-rose-50/50 dark:bg-rose-900/10'
              } dark:bg-gray-900 dark:text-white`}
            />
          </div>

          <button className="w-full py-4 bg-gray-900 dark:bg-white dark:text-black text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
            <FileCheck className="w-4 h-4" /> Submit Form
          </button>
        </div>

        {/* Real-time Validity Object Visualization */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-white/5 shadow-inner">
           <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Internal Validity State</span>
              <Terminal className="text-emerald-500 w-4 h-4" />
           </div>

           <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4">
                 <div className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">input.validity Object Explorer</div>
                 
                 <div className="grid grid-cols-1 gap-2">
                    {[
                      { key: 'valueMissing', active: !value, label: 'Value is missing' },
                      { key: 'tooShort', active: value.length > 0 && value.length < 3, label: 'Content is too short' },
                      { key: 'typeMismatch', active: email.length > 0 && !email.includes('@'), label: 'Type format mismatch' },
                      { key: 'valid', active: textV.valid && emailV.valid, label: 'Form is overall VALID' }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${item.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800/30 text-slate-600 border border-transparent'}`}>
                         <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`}></div>
                         <div className="flex-1 flex justify-between">
                            <span>.{item.key}</span>
                            <span className="font-bold">{item.active ? 'true' : 'false'}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-relaxed italic px-2">
                <strong>Mechanism:</strong> The browser maintains a <code>ValidityState</code> object for every input. CSS selectors like <code>:invalid</code> react to these properties automatically.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const WebValidationApi: React.FC = () => {
  return (
    <div className="p-4 sm:p-10 bg-[#fdfdff] dark:bg-[#0a0c10] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-emerald-100 selection:text-emerald-700 dark:selection:bg-emerald-900/40">
      
      {/* ── Hero Header ── */}
      <header className="max-w-5xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-[2.5rem] mb-10 shadow-2xl shadow-emerald-500/20 transform hover:rotate-6 transition-all duration-500">
          <ShieldCheck className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-none uppercase">
          Validation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">API</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Built-in browser constraints for bulletproof forms. Validate inputs effortlessly using HTML attributes and powerful JS methods.
        </p>
      </header>

      {/* ── 1. What is Web Validation ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
            <Info className="w-4 h-4" /> The Definition
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            Native Constraints <br /> & Input Guardrails
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            The Web Validation API (also known as the <strong>Constraint Validation API</strong>) is a set of browser properties and methods that allow you to validate HTML form inputs without relying entirely on third-party libraries or massive amounts of custom code.
          </p>

          <div className="p-6 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-slate-800 text-white shadow-xl flex items-start gap-4">
             <Zap className="text-emerald-400 w-8 h-8 flex-shrink-0 mt-1" />
             <div>
                <span className="text-emerald-400 font-black uppercase text-xs tracking-widest block mb-1">Simple Concept</span>
                <p className="text-sm font-medium text-slate-300">
                   "It is a browser-based API that automatically checks form inputs using standard HTML attributes and provides JavaScript hooks to control the behavior."
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4">
           {[
             { border: 'border-rose-200 dark:border-rose-900/30', bg: 'bg-rose-50 dark:bg-rose-950/20', icon: '❌', title: 'The Chaos', items: ['Invalid submissions', 'Backend errors', 'Frustrated users 😓'] },
             { border: 'border-emerald-200 dark:border-emerald-900/30', bg: 'bg-emerald-50 dark:bg-emerald-950/20', icon: '✅', title: 'The Order', items: ['Instant feedback ⚡', 'Clean data only', 'Premium UX 😎'] }
           ].map((card, idx) => (
             <div key={idx} className={`p-8 rounded-[3rem] border-2 shadow-sm ${card.border} ${card.bg}`}>
                <div className="text-3xl mb-4">{card.icon}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-lg mb-4">{card.title}</h4>
                <ul className="space-y-3">
                   {card.items.map((item, i) => (
                     <li key={i} className="text-xs font-bold opacity-60 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-current"></div> {item}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </section>

      {/* ── 3. How It Works ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-white dark:bg-gray-800 rounded-[3.5rem] p-10 lg:p-16 border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="text-3xl font-black text-center mb-2">The Three Pillars</h3>
            <p className="text-center text-gray-500 dark:text-gray-400 font-medium mb-16">How a simple attribute becomes a powerful validation rule.</p>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-between relative">
              <FlowStep 
                step={1} 
                label="HTML Rules" 
                color="bg-emerald-500" 
                description="Add validation attributes like 'required' or 'min' to inputs." 
              />
              <FlowStep 
                step={2} 
                label="Browser Check" 
                color="bg-teal-500" 
                description="The browser automatically monitors constraints in real-time." 
              />
              <FlowStep 
                step={3} 
                label="JS Control" 
                color="bg-slate-900" 
                description="Extend or block validation using JS methods and events." 
              />
            </div>
         </div>
      </section>

      {/* ── 4. Basic Attributes ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-10">
         <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-black flex items-center gap-3">
              <Layers className="text-emerald-500 w-10 h-10" /> HTML Logic
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              Standard validation starts in your markup. No script needed for basic checks.
            </p>

            <CodeBlock 
              title="Standard HTML Inputs"
              language="html"
              code={`<form>
  <!-- Mandatory field -->
  <input type="text" required>

  <!-- Format specific -->
  <input type="email" required>

  <!-- Range limits -->
  <input type="number" min="1" max="10">

  <!-- Length limits -->
  <input type="password" minlength="6">
</form>`}
            />
         </div>

         <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-50 dark:border-gray-700 rounded-[3rem] p-8 shadow-xl overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-emerald-500">
                  <ClipboardList className="w-48 h-48" />
               </div>
               <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-8 border-b dark:border-gray-700 pb-4">Required Attribute Map</h4>
               
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { attr: 'required', purpose: 'Field must be filled', icon: '📝' },
                    { attr: 'min / max', purpose: 'Range validation for numbers', icon: '📏' },
                    { attr: 'minlength', purpose: 'Minimum characters check', icon: '🔤' },
                    { attr: 'pattern', purpose: 'Custom regex validation', icon: '🔍' },
                    { attr: 'type=email', purpose: 'Auto format verification', icon: '📧' }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-5 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors group">
                       <span className="text-2xl group-hover:scale-125 transition-transform">{row.icon}</span>
                       <div className="flex-1">
                          <code className="text-sm font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter block mb-0.5">{row.attr}</code>
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{row.purpose}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── INTERACTIVE SANDBOX ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <ValidationSandbox />
      </section>

      {/* ── 5. JS Validation Methods ── */}
      <section className="max-w-6xl mx-auto mb-24">
         <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-[4rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -m-10 opacity-5">
               <CodeXml className="w-80 h-80" />
            </div>
            
            <div className="max-w-3xl relative z-10">
               <h2 className="text-4xl font-black mb-10 flex items-center gap-4">
                  <Terminal className="text-emerald-400" /> JavaScript Power Tools
               </h2>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { method: 'checkValidity()', desc: 'Returns true if input follows all rules.', icon: <CheckCircle className="text-emerald-400" /> },
                    { method: 'reportValidity()', desc: 'Checks and triggers the error popup.', icon: <ShieldAlert className="text-teal-400" /> },
                    { method: 'setCustomValidity()', desc: 'Sets a custom message for failures.', icon: <AlertCircle className="text-sky-400" /> }
                  ].map((m, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
                       <div className="mb-4">{m.icon}</div>
                       <h4 className="font-mono text-sm font-black mb-2">{m.method}</h4>
                       <p className="text-xs text-slate-400 font-medium leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
               </div>

               <CodeBlock 
                 title="The Modern Handshake (HTML + JS)"
                 language="javascript"
                 code={`const form = document.getElementById("form");
const input = document.getElementById("username");

form.addEventListener("submit", function(e) {
    if (!input.checkValidity()) {
        e.preventDefault(); // Stop submission
        
        // 1. Define custom logic
        input.setCustomValidity("Min 3 letters required!");
        
        // 2. Trigger browser visual
        input.reportValidity();
    } else {
        // IMPORTANT: Clear message to unblock submission!
        input.setCustomValidity(""); 
    }
});`}
               />
            </div>
         </div>
      </section>

      {/* ── 8 & 9. Validity State & CSS ── */}
      <section className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <h3 className="text-3xl font-black flex items-center gap-3">
               <Boxes className="text-teal-500" /> ValidityState Object
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
               Every input gives you deep insight into exactly why it failed via the <code>.validity</code> object.
            </p>
            
            <div className="space-y-3">
               {[
                 { key: 'valueMissing', label: 'Field is empty but required' },
                 { key: 'typeMismatch', label: 'Does not match type (email/tel)' },
                 { key: 'tooShort', label: 'Length < minlength attribute' },
                 { key: 'rangeUnderflow', label: 'Value is below the min attribute' },
                 { key: 'patternMismatch', label: 'Regex pattern does not match' }
               ].map((v, i) => (
                 <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm group">
                    <code className="text-xs font-black text-teal-600 group-hover:translate-x-1 transition-transform">.{v.key}</code>
                    <span className="text-[10px] uppercase font-black text-gray-400">{v.label}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <h3 className="text-3xl font-black flex items-center gap-3">
               <Zap className="text-emerald-500" /> CSS Styling
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
               Style your inputs dynamicallly using the native validation selectors.
            </p>
            
            <CodeBlock 
              title="Auto-styling Inputs"
              language="css"
              code={`/* Red border when invalid */
input:invalid {
  border: 2px solid #ef4444;
  background-color: #fef2f2;
}

/* Green border when valid */
input:valid {
  border: 2px solid #10b981;
  background-color: #ecfdf5;
}`}
            />

            <div className="p-6 rounded-3xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 flex items-start gap-4">
               <Info className="text-indigo-500 w-5 h-5 flex-shrink-0 mt-1" />
               <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300 leading-relaxed">
                  <strong>Pro Tip:</strong> By default, inputs are <code>:invalid</code> if empty but <code>required</code>. Use <code>:placeholder-shown</code> to hide styles until the user starts typing.
               </p>
            </div>
         </div>
      </section>

      {/* ── 10. Real World Use Cases ── */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-center mb-12">Practical Deployment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'Auth Systems', icon: Lock, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/20', desc: 'Secure passwords and unique logins.' },
             { title: 'Checkout', icon: CreditCard, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-950/20', desc: 'Validating CVV, numbers and dates.' },
             { title: 'Inquiries', icon: Mail, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', desc: 'Ensuring contact info is formatted right.' },
             { title: 'Registration', icon: ClipboardList, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-950/20', desc: 'Gathering structured user data reliably.' },
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-[3.5rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className={`w-14 h-14 rounded-[1.5rem] ${item.bg} flex items-center justify-center mb-6`}>
                   <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── 11 & 12. Pro Tips & Mistakes ── */}
      <section className="max-w-5xl mx-auto mb-24 space-y-12">
         <div className="relative p-10 lg:p-16 rounded-[4rem] bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-48 h-48 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-100 mb-8 flex items-center gap-4">
              <Zap className="text-emerald-500" /> Expert Protocols
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { tip: 'Hybrid Approach', body: 'Use HTML for simple rules, JS for custom complex logic.' },
                 { tip: 'Backend Sync', body: 'FRONTEND is not security! Always re-validate on the server.' },
                 { tip: 'Regex Power', body: 'Use the pattern attribute for strict formats like Zip codes.' },
                 { tip: 'Reset Messages', body: 'Always setCustomValidity("") before new checks, or form blocks.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-black text-emerald-600 text-xs flex-shrink-0">
                       {i+1}
                    </div>
                    <div>
                       <h5 className="font-black text-emerald-900 dark:text-emerald-200 text-sm mb-1">{item.tip}</h5>
                       <p className="text-xs text-emerald-700/60 dark:text-emerald-400/60 font-medium">{item.body}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trusting Client Only', body: 'Malicious users can bypass browser validation.' },
              { title: 'Blocking Silently', body: 'Users must see why a form wont submit.' },
              { title: 'Over-Scripting', body: 'Dont use JS for what "required" can do alone.' },
              { title: 'Ignoring Edge Cases', body: 'Test with strange symbols and long strings.' }
            ].map((err, i) => (
              <div key={i} className="p-6 rounded-[2rem] bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
                 <h6 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-3">Fatal Error {i+1}</h6>
                 <h5 className="font-black text-rose-800 dark:text-rose-200 text-sm mb-2 leading-tight">{err.title}</h5>
                 <p className="text-[10px] text-rose-600/60 dark:text-rose-400/60 font-bold leading-relaxed">{err.body}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ── Summary Footer ── */}
      <footer className="max-w-6xl mx-auto mb-20">
         <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h2 className="text-4xl font-black text-white mb-6 relative z-10">Bulletproof Your Forms</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-bold relative z-10">
               Combine native browser speed with custom JavaScript logic to build user-friendly, high-performance web forms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
               <div className="px-8 py-3 bg-emerald-500 text-white rounded-full font-black text-sm hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-emerald-500/20">View API Reference</div>
               <div className="px-8 py-3 border border-slate-700 text-white rounded-full font-black text-sm hover:bg-slate-800 transition-all cursor-pointer">Start Building</div>
            </div>
         </div>
      </footer>

      {/* Custom styles */}
      <style>{`
        .bg-dashed-border {
          background-image: linear-gradient(to right, #cbd5e1 50%, transparent 50%);
          background-size: 20px 2px;
          background-repeat: repeat-x;
        }
        .dark .bg-dashed-border {
          background-image: linear-gradient(to right, #334155 50%, transparent 50%);
        }
      `}</style>

    </div>
  );
};

export default WebValidationApi;