import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";

import "../styles/App.css";

export default function PortfolioTitle() {
  return (
    <section className="title-ctn">
      <div className="title-networks-ctn">
        <a
          href="https://www.linkedin.com/in/d-pennehouat-jsreact/"
          className="title-networks-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            className="logo-networks"
            alt="logo linkedin"
          ></img>
        </a>
        <a
          href="https://github.com/Del83"
          className="title-networks-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="logo-networks" alt="logo github"></img>
        </a>
        <a
          href="https://twitter.com/mademoiselledev"
          className="title-networks-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} className="logo-networks" alt="logo twitter"></img>
        </a>
      </div>
      <div className="title-box-ctn">
        <div className="title-box">
          <h1 className="title tracking-in-contract-bck-top">PORTFOLIO</h1>
          <div className="title-box-identity">
            <h2 className="title-name">Delphine PENNEHOUAT</h2>
            <h3 className="title-function">
              Développeuse Front End - Javascript / React
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
