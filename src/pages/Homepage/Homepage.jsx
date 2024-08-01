import React, { useEffect } from "react";
import RotatingAnimation from "../../components/RotatingAnimation/RotatingAnimation";
import UnfoldCards from "../../components/UnfoldCards/UnfoldCards";
import CircularProducts from "../../components/CircularProducts/CircularProducts";
import RadialProgressBar from "../../components/RadialProgressBar/RadialProgressBar";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="home_sec1">
        <div className="my_container mw-100">
          <UnfoldCards />
        </div>
        <div className="my_container mw-100">
          <CircularProducts />
        </div>
        <div className="my_container mw-100">
          <RadialProgressBar />
        </div>
        <div className="my_container mw-100">
          <RotatingAnimation />
        </div>
      </section>
    </>
  );
};

export default Homepage;
