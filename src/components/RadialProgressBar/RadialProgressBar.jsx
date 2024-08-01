import React, { useState } from "react";
import "./radialprogressbar.scss";
import CircularProgressBar from "./CircularProgressBar";

const RadialProgressBar = () => {
  const [progressStart, setProgressStart] = useState(false);
  const [progressCount, setProgressCount] = useState(0);

  return (
    <>
      <div className="radial_boxes">
        <div class="set-size charts-container">
          <div
            class={`pie-wrapper progress-30 ${progressStart && "active"}`}
            style={{ "$progress-count": progressCount }}
            onClick={() => setProgressStart((prev) => !prev)}
          >
            <span class="label">
              30<span class="smaller">%</span>
            </span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
          </div>
        </div>

        <div onClick={() => setProgressCount(80)}>
          <CircularProgressBar
            strokeWidth={10}
            sqSize={200}
            percentage={progressCount}
          />
        </div>

        <div class="wid-container">
          <div class="ui-widgets">
            <div class="ui-values">50%</div>
            <div class="ui-labels">HTML</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadialProgressBar;
