import React from 'react';
import {
  BookOpen, Code, CheckCircle, ArrowRight,
  Grid, Image, MousePointerClick
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
                if (part.match(/^(\.[\w-]+|img|figure|figcaption|:hover)$/)) {
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
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mr-4`}>
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

const CssImageGallery = () => {
    
  // Inject styles for hover effects in showcases to make them work live
  const galleryStyles = `
    .showcase-zoom .gallery-item img {
        transition: transform 0.4s ease;
    }
    .showcase-zoom .gallery-item:hover img {
        transform: scale(1.1);
    }

    .showcase-overlay .gallery-item .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        width: 100%;
        transition: opacity 0.4s ease, transform 0.4s ease;
        opacity: 0;
        transform: translateY(20px);
        padding: 1rem;
        font-size: 0.9rem;
    }
    .showcase-overlay .gallery-item:hover .overlay {
        opacity: 1;
        transform: translateY(0);
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900">
      <style>{galleryStyles}</style>
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-2xl mb-8">
            <Image className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-sky-500 mb-6 leading-tight">
            CSS Image Gallery
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master responsive image grids, hover effects, and modern CSS Grid techniques to build professional galleries for portfolios and e-commerce sites.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: The Core Responsive Gallery
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
             <LessonExampleCard 
                title="Responsive Grid Layout"
                icon={Grid}
                color="text-blue-600"
                description="CSS Grid is the modern standard for creating responsive galleries. The `repeat(auto-fit, minmax(250px, 1fr))` pattern automatically adjusts the number of columns based on available space. This ensures your gallery looks great on mobile, tablet, and desktop without media queries. The `gap` property adds consistent spacing, while `object-fit: cover` ensures images maintain aspect ratio without distortion."
                htmlCode={`<div class="gallery-grid">\n  <img src="mountain.jpg" alt="Mountain landscape">\n  <img src="forest.jpg" alt="Forest trail">\n  <img src="ocean.jpg" alt="Ocean sunset">\n  <!-- Add more images as needed -->\n</div>`}
                cssCode={`.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  padding: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 0.75rem;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}`}
            >
                <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'}}>
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" alt="Mountain landscape" className="w-full h-auto aspect-square object-cover rounded-lg shadow-md" />
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop" alt="Forest trail" className="w-full h-auto aspect-square object-cover rounded-lg shadow-md" />
                    <img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop" alt="Ocean waves" className="w-full h-auto aspect-square object-cover rounded-lg shadow-md" />
                </div>
            </LessonExampleCard>
          </div>
        </section>

        <section className="mb-20">
            <div className="flex items-center mb-12">
              <MousePointerClick className="w-8 h-8 mr-4 text-pink-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Section 2: Interactive Effects with Hover States
              </h2>
            </div>
            <div className="space-y-16">
                
                {/* --- Example A: Zoom on Hover --- */}
                <div className="p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example A: Zoom on Hover</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">The zoom effect creates visual feedback by scaling the image up when users hover over it. This technique draws attention and adds polish to your gallery. The `overflow: hidden` container prevents the zoomed image from spilling outside its boundaries, creating a smooth, professional appearance.</p>
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                        <InteractiveCodeBlock title="HTML" code={`<div class="gallery-zoom">\n  <div class="gallery-item">\n    <img src="landscape.jpg" alt="...">\n  </div>\n  <div class="gallery-item">\n    <img src="mountain.jpg" alt="...">\n  </div>\n  <!-- More items -->\n</div>`} />
                        <InteractiveCodeBlock title="CSS" code={`.gallery-zoom .gallery-item {\n  overflow: hidden;\n  border-radius: 0.75rem;\n  cursor: pointer;\n}\n\n.gallery-zoom img {\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.gallery-zoom .gallery-item:hover img {\n  transform: scale(1.15);\n}`} />
                    </div>
                    <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 showcase-zoom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="overflow-hidden rounded-lg gallery-item h-32"><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Mountain" className="w-full h-full object-cover"/></div>
                          <div className="overflow-hidden rounded-lg gallery-item h-32"><img src="https://images.unsplash.com/photo-1506634215696-b82efff67f40?w=300&h=300&fit=crop" alt="Aurora" className="w-full h-full object-cover"/></div>
                          <div className="overflow-hidden rounded-lg gallery-item h-32"><img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop" alt="Forest" className="w-full h-full object-cover"/></div>
                          <div className="overflow-hidden rounded-lg gallery-item h-32"><img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=300&fit=crop" alt="Ocean" className="w-full h-full object-cover"/></div>
                        </div>
                    </div>
                </div>

                {/* --- Example B: Text Overlay on Hover --- */}
                <div className="p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Example B: Text Overlay on Hover</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Text overlays are perfect for portfolio galleries and product showcases. When users hover, a semi-transparent overlay slides up with project title and description. This keeps the gallery clean at first glance while revealing information on interaction. Use `position: relative` on the container and `position: absolute` for the overlay to layer them properly.</p>
                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                        <InteractiveCodeBlock title="HTML" code={`<div class="gallery-overlay">\n  <div class="gallery-item">\n    <img src="project1.jpg" alt="...">\n    <div class="overlay">\n      <p class="title">Modern Design</p>\n      <p class="desc">Responsive web design</p>\n    </div>\n  </div>\n  <!-- More items -->\n</div>`} />
                        <InteractiveCodeBlock title="CSS" code={`.gallery-item {\n  position: relative;\n  overflow: hidden;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0; left: 0; right: 0;\n  background: rgba(0,0,0,0.8);\n  color: white; padding: 1rem;\n  transform: translateY(100%);\n  transition: transform 0.4s ease;\n}\n\n.gallery-item:hover .overlay {\n  transform: translateY(0);\n}`} />
                    </div>
                   <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-xl shadow-inner border border-slate-300 dark:border-slate-600 showcase-overlay">
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="overflow-hidden rounded-lg relative gallery-item h-32">
                            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop" alt="UI Design" className="w-full h-full object-cover"/>
                            <div className="overlay"><p className="font-bold text-sm">UI Design</p><p className="text-xs">Interactive interface</p></div>
                        </div>
                        <div className="overflow-hidden rounded-lg relative gallery-item h-32">
                            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=300&h=300&fit=crop" alt="Architecture" className="w-full h-full object-cover"/>
                            <div className="overlay"><p className="font-bold text-sm">Architecture</p><p className="text-xs">Modern building design</p></div>
                        </div>
                        <div className="overflow-hidden rounded-lg relative gallery-item h-32">
                            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop" alt="Nature" className="w-full h-full object-cover"/>
                             <div className="overlay"><p className="font-bold text-sm">Forest Trail</p><p className="text-xs">Natural landscape</p></div>
                        </div>
                        <div className="overflow-hidden rounded-lg relative gallery-item h-32">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop" alt="Coastal" className="w-full h-full object-cover"/>
                            <div className="overlay"><p className="font-bold text-sm">Coastal View</p><p className="text-xs">Beach photography</p></div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </section>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lesson Complete: Gallery Mastery Achieved!
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You've learned responsive grid layouts, hover effects, and overlays—everything needed to build professional image galleries for portfolio sites, e-commerce platforms, and creative showcases.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CssImageGallery;