import React from 'react';
import { SimpleTable, InfoBox } from '../components';

const HtmlGlobalAttributes: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Global attributes are attributes that can be used on all HTML elements.</p>
    <p className="text-lg leading-relaxed mt-4">While some of these attributes may not have a visible effect on every element, they are syntactically valid on all of them.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">List of Global Attributes</h2>
    <SimpleTable
      headers={['Attribute', 'Description']}
      rows={[
        ['accesskey', 'Specifies a shortcut key to activate/focus an element.'],
        ['class', 'Specifies one or more classnames for an element (refers to a class in a style sheet).'],
        ['contenteditable', 'Specifies whether the content of an element is editable or not.'],
        ['dir', 'Specifies the text direction for the content in an element (ltr or rtl).'],
        ['draggable', 'Specifies whether an element is draggable or not.'],
        ['hidden', 'Specifies that an element is not yet, or is no longer, relevant.'],
        ['id', 'Specifies a unique id for an element.'],
        ['lang', 'Specifies the language of the element\'s content.'],
        ['spellcheck', 'Specifies whether the element is to have its spelling and grammar checked or not.'],
        ['style', 'Specifies an inline CSS style for an element.'],
        ['tabindex', 'Specifies the tabbing order of an element.'],
        ['title', 'Specifies extra information about an element (displayed as a tool-tip).'],
        ['translate', 'Specifies whether the content of an element should be translated or not.'],
      ]}
    />

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mt-10">
      <h4 className="font-bold">Data Attributes</h4>
      <p className="mt-2">In addition to the standard global attributes, you can use custom data attributes, which start with <code>data-</code>. For example, <code>data-user-id="123"</code>. These are used to store custom data private to the page or application, which can be easily accessed by JavaScript (using <code>element.dataset</code>).</p>
    </InfoBox>
  </>
);

export default HtmlGlobalAttributes;