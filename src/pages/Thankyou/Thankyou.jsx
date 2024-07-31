import React, { useEffect, useState } from "react";
import { whitearrow } from "../../source";
import { circle } from "../../source";
import "./thankyou.scss";

const Thankyoupage = () => {
  const [receive, setReceived] = useState(false);

  const receiveHandler = () => {
    setReceived(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="my_container">
        <div className={`thank_sec1 ${receive === true ? "disabled" : ""}`}>
          <img className="circle_icon" src={circle} alt="circle" />
          <h3 className="thank_text" onClick={receiveHandler}>
            <span className="red"> Thank You! </span>{" "}
            <span className="mobile_text">
              We have received your deposit fee.
            </span>{" "}
            <br />
            To confirm your spot, go ahead and pay your 6 months rent of
            250,000/-
          </h3>

          <div className="thank_btn">
            <div className="row">
              <div className="col-md-6 pay_now">
                <button className="common_cta pay_text">
                  PAY NOW
                  <img
                    className="arrow_icon arrow_icon_1"
                    src={whitearrow}
                    alt="arrow icon"
                  />
                </button>
              </div>

              <div className="col-md-6 pay_now">
                <button className="common_cta pay_text">
                  PAY LATER
                  <img
                    className="arrow_icon arrow_icon_1"
                    src={whitearrow}
                    alt="arrow icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my_container">
        <div className={`thank_sec2 ${receive === true ? "enable" : ""}`}>
          <img className="circle_icon" src={circle} alt="circle" />
          <h3 className="thank_text">
            <span className="red"> Thank You! </span>{" "}
            <span className="mobile_text">
              We have received your 6 months rent.{" "}
            </span>
            <br />
            Your seat has been confirmed.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Thankyoupage;
