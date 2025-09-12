import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlWebWorkers: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">A web worker is a JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page.</p>
    <p className="text-lg leading-relaxed mt-4">You can continue to do whatever you want on the page while the web worker runs in the background, like clicking, selecting things, etc.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Why Use a Web Worker?</h2>
    <p className="text-lg leading-relaxed">JavaScript is single-threaded, meaning it can only do one thing at a time. If you have a computationally intensive task (like complex calculations, processing large amounts of data, etc.), it can freeze the user interface, making the page unresponsive.</p>
    <p className="text-lg leading-relaxed mt-4">Web workers solve this problem by providing a way to run these long tasks in a separate thread, keeping the main page responsive.</p>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <p>Before creating a web worker, check if the user's browser supports it: `if (typeof(Worker) !== "undefined")`.</p>
    </InfoBox>

    <h2 className="text-3xl font-bold mt-10 mb-4">Example: A Simple Counter</h2>
    <p className="text-lg leading-relaxed">The following example creates a simple web worker that counts numbers in the background.</p>

    <h3 className="text-2xl font-bold mt-8 mb-3">Main Page (index.html)</h3>
    <p className="text-lg leading-relaxed">The main page creates the worker and listens for messages from it.</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button> 
<button onclick="stopWorker()">Stop Worker</button>

<script>
let w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>`}</CodeBlock>

    <h3 className="text-2xl font-bold mt-8 mb-3">Worker Script (demo_workers.js)</h3>
    <p className="text-lg leading-relaxed">This code is saved in a separate file called "demo_workers.js". The worker script listens for messages and sends messages back to the main page using `postMessage()`.</p>
    {/* FIX: Added missing 'language' prop. */}
    <CodeBlock language="javascript">{`let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i); // Send the current count back to the main page
  setTimeout("timedCount()", 500);
}

timedCount();`}</CodeBlock>

    <h2 className="text-3xl font-bold mt-10 mb-4">Terminate a Web Worker</h2>
    <p className="text-lg leading-relaxed">When a web worker object is created, it will continue to listen for messages (even after the external script is finished) until it is terminated. To terminate a web worker, and free browser/computer resources, use the <code>terminate()</code> method.</p>

    <InfoBox className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-300">
        <h4 className="font-bold">Worker Scope</h4>
        <p>A worker runs in a different global context than the current `window`. This means you cannot directly access the `document` object, `window` object, or the parent page's DOM from within a worker.</p>
    </InfoBox>
  </>
);

export default HtmlWebWorkers;
