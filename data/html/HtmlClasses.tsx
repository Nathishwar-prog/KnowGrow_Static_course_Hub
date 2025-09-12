import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlClasses: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>class</code> attribute is used to specify one or more class names for an HTML element.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>class</code> attribute can be used on any HTML element. The class name can be used by CSS and JavaScript to perform certain tasks for elements with the specified class name.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Using The class Attribute</h2>
    <p className="text-lg leading-relaxed">In CSS, to select elements with a specific class, write a period (.) character, followed by the name of the class.</p>
    <p className="text-lg leading-relaxed mt-4">In the example below, we have three <code>&lt;div&gt;</code> elements with <code>class="city"</code>. All of them will be styled equally according to the <code>.city</code> style definition in the head section:</p>
    
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Using Multiple Classes</h2>
    <p className="text-lg leading-relaxed">HTML elements can belong to more than one class. To specify multiple classes, separate the class names with a space, e.g. <code>&lt;div class="city main"&gt;</code>.</p>
    <p className="text-lg leading-relaxed mt-4">The element will get the styles from all the specified classes.</p>
    <CodeBlock language="html">{`<style>
.main {
  text-align: center;
}
</style>
...
<div class="city main">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>
`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Different Elements Can Share Same Class</h2>
    <p className="text-lg leading-relaxed">Different HTML elements can point to the same class name. This allows you to define a style that can be reused across your site on various elements.</p>
    <CodeBlock language="html">{`<h2 class="city">London</h2>
<p class="city">London is the capital of England.</p>`}</CodeBlock>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold">Usage in JavaScript</h4>
        <p>The class name can also be used by JavaScript to perform certain tasks for specified elements. For example, JavaScript can access elements with a specific class name with the <code>getElementsByClassName()</code> method.</p>
    </InfoBox>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Syntax Rules</h4>
        <p>A class name must not start with a number and is case-sensitive!</p>
    </InfoBox>
  </>
);

export default HtmlClasses;