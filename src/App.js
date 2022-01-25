/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const basicBackgroundColor = css`
  background-color: #0f123d;
  margin: 0;
  padding: 0;
`;

const backgroundImageStyle = css`
  background-image: url(https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f1830b470eef28ef4a043ac_homepagev2.svg);
  background-position: 0 100%;
  background-size: cover;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
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
    height: 400px;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 7px rgb(0 0 0 / 10%);
    font-size: 3em;
    line-height: 1.2em;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
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

const logosStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .logoOne {
    top: -7px;
    margin-right: 0;
    margin-left: 0;
    background-image: url('https://global-uploads.webflow.com/5dd3495558fd7f3…935bf3cbbe7038ca0d5220_Educative%20Logo%20(1).png');
    background-size: 90px;
    opacity: 1;
  }
  .logoTwo {
    left: 10px;
    top: -7px;
    margin-left: 0;
    background-image: url('https://global-uploads.webflow.com/5dd3495558fd7f3…/60935bf32b14c4174c2976f9_Streak%20Logo%20(1).png');
    background-position: 50% 50%;
    background-size: 70px;
    opacity: 1;
  }
  .logoThree {
    left: 9px;
    top: -13px;
    margin-left: 0;
    background-image: url('https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/60936f3eead891a149b2bb33_LIGR.png');
    background-size: 90px;
    opacity: 1;
    background-position: 50% 50%;
  }
`;

const reliableDesignersHeadingStyle = css`
  /* border: 3px solid white; */
  margin-right: auto;
  margin-bottom: 64px;
  margin-left: auto;
  width: 500px;
  line-height: 46px;
  font-weight: 700;
  text-align: center;
  font-size: 24px;

  h2 {
    margin: 0;
    padding: 0;
  }

  span {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #50b8dc;
  }
`;

const qualityCommunicationDeadlinesHeadingStyle = css`
  display: flex;
  flex-direction: row;
  margin: 70px auto 70px auto;
  padding: 20px 0;
  justify-content: center;
  width: 1200px;
  height: auto;
  align-items: flex-start;

  .qualityHeading {
    border: 3px solid white;
    margin: 40px 25px;
    padding: 170px 20px;
    border-radius: 24px;
    box-shadow: 1px 1px 12px 0 rgb(0 0 0 / 7%);
    background-image: url(https://global-uploads.webflow.com/5dd3495558fd7f3…52bc/605200ca638f38edafded84c_Rectangle%20482.svg);
  }

  .communicationHeading {
    border: 3px solid white;
    margin: 40px 25px;
    padding: 170px 20px;
    border-radius: 24px;
    box-shadow: 1px 1px 12px 0 rgb(0 0 0 / 7%);
    background-image: url(https://global-uploads.webflow.com/5dd3495558fd7f3…52bc/605200ca638f38edafded84c_Rectangle%20482.svg);
  }

  .deadlinesHeading {
    border: 3px solid white;
    margin: 40px 25px;
    padding: 170px 20px;
    border-radius: 24px;
    box-shadow: 1px 1px 12px 0 rgb(0 0 0 / 7%);
    background-image: url(https://global-uploads.webflow.com/5dd3495558fd7f3…52bc/605200ca638f38edafded84c_Rectangle%20482.svg);
  }

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }
`;

const weMakeItEasyHeadingStyle = css`
  margin-right: auto;
  margin-bottom: 64px;
  margin-left: auto;
  width: 500px;
  line-height: 46px;
  font-weight: 700;
  text-align: center;
  font-size: 24px;

  span {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #50b8dc;
  }
`;

const designCommunicatonDeadlineHeadingStyle = css`
  flex-direction: column;

  h3 {
    width: 100%;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 40px;
    font-weight: 500;
    text-align: left;
    height: auto;
  }

  p {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    color: rgba(212, 214, 255, 0.95);
    font-size: 15px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }
`;

const contactUsButtons = css`
  position: sticky;
  border: 2px solid #fd435a;
  border-radius: 32px;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 15px;
  bottom: 0;
  right: 0;
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
        <section>
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
        </section>
        <section css={mainHeader}>
          <h1>Get A Superhero Design Team To Grow Your Business</h1>
          <h3>
            We provide an experienced design team that works with you everyday
            to create high-quality design asset to help grow your business. Zero
            headaches, fixed pricing and no contracts
          </h3>
          <div>
            <button css={buttons}>SEE OUR PRICING</button>
          </div>
        </section>
      </div>
      <div css={basicBackgroundColor}>
        <section>
          <div css={logosStyle}>
            <a href="logoOne" className="logoOne">
              1
            </a>
            <a href="logoTwo" className="logoTwo">
              2
            </a>
            <a href="logoThree" className="logoThree">
              3
            </a>
            <a href="logoFour" className="logoFour">
              4
            </a>
            <a href="logoFive" className="logoFive">
              5
            </a>
            <a href="logoSix" className="logoSix">
              6
            </a>
            <a href="logoSeven" className="logoSeven">
              7
            </a>
          </div>
          <br />
          <br />
          <div css={reliableDesignersHeadingStyle}>
            <h2>
              We get it. Reliable Designers <span>are hard to find</span>
            </h2>
          </div>
          <div css={qualityCommunicationDeadlinesHeadingStyle}>
            <div className="qualityHeading">
              <h3>Poor Quality</h3>
              <p>
                You're tired of the guessing game to find the right designer.
              </p>
            </div>
            <div className="communicationHeading">
              <h3>Bad Communication</h3>
              <p>
                You're fed up with having to explain yourself multiple times.
              </p>
            </div>
            <div className="deadlinesHeading">
              <h3>Missed Deadlines</h3>
              <p>You lose hope as deadlines are missed over and over again.</p>
            </div>
          </div>
        </section>
        <section>
          <div css={weMakeItEasyHeadingStyle}>
            <h2>
              Design doesn't have to be hard <span>We make it easy</span>.
            </h2>
          </div>
          <div css={designCommunicatonDeadlineHeadingStyle}>
            <h3>Breath-taking Designs</h3>
            <br />
            <p>
              All of our designers are carefully vetted and have years of
              experience working in the design industry.
            </p>
            <br />
            <p>
              You'll get a dedicated UI Designer, Graphic Designer, Illustrator
              and Project Manager. With a full design team, getting
              breath-taking designs couldn't be any easier!
            </p>
            <h3>Communication That Matters</h3>
            <br />
            <p>
              With a dedicated Project Manager who cares about your success and
              direct live-chat access to your experienced designers,
              communication issues will be no more!
            </p>
            <h3>No More Missed Deadlines</h3>
            <br />
            <p>
              Need that design done on a specific date? You can trust us to
              deliver it on time. Once we commit to a date, we'll get it done.
            </p>
            <br />
            <p>
              Job requests will on average be delivered in a few business days.
              Simpler tasks such as graphic designs and revisions will be
              delivered within 24 hours.
            </p>
          </div>
        </section>
      </div>
      <button css={contactUsButtons}>Contact Us</button>
    </div>
  );
}

export default App;
