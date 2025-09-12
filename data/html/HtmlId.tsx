import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlId: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>id</code> attribute is used to specify a unique id for an HTML element.</p>
    <p className="text-lg leading-relaxed mt-4">You cannot have more than one element with the same id in an HTML document.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Using The id Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>id</code> attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>id</code> attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Styling with CSS</h3>
    <p className="text-lg leading-relaxed">To select an element with a specific id in CSS, write a hash (#) character, followed by the id of the element.</p>
    <CodeBlock>{`<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Using id for Bookmark Links</h2>
    <p className="text-lg leading-relaxed">HTML bookmarks are used to allow readers to jump to specific parts of a webpage. You can create a bookmark by giving an element an <code>id</code>, and then linking to that <code>id</code> from another part of the page.</p>

    <CodeBlock>{`<!-- Link to the bookmark -->
<a href="#C4">Jump to Chapter 4</a>

... some content ...

<!-- The bookmark element -->
<h2 id="C4">Chapter 4</h2>
<p>This chapter is about...</p>`}</CodeBlock>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Using id in JavaScript</h2>
    <p className="text-lg leading-relaxed">The <code>id</code> attribute can also be used by JavaScript to perform tasks on a specific element.</p>
    <p className="text-lg leading-relaxed mt-4">JavaScript can access an element with a specific id with the <code>getElementById()</code> method:</p>
    <CodeBlock>{`<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Difference Between Class and ID</h2>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page.</p>
        <table className="min-w-full my-4">
            <thead>
                <tr>
                    <th className="text-left font-bold p-2">Point</th>
                    <th className="text-left font-bold p-2">Class</th>
                    <th className="text-left font-bold p-2">ID</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t dark:border-gray-600">
                    <td className="p-2">Uniqueness</td>
                    <td className="p-2">Can be used on multiple elements</td>
                    <td className="p-2"><strong>Must be unique</strong> to one element</td>
                </tr>
                <tr className="border-t dark:border-gray-600">
                    <td className="p-2">CSS Selector</td>
                    <td className="p-2"><code>.classname</code> (Period)</td>
                    <td className="p-2"><code>#idname</code> (Hash)</td>
                </tr>
                 <tr className="border-t dark:border-gray-600">
                    <td className="p-2">Primary Use</td>
                    <td className="p-2">Styling groups of elements</td>
                    <td className="p-2">Bookmarks and JavaScript hooks</td>
                </tr>
            </tbody>
        </table>
    </InfoBox>
    <InfoBox className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-800 dark:text-red-300">
        <h4 className="font-bold">Syntax Rules</h4>
        <p>An ID name must contain at least one character, cannot start with a number, and must not contain whitespace (spaces, tabs, etc.).</p>
    </InfoBox>
  </>
);

export default HtmlId;
