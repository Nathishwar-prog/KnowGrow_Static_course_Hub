import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlAttributesRef: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">This page provides a quick reference for some of the most common attributes in HTML.</p>
    <p className="text-lg leading-relaxed mt-4">For a list of attributes that can be used on any element, see the <a href="#" className="text-indigo-500 hover:underline">Global Attributes Reference</a>.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Common Attributes</h2>
    <SimpleTable
      headers={['Attribute', 'Used on', 'Description']}
      rows={[
        ['alt', '<img>, <area>, <input type="image">', 'Specifies an alternate text for an image, crucial for accessibility.'],
        ['href', '<a>, <link>, <base>, <area>', 'Specifies the URL of the page the link goes to.'],
        ['src', '<img>, <audio>, <video>, <script>, <iframe>, <input type="image">', 'Specifies the URL of the resource to be embedded.'],
        ['width', '<img>, <canvas>, <video>, <iframe>, <object>', 'Specifies the width of the element, in pixels.'],
        ['height', '<img>, <canvas>, <video>, <iframe>, <object>', 'Specifies the height of the element, in pixels.'],
        ['disabled', '<button>, <input>, <select>, <textarea>, <fieldset>', 'Specifies that an element should be disabled.'],
        ['readonly', '<input>, <textarea>', 'Specifies that an input field is read-only.'],
        ['checked', '<input type="checkbox">, <input type="radio">', 'Specifies that an input element should be pre-selected.'],
        ['placeholder', '<input>, <textarea>', 'Provides a hint to the user of what can be entered in the field.'],
        ['action', '<form>', 'Specifies where to send the form-data when a form is submitted.'],
        ['method', '<form>', 'Specifies the HTTP method (GET or POST) to use when submitting the form.'],
        ['for', '<label>, <output>', 'Specifies which form element a label belongs to.'],
        ['autoplay', '<audio>, <video>', 'Specifies that the media will start playing as soon as it is ready.'],
        ['controls', '<audio>, <video>', 'Specifies that media controls should be displayed.'],
      ]}
    />
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <p>This is not an exhaustive list. Many HTML elements have their own specific attributes. Always refer to documentation for the specific element you are using.</p>
    </InfoBox>
  </>
);

export default HtmlAttributesRef;