import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, if you have custom styles
import App from './App'; // Ensure that this component exists
import reportWebVitals from './reportWebVitals'; // Optional, if using web vitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

