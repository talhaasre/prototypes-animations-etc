import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner firstText="Hello" secondText="World!" />

      <section className="home_sec1">
        <div className="my_container">
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
          <h1 className="heading">Hello World!</h1>
        </div>
      </section>
    </>
  );
};

export default Homepage;
