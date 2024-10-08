import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "components/Button";
import formatNumbers from "utils/formatNumbers";
import { motion } from "framer-motion";

export default function Hero(props) {
  function showMostPicked() {
    //saat button diklik, scroll ke section most picked dan tampilannya tidak terlalu menempel dengan atas browser
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <motion.section
      className="container pt-4"
      initial={{ opacity: 0, y: 50 }}  // Mulai dari opacity 0 dan bergerak dari bawah
      animate={{ opacity: 1, y: 0 }}  // Animasi ke opacity 1 dan posisi normal
      transition={{ duration: 0.8 }}  // Durasi animasi
    >
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br />
            Start Nect Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments
          </p>
          <Button
            className="btn px-5"
            style={{ backgroundColor: "blue", color: "white", height: 50, borderRadius: 5 }}
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumbers(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumbers(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumbers(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
