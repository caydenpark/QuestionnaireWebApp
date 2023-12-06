// Import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
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
  if (i > 0) {
    window.tracker -= 1;
    i--;
    root.render(questions[i]());
  } else {
    // Display the welcome screen.
    alert("Welcome to the questionnaire!")
  }
  if (progress > 0) {
    progress -= 12.5; // can adjust value
    updateProgressBar();
  }
}

function handleNextButton() {
  if (i < questions.length - 1) {
    window.mostRecent += 1;
    window.tracker += 1;
    updateScores();
    i++;
    root.render(questions[i]());
  } else {
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
  if (progress < 100) {
    progress += 12.5; // can adjust value
    updateProgressBar();
  }
  var radioButtons = document.getElementsByName(`q${i}`);

  // Loop through and uncheck each radio button
  for (var j = 0; j < radioButtons.length; j++) {
    radioButtons[j].checked = false;
  }
}
let progress = 0;
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progress}%`;
}
// Question functions
const questions = [
  function question1() {
    return (
      <body>
      <div class="container">
        <h1>Question 1</h1>
        <h3>What type of software applications are you interested in developing?</h3>
        <input type="radio" id="noXP1" name="q1" value="0"/>
        <label htmlFor="noXP1">Web development</label>
        <br />
        <input type="radio" id="someXP1" name="q1" value="1"/>
        <label htmlFor="someXP1">Mobile app development</label>
        <br />
        <input type="radio" id="hobbyXP1" name="q1" value="2"/>
        <label htmlFor="hobbyXP1">Data analysis and visualization</label>
        <br />
        <input type="radio" id="engineerXP1" name="q1" value="3"/>
        <label htmlFor="engineerXP1">Game development</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="yes2" name="q2" value="0"/>
        <label htmlFor="yes2">I enjoy logical thinking and problem-solving. </label>
        <br />
        <input type="radio" id="no2" name="q2" value="1"/>
        <label htmlFor="no2">I like working on user interfaces and design.</label>
        <br />
        <input type="radio" id="confused2" name="q2" value="2"/>
        <label htmlFor="confused2">I'm more interested in data and statistics.</label>
        <br />
        <input type="radio" id="challenge2" name="q2" value="3"/>
        <label htmlFor="challenge2">I enjoy creating interactive and dynamic applications.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP3" name="q3" value="0"/>
        <label htmlFor="noXP3">Beginner</label>
        <br />
        <input type="radio" id="someXP3" name="q3" value="1"/>
        <label htmlFor="someXP3">Intermediate</label>
        <br />
        <input type="radio" id="hobbyXP3" name="q3" value="2"/>
        <label htmlFor="hobbyXP3">Advanced</label>
        <br />
        <input type="radio" id="engineerXP3" name="q3" value="3"/>
        <label htmlFor="engineerXP3">Expert</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP4" name="q4" value="0"/>
        <label htmlFor="noXP4">Very interested</label>
        <br />
        <input type="radio" id="someXP4" name="q4" value="1"/>
        <label htmlFor="someXP4">Somewhat interested</label>
        <br />
        <input type="radio" id="hobbyXP4" name="q4" value="2"/>
        <label htmlFor="hobbyXP4">Not very interested</label>
        <br />
        <input type="radio" id="engineerXP4" name="q4" value="3"/>
        <label htmlFor="engineerXP4">Not interested at all</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP5" name="q5" value="0"/>
        <label htmlFor="noXP5">Windows</label>
        <br />
        <input type="radio" id="someXP5" name="q5" value="1"/>
        <label htmlFor="someXP5">macOS</label>
        <br />
        <input type="radio" id="hobbyXP5" name="q5" value="2"/>
        <label htmlFor="hobbyXP5">Linux</label>
        <br />
        <input type="radio" id="engineerXP5" name="q5" value="3"/>
        <label htmlFor="engineerXP5">I use multiple operating systems</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP6" name="q6" value="0"/>
        <label htmlFor="noXP6">Very important - I want a large community and many libraries.</label>
        <br />
        <input type="radio" id="someXP6" name="q6" value="1"/>
        <label htmlFor="someXP6">Moderately important - Some community and libraries are needed.</label>
        <br />
        <input type="radio" id="hobbyXP6" name="q6" value="2"/>
        <label htmlFor="hobbyXP6">Not very important - I can manage with minimal support.</label>
        <br />
        <input type="radio" id="engineerXP6" name="q6" value="3"/>
        <label htmlFor="engineerXP6">Not important at all - I want to build everything from scratch.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP7" name="q7" value="0"/>
        <label htmlFor="noXP7">Yes, I'm very interested.</label>
        <br />
        <input type="radio" id="someXP7" name="q7" value="1"/>
        <label htmlFor="someXP7">Somewhat interested.</label>
        <br />
        <input type="radio" id="hobbyXP7" name="q7" value="2"/>
        <label htmlFor="hobbyXP7">Not interested.</label>
        <br />
        <input type="radio" id="engineerXP7" name="q7" value="4"/>
        <label htmlFor="engineerXP7">I have no idea about this field.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP8" name="q8" value="0"/>
        <label htmlFor="noXP8">I enjoy a challenge and don't mind a steep learning curve.</label>
        <br />
        <input type="radio" id="someXP8" name="q8" value="1"/>
        <label htmlFor="someXP8"> I prefer languages with a moderate learning curve.</label>
        <br />
        <input type="radio" id="hobbyXP8" name="q8" value="2"/>
        <label htmlFor="hobbyXP8">I want a language that's easy to learn and use.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
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
        <input type="radio" id="noXP9" name="q9" value="0"/>
        <label htmlFor="noXP9"> I enjoy a challenging language with strict rules.</label>
        <br />
        <input type="radio" id="someXP9" name="q9" value="1"/>
        <label htmlFor="someXP9"> I prefer a language with clear and simple syntax.</label>
        <br />
        <input type="radio" id="hobbyXP9" name="q9" value="2"/>
        <label htmlFor="hobbyXP9">I like languages that allow for flexibility.</label>
        <br />
        <input type="radio" id="engineerXP9" name="q9" value="3"/>

        <label htmlFor="engineerXP9">I want a language with minimal syntax rules.</label>
        <br/>
        <button onClick={handleBackButton} type='button' class="backButton">Last Question</button>
        <button onClick={handleNextButton} type='button' class="nextButton">Next Question</button>
      </div>
      <div class="progress-bar-container">
        <div id="progress-bar"></div>
      </div>
      </body>
    );
  }
]

// Display a question.
let i = 0;
root.render(questions[i]());

// Apply weighted values to given language variables.
function updateScores() {
  let selectedValue = 0;

  // Remove points if the user goes back.
  if (window.mostRecent > window.tracker) {
    for (let i = 0; i < window.scores.length; i++) {
      window.scores[i] -= window.points[i];
    }
  }
  // Add points.
  else {
    for (let i = 0; i < window.scores.length; i++) {
      window.scores[i] += window.points[i];
    }
  }

  // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  // TODO: Add in the appropriate scores
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Question 1 calculations...
  if (questions[window.tracker] === 1) {
    // Option 1...
    if (selectedValue === 0) {
      window.points[0] = 4;
      window.points[1] = 3;
      window.points[2] = 3;
      window.points[3] = 4;
      window.points[4] = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.points[0] = 4;
      window.points[1] = 1;
      window.points[2] = 2;
      window.points[3] = 3;
      window.points[4] = 4;
    }
    else if (selectedValue === 2) {
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

  // Question 2 calculations... and so on.
  }
}
