/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import logo from './logo.svg';

const navBarStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  font-size: 17px;
  cursor: pointer;

  li {
    border: 3px solid white;
    list-style: none;
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }
  a {
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
  }
`;

const buttons = css`
  border: 2px solid red;
  border-radius: 32px;
  font-size: 17px;
  cursor: pointer;
  margin-left: 10px;
  padding: 16px 32px;
`;

const mainHeader = css`
  height: 90vh;
  max-width: 800px;
  margin: auto;

  h1 {
    border: 3px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25vh;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 7px rgb(0 0 0 / 10%);
    font-size: 3em;
    line-height: 1.2em;
    font-weight: 700;
  }

  h3 {
    border: 3px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: 1.7em;
  }
`;

const contactUsButtons = css`
  border: 2px solid red;
  border-radius: 32px;
  font-size: 17px;
  cursor: pointer;
  padding: 16px 32px;
  bottom: 0;
  right: 0;
`;

function App() {
  return (
    <div className="App">
      <div>
        <header css={navBarStyle}>
          <nav>
            <ul>
              <li>
                <a href="#casestudies">Case Studies</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#ourwork">Our Work</a>
              </li>
              <li>
                <a href="#ourplatform">Our Platform</a>
              </li>
              <li>
                <a href="#about">More</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </nav>
          <button css={buttons}>Schedule Demo</button>
        </header>
      </div>
      <div>
        <section css={mainHeader}>
          <h1>Get a Superhero Web Developer To Grow Your Business</h1>
          <h3>
            We provide an experienced design team that works with you everyday
            to create high-quality design asset to help grow your business. Zero
            headaches, fixed pricing and no contracts
          </h3>
          <div>
            <button css={buttons}>See My Portfolio</button>
          </div>
        </section>
      </div>
      <div>
        <section>
          <h2>
            We get it. Reliable Designers are <span>hard to find</span>
          </h2>
        </section>
      </div>
      <div>
        <button css={contactUsButtons}>Contact Us</button>
      </div>
    </div>
  );
}

export default App;
