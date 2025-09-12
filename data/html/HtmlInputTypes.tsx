import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlInputTypes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">The <code>&lt;input&gt;</code> element is one of the most powerful and complex of all HTML elements due to its large number of input types and attributes.</p>
    <p className="text-lg leading-relaxed mt-4">The <code>type</code> attribute specifies the type of <code>&lt;input&gt;</code> element to display.</p>
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>If the <code>type</code> attribute is not specified, the default type is <strong>text</strong>.</p>
    </InfoBox>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">HTML Input Types</h2>
    <SimpleTable
        headers={['Type', 'Description']}
        rows={[
            ['text', 'Displays a single-line text input field'],
            ['password', 'Displays a password field (characters are masked)'],
            ['submit', 'Displays a submit button for submitting the form'],
            ['reset', 'Displays a reset button that resets all form values to their initial values'],
            ['radio', 'Displays a radio button (for selecting one of many choices)'],
            ['checkbox', 'Displays a checkbox (for selecting zero or more of many choices)'],
            ['button', 'Displays a clickable button'],
            ['color', 'For input fields that should contain a color.'],
            ['date', 'For input fields that should contain a date.'],
            ['datetime-local', 'For input fields that should contain a date and time.'],
            ['email', 'For input fields that should contain an e-mail address.'],
            ['file', 'Defines a file-select field and a "Browse..." button for file uploads.'],
            ['hidden', 'Defines a hidden input field.'],
            ['image', 'Defines an image as a submit button.'],
            ['month', 'Allows the user to select a month and year.'],
            ['number', 'Defines a numeric input field.'],
            ['range', 'Defines a control for entering a number whose exact value is not important (like a slider).'],
            ['search', 'Used for search fields.'],
            ['tel', 'Used for input fields that should contain a telephone number.'],
            ['time', 'Allows the user to select a time.'],
            ['url', 'For input fields that should contain a URL address.'],
            ['week', 'Allows the user to select a week and year.'],
        ]}
    />
  </>
);

export default HtmlInputTypes;