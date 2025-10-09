export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const HTML_QUIZ_DATA: QuizQuestion[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswerIndex: 0,
    explanation: "HTML stands for Hyper Text Markup Language and is the standard markup language for creating Web pages.",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctAnswerIndex: 2,
    explanation: "The <h1> element defines the most important heading. <h6> defines the least important heading.",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<linebreak>"],
    correctAnswerIndex: 2,
    explanation: "The <br> tag is an empty tag which means that it has no end tag. It is used to insert a single line break.",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      '<body bg="yellow">',
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
    ],
    correctAnswerIndex: 1,
    explanation: 'The correct way to set a background color in HTML is by using the CSS `background-color` property within a `style` attribute.',
  },
  {
    question: "Choose the correct HTML element to define important text:",
    options: ["<strong>", "<b>", "<i>", "<important>"],
    correctAnswerIndex: 0,
    explanation: "The <strong> element is used to define text with strong importance. The content is typically displayed in bold.",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["^", "*", "<", "/"],
    correctAnswerIndex: 3,
    explanation: "An end tag is written like a start tag, but with a forward slash (/) inserted before the tag name.",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ol>", "<dl>", "<ul>", "<list>"],
    correctAnswerIndex: 0,
    explanation: "An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.",
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<foot>"],
    correctAnswerIndex: 1,
    explanation: "The <footer> element defines a footer for a document or section, typically containing authorship information, copyright data, etc.",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '<a url="http://www.knowgrow.dev">KnowGrow</a>',
      '<a>http://www.knowgrow.dev</a>',
      '<a href="http://www.knowgrow.dev">KnowGrow</a>',
      '<a name="http://www.knowgrow.dev">KnowGrow</a>',
    ],
    correctAnswerIndex: 2,
    explanation: 'The <a> tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to.',
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["src", "alt", "title", "longdesc"],
    correctAnswerIndex: 1,
    explanation: "The `alt` attribute provides an alternate text for an image. It is crucial for accessibility and is displayed if the image fails to load.",
  },
];