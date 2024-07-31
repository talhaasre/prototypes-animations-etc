import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import { homeURL } from "../../helpers/paths";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner firstText="Page Not" secondText="Found" />
      <section className="notfound_sec1">
        <div className="my_container">
          <div
            className="flex_box text-center"
            style={{ paddingTop: 50, paddingBottom: 50 }}
          >
            <h1 className="title">404</h1>
            <h5
              className="subtitle"
              style={{ paddingTop: 20, paddingBottom: 20 }}
            >
              PAGE NOT FOUND
            </h5>
            <h6 className="desc" style={{ paddingBottom: 20 }}>
              Sorry, the page you're looking for doesn't exist.
            </h6>
            <h6 className="cta_wrapper">
              <a href={homeURL}>Go back to Homepage</a>
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
