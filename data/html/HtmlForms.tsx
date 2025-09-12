import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlForms: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
    <p className="text-lg leading-relaxed mt-4">Forms are an essential part of the interactive web, used for everything from login pages to contact forms to e-commerce checkouts.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;form&gt; Element</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;form&gt;</code> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>
    
    <CodeBlock language="html">{`<form>
  <!-- form elements go here -->
</form>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;input&gt; Element</h2>
    <p className="text-lg leading-relaxed">The HTML <code>&lt;input&gt;</code> element is the most used form element.</p>
    <p className="text-lg leading-relaxed mt-4">An <code>&lt;input&gt;</code> element can be displayed in many ways, depending on the <code>type</code> attribute. You will learn more about input types in a later chapter.</p>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;label&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;label&gt;</code> tag defines a label for many form elements.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>for</code> attribute of the <code>&lt;label&gt;</code> tag should be equal to the <code>id</code> attribute of the <code>&lt;input&gt;</code> element to bind them together. This is important for accessibility, as it allows screen readers to read out the label when the user focuses on the input element. It also provides a usability benefit: a user can click on the label to focus on the input field.</p>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">A Simple Text Input Form</h2>
    <p className="text-lg leading-relaxed">Here is a basic example of a form with two text input fields and a submit button:</p>
    <CodeBlock language="html">{`<form action="/submit-form.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`}</CodeBlock>
    <div className="p-4 my-4 bg-gray-100 dark:bg-gray-800/50 rounded-md">
        <form action="#">
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname-demo" name="fname" defaultValue="John" className="mt-1 mb-2 p-1 border rounded dark:bg-gray-700 dark:border-gray-600 w-full max-w-xs" /><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname-demo" name="lname" defaultValue="Doe" className="mt-1 mb-2 p-1 border rounded dark:bg-gray-700 dark:border-gray-600 w-full max-w-xs" /><br/><br/>
            <input type="submit" value="Submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 cursor-pointer" />
        </form>
    </div>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p><strong>Note:</strong> The form itself is not visible. Also, note that the default width of text input fields is 20 characters.</p>
    </InfoBox>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">The action and method Attributes</h2>
    <p className="text-lg leading-relaxed">The <code>action</code> attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on a server when the user clicks on the submit button. In the example above, the form data is sent to a file called "/submit-form.php".</p>
    <p className="text-lg leading-relaxed mt-4">The <code>method</code> attribute specifies the HTTP method to be used when submitting the form data. The two most common methods are <strong>GET</strong> and <strong>POST</strong>.</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>GET:</strong> Appends form data into the URL in name/value pairs. GET is useful for forms where a user wants to bookmark the result (like a search page). It has limitations on data size.</li>
        <li><strong>POST:</strong> Sends the form data as an HTTP post transaction. POST submissions are not bookmarked and the data is not shown in the URL. It has no size limitations.</li>
    </ul>
     <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <p>Always use <strong>POST</strong> if the form data contains sensitive or personal information (like a password).</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">The name Attribute</h2>
    <p className="text-lg leading-relaxed">Each input field must have a <code>name</code> attribute to be submitted. If the <code>name</code> attribute is omitted, the value of the input field will not be sent at all.</p>
  </>
);

export default HtmlForms;