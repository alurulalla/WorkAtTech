const readLineSync = require('readline-sync');

const quizTopics = ['JavaScript', 'C/C++'];

// JavaScript Questions, Java Questions and others if any....
const quizQuestions = [
  {
    questions: [
      // JS questions
      {
        question: 'Which type of JavaScript language is ?',
        options: [
          'Object-Oriented',
          'Object-Based',
          'Assembly-language',
          'High-level',
        ],
        correctAnswer: 2,
      },
      {
        question:
          'Which one of the following also known as Conditional Expression:',
        options: [
          'Alternative to if-else',
          'Switch statement',
          'If-then-else statement',
          'immediate if',
        ],
        correctAnswer: 4,
      },
      {
        question: 'In JavaScript, what is a block of statement?',
        options: [
          'Conditional block',
          'block that combines a number of statements into a single compound statement',
          'both conditional block and a single statement',
          'block that contains a single statement',
        ],
        correctAnswer: 2,
      },
      {
        question: 'The "function" and " var" are known as:',
        options: [
          'Keywords',
          'Data types',
          'Declaration statements',
          'Prototypes',
        ],
        correctAnswer: 3,
      },
      {
        question:
          'Which of the following variables takes precedence over the others if the names are the same?',
        options: [
          'Global variable',
          'The local element',
          'The two of the above',
          'None of the above',
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    questions: [
      // C/C++ questions
      {
        question: `Let's say that we've a variable number which is assigned 5 initially. What do you think will be the value of number after we do this?\n number = number + 1;`,
        options: ['5', '6', '0', 'None of the above'],
        correctAnswer: 2,
      },
      {
        question: `What will be the value of firstNumber and secondNumber after this? \n int firstNumber = 5, secondNumber = 7, answer; //Till here: 5, 7
firstNumber = firstNumber + 2;`,
        options: ['5,7', '7,9', '5,9', '7,7'],
        correctAnswer: 4,
      },
      {
        question: `What will be the value of firstNumber and secondNumber after this?\n int firstNumber = 5, secondNumber = 7, answer; //Till here: 5, 7\n firstNumber = firstNumber + 2; //Till here: 7, 7 \n secondNumber = secondNumber + secondNumber;`,
        options: ['7,7', '7,14', '14,7', '14,14'],
        correctAnswer: 2,
      },
      {
        question: `What is the max precision that we can get from float data type?`,
        options: ['0', '6', '15', '38'],
        correctAnswer: 2,
      },
      {
        question: `Which of these codes will print 2.5? \n
Note that we need to print exactly 2.5 and not 2.50 or 2.500000 or anything else.`,
        options: [
          `printf("%d", 5/2);`,
          `printf("%f", 5/2);`,
          `printf("%f", 5.0/2);`,
          `printf("%.1f", 5.0/2);
`,
        ],
        correctAnswer: 4,
      },
    ],
  },
];

console.log('Welcome to Work@Tech Quiz');

console.log('Please Choose your quiz topic.');

quizTopics.forEach((quiz, i) => console.log(`${i + 1}: ${quiz}`));

const quizTopic = readLineSync.question();

if (quizTopic <= quizTopics.length && quizTopic > 0) {
  console.log(
    `You have selected ${quizTopics[quizTopic - 1]} and you have total ${
      quizQuestions[quizTopic - 1].questions.length
    } questions.`
  );

  const start = readLineSync.question(
    'Please type Y/y to start or type any other key to quit\n'
  );

  let totalCorrectAnswers = 0;

  if (start.toLowerCase() === 'y') {
    let quest = quizQuestions[quizTopic - 1].questions;
    for (let i = 0; i < quest.length; i++) {
      console.log(`${quest[i].question}`);
      quest[i].options.forEach((opt, ind) =>
        console.log(`${ind + 1}: ${quest[i].options[ind]}`)
      );
      console.log('Please Enter your option');
      let ans = readLineSync.question();
      if (+ans === quest[i].correctAnswer) {
        console.log('Answer is correct');
        totalCorrectAnswers += 1;
      } else {
        console.log('Sorry, your answer is In-Correct');
        console.log(`The correct answer is ${quest[i].correctAnswer}`);
      }
      console.log('===========================');
    }
    console.log(`Your total score is ${totalCorrectAnswers}`);
  }
} else {
  console.log(`Please choose defined topics only.`);
}
