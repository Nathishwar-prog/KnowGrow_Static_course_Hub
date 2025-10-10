import React, { useState } from 'react';
import {
  BookOpen, Target, Code, CheckCircle, ArrowRight,
  Lightbulb, Zap, Table, Layers, Ruler, Palette, MinusCircle, LayoutGrid
} from 'lucide-react';

// --- Reusable UI Components ---

/**
 * A syntax-highlighted code block for displaying CSS and HTML.
 */
const InteractiveCodeBlock = ({ code, language = 'css', title }) => (
  <div className="relative group">
    {title && (
      <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
        {title}
      </div>
    )}
    <div className="mt-2 p-6 rounded-2xl bg-slate-900 shadow-2xl overflow-x-auto border border-slate-700 group-hover:border-violet-500 transition-all duration-300">
      <pre className="text-sm lg:text-base">
        <code className="font-mono leading-relaxed">
          {code.split('\n').map((line, i) => (
            <div key={i} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
              {line.split(/(\s+|[{}():;\[\]>\+\~=\^\|\*\$\/\*#])/g).map((part, j) => {
                // Comments and HTML tags are highlighted separately for combined examples
                if (part.includes('/*') || part.includes('*/') || part.match(/<!--.*?-->/)) {
                  return <span key={j} className="text-slate-500 italic font-semibold">{part}</span>;
                }
                if (part.match(/^(table|tr|td|th|caption|\.[\w-]+)$/)) {
                  return <span key={j} className="text-amber-400 font-semibold">{part}</span>; // HTML elements / Selectors
                }
                if (part.match(/^(border-collapse|border-spacing|table-layout|width|padding|text-align|background-color|color|border)$/)) {
                  return <span key={j} className="text-cyan-400">{part}</span>; // CSS Properties
                }
                if (['{', '}', ':', ';', '(', ')', '%'].includes(part)) {
                  return <span key={j} className="text-pink-400 font-bold">{part}</span>; // Punctuation
                }
                if (part.match(/^(#[0-9a-fA-F]+|collapse|separate|fixed|auto|left|right|center|100%|\d+px|0|red|blue|auto)$/)) {
                  return <span key={j} className="text-emerald-400">{part}</span>; // Values
                }
                return <span key={j} className="text-slate-300">{part}</span>; // Standard text
              })}
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

/**
 * A visually distinct card for explaining individual lesson properties/concepts.
 */
const LessonPropertyCard = ({ title, icon, color, description, syntaxCode, keyBenefit }) => {
  const Icon = icon;
  return (
    <div className="group relative p-8 bg-white dark:bg-slate-800/90 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
          color.includes('red') ? 'from-red-500/20 to-red-600/20' :
          color.includes('green') ? 'from-green-500/20 to-green-600/20' :
          color.includes('blue') ? 'from-blue-500/20 to-blue-600/20' :
          'from-purple-500/20 to-purple-600/20'
        } flex items-center justify-center mr-4`}>
          <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? 
          <strong key={i} className={`font-semibold ${color}`}>{part.slice(2, -2)}</strong> : 
          <span key={i}>{part}</span>
        )}
      </p>

      <div className="mt-6 space-y-4">
        {syntaxCode && <InteractiveCodeBlock code={syntaxCode} title="Syntax Example" />}
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/40 rounded-xl border-l-4 border-indigo-500 flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1"/>
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            <strong className="mr-1">Key Tip:</strong>{keyBenefit}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
function CssTables() {
  const [borderCollapse, setBorderCollapse] = useState('collapse');
  const [borderSpacing, setBorderSpacing] = useState(0);

  const coreProperties = [
    {
      title: 'border-collapse',
      icon: Layers,
      color: 'text-red-600',
      description: 'Determines if table borders should be **merged** into a single line (**`collapse`**) or remain separate (**`separate`**).',
      syntaxCode: `table {\n  border-collapse: collapse; /* Most common and clean */\n}\n/* OR */\ntable {\n  border-collapse: separate; \n}`,
      keyBenefit: 'Always use **`collapse`** for a modern, clean look; **`separate`** is useful only when you need space between cells.',
    },
    {
      title: 'border-spacing',
      icon: Ruler,
      color: 'text-green-600',
      description: 'Specifies the distance between the borders of adjacent cells **only when `border-collapse` is `separate`**. Takes one or two length values.',
      syntaxCode: `table {\n  border-collapse: separate;\n  border-spacing: 10px 5px; /* horizontal | vertical */\n}`,
      keyBenefit: 'A great way to add visual air between cells without adding extra padding to the cell content.',
    },
    {
      title: 'table-layout',
      icon: LayoutGrid,
      color: 'text-blue-600',
      description: 'Controls the algorithm used to lay out cells, columns, and rows. **`fixed`** (faster) or **`auto`** (default, slower).',
      syntaxCode: `table {\n  width: 100%;\n  table-layout: fixed;\n}`,
      keyBenefit: 'Using **`fixed`** dramatically improves table rendering speed, especially for tables with many rows and columns.',
    },
  ];

  // Corrected Section 3 Data Structure to use proper JS object literals
  const advancedProperties = [
    {
        title: "Table Striping (Zebra Stripes)",
        icon: MinusCircle,
        color: "text-purple-600",
        description: 'Use the **`:nth-child(even/odd)`** pseudo-class to apply different background colors to alternating rows for improved readability.',
        syntaxCode: `tr:nth-child(even) {\n  background-color: #F3F4F6; /* Light gray */\n}\ntr:nth-child(odd) {\n  background-color: white;\n}`,
        keyBenefit: 'Zebra striping is essential for tables with many rows as it helps the user track data across the screen.',
    },
    {
        title: "Caption Styling",
        icon: Code,
        color: "text-teal-600",
        description: 'The **`caption-side`** property determines where the `&lt;caption&gt;` element is placed (default is `top`).',
        syntaxCode: `caption {\n  caption-side: bottom;\n  font-style: italic;\n  padding-top: 10px;\n}`,
        keyBenefit: 'Always include a semantic `<caption>` element to describe the table content for accessibility.',
    },
  ];

  const tableStyle = {
    borderCollapse: borderCollapse,
    borderSpacing: `${borderSpacing}px`,
    width: '100%',
    tableLayout: 'fixed',
    border: '2px solid #6366f1',
  };

  const cellStyle = {
    padding: '10px',
    border: borderCollapse === 'separate' ? '2px solid #6366f1' : '1px solid #c7d2fe',
    textAlign: 'left',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-slate-900">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="relative px-6 lg:px-12 py-16 lg:py-24 text-center bg-white dark:bg-slate-800/90 rounded-b-3xl shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-600 to-indigo-600 shadow-2xl mb-8">
            <Table className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-600 to-violet-600 mb-6 leading-tight">
            CSS Tables
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Control the layout, borders, and appearance of tabular data with clean CSS.
          </p>
        </div>
      </header>

      <main className="px-6 lg:px-12 py-12 lg:py-20">
        
        {/* Section 1: Core Properties (Vertical Stack) */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 mr-4 text-violet-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 1: Table Layout and Structure Control
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            These properties allow you to define the structure and spacing behavior of the entire table element.
          </p>
          <div className="space-y-8">
            {coreProperties.map((prop, index) => (
              <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>
        
        {/* Section 2: Live Interactive Sandbox */}
        <section className="mb-20 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-12">
            <Zap className="w-8 h-8 mr-4 text-teal-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 2: Interactive Table Sandbox
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Controls Column */}
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Controls</h4>
                
                {/* Border Collapse Control */}
                <div className="space-y-2 pt-4">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                        Border Collapse: <span className="text-violet-600 font-extrabold">{borderCollapse}</span>
                    </label>
                    <select
                        value={borderCollapse}
                        onChange={(e) => setBorderCollapse(e.target.value)}
                        className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                        <option value="collapse">collapse (Single Border)</option>
                        <option value="separate">separate (Double Border)</option>
                    </select>
                </div>

                {/* Border Spacing Control */}
                <div className="space-y-2 pt-4">
                    <label className="text-lg font-semibold text-slate-700 dark:text-slate-300 block">
                        Border Spacing (Requires Separate): <span className="text-green-600 font-extrabold">{borderSpacing}px</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="15"
                        value={borderSpacing}
                        onChange={(e) => setBorderSpacing(parseInt(e.target.value))}
                        disabled={borderCollapse === 'collapse'}
                        className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                            borderCollapse === 'collapse' ? 'bg-slate-400/50 cursor-not-allowed' : 'bg-green-200 dark:bg-green-700'
                        }`}
                    />
                     {borderCollapse === 'collapse' && (
                        <p className="text-xs text-red-500 italic">Border spacing is ignored when collapse is active.</p>
                     )}
                </div>

                <InteractiveCodeBlock 
                    code={`table {\n  border-collapse: ${borderCollapse};\n  border-spacing: ${borderSpacing}px;\n  width: 100%;\n  table-layout: fixed;\n}\n\ntd, th {\n  border: 1px solid #c7d2fe;\n  padding: 10px;\n}`}
                    title="Live CSS Output"
                />
            </div>
            
            {/* Table Visualization Column */}
            <div className="space-y-4">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Live Table Preview</h4>
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner overflow-x-auto">
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={{...cellStyle, backgroundColor: '#c7d2fe', color: '#1e40af'}}>Name</th>
                                <th style={{...cellStyle, backgroundColor: '#c7d2fe', color: '#1e40af'}}>Sales</th>
                                <th style={{...cellStyle, backgroundColor: '#c7d2fe', color: '#1e40af'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={cellStyle}>Alice M.</td>
                                <td style={cellStyle}>$4,500</td>
                                <td style={cellStyle}>Active</td>
                            </tr>
                            <tr>
                                <td style={cellStyle}>Bob L.</td>
                                <td style={cellStyle}>$2,100</td>
                                <td style={cellStyle}>On Hold</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </section>

        {/* Section 3: Advanced Styling and Striping */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <Palette className="w-8 h-8 mr-4 text-purple-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Section 3: Visual Styling (Striping and Appearance)
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-4xl">
            Clean, readable tables rely heavily on styling for visual hierarchy and readability.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {advancedProperties.map((prop, index) => (
                <LessonPropertyCard key={index} {...prop} />
            ))}
          </div>
        </section>


        {/* Success Message */}
        <footer className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 lg:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Lesson Complete: Table Styling Mastered!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              You now know how to structure, control layout, and style tables professionally using modern CSS properties.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Continue to Next Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default CssTables;
