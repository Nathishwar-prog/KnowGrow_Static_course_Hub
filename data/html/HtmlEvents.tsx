import React from 'react';
import { SimpleTable } from '../components';

const HtmlEvents: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.</p>
    <p className="text-lg leading-relaxed mt-4">An HTML event can be something the browser does, or something a user does.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Common HTML Events</h2>
    <p className="text-lg leading-relaxed">Here is a list of some common HTML events, categorized by their type.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Window Events</h3>
    <SimpleTable
      headers={['Event', 'Description']}
      rows={[
        ['onload', 'Fires when the browser has finished loading the page'],
        ['onunload', 'Fires once a page has started to be unloaded or the browser window has been closed'],
        ['onresize', 'Fires when the browser window is resized'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Form Events</h3>
    <SimpleTable
      headers={['Event', 'Description']}
      rows={[
        ['onchange', 'Fires when the value of an element has been changed'],
        ['onsubmit', 'Fires when a form is submitted'],
        ['onreset', 'Fires when a form is reset'],
        ['onselect', 'Fires after some text has been selected in an element'],
        ['onfocus', 'Fires when an element gets focus'],
        ['onblur', 'Fires when an element loses focus'],
      ]}
    />
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Keyboard Events</h3>
    <SimpleTable
      headers={['Event', 'Description']}
      rows={[
        ['onkeydown', 'Fires when a user is pressing a key'],
        ['onkeyup', 'Fires when a user releases a key'],
        ['onkeypress', 'Fires when a user presses a key (deprecated)'],
      ]}
    />

    <h3 className="text-2xl font-bold mt-8 mb-3">Mouse Events</h3>
    <SimpleTable
      headers={['Event', 'Description']}
      rows={[
        ['onclick', 'Fires on a mouse click on the element'],
        ['ondblclick', 'Fires on a mouse double-click on the element'],
        ['onmousedown', 'Fires when a mouse button is pressed down on an element'],
        ['onmouseup', 'Fires when a mouse button is released over an element'],
        ['onmouseover', 'Fires when the mouse pointer is moved onto an element'],
        ['onmouseout', 'Fires when the mouse pointer is moved out of an element'],
        ['onmousemove', 'Fires when the mouse pointer is moving while it is over an element'],
      ]}
    />
  </>
);

export default HtmlEvents;