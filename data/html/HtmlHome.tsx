import React from 'react';
import { InfoBox, CodeBlock } from '../components';

const HtmlHome: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML is the standard markup language for Web pages.</p>
    <p className="text-lg leading-relaxed mt-4">With HTML you can create your own Website.</p>
    <p className="text-lg leading-relaxed mt-4">HTML is easy to learn - You will enjoy it!</p>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300 mt-10">
        <h4 className="font-bold text-lg">Easy Learning with our "Try it Yourself" Editor</h4>
        <p className="mt-2">With our "Try it Yourself" editor, you can edit the HTML code and view the result in your browser.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-12 mb-4">HTML Example</h2>
    <p>In this HTML tutorial, you will find hundreds of HTML examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</p>
     <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}</CodeBlock>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300 mt-10">
      <h4 className="font-bold text-lg">HTML Exercises</h4>
      <p className="mt-2">This HTML tutorial also contains nearly 100 HTML exercises.</p>
      <a href="#" className="inline-block mt-4 bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
        Test Yourself With Exercises!
      </a>
    </InfoBox>

    <InfoBox className="bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-500 text-sky-800 dark:text-sky-300 mt-10">
      <h4 className="font-bold text-lg">HTML Quiz Test</h4>
      <p className="mt-2">Test your HTML skills with our HTML Quiz!</p>
       <a href="#" className="inline-block mt-4 bg-sky-600 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-700 transition-colors">
        Start HTML Quiz!
      </a>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-12 mb-4">HTML References</h2>
    <p className="text-lg leading-relaxed">At KnowGrow you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, lang codes, HTTP messages, and more.</p>
  </>
);

export default HtmlHome;
