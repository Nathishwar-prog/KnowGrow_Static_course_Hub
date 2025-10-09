import React, { Children } from 'react';
import { Target, Compass, BookOpen, Layers, Monitor, Code, Palette, Zap } from 'lucide-react';

/**
 * Section Card component for structured course content layout.
 */
const CourseSectionCard = ({ title, icon: Icon, color, children }) => (
  <div className={`p-8 rounded-xl shadow-2xl bg-white dark:bg-gray-800 transition-all hover:shadow-3xl border-l-4 ${color}`}>
    <div className="flex items-center space-x-4 mb-4">
      <Icon className={`w-8 h-8 ${color} p-1 rounded-full bg-current/10`} />
      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const CssHome = () => {

  const courseLessons = [
    { title: 'CSS 2D Transforms', icon: Layers, description: 'Mastering linear movement, rotation, scaling, and skewing to create engaging interactions.' },
    { title: 'CSS 3D Transforms', icon: Zap, description: 'Adding depth and perspective using Z-axis manipulations, translation, and rotation for immersive UIs.' },
    { title: 'CSS Advanced Backgrounds', icon: Monitor, description: 'Creating visual fidelity with multi-layered backgrounds, background-clip, background-origin, and complex masks.' },
    { title: 'CSS Advanced Colors', icon: Palette, description: 'Diving into modern color spaces like LCH/LAB, and using the dynamic color-mix() function for professional theming.' },
    { title: 'CSS Accessibility', icon: Target, description: 'Ensuring your designs are usable by everyone through proper focus states, motion control, and semantic styling.' },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-100 to-indigo-200 dark:from-gray-900 dark:to-indigo-950 min-h-screen font-sans">
      {/* --- Course Header Section (Enhanced Visuals) --- */}
      <header className="text-center mb-12 py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border-b-8 border-indigo-600 transition duration-500 hover:shadow-3xl">
        <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 mb-4 tracking-tighter transition duration-500">
          The Ultimate CSS Masterclass
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-light italic">
          Your Journey to Front-End Mastery Starts Here
        </p>
      </header>

      {/* --- Section 1: Course Goals and Introduction --- */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        
        {/* Course Goals */}
        <CourseSectionCard title="Course Goals" icon={Target} color="border-indigo-600 text-indigo-600">
          <p>
            This course is designed to take you beyond foundational CSS and into the capabilities of **modern web styling**. We won't just cover *what* to write, but *why* modern methods are more performant, maintainable, and inclusive.
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Build highly **dynamic** and engaging user interfaces.</li>
            <li>Master **advanced visual effects** using transforms and gradients.</li>
            <li>Write highly **accessible** and inclusive code.</li>
            <li>Utilize **cutting-edge CSS functions** for complex tasks.</li>
          </ul>
        </CourseSectionCard>

        {/* Introduction to Modern CSS */}
        <CourseSectionCard title="The Modern CSS Era" icon={Code} color="border-teal-600 text-teal-600">
          <p>
            Modern CSS is a powerful toolset centered around efficiency and developer experience. We are moving away from dependency on JavaScript for many common tasks (like blending colors or complex backgrounds).
          </p>
          <p>
            You will learn to leverage the browser's native power for:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>**GPU-Accelerated** Animations (Transforms).</li>
            <li>**Perceptually Uniform** Color Grading (LCH/LAB).</li>
            <li>**Single-Line** Solutions for previously complex layouts.</li>
          </ul>
        </CourseSectionCard>
      </div>

      {/* --- Section 2: Course Map (Key Topics) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-2 border-pink-400 dark:border-pink-700 flex items-center">
          <Compass className="w-7 h-7 mr-3 text-pink-500"/> Your Learning Path: Key Topics
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10 text-xl">
          Each topic below is a deep-dive lesson featuring an **interactive playground**, clear definitions, and copyable, syntax-highlighted code snippets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseLessons.map((lesson, index) => (
            <div 
              key={index} 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-indigo-400 hover:border-indigo-600"
            >
              <lesson.icon className="w-10 h-10 text-indigo-500 mb-3" />
              <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-wide">{lesson.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base">{lesson.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- Next Steps Callout --- */}
      <div className="p-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl shadow-lg border border-yellow-300 dark:border-yellow-700 text-center">
        <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center justify-center">
          <BookOpen className="w-6 h-6 mr-3"/> Ready to Dive In?
        </h3>
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          Select any of the topics above to begin your journey into advanced CSS concepts. Let's make the web beautiful and performant!
        </p>
      </div>
    </div>
  );
};

export default CssHome;
