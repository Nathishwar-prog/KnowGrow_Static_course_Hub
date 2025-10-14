import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  FileImage, Gauge, Layers
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
      <pre className="text-sm lg:text-base">
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
                 if (part.match(/^(class|href|id|src|alt)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|img|div|span)$/)) {
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

const LessonExampleCard = ({ title, icon: Icon, color, description, htmlCode, cssCode, children }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {htmlCode && <InteractiveCodeBlock code={htmlCode} title="HTML Structure" language="html" />}
        {cssCode && <InteractiveCodeBlock code={cssCode} title="CSS Styling" language="css" />}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Visual Example:</h4>
        <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
            {children}
        </div>
      </div>
    </div>
  );
// --- End Reusable Components ---

const CssImageSprites = () => {

  const spriteSheetUrl = 'https://placehold.co/300x100/E5E7EB/334155?text=A+B+C';

  // Styles for the live demo
  const spriteStyles = `
    .sprite-icon {
        background-image: url('${spriteSheetUrl}');
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        border: 2px dashed #94a3b8;
    }
    .icon-a { background-position: 0 0; }
    .icon-b { background-position: -100px 0; }
    .icon-c { background-position: -200px 0; }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 dark:from-slate-900 dark:via-orange-900/10 dark:to-slate-900">
      <style>{spriteStyles}</style>
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 shadow-2xl mb-8">
            <Layers className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 mb-6 leading-tight">
            CSS Image Sprites
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            An essential performance technique for combining multiple images into a single file to save load time.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Gauge className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Concept (Performance First)
            </h2>
          </div>
           <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              An image sprite is a single image file containing multiple smaller graphics arranged in a grid. Instead of loading ten separate 5kb icons, you load one 50kb image. The key benefit is performance:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-slate-700 dark:text-slate-200">
              <li><strong>Fewer HTTP Requests:</strong> Every file a browser requests adds overhead. One request is always faster than many, dramatically speeding up initial page load.</li>
              <li><strong>Faster Loading for Hover States:</strong> Prevents the "flicker" on first hover, as the hover state image is already loaded within the same sprite file.</li>
            </ul>
             <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We use CSS `background-position` to show only the desired portion of the sprite image for each element.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-orange-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Practical Implementation
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
             <LessonExampleCard 
                title="Creating Icons from a Sprite Sheet"
                icon={FileImage}
                color="text-orange-600"
                description="First, create a sprite sheet (a single image with all your icons). Then, use a shared CSS class to apply the image as a background and set the icon dimensions. Finally, use unique classes to shift the `background-position` for each icon."
                htmlCode={`<!-- Each div is an icon -->\n<div class="sprite-icon icon-a"></div>\n<div class="sprite-icon icon-b"></div>\n<div class="sprite-icon icon-c"></div>`}
                cssCode={`/* Shared properties */\n.sprite-icon {\n  background-image: url('sprite.png');\n  width: 100px;\n  height: 100px;\n}\n\n/* Unique positions */\n.icon-a { background-position: 0 0; }\n.icon-b { background-position: -100px 0; }\n.icon-c { background-position: -200px 0; }`}
            >
                <div>
                    <p className="text-center text-slate-600 dark:text-slate-400 font-semibold mb-2">The Full Sprite Sheet (One HTTP Request):</p>
                    <img src={spriteSheetUrl} alt="Sprite Sheet" className="mx-auto border-4 border-slate-300 dark:border-slate-600 rounded-md shadow-md"/>
                    <p className="text-center text-slate-600 dark:text-slate-400 font-semibold mt-6 mb-2">Resulting "Icons":</p>
                    <div className="flex justify-center items-center gap-4">
                        <div className="sprite-icon icon-a"></div>
                        <div className="sprite-icon icon-b"></div>
                        <div className="sprite-icon icon-c"></div>
                    </div>
                </div>
            </LessonExampleCard>
          </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Image Sprites Understood!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              While modern tools like SVG icons are often preferred, understanding sprites is a key skill for optimizing older sites or icon-heavy projects.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssImageSprites;
