import React from 'react';
import { CodeBlock, InfoBox, SimpleTable } from '../components';

const HtmlVsXhtml: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">XHTML stands for EXtensible HyperText Markup Language. It is a stricter, more XML-based version of HTML.</p>
    <p className="text-lg leading-relaxed mt-4">XHTML was developed to make HTML more extensible and increase its interoperability with other data formats. However, with the advent of HTML5, XHTML is no longer a widely used standard for web development.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">What is XHTML?</h2>
    <p className="text-lg leading-relaxed">XHTML is essentially HTML written as XML. This means that an XHTML document must follow all the strict rules of XML syntax.</p>
    <p className="text-lg leading-relaxed mt-4">The main goal of XHTML was to create a more structured and clean version of HTML that could be easily parsed by machines and integrated with other XML-based technologies.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">Key Differences from HTML</h2>
    <p className="text-lg leading-relaxed">The strict rules of XHTML are what set it apart from the more lenient syntax of HTML.</p>
    
    <SimpleTable
        headers={['Rule', 'HTML (HTML5)', 'XHTML']}
        rows={[
            ['Nesting', 'Can be lenient, browsers often fix incorrect nesting.', 'Elements must be properly nested within each other.'],
            ['Closing Tags', 'Some elements do not need to be closed (e.g. `<p>`).', 'All elements must be closed, including empty elements (e.g. `<br />`).'],
            ['Case Sensitivity', 'Tags and attributes are case-insensitive.', 'Tags and attributes must be in lowercase.'],
            ['Attribute Values', 'Values do not always need quotes.', 'Attribute values must always be enclosed in quotes.'],
            ['DOCTYPE', 'Simple: `<!DOCTYPE html>`.', 'More complex and based on a DTD.'],
            ['Attribute Minimization', 'Allowed (e.g. `<input checked>`).', 'Forbidden (must be `<input checked="checked">`).']
        ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Example: XHTML Syntax</h3>
    <CodeBlock>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>An XHTML Document</title>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <br />
    <img src="image.png" alt="an image" />
  </body>
</html>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Why is HTML5 the Current Standard?</h2>
    <p className="text-lg leading-relaxed">While XHTML's strictness had its benefits, HTML5 was developed with a more pragmatic approach. It introduced many new semantic elements and APIs (like Canvas and Video) while being backward compatible with older, less-strict HTML. It was designed to be more forgiving of errors, which is how browsers have always handled HTML in the real world.</p>
    
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <h4 className="font-bold">The Bottom Line</h4>
        <p className="mt-2">For all new web projects, you should use the HTML5 standard. XHTML is now considered a historical technology. Understanding the differences can be useful for maintaining older websites or for a deeper knowledge of web history, but it is not a required skill for modern front-end development.</p>
    </InfoBox>

  </>
);

export default HtmlVsXhtml;