import React from 'react';
import { CodeBlock } from '../components';

const ColorBox: React.FC<{ color: string, name: string }> = ({ color, name }) => (
    <div style={{ backgroundColor: color }} className="w-full h-24 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
        {name}
    </div>
);

const HtmlColors: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Color Names</h2>
    <p className="text-lg leading-relaxed">In HTML, a color can be specified by using a color name. HTML supports 140 standard color names.</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <ColorBox color="tomato" name="Tomato" />
        <ColorBox color="orange" name="Orange" />
        <ColorBox color="dodgerblue" name="DodgerBlue" />
        <ColorBox color="mediumseagreen" name="MediumSeaGreen" />
        <ColorBox color="gray" name="Gray" />
        <ColorBox color="slateblue" name="SlateBlue" />
        <ColorBox color="violet" name="Violet" />
        <ColorBox color="lightgray" name="LightGray" />
    </div>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Background Color</h2>
    <p className="text-lg leading-relaxed">You can set the background color for HTML elements:</p>
    <CodeBlock language="html">{`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <h1 style={{ backgroundColor: 'DodgerBlue', padding: '10px', color: 'white' }}>Hello World</h1>
        <p style={{ backgroundColor: 'Tomato', padding: '10px', color: 'white', marginTop: '10px' }}>Lorem ipsum...</p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Text Color</h2>
    <p className="text-lg leading-relaxed">You can set the color of text:</p>
    <CodeBlock language="html">{`<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <h1 style={{ color: 'Tomato' }}>Hello World</h1>
        <p style={{ color: 'DodgerBlue' }}>Lorem ipsum...</p>
        <p style={{ color: 'MediumSeaGreen' }}>Ut wisi enim...</p>
    </div>

    <h2 className="text-3xl font-bold mt-10 mb-4">Border Color</h2>
    <p className="text-lg leading-relaxed">You can set the color of borders:</p>
    <CodeBlock language="html">{`<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <h1 style={{ border: '2px solid Tomato', padding: '10px' }}>Hello World</h1>
        <h1 style={{ border: '2px solid DodgerBlue', padding: '10px', marginTop: '10px' }}>Hello World</h1>
        <h1 style={{ border: '2px solid Violet', padding: '10px', marginTop: '10px' }}>Hello World</h1>
    </div>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Color Values</h2>
    <p className="text-lg leading-relaxed">In HTML, colors can also be specified using RGB, HEX, HSL, RGBA, and HSLA values.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">RGB (Red, Green, Blue)</h3>
    <p className="text-lg leading-relaxed">RGB color values are specified with the <code>rgb()</code> function. Each parameter (red, green, blue) defines the intensity of the color as an integer between 0 and 255.</p>
    <CodeBlock language="html">{`<h1 style="background-color:rgb(255, 99, 71);">...</h1>`}</CodeBlock>
    <ColorBox color="rgb(255, 99, 71)" name="rgb(255, 99, 71)" />

    <h3 className="text-2xl font-bold mt-8 mb-3">HEX (Hexadecimal)</h3>
    <p className="text-lg leading-relaxed">HEX color values are specified with: <code>#RRGGBB</code>. RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.</p>
    <CodeBlock language="html">{`<h1 style="background-color:#ff6347;">...</h1>`}</CodeBlock>
    <div className="mt-4"><ColorBox color="#ff6347" name="#ff6347" /></div>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">HSL (Hue, Saturation, Lightness)</h3>
    <p className="text-lg leading-relaxed">HSL color values are specified with: <code>hsl(hue, saturation, lightness)</code>. Hue is a degree on the color wheel from 0 to 360. Saturation is a percentage value. Lightness is also a percentage.</p>
    <CodeBlock language="html">{`<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>`}</CodeBlock>
    <div className="mt-4"><ColorBox color="hsl(9, 100%, 64%)" name="hsl(9, 100%, 64%)" /></div>

    <h3 className="text-2xl font-bold mt-8 mb-3">RGBA and HSLA (with Alpha channel for transparency)</h3>
    <p className="text-lg leading-relaxed">RGBA and HSLA are extensions of RGB and HSL with an alpha channel (opacity) - a number between 0.0 (fully transparent) and 1.0 (fully opaque).</p>
    <CodeBlock language="html">{`<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>`}</CodeBlock>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ColorBox color="rgba(255, 99, 71, 0.5)" name="rgba(255, 99, 71, 0.5)" />
        <ColorBox color="hsla(9, 100%, 64%, 0.5)" name="hsla(9, 100%, 64%, 0.5)" />
    </div>
  </>
);

export default HtmlColors;