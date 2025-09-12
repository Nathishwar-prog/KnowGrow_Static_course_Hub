import React from 'react';
import { CodeBlock, SimpleTable, InfoBox } from '../components';

const HtmlFormAttributes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This chapter describes the different attributes for the HTML <code>&lt;form&gt;</code> element.</p>
    <p className="text-lg leading-relaxed mt-4">These attributes control how the form behaves when it is submitted.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The action Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>action</code> attribute defines the action to be performed when the form is submitted. Often, the form data is sent to a web page on a server for processing.</p>
    <CodeBlock language="html">{`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <input type="submit" value="Submit">
</form>`}</CodeBlock>
    <p className="text-lg leading-relaxed mt-4">If the <code>action</code> attribute is omitted, the action is set to the current page.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">The method Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>method</code> attribute specifies the HTTP method to be used when submitting the form data. It can be "get" or "post".</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
      <li><strong>GET:</strong> The default method. Form data is appended to the URL as name/value pairs. Good for non-sensitive data, like search queries. Has a length limit.</li>
      <li><strong>POST:</strong> Form data is sent in the body of the HTTP request. Use this for sensitive data (like passwords) and when you don't want the data visible in the URL. No size limitations.</li>
    </ul>
    <CodeBlock language="html">{`<form action="/action_page.php" method="post">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The target Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>target</code> attribute specifies where to display the response that is received after submitting the form.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
      <li><code>_self</code> - Default. The response is displayed in the current window.</li>
      <li><code>_blank</code> - The response is displayed in a new window or tab.</li>
      <li><code>_parent</code> - The response is displayed in the parent frame.</li>
      <li><code>_top</code> - The response is displayed in the full body of the window.</li>
    </ul>
    <CodeBlock language="html">{`<form action="/action_page.php" target="_blank">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The autocomplete Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>autocomplete</code> attribute specifies whether a form should have autocomplete on or off. When autocomplete is on, the browser automatically completes values based on values that the user has entered before.</p>
    <CodeBlock language="html">{`<form action="/action_page.php" autocomplete="on">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The novalidate Attribute</h2>
    <p className="text-lg leading-relaxed">The <code>novalidate</code> attribute is a boolean attribute. When present, it specifies that the form-data (input) should not be validated when submitted. This is useful for testing or when you want to use custom JavaScript validation instead of the browser's built-in validation.</p>
    <CodeBlock language="html">{`<form action="/action_page.php" novalidate>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">List of All &lt;form&gt; Attributes</h2>
    <SimpleTable
      headers={['Attribute', 'Description']}
      rows={[
        ['action', 'Specifies where to send the form-data when a form is submitted'],
        ['autocomplete', 'Specifies whether a form should have autocomplete on or off'],
        ['enctype', 'Specifies how the form-data should be encoded when submitting it to the server (only for method="post")'],
        ['method', 'Specifies the HTTP method to use when sending form-data'],
        ['name', 'Specifies the name of the form'],
        ['novalidate', 'Specifies that the form should not be validated when submitted'],
        ['rel', 'Specifies the relationship between a linked resource and the current document'],
        ['target', 'Specifies where to display the response that is received after submitting the form'],
      ]}
    />
  </>
);

export default HtmlFormAttributes;