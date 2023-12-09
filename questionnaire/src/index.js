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
window.scores = [0, 0, 0, 0, 0]
window.points = [0, 0, 0, 0, 0] // Holds the values of the last answered question
window.mostRecent = 0;
window.tracker = 0;

function handleBackButton() {
  if (i_question > 0) {
    window.tracker -= 1;
    i_question--;
    root.render(questions[i_question]());
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
  if (i_question < questions.length - 1) {
    window.tracker += 1;
    let selectedValue;

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
      "\nPython Score: " + window.scores[0] +
      "\nC# Score: " + window.scores[1] +
      "\nJavaScript Score: " + window.scores[2] +
      "\nSQL Score: " + window.scores[3] +
      "\nHTML Score: " + window.scores[4]
    )
    let language = findLanguage();
    root.render(displayResults(language, resources));
  }
  if (progress < 100) {
    progress += 12.5; // can adjust value
    updateProgressBar();
  }
  var radioButtons = document.getElementsByName(`q${i_question}`);

  function getSelectedValue(selectedValue) {
    const radioButtons = document.getElementsByName(`q${i_question + 1}`);

    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        selectedValue = radioButton.value;
      }
    })
    return selectedValue;
  }

  // Loop through and uncheck each radio button
  for (var j = 0; j < radioButtons.length; j++) {
    radioButtons[j].checked = false;
  }
}

