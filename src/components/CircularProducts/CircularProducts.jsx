import React from "react";
import "./circularproducts.scss";

const CircularProducts = () => {
  return (
    <section class="main-container">
      <div class="main">
        <div class="big-circle">
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
              alt="web design icon"
            />
          </div>
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
              alt="game design icon"
            />
          </div>
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
              alt="game dev icon"
            />
          </div>
          {/* <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
              alt="ui-ux icon"
            />
          </div>
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
              alt="game design icon"
            />
          </div>
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
              alt="game dev icon"
            />
          </div>
          <div class="icon-block">
            <img
              src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
              alt="ui-ux icon"
            />
          </div> */}
        </div>
        <div class="center-logo">text at center</div>
      </div>
    </section>
  );
};

export default CircularProducts;
