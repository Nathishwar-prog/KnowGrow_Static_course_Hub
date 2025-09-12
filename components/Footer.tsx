import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black/30 text-white p-10 text-center text-sm border-t border-transparent dark:border-gray-800">
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <a href="#" className="bg-indigo-600 text-white font-bold py-2 px-5 rounded-full hover:bg-indigo-700">SPACES</a>
        <a href="#" className="bg-sky-400 text-white font-bold py-2 px-5 rounded-full hover:bg-sky-500">UPGRADE</a>
        <a href="#" className="bg-gray-700 text-white font-bold py-2 px-5 rounded-full hover:bg-gray-600">NEWSLETTER</a>
        <a href="#" className="bg-gray-700 text-white font-bold py-2 px-5 rounded-full hover:bg-gray-600">GET CERTIFIED</a>
        <a href="#" className="bg-gray-700 text-white font-bold py-2 px-5 rounded-full hover:bg-gray-600">REPORT ERROR</a>
      </div>
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <h4 className="font-bold mb-3 text-gray-400">Top Tutorials</h4>
            <a href="#" className="block text-gray-300 hover:underline py-1">HTML Tutorial</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">CSS Tutorial</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">JavaScript Tutorial</a>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-gray-400">Top References</h4>
            <a href="#" className="block text-gray-300 hover:underline py-1">HTML Reference</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">CSS Reference</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">JavaScript Reference</a>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-gray-400">Top Examples</h4>
            <a href="#" className="block text-gray-300 hover:underline py-1">HTML Examples</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">CSS Examples</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">JavaScript Examples</a>
          </div>
           <div>
            <h4 className="font-bold mb-3 text-gray-400">Get Certified</h4>
            <a href="#" className="block text-gray-300 hover:underline py-1">HTML Certificate</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">CSS Certificate</a>
            <a href="#" className="block text-gray-300 hover:underline py-1">JavaScript Certificate</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-6 text-gray-400">
        <a href="#" className="hover:text-white">FORUM</a>
        <span>|</span>
        <a href="#" className="hover:text-white">ABOUT</a>
      </div>
      <div className="flex justify-center space-x-5 mb-6 text-2xl text-gray-400">
        <a href="#" className="hover:text-white"><i className="fab fa-facebook-square"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-white"><i className="fab fa-discord"></i></a>
      </div>
      <p className="text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
        KnowGrow is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our <a href="#" className="underline hover:text-gray-300 dark:hover:text-white">terms of use</a>, <a href="#" className="underline hover:text-gray-300 dark:hover:text-white">cookie and privacy policy</a>.
      </p>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        <a href="#" className="underline hover:text-gray-300 dark:hover:text-white">Copyright 1999-2024</a> by KnowGrow. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
