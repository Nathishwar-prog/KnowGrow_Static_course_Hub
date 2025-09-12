import React from 'react';
import { CodeBlock, InfoBox } from '../components';

const HtmlSse: React.FC = () => (
  <>
    <p className="text-lg leading-relaxed">Server-Sent Events (SSE) is a technology that enables a web page to get automatic updates from a server.</p>
    <p className="text-lg leading-relaxed mt-4">This was also possible before, but the web page would have to ask if any updates were available (a technique called "polling"). With server-sent events, the updates come automatically from the server to the client.</p>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Receiving Server-Sent Events</h2>
    <p className="text-lg leading-relaxed">The <code>EventSource</code> object is used to receive server-sent event notifications.</p>
    <p className="text-lg leading-relaxed mt-4">To get started, you create a new `EventSource` object, passing it the URL of a server-side script that will generate the events.</p>
    <CodeBlock language="javascript">{`// Check for browser support
if(typeof(EventSource) !== "undefined") {
  // Create an EventSource object that opens a connection to a server-side script
  var source = new EventSource("demo_sse.php");
  
  // Listen for messages from the server
  source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
  };
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}`}</CodeBlock>
    
    <InfoBox className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
      <h4 className="font-bold">Key Points:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>The <code>EventSource</code> object connects to the server.</li>
        <li>The <code>onmessage</code> event is triggered each time an update is received from the server.</li>
        <li>The <code>event.data</code> property contains the message payload.</li>
        <li>The connection will be automatically re-established if it closes.</li>
      </ul>
    </InfoBox>
    
    <h2 className="text-3xl font-bold mt-10 mb-4">Server-Side Code</h2>
    <p className="text-lg leading-relaxed">For this to work, you need a server-side script (like in PHP, Node.js, or Python) that can send data to the client.</p>
    <p className="text-lg leading-relaxed mt-4">The server response must have a specific format:</p>
    <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
        <li>The `Content-Type` header must be set to `text/event-stream`.</li>
        <li>The response must be UTF-8 encoded.</li>
        <li>Each message must be prefixed with `data: ` and end with two newline characters (`\n\n`).</li>
    </ul>
    
    <h3 className="text-2xl font-bold mt-8 mb-3">PHP Example (demo_sse.php)</h3>
    <CodeBlock language="php">{`<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\\n\\n";
flush();
?>`}</CodeBlock>

    <hr className="my-8 border-gray-200 dark:border-gray-600" />
    
    <h2 className="text-3xl font-bold mt-10 mb-4">SSE vs. WebSockets</h2>
    <InfoBox className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-800 dark:text-emerald-300">
      <h4 className="font-bold">When to use which?</h4>
      <p className="mt-2"><strong>Server-Sent Events (SSE):</strong> Use SSE when you need a simple, one-way communication channel from the server to the client. It's ideal for things like stock tickers, live news feeds, or notifications. It works over standard HTTP and is easier to implement than WebSockets.</p>
      <p className="mt-4"><strong>WebSockets:</strong> Use WebSockets when you need full, two-way (bi-directional) communication between the client and server. It's perfect for real-time applications like chat apps, multiplayer games, and collaborative editing tools.</p>
    </InfoBox>
  </>
);

export default HtmlSse;