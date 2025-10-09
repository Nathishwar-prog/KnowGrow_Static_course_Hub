import React from 'react';
import type { Course } from '../../App';
import { ReferenceCard, ReferenceLink } from './referenceData';

interface ReferenceProps {
    onSwitchToTutorial: (course: Course) => void;
}

const CssReference: React.FC<ReferenceProps> = ({ onSwitchToTutorial }) => (
  <>
    <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100">CSS Resources</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReferenceCard icon="fa-book-open" title="KG Documentation">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Go to our comprehensive CSS tutorial to learn styling from the ground up.</p>
        <button 
            onClick={() => onSwitchToTutorial('css')} 
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          KnowGrow CSS Tutorial
        </button>
      </ReferenceCard>
      <ReferenceCard icon="fa-globe" title="Official Documentation">
        <ReferenceLink href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          MDN Web Docs - CSS
        </ReferenceLink>
        <p className="text-xs text-gray-500 dark:text-gray-400">The ultimate reference for every CSS property and concept, with interactive examples.</p>
        
        <ReferenceLink href="https://www.w3.org/Style/CSS/specs/">
          W3C CSS Specifications
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">The official specifications from the creators of CSS.</p>
      </ReferenceCard>
      <ReferenceCard icon="fa-brands fa-youtube" title="YouTube Courses">
        <ReferenceLink href="https://www.youtube.com/watch?v=OXGznpKZ_sA">
          FreeCodeCamp - CSS Full Course
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=1Rs2ND1ryYc">
          Traversy Media - CSS Crash Course
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=J35jug1uHzE">
          Kevin Powell - Conquering Responsive Layouts
        </ReferenceLink>
      </ReferenceCard>
    </div>
  </>
);

export default CssReference;
