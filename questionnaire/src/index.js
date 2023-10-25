// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Initialize global variables
window.python = 0;
window.cSharp = 0;
window.javaScript = 0;
window.sql = 0;
window.html = 0;
window.scores = [0, 0, 0, 0, 0] // Five for five languages.
                                // Should be made dynamic in the future.

// Give index.html something to communicate with.
const container = document.getElementById('questionnaire');
// Make it possible to display to index.html.
const root = ReactDOM.createRoot(container);

// Question functions
//const questions = [
function question1() {
  return (
    <div>
      <h1>Question 1</h1>
      <h3>What is your experience level with programming?</h3>
      <input type="radio" id="noXP" name="question1" value="noXP" onChange={onAnswerReceived} />
      <label htmlFor="noXP">None</label>
      <br />
      <input type="radio" id="someXP" name="question1" value="someXP" onChange={onAnswerReceived} />
      <label htmlFor="someXP">Some</label>
      <br />
      <input type="radio" id="hobbyXP" name="question1" value="hobbyXP" onChange={onAnswerReceived} />
      <label htmlFor="hobbyXP">Hobbyist</label>
      <br />
      <input type="radio" id="engineerXP" name="question1" value="engineerXP" onChange={onAnswerReceived} />
      <label htmlFor="engineerXP">Engineer</label>
    </div>
  );
} //,

function question2() {
  return (
    <div>
      <h1>Question?</h1>
      <h3>Is this another question?</h3>
      <input type="radio" id="yes" name="question2" value="yes" onChange={onAnswerReceived} />
      <label htmlFor="yes">Yes</label>
      <br />
      <input type="radio" id="no" name="question2" value="no" onChange={onAnswerReceived} />
      <label htmlFor="no">No</label>
      <br />
      <input type="radio" id="confused" name="question2" value="confused" onChange={onAnswerReceived} />
      <label htmlFor="confused">I thought so, but...</label>
      <br />
      <input type="radio" id="challenge" name="question2" value="challenge" onChange={onAnswerReceived} />
      <label htmlFor="challenge">You tell me</label>
    </div>
  );
}
// ]

// // Tracks the current question.
// let answered = true;
// for (let i_tracker = 0; i_tracker < questions.length; i_tracker++) {
//   // Displays the current question.
//   while(!answered) {
//     root.render(questions[i_tracker]());
//    }
//    // Move on to the next question.
//    answered = false;
// }

// Apply weighted values to given language variables.
function onAnswerReceived(event, i_tracker) {
  // let selectedValue = 0;
  // // Question 1 calculations...
  // if (questions[i_tracker] === 1) {
  //   // Option 1...
  //   if (selectedValue === 0) {
  //     window.python = 4;
  //     window.cSharp = 3;
  //     window.javaScript = 3;
  //     window.sql = 4;
  //     window.html = 4;
  //   }
  //   // Option 2... and so on.
  //   else if (selectedValue === 1) {
  //   }
  //   else if (selectedValue === 2) {
  //   }
  //   else if (selectedValue === 3) {
  //   }
  //   else {
  //     // Must be option 5.
  //   }
  // // Question 2 calculations... and so on.
  // }
}

root.render(question1());
root.render(question2());