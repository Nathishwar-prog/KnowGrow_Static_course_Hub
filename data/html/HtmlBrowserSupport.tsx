import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlBrowserSupport: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Not all HTML features are supported by all web browsers. This reference page explains the importance of checking browser compatibility for the HTML tags and attributes you use.</p>
    <p className="text-lg leading-relaxed mt-4">Modern browsers are very good at supporting HTML5, CSS3, and modern JavaScript, but older browsers may lack support for newer features. It is important to know what features are supported by which browsers.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Checking Browser Support</h2>
    <p className="text-lg leading-relaxed">Websites like <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">Can I use...</a> provide up-to-date compatibility tables for front-end web technologies on desktop and mobile browsers.</p>
    <p className="text-lg leading-relaxed mt-4">Below is an example of a browser support table for the HTML <code>&lt;details&gt;</code> element, which creates a disclosure widget.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Browser Compatibility for &lt;details&gt;</h3>
    <SimpleTable
      headers={['Browser', 'Supported Version']}
      rows={[
        ['<i class="fab fa-chrome mr-2"></i> Google Chrome', '12 and later'],
        ['<i class="fab fa-firefox-browser mr-2"></i> Mozilla Firefox', '49 and later'],
        ['<i class="fab fa-edge mr-2"></i> Microsoft Edge', '79 and later'],
        ['<i class="fab fa-safari mr-2"></i> Apple Safari', '6 and later'],
        ['<i class="fab fa-opera mr-2"></i> Opera', '15 and later'],
      ]}
    />

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-10">
      <h4 className="font-bold">Progressive Enhancement</h4>
      <p className="mt-2">When using new HTML features, it's a good practice to follow the principle of progressive enhancement. This means building a baseline experience that works for all users, and then adding enhancements for users with more capable browsers. For example, the content inside a <code>&lt;details&gt;</code> tag is visible by default in browsers that do not support it, so the content is still accessible.</p>
    </InfoBox>
  </>
);

export default HtmlBrowserSupport;