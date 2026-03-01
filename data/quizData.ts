export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}

export interface Quiz {
    courseId: string;
    topicId: string;
    title: string;
    questions: QuizQuestion[];
}

export const QUIZ_DATA: Record<string, Quiz> = {
    html_intro_quiz: {
        courseId: 'html',
        topicId: 'html_intro_quiz',
        title: 'HTML Introduction Quiz',
        questions: [
            {
                id: 'q1',
                question: 'What does HTML stand for?',
                options: [
                    'Hyper Text Markup Language',
                    'Home Tool Markup Language',
                    'Hyperlinks and Text Markup Language',
                    'Hyper Tool Markup Language'
                ],
                correctAnswerIndex: 0,
                explanation: 'HTML stands for Hyper Text Markup Language, the standard code for creating web pages.'
            },
            {
                id: 'q2',
                question: 'Who is making the Web standards?',
                options: [
                    'Mozilla',
                    'Microsoft',
                    'Google',
                    'The World Wide Web Consortium'
                ],
                correctAnswerIndex: 3,
                explanation: 'The World Wide Web Consortium (W3C) develops international standards for the Web.'
            },
            {
                id: 'q3',
                question: 'Choose the correct HTML element for the largest heading:',
                options: [
                    '<head>',
                    '<h6>',
                    '<h1>',
                    '<heading>'
                ],
                correctAnswerIndex: 2,
                explanation: '<h1> defines the most important heading. <h6> defines the least important heading.'
            }
        ]
    },
    css_intro_quiz: {
        courseId: 'css',
        topicId: 'css_intro_quiz',
        title: 'CSS Introduction Quiz',
        questions: [
            {
                id: 'q1',
                question: 'What does CSS stand for?',
                options: [
                    'Creative Style Sheets',
                    'Cascading Style Sheets',
                    'Computer Style Sheets',
                    'Colorful Style Sheets'
                ],
                correctAnswerIndex: 1,
                explanation: 'CSS stands for Cascading Style Sheets, used for formatting web pages.'
            },
            {
                id: 'q2',
                question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
                options: [
                    'In the <body> section',
                    'At the end of the document',
                    'In the <head> section',
                    'In the <title> section'
                ],
                correctAnswerIndex: 2,
                explanation: 'External style sheets are referenced within the <head> section of an HTML document.'
            }
        ]
    }
};
