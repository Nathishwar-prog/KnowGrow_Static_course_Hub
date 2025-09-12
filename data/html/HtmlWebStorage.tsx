import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlWebStorage: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">With HTML Web Storage, web applications can store data locally within the user's browser.</p>
    <p className="text-lg leading-relaxed mt-4">Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure and faster. The data is not included in every server request, but used only when asked for.</p>
    
    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">localStorage and sessionStorage</h2>
    <p className="text-lg leading-relaxed">The Web Storage API provides two objects for storing data on the client:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><code>window.localStorage</code> - stores data with no expiration date. The data will not be deleted when the browser is closed and will be available the next day, week, or year.</li>
        <li><code>window.sessionStorage</code> - stores data for one session only. The data is deleted when the browser tab is closed.</li>
    </ul>

    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <p>Before using web storage, check browser support with `if (typeof(Storage) !== "undefined")`.</p>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Using localStorage</h2>
    <p className="text-lg leading-relaxed">The `localStorage` object provides methods to set, get, and remove data items, which are stored as key/value pairs.</p>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">Storing Data</h3>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="javascript">{`// Store an item named "lastname" with the value "Smith"
localStorage.setItem("lastname", "Smith");`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Retrieving Data</h3>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="javascript">{`// Retrieve the value of the "lastname" item
let lastName = localStorage.getItem("lastname");
// The value of lastName is now "Smith"`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Removing Data</h3>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="javascript">{`// Remove the "lastname" item from storage
localStorage.removeItem("lastname");`}</CodeBlock>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
      <p><strong>Note:</strong> Data is stored as strings. If you want to store objects or arrays, you need to convert them to a string first using <code>JSON.stringify()</code> and then parse them back with <code>JSON.parse()</code> when you retrieve them.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Example: Click Counter</h2>
    <p className="text-lg leading-relaxed">Here's a simple example that uses `localStorage` to count the number of times a user has clicked a button. The count will persist even if the user closes the browser and reopens the page.</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>

<p>Click the button to see the counter increase.</p>
<p>Close the browser tab (or window), and try again, and the counter will continue to count (is not reset).</p>

<script>
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
</script>

</body>
</html>`}</CodeBlock>

  </>
);

export default HtmlWebStorage;
