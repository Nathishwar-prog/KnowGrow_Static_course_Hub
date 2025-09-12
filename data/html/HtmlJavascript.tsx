import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlJavascript: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">JavaScript is the programming language of the Web. JavaScript can make web pages more dynamic and interactive.</p>
    <p className="text-lg leading-relaxed mt-4">The HTML <code>&lt;script&gt;</code> tag is used to embed a client-side script (JavaScript).</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What Can JavaScript Do?</h2>
    <p className="text-lg leading-relaxed">JavaScript can change HTML content, attribute values, and CSS styles. It can also hide or show elements, and much more.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Change HTML Content</h3>
    <p className="text-lg leading-relaxed">One of many JavaScript HTML methods is <code>getElementById()</code>. The example below "finds" an HTML element (with id="demo"), and changes the element content (<code>innerHTML</code>) to "Hello JavaScript!":</p>
    <CodeBlock language="html">{`<p id="demo">This is a demonstration.</p>

<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Change Attribute Values</h3>
    <p className="text-lg leading-relaxed">In this example, JavaScript changes the value of the <code>src</code> (source) attribute of an <code>&lt;img&gt;</code> tag:</p>
    <CodeBlock language="html">{`<!-- An image that will be changed by the script -->
<img id="myImage" src="https://i.postimg.cc/KzMLb25Y/bulboff.gif" style="width:100px" alt="Light bulb off">

<script>
function turnOn() {
    document.getElementById('myImage').src = 'https://i.postimg.cc/65Y7hS2w/bulbon.gif';
}
</script>

<button onclick="turnOn()">Turn on the light</button>`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Change HTML Styles (CSS)</h3>
    <p className="text-lg leading-relaxed">Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
    <CodeBlock language="html">{`<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";
</script>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Internal vs. External JavaScript</h2>
    <p className="text-lg leading-relaxed">You can write JavaScript directly into your HTML file (Internal), or you can link to an external JavaScript file (External).</p>
    
    <h3 className="text-2xl font-bold mt-6 mb-3">Internal JavaScript</h3>
    <p className="text-lg leading-relaxed">Scripts can be placed in the <code>&lt;body&gt;</code>, or in the <code>&lt;head&gt;</code> section of an HTML page, or in both.</p>
    
    <h3 className="text-2xl font-bold mt-6 mb-3">External JavaScript</h3>
    <p className="text-lg leading-relaxed">External scripts are practical when the same code is used in many different web pages. To use an external script, put the name of the script file in the <code>src</code> (source) attribute of a <code>&lt;script&gt;</code> tag:</p>
    <CodeBlock language="html">{`<!-- The myScript.js file contains the JavaScript code -->
<script src="myScript.js"></script>`}</CodeBlock>
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">Best Practice</h4>
        <p>Placing scripts in external files has some advantages:
            <ul className="list-disc list-inside mt-2">
                <li>It separates HTML and code</li>
                <li>It makes HTML and JavaScript easier to read and maintain</li>
                <li>Cached JavaScript files can speed up page loads</li>
            </ul>
        </p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;noscript&gt; Tag</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;noscript&gt;</code> tag provides an alternate content for users that have disabled scripts in their browser, or have a browser that doesn't support client-side scripts.</p>
    <CodeBlock language="html">{`<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>`}</CodeBlock>
  </>
);

export default HtmlJavascript;