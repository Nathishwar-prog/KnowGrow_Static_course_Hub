import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlCanvas: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;canvas&gt;</code> element is used to draw graphics on a web page, on the fly, via scripting (usually JavaScript).</p>
    <p className="text-lg leading-relaxed mt-4">The <code>&lt;canvas&gt;</code> element is only a container for graphics. You must use JavaScript to actually draw the graphics.</p>
    <p className="text-lg leading-relaxed mt-4">Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Getting Started with Canvas</h2>
    <p className="text-lg leading-relaxed">A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.</p>
    <p className="text-lg leading-relaxed mt-4">The markup looks like this:</p>
    <CodeBlock language="html">{`<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>It's important to specify an <code>id</code> attribute so you can refer to it in a script, and a <code>width</code> and <code>height</code> attribute to define the size of the canvas.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Drawing on the Canvas with JavaScript</h2>
    <p className="text-lg leading-relaxed">To draw on the canvas, you first need to find the canvas element and then get its 2D drawing context.</p>
    <CodeBlock language="javascript">{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">The <code>getContext("2d")</code> object is a built-in HTML5 object with many properties and methods for drawing.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example: Drawing a Rectangle</h3>
    <p className="text-lg leading-relaxed">The <code>fillRect(x, y, width, height)</code> method draws a rectangle filled with the current fill style.</p>
    <CodeBlock language="javascript">{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000"; // Set fill color to red
ctx.fillRect(20, 20, 150, 100); // Draw a rectangle`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example: Drawing a Line</h3>
    <p className="text-lg leading-relaxed">To draw a line, you use the <code>moveTo(x, y)</code> and <code>lineTo(x, y)</code> methods, followed by <code>stroke()</code> to make it visible.</p>
    <CodeBlock language="javascript">{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);       // Move the pen to coordinates (0,0)
ctx.lineTo(200, 100);   // Draw a line to coordinates (200,100)
ctx.stroke();           // Render the line`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Example: Drawing a Circle</h3>
    <p className="text-lg leading-relaxed">To draw a circle, you use the <code>arc(x, y, radius, startAngle, endAngle)</code> method.</p>
    <CodeBlock language="javascript">{`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath(); // Start a new path
ctx.arc(95, 50, 40, 0, 2 * Math.PI); // Create a circle path
ctx.stroke(); // Render the circle border`}</CodeBlock>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Canvas vs. SVG</h2>
    <p className="text-lg leading-relaxed">Here's a quick comparison between HTML Canvas and SVG:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <h4 className="font-bold text-xl mb-2">Canvas</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>Resolution dependent (pixel-based)</li>
                <li>No support for event handlers on shapes</li>
                <li>Poor text rendering capabilities</li>
                <li>Best suited for graphic-intensive games or dynamic visualizations</li>
                <li>You can save the resulting image as .png or .jpg</li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-xl mb-2">SVG</h4>
            <ul className="list-disc list-inside space-y-2">
                <li>Resolution independent (vector-based)</li>
                <li>Support for event handlers on shapes</li>
                <li>Accessible and good for SEO</li>
                <li>Best suited for high-quality, scalable graphics like logos and icons</li>
                <li>Not suited for intensive game applications</li>
            </ul>
        </div>
    </div>
  </>
);

export default HtmlCanvas;