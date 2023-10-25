// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Initialize global variables
window.python = 0;
window.cSharp = 0;
window.javaScript = 0;
window.sql = 0;
window.html = 0;

const container = document.getElementById('questionnaire');

// Questions
function question1() {
  return (
    <div>
      <h1>Question 1</h1>
      <h3>What is your experience level with programming?</h3>
      <input type="radio" id="noXP" name="question1" value="noXP" onChange={handleRadioChange} />
      <label htmlFor="noXP">None</label><br />
      <input type="radio" id="someXP" name="question1" value="someXP" onChange={handleRadioChange} />
      <label htmlFor="someXP">Some</label><br />
      <input type="radio" id="hobbyXP" name="question1" value="hobbyXP" onChange={handleRadioChange} />
      <label htmlFor="hobbyXP">Hobbyist</label><br />
      <input type="radio" id="engineerXP" name="question1" value="engineerXP" onChange={handleRadioChange} />
      <label htmlFor="engineerXP">Engineer</label>
    </div>
  );
}

function question2() {
  return (
    <div>
      <h1>Question?</h1>
      <h3>Is this another question?</h3>
      <input type="radio" id="noXP" name="question2" value="noXP" onChange={handleRadioChange} />
      <label htmlFor="noXP">Yes</label>
      <br />
      <input type="radio" id="someXP" name="question2" value="someXP" onChange={handleRadioChange} />
      <label htmlFor="someXP">No</label>
      <br />
      <input type="radio" id="hobbyXP" name="question2" value="hobbyXP" onChange={handleRadioChange} />
      <label htmlFor="hobbyXP">I thought so, but...</label>
      <br />
      <input type="radio" id="engineerXP" name="question2" value="engineerXP" onChange={handleRadioChange} />
      <label htmlFor="engineerXP">You tell me</label>
    </div>
  );
}

// Apply weight values to given language variables.
function handleRadioChange() {

}

// Part of a WHILE loop that exits on the questionnaire being completed
// Display the current question
// const i_question = 1; // Set the current question index
// let notAnswered = True;
const root = ReactDOM.createRoot(container);

// // Drives the questions.
// while(notAnswered) {
//   root.render(question + i_question + ())
// }

root.render(question1());
root.render(question2());
