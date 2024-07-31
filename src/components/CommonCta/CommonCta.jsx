import React from "react";
import { whitearrow } from "../../source";

const CommonCta = ({ ctaText }) => {
  return (
    <button className="common_cta">
      {ctaText}
      <img
        className="arrow_icon arrow_icon_1"
        src={whitearrow}
        alt="arrow icon"
      />
    </button>
  );
};

export default CommonCta;
