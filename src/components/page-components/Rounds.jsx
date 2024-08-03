import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { allRounds } from "../../mock/Rounds";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ASSETS } from "../../img";
import Countdown from "react-countdown";

import { Pagination } from "swiper/modules";

import "swiper/css/pagination";

export const Rounds = () => {
  const { publicKey } = useWallet();

  const cutoffDate = new Date("2024-08-14T00:00:00");

  // Function to get time remaining until next midnight
  const getTimeUntilMidnight = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0); // Set to midnight of the next day
    return endOfDay - now;
  };

  const [countdownDuration, setCountdownDuration] =
    useState(getTimeUntilMidnight);

  const [progressWidth, setProgressWidth] = useState(100); // Start with full width

  useEffect(() => {
    // Update countdown duration and progress width every second
    const interval = setInterval(() => {
      const remainingTime = getTimeUntilMidnight();
      setCountdownDuration(remainingTime);
      setProgressWidth((remainingTime / (24 * 60 * 60 * 1000)) * 100); // 24 hours in milliseconds
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Renderer for countdown timer
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <span>
          {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <section className="bonus-section section-padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="main-heading text-center">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="mb-4"
              >
                PRESALE BONUSES ON EACH ROUND!
              </h2>
              <p data-aos="fade-down" data-aos-duration="1000">
                Unallocated round coins - WILL BE BURNED!
                <br />
                Maximum Investment: 200 SOL | Minimum Investment: 0.1 SOL
              </p>
            </div>
            <div
              className="Eos-txt-bx"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="token-address-box">
                <div className="token-numb">
                  <input type="text" defaultValue={publicKey} readOnly />
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(publicKey)}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
        >
          {allRounds?.map((round) => {
            const currentDate = new Date();
            let status = "Upcoming"; // Default status
            if (currentDate >= round.active && currentDate <= round.expire) {
              status = "Active";
            } else if (currentDate > round.expire) {
              status = "Closed";
            }

            return (
              <SwiperSlide key={round.id} className="position-relative">
                <div
                  className={`bonus-box ${
                    status === "Closed" ? "sold-out-box" : ""
                  }
                  
                  `}
                  style={{
                    borderColor: status === "Upcoming" ? "#484646" : "#FB0001",
                  }}
                >
                  <span className="badge">{round.rounds}</span>
                  <div
                    style={{
                      background: status === "Upcoming" && " #484646",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <h3>Duration 24 hours</h3>
                  </div>
                  <h4 className="d-flex justify-content-center gap-2 align-items-center">
                    <span>1 Sol =</span>
                    <span>
                      <img
                        className="round_min"
                        src={ASSETS.MIN_LOGO}
                        alt="Logo"
                      />{" "}
                      {round.value}
                    </span>
                  </h4>
                  <span className={`active-badge ${status.toLowerCase()}`}>
                    {status}
                  </span>
                </div>
                {status === "Closed" && (
                  <div className="sold-out">
                    <img src={ASSETS.SOLD_OUT_IMG} alt="Sold Out" />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {new Date() < cutoffDate && (
          <div className="position-relative">
            <div
              className="progress mt-3"
              role="progressbar"
              aria-label="Animated striped example"
            >
              <div
                className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
            <div
              className={`countdown-timer mt-3 text-center ${
                progressWidth > 56 ? "text-white" : "text-black"
              }`}
            >
              <p>Time Remaning:</p>
              <Countdown
                date={Date.now() + countdownDuration}
                renderer={renderer}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
