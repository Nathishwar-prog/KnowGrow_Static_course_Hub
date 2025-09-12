import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlDiv: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;div&gt;</code> element is a generic container for flow content.</p>
    <p className="text-lg leading-relaxed mt-4">It has no effect on the content or layout until styled using CSS. As a "pure" container, the <code>&lt;div&gt;</code> element does not inherently represent anything.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Using the div Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;div&gt;</code> element is a block-level element that is commonly used as a container for other HTML elements. This allows you to group sections of your document together and apply styles or scripts to them collectively.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example: Styling a Section</h3>
    <p className="text-lg leading-relaxed">In this example, we use a <code>&lt;div&gt;</code> element to group together a heading and two paragraphs. We then apply a background color and some padding to the entire group using CSS.</p>

    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
<style>
.my-section {
  background-color: #1f2937; /* dark gray */
  color: white;
  padding: 20px;
  border-radius: 8px;
  border-left: 5px solid #4f46e5; /* indigo */
}
</style>
</head>
<body>

<div class="my-section">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>

</body>
</html>`}</CodeBlock>

    <p className="text-lg leading-relaxed mt-6">Here is how the above code will be rendered:</p>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <div style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '5px solid #4f46e5'
        }}>
          <h2 className="text-2xl font-bold">London</h2>
          <p className="mt-2">London is the capital city of England.</p>
          <p className="mt-2">It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </div>
    </div>
    
    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Use Semantic HTML First</h4>
        <p className="mt-2">While <code>&lt;div&gt;</code> is extremely useful for layout and styling, you should always prefer to use more semantic HTML elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, or <code>&lt;header&gt;</code> when they are appropriate. Use <code>&lt;div&gt;</code> only when there is no other suitable semantic element.</p>
    </InfoBox>
  </>
);

export default HtmlDiv;