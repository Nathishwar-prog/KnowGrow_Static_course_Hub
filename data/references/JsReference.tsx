import React from 'react';
import type { Course } from '../../App';
import { ReferenceCard, ReferenceLink } from './referenceData';

interface ReferenceProps {
    onSwitchToTutorial: (course: Course) => void;
}

const JsReference: React.FC<ReferenceProps> = ({ onSwitchToTutorial }) => (
  <>
    <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100">JavaScript Resources</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReferenceCard icon="fa-book-open" title="KG Documentation">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Jump into our interactive JavaScript tutorial to start programming for the web.</p>
        <button 
            onClick={() => onSwitchToTutorial('js')} 
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          KnowGrow JS Tutorial
        </button>
      </ReferenceCard>
      <ReferenceCard icon="fa-globe" title="Official Documentation">
        <ReferenceLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          MDN Web Docs - JavaScript
        </ReferenceLink>
        <p className="text-xs text-gray-500 dark:text-gray-400">An indispensable resource for JavaScript developers of all levels.</p>
        
        <ReferenceLink href="https://tc39.es/ecma262/">
          ECMAScript Language Specification
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">The official standard that defines the JavaScript language.</p>
      </ReferenceCard>
      <ReferenceCard icon="fa-brands fa-youtube" title="YouTube Courses">
        <ReferenceLink href="https://www.youtube.com/watch?v=PkZNo7MFNFg">
          FreeCodeCamp - Full JavaScript Course
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=hdI2bqOjy3c">
          Traversy Media - JavaScript Crash Course
        </ReferenceLink>
         <ReferenceLink href="https://www.youtube.com/watch?v=W6NZfCO5SIk">
          Fireship - JavaScript in 100 Seconds
        </ReferenceLink>
      </ReferenceCard>
    </div>
  </>
);

export default JsReference;
