export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const CSS_QUIZ_DATA: QuizQuestion[] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswerIndex: 1,
    explanation: "CSS stands for Cascading Style Sheets and is used to style and lay out web pages.",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    correctAnswerIndex: 1,
    explanation: "The `style` attribute is used to add inline CSS styles directly to an HTML element.",
  },
  {
    question: "Which is the correct CSS syntax?",
    options: [
      "{body:color=black;}",
      "body:color=black;",
      "body {color: black;}",
      "body;color:black;",
    ],
    correctAnswerIndex: 2,
    explanation: "The correct CSS syntax consists of a selector followed by a declaration block in curly braces. Declarations are separated by semicolons.",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "' this is a comment",
      "<!-- this is a comment -->",
    ],
    correctAnswerIndex: 1,
    explanation: "CSS comments start with `/*` and end with `*/`.",
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswerIndex: 2,
    explanation: "The `background-color` property specifically changes the background color of an element.",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    correctAnswerIndex: 0,
    explanation: "In CSS, the hash (#) character is used to select an element by its ID.",
  },
  {
    question: "How do you select elements with class name 'test'?",
    options: ["#test", "test", ".test", "*test"],
    correctAnswerIndex: 2,
    explanation: "In CSS, the period (.) character is used to select elements by their class name.",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-style", "font-size", "text-size"],
    correctAnswerIndex: 2,
    explanation: "The `font-size` property is used to set the size of the text.",
  },
];
