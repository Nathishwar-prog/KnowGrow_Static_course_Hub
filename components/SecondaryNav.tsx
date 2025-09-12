import React from 'react';

const TechLink: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active = false }) => (
  <a href="#" className={`py-2 px-4 text-sm font-medium rounded-md ${active ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
    {children}
  </a>
);

const SecondaryNav: React.FC = () => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white hidden md:flex items-center overflow-x-auto whitespace-nowrap p-2 space-x-2 shadow-md">
      <TechLink active>HTML</TechLink>
      <TechLink>CSS</TechLink>
      <TechLink>JAVASCRIPT</TechLink>
      <TechLink>SQL</TechLink>
      <TechLink>PYTHON</TechLink>
      <TechLink>JAVA</TechLink>
      <TechLink>PHP</TechLink>
      <TechLink>BOOTSTRAP</TechLink>
      <TechLink>HOW TO</TechLink>
      <TechLink>W3.CSS</TechLink>
      <TechLink>C</TechLink>
      <TechLink>C++</TechLink>
      <TechLink>C#</TechLink>
      <TechLink>REACT</TechLink>
      <TechLink>R</TechLink>
    </nav>
  );
};

export default SecondaryNav;