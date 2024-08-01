import React from "react";

const CircularProgressBar = ({ sqSize, strokeWidth, percentage }) => {
  // Size of the enclosing square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <defs>
        <clipPath id="circleView">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      {/* <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text> */}
      {/* <image
        width="200"
        height="200"
        xlinkHref="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/240px-SVG_Logo.svg.png"
        clip-path="url(#circleView)"
      /> */}
    </svg>
  );
};

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 10,
};

export default CircularProgressBar;
