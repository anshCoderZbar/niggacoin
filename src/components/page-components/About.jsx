import React from "react";
import { ASSETS } from "../../img";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-12 col-lg-6 position-relative">
            <img
              src={ASSETS.ASSETS_IMG}
              alt="Image"
              className="about-sec-image"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            />
          </div>
          <div className="col-12 col-lg-6 mb-lg-0 mb-5">
            <div
              className="about-txt"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <span>About NIGGACOIN</span>
              <h2>
                Welcome to NIGGACOIN – the cutting-edge meme coin on the Solana
                blockchain.
              </h2>
              <p className="mb-3">
                We merge innovation with a powerful cultural mission,
                celebrating Black excellence and driving financial empowerment.
              </p>
              <p className="mb-3">
                Invest in NIGGACOIN and join a community poised for growth and
                innovation.{" "}
              </p>
              <p>
                Together, we can create a new era of inclusive and dynamic
                digital currency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
