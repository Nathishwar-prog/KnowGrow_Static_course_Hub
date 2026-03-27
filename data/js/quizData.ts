export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const JS_QUIZ_DATA: QuizQuestion[] = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    correctAnswerIndex: 3,
    explanation: "The <script> tag is used to embed or refer to an executable script within an HTML document.",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>"],
    correctAnswerIndex: 2,
    explanation: "The 'src' attribute in a <script> tag specifies the URL of an external script file.",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
    correctAnswerIndex: 2,
    explanation: "The alert() method displays an alert box with a specified message and an OK button.",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function myFunction()", "function:myFunction()"],
    correctAnswerIndex: 1,
    explanation: "A JavaScript function is defined with the 'function' keyword, followed by a name, followed by parentheses ().",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
    correctAnswerIndex: 1,
    explanation: "The 'if' statement executes a block of code if a specified condition is true. The condition is enclosed in parentheses.",
  }
];

export const WEB_API_QUIZ_DATA: QuizQuestion[] = [
  {
    question: "What is a Web API?",
    options: [
      "A programming language",
      "A browser feature used by JavaScript",
      "A database",
      "A CSS framework"
    ],
    correctAnswerIndex: 1,
    explanation: "Web APIs are built-in browser features that extend the capabilities of JavaScript, allowing it to interact with the browser and the web environment."
  },
  {
    question: "Which of the following is NOT a Web API?",
    options: [
      "Fetch API",
      "DOM API",
      "JavaScript Engine",
      "Geolocation API"
    ],
    correctAnswerIndex: 2,
    explanation: "The JavaScript Engine (like V8) is the core environment that executes logic, while Web APIs are external capabilities provided by the browser environment."
  },
  {
    question: "Who provides Web APIs?",
    options: [
      "JavaScript",
      "Browser",
      "Server",
      "Database"
    ],
    correctAnswerIndex: 1,
    explanation: "Web APIs are provided by the web browser environment, not by the JavaScript language specification itself."
  },
  {
    question: "Which API is used to store data in the browser?",
    options: [
      "Fetch API",
      "Storage API",
      "History API",
      "Canvas API"
    ],
    correctAnswerIndex: 1,
    explanation: "The Storage API (localStorage and sessionStorage) allows websites to persist data locally within the user's browser."
  },
  {
    question: "What does fetch() return?",
    options: [
      "String",
      "Object",
      "Promise",
      "Array"
    ],
    correctAnswerIndex: 2,
    explanation: "The fetch() method returns a Promise that resolves to the Response object, allowing you to handle the network request asynchronously."
  },
  {
    question: "Which API is used to get user location?",
    options: [
      "Storage API",
      "History API",
      "Geolocation API",
      "DOM API"
    ],
    correctAnswerIndex: 2,
    explanation: "The Geolocation API allows web applications to access the user's current geographic location (latitude and longitude) with their permission."
  },
  {
    question: "What does localStorage store?",
    options: [
      "Only numbers",
      "Only objects",
      "Key-value pairs (strings)",
      "Functions"
    ],
    correctAnswerIndex: 2,
    explanation: "localStorage stores data as key-value pairs where both keys and values must be strings. Objects must be stringified before storage."
  },
  {
    question: "Which method adds a new history entry?",
    options: [
      "pushState()",
      "replaceState()",
      "go()",
      "back()"
    ],
    correctAnswerIndex: 0,
    explanation: "history.pushState() adds a brand new entry to the browser's session history stack, while replaceState() modifies the current entry."
  },
  {
    question: "What happens if fetch() gets a 404 response?",
    options: [
      "It throws an error automatically",
      "It resolves successfully",
      "It crashes the browser",
      "It retries automatically"
    ],
    correctAnswerIndex: 1,
    explanation: "fetch() only rejects on network errors or hardware failures. It resolves successfully even if the server returns a 404 or 500 status code."
  },
  {
    question: "Which Web API runs code in the background thread?",
    options: [
      "Fetch API",
      "Web Worker API",
      "Storage API",
      "DOM API"
    ],
    correctAnswerIndex: 1,
    explanation: "The Web Worker API allows you to run scripts in separate background threads, preventing heavy calculations from freezing the main UI thread."
  },
  {
    question: "Which method is used to send data to a Web Worker?",
    options: [
      "send()",
      "postMessage()",
      "push()",
      "emit()"
    ],
    correctAnswerIndex: 1,
    explanation: "The postMessage() method is used to communicate and send data between the main thread and the worker thread."
  },
  {
    question: "Which API requires explicit user permission?",
    options: [
      "Storage API",
      "Fetch API",
      "Geolocation API",
      "History API"
    ],
    correctAnswerIndex: 2,
    explanation: "The Geolocation API requires the user's explicit permission via a browser prompt before accessing their sensitive location data."
  },
  {
    question: "What will be the output of: console.log('Start'); setTimeout(() => { console.log('API'); }, 0); console.log('End');",
    options: [
      "Start, API, End",
      "API, Start, End",
      "Start, End, API",
      "End, Start, API"
    ],
    correctAnswerIndex: 2,
    explanation: "Even with a 0ms delay, setTimeout uses the Event Loop. The main thread finishes (Start, End) before the callback is pulled from the queue."
  }
];