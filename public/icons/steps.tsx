import React from "react";

const Steps = () => {
  return (
    <svg
      width="42"
      height="35"
      viewBox="0 0 42 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="3" width="28" height="28" rx="14" fill="#F0AD00" />
      <g filter="url(#filter0_b_2499_2888)">
        <rect
          onClick={() => console.log(1)}
          width="35"
          height="35"
          rx="17.5"
          fill="black"
          fill-opacity="0.5"
        />
        <rect
          onClick={() => console.log(2)}
          x="0.5"
          y="0.5"
          width="34"
          height="34"
          rx="17"
          stroke="url(#paint0_linear_2499_2888)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_2499_2888"
          x="-8"
          y="-8"
          width="51"
          height="51"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2499_2888"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2499_2888"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2499_2888"
          x1="-2.5"
          y1="35"
          x2="35"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Steps;
