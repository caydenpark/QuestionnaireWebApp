// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Give index.html something to communicate with.
const container = document.getElementById('questionnaire');
// Make it possible to display to index.html.
const root = ReactDOM.createRoot(container);

// Initialize global variables.
window.python = 0;
window.cSharp = 0;
window.javaScript = 0;
window.sql = 0;
window.html = 0;
//               python, cSharp, javaScript, sql, html
window.scores = [     0,      0,          0,   0,    0]
window.points = [0, 0, 0, 0, 0] // Holds the values of the last answered question
window.mostRecent = 0;
window.tracker = 0;

function handleBackButton() {

  console.log("Inside start of handleBackButton\n"); // Debugging purposes.

  if (i_question > 0) {
    window.tracker -= 1;
    i_question--;
    root.render(questions[i_question]());
  } else {
    // Display the welcome screen.
    alert("Welcome to the questionnaire!")
  }

  console.log("Inside end of handleBackButton\n"); // Debugging purposes.

}

function handleNextButton() {

  console.log("Inside start of handleNextButton\n"); // Debugging purposes.

  if (i_question < questions.length - 1) {
    window.tracker += 1;
    let selectedValue = 0;

    selectedValue = getSelectedValue(selectedValue);
    updateScores(selectedValue);

    // Iterate to the next question.
    i_question++;
    window.mostRecent += 1;
    root.render(questions[i_question]());
  }
  else {
    // Display here the end screen and results.
    alert(
      "Thank you for finishing the questionnaire!" + 
    "\nPython Score: "     + window.scores[0] + 
    "\nC# Score: "         + window.scores[1] + 
    "\nJavaScript Score: " + window.scores[2] + 
    "\nSQL Score: "        + window.scores[3] + 
    "\nHTML Score: "       + window.scores[4]
    )
  }

  console.log("Inside end of handleNextButton\n"); // Debugging purposes.

}

function getSelectedValue(selectedValue) {

  console.log("Inside start of getSelectedValue\n"); // Debugging purposes.

  const radioButtons = document.getElementsByName(`q${i_question + 1}`);
  
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
    }
  })

  console.log(selectedValue);
  console.log("Inside end of getSelectedValue\n"); // Debugging purposes.
  return selectedValue;
}

