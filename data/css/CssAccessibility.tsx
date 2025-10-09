import React, { useState, useCallback } from 'react';
import { Target, Zap, TrendingUp, Code, Copy, Check, Eye, Contrast, Text, AArrowUp, Hand, Palette } from 'lucide-react';

// --- Utility Components (Reused/Adapted) ---

/**
 * Code snippet display block with copy functionality and attractive dark styling.
 */
const CodeSnippetBlock = ({ codeSnippet, prefix = 'css' }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = React.useRef(null);

  const handleCopy = () => {
    if (codeRef.current) {
      // Create a temporary textarea to hold the text for copying
      const textarea = document.createElement('textarea');
      // For CSS properties, prepend the context unless it's a media query block
      const finalCode = codeSnippet.startsWith('@media') ? codeSnippet : `${codeSnippet.replace(/\n\n/g, '\n')}`;
      
      textarea.value = finalCode; 
      document.body.appendChild(textarea);
      textarea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="relative mb-4">
      <pre 
        ref={codeRef}
        className="p-3 bg-gray-900 dark:bg-gray-900 rounded-lg text-xs font-mono overflow-x-auto text-green-400 border border-gray-700 dark:border-gray-700 shadow-inner"
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      >
        <code className="text-pink-400">{prefix}</code> {codeSnippet}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded transition-all duration-200 text-gray-400 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Copy code to clipboard"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};


/**
 * Card component for explaining each accessibility principle.
 */
const PrincipleCard = ({ title, description, icon: Icon, color, codeSnippet, exampleClass }) => (
  <div className={`p-6 rounded-xl shadow-lg border-t-4 ${color} bg-white dark:bg-gray-800 transition-all hover:shadow-2xl`}>
    <div className="flex items-center space-x-3 mb-3">
      <Icon className={`w-6 h-6 ${color}`} />
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>

    <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center">
      <Code className="w-4 h-4 mr-1"/> Code Snippet:
    </h4>
    
    <CodeSnippetBlock codeSnippet={codeSnippet} prefix={title.includes('Contrast') ? 'WCAG Rule' : 'CSS'} />
  </div>
);

// --- Main Component ---

const CssAccessibility = () => {

  const [activeTab, setActiveTab] = useState('focus');

  // Descriptions for the accessibility principles
  const principleDescriptions = [
    {
      title: 'High Color Contrast',
      icon: Contrast,
      color: 'border-t-red-500 text-red-500',
      description: 'Ensure foreground content (text/icons) has sufficient contrast against its background. WCAG 2.1 requires a minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text.',
      codeSnippet: `/* Use tools to verify contrast */
color: #1a1a1a; /* Dark text */
background-color: #f0f0f0; /* Light background */

/* Avoid relying on color alone to convey meaning */
.required-field::after {
  content: " (required)"; /* Add text indicator */
  color: red; /* Use color as enhancement */
}`,
    },
    {
      title: 'Respect Reduced Motion',
      icon: Hand,
      color: 'border-t-blue-500 text-blue-500',
      description: 'Some users suffer from vestibular disorders and can be physically harmed by excessive motion (like parallax scrolling or sudden transitions). Use the media query to disable or simplify animations for these users.',
      codeSnippet: `@media (prefers-reduced-motion: reduce) {
  /* Disable smooth scrolling */
  html { scroll-behavior: auto; }
  
  /* Remove or simplify animations */
  .animated-element {
    transition: none !important;
    animation: none !important;
  }
}`,
    },
    {
      title: 'Relative Font Sizing (Scaling)',
      icon: AArrowUp,
      color: 'border-t-green-500 text-green-500',
      description: 'Always use **rem** or **em** units for font sizes and element dimensions, never **px**. This allows users to properly scale the entire page content via browser settings, which is essential for low-vision users.',
      codeSnippet: `/* Good: Base font size is 100% of the root element */
:root { font-size: 100%; } 

/* Good: Scales relative to the root font size */
h1 { font-size: 2.5rem; }
p { font-size: 1rem; }

/* Bad: Ignores user browser scaling settings */
/* h1 { font-size: 24px; } */`,
    },
  ];

  // --- Animation Styles (Defined as a string to be injected via <style>) ---
  const animationStyles = `
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    
    /* Example of bad focus handling: removing the outline */
    .bad-focus:focus {
      outline: none; /* DANGER: Screen reader users lose focus indicator */
      box-shadow: 0 0 0 3px red; /* Custom focus that doesn't convey standard accessibility */
    }
    
    /* Example of good focus handling: using a visible, standard indicator */
    .good-focus:focus {
      outline: 2px solid #5a00a8;
      outline-offset: 2px;
    }

    /* Example of high contrast for demo */
    .high-contrast {
        color: #000000;
        background-color: #ffffff;
    }

    .low-contrast {
        color: #aaaaaa;
        background-color: #ffffff;
    }
  `;

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-purple-100 dark:from-gray-900 dark:to-purple-950 min-h-screen font-sans">
      {/* Inject focus and utility styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* --- Course Header Section --- */}
      <header className="text-center mb-12 py-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl border-b-4 border-purple-500">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Mastering CSS Accessibility
        </h1>
        <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
          Lesson 3: Focus, Contrast, and User Preferences
        </p>
      </header>

      {/* --- Learning Objectives --- */}
      <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-purple-400">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2 text-purple-500"/> Learning Objectives
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-inside">
          <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span> Preserve and enhance the **`:focus`** indicator for keyboard users.</li>
          <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span> Use CSS to ensure **high contrast** ratios for readability.</li>
          <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span> Adopt relative units (`rem`, `em`) for proper **content scaling**.</li>
          <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span> Respect user operating system settings like **`prefers-reduced-motion`**.</li>
        </ul>
      </div>

      {/* --- Interactive Playground Section (Module 1) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-2 border-purple-200 dark:border-purple-700 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500"/> Module 1: Focus and Hidden Content
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          The two most common accessibility errors related to CSS involve removing the focus ring and incorrectly hiding elements. Use the **Tab key** on your keyboard to interact with the buttons below.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Focus Demo Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" /> The `:focus` Ring Demo
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              **Try Tabbing:** Use the **Tab key** to move between the buttons below. Notice how the default focus is critical for keyboard navigation.
            </p>

            <div className="flex flex-col space-y-4">
              <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md bad-focus transition duration-200">
                Bad Focus (Outline Removed)
              </button>
              <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md good-focus transition duration-200">
                Good Focus (Outline Preserved)
              </button>
            </div>

            <h4 className="text-sm font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">The Fix:</h4>
            <CodeSnippetBlock codeSnippet={`/* The most common error to AVOID! */
button:focus { 
  outline: none; 
} 

/* The best practice: let the browser handle it, or enhance it! */
button:focus { 
  outline: 3px solid var(--primary-color); 
  outline-offset: 2px; 
}`} />
          </div>
          
          {/* Visually Hidden Content Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
             <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <Hand className="w-5 h-5 mr-2" /> The Visually Hidden Class
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              When you need to hide content visually, but keep it available to **screen readers** (e.g., button labels that are only icons), use the standard `visually-hidden` class, not `display: none;`.
            </p>
            
            <button className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-200">
                <span aria-hidden="true">🛒</span> 
                <span className="visually-hidden">Add to Cart</span> 
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Screen Reader reads: "Add to Cart button"
            </p>
            
            <h4 className="text-sm font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">CSS for Screen Reader Only Content:</h4>
            <CodeSnippetBlock codeSnippet={`.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`} />
          </div>
        </div>
      </section>

      {/* --- Theoretical Explanation Section (Module 2) --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b pb-2 border-purple-200 dark:border-purple-700 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-500"/> Module 2: Contrast, Motion, and Scaling
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          These principles directly impact users with visual impairments and vestibular disorders. Implementing these techniques ensures a comfortable and non-harmful experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principleDescriptions.map((desc) => (
            <PrincipleCard key={desc.title} {...desc} />
          ))}
        </div>
      </section>

      {/* --- Final Contrast Demo --- */}
      <div className="p-6 bg-purple-50 dark:bg-purple-900/50 rounded-xl shadow-inner border border-purple-200 dark:border-purple-700 mt-12">
        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2 flex items-center">
          <Palette className="w-5 h-5 mr-2"/> Contrast Example: A Visual Check
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Visual perception can be tricky. Even if text looks "fine" to you, it may fail accessibility standards (WCAG AA).
        </p>
        <div className="flex justify-between p-4 rounded-lg bg-white shadow-md">
            <div className="p-2 high-contrast rounded">
                <p className="font-semibold">GOOD Contrast (Ratio: 18:1)</p>
                <p className="text-sm">High contrast is easy for everyone to read.</p>
            </div>
            <div className="p-2 low-contrast rounded">
                <p className="font-semibold">POOR Contrast (Ratio: 1.5:1)</p>
                <p className="text-sm">This can be almost invisible to some users.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CssAccessibility;
