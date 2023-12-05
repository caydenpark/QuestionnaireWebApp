import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Questionnaire } from './Questionaire';

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <React.StrictMode>
    <Questionnaire />
  </React.StrictMode>
);