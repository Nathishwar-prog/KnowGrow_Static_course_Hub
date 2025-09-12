import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlResponsive: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Responsive Web Design is about creating web pages that look good on all devices.</p>
    <p className="text-lg leading-relaxed mt-4">A responsive web design will automatically adjust for different screen sizes and viewports.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Setting The Viewport</h2>
    <p className="text-lg leading-relaxed">To create a responsive website, you must add the following <code>&lt;meta&gt;</code> tag to all your web pages:</p>
    <CodeBlock language="html">{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">This will set the viewport of your page, which gives the browser instructions on how to control the page's dimensions and scaling.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
      <li><code>width=device-width</code> tells the browser to set the width of the page to match the screen-width of the device.</li>
      <li><code>initial-scale=1.0</code> sets the initial zoom level when the page is first loaded.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-10 mb-4">Responsive Images</h2>
    <p className="text-lg leading-relaxed">Responsive images are images that scale nicely to fit any browser size. A simple way to achieve this is by using the CSS <code>width</code> property set to <code>100%</code>.</p>
    <CodeBlock language="html">{`<img src="img_girl.jpg" style="width:100%;" alt="Girl in a jacket">`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">For more advanced responsive image handling, you can use the <code>&lt;picture&gt;</code> element, which allows you to serve different images for different screen sizes.</p>
    <CodeBlock language="html">{`<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg" alt="Girl">
</picture>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Responsive Text Size</h2>
    <p className="text-lg leading-relaxed">The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window.</p>
    <CodeBlock language="html">{`<h1 style="font-size:10vw">Hello World</h1>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">Resize the browser window to see how the font size scales.</p>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Media Queries</h2>
    <p className="text-lg leading-relaxed">In addition to resizing text and images, it is also common to use media queries to change the layout of a page depending on the screen size.</p>
    <p className="text-lg leading-relaxed mt-4">A media query is a CSS technique introduced in CSS3. It uses the <code>@media</code> rule to include a block of CSS properties only if a certain condition is true (e.g. screen width is below 600px).</p>
    <CodeBlock language="css">{`<style>
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
/* ... etc up to col-12 ... */

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>`}</CodeBlock>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Responsive Web Design is a large topic and primarily involves CSS. This page provides a brief introduction from an HTML perspective. To learn more, study CSS Media Queries.</p>
    </InfoBox>
  </>
);

export default HtmlResponsive;