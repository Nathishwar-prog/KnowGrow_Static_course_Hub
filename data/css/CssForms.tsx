import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  ClipboardEdit, Type, MousePointerClick, Focus
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'html', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg-text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#"'])/g).map((part, j) => {
                if (part.includes('/*') || part.includes('*/') || part.includes('<!--') || part.includes('-->')) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(<[\/]?[\w-]+)$/)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>;
                }
                 if (part.match(/^(class|href|id|src|alt|for|type|name|placeholder|rows)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|form|input|label|textarea|button|:hover|:focus)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>;
                }
                return <span key={j} className="text-slate-300">{part}</span>;
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

const LessonPropertyCard = ({ title, icon: Icon, color, description, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      {children}
    </div>
  );
// --- End Reusable Components ---

const CssForms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:from-slate-900 dark:via-indigo-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl mb-8">
            <ClipboardEdit className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-6 leading-tight">
            CSS Forms
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master the art of styling user-friendly and visually appealing HTML forms.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core Form Styling Concepts
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Styling Inputs and Textareas"
              icon={Type}
              color="text-indigo-500"
              description="Form inputs are the foundation. Key properties include `width`, `padding` for spacing, `border` for definition, `border-radius` for softening edges, and `font-size` for readability. A `width: 100%` is common for responsive layouts."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`input[type="text"],\ntextarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  font-size: 16px;\n  box-sizing: border-box; /* Important! */\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Styling Buttons"
              icon={MousePointerClick}
              color="text-pink-500"
              description="Buttons must look clickable. Use `background-color`, `color`, `padding`, and `border` to give them a clear visual identity. Set `cursor: pointer` to provide the universal hand icon on hover. Use the `:hover` pseudo-class for feedback."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`button {\n  background-color: #4f46e5; /* Indigo */\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #4338ca;\n}`}
              />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="Styling with the :focus Pseudo-class"
              icon={Focus}
              color="text-amber-500"
              description="Focus states are crucial for accessibility, showing users which field is active. The `:focus` pseudo-class lets you change styles (like `outline` or `border-color`) when a user clicks or tabs into an input."
            >
                <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`input:focus,\ntextarea:focus {\n  border-color: #4f46e5; /* Highlight with brand color */\n  outline: 2px solid #4f46e5;\n  box-shadow: 0 0 8px rgba(79, 70, 229, 0.5);\n}`}
              />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Visual Showcase - A Complete Form
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                    <InteractiveCodeBlock title="HTML Structure" code={`<form class="styled-form">\n  <div class="form-group">\n    <label for="name">Name</label>\n    <input type="text" id="name" name="name" placeholder="Enter your name">\n  </div>\n\n  <div class="form-group">\n    <label for="email">Email</label>\n    <input type="email" id="email" name="email" placeholder="Enter your email">\n  </div>\n\n  <div class="form-group">\n    <label for="message">Message</label>\n    <textarea id="message" name="message" rows="5" placeholder="Your message..."></textarea>\n  </div>\n\n  <button type="submit">Submit</button>\n</form>`}/>
                    <InteractiveCodeBlock title="Complete CSS" code={`.styled-form {\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #334155;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);\n}\n\nbutton {\n  width: 100%;\n  padding: 15px;\n  background: #6366f1;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}\n`}/>
                </div>

                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                    <h3 className="text-xl font-bold text-center mb-6 text-slate-800 dark:text-slate-200">Live Demo</h3>
                    <form className="max-w-md mx-auto">
                      <div className="mb-6">
                          <label htmlFor="demo-name" className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">Name</label>
                          <input type="text" id="demo-name" placeholder="Your name" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="demo-email" className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">Email</label>
                          <input type="email" id="demo-email" placeholder="Your email" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="demo-message" className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">Message</label>
                          <textarea id="demo-message" rows="5" placeholder="Type your message..." className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
                      </div>
                      <button type="button" className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Forms Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have the power to transform plain HTML forms into engaging, professional, and user-friendly interfaces.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssForms;
