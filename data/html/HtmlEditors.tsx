import React from 'react';
import { InfoBox, CodeBlock, BrowserMockup, HowItWorks } from '../components';
import { useAnimation } from '../../context/AnimationContext';

const HtmlEditors: React.FC = () => {
  const { openAnimationPage } = useAnimation();
  
  return (
    <>
      <p className="text-lg leading-relaxed">Web pages can be created and modified by using professional HTML editors.</p>
      <p className="text-lg leading-relaxed mt-4">However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
      <p className="text-lg leading-relaxed mt-4">We believe that using a simple text editor is a good way to learn HTML.</p>
      <p className="text-lg leading-relaxed mt-4">Follow the steps below to create your first web page with Notepad or TextEdit.</p>
      
      <div className="text-center my-8">
        <button
            onClick={() => openAnimationPage({ animationId: 'html-editor-workflow' })}
            className="inline-flex items-center bg-green-600 text-white font-bold py-2 px-5 rounded-full hover:bg-green-700 transition-colors shadow-lg animate-pulse-green"
        >
            <i className="fa-solid fa-play-circle mr-2"></i>
            Animate the Workflow
        </button>
      </div>

      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">Step 1: Open Notepad (PC)</h2>
      <h3 className="text-2xl font-bold mt-6 mb-3">Windows 8 or later:</h3>
      <p className="text-lg leading-relaxed">Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.</p>
      <h3 className="text-2xl font-bold mt-6 mb-3">Windows 7 or earlier:</h3>
      <p className="text-lg leading-relaxed">Open <strong>Start &gt; Programs &gt; Accessories &gt; Notepad</strong></p>
      
      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">Step 1: Open TextEdit (Mac)</h2>
      <p className="text-lg leading-relaxed">Open <strong>Finder &gt; Applications &gt; TextEdit</strong>.</p>
      <p className="text-lg leading-relaxed mt-4">Also change some preferences to get the application to save files correctly. In <strong>Preferences &gt; Format &gt; choose "Plain Text"</strong>.</p>
      <p className="text-lg leading-relaxed mt-4">Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>
      <p className="text-lg leading-relaxed mt-4">Then open a new document to place the code.</p>
      
      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">Step 2: Write Some HTML</h2>
      <p className="text-lg leading-relaxed">Write or copy the following HTML code into your editor:</p>
      <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</CodeBlock>

      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">Step 3: Save the HTML Page</h2>
      <p className="text-lg leading-relaxed">Save the file on your computer. Select <strong>File &gt; Save as</strong> in the editor menu.</p>
      <p className="text-lg leading-relaxed mt-4">Name the file "<strong>index.htm</strong>" and set the encoding to <strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>
      <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-6">
        <p><strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference; it is up to you.</p>
      </InfoBox>
      
      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">Step 4: View the HTML Page in Your Browser</h2>
      <p className="text-lg leading-relaxed">Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
      <p className="text-lg leading-relaxed mt-4">The result will look much like this:</p>
      <BrowserMockup title="index.htm">
        <h1 className="text-4xl font-bold">My First Heading</h1>
        <p className="mt-4 text-lg">My first paragraph.</p>
      </BrowserMockup>

      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">KnowGrow Online Editor - "Try it Yourself"</h2>
      <p className="text-lg leading-relaxed">With our free online editor, you can edit the HTML code and view the result in your browser.</p>
      <p className="text-lg leading-relaxed mt-4">It is the perfect tool when you want to test code fast. It also has color coding and the ability to save and share code with others:</p>
      <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</CodeBlock>

      <hr className="my-8 border-gray-200 dark:border-gray-600" />
      <h2 className="text-3xl font-bold mt-10 mb-4">KnowGrow Spaces</h2>
      <p className="text-lg leading-relaxed">If you want to create your own website and save your code online, try our free website builder, called KnowGrow Spaces:</p>
      <div className="text-center my-10 p-8 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100">KnowGrow Spaces</h3>
          <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">Everything you need right in the browser.</p>
          <a href="#" className="inline-block mt-6 bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-colors text-lg">
              Get Started Now
          </a>
      </div>
      <HowItWorks />
    </>
  );
};
export default HtmlEditors;