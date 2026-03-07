export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const SQL_QUIZ_DATA: QuizQuestion[] = [
  // Level 1 – Beginner
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Question Language",
      "Structured Query Language",
      "Simple Query Language",
      "Standard Question Language",
    ],
    correctAnswerIndex: 1,
    explanation: "SQL stands for Structured Query Language.",
  },
  {
    question: "Which SQL statement is used to retrieve data from a database?",
    options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
    correctAnswerIndex: 1,
    explanation: "The SELECT statement is used to retrieve data from a database.\n\nExample:\nSELECT * FROM Students;",
  },
  {
    question: "Which clause is used to filter records?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
    correctAnswerIndex: 2,
    explanation: "The WHERE clause is used to filter records.\n\nExample:\nSELECT * FROM Students\nWHERE Marks > 80;",
  },
  {
    question: "Which SQL keyword is used to sort results?",
    options: ["SORT", "ORDER BY", "GROUP BY", "ARRANGE"],
    correctAnswerIndex: 1,
    explanation: "The ORDER BY keyword is used to sort the result-set.\n\nExample:\nSELECT * FROM Students\nORDER BY Marks DESC;",
  },
  {
    question: 'Which symbol represents "not equal"?',
    options: ["!=", "<>", "Both A and B", "=="],
    correctAnswerIndex: 2,
    explanation: "Both != and <> can be used to represent 'not equal' in SQL.",
  },
  // Level 2 – Intermediate
  {
    question: "Which operator is used to combine multiple conditions?",
    options: ["AND", "OR", "NOT", "All of the above"],
    correctAnswerIndex: 3,
    explanation: "AND, OR, and NOT are operators used to combine or negate conditions in a WHERE clause.\n\nExample:\nSELECT *\nFROM Students\nWHERE Marks > 70 AND City='Chennai';",
  },
  {
    question: "Which clause is used to group rows with similar values?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "DISTINCT"],
    correctAnswerIndex: 0,
    explanation: "The GROUP BY statement groups rows that have the same values into summary rows.\n\nExample:\nSELECT City, COUNT(*)\nFROM Students\nGROUP BY City;",
  },
  {
    question: "Which SQL function returns the total number of rows?",
    options: ["SUM()", "COUNT()", "AVG()", "TOTAL()"],
    correctAnswerIndex: 1,
    explanation: "The COUNT() function returns the number of rows that matches a specified criterion.\n\nExample:\nSELECT COUNT(*)\nFROM Students;",
  },
  {
    question: "Which SQL keyword prevents duplicate values?",
    options: ["UNIQUE", "PRIMARY KEY", "DISTINCT", "Both A and B"],
    correctAnswerIndex: 3,
    explanation: "Both UNIQUE constraint and PRIMARY KEY ensure that all values in a column are different.",
  },
  {
    question: "Which SQL operator checks for NULL values?",
    options: ["= NULL", "IS NULL", "== NULL", "NULL CHECK"],
    correctAnswerIndex: 1,
    explanation: "The IS NULL operator is used to test for empty values (NULL values).\n\nExample:\nSELECT *\nFROM Students\nWHERE Marks IS NULL;",
  },
  // Level 3 – Advanced
  {
    question: "Which SQL statement adds new records to a table?",
    options: ["ADD", "INSERT INTO", "CREATE", "UPDATE"],
    correctAnswerIndex: 1,
    explanation: "The INSERT INTO statement is used to insert new records in a table.\n\nExample:\nINSERT INTO Students\nVALUES (1,'Arun',85,'Chennai');",
  },
  {
    question: "Which SQL command modifies existing data?",
    options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
    correctAnswerIndex: 1,
    explanation: "The UPDATE statement is used to modify the existing records in a table.\n\nExample:\nUPDATE Students\nSET Marks = 95\nWHERE StudentID = 1;",
  },
  {
    question: "Which SQL statement removes records from a table?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    correctAnswerIndex: 1,
    explanation: "The DELETE statement is used to delete existing records in a table.\n\nExample:\nDELETE FROM Students\nWHERE StudentID = 3;",
  },
  {
    question: "Which SQL JOIN returns only matching records?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correctAnswerIndex: 2,
    explanation: "The INNER JOIN keyword selects records that have matching values in both tables.\n\nExample:\nSELECT Students.Name, Courses.CourseName\nFROM Students\nINNER JOIN Courses\nON Students.StudentID = Courses.StudentID;",
  },
  {
    question: "Which SQL constraint uniquely identifies each record?",
    options: ["UNIQUE", "PRIMARY KEY", "FOREIGN KEY", "NOT NULL"],
    correctAnswerIndex: 1,
    explanation: "The PRIMARY KEY constraint uniquely identifies each record in a table.\n\nExample:\nCREATE TABLE Students (\nStudentID INT PRIMARY KEY,\nName VARCHAR(50)\n);",
  },
  // Bonus Challenge Questions
  {
    question: "Which SQL clause filters grouped results?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswerIndex: 1,
    explanation: "The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.",
  },
  {
    question: "Which operator checks a range of values?",
    options: ["BETWEEN", "RANGE", "IN", "LIMIT"],
    correctAnswerIndex: 0,
    explanation: "The BETWEEN operator selects values within a given range.\n\nExample:\nSELECT *\nFROM Students\nWHERE Marks BETWEEN 50 AND 80;",
  },
  {
    question: "Which SQL keyword removes duplicate results?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "FILTER"],
    correctAnswerIndex: 1,
    explanation: "The SELECT DISTINCT statement is used to return only distinct (different) values.\n\nExample:\nSELECT DISTINCT City\nFROM Students;",
  }
];
