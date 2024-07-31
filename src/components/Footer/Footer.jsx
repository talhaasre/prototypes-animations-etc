import React from "react";
import { Link } from "react-router-dom";
import {
  homeURL,
  privacypolicyURL,
  termsandconditionURL,
} from "../../helpers/paths";
import {
  darklogo,
  darklogofallback,
  footercall,
  footerlocation,
  footermail,
  scrollup,
} from "../../source";
import "./footer.scss";

const Footer = () => {
  const today = new Date();
  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="footer_sec1">
        <div className="scroll_wrap" onClick={scrollHandler}>
          <img
            className="scrollup_img"
            src={scrollup}
            alt="arrow"
            loading="lazy"
            width="74"
            height="74"
          />
          <p className="scroll_text">Go To Top</p>
        </div>
        <div className="my_container">
          <div className="row footer_main">
            <div className="col-md-3 col-lg-3">
              <div className="logo_wrapper">
                <a href={homeURL}>
                  <picture>
                    <source srcset={darklogo} type="image/webp" />
                    <img
                      className="footer_logo"
                      onClick={scrollHandler}
                      src={darklogofallback}
                      alt="logo"
                    />
                  </picture>
                </a>
                {/* <p className="description">
                  Book your hassle-free stay with us, based on what suits you
                  best
                </p> */}

                {/* <div className="social_wrapper">
                  <a href="">
                    <img src={fbwhite} alt="" className="social_icon fb_icon" />
                  </a>
                  <a href="">
                    <img
                      src={instawhite}
                      alt=""
                      className="social_icon fb_icon"
                    />
                  </a>
                  <a href="">
                    <img src={ytwhite} alt="" className="social_icon fb_icon" />
                  </a>
                  <a href="">
                    <img
                      src={linkedinwhite}
                      alt=""
                      className="social_icon fb_icon"
                    />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Quick Links</h4>
                <ul className="link_list">
                  {/* <Link className="link" to="/">
                    <li>ABOUT US</li>
                  </Link> */}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Information</h4>
                <ul className="link_list">
                  <Link className="link" to={privacypolicyURL}>
                    <li>PRIVACY POLICY</li>
                  </Link>
                  <Link className="link" to={termsandconditionURL}>
                    <li>TERMS & CONDITIONS</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Contact Us</h4>
                <p className="description">
                  {" "}
                  {/* <a href="https://goo.gl/maps/NpaSgpoLRWkkLXkm8"> */}
                  <a href="https://goo.gl/maps/hYDfWJgLUkjZbJUL6">
                    <img
                      src={footerlocation}
                      alt="location"
                      className="location_icon"
                    />
                    Equinox Business Park, Ambedkar Nagar, Kurla West, Mumbai,
                    Maharashtra 400070
                  </a>
                </p>
                <ul className="link_list">
                  <a className="link" href="mailto:talhaasre786@gmail.com">
                    <li>
                      <img
                        src={footermail}
                        alt="location"
                        className="location_icon"
                      />
                      <div className="text_part">talhaasre786@gmail.com</div>
                    </li>
                  </a>
                  <a className="link" href="tel:+917506377907">
                    <li>
                      <img
                        src={footercall}
                        alt="location"
                        className="location_icon"
                      />
                      <div className="text_part">+917506377907</div>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_sec2">
        <div className="my_container">
          <div className="copyright_flex">
            <p className="copyright image_disclaimer">
              <span>
                Copyright © {today.getFullYear()} | All Rights Reserved by Talha
                Asre
              </span>
            </p>
            <p className="copyright">
              Crafted by{" "}
              <a
                className="togglehead_link"
                href="https://www.talhaasre.com/"
                target="_blank"
                rel="noreferrer"
              >
                Talha Asre
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
