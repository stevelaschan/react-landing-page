/** @jsxImportSource @emotion/react */

import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: sans-serif;
          color: white;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
