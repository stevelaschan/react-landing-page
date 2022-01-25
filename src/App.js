/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const backgroundImageStyle = css`
  background-image: url(https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f1830b470eef28ef4a043ac_homepagev2.svg);
  background-position: 0 100%;
  background-size: cover;
  justify-content: flex-start;
  width: 100%;
`;

const navBarStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  font-size: 15px;
  cursor: pointer;

  li {
    list-style: none;
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid;
  }
`;

const buttons = css`
  border: 1px solid #fd435a;
  border-radius: 45px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 10px;
  padding: 16px 32px;
  background-color: #fd435a;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
  font-weight: 700;
  letter-spacing: 1px;
`;

const mainHeader = css`
  height: 90vh;
  max-width: 800px;
  margin: auto;

  h1 {
    /* border: 3px solid white; */
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
    /* border: 3px solid white; */
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    font-weight: 400;
    line-height: 1.7em;
  }
`;

const contactUsButtons = css`
  position: sticky;
  border: 2px solid #fd435a;
  border-radius: 32px;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 15px;
  bottom: -0;
  right: -0;
  background-color: #fd435a;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
  font-weight: 700;
  letter-spacing: 2px;
`;

function App() {
  return (
    <div className="App">
      <div css={backgroundImageStyle}>
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
                  <a href="#more">More</a>
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
            <h1>Get A Superhero Design Team To Grow Your Business</h1>
            <h3>
              We provide an experienced design team that works with you everyday
              to create high-quality design asset to help grow your business.
              Zero headaches, fixed pricing and no contracts
            </h3>
            <div>
              <button css={buttons}>SEE OUR PRICING</button>
            </div>
          </section>
        </div>
      </div>
      <div>
        <section>
          <h2>
            We get it. Reliable Designers are <span>hard to find</span>
          </h2>
        </section>
      </div>
      <button css={contactUsButtons}>Contact Us</button>
    </div>
  );
}

export default App;
