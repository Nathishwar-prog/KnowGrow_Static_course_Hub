import React from 'react';
import type { Course } from '../../App';
import { ReferenceCard, ReferenceLink } from './referenceData';

interface ReferenceProps {
    onSwitchToTutorial: (course: Course) => void;
}

const SqlReference: React.FC<ReferenceProps> = ({ onSwitchToTutorial }) => (
  <>
    <h1 className="text-5xl font-bold mb-8 text-gray-800 dark:text-gray-100">SQL Resources</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReferenceCard icon="fa-book-open" title="KG Documentation">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Start querying databases with our step-by-step SQL tutorial.</p>
        <button 
            onClick={() => onSwitchToTutorial('sql')} 
            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          KnowGrow SQL Tutorial
        </button>
      </ReferenceCard>
      <ReferenceCard icon="fa-globe" title="Database Documentation">
        <ReferenceLink href="https://www.postgresql.org/docs/">
          PostgreSQL Documentation
        </ReferenceLink>
        <p className="text-xs text-gray-500 dark:text-gray-400">Official docs for one of the world's most advanced open source relational databases.</p>
        
        <ReferenceLink href="https://dev.mysql.com/doc/">
          MySQL Documentation
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">Official docs for the popular open-source relational database.</p>

         <ReferenceLink href="https://sqlite.org/docs.html">
          SQLite Documentation
        </ReferenceLink>
         <p className="text-xs text-gray-500 dark:text-gray-400">Official docs for the widely used serverless, self-contained SQL database engine.</p>
      </ReferenceCard>
      <ReferenceCard icon="fa-brands fa-youtube" title="YouTube Courses">
        <ReferenceLink href="https://www.youtube.com/watch?v=HXV3zeQKqGY">
          FreeCodeCamp - SQL for Beginners
        </ReferenceLink>
        <ReferenceLink href="https://www.youtube.com/watch?v=7S_tz1z_5bA">
          Programming with Mosh - MySQL Tutorial
        </ReferenceLink>
      </ReferenceCard>
    </div>
  </>
);

export default SqlReference;
