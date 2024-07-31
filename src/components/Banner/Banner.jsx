import React from "react";
import { Link } from "react-router-dom";
import { homeURL } from "../../helpers/paths";
import "./banner.scss";

const Banner = ({ firstText, secondText }) => {
  return (
    <div className="banner">
      <div className="my_container">
        <div className="custom_breadcrumb">
          <Link className="home_url" to={homeURL}>
            Home
          </Link>{" "}
          | {firstText} {secondText}
        </div>
        <h1 className="banner_heading">
          {firstText} <span className="styled_text">{secondText}</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
