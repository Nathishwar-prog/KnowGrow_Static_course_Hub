import React from 'react';
import type { Course } from '../../App';
import { ReferenceCard, ReferenceLink } from './referenceData';

interface ReferenceProps {
    onSwitchToTutorial: (course: Course) => void;
}

const PythonReference: React.FC<ReferenceProps> = ({ onSwitchToTutorial }) => (
  <>
    <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100">Python Resources</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReferenceCard icon="fa-book-open" title="KG Documentation">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Begin your journey into Python programming with our hands-on tutorial.</p>
        <button 
            onClick={() => onSwitchToTutorial('python')} 
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          KnowGrow Python Tutorial
        </button>
      </ReferenceCard>
      <ReferenceCard icon="fa-globe" title="Official Documentation">
        <ReferenceLink href="https://docs.python.org/3/">
          Python.org Official Documentation
        </ReferenceLink>
        <p className="text-xs text-gray-500 dark:text-gray-400">The primary source for Python language and library information.</p>
        
        <ReferenceLink href="https://peps.python.org/">
          Python Enhancement Proposals (PEPs)
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">Design documents for new features and aspects of Python.</p>
      </ReferenceCard>
      <ReferenceCard icon="fa-brands fa-youtube" title="YouTube Courses">
        <ReferenceLink href="https://www.youtube.com/watch?v=rfscVS0vtbw">
          FreeCodeCamp - Python for Beginners
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=_uQrJ0TkZlc">
          Programming with Mosh - Python for Beginners
        </ReferenceLink>
         <ReferenceLink href="https://www.youtube.com/watch?v=eWRfhZUzrAc">
          CS Dojo - Python Tutorial for Absolute Beginners
        </ReferenceLink>
      </ReferenceCard>
    </div>
  </>
);

export default PythonReference;
