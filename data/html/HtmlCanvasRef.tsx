import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlCanvasRef: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;canvas&gt;</code> element provides a surface for drawing 2D graphics using JavaScript.</p>
    <p className="text-lg leading-relaxed mt-4">This page serves as a quick reference for the properties and methods of the 2D rendering context object, obtained by calling <code>canvas.getContext("2d")</code>.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Canvas 2D Context Properties</h2>
    <SimpleTable
      headers={['Property', 'Description']}
      rows={[
        ['fillStyle', 'Sets the color, gradient, or pattern used to fill a drawing.'],
        ['strokeStyle', 'Sets the color, gradient, or pattern used for the stroke (outline) of a drawing.'],
        ['lineWidth', 'Sets the width of the line for stroking.'],
        ['font', 'Sets the current font properties for text content.'],
        ['textAlign', 'Sets the alignment for text (e.g., "center", "right").'],
        ['globalAlpha', 'Sets the alpha (transparency) value for new shapes.'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Canvas 2D Context Methods</h2>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Rectangles</h3>
    <SimpleTable
      headers={['Method', 'Description']}
      rows={[
        ['fillRect(x, y, width, height)', 'Draws a "filled" rectangle.'],
        ['strokeRect(x, y, width, height)', 'Draws a rectangular outline.'],
        ['clearRect(x, y, width, height)', 'Clears the specified rectangular area, making it fully transparent.'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Paths</h3>
    <SimpleTable
      headers={['Method', 'Description']}
      rows={[
        ['beginPath()', 'Begins a new path or resets the current path.'],
        ['closePath()', 'Creates a path from the current point back to the starting point.'],
        ['moveTo(x, y)', 'Moves the path to the specified point in the canvas, without creating a line.'],
        ['lineTo(x, y)', 'Adds a new point and creates a line to that point from the last specified point.'],
        ['arc(x, y, r, sAngle, eAngle)', 'Creates an arc/curve (used to create circles, or parts of circles).'],
        ['fill()', 'Fills the current drawing (path).'],
        ['stroke()', 'Draws the path you have defined.'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Text</h3>
    <SimpleTable
      headers={['Method', 'Description']}
      rows={[
        ['fillText(text, x, y)', 'Draws "filled" text on the canvas.'],
        ['strokeText(text, x, y)', 'Draws text on the canvas (with no fill).'],
        ['measureText(text)', 'Returns an object that contains the width of the specified text.'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <p>This is a selection of the most common methods. The Canvas API is extensive and includes more advanced features for transformations, image manipulation, and pixel data access.</p>
    </InfoBox>
  </>
);

export default HtmlCanvasRef;