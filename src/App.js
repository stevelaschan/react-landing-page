/** @jsxImportSource @emotion/react */

import {
  AppStyle,
  backgroundImageStyle,
  basicBackgroundColor,
  buttons,
  contactUsButtons,
  designCommunicationDeadlineHeadingStyle,
  logosStyle,
  mainHeader,
  navBarStyle,
  qualityCommunicationDeadlinesHeadingSectionStyle,
  reliableDesignersHeadingStyle,
  weMakeItEasyHeadingStyle,
} from './AppStyle.js';

function App() {
  return (
    <div className="App" css={AppStyle}>
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
        <div css={mainHeader}>
          <section>
            <h1>Get A Superhero Design Team To Grow Your Business</h1>
            <h3>
              We provide an experienced design team that works with you everyday
              to create high-quality design asset to help grow your business.
              Zero headaches, fixed pricing and no contracts
            </h3>
            <br />
            <br />
            <div>
              <button css={buttons}>SEE OUR PRICING</button>
            </div>
          </section>
        </div>
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
          <div css={qualityCommunicationDeadlinesHeadingSectionStyle}>
            <div className="qualityHeading">
              <div>
                <img
                  src="https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f81ab198f8ef5cee20912e1_problem%201.svg"
                  alt="picOne"
                  className="picOne"
                />
              </div>
              <h3>Poor Quality</h3>
              <p>
                You're tired of the guessing game to find the right designer.
              </p>
            </div>
            <div className="communicationHeadingSection">
              <div>
                <img
                  src="https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f8d853d0d48df02c84afe79_Problem%202.svg"
                  alt="picTwo"
                  className="picTwo"
                />
              </div>
              <h3>Bad Communication</h3>
              <p>
                You're fed up with having to explain yourself multiple times.
              </p>
            </div>
            <div className="deadlinesHeadingSection">
              <div>
                <img
                  src="https://global-uploads.webflow.com/5dd3495558fd7f3d1fcb52bc/5f8d853dda2bfa799b5a7c06_big%20change%202.svg"
                  alt="picThree"
                  className="picThree"
                />
                <h3>Missed Deadlines</h3>
                <p>
                  You lose hope as deadlines are missed over and over again.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div css={weMakeItEasyHeadingStyle}>
            <h2>
              Design doesn't have to be hard <span>We make it easy</span>.
            </h2>
          </div>
          <div css={designCommunicationDeadlineHeadingStyle}>
            <div className="designsHeadingSection">
              <h3>Breath-taking Designs</h3>
              <br />
              <p>
                All of our designers are carefully vetted and have years of
                experience working in the design industry.
              </p>
              <br />
              <p>
                You'll get a dedicated UI Designer, Graphic Designer,
                Illustrator and Project Manager. With a full design team,
                getting breath-taking designs couldn't be any easier!
              </p>
            </div>
            <div className="communicationHeadingSection">
              <h3>Communication That Matters</h3>
              <br />
              <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!
              </p>
            </div>
            <div className="deadlinesHeadingSection">
              <h3>No More Missed Deadlines</h3>
              <br />
              <p>
                Need that design done on a specific date? You can trust us to
                deliver it on time. Once we commit to a date, we'll get it done.
              </p>
              <br />
              <p>
                Job requests will on average be delivered in a few business
                days. Simpler tasks such as graphic designs and revisions will
                be delivered within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
      <button css={contactUsButtons}>Contact Us</button>
    </div>
  );
}

export default App;
