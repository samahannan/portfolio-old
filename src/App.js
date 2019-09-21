import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faGithub, faHtml5, faJs, faBootstrap, faCss3, faSass} from "@fortawesome/free-brands-svg-icons";
import triggerHover from './js/main'
import Typewriter from 'typewriter-effect/dist/core';


function App() {
  window.onload = () => {
    triggerHover();
    new Typewriter('#typewriter', {
      strings: ['Dubai, UAE'],
      autoStart: true,
      loop: true
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, I'm <span className="name">samah<span></span></span>, a Front End developer currently based in <span id="typewriter"></span><br /><br />
          For the past 5 years I have been building interactive web apps, landing pages, small business and e-commerce websites  with a focus on site performance using the following tools:
        </h1>
        <ul className="skillsList">
          <li className="js-icon">
            <FontAwesomeIcon icon={faJs} />
            <span className="tooltip">javascript</span>
          </li>
          <li className="react-icon">
            <FontAwesomeIcon icon={faReact} />
            <span className="tooltip">react</span>
          </li>
          <li className="angular-icon">
            <FontAwesomeIcon icon={faAngular} />
            <span className="tooltip">angular</span>
          </li>
          <li className="jquery-icon">
            <h3>jQuery</h3>
            <span className="tooltip">jquery</span>
          </li>
          <li className="html-icon">
            <FontAwesomeIcon icon={faHtml5} />
            <span className="tooltip">html5</span>
          </li>
          <li className="css-icon">
            <FontAwesomeIcon icon={faCss3} />
            <span className="tooltip">css3</span>
          </li>
          <li className="sass-icon">
            <FontAwesomeIcon icon={faSass} />
            <span className="tooltip">sass</span>
          </li>
          <li className="bootstrap-icon">
            <FontAwesomeIcon icon={faBootstrap} />
            <span className="tooltip">bootstrap</span>
          </li>
          <li className="git-icon">
            <FontAwesomeIcon icon={faGithub} />
            <span className="tooltip">git</span>
          </li>

        </ul>
        <div className="contact">
          Feel free to reach out through <a href="mailto:samahannan@gmail.com">samahannan@gmail.com</a> for an overview of my projects
        or find me on <a rel="noopener noreferrer" href="http://www.linkedin.com/in/samahannan" target="_blank">linkedin</a>
        </div>

      </header>
    </div>
  );
}

export default App;
