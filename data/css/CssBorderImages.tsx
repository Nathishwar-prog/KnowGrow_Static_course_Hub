import React, { useState } from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  GalleryHorizontal, Slice, StretchHorizontal, Repeat, AppWindow
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
                if (part.match(/^(\.[\w-]+|#[\w-]+|div|p|h1|url|linear-gradient)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mr-4`}>
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

const CssBorderImages = () => {
  const [slice, setSlice] = useState(30);
  const [repeat, setRepeat] = useState('stretch');
  
  const borderImageSourceUrl = "https://placehold.co/90x90/f59e0b/422006?text=O";
  const borderImageStyle = {
      border: '30px solid transparent',
      borderImageSource: `url(${borderImageSourceUrl})`,
      borderImageSlice: slice,
      borderImageRepeat: repeat,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50 dark:from-slate-900 dark:via-amber-900/10 dark:to-slate-900">
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-2xl mb-8">
            <GalleryHorizontal className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 mb-6 leading-tight">
            CSS Border Images
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Replace an element's standard border with a custom image to create complex and decorative frames.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The `border-image` Properties
            </h2>
          </div>
          <div className="space-y-12">
            <LessonPropertyCard
              title="border-image-source"
              icon={GalleryHorizontal}
              color="text-amber-500"
              description="This property specifies the path to the image you want to use for the border. This can be a URL to any image file or even a CSS gradient."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.box {\n  border-image-source: url('path/to/image.png');\n}`} />
            </LessonPropertyCard>

            <LessonPropertyCard
              title="border-image-slice"
              icon={Slice}
              color="text-red-500"
              description="This is the most critical property. It tells the browser how to 'slice' the source image into nine sections: four corners, four edges, and a center. The values are pixel offsets from the top, right, bottom, and left edges of the source image."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`/* Slices the image 30px from all edges */\n.box {\n  border-image-slice: 30;\n}`} />
            </LessonPropertyCard>
            
            <LessonPropertyCard
              title="border-image-repeat"
              icon={Repeat}
              color="text-blue-500"
              description="This property controls how the edge regions (the top, right, bottom, and left slices) are displayed. It can stretch, repeat, or repeat with spacing to fill the border area."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`/* Edges will be stretched to fill the space */\n.box {\n  border-image-repeat: stretch; /* Default */\n}\n\n/* Edges will be tiled (repeated) */\n.box {\n  border-image-repeat: repeat;\n}`} />
            </LessonPropertyCard>

             <LessonPropertyCard
              title="border-image (Shorthand)"
              icon={Code}
              color="text-indigo-500"
              description="For convenience, you can combine `source`, `slice`, `width`, `outset`, and `repeat` into a single shorthand property."
            >
              <InteractiveCodeBlock language="css" title="CSS Example" code={`.box {\n  border: 30px solid transparent;\n  border-image: url('border.png') 30 round;\n}`} />
            </LessonPropertyCard>
          </div>
        </section>

        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Sandbox
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Slice Amount: <span className="font-bold text-amber-600">{slice}</span></label>
                        <input type="range" min="1" max="45" value={slice} onChange={(e) => setSlice(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-700" />
                    </div>
                    <div className="mb-6">
                        <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">Repeat Method:</label>
                        <select value={repeat} onChange={e => setRepeat(e.target.value)} className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors">
                            <option value="stretch">stretch (default)</option>
                            <option value="repeat">repeat</option>
                            <option value="round">round</option>
                            <option value="space">space</option>
                        </select>
                    </div>
                     <InteractiveCodeBlock title="Live CSS" code={`.box {\n  border: 30px solid transparent;\n  border-image-source: url(...);\n  border-image-slice: ${slice};\n  border-image-repeat: ${repeat};\n}`} />
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Source Image:</h4>
                    <img src={borderImageSourceUrl} alt="Border Source" className="w-[90px] h-[90px] mb-4 border-2 border-dashed" />
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Visual Output:</h4>
                    <div className="w-64 h-48 bg-white dark:bg-slate-800 flex items-center justify-center" style={borderImageStyle}>
                        <span className="font-bold text-slate-600 dark:text-slate-300">Content</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-20">
           <div className="flex items-center mb-12">
            <AppWindow className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Showcase
            </h2>
          </div>
           <div className="space-y-12">
              <LessonPropertyCard title="Decorative Frame" icon={GalleryHorizontal} color="text-green-500" description="Using a repeating pattern image to create a fancy, vintage-style frame around an element.">
                 <div className="grid lg:grid-cols-2 gap-4">
                     <InteractiveCodeBlock title="CSS" code={`.frame {\n  border: 20px solid transparent;\n  border-image: url('pattern.png') 30 repeat;\n}`}/>
                     <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center">
                        <div className="w-48 h-32 bg-white flex items-center justify-center" style={{border: '20px solid transparent', borderImageSource: 'url(https://placehold.co/60x60/d1fae5/166534?text=--)', borderImageSlice: 30, borderImageRepeat: 'repeat'}}>
                            Frame
                        </div>
                     </div>
                 </div>
              </LessonPropertyCard>
              <LessonPropertyCard title="Gradient Border" icon={GalleryHorizontal} color="text-blue-500" description="A modern technique using a CSS gradient as the source image to create a border that smoothly transitions between colors.">
                 <div className="grid lg:grid-cols-2 gap-4">
                     <InteractiveCodeBlock title="CSS" code={`.gradient-border {\n  border: 10px solid transparent;\n  border-image-source: linear-gradient(45deg, #f59e0b, #ec4899);\n  border-image-slice: 1;\n}`}/>
                      <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center">
                        <div className="w-48 h-32 bg-white dark:bg-slate-800 flex items-center justify-center" style={{border: '10px solid transparent', borderImageSource: 'linear-gradient(45deg, #f59e0b, #ec4899)', borderImageSlice: 1}}>
                            Gradient
                        </div>
                     </div>
                 </div>
              </LessonPropertyCard>
           </div>
        </section>


        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Border Images Mastered!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You can now move beyond simple solid lines and create unique, decorative borders for your elements using the power of images.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssBorderImages;
