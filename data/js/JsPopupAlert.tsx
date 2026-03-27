import React, { useState } from 'react';
import {
  Zap,
  Activity,
  Terminal,
  Info,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Package,
  List,
  Binary,
  Box,
  Search,
  BookOpen,
  Grid,
  ShieldCheck,
  MousePointer2,
  Database,
  Repeat,
  Lightbulb,
  Plus,
  ArrowRight,
  Code2,
  Layers,
  Eye,
  Settings,
  Sparkles,
  HelpCircle,
  Download,
  Maximize,
  Anchor,
  Globe,
  Star,
  ShieldAlert,
  Hash,
  TextCursor,
  CirclePlay,
  Scissors,
  Table,
  Cpu,
  Workflow,
  ClipboardList,
  CircleSlash,
  Target,
  MessageSquare,
  UserCheck,
  XCircle,
  History,
  Layout,
  MessageCircle,
  ShieldQuestion,
  Pointer,
  Monitor,
  Flame
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
        <div className="bg-[#252526] px-4 py-3 border-b border-gray-800 flex justify-between items-center text-white/90">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] font-sans italic">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 transition-colors"
            title="Copy code"
          >
            {copied ? <CheckCircle size={14} className="text-green-400" /> : <Package size={14} />}
          </button>
        </div>
      )}
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 font-medium font-sans border-transparent">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, subtitle, color = 'text-amber-500' }: { icon: any; title: string; subtitle?: string; color?: string }) => (
  <div className="mb-8 font-sans border-transparent">
    <h2 className="text-3xl font-black flex items-center text-gray-900 dark:text-white mb-2 tracking-tight italic border-transparent underline decoration-transparent">
      <div className={`p-2.5 rounded-2xl bg-white dark:bg-gray-800 mr-4 shadow-xl border border-gray-100 dark:border-gray-700 ${color} border-transparent`}>
        <Icon size={28} />
      </div>
      {title}
    </h2>
    {subtitle && <p className="text-gray-500 dark:text-gray-400 ml-16 font-medium leading-relaxed italic border-transparent border-transparent">{subtitle}</p>}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const JsPopupAlert: React.FC = () => {
  const [simMessage, setSimMessage] = useState<string | null>(null);

  const triggerAlert = () => alert("Welcome, Issac!");
  const triggerConfirm = () => {
    const res = confirm("Are you sure you want to delete?");
    setSimMessage(res ? "Action Confirmed" : "Action Cancelled");
  };
  const triggerPrompt = () => {
    const name = prompt("Enter your name:");
    setSimMessage(name ? `Hello ${name}!` : "No Name Entered");
  };

  return (
    <div className="p-4 sm:p-10 bg-[#f8fafc] dark:bg-[#020617] min-h-screen font-sans selection:bg-amber-500/30 overflow-x-hidden text-gray-900 dark:text-white border-transparent border-transparent">

      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 border-transparent">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] border-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] border-transparent"></div>
      </div>

      {/* ── Hero Header ── */}
      <header className="max-w-6xl mx-auto text-center mb-24 relative italic border-transparent border-transparent">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 text-[10px] font-black mb-8 border border-amber-100 dark:border-amber-900/50 shadow-xl shadow-amber-500/5 animate-pulse tracking-[0.2em] italic border-transparent">
          <Monitor size={14} className="fill-current" /> BROWSER UI DIALOGS
        </div>
        <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter leading-[0.9] italic underline decoration-transparent border-transparent">
          JS Popup <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-rose-600 drop-shadow-2xl font-sans italic border-transparent">
            Alerts
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed italic border-transparent border-transparent">
          Master the built-in browser dialog boxes used to <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">display warnings</span>, <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">confirm actions</span>, and <span className="text-gray-900 dark:text-white font-bold underline decoration-amber-500/30">request data</span> from the user.
        </p>
      </header>

      {/* ── Section 1: Intro ── */}
      <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-12 items-center italic border-transparent border-transparent">
        <div className="space-y-8 italic border-transparent">
          <SectionHeader icon={Info} title="1. What are Popup Alerts?" subtitle="Browser-native interaction modals." color="text-amber-500" />
          <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-10 relative overflow-hidden group italic border-transparent border-transparent">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 rotate-12 italic border-transparent border-transparent">
               <MessageSquare size={180} />
            </div>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 italic leading-relaxed font-sans italic border-transparent underline decoration-transparent">
              "Popup alerts are standard dialog boxes provided by the browser environment. They are part of the 'window' object and are primarily used for quick user notifications and simple confirmation checks."
            </p>
            <div className="grid grid-cols-3 gap-4 italic border-transparent">
               {[
                 { label: "Messages", icon: MessageCircle },
                 { label: "Input", icon: TextCursor },
                 { label: "Confirm", icon: CheckCircle }
               ].map((cat, i) => (
                 <div key={i} className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-3xl group transition-all hover:scale-105 flex flex-col items-center gap-3 italic border-transparent">
                    <div className="text-amber-500 italic"><cat.icon size={20} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white italic underline decoration-transparent text-center">{cat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 italic border-transparent">
           <SectionHeader icon={Table} title="2. Types of Popups" subtitle="The complete built-in command set." color="text-orange-500" />
           <div className="p-8 bg-gray-950 rounded-[4rem] border border-white/5 relative group overflow-hidden shadow-2xl italic border-transparent">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 transition-transform duration-[2000ms] italic border-transparent">
                 <Grid size={300} className="text-amber-500" />
              </div>
              <div className="relative z-10 overflow-x-auto text-[10px] italic border-transparent">
                 <table className="w-full text-left italic">
                    <thead>
                       <tr className="border-b border-white/10 uppercase tracking-[0.2em] italic font-black text-gray-500">
                          <th className="py-4 px-4">Method</th>
                          <th className="py-4 px-4 text-amber-500">Purpose</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono italic">
                       {[
                         { m: "alert()", p: "Show simple message" },
                         { m: "confirm()", p: "Ask Yes/No question" },
                         { m: "prompt()", p: "Retrieve user input" }
                       ].map((row, i) => (
                         <tr key={i} className="hover:bg-white/5 transition-all group/row italic">
                            <td className="py-5 px-4 font-black text-amber-500 text-lg italic border-transparent underline decoration-transparent">{row.m}</td>
                            <td className="py-5 px-4 text-gray-400 font-medium italic underline decoration-transparent border-transparent">{row.p}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: alert() Method ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
         <div className="grid lg:grid-cols-2 gap-12 items-center italic border-transparent">
            <div className="space-y-8 italic border-transparent">
               <SectionHeader icon={Info} title="3. alert() Method" subtitle="Simple notification delivery." color="text-amber-600" />
               <p className="text-gray-500 font-medium italic underline decoration-transparent italic border-transparent">"Displays a static message box with a single 'OK' button. It's used for important notifications or basic debugging."</p>
               <CodeBlock title="alert() Usage" code={`alert("Hello World!");\n// Output: Message box with OK button`} />
            </div>
            <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl italic group border-transparent">
               <h4 className="text-2xl font-black italic mb-6 flex items-center gap-3 italic border-transparent decoration-transparent underline underline decoration-transparent italic">
                  <Flame size={20} className="text-orange-500" /> Used For:
               </h4>
               <ul className="space-y-4 text-gray-400 font-medium italic italic border-transparent">
                  <li className="flex items-center gap-4 italic border-transparent">
                     <div className="w-2 h-2 rounded-full bg-amber-500"></div> System Notifications
                  </li>
                  <li className="flex items-center gap-4 italic border-transparent">
                     <div className="w-2 h-2 rounded-full bg-amber-500"></div> User Warnings
                  </li>
                  <li className="flex items-center gap-4 italic border-transparent">
                     <div className="w-2 h-2 rounded-full bg-amber-500"></div> Basic Variable Debugging
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* ── Section 3: confirm() & prompt() ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-8 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={ShieldQuestion} title="4. confirm() Method" subtitle="Ask for binary user consent." color="text-orange-500" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group overflow-hidden relative italic border-transparent">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.02] border-transparent"><Target size={150} /></div>
                 <CodeBlock title="confirm() Result" code={`let res = confirm("Delete this file?");\nconsole.log(res);\n\n// true  (OK)\n// false (Cancel)`} />
              </div>
           </div>

           <div className="space-y-8 italic border-transparent border-transparent">
              <SectionHeader icon={TextCursor} title="5. prompt() Method" subtitle="Capture user-typed strings." color="text-rose-500" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 group overflow-hidden relative italic border-transparent">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.02] border-transparent"><Pointer size={150} /></div>
                 <CodeBlock title="prompt() Input" code={`let name = prompt("Enter name:");\nconsole.log(name);\n\n// Returns string or null`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 4: Visual Lifecycle Simulator ── */}
      <section className="max-w-6xl mx-auto mb-32 relative group font-sans italic border-transparent border-transparent">
        <SectionHeader icon={Eye} title="6. Popup Interaction Visual" subtitle="Triggering native browser components." color="text-amber-500" />
        
        <div className="p-1 sm:p-2 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-[4rem] italic border-transparent border-transparent decoration-transparent border-transparent">
          <div className="bg-white dark:bg-gray-950 rounded-[3.8rem] p-10 md:p-20 shadow-inner italic overflow-hidden relative italic border-transparent border-transparent decoration-transparent border-transparent">
             <div className="grid lg:grid-cols-2 gap-16 items-center italic border-transparent border-transparent decoration-transparent border-transparent">
                <div className="space-y-8 italic border-transparent border-transparent">
                   <div className="space-y-4 italic border-transparent border-transparent">
                      <h3 className="text-4xl font-black italic tracking-tighter leading-tight italic border-transparent border-transparent underline decoration-transparent">Trigger Simulator</h3>
                      <p className="text-gray-500 font-medium italic underline decoration-gray-500/10 italic border-transparent border-transparent decoration-transparent border-transparent">Click the buttons to activate the browser's native popup methods.</p>
                   </div>
                   
                   <div className="flex flex-col gap-4 italic border-transparent border-transparent border-transparent">
                      <button onClick={triggerAlert} className="py-4 bg-amber-500 text-white rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg shadow-amber-500/20 active:scale-95 transition-all italic flex items-center justify-center gap-3 border-transparent">
                         <MessageCircle size={16} /> TRIGGER ALERT()
                      </button>
                      <button onClick={triggerConfirm} className="py-4 bg-orange-500 text-white rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg shadow-orange-500/20 active:scale-95 transition-all italic flex items-center justify-center gap-3 border-transparent">
                         <ShieldQuestion size={16} /> TRIGGER CONFIRM()
                      </button>
                      <button onClick={triggerPrompt} className="py-4 bg-rose-500 text-white rounded-2xl font-black italic tracking-widest text-[10px] shadow-lg shadow-rose-500/20 active:scale-95 transition-all italic flex items-center justify-center gap-3 border-transparent">
                         <TextCursor size={16} /> TRIGGER PROMPT()
                      </button>
                   </div>
                </div>

                <div className="relative italic border-transparent border-transparent">
                   <div className="p-12 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative group overflow-hidden text-center min-h-[350px] flex flex-col justify-center italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:rotate-45 transition-transform duration-1000 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <Cpu size={200} className="text-amber-500 italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent" />
                      </div>
                      <div className="relative z-10 space-y-8 uppercase italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent">
                         <div className="space-y-2 italic border-transparent">
                            <span className="text-[10px] font-black italic tracking-[0.3em] text-gray-500 italic border-transparent">Interactive Feedback</span>
                            <div className="text-3xl font-black italic tracking-tight italic border-transparent border-transparent decoration-transparent">
                               {!simMessage ? <span className="text-gray-700 italic border-transparent underline decoration-transparent underline decoration-transparent">Ready to Scan</span> : <span className="text-amber-500 animate-in zoom-in italic border-transparent underline decoration-transparent underline decoration-transparent">{simMessage}</span>}
                            </div>
                         </div>
                         <div className="h-px bg-white/5 w-1/2 mx-auto italic border-transparent border-transparent decoration-transparent border-transparent border-transparent border-transparent border-transparent border-transparent border-transparent"></div>
                         <div className="space-y-4 text-left italic border-transparent border-transparent">
                            {[
                               { l: "alert()", r: "Message Only", c: "text-amber-500" },
                               { l: "confirm()", r: "Yes / No Option", c: "text-orange-500" },
                               { l: "prompt()", r: "Input Box Field", c: "text-rose-500" }
                            ].map((v, i) => (
                               <div key={i} className="flex justify-between items-center italic border-transparent border-transparent">
                                  <span className={`text-[10px] font-mono font-black ${v.c} italic border-transparent underline decoration-transparent`}>{v.l}</span>
                                  <span className="text-[9px] text-gray-500 italic border-transparent underline decoration-transparent">{v.r}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Real Examples & Advanced ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <SectionHeader icon={ShieldCheck} title="7. Industrial Applications" subtitle="Practical code for everyday dev scenarios." color="text-amber-500" />
        <div className="grid md:grid-cols-3 gap-8 italic font-sans italic border-transparent border-transparent">
           {[
             { 
                title: "Welcome Greeter", 
                code: 'alert("Welcome, Issac!");', 
                desc: "Basic message notification on entry." 
             },
             { 
                title: "Delete Logic", 
                code: 'if (confirm("Delete?")) {\n  console.log("Deleted");\n}', 
                desc: "Validating heavy actions before processing." 
             },
             { 
                title: "Ask Identity", 
                code: 'let user = prompt("Name?");\nalert("Hello " + user);', 
                desc: "Quickly capturing and repeating user data." 
             }
           ].map((app, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 p-8 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col italic border-transparent border-transparent decoration-transparent`}>
                 <h4 className={`text-xl font-black italic mb-4 text-amber-500 italic border-transparent underline decoration-transparent`}>📌 {app.title}</h4>
                 <p className="text-gray-500 text-[10px] font-medium mb-6 italic underline decoration-transparent border-transparent">{app.desc}</p>
                 <div className="mt-auto italic border-transparent border-transparent border-transparent">
                    <CodeBlock code={app.code} title={app.title} />
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 p-12 rounded-[4rem] border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden group italic border-transparent border-transparent">
           <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform italic border-transparent border-transparent">
              <Zap size={220} className="text-orange-500 italic border-transparent" />
           </div>
           <SectionHeader icon={Grid} title="8. Advanced Flow Controller" subtitle="Validating and looping through user input." color="text-orange-500" />
           <div className="grid md:grid-cols-2 gap-12 mt-12 italic border-transparent border-transparent">
              <div className="space-y-6 italic border-transparent border-transparent">
                 <h5 className="text-xl font-black italic text-sky-500 italic border-transparent underline decoration-transparent">Input Validation Logic</h5>
                 <CodeBlock code={`let age = prompt("Enter age:");\nif (age >= 18) {\n  alert("Adult");\n} else {\n  alert("Minor");\n}`} />
              </div>
              <div className="space-y-6 italic border-transparent border-transparent">
                 <h5 className="text-xl font-black italic text-fuchsia-500 italic border-transparent underline decoration-transparent">Persistent Capture Loop</h5>
                 <CodeBlock code={`let name;\ndo {\n  name = prompt("Enter your name:");\n} while (!name);\nalert("Welcome " + name);`} />
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 6: Common Mistakes ── */}
      <section className="max-w-6xl mx-auto mb-32 italic border-transparent border-transparent">
        <div className="grid lg:grid-cols-2 gap-12 italic border-transparent border-transparent">
           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={AlertTriangle} title="9. Common UI Mistakes ⚠️" subtitle="Avoid breaking user experience." color="text-rose-500" />
              <div className="bg-rose-500/5 border border-rose-500/10 p-10 rounded-[3.5rem] space-y-8 group overflow-hidden relative italic border-transparent">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-rose-500 rotate-12 italic border-transparent border-transparent">
                    <CircleSlash size={60} />
                 </div>
                 {[
                   { label: "Overusing Alerts", text: "Too many popups create an aggressive and annoying user experience (UX).", icon: XCircle },
                   { label: "Not Handling Cancel", text: "prompt() can return 'null' if the user clicks cancel. Always check for this.", icon: AlertTriangle },
                   { label: "Production Usage", text: "Built-in popups are blocking dialogs. Replace them with custom UI for modern apps.", icon: CircleSlash }
                 ].map((err, i) => (
                    <div key={i} className="flex gap-6 items-start italic border-transparent border-transparent">
                       <div className="p-4 rounded-xl bg-white dark:bg-gray-950 text-rose-500 h-fit italic border-transparent border-transparent shadow shadow-rose-900/5">
                          <err.icon size={20} />
                       </div>
                       <div>
                          <h6 className="text-[11px] font-black text-rose-600 uppercase tracking-widest italic underline decoration-transparent mb-1 italic border-transparent border-transparent">{err.label}</h6>
                          <p className="text-[10px] text-gray-500 font-medium italic underline decoration-rose-500/10 underline decoration-transparent italic border-transparent border-transparent">{err.text}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="space-y-8 italic border-transparent">
              <SectionHeader icon={Lightbulb} title="10. Practitioner Pro Tips" subtitle="Logic from decades of browser engineering." color="text-amber-500" />
              <div className="p-10 bg-white dark:bg-gray-800 rounded-[3.5rem] border border-gray-100 dark:border-gray-700 shadow-xl space-y-8 italic border-transparent">
                 {[
                   { label: "Learning & Debugging Only", text: "Reserve built-in popups for rapid prototyping or basic debugging only.", icon: Binary, color: "text-amber-500" },
                   { label: "Replace with Custom UI", text: "Shift toward toast notifications and modern modal systems for final products.", icon: Layout, color: "text-orange-500" },
                   { label: "Always Check Null", text: "Enforce pattern: if (name !== null) before processing prompt input.", icon: UserCheck, color: "text-rose-500" },
                   { label: "Combine with Conditions", text: "Always wrap confirm() calls in conditional logic to control the execution flow.", icon: ShieldCheck, color: "text-emerald-500" }
                 ].map((tip, i) => (
                    <div key={i} className="flex gap-6 items-start group italic border-transparent border-transparent border-transparent">
                       <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 shadow-sm ${tip.color} group-hover:scale-110 transition-transform italic border-transparent border-transparent shadow-current/5`}>
                          <tip.icon size={20} />
                       </div>
                       <div className="flex flex-col italic border-transparent border-transparent">
                          <h6 className={`text-sm font-black italic underline decoration-transparent ${tip.color} block mb-1 uppercase tracking-widest italic border-transparent`}>🚀 {tip.label}</h6>
                          <p className="text-[10px] text-gray-500 font-medium italic underline decoration-gray-500/10 leading-relaxed font-sans italic border-transparent border-transparent">{tip.text}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 10: Practice Challenges ── */}
      <section className="max-w-6xl mx-auto mb-32 relative italic border-transparent border-transparent">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] -z-10 italic border-transparent border-transparent"></div>
         <SectionHeader icon={Target} title="11. Skills Practice Lab" subtitle="Test your notification and capture understanding." color="text-amber-500" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 italic border-transparent border-transparent">
            {[
               { title: "Age Assessment", desc: "Ask for age and display 'Adult' or 'Minor' result message.", icon: History },
               { title: "Logout Sanity", desc: "Trigger a confirm dialog before allowing a simulated logout.", icon: XCircle },
               { title: "Identified Greet", desc: "Take a username via prompt and trigger an alert greeting.", icon: UserCheck },
               { title: "Persistent Request", desc: "Repeat a prompt request until a non-empty string is provided.", icon: Repeat }
            ].map((tip, i) => (
               <div key={i} className={`p-8 bg-gray-950 rounded-[3rem] border border-white/5 shadow-2xl space-y-4 group relative overflow-hidden italic border-transparent border-transparent decoration-transparent border-transparent`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform italic border-transparent"></div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:bg-white/10 transition-all italic border-transparent">
                     <Target size={20} />
                  </div>
                  <h5 className="text-white font-black italic tracking-tight italic border-transparent underline decoration-transparent">TASK #{i+1}</h5>
                  <p className="text-gray-500 text-[10px] italic leading-tight italic border-transparent border-transparent underline decoration-transparent">{tip.title}</p>
                  <p className="text-gray-600 text-[9px] italic border-transparent border-transparent underline decoration-transparent">{tip.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-4xl mx-auto text-center py-24 relative italic font-sans italic border-transparent border-transparent border-transparent">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10 italic border-transparent"></div>
        <p className="text-3xl font-black text-gray-400 dark:text-gray-600 mb-6 font-mono uppercase tracking-[0.3em] font-sans leading-tight italic border-transparent border-transparent">
          Blocking Interactions. <br /> Essential Debugging Feed.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium italic underline decoration-transparent max-w-2xl mx-auto font-sans leading-relaxed italic border-transparent border-transparent">
          Browser popup alerts are the oldest form of user communication in web history. While modern applications favor custom modals for production, mastering these built-in methods remains essential for rapid prototyping, logic validation, and system-level user alerts.
        </p>
      </footer>

    </div>
  );
};

export default JsPopupAlert;