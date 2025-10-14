import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  MousePointer2, Maximize, Minus, Ban, Hand
} from 'lucide-react';

// --- Reusable Components (Copied from established pattern) ---

const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
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
                 if (part.match(/^(class|id|style)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|span|button|textarea)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mr-4`}>
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

const CssUserInterface = () => {
  const [resizeValue, setResizeValue] = useState('both');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-50 dark:from-slate-900 dark:via-cyan-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl mb-8">
            <MousePointer2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-500 mb-6 leading-tight">
            CSS User Interface
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Control UI properties like the cursor's appearance, element resizing, and text selection behavior.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Core UI Properties
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="cursor"
              icon={MousePointer2}
              color="text-cyan-500"
              description="Changes the mouse pointer's appearance when it hovers over an element. Common values include `pointer` (for links/buttons), `wait`, `not-allowed`, and `grab`."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.clickable {\n  cursor: pointer;\n}\n\n.disabled {\n  cursor: not-allowed;\n}`}/>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="resize"
              icon={Maximize}
              color="text-green-500"
              description="Allows the user to resize an element. This property only works on elements with `overflow` set to something other than `visible` (like `auto`, `scroll`, or `hidden`). It's commonly used on `<textarea>` elements."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.resizable-box {\n  overflow: auto;\n  resize: both; /* horizontal | vertical | both | none */\n}`}/>
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="user-select"
              icon={Hand}
              color="text-blue-500"
              description="Controls whether the user can select the text within an element. Setting it to `none` can be useful for preventing text selection on interactive UI elements like buttons or custom controls."
            >
              <InteractiveCodeBlock language="css" title="CSS" code={`.no-select {\n  user-select: none;\n  -webkit-user-select: none; /* For Safari */\n}`}/>
            </LessonPropertyCard>

            <LessonPropertyCard
              title="pointer-events"
              icon={Ban}
              color="text-red-500"
              description="Defines whether an element can be the target of mouse events. Setting it to `none` makes the element 'unclickable'—mouse events will pass right through it to whatever is underneath. This is useful for disabling elements or for decorative overlays."
            >
                <InteractiveCodeBlock language="css" title="CSS" code={`.disabled-link {\n  pointer-events: none;\n  opacity: 0.5;\n}`}/>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox - `resize`
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-lg">Use the radio buttons to change the `resize` property on the textarea. Note that `resize` requires `overflow` to be set to a value other than `visible`.</p>
                    <div>
                      {['both', 'horizontal', 'vertical', 'none'].map(val => (
                        <label key={val} className="flex items-center space-x-2 mb-2">
                          <input type="radio" name="resize" value={val} checked={resizeValue === val} onChange={e => setResizeValue(e.target.value)} />
                          <span>{val}</span>
                        </label>
                      ))}
                    </div>
                    <InteractiveCodeBlock title="Live CSS" code={`textarea {\n  overflow: auto;\n  resize: ${resizeValue};\n}`} />
                </div>
                <div className="p-6 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <textarea 
                      className="w-48 h-32 p-2 border border-slate-400 rounded-lg" 
                      style={{ overflow: 'auto', resize: resizeValue }} 
                      defaultValue="Resize me..."
                    />
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: UI Properties Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now have fine-grained control over how users interact with your site's elements, leading to a more intuitive and polished experience.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssUserInterface;
