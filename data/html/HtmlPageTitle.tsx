import React from 'react';
import { CodeBlock, InfoBox, BrowserMockup } from '../components';

const HtmlPageTitle: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Every HTML document should have a <code>&lt;title&gt;</code> element in the <code>&lt;head&gt;</code> section.</p>
    <p className="text-lg leading-relaxed mt-4">The page title is not displayed on the page itself, but in the browser's title bar or tab.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The Purpose of the Title Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;title&gt;</code> element is required in all HTML documents and it defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;title&gt;</code> element:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li>defines a title in the browser toolbar</li>
        <li>provides a title for the page when it is added to favorites</li>
        <li>displays a title for the page in search-engine results</li>
    </ul>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example</h3>
    <p className="text-lg leading-relaxed">Here is a simple example of how to add a title to your page:</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>

<p>The content of the document......</p>

</body>
</html>`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-6">This is how the title will appear in a browser tab:</p>
    <BrowserMockup title="A Meaningful Page Title">
        <div className="flex items-center">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=" alt="Favicon" className="w-4 h-4 mr-2 opacity-50" />
            <span>A Meaningful Page Title</span>
        </div>
    </BrowserMockup>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Why is the Page Title Important?</h2>
    <p className="text-lg leading-relaxed">The page title is one of the most important factors for Search Engine Optimization (SEO). Search engines like Google use the page title to understand what your page is about and to display it in search results.</p>
    <p className="text-lg leading-relaxed mt-4">A good, descriptive page title can significantly improve your website's ranking and click-through rate from search results.</p>
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Tips for Writing Good Page Titles</h4>
        <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Be descriptive and concise:</strong> Aim for titles under 60 characters.</li>
            <li><strong>Use keywords:</strong> Include relevant keywords that people might search for, but avoid "keyword stuffing".</li>
            <li><strong>Be unique:</strong> Each page on your site should have a unique title that accurately reflects its content.</li>
            <li><strong>Brand your titles:</strong> Consider adding your site or brand name at the end, like "HTML Page Titles | KnowGrow".</li>
        </ul>
    </InfoBox>
  </>
);

export default HtmlPageTitle;
