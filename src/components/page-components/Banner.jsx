import React, { useEffect, useState } from "react";
import { ASSETS } from "../../img";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { allRounds } from "../../mock/Rounds";
import Countdown from "react-countdown";

export const Banner = () => {
  const { publicKey } = useWallet();

  const cutoffDate = new Date("2024-08-14T00:00:00");
  const [progressWidth, setProgressWidth] = useState(0); // Start with empty width

  // Function to get time remaining until next midnight
  const getTimeUntilMidnight = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0); // Set to midnight of the next day
    return endOfDay - now;
  };

  const [countdownDuration, setCountdownDuration] =
    useState(getTimeUntilMidnight);

  useEffect(() => {
    // Update countdown duration and progress width every second
    const interval = setInterval(() => {
      const remainingTime = getTimeUntilMidnight();
      const totalTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      setCountdownDuration(remainingTime);
      setProgressWidth(((totalTime - remainingTime) / totalTime) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <div id="timer">
          <div>{hours} h</div> <div>{minutes}m</div> <div>{seconds}s</div>
        </div>
      );
    }
  };

  return (
    <>
      <section className="banner-img">
        <div className="container">
          <div className="row justify-content-between position-relative">
            <div className="col-lg-5">
              <div className="banner-left-img">
                <img src={ASSETS.BANNER_IMG} alt="banner" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-form">
                <div className="main-heading">
                  <h2 className="text-center mb-4 text-uppercase">
                    Until Next Round
                  </h2>
                </div>

                {new Date() < cutoffDate && (
                  <>
                    <Countdown
                      date={Date.now() + countdownDuration}
                      renderer={renderer}
                    />

                    <div
                      className="progress my-4"
                      role="progressbar"
                      aria-label="Animated striped example"
                    >
                      <div
                        className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                        style={{ width: `${progressWidth}%` }}
                      ></div>
                    </div>
                  </>
                )}

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
            <div className="bubble_body">
              {allRounds?.map((elm, i) => {
                const currentDate = new Date();
                let status = "Upcoming";
                if (currentDate >= elm.active && currentDate <= elm.expire) {
                  status = "Active";
                } else if (currentDate > elm.expire) {
                  status = "Closed";
                }
                return (
                  currentDate >= elm.active &&
                  currentDate <= elm.expire && (
                    <div
                      key={i}
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="position-relative "
                    >
                      <img src={ASSETS.BUBBLE} alt="bubble" />
                      <div className="bubble_text">
                        <h3>{elm.rounds}</h3>
                        <p>1 Sol</p>
                        <p>=</p>
                        <p className="text_red">{elm.value}</p>
                      </div>
                    </div>
                  )
                );
              })}
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
