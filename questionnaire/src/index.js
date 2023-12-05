// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Question from './components/question-card';

// Give index.html something to communicate with.
const container = document.getElementById('questionnaire');
// Make it possible to display to index.html.
const root = ReactDOM.createRoot(container);

// Initialize global variables
// window.python = 0;
// window.cSharp = 0;
// window.javaScript = 0;
// window.sql = 0;
// window.html = 0;
// window.scores = [0, 0, 0, 0, 0] // Five for five languages.
//                                 // Should be made dynamic in the future.

// function handleBackButton() {
//   if (i > 0) {
//     i--;
//     root.render(questionsArray[i]());
//   } else {
//     // Display the welcome screen.
//     alert("Welcome to the questionnaire!")
//   }
// }

// function handleNextButton() {
//   if (i < questionsArray.length -1) {
//     i++;
//     root.render(questionsArray[i]());
//   } else {
//     // Display here the end screen and results
//     alert("Thank you for finishing the questionnaire!")
//   }
// }

// Question functions
const questionsArray = [
  {
    id: 1,
    question: 'What type of software applications are you interested in developing?',
    options: {
      A: 'Web development',
      B: 'Mobile app development',
      C: 'Data analysis and visualization',
      D: 'Game development',
    },
  },
  {
    id: 2,
    question: 'How do you prefer to solve problems?',
    options: {
      A: 'I enjoy logical thinking and problem-solving.',
      B: 'I like working on user interfaces and design.',
      C: "I'm more interested in data and statistics.",
      D: 'I enjoy creating interactive and dynamic applications.',
    },
  },
  {
    id: 3,
    question: 'What is your level of experience with programming?',
    options: {
      A: 'Beginner',
      B: 'Intermediate',
      C: 'Advanced',
      D: 'Expert',
    },
  },
  {
    id: 4,
    question: 'Are you interested in Internet of Things (IoT) development?',
    options: {
      A: 'Very interested',
      B: 'Somewhat interested',
      C: 'Not very interested',
      D: 'Not interested at all',
    },
  },
  {
    id: 5,
    question: 'What is your preferred operating system for development?',
    options: {
      A: 'Windows',
      B: 'macOS',
      C: 'Linux',
      D: 'I use multiple operating systems',
    },
  },
  {
    id: 6,
    question: 'How important is community and library support to you?',
    options: {
      A: 'Very important - I want a large community and many libraries.',
      B: 'Moderately important - Some community and libraries are needed.',
      C: 'Not very important - I can manage with minimal support.',
      D: 'Not important at all - I want to build everything from scratch.',
    },
  },
  {
    id: 7,
    question: 'Are you interested in machine learning and artificial intelligence?',
    options: {
      A: 'Yes, I\'m very interested.',
      B: 'Somewhat interested.',
      C: 'Not interested.',
      D: 'I have no idea about this field.',
    },
  },
  {
    id: 8,
    question: 'How do you feel about a steep learning curve?',
    options: {
      A: 'I enjoy a challenge and don\'t mind a steep learning curve.',
      B: 'I prefer languages with a moderate learning curve.',
      C: 'I want a language that\'s easy to learn and use.',
    },
  },
  {
    id: 9,
    question: 'How do you feel about complex syntax and strict rules?',
    options: {
      A: 'I enjoy a challenging language with strict rules.',
      B: 'I prefer a language with clear and simple syntax.',
      C: 'I like languages that allow for flexibility.',
      D: 'I want a language with minimal syntax rules.',
    },
  },
];



// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      {
        questionsArray.map(question => (
          <Question 
          question = {question} 
          id = {question.id} 
          a1={question.options.A}
          a2={question.options.B}
          a3={question.options.C}
          a4={question.options.D}
          />
        ))
      }  
    </div> 
  </React.StrictMode>
);
// let i = 0;
// const nextButton = document.getElementById('nextButton');


// Apply weighted values to given language variables.
// function onAnswerReceived(i_tracker) {
//   let selectedValue = 0;
//   // Question 1 calculations...
//   if (questionsArray[i_tracker] === 1) {
//     // Option 1...
//     if (selectedValue === 0) {
//       window.python = 4;
//       window.cSharp = 3;
//       window.javaScript = 3;
//       window.sql = 4;
//       window.html = 4;
//     }
//     // Option 2... and so on.
//     else if (selectedValue === 1) {
//       window.python = 4;
//       window.cSharp = 4;
//       window.javaScript = 4;
//       window.sql = 3;
//       window.html = 3;
//     }
//     else if (selectedValue === 2) {
//       window.python = 3;
//       window.cSharp = 4;
//       window.javaScript = 4;
//       window.sql = 2;
//       window.html = 3;
//     }
//     else {
//       // Must be option 4.
//       window.python = 4;
//       window.cSharp = 4;
//       window.javaScript = 4;
//       window.sql = 1;
//       window.html = 2;
//     }

//   // Question 2 calculations... and so on.
//   }
// }