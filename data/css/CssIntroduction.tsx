import React from 'react';
import { Target, Lightbulb, BookOpen, Code, Layers, Zap, Palette, LayoutGrid, Box, Clock, Smartphone } from 'lucide-react';

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

/**
 * Code Snippet Block component for displaying code with visual styling.
 */
const CodeSnippetBlock = ({ code, language = 'css' }) => (
    <div className="mt-4 p-4 rounded-lg bg-gray-900 shadow-inner overflow-x-auto text-sm font-mono whitespace-pre-wrap">
        <pre>
            <code className={`language-${language} text-cyan-400`}>
                {code}
            </code>
        </pre>
    </div>
);

/**
 * Module Item component for the structured list
 */
const ModuleItem = ({ title, icon: Icon, description, code, color = 'text-indigo-500' }) => (
  <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex items-start mb-3">
        <Icon className={`w-6 h-6 mr-3 ${color}`} />
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
    {code && <CodeSnippetBlock code={code} />}
  </div>
);


const CssIntroduction = () => {
    // Icons for each module
    const moduleIcons = {
        'Module 1': BookOpen,
        'Module 2': Palette,
        'Module 3': Box,
        'Module 4': LayoutGrid,
        'Module 5': Clock,
        'Module 6': Smartphone,
        'Module 7': Layers,
    };

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-100 to-indigo-200 dark:from-gray-900 dark:to-indigo-950 min-h-screen font-sans">
      
      {/* --- Header Section --- */}
      <header className="text-center mb-12 py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl border-b-8 border-indigo-600">
        <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 mb-4 tracking-tighter">
          Master CSS — From Basics to Advanced Styling
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-light italic">
          The ultimate course designed to help you understand CSS deeply and apply it confidently.
        </p>
      </header>

      {/* --- Section 1: Welcome and Course Overview --- */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        
        {/* Course Welcome */}
        <CourseSectionCard title="Welcome to the Course" icon={BookOpen} color="border-indigo-600 text-indigo-600">
          <p>
            Welcome to **Master CSS**, the ultimate course designed to help you understand CSS deeply and apply it confidently.
          </p>
          <p>
            Here, you’ll go from a beginner who just knows HTML to a designer who can craft **beautiful, responsive, and modern web pages**. This course is filled with hands-on examples, real-world projects, and visual explanations so you’ll never just memorize — you’ll truly understand.
          </p>
        </CourseSectionCard>

        {/* Why Learn CSS? */}
        <CourseSectionCard title="Why CSS is Essential" icon={Lightbulb} color="border-teal-600 text-teal-600">
          <p>
            **CSS (Cascading Style Sheets)** is the heart of web design. It controls how your website looks — colors, layouts, animations, and responsiveness.
          </p>
          <p>
            In this course, you’ll explore everything from the fundamentals of styling to advanced layout techniques like Flexbox and Grid. You’ll also learn how to create responsive websites, smooth transitions, and interactive effects that make your pages come alive.
          </p>
          <div className="mt-4 text-gray-900 dark:text-white">
            <h4 className="text-xl font-bold mb-2">Learning Style:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-700 dark:text-gray-300">
                <li>Step-by-step explanations</li>
                <li>Visual illustrations</li>
                <li>Code challenges and real-world examples</li>
            </ul>
          </div>
        </CourseSectionCard>
      </div>

      {/* --- Section 2: Full Course Breakdown --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-2 border-pink-400 dark:border-pink-700 flex items-center">
          <Layers className="w-7 h-7 mr-3 text-pink-500"/> Detailed Course Breakdown
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Module 1 */}
            <ModuleItem
                title="🟢 Section 1: Introduction to CSS"
                icon={moduleIcons['Module 1']}
                color="text-green-500"
                description="Learn the absolute basics: what CSS is, how it links to HTML, the different types of stylesheets, and fundamental syntax."
                code={`p {\n  color: blue; \n  font-size: 16px; \n}`}
            />

            {/* Module 2 */}
            <ModuleItem
                title="🟢 Section 2: Colors, Fonts, and Text Styling"
                icon={moduleIcons['Module 2']}
                color="text-yellow-500"
                description="Understand color models (HEX, RGB, HSL), typography best practices, text alignment, spacing, and shadows for stunning content."
                code={`h1 {\n  color: #ff5733;\n  text-shadow: 2px 2px 5px gray;\n}`}
            />

            {/* Module 3 */}
            <ModuleItem
                title="🟢 Section 3: The Box Model"
                icon={moduleIcons['Module 3']}
                color="text-red-500"
                description="Margin, border, padding, and content explained visually. Master box-sizing and essential spacing tricks for layout control."
                code={`div {\n  padding: 20px;\n  margin: 10px;\n  border: 2px solid black;\n}`}
            />

            {/* Module 4 */}
            <ModuleItem
                title="🟢 Section 4: Layouts with Flexbox and Grid"
                icon={moduleIcons['Module 4']}
                color="text-blue-500"
                description="The core of modern web development. Easily build dynamic layouts, align, justify, and create responsive designs with Grid templates."
                code={`.container {\n  display: flex;\n  justify-content: space-between;\n}`}
            />

            {/* Module 5 */}
            <ModuleItem
                title="🟢 Section 5: Transitions and Animations"
                icon={moduleIcons['Module 5']}
                color="text-purple-500"
                description="Add life to your web page! Learn to create smooth hover effects, keyframes animation basics, and loading animations."
                code={`button:hover {\n  background-color: #007bff;\n  transition: background-color 0.3s ease;\n}`}
            />

            {/* Module 6 */}
            <ModuleItem
                title="🟢 Section 6: Responsive Design"
                icon={moduleIcons['Module 6']}
                color="text-orange-500"
                description="Master media queries and the mobile-first approach. Ensure your layouts adapt perfectly to all screen sizes."
                code={`@media (max-width: 600px) {\n  body {\n    font-size: 14px;\n  }\n}`}
            />
        </div>
      </section>

      {/* --- Section 3: Project & Goal Summary --- */}
      <section className="mb-16 grid lg:grid-cols-2 gap-10">
        
        <CourseSectionCard title="Section 7: Mini Projects" icon={Code} color="border-gray-600 text-gray-600">
            <p>
                This hands-on section reinforces everything you've learned. You’ll build and style several mini projects:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 font-semibold">
                <li>Personal Portfolio Page</li>
                <li>Responsive Landing Page</li>
                <li>Stylish Login Form</li>
                <li>Animated Navigation Bar</li>
            </ul>
            <p className="mt-4">
                Each project helps you build **confidence** and a strong **CSS portfolio**.
            </p>
        </CourseSectionCard>

        <CourseSectionCard title="🏁 By the End of This Course" icon={Target} color="border-pink-600 text-pink-600">
            <p className="text-xl font-bold">
                You’ll be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-2xl font-extrabold text-pink-800 dark:text-pink-300">
                <li>✅ Build responsive, professional web designs</li>
                <li>✅ Understand every CSS concept clearly</li>
                <li>✅ Create animations, hover effects, and transitions</li>
                <li>✅ Work like a real front-end developer</li>
            </ul>
        </CourseSectionCard>
      </section>
      
      {/* --- Next Steps Callout --- */}
      <div className="p-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl shadow-lg border border-yellow-300 dark:border-yellow-700 text-center">
        <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center justify-center">
          <Code className="w-6 h-6 mr-3"/> Let's Begin!
        </h3>
        <p className="text-gray-800 dark:text-gray-300 text-lg">
          Dive into the first section to start your journey into CSS mastery. Happy coding!
        </p>
      </div>
    </div>
  );
};

export default CssIntroduction;
