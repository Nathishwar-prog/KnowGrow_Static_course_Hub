import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlDragAndDrop: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Drag and Drop is a very common feature in web applications. It is when you "grab" an object and drag it to a different location.</p>
    <p className="text-lg leading-relaxed mt-4">HTML provides a built-in API that makes it relatively simple to implement native drag and drop functionality.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />

    <h2 className="text-3xl font-bold mt-10 mb-4">Making an Element Draggable</h2>
    <p className="text-lg leading-relaxed">To make an element draggable, you need to set the <code>draggable</code> attribute to <code>true</code>.</p>
    <CodeBlock language="html">{`<img src="https://via.placeholder.com/88x31/764ABC/FFFFFF?text=Drag+Me" draggable="true" id="drag1" width="88" height="31">`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">The Drag and Drop Process</h2>
    <p className="text-lg leading-relaxed">The drag and drop process involves a sequence of events:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 text-lg mt-4">
        <li><strong>ondragstart:</strong> Fired on the draggable element when the user starts to drag it. This is where you specify what data is to be dragged.</li>
        <li><strong>ondragover:</strong> Fired on the drop target element when the dragged element is over it. You must call `event.preventDefault()` here to allow a drop.</li>
        <li><strong>ondrop:</strong> Fired on the drop target when the draggable element is dropped on it. This is where you handle the drop logic.</li>
    </ul>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Complete Example</h2>
    <p className="text-lg leading-relaxed">Here is a full example that allows you to drag an image from one box and drop it into another.</p>
    <CodeBlock language="html">{`<!DOCTYPE HTML>
<html>
<head>
<style>
#div1, #div2 {
  float: left;
  width: 100px;
  height: 35px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
<script>
function allowDrop(ev) {
  // By default, elements cannot be dropped in other elements.
  // We must prevent the default handling of the element.
  ev.preventDefault();
}

function drag(ev) {
  // Store the id of the draggable element
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  // Prevent the browser's default handling of the data (default is open as link on drop)
  ev.preventDefault();
  
  // Get the data, which is the id of the dragged element
  var data = ev.dataTransfer.getData("text");
  
  // Append the dragged element into the drop target
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img src="https://via.placeholder.com/88x31/764ABC/FFFFFF?text=Drag+Me" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="31">
</div>

<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

</body>
</html>`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
        <h4 className="font-bold">Key Functions Explained</h4>
        <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code>event.dataTransfer.setData("text", id)</code>: In the `ondragstart` event, this sets the data type ("text") and the value (the element's id) of the dragged data.</li>
            <li><code>event.preventDefault()</code>: Calling this in `ondragover` is crucial. It signals that the element is a valid drop target.</li>
            <li><code>event.dataTransfer.getData("text")</code>: In the `ondrop` event, this retrieves the data that was set in `ondragstart`.</li>
        </ul>
    </InfoBox>
  </>
);

export default HtmlDragAndDrop;