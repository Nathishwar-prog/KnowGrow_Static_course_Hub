import React, { useState, useMemo } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Paintbrush, Palette, Eye, Copy, Search
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
                 if (part.match(/^(class|id|style|src)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>;
                }
                 if (part.match(/^('|").*('|")$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>;
                }
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|body|button|svg|path|:hover)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mr-4`}>
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

const allColors = [
  'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen',
];


const CssColorKeywords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedColor, setCopiedColor] = useState(null);

  const filteredColors = useMemo(() => 
    allColors.filter(color => color.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm]
  );
  
  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const basicColors = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl mb-8">
            <Paintbrush className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-6 leading-tight">
            CSS Color Keywords
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Explore the built-in named colors available in CSS, from basic keywords to special dynamic values.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Keywords
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="Basic Color Keywords"
              icon={Palette}
              color="text-purple-500"
              description="CSS has a set of 16 basic, case-insensitive color names that are guaranteed to work in all browsers. These are great for quick prototyping and simple styling."
            >
              <InteractiveCodeBlock 
                language="css"
                title="CSS Example"
                code={`.header {\n  background-color: navy;\n  color: white;\n}`}
              />
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {basicColors.map(color => (
                        <div key={color} className="text-center">
                            <div className="w-full h-16 rounded-lg shadow-inner" style={{ backgroundColor: color, border: '1px solid #ccc' }}></div>
                            <p className="text-xs mt-1 font-semibold truncate">{color}</p>
                        </div>
                    ))}
                </div>
              </div>
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="Special Keywords: transparent & currentColor"
              icon={Eye}
              color="text-sky-500"
              description="Beyond visible colors, CSS provides two powerful and dynamic keywords. `transparent` creates a fully see-through color, while `currentColor` is a variable that always holds the value of the element's `color` property."
            >
                <InteractiveCodeBlock language="css" title="CSS `currentColor` Example" code={`.icon {\n  fill: currentColor; /* SVG icon color matches text color */\n}\n\n.my-button:hover {\n  color: #ec4899; /* Changes text AND icon color */\n}`}/>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Visual Output:</h4>
                  <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center">
                      <button className="flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-lg transition-colors duration-300 hover:text-pink-400">
                          <svg className="w-6 h-6" style={{ fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                          <span>Hover Me</span>
                      </button>
                  </div>
                </div>
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Extended Colors Sandbox
              </h2>
            </div>
            <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search over 140 colors (e.g., 'blue', 'pink', 'green')..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-4 pl-12 border-2 border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 transition"
                />
            </div>
            <div className="max-h-[600px] overflow-y-auto p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredColors.map(color => (
                        <div key={color} className="text-center group cursor-pointer" onClick={() => handleCopy(color)}>
                            <div className="w-full h-24 rounded-lg shadow-inner transition-transform duration-200 group-hover:scale-105" style={{ backgroundColor: color, border: '1px solid rgba(0,0,0,0.1)' }}></div>
                            <p className="text-sm mt-2 font-semibold truncate text-slate-700 dark:text-slate-300">{color}</p>
                            {copiedColor === color && <span className="text-xs text-green-500 font-bold">Copied!</span>}
                        </div>
                    ))}
                     {filteredColors.length === 0 && <p className="col-span-full text-center text-slate-500 py-8">No colors found.</p>}
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Color Keywords Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              While you'll often use HEX or HSL for precise design work, color keywords are an excellent tool for rapid prototyping and clear communication.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssColorKeywords;
