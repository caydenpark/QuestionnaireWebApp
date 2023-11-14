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
const questions = [
  function question1() {
    return (
      <div>
        <h1>Question 1</h1>
        <h3>What type of software applications are you interested in developing?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Web development</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">Mobile app development</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Data analysis and visualization</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">Game development</label>
      </div>
    );
  },

  function question2() {
    return (
      <div>
        <h1>Question 2</h1>
        <h3>How do you prefer to solve problems?</h3>
        <input type="radio"/>
        <label htmlFor="yes">I enjoy logical thinking and problem-solving. </label>
        <br />
        <input type="radio"/>
        <label htmlFor="no">I like working on user interfaces and design.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="confused">I'm more interested in data and statistics.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="challenge">I enjoy creating interactive and dynamic applications.</label>
      </div>
    );
  },

  function question3() {
    return (
      <div>
        <h1>Question 3</h1>
        <h3>What is your level of experience with programming?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Beginner</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">Intermediate</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Advanced</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">Expert</label>
      </div>
    );
  },

  function question4() {
    return (
      <div>
        <h1>Question 4</h1>
        <h3>Are you interested in Internet of Things (IoT) development?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Very interested</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">Somewhat interested</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Not very interested</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">Not interested at all</label>
      </div>
    );
  },

  function question5() {
    return (
      <div>
        <h1>Question 5</h1>
        <h3>What is your preferred operating system for development?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Windows</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">macOS</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Linux</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">I use multiple operating systems</label>
      </div>
    );
  },

  function question6() {
    return (
      <div>
        <h1>Question 6</h1>
        <h3>How important is community and library support to you?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Very important - I want a large community and many libraries.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">Moderately important - Some community and libraries are needed.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Not very important - I can manage with minimal support.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">Not important at all - I want to build everything from scratch.</label>
      </div>
    );
  },

  function question7() {
    return (
      <div>
        <h1>Question 7</h1>
        <h3>Are you interested in machine learning and artificial intelligence?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">Yes, I'm very interested.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP">Somewhat interested.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">Not interested.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">I have no idea about this field.</label>
      </div>
    );
  },

  function question8() {
    return (
      <div>
        <h1>Question 8</h1>
        <h3>How do you feel about a steep learning curve?</h3>
        <input type="radio"/>
        <label htmlFor="noXP">I enjoy a challenge and don't mind a steep learning curve.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP"> I prefer languages with a moderate learning curve.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">I want a language that's easy to learn and use.</label>
        <br />
      </div>
    );
  },

  function question9() {
    return (
      <div>
        <h1>Question 9</h1>
        <h3>How do you feel about complex syntax and strict rules?</h3>
        <input type="radio"/>
        <label htmlFor="noXP"> I enjoy a challenging language with strict rules.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="someXP"> I prefer a language with clear and simple syntax.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="hobbyXP">I like languages that allow for flexibility.</label>
        <br />
        <input type="radio"/>
        <label htmlFor="engineerXP">I want a language with minimal syntax rules.</label>
      </div>
    );
  }
]

let i = 0;
root.render(questions[i]());

// Apply weighted values to given language variables.
function onAnswerReceived(i_tracker) {
  let selectedValue = 0;
  /*************
   * QUESTION 1
  *************/
  if (questions[i_tracker] === 1) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 2
  *************/
  if (questions[i_tracker] === 2) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 3
  *************/
  if (questions[i_tracker] === 3) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 4
  *************/
  if (questions[i_tracker] === 4) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 5
  *************/
  if (questions[i_tracker] === 5) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 6
  *************/
  if (questions[i_tracker] === 6) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 7
  *************/
  if (questions[i_tracker] === 7) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 8
  *************/
  if (questions[i_tracker] === 8) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }

  /*************
   * QUESTION 9
  *************/
  if (questions[i_tracker] === 9) {
    // Option 1...
    if (selectedValue === 0) {
      window.python = 4;
      window.cSharp = 3;
      window.javaScript = 3;
      window.sql = 4;
      window.html = 4;
    }
    // Option 2... and so on.
    else if (selectedValue === 1) {
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 3;
      window.html = 3;
    }
    else if (selectedValue === 2) {
      window.python = 3;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 2;
      window.html = 3;
    }
    else {
      // Must be option 4.
      window.python = 4;
      window.cSharp = 4;
      window.javaScript = 4;
      window.sql = 1;
      window.html = 2;
    }
  }
}
