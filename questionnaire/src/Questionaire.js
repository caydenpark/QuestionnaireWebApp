import './index.css';
import React, { useState } from 'react';

const Question = ({ question, options, handleBackButton, handleNextButton }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main className="container">
      <h1>{question}</h1>
      {Object.keys(options).map((key) => (
        <div key={key}>
          <input
            type="radio"
            name="options"
            value={key}
            checked={selectedValue === key}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option${key}`}>{options[key]}</label>
          <br />
        </div>
      ))}
      <button onClick={handleBackButton} type="button" className="backButton">
        Last Question
      </button>
      <button onClick={() => handleNextButton(selectedValue)} type="button" className="nextButton">
        Next Question
      </button>
    </main>
  );
};

// Array of questions
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

const Questionnaire = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleBackButton = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    } else {
      alert("Welcome to the survey!")
    }
  };

  const handleNextButton = (selectedValue) => {
    if (selectedValue !== null) {
      setAnswers([...answers, selectedValue]);
      if (questionIndex < questionsArray.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        alert("Thank you for taking the survey.")
      }
    } else {
      alert("Please select an option.")
    }
  };

  const currentQuestion = questionsArray[questionIndex];

  return (
    <div>
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        handleBackButton={handleBackButton}
        handleNextButton={handleNextButton}
      />
      {/* Progress bar or any other UI elements */}
    </div>
  );
};

export {Questionnaire};
