/** @jsxImportSource @emotion/react */

import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          background-color: #0f123d;
          font-family: sans-serif;
          color: white;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
