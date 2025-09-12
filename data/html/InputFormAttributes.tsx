import React from 'react';
import { CodeBlock, SimpleTable, InfoBox } from '../components';

const InputFormAttributes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;input&gt;</code> element can have special "form" attributes that override the attributes of its parent <code>&lt;form&gt;</code> element.</p>
    <p className="text-lg leading-relaxed mt-4">These attributes are most commonly used on submit buttons to allow a single form to have multiple submission behaviors.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">List of Input Form Attributes</h2>
    <p className="text-lg leading-relaxed">These attributes can be applied to <code>&lt;input&gt;</code> types of <code>submit</code> and <code>image</code>, and also to the <code>&lt;button&gt;</code> element.</p>

    <SimpleTable
      headers={['Attribute', 'Description']}
      rows={[
        ['formaction', 'Overrides the form\'s action attribute. Specifies where to send the data.'],
        ['formenctype', 'Overrides the form\'s enctype attribute. Specifies how the form-data should be encoded.'],
        ['formmethod', 'Overrides the form\'s method attribute. Specifies the HTTP method (get or post).'],
        ['formnovalidate', 'Overrides the form\'s novalidate attribute. If present, the form will not be validated on submit.'],
        ['formtarget', 'Overrides the form\'s target attribute. Specifies where to display the response (_blank, _self, etc.).'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">Example: Multiple Submit Buttons</h2>
    <p className="text-lg leading-relaxed">In this example, a single form has two submit buttons. Each button sends the form data to a different action URL.</p>
    <CodeBlock language="html">{`<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>

  <!-- This button submits to the form's action -->
  <button type="submit">Submit</button>

  <!-- This button overrides the form's action and submits to a different URL -->
  <button type="submit" formaction="/action_page2.php">Submit as Admin</button>
</form>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Example: Overriding Method and Target</h2>
    <p className="text-lg leading-relaxed">This example shows a submit button that overrides the form's <code>method</code> to use POST and the <code>target</code> to open a new tab.</p>
    <CodeBlock language="html">{`<form action="/action_page.php" method="get" target="_self">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <button type="submit">Submit (GET, same tab)</button>

  <button 
    type="submit" 
    formmethod="post"
    formaction="/action_page_post.php"
    formtarget="_blank"
  >
    Submit in New Tab (POST)
  </button>
</form>`}</CodeBlock>

    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
        <p>These override attributes provide powerful flexibility for creating complex forms with multiple user actions without needing JavaScript.</p>
    </InfoBox>
  </>
);

export default InputFormAttributes;