import React from 'react';
import { CodeBlock, SimpleTable } from '../components';

const HtmlFormElements: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This chapter describes all the different HTML form elements you can use within a <code>&lt;form&gt;</code> tag.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <SimpleTable
      headers={['Tag', 'Description']}
      rows={[
        [<code>&lt;input&gt;</code>, 'Defines an input control (covered in detail in other sections).'],
        [<code>&lt;label&gt;</code>, 'Defines a label for an input element.'],
        [<code>&lt;select&gt;</code>, 'Defines a drop-down list.'],
        [<code>&lt;textarea&gt;</code>, 'Defines a multiline input control (text area).'],
        [<code>&lt;button&gt;</code>, 'Defines a clickable button.'],
        [<code>&lt;fieldset&gt;</code>, 'Groups related elements in a form.'],
        [<code>&lt;legend&gt;</code>, 'Defines a caption for a <fieldset> element.'],
        [<code>&lt;datalist&gt;</code>, 'Specifies a list of pre-defined options for an <input> element.'],
        [<code>&lt;output&gt;</code>, 'Represents the result of a calculation.'],
        [<code>&lt;option&gt;</code>, 'Defines an option in a drop-down list.'],
        [<code>&lt;optgroup&gt;</code>, 'Defines a group of related options in a drop-down list.'],
      ]}
    />

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;select&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;select&gt;</code> element defines a drop-down list. The <code>&lt;option&gt;</code> elements inside define the available options.</p>
    <CodeBlock language="html">{`<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi" selected>Audi</option>
</select>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;textarea&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;textarea&gt;</code> element defines a multi-line input field (a text area). The size can be specified by the <code>rows</code> and <code>cols</code> attributes, or through CSS.</p>
    <CodeBlock language="html">{`<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;button&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;button&gt;</code> element defines a clickable button. Unlike <code>&lt;input type="button"&gt;</code>, a <code>&lt;button&gt;</code> element can have content, like text or images.</p>
    <CodeBlock language="html">{`<button type="button" onclick="alert('Hello world!')">Click Me</button>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;fieldset&gt; and &lt;legend&gt; Elements</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;fieldset&gt;</code> element is used to group related data in a form. The <code>&lt;legend&gt;</code> element defines a caption for the <code>&lt;fieldset&gt;</code> element.</p>
    <CodeBlock language="html">{`<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The &lt;datalist&gt; Element</h2>
    <p className="text-lg leading-relaxed">The <code>&lt;datalist&gt;</code> element specifies a list of pre-defined options for an <code>&lt;input&gt;</code> element. Users will see a drop-down list of the pre-defined options as they input data. The <code>list</code> attribute of the <code>&lt;input&gt;</code> element must refer to the <code>id</code> of the <code>&lt;datalist&gt;</code> element.</p>
    <CodeBlock language="html">{`<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>`}</CodeBlock>

  </>
);

export default HtmlFormElements;