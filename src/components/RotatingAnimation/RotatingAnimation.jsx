import React from "react";
import "./rotatinganimation.scss";
import { lighteffectformat1 } from "../../source";
import { ReactImageTurntable } from "react-image-turntable";

const images = [
  "https://via.placeholder.com/1200x800?text=1",
  "https://via.placeholder.com/1200x800?text=2",
  "https://via.placeholder.com/1200x800?text=3",
];

const RotatingAnimation = () => {
  return (
    <>
      <div className="square-container">
        <img src={lighteffectformat1} alt="effect 1" className="square" />
        <div className="rotating-lib">
          <ReactImageTurntable images={images} />
        </div>
      </div>
    </>
  );
};

export default RotatingAnimation;