// Progress bar.
let progress = 0;
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progress}%`;
}

// Question functions.
const questions = [
  function question1() {
    return (
      <body>
        <div class="container">
          <h1>Question 1</h1>
          <h3>What type of software applications are you interested in developing?</h3>
          <input type="radio" id="noXP1" name="q1" value="0" />
          <label htmlFor="noXP1">Web development</label>
          <br />
          <input type="radio" id="someXP1" name="q1" value="1" />
          <label htmlFor="someXP1">Mobile app development</label>
          <br />
          <input type="radio" id="hobbyXP1" name="q1" value="2" />
          <label htmlFor="hobbyXP1">Data analysis and visualization</label>
          <br />
          <input type="radio" id="engineerXP1" name="q1" value="3" />
          <label htmlFor="engineerXP1">Game development</label>
          <br />
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
          <input type="radio" id="yes2" name="q2" value="0" />
          <label htmlFor="yes2">I enjoy logical thinking and problem-solving. </label>
          <br />
          <input type="radio" id="no2" name="q2" value="1" />
          <label htmlFor="no2">I like working on user interfaces and design.</label>
          <br />
          <input type="radio" id="confused2" name="q2" value="2" />
          <label htmlFor="confused2">I'm more interested in data and statistics.</label>
          <br />
          <input type="radio" id="challenge2" name="q2" value="3" />
          <label htmlFor="challenge2">I enjoy creating interactive and dynamic applications.</label>
          <br />
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
          <input type="radio" id="noXP3" name="q3" value="0" />
          <label htmlFor="noXP3">Beginner</label>
          <br />
          <input type="radio" id="someXP3" name="q3" value="1" />
          <label htmlFor="someXP3">Intermediate</label>
          <br />
          <input type="radio" id="hobbyXP3" name="q3" value="2" />
          <label htmlFor="hobbyXP3">Advanced</label>
          <br />
          <input type="radio" id="engineerXP3" name="q3" value="3" />
          <label htmlFor="engineerXP3">Expert</label>
          <br />
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
          <input type="radio" id="noXP4" name="q4" value="0" />
          <label htmlFor="noXP4">Very interested</label>
          <br />
          <input type="radio" id="someXP4" name="q4" value="1" />
          <label htmlFor="someXP4">Somewhat interested</label>
          <br />
          <input type="radio" id="hobbyXP4" name="q4" value="2" />
          <label htmlFor="hobbyXP4">Not very interested</label>
          <br />
          <input type="radio" id="engineerXP4" name="q4" value="3" />
          <label htmlFor="engineerXP4">Not interested at all</label>
          <br />
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
          <input type="radio" id="noXP5" name="q5" value="0" />
          <label htmlFor="noXP5">Windows</label>
          <br />
          <input type="radio" id="someXP5" name="q5" value="1" />
          <label htmlFor="someXP5">macOS</label>
          <br />
          <input type="radio" id="hobbyXP5" name="q5" value="2" />
          <label htmlFor="hobbyXP5">Linux</label>
          <br />
          <input type="radio" id="engineerXP5" name="q5" value="3" />
          <label htmlFor="engineerXP5">I use multiple operating systems</label>
          <br />
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
          <input type="radio" id="noXP6" name="q6" value="0" />
          <label htmlFor="noXP6">Very important - I want a large community and many libraries.</label>
          <br />
          <input type="radio" id="someXP6" name="q6" value="1" />
          <label htmlFor="someXP6">Moderately important - Some community and libraries are needed.</label>
          <br />
          <input type="radio" id="hobbyXP6" name="q6" value="2" />
          <label htmlFor="hobbyXP6">Not very important - I can manage with minimal support.</label>
          <br />
          <input type="radio" id="engineerXP6" name="q6" value="3" />
          <label htmlFor="engineerXP6">Not important at all - I want to build everything from scratch.</label>
          <br />
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
          <input type="radio" id="noXP7" name="q7" value="0" />
          <label htmlFor="noXP7">Yes, I'm very interested.</label>
          <br />
          <input type="radio" id="someXP7" name="q7" value="1" />
          <label htmlFor="someXP7">Somewhat interested.</label>
          <br />
          <input type="radio" id="hobbyXP7" name="q7" value="2" />
          <label htmlFor="hobbyXP7">Not interested.</label>
          <br />
          <input type="radio" id="engineerXP7" name="q7" value="4" />
          <label htmlFor="engineerXP7">I have no idea about this field.</label>
          <br />
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
          <input type="radio" id="noXP8" name="q8" value="0" />
          <label htmlFor="noXP8">I enjoy a challenge and don't mind a steep learning curve.</label>
          <br />
          <input type="radio" id="someXP8" name="q8" value="1" />
          <label htmlFor="someXP8">I prefer languages with a moderate learning curve.</label>
          <br />
          <input type="radio" id="hobbyXP8" name="q8" value="2" />
          <label htmlFor="hobbyXP8">I want a language that's easy to learn and use.</label>
          <br />
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
          <input type="radio" id="noXP9" name="q9" value="0" />
          <label htmlFor="noXP9">I enjoy a challenging language with strict rules.</label>
          <br />
          <input type="radio" id="someXP9" name="q9" value="1" />
          <label htmlFor="someXP9">I prefer a language with clear and simple syntax.</label>
          <br />
          <input type="radio" id="hobbyXP9" name="q9" value="2" />
          <label htmlFor="hobbyXP9">I like languages that allow for flexibility.</label>
          <br />
          <input type="radio" id="engineerXP9" name="q9" value="3" />

          <label htmlFor="engineerXP9">I want a language with minimal syntax rules.</label>
          <br />
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
let i_question = 0;
root.render(questions[i_question]());

// Apply weighted values to given language variables.
function updateScores(selectedValue) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
      // Must be option 4.
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    else if (selectedValue == 3) {
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
    }
  }
  // Add points.
  else {
    for (let i = 0; i < window.scores.length; i++) {
      window.scores[i] += window.points[i];
    }
  }
}

// Function to find the language with the highest score
function findLanguage() {
  let highestScore = 0;
  let language;

  for (let i = 0; i < window.scores.length; i++) {
    if (window.scores[i] > highestScore) {
      highestScore = window.scores[i]
      // Use a switch statement to update language based on the current index
      switch (i) {
        case 0:
          language = "Python";
          break;
        case 1:
          language = "C#";
          break;
        case 2:
          language = "JavaScript";
          break;
        case 3:
          language = "SQL";
          break;
        case 4:
          language = "HTML";
          break;
      }
    }
  }

  return language;
}

function displayResults(language, resources) {
  // Find the information for the specified language
  const languageInfo = resources.find(item => item.language === language);

  if (!languageInfo) {
    // Handle the case where the language is not found in the resources
    return <p>Language information not available.</p>;
  }

  return (
    <body>
      <div class="container">
        <h1>Results</h1>
        <h2>Your language is {language}!</h2>
        <h3>Purpose:</h3>
        <p>{languageInfo.purpose}</p>
        <h3>Resources:</h3>
        <ul>
          {languageInfo.resources.map(resource => (
            <li><a href={resource.link}>{resource.name}</a> - {resource.description}</li>
          ))}
        </ul>
        <h3>Projects:</h3>
        <ul>
          {languageInfo.projects.map(project => (
            <li>{project}</li>
          ))}
        </ul>
      </div>
    </body>
  )
}

const resources = [
  {
    language: "Python",
    purpose: "Python is a versatile, high-level programming language known for its simplicity and readability. It's used for web development, data analysis, artificial intelligence, machine learning, scientific computing, automation, and more. Its syntax allows developers to write clear, concise code, making it a popular choice for beginners and professionals alike.",
    resources: [
      {
        name: "CodeCombat",
        description: "A platform where you can learn Python (and other languages) by playing a game, solving challenges, and writing code to control characters in a fantasy world.",
        link: "https://codecombat.com/"
      },
      {
        name: "CheckiO",
        description: "An interactive game platform with Python challenges. Solve missions, improve your skills, and compete with others.",
        link: "https://checkio.org/"
      },
      {
        name: "Python Challenge",
        description: "A puzzle-based game where you progress by solving Python-related riddles. Each level unlocks the next challenge.",
        link: "http://www.pythonchallenge.com/"
      },
      {
        name: "Codewars",
        description: "Offers coding challenges in various languages, including Python. Solve problems to advance and improve your coding skills.",
        link: "https://www.codewars.com/"
      },
      {
        name: "PyBites",
        description: "Provides Python challenges and exercises for skill improvement, covering different levels of difficulty.",
        link: "https://pybit.es/"
      }
    ],
    projects: [
      "Weather App",
      "To-Do List Manager",
      "Web Scraper",
      "Simple Game",
      "Personal Portfolio Website Generator"
    ]
  },
  {
    language: "JavaScript",
    purpose: "JavaScript is primarily used for building interactive and dynamic web pages. It's a scripting language that runs on web browsers and allows developers to create client-side functionalities, handle events, manipulate HTML/CSS, and build web applications. It's also used in server-side development (Node.js) and game development.",
    resources: [
      {
        name: "Codecademy",
        description: "Offers interactive JavaScript lessons and projects for beginners, allowing you to write and test code in a browser-based environment.",
        link: "https://www.codecademy.com/learn/introduction-to-javascript"
      },
      {
        name: "Elevator Saga",
        description: "A game where you write JavaScript code to control elevators and solve increasingly complex challenges.",
        link: "https://play.elevatorsaga.com/"
      },
      {
        name: "CodeCombat",
        description: "Teaches JavaScript along with other languages in a game setting, letting you control characters using code.",
        link: "https://codecombat.com/"
      },
      {
        name: "JavaScript30",
        description: "A 30-day challenge with small projects aimed at improving JavaScript skills by building various applications.",
        link: "https://javascript30.com/"
      },
      {
        name: "Untrusted",
        description: "A game that requires you to modify JavaScript code to solve puzzles and advance through levels.",
        link: "https://alexnisnevich.github.io/untrusted/"
      }
    ],
    projects: [
      "Interactive Quiz App",
      "To-Do List App",
      "Weather Forecast Web App",
      "Interactive Image Gallery",
      "Real-Time Chat Application"
    ]
  },
  {
    language: "C#",
    purpose: "C# (pronounced as 'C sharp') is a powerful, object-oriented programming language developed by Microsoft. It's commonly used for developing Windows applications, games using Unity, web applications, and enterprise-level software. It's known for its ease of use, scalability, and robustness in creating diverse software solutions.",
    resources: [
      {
        name: "Unity Learn",
        description: "Offers tutorials and interactive lessons for C# within the context of game development using Unity, a popular game engine.",
        link: "https://learn.unity.com/"
      },
      {
        name: "SoloLearn",
        description: "Provides a C# course with quizzes, challenges, and a community to help beginners learn C#.",
        link: "https://www.sololearn.com/Course/CSharp/"
      },
      {
        name: "Codingame",
        description: "A platform with challenges and multiplayer games where you use C# to solve problems and improve your coding skills.",
        link: "https://www.codingame.com/"
      },
      {
        name: "Exercism.io",
        description: "Offers coding exercises and mentor-guided learning for C#. You solve problems and get feedback from mentors.",
        link: "https://exercism.io/tracks/csharp"
      },
      {
        name: "C# Yellow Book by Rob Miles",
        description: "A free book providing a fun and accessible approach to learning C# programming.",
        link: "https://www.robmiles.com/s/CSharp-Book-2021-1.00.pdf"
      }
    ],
    projects: [
      "Simple Calculator",
      "Inventory Management System",
      "Personal Finance Manager",
      "Text-Based RPG Game",
      "Task Scheduler"
    ]
  },
  {
    language: "SQL",
    purpose: "SQL (Structured Query Language) is a domain-specific language designed for managing and manipulating relational databases. It's used to perform various operations on databases like querying data, inserting, updating, deleting records, creating and modifying tables, and defining relationships between them. SQL is vital in handling data in almost all software applications.",
    resources: [
      {
        name: "SQLZoo",
        description: "Interactive SQL tutorials with a range of difficulty levels.",
        link: "https://sqlzoo.net/"
      },
      {
        name: "HackerRank",
        description: "Platform offering SQL challenges and contests to practice SQL queries.",
        link: "https://www.hackerrank.com/domains/tutorials/10-days-of-sql"
      },
      {
        name: "Mode Analytics SQL Tutorial",
        description: "Teaches SQL through interactive lessons and exercises.",
        link: "https://mode.com/sql-tutorial/"
      },
      {
        name: "LeetCode",
        description: "Provides SQL problems to solve in a gamified environment.",
        link: "https://leetcode.com/problemset/database/"
      },
      {
        name: "SQL Fiddle",
        description: "Allows practicing SQL in a sandbox environment with various database systems.",
        link: "http://sqlfiddle.com/"
      }
    ],
    projects: [
      "Online Library Database",
      "Employee Management System",
      "Healthcare Management System",
      "E-commerce Database",
      "Social Media Analytics"
    ]
  },
  {
    language: "HTML",
    purpose: "HTML (Hypertext Markup Language) forms the backbone of web pages, providing the structure and content. It uses various tags to define elements like text, images, links, forms, and more. CSS (Cascading Style Sheets) complements HTML by adding style and design, controlling the layout, appearance, and presentation of HTML elements. CSS allows developers to customize colors, fonts, spacing, and create responsive designs for different devices. Together, HTML and CSS are fundamental languages for creating visually appealing and well-structured web pages and applications. They work in tandem, with HTML defining the content and structure, while CSS defines the visual style and layout.",
    resources: [
      {
        name: "Codecademy",
        description: "Interactive lessons on HTML for building web pages.",
        link: "https://www.codecademy.com/learn/learn-html"
      },
      {
        name: "Mozilla Developer Network (MDN) Web Docs",
        description: "Comprehensive tutorials and references for HTML.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "FreeCodeCamp",
        description: "Offers projects and challenges for learning HTML and other web technologies.",
        link: "https://www.freecodecamp.org/learn/"
      },
      {
        name: "w3schools",
        description: "Interactive tutorials and examples for HTML, CSS, and other web technologies.",
        link: "https://www.w3schools.com/html/"
      },
      {
        name: "HTML Dog",
        description: "Provides tutorials and exercises to learn HTML step by step.",
        link: "https://htmldog.com/"
      }
    ],
    projects: [
      "Personal Portfolio Website",
      "Recipe Book Website",
      "Blog Site",
      "Event Countdown Page",
      "Online Resume"
    ]
  }
];