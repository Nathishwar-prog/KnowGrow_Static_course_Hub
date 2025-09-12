import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlSvg: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">SVG stands for Scalable Vector Graphics. It is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.</p>
    <p className="text-lg leading-relaxed mt-4">SVG is a W3C recommendation and integrates with other web standards like CSS, DOM, and JavaScript.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Advantages of SVG</h2>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>Scalability:</strong> SVG images can be scaled to any size without losing quality.</li>
        <li><strong>Small File Size:</strong> SVG files are often smaller than raster image formats like JPEG or PNG.</li>
        <li><strong>Accessibility:</strong> SVG is text-based, so it can be indexed, searched, and made accessible.</li>
        <li><strong>Styling & Scripting:</strong> You can style SVG with CSS and manipulate it with JavaScript.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-10 mb-4">Embedding SVG in HTML</h2>
    <p className="text-lg leading-relaxed">You can embed SVG code directly into your HTML document using the <code>&lt;svg&gt;</code> element.</p>
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

</body>
</html>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
        </svg>
    </div>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Basic SVG Shapes</h2>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Rectangle &lt;rect&gt;</h3>
    <CodeBlock language="html">{`<svg width="400" height="110">
  <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
</svg>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <svg width="400" height="110">
            <rect width="300" height="100" style={{ fill: 'rgb(0,0,255)', strokeWidth: 10, stroke: 'rgb(0,0,0)' }} />
        </svg>
    </div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Circle &lt;circle&gt;</h3>
    <CodeBlock language="html">{`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        </svg>
    </div>

    <h3 className="text-2xl font-bold mt-8 mb-3">Line &lt;line&gt;</h3>
    <CodeBlock language="html">{`<svg width="200" height="100">
  <line x1="0" y1="0" x2="200" y2="100" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md text-center">
        <svg width="200" height="100">
            <line x1="0" y1="0" x2="200" y2="100" style={{ stroke: 'rgb(255,0,0)', strokeWidth: 2 }} />
        </svg>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Canvas vs. SVG</h2>
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
      <p><strong>SVG</strong> is a language for describing 2D graphics in XML.</p>
      <p className="mt-2"><strong>Canvas</strong> draws 2D graphics, on the fly (with a JavaScript).</p>
      <p className="mt-4"><strong>SVG</strong> is XML-based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.</p>
      <p className="mt-2">In <strong>SVG</strong>, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.</p>
      <p className="mt-4"><strong>Canvas</strong> is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.</p>
    </InfoBox>
  </>
);

export default HtmlSvg;