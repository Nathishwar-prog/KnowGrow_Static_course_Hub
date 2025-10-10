import React from 'react';
import { Target, Compass, BookOpen, Layers, Monitor, Code, Palette, Zap, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Section Card component for structured course content layout (Used for main sections).
 * Enhanced design with better shadows and border accents.
 */
const CourseSectionCard = ({ title, icon: Icon, color, children }) => (
  // Enhanced shadow and hover effect for a professional look
  <div className={`p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl border-l-8 ${color.replace('text-', 'border-')}`}>
    <div className="flex items-start space-x-4 mb-4">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${color} p-2 bg-current/10`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">{title}</h3>
    </div>
    <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 pt-2">
      {children}
    </div>
  </div>
);

/**
 * Lesson Card component for the course map list (Highly stylized and elevated).
 */
const LessonCard = ({ title, icon: Icon, description, color }) => (
    <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Subtle accent corner */}
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color.replace('text-', 'from-')}/10 rounded-bl-full`} />
        
        <div className="relative z-10">
            <div className="flex items-center mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-current/10 ${color} mr-4`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-wide">{title}</h4>
            </div>
            {/* Content with highlighted concepts */}
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {description.split(/(\*\*.*?\*\*)/g).map((part, i) => (
                    part.startsWith('**') && part.endsWith('**') ? 
                    <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
                    <span key={i}>{part}</span>
                ))}
            </p>
        </div>
    </div>
);


const CssHome = () => {

  const courseLessons = [
    { title: 'CSS 2D Transforms', icon: Layers, color: 'text-pink-600', description: 'Mastering linear movement, rotation, scaling, and skewing to create **GPU-accelerated 2D interactions**.' },
    { title: 'CSS 3D Transforms', icon: Zap, color: 'text-violet-600', description: 'Adding depth and perspective using Z-axis manipulations, translation, and rotation for **immersive 3D UIs**.' },
    { title: 'CSS Advanced Backgrounds', icon: Monitor, color: 'text-teal-600', description: 'Creating visual fidelity with **multi-layered backgrounds**, background-clip, background-origin, and complex **masking techniques**.' },
    { title: 'CSS Advanced Colors', icon: Palette, color: 'text-amber-600', description: 'Diving into modern color spaces like **LCH/LAB**, and using the dynamic **color-mix()** function for professional theming.' },
    { title: 'CSS Accessibility', icon: Target, color: 'text-green-600', description: 'Ensuring your designs are usable by everyone through proper **focus states**, **motion control**, and **semantic styling**.' },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-900 min-h-screen font-sans">
      
      {/* --- Course Header Section (Vibrant Gradient Hero) --- */}
      <header className="text-center mb-16 py-16 bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-3xl border-b-8 border-indigo-600/70 transition duration-500">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-700 dark:from-indigo-400 dark:to-pink-400 mb-4 tracking-tighter transition duration-500 leading-none">
          The Ultimate CSS Masterclass
        </h1>
        <p className="text-xl sm:text-3xl text-gray-700 dark:text-gray-300 font-extralight italic mt-4">
          Your Journey to Front-End Mastery Starts Here
        </p>
      </header>

      {/* --- Section 1: Course Goals and Introduction (2-Column Professional Cards) --- */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        
        {/* Course Goals Card */}
        <CourseSectionCard title="Course Goals" icon={Target} color="text-indigo-600">
          <p>
            This course is designed to take you beyond foundational CSS and into the capabilities of **modern web styling**. We won't just cover *what* to write, but *why* modern methods are more performant, maintainable, and inclusive.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800 dark:text-gray-200">
            <li>Build highly **dynamic** and engaging user interfaces.</li>
            <li>Master **advanced visual effects** using transforms and gradients.</li>
            <li>Write highly **accessible** and inclusive code.</li>
            <li>Utilize **cutting-edge CSS functions** for complex tasks.</li>
          </ul>
        </CourseSectionCard>

        {/* Introduction to Modern CSS Card */}
        <CourseSectionCard title="The Modern CSS Era" icon={Code} color="text-teal-600">
          <p>
            Modern CSS is a powerful toolset centered around **efficiency** and **developer experience**. We are moving away from dependency on JavaScript for many common tasks.
          </p>
          <p>
            You will learn to leverage the browser's native power for:
          </p>
          <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
             <ul className="list-disc list-inside space-y-1 pl-4 text-gray-800 dark:text-gray-300 font-medium">
               <li>**GPU-Accelerated** Animations (Transforms).</li>
               <li>**Perceptually Uniform** Color Grading (LCH/LAB).</li>
               <li>**Single-Line** Solutions for previously complex problems.</li>
             </ul>
          </div>
        </CourseSectionCard>
      </div>

      {/* --- Section 2: Course Map (Key Topics) - Single Column Stacking --- */}
      <section className="mb-20">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 pb-3 border-b-4 border-pink-500/50 flex items-center">
          <Compass className="w-8 h-8 mr-4 text-pink-600"/> Your Learning Path: Key Topics
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10 text-xl max-w-4xl">
          Each topic below is a deep-dive lesson featuring an **interactive playground**, clear definitions, and copyable, syntax-highlighted code snippets, ensuring maximum learning retention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseLessons.map((lesson, index) => (
            <LessonCard 
              key={index} 
              title={lesson.title} 
              icon={lesson.icon} 
              description={lesson.description}
              color={lesson.color}
            />
          ))}
        </div>
      </section>
      
      {/* --- Next Steps Callout (Vibrant Footer) --- */}
      <div className="p-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl shadow-2xl text-center border-t-4 border-white/50">
        <h3 className="text-3xl font-bold text-white mb-3 flex items-center justify-center">
          <BookOpen className="w-7 h-7 mr-3"/> Ready to Master CSS?
        </h3>
        <p className="text-white/90 text-xl font-medium mb-6">
          Start your journey with **CSS Introduction** and then dive into the practical lessons below.
        </p>

      </div>
    </div>
  );
};

export default CssHome;
