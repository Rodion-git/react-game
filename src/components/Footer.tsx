import React from "react";

import "./Footer.css";
import logo from "../assets/images/GitHub.png";
import rs_school from "../assets/images/rs_school_js.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__block">
        <div className="rs_school">
          <a className="rs_school__link" href="https://rs.school/js/">
            <img className="rs_school__image" alt="" src={rs_school} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/Rodion-git">
            <img alt="iamge github" src={logo} />
          </a>
        </div>
        <div className="footer-info">
          <span>React-Game 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
