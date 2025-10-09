import React from 'react';
import type { Course } from '../../App';
import { ReferenceCard, ReferenceLink } from './referenceData';

interface ReferenceProps {
    onSwitchToTutorial: (course: Course) => void;
}

const HtmlReference: React.FC<ReferenceProps> = ({ onSwitchToTutorial }) => (
  <>
    <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100">HTML Resources</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReferenceCard icon="fa-book-open" title="KG Documentation">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Go to our comprehensive HTML tutorial to learn from scratch.</p>
        <button 
            onClick={() => onSwitchToTutorial('html')} 
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          KnowGrow HTML Tutorial
        </button>
      </ReferenceCard>
      <ReferenceCard icon="fa-globe" title="Official Documentation">
        <ReferenceLink href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          MDN Web Docs - HTML
        </ReferenceLink>
        <p className="text-xs text-gray-500 dark:text-gray-400">The best place for detailed explanations and examples of every HTML element and attribute.</p>
        
        <ReferenceLink href="https://html.spec.whatwg.org/multipage/">
          WHATWG HTML Living Standard
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">The official, continuously updated specification for HTML.</p>
      </ReferenceCard>
      <ReferenceCard icon="fa-brands fa-youtube" title="YouTube Courses">
        <ReferenceLink href="https://www.youtube.com/watch?v=kUMe1FH4CHE">
          FreeCodeCamp - HTML Full Course
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=pQN-pnXPaVg">
          Traversy Media - HTML Crash Course
        </ReferenceLink>
         <ReferenceLink href="https://www.youtube.com/watch?v=G3e-cpL7ofc">
          SuperSimpleDev - HTML Full Course for Beginners
        </ReferenceLink>
      </ReferenceCard>
    </div>
  </>
);

export default HtmlReference;