// Question functions.
const questions = [
  function question1() {
    return (
      <body>
      <div class="container">
        <h1>Question 1</h1>
        <h3>What type of software applications are you interested in developing?</h3>
        <input type="radio" name="q1" value="0"/>
        <label htmlFor="noXP">Web development</label>
        <br />
        <input type="radio" name="q1" value="1"/>
        <label htmlFor="someXP">Mobile app development</label>
        <br />
        <input type="radio" name="q1" value="2"/>
        <label htmlFor="hobbyXP">Data analysis and visualization</label>
        <br />
        <input type="radio" name="q1" value="3"/>
        <label htmlFor="engineerXP">Game development</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question2() {
    return (
      <body>
      <div class="container">
        <h1>Question 2</h1>
        <h3>How do you prefer to solve problems?</h3>
        <input type="radio" name="q2" value="0"/>
        <label htmlFor="yes">I enjoy logical thinking and problem-solving. </label>
        <br />
        <input type="radio" name="q2" value="1"/>
        <label htmlFor="no">I like working on user interfaces and design.</label>
        <br />
        <input type="radio" name="q2" value="2"/>
        <label htmlFor="confused">I'm more interested in data and statistics.</label>
        <br />
        <input type="radio" name="q2" value="3"/>
        <label htmlFor="challenge">I enjoy creating interactive and dynamic applications.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },
  function question3() {
    return (
      <body>
      <div class="container">
        <h1>Question 3</h1>
        <h3>What is your level of experience with programming?</h3>
        <input type="radio" name="q3" value="0"/>
        <label htmlFor="noXP">Beginner</label>
        <br />
        <input type="radio" name="q3" value="1"/>
        <label htmlFor="someXP">Intermediate</label>
        <br />
        <input type="radio" name="q3" value="2"/>
        <label htmlFor="hobbyXP">Advanced</label>
        <br />
        <input type="radio" name="q3" value="3"/>
        <label htmlFor="engineerXP">Expert</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question4() {
    return (
      <body>
      <div class="container">
        <h1>Question 4</h1>
        <h3>Are you interested in Internet of Things (IoT) development?</h3>
        <input type="radio" name="q4" value="0"/>
        <label htmlFor="noXP">Very interested</label>
        <br />
        <input type="radio" name="q4" value="1"/>
        <label htmlFor="someXP">Somewhat interested</label>
        <br />
        <input type="radio" name="q4" value="2"/>
        <label htmlFor="hobbyXP">Not very interested</label>
        <br />
        <input type="radio" name="q4" value="3"/>
        <label htmlFor="engineerXP">Not interested at all</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question5() {
    return (
      <body>
      <div class="container">
        <h1>Question 5</h1>
        <h3>What is your preferred operating system for development?</h3>
        <input type="radio" name="q5" value="0"/>
        <label htmlFor="noXP">Windows</label>
        <br />
        <input type="radio" name="q5" value="1"/>
        <label htmlFor="someXP">macOS</label>
        <br />
        <input type="radio" name="q5" value="2"/>
        <label htmlFor="hobbyXP">Linux</label>
        <br />
        <input type="radio" name="q5" value="3"/>
        <label htmlFor="engineerXP">I use multiple operating systems</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question6() {
    return (
      <body>
      <div class="container">
        <h1>Question 6</h1>
        <h3>How important is community and library support to you?</h3>
        <input type="radio" name="q6" value="0"/>
        <label htmlFor="noXP">Very important - I want a large community and many libraries.</label>
        <br />
        <input type="radio" name="q6" value="1"/>
        <label htmlFor="someXP">Moderately important - Some community and libraries are needed.</label>
        <br />
        <input type="radio" name="q6" value="2"/>
        <label htmlFor="hobbyXP">Not very important - I can manage with minimal support.</label>
        <br />
        <input type="radio" name="q6" value="3"/>
        <label htmlFor="engineerXP">Not important at all - I want to build everything from scratch.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question7() {
    return (
      <body>
      <div class="container">
        <h1>Question 7</h1>
        <h3>Are you interested in machine learning and artificial intelligence?</h3>
        <input type="radio" name="q7" value="0"/>
        <label htmlFor="noXP">Yes, I'm very interested.</label>
        <br />
        <input type="radio" name="q7" value="1"/>
        <label htmlFor="someXP">Somewhat interested.</label>
        <br />
        <input type="radio" name="q7" value="2"/>
        <label htmlFor="hobbyXP">Not interested.</label>
        <br />
        <input type="radio" name="q7" value="4"/>
        <label htmlFor="engineerXP">I have no idea about this field.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question8() {
    return (
      <body>
      <div class="container">
        <h1>Question 8</h1>
        <h3>How do you feel about a steep learning curve?</h3>
        <input type="radio" name="q8" value="0"/>
        <label htmlFor="noXP">I enjoy a challenge and don't mind a steep learning curve.</label>
        <br />
        <input type="radio" name="q8" value="1"/>
        <label htmlFor="someXP"> I prefer languages with a moderate learning curve.</label>
        <br />
        <input type="radio" name="q8" value="2"/>
        <label htmlFor="hobbyXP">I want a language that's easy to learn and use.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  },

  function question9() {
    return (
      <body>
      <div class="container">
        <h1>Question 9</h1>
        <h3>How do you feel about complex syntax and strict rules?</h3>
        <input type="radio" name="q9" value="0"/>
        <label htmlFor="noXP"> I enjoy a challenging language with strict rules.</label>
        <br />
        <input type="radio" name="q9" value="1"/>
        <label htmlFor="someXP"> I prefer a language with clear and simple syntax.</label>
        <br />
        <input type="radio" name="q9" value="2"/>
        <label htmlFor="hobbyXP">I like languages that allow for flexibility.</label>
        <br />
        <input type="radio" name="q9" value="3"/>

        <label htmlFor="engineerXP">I want a language with minimal syntax rules.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      </body>
    );
  }
]

// Display a question.
let i_question = 0;
root.render(questions[i_question]());

// Apply weighted values to given language variables.
function updateScores(selectedValue) {

  console.log("Inside start of updateScores\n"); // Debugging purposes.
  console.log(`Window.tracker: ${window.tracker}`); // Debugging purposes.
  console.log(`Window.mostRecent: ${window.mostRecent}`); // Debugging purposes.
  console.log(`selectedValue: ${selectedValue}`); // Debugging purposes.

  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  // TODO: Add in the appropriate scores
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Question 1 calculations.
  if (window.tracker == 1) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
      console.log("Inside IF statement for question 1.") // Debugging purposes.
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 2 calculations.
  if (window.tracker == 2) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      console.log(`SelectedValue within Option 4 points: ${selectedValue}.`); // Debugging purposes.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

    // Question3 calculations.
  if (window.tracker == 3) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 4 calculations.
  if (window.tracker == 4) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 5 calculations.
  if (window.tracker == 5) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 6 calculations.
  if (window.tracker == 6) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 7 calculations.
  if (window.tracker == 7) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 8 calculations.
  if (window.tracker == 8) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Question 9 calculations.
  if (window.tracker == 9) {
    // Option 1...
    if (selectedValue == 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue == 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue == 2) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 2;
      window.points[3] = 1;
      window.points[4] = 0;
    }
    else {
      // Must be option 4.
      window.points[0] = 0;
      window.points[1] = 0;
      window.points[2] = 3;
      window.points[3] = 2;
      window.points[4] = 4;
    }
  }

  // Remove points if the user goes back.
  if (window.mostRecent > window.tracker) {
    for (let i = 0; i < window.scores.length; i++) {
      window.scores[i] -= window.points[i];
      console.log(`Removing points from slot ${i}`); // Debugging purposes.
    }
  }
  // Add points.
  else {
    for (let i = 0; i < window.scores.length; i++) {
      window.scores[i] += window.points[i];
      console.log(`Adding points into slot ${i}`); // Debugging purposes.
    }
  }

  console.log(`Scores: ${window.scores}`); // Debugging purposes.
  console.log(`Points: ${window.points}`); // Debugging purposes.
  console.log("Inside end of updateScores\n"); // Debugging purposes.

}