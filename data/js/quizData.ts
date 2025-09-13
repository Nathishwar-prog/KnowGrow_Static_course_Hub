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