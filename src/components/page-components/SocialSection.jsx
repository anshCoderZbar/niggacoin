import React from "react";
import { ASSETS } from "../../img";

export const SocialSection = () => {
  return (
    <section className="social-section section-padding" id="connect">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="about-txt text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <span className="text-uppercase">niggacoin Community</span>
              <h2>
                Connect with us on social media for the latest
                <br />
                updates and announcements.
              </h2>
            </div>
            <div className="social-icons mt-5 pt-lg-4">
              <ul className="social-icons-box d-flex align-items-center justify-content-between mx-auto">
                <li className="text-center">
                  <a href="#">
                    <img
                      className="mb-3"
                      src={ASSETS.TWITTER_ICON}
                      alt="Twitter"
                    />
                    <p>Twitter</p>
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="https://t.me/niggacoinmeme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mb-3"
                      src={ASSETS.TELEGRAM_ICON}
                      alt="Telegram"
                    />
                    <p>Telegram</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
