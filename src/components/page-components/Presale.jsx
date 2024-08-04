import React from "react";
import { ASSETS } from "../../img";
import { Rounds } from "./Rounds";

export const Presale = () => {
  return (
    <>
      <section className="presale section-padding" id="presale">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="main-heading">
                <h2
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  AFTER PRESALE
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <img
            src={ASSETS.LEFT_FLOWER}
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt=""
            className="left-flower"
          />
          <img
            src={ASSETS.RIGHT_FLOWER}
            data-aos="zoom-in"
            data-aos-duration="1000"
            alt=""
            className="right-flower"
          />
          <div className="col-xxl-5 col-lg-8 mx-auto mb-5">
            <div
              className="contact-address"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="contact-box-inner">
                <div className="d-flex align-items-center justify-content-lg-start justify-content-center">
                  <img className="mb-2" src={ASSETS.S_ICON} alt="" />
                  <h4 className="ms-3 fw-bold">$NGG</h4>
                </div>
                <h4>Smart contract address:</h4>
                {/* <!-- <p>AujTJJ7aMS8LDo3bFzoyXDwT3jBALUbu4VZhzZdTZLmG</p> --> */}
              </div>
              <div className="contact-footer">
                <p>
                  *Not for buying the coin. Don't send anything to it or they
                  will be lost forever.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="presale-box dex-box">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mb-4"
                  src={ASSETS.DEX}
                  alt=""
                />
                <h3 data-aos="fade-left" data-aos-duration="1000">
                  Buy on DEX
                </h3>
                <p data-aos="fade-left" data-aos-duration="1000">
                  Use your Phantom wallet and connect to Raydium or Jupiter to
                  buy $NGG
                </p>
                <ul>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={ASSETS.RADIUM} alt="" />
                    </a>
                    <span>(SOON)</span>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={ASSETS.DEX_SCREENNER} alt="" />
                    </a>
                    <span>(SOON)</span>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={ASSETS.JUPITER} alt="" />
                    </a>
                    <span>(SOON)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="presale-box">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mb-4"
                  src={ASSETS.BUY}
                  alt=""
                />
                <h3 data-aos="fade-left" data-aos-duration="1000">
                  How to Buy
                </h3>
                <p data-aos="fade-left" data-aos-duration="1000">
                  Check Our Tutorial, read FAQ, or simply use our WIKI
                </p>
                <ul>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <img src={ASSETS.NIGGA_COIN_BTN} alt="" />
                    </a>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#" className="btn btn-link">
                      Read Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="presale-box">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mb-4"
                  src={ASSETS.CEX}
                  alt=""
                />
                <h3 data-aos="fade-left" data-aos-duration="1000">
                  Buy on CEX
                </h3>
                <p data-aos="fade-left" data-aos-duration="1000">
                  $NGG will be Listed on most popular CEXes
                </p>
                <ul>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a
                      href="https://www.mexc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ASSETS.TBA} alt="" />
                    </a>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a
                      href="https://www.bitget.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ASSETS.TBA} alt="" />
                    </a>
                  </li>
                  <li
                    className="mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a
                      href="https://bingx.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ASSETS.TBA} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Rounds />
    </>
  );
};

{
  /* <div
  className="col position-relative"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <div className="bonus-box">
    <span className="badge">Round 2</span>
    <div className="d-flex align-items-center justify-content-start">
      <img className="me-3" src={ASSETS.BONUS_IMG} alt="" />
      <h3>+25%</h3>
    </div>
    <h4>19,999 SOL</h4>
    <span className="active-badge active-badge-txt">Active</span>
  </div>
</div>
<div
  className="col position-relative"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <div className="bonus-box sold-out-box">
    <span className="badge">Round 3</span>
    <div className="d-flex align-items-center justify-content-start">
      <img className="me-3" src={ASSETS.BONUS_IMG} alt="" />
      <h3>+15%</h3>
    </div>
    <h4>29,999 SOL</h4>
    <span className="active-badge">Upcoming</span>
  </div>
  <div className="sold-out"></div>
</div>
<div
  className="col position-relative"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <div className="bonus-box sold-out-box">
    <span className="badge">Round 4</span>
    <div className="d-flex align-items-center justify-content-start">
      <img className="me-3" src={ASSETS.BONUS_IMG} alt="" />
      <h3>+10%</h3>
    </div>
    <h4>39,999 SOL</h4>
    <span className="active-badge">Upcoming</span>
  </div>
  <div className="sold-out"></div>
</div>
<div
  className="col position-relative"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <div className="bonus-box sold-out-box">
    <span className="badge">Round 5</span>
    <div className="d-flex align-items-center justify-content-start">
      <img className="me-3" src={ASSETS.BONUS_IMG} alt="" />
      <h3>+5%</h3>
    </div>
    <h4>50,000 SOL</h4>
    <span className="active-badge">Upcoming</span>
  </div>
  <div className="sold-out"></div>
</div>*/
}
{
  /* <div className="row">
  <div className="col-lg-10 mx-auto">
    <div className="cstm-range-slider">
      <div className="range-slider">
        <div id="tooltip"></div>
        <input
          id="range"
          type="range"
          step="10"
          defaultValuez="200"
          min="500"
          max="5500"
        />
      </div>
    </div>
  </div>
</div> */
}
