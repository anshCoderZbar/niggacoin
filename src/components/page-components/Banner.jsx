import React, { useCallback, useEffect, useState } from "react";
import { ASSETS } from "../../img";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Banner = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { publicKey } = useWallet();

  useEffect(() => {
    const updateTimer = () => {
      const future = Date.parse("July 31, 2024 11:30:00");
      const now = new Date();
      const diff = future - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor(diff / (1000 * 60));
      const secs = Math.floor(diff / 1000);

      setTime({
        days,
        hours: hours - days * 24,
        minutes: mins - hours * 60,
        seconds: secs - mins * 60,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="banner-left-img">
                <img src={ASSETS.BANNER_IMG} alt="banner" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-form">
                <div className="main-heading">
                  <h2 className="text-center mb-4 text-uppercase">
                    Until Next Round
                  </h2>
                </div>
                <div id="timer">
                  <div>
                    {time.days}
                    <span>days</span>
                  </div>
                  <div>
                    {time.hours}
                    <span>hours</span>
                  </div>
                  <div>
                    {time.minutes}
                    <span>minutes</span>
                  </div>
                  <div>
                    {time.seconds}
                    <span>seconds</span>
                  </div>
                </div>
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-lg-12">
                      <div className="cstm-range-slider">
                        <div className="range-slider">
                          <div id="tooltip" style={{ left: "calc(0% + 16px)" }}>
                            <span>78%</span>
                          </div>
                          <input
                            id="range"
                            type="range"
                            step="10"
                            defaultValue="200"
                            min="568717"
                            max="650000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form action="">
                  <div className="row mb-4">
                    <div className="col-lg-7">
                      <label htmlFor="">Amount in</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="col-lg-5">
                      <label htmlFor="">&nbsp;</label>
                      <div className="intigrate-span">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="$0"
                        />
                        <img src={ASSETS.SOL} alt="solana" />
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7">
                      <label htmlFor="">You get $NIGGACOIN</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="col-lg-5">
                      <label htmlFor="">&nbsp;</label>
                      <div className="intigrate-span intigrate-span2">
                        <input type="number" className="form-control" />
                        <img src={ASSETS.NIGGA_COIN} alt="" />
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  className="contact-address aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="contact-box-inner">
                    <h5 className="fw-bold">
                      You can complete your purchase by sending Solana directly
                      from your Web3 wallet to the smart contract address
                    </h5>
                    <div
                      className="Eos-txt-bx aos-init aos-animate"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      <div className="token-address-box">
                        <div className="token-numb">
                          <input type="text" defaultValue={publicKey} />
                        </div>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(publicKey)
                          }
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="header-btn">
                      <div className="btn btn-primary btn_line">
                        <WalletMultiButton
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      </div>

                      <a
                        href="https://wiki.niggacoin.vip"
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Transaction History
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-line">
        <div
          className="marquee marquee-first"
          style={{ backgroundColor: "#FFFFA0" }}
        >
          <div className="marquee--inner">
            <span>
              <div className="bbobbi-tx">
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN
              </div>
            </span>
            <span>
              <div className="bbobbi-tx">
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" /> $NIGGACOIN
                <img src={ASSETS.STAR} alt="" />
                $NIGGACOIN
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
