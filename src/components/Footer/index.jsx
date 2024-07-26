import React from "react";
import { ASSETS } from "../../img";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container cstm-revolution-container">
        <div className="row">
          <div className="col-12">
            <div
              className="about-txt"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <p>
                "Uniting our strength to write a new history, the revolution of
                $NIGGA!"
              </p>
              <p>
                RISK WARNING: Trading cryptocurrencies involves significant risk
                and potential loss. Only invest what you can afford to lose.
                This is not investment advice.
              </p>
              <p>
                LEGAL DISCLAIMER: $NIGGA is a meme coin with no intrinsic value
                or financial return expectation, for entertainment only.
                Extremely volatile. Conduct thorough research. By trading or
                purchasing $NIGGA, you acknowledge this disclaimer.
              </p>
              <p>
                Not intended for use in jurisdictions where prohibited by law.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cstm-container">
        <div className="footer-row">
          <div className="footer-description">
            <img src={ASSETS.FOOTER_LOGO} alt="Logo" />
            <p>
              Niggacoin is an audacious project that challenges conventional
              norms with innovative rebellion. It attracts a passionate
              community that embraces chaos as a driving force for
              transformative change.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-href">
              <h2>Navigate</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Soon</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Connect</a>
                </li>
              </ul>
            </div>

            <div className="footer-href">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/niggacoinmeme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telegram"></i> Telegram
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@niggacoin.vip">
                    <i className="bi bi-envelope-fill"></i> hello@niggacoin.vip
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          © Copyright 2024, All Rights Reserved by Niggacoin
        </div>
      </div>
    </footer>
  );
};
