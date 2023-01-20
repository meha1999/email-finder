import React from "react";

interface DashboardProps {
  onClick: (arg0: number) => void;
  selected: number;
}
const Dashboard: React.FC<DashboardProps> = ({ onClick, selected }) => {
  return (
    <svg
      width="829"
      height="738"
      viewBox="0 0 829 738"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="1" width="829" height="737" fill="url(#pattern0)" />
      <g filter="url(#filter0_d_2503_2903)">
        <circle cx="528" cy="92" r="15" fill="#0D151D" />
        <circle
          onClick={() => onClick(1)}
          style={{ cursor: "pointer" }}
          cx="528"
          cy="92"
          r="14"
          stroke="#F0AD00"
          stroke-width="2"
        />
      </g>
      <circle
        onClick={() => onClick(2)}
        style={{ cursor: "pointer" }}
        cx="27"
        cy="175"
        r="14"
        fill="#0D151D"
        stroke="#F0AD00"
        stroke-width="2"
      />
      <circle
        onClick={() => onClick(3)}
        style={{ cursor: "pointer" }}
        cx="572.5"
        cy="173.5"
        r="14.5"
        fill="#0D151D"
        stroke="#F0AD00"
        stroke-width="2"
      />
      <circle
        onClick={() => onClick(4)}
        style={{ cursor: "pointer" }}
        cx="446.5"
        cy="301.5"
        r="14.5"
        fill="#0D151D"
        stroke="#F0AD00"
        stroke-width="2"
      />
      <circle
        onClick={() => onClick(5)}
        style={{ cursor: "pointer" }}
        cx="627"
        cy="402"
        r="14"
        fill="#0D151D"
        stroke="#F0AD00"
        stroke-width="2"
      />
      <circle
        onClick={() => onClick(6)}
        style={{ cursor: "pointer" }}
        cx="741"
        cy="546"
        r="14"
        fill="#0D151D"
        stroke="#F0AD00"
        stroke-width="2"
      />
      <circle
        onClick={() => onClick(1)}
        style={{ cursor: "pointer" }}
        cx="528"
        cy="92"
        r="9"
        fill={selected === 1 ? "#F0AD00" : "#2C2C2C"}
      />
      <circle
        onClick={() => onClick(2)}
        style={{ cursor: "pointer" }}
        cx="27"
        cy="175"
        r="9"
        fill={selected === 2 ? "#F0AD00" : "#2C2C2C"}
      />
      <circle
        onClick={() => onClick(3)}
        style={{ cursor: "pointer" }}
        cx="572.5"
        cy="173.5"
        r="9.5"
        fill={selected === 3 ? "#F0AD00" : "#2C2C2C"}
      />
      <circle
        onClick={() => onClick(4)}
        style={{ cursor: "pointer" }}
        cx="446.5"
        cy="301.5"
        r="9.5"
        fill={selected === 4 ? "#F0AD00" : "#2C2C2C"}
      />
      <circle
        onClick={() => onClick(5)}
        style={{ cursor: "pointer" }}
        cx="627"
        cy="402"
        r="9"
        fill={selected === 5 ? "#F0AD00" : "#2C2C2C"}
      />
      <circle
        onClick={() => onClick(6)}
        style={{ cursor: "pointer" }}
        cx="741"
        cy="546"
        r="9"
        fill={selected === 6 ? "#F0AD00" : "#2C2C2C"}
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2503_2903"
            transform="translate(0 -0.000622838) scale(0.000620732 0.000698219)"
          />
        </pattern>
        <filter
          id="filter0_d_2503_2903"
          x="483"
          y="57"
          width="90"
          height="90"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00392157 0 0 0 0 0.509804 0 0 0 0 0.945098 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2503_2903"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2503_2903"
            result="shape"
          />
        </filter>
        <image
          id="image0_2503_2903"
          width="1611"
          height="1434"
        />
      </defs>
    </svg>
  );
};
export default Dashboard;