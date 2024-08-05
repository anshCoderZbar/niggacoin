import React, { useEffect, useState } from "react";
import { ASSETS } from "../../img";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { allRounds } from "../../mock/Rounds";
import Countdown from "react-countdown";

export const Banner = () => {
  const { publicKey } = useWallet();

  // const countdownStartDate = new Date("2024-08-05T00:00:00");
  // const countdownEndDate = new Date(
  //   countdownStartDate.getTime() + 10 * 24 * 60 * 60 * 1000
  // ); // 10 days later
  // const cutoffDate = new Date("2024-08-17T00:00:00"); // Update cutoff date to match the countdown end

  // const [serverTime, setServerTime] = useState(null);

  // // Function to get time remaining until next midnight
  // useEffect(() => {
  //   // Fetch server time from an external API
  //   const fetchServerTime = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://worldtimeapi.org/api/timezone/Etc/UTC"
  //       );
  //       const data = await response.json();
  //       setServerTime(new Date(data.utc_datetime).getTime());
  //     } catch (error) {
  //       console.error("Failed to fetch server time:", error);
  //     }
  //   };

  //   fetchServerTime();
  // }, []);

  // // Function to get time elapsed since midnight using server time
  // const getElapsedTimeSinceMidnight = () => {
  //   if (!serverTime) return 0;
  //   const now = new Date(serverTime);
  //   const startOfDay = new Date(now);
  //   startOfDay.setUTCHours(0, 0, 0, 0); // Set to midnight of the current day UTC
  //   return now - startOfDay;
  // };

  // const [elapsedTime, setElapsedTime] = useState(getElapsedTimeSinceMidnight());

  // useEffect(() => {
  //   // Update elapsed time every second
  //   const interval = setInterval(() => {
  //     setElapsedTime(getElapsedTimeSinceMidnight());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [serverTime]);

  // const progressWidth = (elapsedTime / (24 * 60 * 60 * 1000)) * 100;

  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <span>Time's up!</span>;
  //   } else {
  //     return (
  //       <div id="timer">
  //         <div>{hours} h</div> <div>{minutes}m</div> <div>{seconds}s</div>
  //       </div>
  //     );
  //   }
  // };

  // const isCountdownVisible =
  //   serverTime && new Date(serverTime) >= countdownStartDate;

  // if (!serverTime) return null; // or some loading state

  const [serverTime, setServerTime] = useState(null);
  const cutoffDate = new Date("2024-08-17T00:00:00");

  useEffect(() => {
    // Fetch server time from an external API
    const fetchServerTime = async () => {
      try {
        const response = await fetch(
          "https://worldtimeapi.org/api/timezone/Etc/UTC"
        );
        const data = await response.json();
        setServerTime(new Date(data.utc_datetime).getTime());
      } catch (error) {
        console.error("Failed to fetch server time:", error);
      }
    };

    fetchServerTime();
  }, []);

  // Function to get time elapsed since midnight using server time
  const getElapsedTimeSinceMidnight = () => {
    if (!serverTime) return 0;
    const now = new Date(serverTime);
    const startOfDay = new Date(now);
    startOfDay.setUTCHours(0, 0, 0, 0); // Set to midnight of the current day UTC
    return now - startOfDay;
  };

  const [elapsedTime, setElapsedTime] = useState(getElapsedTimeSinceMidnight());

  useEffect(() => {
    // Update elapsed time every second
    const interval = setInterval(() => {
      setElapsedTime(getElapsedTimeSinceMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, [serverTime]);

  // Renderer for countdown timer
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

  // Calculate progress width based on elapsed time since midnight
  const progressWidth = (elapsedTime / (24 * 60 * 60 * 1000)) * 100; // 24 hours in milliseconds

  if (!serverTime) return null;

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

                {new Date(serverTime) >= new Date("2024-08-07T00:00:00") &&
                  new Date(serverTime) < cutoffDate && (
                    <>
                      <Countdown
                        date={Date.now() + (24 * 60 * 60 * 1000 - elapsedTime)}
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
