import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { allRounds } from "../../mock/Rounds";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ASSETS } from "../../img";

export const Rounds = () => {
  const { publicKey } = useWallet();
  const currentDate = new Date();

  // Define a 24-hour period duration
  const countdownDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Initialize countdown state
  const [timeLeft, setTimeLeft] = useState(countdownDuration);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date(currentDate.getTime() + countdownDuration);
      const difference = endTime - currentDate;
      if (difference > 0) {
        setTimeLeft(difference);
      } else {
        setTimeLeft(0);
      }
    };

    // Calculate time left initially and set up interval
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentDate]);

  // Calculate progress based on time left
  const progressPercentage = (timeLeft / countdownDuration) * 100;

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
        <Swiper spaceBetween={10} slidesPerView={5}>
          {allRounds?.map((round) => {
            // Determine round status based on currentDate
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
                  }`}
                >
                  <span className="badge">{round.rounds}</span>
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <img className="me-3" src={ASSETS.BONUS_IMG} alt="" /> */}
                    <h3>Duration 24 hours</h3>
                  </div>
                  <h4>1 Sol = {round.value}</h4>
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
        <div
          className="progress mt-5"
          role="progressbar"
          aria-label="Animated striped example"
        >
          <div
            className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { allRounds } from "../../mock/Rounds";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { ASSETS } from "../../img";

// export const Rounds = () => {
//   const { publicKey } = useWallet();
//   const currentDate = new Date();

//   return (
//     <section className="bonus-section section-padding">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <div className="main-heading text-center">
//               <h2
//                 data-aos="fade-down"
//                 data-aos-duration="1000"
//                 className="mb-4"
//               >
//                 PRESALE BONUSES ON EACH ROUND!
//               </h2>
//               <p data-aos="fade-down" data-aos-duration="1000">
//                 Unallocated round coins - WILL BE BURNED!
//                 <br />
//                 Maximum Investment: 200 SOL | Minimum Investment: 0.1 SOL
//               </p>
//             </div>
//             <div
//               className="Eos-txt-bx"
//               data-aos="zoom-in"
//               data-aos-duration="1500"
//               data-aos-once="true"
//             >
//               <div className="token-address-box">
//                 <div className="token-numb">
//                   <input type="text" defaultValue={publicKey} readOnly />
//                 </div>
//                 <button
//                   onClick={() => navigator.clipboard.writeText(publicKey)}
//                 >
//                   Copy
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Swiper spaceBetween={10} slidesPerView={5}>
//           {allRounds?.map((round) => {
//             // Determine round status based on currentDate
//             let status = "Upcoming"; // Default status
//             if (currentDate >= round.active && currentDate <= round.expire) {
//               status = "Active";
//             } else if (currentDate > round.expire) {
//               status = "Closed";
//             }

//             return (
//               <SwiperSlide key={round.id} className="position-relative">
//                 <div
//                   className={`bonus-box ${
//                     status === "Closed" ? "sold-out-box" : ""
//                   }`}
//                 >
//                   <span className="badge">{round.rounds}</span>
//                   <div className="d-flex align-items-center justify-content-center">
//                     {/* <img className="me-3" src={ASSETS.BONUS_IMG} alt="" /> */}
//                     <h3>Duration 24 hours</h3>
//                   </div>
//                   <h4>1 Sol = {round.value}</h4>
//                   <span className={`active-badge ${status.toLowerCase()}`}>
//                     {status}
//                   </span>
//                 </div>
//                 {status === "Closed" && (
//                   <div className="sold-out">
//                     <img src={ASSETS.SOLD_OUT_IMG} alt="Sold Out" />
//                   </div>
//                 )}
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//         <div
//           className="progress mt-5"
//           role="progressbar"
//           aria-label="Animated striped example"
//         >
//           <div
//             className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
//             style={{ width: "75%" }}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };
