import React from 'react';
import type { Course } from '../../App';
import HtmlReference from './HtmlReference';
import CssReference from './CssReference';
import JsReference from './JsReference';
import SqlReference from './SqlReference';
import PythonReference from './PythonReference';

export const ReferenceCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 h-full">
    <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
      <i className={`fa-solid ${icon} mr-3 text-indigo-400 w-6 text-center`}></i>
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

export const ReferenceLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group"
  >
    {children} <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1 opacity-70 group-hover:opacity-100 transition-opacity"></i>
  </a>
);

export const ALL_REFERENCES: Partial<Record<Course, { component: React.FC<any> }>> = {
  html: { component: HtmlReference },
  css: { component: CssReference },
  js: { component: JsReference },
  sql: { component: SqlReference },
  python: { component: PythonReference },
};
