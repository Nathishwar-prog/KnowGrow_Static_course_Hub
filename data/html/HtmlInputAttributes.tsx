import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlInputAttributes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This chapter describes the different attributes for the HTML <code>&lt;input&gt;</code> element.</p>
    <p className="text-lg leading-relaxed mt-4">These attributes modify the behavior and appearance of input fields.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Input Attributes</h2>
    
    <SimpleTable
        headers={['Attribute', 'Description']}
        rows={[
            ['value', 'Specifies the initial value for an input field.'],
            ['readonly', 'Specifies that an input field is read-only (cannot be changed).'],
            ['disabled', 'Specifies that an input field should be disabled.'],
            ['size', 'Specifies the width (in characters) of an input field.'],
            ['maxlength', 'Specifies the maximum number of characters allowed in an input field.'],
            ['min and max', 'Specify the minimum and maximum values for an input field of type number, range, date, etc.'],
            ['multiple', 'Specifies that the user is allowed to enter more than one value in an input field (for email and file types).'],
            ['pattern', 'Specifies a regular expression that the input field\'s value is checked against.'],
            ['placeholder', 'Specifies a short hint that describes the expected value of an input field.'],
            ['required', 'Specifies that an input field must be filled out before submitting the form.'],
            ['step', 'Specifies the legal number intervals for an input field of type number or range.'],
            ['autofocus', 'Specifies that an input field should automatically get focus when the page loads.'],
            ['height and width', 'Specifies the height and width of an <input> element (only for type="image").'],
            ['list', 'Refers to a <datalist> element that contains pre-defined options for an <input> element.'],
            ['autocomplete', 'Specifies whether an input field should have autocomplete on or off.'],
        ]}
    />
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <h4 className="font-bold">Attribute Restrictions</h4>
      <p className="mt-2">Note that not all attributes are applicable to all input types. For example, the <code>checked</code> attribute only applies to <code>type="checkbox"</code> and <code>type="radio"</code>. The <code>min</code> and <code>max</code> attributes apply to number, range, and date types.</p>
    </InfoBox>
  </>
);

export default HtmlInputAttributes;